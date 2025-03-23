"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
export async function sendEmail(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const emailContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f8f8f8;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            padding-bottom: 10px;
            border-bottom: 2px solid #eeeeee;
          }
          .content {
            padding: 15px 0;
          }
          .content p {
            margin: 8px 0;
            font-size: 16px;
            line-height: 1.5;
          }
          .footer {
            margin-top: 15px;
            font-size: 14px;
            color: #777;
            text-align: center;
            border-top: 2px solid #eeeeee;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${data.carId ? "Vehicle Inquiry" : "General Enquiry"}
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.tel}</p>
            ${data.carId ? `<p><strong>Car ID:</strong> ${data.carId}</p>` : ""}
            ${
              data.carName
                ? `<p><strong>Car Name:</strong> ${data.carName}</p>`
                : ""
            }
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          </div>
          <div class="footer">
            Thank you for reaching out! We will get back to you soon. Rockside Historic Racing Team
          </div>
        </div>
      </body>
    </html>
  `;

  await resend.emails.send({
    from: `${data.firstName} ${data.lastName} - Rockside <onboarding@resend.dev>`,
    to: "chrifrat1@gmail.com",
    subject: data.carId ? "Vehicle Inquiry" : "General Enquiry",
    html: emailContent,
  });
}
