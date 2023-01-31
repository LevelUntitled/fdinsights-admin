import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const getAllClient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getAllActive = await prisma.fDClient.findMany({
      where: {
        status: "ACTIVE",
      },
      select: {
        company: true,
        logo: true,
        industry: true,
        addLine1: true,
        addLine2: true,
        city: true,
        postcode: true,
        state: true,
        fiscalStart: true,
        fiscalEnd: true,
        subStart: true,
        subEnd: true,
        notes: true,
        subDomain: true,
        id: true,
        status: true,
      },
    });

    res.status(200).json({
      status: "SUCCESS",
      error: "FALSE",
      data: getAllActive,
      code: 200,
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "FAILED",
      error: "TRUE",
      code: 400,
    });
  }
};

export default getAllClient;
