import { type NextApiRequest, type NextApiResponse } from "next";
import { isValid, z } from "zod";
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
  name: z.string().min(1).max(255),
  industry: z.string().min(1).max(255),
  headquarters: z.string().min(1).max(255),
  foundedYear: z.string().min(1).max(255),
  staffCount: z.string().min(1).max(255),
  type: z.string().min(1).max(255),
  parentOrg: z.string().min(1).max(255),
  //   subsidiaries: z.string().min(1).max(255),
  //   websiteURL: z.string().min(1).max(255),
  rate: z.string().min(1).max(255),
});

const validateInputData = (inputs: unknown) => {
  const isValidData = inputDataValidations.parse(inputs);
  return isValidData;
};

const createVendors = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sanitizedInput = validateInputData(req.body);
    const result = await prisma.vendors.create({
      data: {
        name: sanitizedInput.name,
        industry: sanitizedInput.industry,
        headquarters: sanitizedInput.headquarters,
        foundedYear: sanitizedInput.foundedYear,
        staffCount: sanitizedInput.staffCount,
        type: sanitizedInput.type,
        parentOrg: sanitizedInput.parentOrg,
        // subsidiaries: sanitizedInput.subsidiaries,
        // websiteURL: sanitizedInput.wbsiteURL,
        rate: sanitizedInput.rate,
      },
    });
    console.log(result);
    res.status(200).json({
      message: "Vendor created successfully",
      data: result,
      code: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      code: 500,
    });
  }
};

export default createVendors;
