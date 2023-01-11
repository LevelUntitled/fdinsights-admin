import { Status } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    id: z.number(),
    jobTitle : z.string().optional(),
    expInYrs : z.number().optional(),
    abbrevations : z.string().optional(),
    description : z.string().optional(),
    alternativeTitles : z.string().optional(),
    status : z.nativeEnum(Status).optional()
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const updateStaff = async(req:NextApiRequest, res:NextApiResponse) => {
    try{

        const sanitizedInput = validateInputData(req.body);
        const updatedResults = prisma.assets.update({
            where: {
                id : sanitizedInput.id
            },
            data : {
                jobTitle : sanitizedInput.jobTitle,
                expInYrs : sanitizedInput.expInYrs,
                abbrevations : sanitizedInput.abbrevations,
                description : sanitizedInput.description,
                alternativeTitles : sanitizedInput.alternativeTitles,
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

export default updateStaff;