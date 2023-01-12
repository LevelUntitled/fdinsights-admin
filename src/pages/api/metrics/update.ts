import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";
import {Status} from '../../../../node_modules/.prisma/client/index';

const inputDataValidations = z.object({
    id     : z.number(),
    name   : z.string().min(1).optional(),
    desc: z.string().min(1).max(60).optional(),
    category: z.string().optional() ,
    status :  z.nativeEnum(Status).optional(),
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};



const updateMarket = async(req: NextApiRequest, res: NextApiResponse) => {
    try{

        let sanitizedInput = validateInputData(req.body);
        
        const updatedResult = await prisma.metrics.update({
            where : {
                metricId : sanitizedInput.id,
            },
            data : {
                metricName    : sanitizedInput.name,
                metricDescription : sanitizedInput.desc,
                metricStatus  : sanitizedInput.status,
                metricCategory : sanitizedInput.category
            }
        })
        res.status(200).json({
            code : 200,
            status : "PASSED",
            error  : "FALSE",
            data   : updatedResult
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

export default updateMarket;