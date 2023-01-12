import { NextApiRequest , NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

const getAll = async( req:NextApiRequest, res:NextApiResponse ) => {
    try{
        const getAllActive = await prisma.metrics.findMany({
            where: {
                metricStatus : 'ACTIVE'
            },
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
            code : 400,
            error : "TRUE",
            status : "FAILED"
        })
    }
}

export default getAll;