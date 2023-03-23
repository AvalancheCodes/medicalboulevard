import type { NextApiRequest, NextApiResponse } from 'next'
import { IHireUsPostRequest } from "../../../core/shared/api-models/hire-us/IHireUsPostRequest";
import { IHireUsPostResponse } from "../../../core/shared/api-models/hire-us/IHireUsPostResponse";
import { IErrorResponse } from "../../../core/shared/api-models/IErrorResponse";
import trimObjectStrings from "../../../utils/trimObjectStrings";
import hireUsPostRequestSchema from "../../../core/shared/yup/hireUsPostRequestSchema";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  console.log(JSON.stringify(req.body));
  const payload = req.body as IHireUsPostRequest;
  const trimmedPayload = trimObjectStrings(payload);
  try {
    await hireUsPostRequestSchema.validate(trimmedPayload);
  } catch (e) {
    return res.status(400).json(<IErrorResponse>{ message: e.message });
  }

  try {
    /*
    // Create a record in Firebase.
    const docRef = await db.collection('messages').add({
      name,
      email,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    */

    /*
    // Send an email.
    const msg = {
      to: email,
      from: 'your-email@example.com',
      subject: 'Thank you for your message',
      text: 'Your message has been received.',
      html: '<p>Your message has been received.</p>',
    };
    await sgMail.send(msg);
    */

    return res.status(200).json(<IHireUsPostResponse>{});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      await handlePost(req, res);
      break;
    default:
      res.status(405).json(<IErrorResponse>{ message: 'Method not allowed' });
      break;
  }
}

