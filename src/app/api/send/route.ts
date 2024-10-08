import { EmailTemplate } from "@/app/components/email/contactTemplate";
import { Resend } from "resend";

const resend = new Resend("re_4eXZJ33w_DMqB9QNcGCm4uC2TATxpsYCs");

export async function POST(request: Request) {
  try {
    const {
      type,
      firstname,
      lastname,
      email,
      phone,
      speciality = "",
      manufacturerName = "",
      message,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "magazine-heritage.com <contact@magazine-heritage.com>",
      // to: ["healthcie.sas@gmail.com"],
      to: ["jvervel.pro@gmail.com", "hugo.nivault@healthcie.fr"],
      subject: "Contact d'un " + type,
      react: EmailTemplate({
        firstname,
        lastname,
        email,
        phone,
        speciality,
        manufacturerName,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
