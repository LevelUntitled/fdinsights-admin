import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";
import {Status} from "../../../../node_modules/.prisma/client/index";

const inputDataValidations = z.object({
    id: z.number(),
    name : z.string().optional(),
    desc: z.string().optional(),
    status: z.nativeEnum(Status).optional(),
    users : z.object({
        ids : z.number().array().optional(),
        name : z.string().array().optional()
    })  
})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const updateDisciplines = async(req:NextApiRequest, res:NextApiResponse) => {
    try{
        
        let sanitizedInput = validateInputData(req.body);

        const updatedResult = await prisma.disciplines.update({
            where : {
                id: sanitizedInput.id
            },
            data: {
                name    : sanitizedInput.name,
                desc : sanitizedInput.desc,
                status  : sanitizedInput.status,
                users : sanitizedInput.users
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

export default updateDisciplines;