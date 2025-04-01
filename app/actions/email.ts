"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
export async function sendEmail(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const pageTitles: Record<string, string> = {
    "contact-us": "General Enquiry",
    showroom: "Vehicle Enquiry",
    spares: "Spare Part Enquiry",
  };

  const pageKey = typeof data.page === "string" ? data.page : "contact-us";
  const emailTitle = pageTitles[pageKey] || "General Enquiry";

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
          <div class="header">${emailTitle}</div>
          <div class="content">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.tel}</p>
            ${
              ["showroom", "spares"].includes(pageKey) && data.itemId
                ? `<p><strong>Item ID:</strong> ${data.itemId}</p>`
                : ""
            }
            ${
              ["showroom", "spares"].includes(pageKey) && data.itemName
                ? `<p><strong>Item Name:</strong> ${data.itemName}</p>`
                : ""
            }
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          </div>
          <div class="footer">
             ${
               data.itemId && ["showroom", "spares"].includes(pageKey)
                 ? `<p>View item page: <a href="https://rockside-historic-racing.vercel.app/${pageKey}/${data.itemId}" target="_blank">Click here</a></p>`
                 : ""
             }
          </div>
        </div>
      </body>
    </html>
  `;

  await resend.emails.send({
    from: `${data.firstName} ${data.lastName} - Rockside <onboarding@resend.dev>`,
    to: "chrifrat1@gmail.com",
    subject: emailTitle,
    html: emailContent,
  });
}
