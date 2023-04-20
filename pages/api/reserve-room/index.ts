import type { NextApiRequest, NextApiResponse } from 'next'
import { IErrorResponse } from "../../../core/shared/api-models/IErrorResponse";
import trimObjectStrings from "../../../utils/trimObjectStrings";
import { IReserveRoomPostResponse } from "../../../core/shared/api-models/reserve-room/IReserveRoomPostResponse";
import { IReserveRoomPostRequest } from "../../../core/shared/api-models/reserve-room/IReserveRoomPostRequest";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  console.log(JSON.stringify(req.body));
  const payload = req.body as IReserveRoomPostRequest;
  const trimmedPayload = trimObjectStrings(payload);
  try {
    // TODO: Add validation
    // TODO: Save request in Firestore
    // await hireUsPostRequestSchema.validate(trimmedPayload);
    // await firestoreAdminHireUsService.saveRequest(trimmedPayload);

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
    res.status(200).json(<IReserveRoomPostResponse>{});
  } catch (e) {
    res.status(400).json(<IErrorResponse>{ message: e.message });
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

