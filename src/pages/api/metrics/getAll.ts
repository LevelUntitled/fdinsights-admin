import { NextApiRequest , NextApiResponse } from "next";
import {prisma} from "../../../server/db/client";

const getAll = async( req:NextApiRequest, res:NextApiResponse ) => {
    try{
        const getAllActive = await prisma.metrics


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