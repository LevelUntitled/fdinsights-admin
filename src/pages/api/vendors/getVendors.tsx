import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const getVendors = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const vendors = await prisma.vendors.findMany();
    res.status(200).json({
      status: "success",
      data: vendors,
      code: 200,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default getVendors;
