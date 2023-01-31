import { type NextApiRequest, type NextApiResponse } from "next";
import { isValid, z } from "zod";
import { prisma } from "../../../server/db/client";

const inputDataValidations = z.object({
  company: z.string().min(1).max(60),
  logo: z.string().min(1).max(60),
  industry: z.string().min(1).max(60),
  addLine1: z.string().min(1).max(100),
  addLine2: z.string().min(1).max(100),
  city: z.string().min(1).max(60),
  postcode: z.string().min(1).max(60),
  state: z.string().min(1).max(60),
  fiscalStart: z.string().min(1).max(60),
  fiscalEnd: z.string().min(1).max(60),
  subStart: z.string().min(1).max(60),
  subEnd: z.string().min(1).max(60),
  notes: z.string().min(1).max(60),
  subDomain: z.string().min(1).max(60),
  superUsers: z.string().min(1).max(60),
});

const validateInputData = (inputs: unknown) => {
  const isValidData = inputDataValidations.parse(inputs);

  return isValidData;
};

const createClient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sanitizedInput = validateInputData(req.body);

    const result = await prisma.fDClient.create({
      data: {
        company: sanitizedInput.company,
        logo: sanitizedInput.logo,
        industry: sanitizedInput.industry,
        addLine1: sanitizedInput.addLine1,
        addLine2: sanitizedInput.addLine2,
        city: sanitizedInput.city,
        // @ts-ignore
        postcode: sanitizedInput.postcode,
        state: sanitizedInput.state,
        fiscalStart: sanitizedInput.fiscalStart,
        fiscalEnd: sanitizedInput.fiscalEnd,
        subStart: sanitizedInput.subStart,
        subEnd: sanitizedInput.subEnd,
        notes: sanitizedInput.notes,
        subDomain: sanitizedInput.subDomain,
        superUsers: sanitizedInput.superUsers,
      },
    });

    console.log(result);

    res.status(200).json({
      code: 200,
      status: "PASSED",
      error: "FALSE",
      data: result,
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

export default createClient;
