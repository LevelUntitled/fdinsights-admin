import { Status } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    name: z.string(),
    desc: z.string(),
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const createChannel = async(req:NextApiRequest , res:NextApiResponse ) => {
    try{
        let sanitizedInput = validateInputData(req.body);
        const newChannel = await prisma.channel.create({
            data: {
                name : sanitizedInput.name,
                desc : sanitizedInput.desc,
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

export default createChannel;