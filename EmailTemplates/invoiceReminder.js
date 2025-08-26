export const invoiceReminder = ({
  userName,
  invoiceNo,
  invoiceAmt,
  invoiceFrom,
  dueDate,
  bsbNo,
  accNo,
  regardsBy,
  twitterLink,
  linkedinLink,
  facebookLink,
  helpcenterLink,
  privacyLink,
  termsLink,
  appStoreLink,
  playStoreLink,
}) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    data-source-file="../emails/magic-links/aws-verify-email.tsx"
    data-source-line="29"
    style="background-color: #fff"
  >
    <table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      align="center"
    >
      <tbody>
        <tr>
          <td style="background-color: #fff; color: #212121">
            <table
              align="center"
              width="100%"
              data-source-file="../emails/magic-links/aws-verify-email.tsx"
              data-source-line="31"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                max-width: 40em;
                margin: 0 auto;
                background-color: #c3cad033;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
                padding: 12px;
              "
            >
              <tbody>
                <tr style="width: 100%; border-radius: 12px">
                  <td style="border-radius: 12px; overflow: hidden">
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      data-source-line="32"
                      style="background-color: #fff"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="background-color: #4d4dff; padding: 20px"
                            >
                              <tbody>
                                <tr>
                                  <!-- Left side (Logo) -->
                                  <td align="left" valign="middle">
                                    <img
                                      alt="Sole's Logo"
                                      src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/logo-white.png"
                                      style="
                                        display: block;
                                        outline: none;
                                        border: none;
                                        text-decoration: none;
                                        width: auto;
                                      "
                                    />
                                  </td>

                                  <!-- Right side (Text) -->
                                  <td
                                    align="right"
                                    valign="middle"
                                    style="text-align: right"
                                  >
                                    <p
                                      style="
                                        color: white;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Less admin. More freedom.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              data-source-line="30"
                              style="padding: 20px 20px 0px 20px"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <h1
                                      style="
                                        color: #0a0d14;
                                        font-size: 22px;
                                        font-weight: 600;
                                        margin: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Invoice Reminder
                                    </h1>
                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 600;
                                        margin-top: 14px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Hi ${userName},
                                    </p>
                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 12px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <span style="font-weight: 600">
                                        ${invoiceNo}
                                      </span>
                                      for
                                      <span style="font-weight: 600">
                                        ${invoiceAmt}
                                      </span>

                                      from Mr
                                      <span style="font-weight: 600">
                                        ${invoiceFrom}
                                      </span>

                                      is approaching it’s due date on
                                      <span style="font-weight: 600">
                                        ${dueDate}.
                                      </span>
                                    </p>

                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 12px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Please review the invoice provided and
                                      make a payment to avoid missing the due
                                      date.
                                    </p>

                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 14px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      BSB:
                                      <span style="font-weight: 600">
                                        ${bsbNo}
                                      </span>
                                    </p>

                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 8px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Account Number:
                                      <span style="font-weight: 600">
                                        ${accNo}
                                      </span>
                                    </p>

                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 12px;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      If you have any questions, please let me
                                      know.
                                    </p>

                                    <!-- best regards -->
                                    <div>
                                      <p
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-top: 18px;
                                          margin-bottom: 0;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        Best Regards
                                      </p>

                                      <p
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-top: 10px;
                                          margin-bottom: 0;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        ${regardsBy}
                                      </p>
                                    </div>

                                    <!-- downloads -->
                                    <table
                                      role="presentation"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      align="center"
                                      width="100%"
                                      style="
                                        margin-top: 18px;
                                        padding: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                      <tr>
                                        <td align="center">
                                          <!-- Outer container -->
                                          <table
                                            role="presentation"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            width="100%"
                                            style="
                                              border-radius: 12px;
                                              background: linear-gradient(
                                                135deg,
                                                #000000 0%,
                                                #001b70 100%
                                              );
                                              text-align: center;
                                            "
                                          >
                                            <tr>
                                              <td style="padding: 12px 4px">
                                                <!-- Heading -->
                                                <p
                                                  style="
                                                    margin: 0;
                                                    font-family: 'Plus Jakarta Sans',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-size: 14px;
                                                    font-weight: 400;
                                                    color: #ffffff;
                                                    line-height: 22px;
                                                  "
                                                >
                                                  The app that simplifies
                                                  accounting<br />
                                                  Try it for
                                                  <span style="font-weight: 700"
                                                    >FREE</span
                                                  >
                                                  today.
                                                </p>

                                                <!-- Subheading -->
                                                <p
                                                  style="
                                                    font-family: 'Plus Jakarta Sans',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-size: 14px;
                                                    font-weight: 400;
                                                    color: #d9d9d9;
                                                  "
                                                >
                                                  Simply visit the app store to
                                                  download the app.
                                                </p>

                                                <!-- Store buttons -->
                                                <table
                                                  role="presentation"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  border="0"
                                                  align="center"
                                                  style="margin: auto"
                                                >
                                                  <tr>
                                                    <td style="padding: 0 8px">
                                                      <a
                                                        href="${appStoreLink}"
                                                        target="_blank"
                                                      >
                                                        <img
                                                          src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/app-store.png"
                                                          width="80"
                                                          alt="Download on the App Store"
                                                          style="
                                                            display: block;
                                                            border: none;
                                                            outline: none;
                                                            text-decoration: none;
                                                          "
                                                        />
                                                      </a>
                                                    </td>
                                                    <td style="padding: 0 8px">
                                                      <a
                                                        href="${playStoreLink}"
                                                        target="_blank"
                                                      >
                                                        <img
                                                          src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/play-store.png"
                                                          width="80"
                                                          alt="Get it on Google Play"
                                                          style="
                                                            display: block;
                                                            border: none;
                                                            outline: none;
                                                            text-decoration: none;
                                                          "
                                                        />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr
                              data-source-file="../emails/magic-links/aws-verify-email.tsx"
                              data-source-line="58"
                              style="
                                width: 100%;
                                border: none;
                                border-top: 1px solid #eaeaea;
                              "
                            />

                            <!-- socials -->
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="padding: 6px 0"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" style="text-align: center">
                                    <img
                                      alt="Sole's Logo"
                                      src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/logo-black.png"
                                      style="
                                        display: block;
                                        margin: 0 auto;
                                        outline: none;
                                        border: none;
                                        text-decoration: none;
                                        width: auto;
                                      "
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div>
                              <p
                                style="
                                  color: #0a0d14;
                                  font-size: 14px;
                                  font-weight: 400;
                                  margin-top: 6px;
                                  margin-bottom: 0;
                                  padding: 0 12px;
                                  font-family: 'Plus Jakarta Sans', Arial,
                                    Helvetica, sans-serif;
                                  text-align: center;
                                "
                              >
                                Best Accounting App for Sole Traders &
                                Freelancers
                              </p>
                            </div>

                            <!-- Social Icons -->
                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              align="center"
                              style="margin: 20px auto"
                            >
                              <tr>
                                <!-- Twitter -->
                                <td align="center" style="padding: 0 8px">
                                  <table
                                    role="presentation"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      width: 30px;
                                      height: 30px;
                                      border-radius: 8px;
                                      background-color: #ffffff;
                                      border: 1px solid #1516231f;
                                    "
                                  >
                                    <tr>
                                      <td align="center" valign="middle">
                                        <a
                                          href="${twitterLink}"
                                          target="_blank"
                                          style="
                                            display: block;
                                            text-decoration: none;
                                          "
                                        >
                                          <img
                                            alt="Twitter"
                                            height="17"
                                            src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/twitter.png"
                                            width="17"
                                            style="
                                              display: block;
                                              margin: 0 auto;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>

                                <!-- LinkedIn -->
                                <td align="center" style="padding: 0 8px">
                                  <table
                                    role="presentation"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      width: 30px;
                                      height: 30px;
                                      border-radius: 8px;
                                      background-color: #ffffff;
                                      border: 1px solid #1516231f;
                                    "
                                  >
                                    <tr>
                                      <td align="center" valign="middle">
                                        <a
                                          href="${linkedinLink}"
                                          target="_blank"
                                          style="
                                            display: block;
                                            text-decoration: none;
                                          "
                                        >
                                          <img
                                            alt="linkedin"
                                            height="20"
                                            src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/linkedin.png"
                                            width="20"
                                            style="
                                              display: block;
                                              margin: 0 auto;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>

                                <!-- Facebook -->
                                <td align="center" style="padding: 0 8px">
                                  <table
                                    role="presentation"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      width: 30px;
                                      height: 30px;
                                      border-radius: 8px;
                                      background-color: #ffffff;
                                      border: 1px solid #1516231f;
                                    "
                                  >
                                    <tr>
                                      <td align="center" valign="middle">
                                        <a
                                          href="${facebookLink}"
                                          target="_blank"
                                          style="
                                            display: block;
                                            text-decoration: none;
                                          "
                                        >
                                          <img
                                            alt="facebook"
                                            height="20"
                                            src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/facebook.png"
                                            width="20"
                                            style="
                                              display: block;
                                              margin: 0 auto;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>

                            <!-- help center links -->
                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              align="center"
                              style="margin: 20px auto 30px auto"
                            >
                              <tr>
                                <td
                                  align="center"
                                  style="line-height: 0; padding: 0 8px"
                                >
                                  <a
                                    href="${helpcenterLink}"
                                    data-source-line="71"
                                    style="
                                      color: #375dfb;
                                      text-decoration-line: underline;
                                      font-size: 14px;
                                      font-weight: 400;
                                      font-family: 'Plus Jakarta Sans', Arial,
                                        Helvetica, sans-serif;
                                    "
                                    target="_blank"
                                    >Help Center</a
                                  >
                                </td>

                                <td
                                  align="center"
                                  style="line-height: 0; padding: 0 8px"
                                >
                                  <a
                                    href="${privacyLink}"
                                    data-source-line="71"
                                    style="
                                      color: #375dfb;
                                      text-decoration-line: underline;
                                      font-size: 14px;
                                      font-weight: 400;
                                      font-family: 'Plus Jakarta Sans', Arial,
                                        Helvetica, sans-serif;
                                    "
                                    target="_blank"
                                    >Privacy</a
                                  >
                                </td>

                                <td
                                  align="center"
                                  style="line-height: 0; padding: 0 8px"
                                >
                                  <a
                                    href="${termsLink}"
                                    data-source-line="71"
                                    style="
                                      color: #375dfb;
                                      text-decoration-line: underline;
                                      font-size: 14px;
                                      font-weight: 400;
                                      font-family: 'Plus Jakarta Sans', Arial,
                                        Helvetica, sans-serif;
                                    "
                                    target="_blank"
                                    >Terms & Conditions</a
                                  >
                                </td>
                              </tr>
                            </table>

                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                background-color: #4d4dff;
                                padding: 30px 4px;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td align="center" style="text-align: center">
                                    <p
                                      style="
                                        color: white;
                                        font-size: 14px;
                                        font-weight: 400;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                        margin: 0;
                                      "
                                    >
                                      ©2025 SOLEAPP, All Rights Reserved
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`;
