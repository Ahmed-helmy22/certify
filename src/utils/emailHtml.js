export const emailTemplate = (authCode) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        text-align: center;
      }
  
      .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
  
      h2 {
        color: #333;
      }
  
      p {
        color: #555;
        line-height: 1.6;
      }
  
      .otp-container {
        background-color: #eaeaea;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
      }
  
      .otp {
        font-size: 24px;
        color: #333;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        display: inline-block;
      }
  
      .footer {
        margin-top: 20px;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Certificate Academy</h2>
      <h2>Email Verification</h2> 
      <p>Thank you for signing up! To complete your registration, please use the following (OTP) code:</p>
  
      <div class="otp-container">
        <span class="otp">${authCode}</span>
      </div>
  
      <p class="footer"> Do not share it with anyone.</p>
    </div>
  </body>
  </html>
  `;
};
