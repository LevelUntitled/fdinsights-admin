import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    name : z.string().min(2),
    desc : z.string().min(1),
    type : z.string().min(1)
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const createElement = async(req: NextApiRequest, res: NextApiResponse) => {
    try{
        let sanitizedInput = validateInputData(req.body);
        const newChannel = await prisma.channel.create({
            data: {
                name : sanitizedInput.name,
                desc : sanitizedInput.desc,
                type : sanitizedInput.type,
            }
        })

        res.status(200).json({
            code : 200,
            status : "PASSED",
            error  : "FALSE",
            data   : newChannel
        });

    }catch(err){
        console.log(err);
        
        res.status(400).json({
            status : "FAILED",
            error  : "TRUE",
            code   : 400
        })
    }
}

export default createElement;