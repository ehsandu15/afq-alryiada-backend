module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: result.email,
          from: process.env.DEFAULT_FROM_EMAIL,
          //   to: 'someone2@example.com',
          subject: `You have a new email from , [ ${result.firstName} ${result.lastName} ]`,
          //   text: `${result.message} \n \n phone number : ${result.phoneNumber} \n name: ${result.firstName} ${result.lastName}`,
          html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email from ${result.firstName} ${result.lastName}</title>
                    <style>
                        /* General Reset */
                              body {
                                margin: 0;
                                padding: 0;
                                font-family: 'Roboto', Arial, sans-serif;
                                line-height: 1.6;
                                background-color: #ffffff; /* White background */
                                color: #162F3B; /* Primary text color */
                            }

                            .email-container {
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #ffffff;
                                border-radius: 12px;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                overflow: hidden;
                            }

                            .header {
                                background-color: #162F3B; /* Primary color */
                                color: #ffffff;
                                text-align: center;
                                padding: 24px;
                                font-size: 20px;
                                font-weight: 500;
                                border-bottom: 1px solid #244453; /* Secondary color */
                            }

                            .content {
                                padding: 24px;
                                color: #162F3B;
                            }

                            .content h2 {
                                margin-top: 0;
                                font-size: 18px;
                                font-weight: 600;
                                color: #162F3B;
                            }

                            .content p {
                                margin-bottom: 16px;
                                font-size: 14px;
                                line-height: 1.8;
                            }

                            .sender-info {
                                margin-top: 24px;
                                border-top: 1px solid #E0E0E0;
                                padding-top: 16px;
                            }

                            .sender-info strong {
                                display: block;
                                margin-bottom: 8px;
                                font-size: 14px;
                                font-weight: 500;
                                color: #244453; /* Secondary color */
                            }

                            .sender-info p {
                                margin: 0;
                                font-size: 14px;
                                color: #5F737D;
                            }

                            .footer {
                                background-color: #F8FAFB;
                                text-align: center;
                                padding: 16px;
                                color: #777;
                                font-size: 12px;
                                border-top: 1px solid #E0E0E0;
                            }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            Message from ${result.firstName} ${result.lastName}
                        </div>
                        <div class="content">
                            <h2>Message Details</h2>
                            <p>${result.message}</p>

                            <div class="sender-info">
                                <strong>Sent by:</strong>
                                <p><b>Name:</b> ${result.firstName} ${result.lastName}</p>
                                <p><b>Phone Number:</b> ${result.phoneNumber}</p>
                            </div>
                        </div>
                        <div class="footer">
                            &copy; 2025 Afq-alryiada. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>`,
        });
    } catch (error) {
      console.error("ERROR : ", error);
    }
  },
};
