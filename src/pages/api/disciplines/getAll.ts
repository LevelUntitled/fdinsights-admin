import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const getAll = async(req:NextApiRequest, res:NextApiResponse) => {
    try{
        const getAllActive = await prisma.disciplines.findMany({
            where: {
                status : 'ACTIVE'
            }
        })

        res.status(200).json({
            status : "SUCCESS",
            error  : "FALSE",
            data   : getAllActive,
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

export default getAll;