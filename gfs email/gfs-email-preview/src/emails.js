const GFS_LOGO = 'https://res.cloudinary.com/djwd8tgyz/image/upload/v1771613716/gfslogo2_1_jw3lw6.png';

const sharedStyles = {
  wrapper: `
    margin: 0;
    padding: 0;
    background-color: #f5f5f0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  `,
  container: `
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
  `,
  header: `
    padding: 40px 48px 32px;
    text-align: center;
    background-color: #ffffff;
  `,
  logo: `
    height: 48px;
    width: auto;
    border: 0;
    outline: none;
    text-decoration: none;
  `,
  body: `
    padding: 0 48px 40px;
  `,
  heading: `
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #262525;
    margin: 0 0 16px 0;
    line-height: 1.3;
  `,
  text: `
    font-size: 15px;
    line-height: 1.7;
    color: #4a4a4a;
    margin: 0 0 16px 0;
  `,
  textSmall: `
    font-size: 13px;
    line-height: 1.6;
    color: #6e6e6e;
    margin: 0 0 12px 0;
  `,
  cta: `
    display: inline-block;
    padding: 13px 32px 15px;
    background-color: #262525;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,
  ctaAlt: `
    display: inline-block;
    padding: 13px 32px 15px;
    background-color: #ffffff;
    color: #262525;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 2px solid #262525;
    border-radius: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,
  footer: `
    padding: 32px 48px;
    background-color: #f5f5f0;
    text-align: center;
  `,
  footerText: `
    font-size: 12px;
    line-height: 1.6;
    color: #636360;
    margin: 0 0 8px 0;
  `,
  footerLink: `
    color: #262525;
    text-decoration: underline;
  `,
};

// Table-based divider (replaces <hr> for cross-client compatibility)
const dividerHtml = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
  <tr>
    <td style="border-top: 1px solid #e8e6e1; font-size: 0; line-height: 0; height: 1px;">&nbsp;</td>
  </tr>
</table>`;

// Bulletproof button with VML fallback for Outlook
const ctaGreen = `
    display: inline-block;
    padding: 13px 32px 15px;
    background-color: #B6D840;
    color: #000000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

function bulletproofButton(text, href, style = 'primary') {
  const bgColor = style === 'green' ? '#B6D840' : style === 'primary' ? '#262525' : '#ffffff';
  const textColor = style === 'green' ? '#000000' : style === 'primary' ? '#ffffff' : '#262525';
  const strokeColor = style === 'green' ? '#B6D840' : '#262525';
  const cssStyle = style === 'green' ? ctaGreen : style === 'primary' ? sharedStyles.cta : sharedStyles.ctaAlt;

  return `<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:44px;v-text-anchor:middle;width:220px;" arcsize="0%" strokecolor="${strokeColor}" fillcolor="${bgColor}">
  <w:anchorlock/>
  <center style="color:${textColor};font-family:'Open Sans',sans-serif;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">${text}</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin: 28px auto;">
  <tr>
    <td align="center">
      <a href="${href}" style="${cssStyle}">${text}</a>
    </td>
  </tr>
</table>
<!--<![endif]-->`;
}

// Outlook max-width wrapper
const msoContainerStart = `<!--[if mso]>
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" style="width:600px;">
<tr><td>
<![endif]-->`;

const msoContainerEnd = `<!--[if mso]>
</td></tr>
</table>
<![endif]-->`;

// Preheader styles (hidden text that shows in inbox preview)
const preheaderStyle = `display:none;font-size:1px;color:#f5f5f0;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;`;

export const emails = [
  {
    id: 'account-verification',
    from: 'Grounds for Sculpture',
    fromEmail: 'noreply@groundsforsculpture.org',
    to: '[FIRST_NAME] [LAST_NAME]',
    toEmail: '[EMAIL]',
    subject: 'Confirm your email address',
    date: 'Feb 20, 2026, 10:15 AM',
    label: 'Transactional',
    html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <title>Confirm your email address</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="${sharedStyles.wrapper}">
  <span style="${preheaderStyle}">Confirm your email to complete your Grounds for Sculpture account.</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        ${msoContainerStart}
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="${sharedStyles.container}">
          <!-- Header -->
          <tr>
            <td style="${sharedStyles.header}">
              <img src="${GFS_LOGO}" alt="Grounds for Sculpture" width="auto" height="48" style="${sharedStyles.logo}" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="${sharedStyles.body}">
              <h1 style="${sharedStyles.heading}">Welcome to Grounds for Sculpture</h1>
              <p style="${sharedStyles.text}">
                Hi [FIRST_NAME],
              </p>
              <p style="${sharedStyles.text}">
                Thank you for creating an account with Grounds for Sculpture. To complete your registration and start exploring everything GFS has to offer, please confirm your email address.
              </p>
              ${bulletproofButton('Confirm Email Address', '[VERIFICATION_LINK]')}
              <p style="${sharedStyles.textSmall}">
                This link will expire in 24 hours. If the button above doesn't work, copy and paste the following URL into your browser:
              </p>
              <p style="font-size: 13px; line-height: 1.6; color: #262525; word-break: break-all; word-wrap: break-word; margin: 0 0 24px 0;">
                [VERIFICATION_LINK]
              </p>
              ${dividerHtml}
              <p style="${sharedStyles.textSmall}">
                If you didn't create an account with Grounds for Sculpture, you can safely ignore this email. No account will be created.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="${sharedStyles.footer}">
              <p style="${sharedStyles.footerText}">
                Grounds for Sculpture<br>
                80 Sculptors Way, Hamilton, NJ 08619
              </p>
              <p style="${sharedStyles.footerText}">
                <a href="[PRIVACY_LINK]" style="${sharedStyles.footerLink}">Privacy Policy</a>
              </p>
              <p style="font-size: 11px; color: #636360; margin: 8px 0 0 0;">
                &copy; 2026 Grounds for Sculpture. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        ${msoContainerEnd}
      </td>
    </tr>
  </table>
</body>
</html>`
  },
  {
    id: 'guest-pass',
    from: 'Grounds for Sculpture',
    fromEmail: 'noreply@groundsforsculpture.org',
    to: '[RECIPIENT_NAME]',
    toEmail: '[RECIPIENT_EMAIL]',
    subject: '[SENDER_NAME] has sent you a guest pass',
    date: 'Feb 20, 2026, 2:30 PM',
    label: 'Transactional',
    html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <title>[SENDER_NAME] has sent you a guest pass</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="${sharedStyles.wrapper}">
  <span style="${preheaderStyle}">[SENDER_NAME] gifted you complimentary access to Grounds for Sculpture.</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        ${msoContainerStart}
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="${sharedStyles.container}">
          <!-- Header -->
          <tr>
            <td style="${sharedStyles.header}">
              <img src="${GFS_LOGO}" alt="Grounds for Sculpture" width="auto" height="48" style="${sharedStyles.logo}" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="${sharedStyles.body}">
              <h1 style="${sharedStyles.heading}">You're Invited</h1>
              <p style="${sharedStyles.text}">
                <strong>[SENDER_NAME]</strong> has gifted you complimentary access to Grounds for Sculpture — 42 acres of art, sculpture, and gardens.
              </p>

              <!-- Guest Pass Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; border-radius: 0; margin: 24px 0;">
                <tr>
                  <td style="padding: 28px 32px;">
                    <p style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #6e6e6e; margin: 0 0 16px 0;">Guest Pass</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 0;">
                          <p style="font-size: 12px; color: #6e6e6e; margin: 0 0 2px 0;">Guest</p>
                          <p style="font-size: 15px; color: #262525; font-weight: 500; margin: 0;">[RECIPIENT_NAME]</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- QR Code -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 28px 0;">
                <tr>
                  <td align="center">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fgroundsforsculpture.org%2Fguest-pass%2F%5BPASS_ID%5D&color=262525&bgcolor=f5f5f0" alt="Guest Pass QR Code" width="160" height="160" style="display: block; border: 0; outline: none;" />
                    <p style="font-size: 12px; color: #6e6e6e; margin: 8px 0 0 0;">Present this code at entry</p>
                  </td>
                </tr>
              </table>

              ${bulletproofButton('Plan Your Visit', '[GFS_WEBSITE]', 'green')}

              ${dividerHtml}
              <p style="${sharedStyles.textSmall}">
                Questions about your visit? Check our <a href="[FAQ_LINK]" style="color: #262525; text-decoration: underline;">FAQ</a> or contact us at <a href="mailto:info@groundsforsculpture.org" style="color: #262525; text-decoration: underline;">info@groundsforsculpture.org</a>.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="${sharedStyles.footer}">
              <p style="${sharedStyles.footerText}">
                Grounds for Sculpture<br>
                80 Sculptors Way, Hamilton, NJ 08619
              </p>
              <p style="${sharedStyles.footerText}">
                <a href="[PRIVACY_LINK]" style="${sharedStyles.footerLink}">Privacy Policy</a>
              </p>
              <p style="font-size: 11px; color: #636360; margin: 8px 0 0 0;">
                &copy; 2026 Grounds for Sculpture. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        ${msoContainerEnd}
      </td>
    </tr>
  </table>
</body>
</html>`
  },
  {
    id: 'password-reset',
    from: 'Grounds for Sculpture',
    fromEmail: 'noreply@groundsforsculpture.org',
    to: '[FIRST_NAME] [LAST_NAME]',
    toEmail: '[EMAIL]',
    subject: 'Reset your password',
    date: 'Feb 20, 2026, 5:47 PM',
    label: 'Transactional',
    html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <title>Reset your password</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="${sharedStyles.wrapper}">
  <span style="${preheaderStyle}">Reset the password for your Grounds for Sculpture account.</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        ${msoContainerStart}
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="${sharedStyles.container}">
          <!-- Header -->
          <tr>
            <td style="${sharedStyles.header}">
              <img src="${GFS_LOGO}" alt="Grounds for Sculpture" width="auto" height="48" style="${sharedStyles.logo}" />
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="${sharedStyles.body}">
              <h1 style="${sharedStyles.heading}">Reset Your Password</h1>
              <p style="${sharedStyles.text}">
                Hi [FIRST_NAME],
              </p>
              <p style="${sharedStyles.text}">
                We received a request to reset the password for your Grounds for Sculpture account. Click the button below to choose a new password.
              </p>
              ${bulletproofButton('Reset Password', '[RESET_LINK]')}
              <p style="${sharedStyles.textSmall}">
                This link will expire in 1 hour. If the button above doesn't work, copy and paste the following URL into your browser:
              </p>
              <p style="font-size: 13px; line-height: 1.6; color: #262525; word-break: break-all; word-wrap: break-word; margin: 0 0 24px 0;">
                [RESET_LINK]
              </p>
              ${dividerHtml}
              <p style="${sharedStyles.textSmall}">
                If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.
              </p>
              <p style="${sharedStyles.textSmall}">
                For security, this request was received from [IP_ADDRESS] using [BROWSER_INFO]. If this wasn't you, consider <a href="[SECURITY_LINK]" style="color: #262525; text-decoration: underline;">reviewing your account security</a>.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="${sharedStyles.footer}">
              <p style="${sharedStyles.footerText}">
                Grounds for Sculpture<br>
                80 Sculptors Way, Hamilton, NJ 08619
              </p>
              <p style="${sharedStyles.footerText}">
                <a href="[PRIVACY_LINK]" style="${sharedStyles.footerLink}">Privacy Policy</a>
              </p>
              <p style="font-size: 11px; color: #636360; margin: 8px 0 0 0;">
                &copy; 2026 Grounds for Sculpture. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
        ${msoContainerEnd}
      </td>
    </tr>
  </table>
</body>
</html>`
  }
];
