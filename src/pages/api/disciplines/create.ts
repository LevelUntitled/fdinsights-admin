import { type NextApiRequest, type NextApiResponse } from "next";
import {z} from 'zod';
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
    name         : z.string().min(1),
    desc         : z.string().min(5),
    parentClient : z.string()

})

const validateInputData = (inputs: unknown) => {
    const isValidData = inputDataValidations.parse(inputs);
    return isValidData;
};

const createDiscipline = async(req:NextApiRequest, res:NextApiResponse) => {
    try{

        let sanitizedInput = validateInputData(req.body);
        const result = await prisma.disciplines.create({
            data: {
                name : sanitizedInput.name,
                desc : sanitizedInput.desc,
                parentClient : sanitizedInput.parentClient
            }
        })

        let arr = prisma.fDClient.findUnique({
            where : {
                id : sanitizedInput.parentClient
            }
        })

        console.log(arr);

        // prisma.fDClient.update({
        //     where : {
        //         id : sanitizedInput.parentClient
        //     },
        //     data : {

        //     }
        // })

        // console.log(result.id);
        

        res.status(200).json({
            status : "SUCCESS",
            error  : "FALSE",
            data   : result,
            code   : 200
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

export default createDiscipline;