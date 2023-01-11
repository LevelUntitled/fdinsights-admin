import { Status } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    id: z.number(),
    name : z.string().min(1).optional(),
    desc : z.string().min(1).optional(),
    type : z.string().optional(),
    status: z.nativeEnum(Status).optional()
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const updatedElements = async(req:NextApiRequest, res:NextApiResponse) => {
    try{

        const sanitizedInput = validateInputData(req.body);
        const updatedResults = prisma.assets.update({
            where: {
                id : sanitizedInput.id
            },
            data : {
                name : sanitizedInput.name,
                desc : sanitizedInput.desc,
                type : sanitizedInput.type,
                status : sanitizedInput.status
            }
        })

        res.status(200).json({
            code : 200,
            status : "PASSED",
            error  : "FALSE",
            data   : updatedResults
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

export default updatedElements;