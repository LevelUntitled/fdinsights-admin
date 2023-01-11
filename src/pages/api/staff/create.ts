import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    jobTitle : z.string(),
    expInYrs : z.number(),
    abbrevations : z.string(),
    description : z.string(),
    alternativeTitles : z.string(),
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const createStaff = async(req: NextApiRequest , res: NextApiResponse ) => {
    try{
        let sanitizedInput = validateInputData(req.body);
        const newStaff = await prisma.staff.create({
            data : {
                jobTitle : sanitizedInput.jobTitle,
                expInYrs : sanitizedInput.expInYrs,
                abbrevations : sanitizedInput.abbrevations,
                description : sanitizedInput.description,
                alternativeTitles : sanitizedInput.alternativeTitles,
            }
        })

        res.status(200).json({
            code : 200,
            status : "PASSED",
            error  : "FALSE",
            data   : newStaff
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

export default createStaff;