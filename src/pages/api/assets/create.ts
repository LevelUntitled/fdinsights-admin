import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    name : z.string().min(1),
    category: z.string().min(3),
    type: z.string(),
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const createAsset = async(req:NextApiRequest, res:NextApiResponse) => {
    try{
        let sanitizedInput = validateInputData(req.body);
        const newAsset = await prisma.assets.create({
            data: {
                name    : sanitizedInput.name,
                category: sanitizedInput.category,
                type    : sanitizedInput.type
            }
        })

        res.status(200).json({
            status : "SUCCESS",
            error  : "FALSE",
            data   : newAsset,
            code   : 200            
        })


    }catch(err){
        console.log(err);
        res.status(500).json({
            status : "FAILED",
            error  : "TRUE",
            code   : 400            
        })
    }
}

export default createAsset;