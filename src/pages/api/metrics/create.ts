import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    name   : z.string().min(1),
    desc: z.string().min(1).max(60),
    category  : z.string(),
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    
    return isValidData;
};

const createMetric = async(req:NextApiRequest, res :NextApiResponse) => {
    
    try{
        let sanitizedInput = validateInputData(req.body);

        const result = await prisma.metrics.create({
            data : {
                metricName : sanitizedInput.name,
                metricDescription: sanitizedInput.desc,
                metricCategory : sanitizedInput.category
            }
        })        

        res.status(200).json({
            code   : 200,
            status : "PASSED",
            error  : "FALSE",
            data   : result
        })
        

    }catch(err){
        console.log(err);

        res.status(400).json({
            status : "FAILED",
            error  : "TRUE",
            code   : 400
        })
        
    }
}

export default createMetric;