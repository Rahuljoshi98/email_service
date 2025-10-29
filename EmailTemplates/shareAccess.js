export const shareAccess = ({
  userName,
  supportCenterLink,
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
                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-bottom: 0;
                                        font-family: 'Plus Jakarta Sans', Arial,
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      Hello,
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
                                      Your invitation to
                                      <span style="font-weight: 600">
                                        ${userName}
                                      </span>
                                      to collaborate using Sole has been
                                      accepted.
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
                                      Depending on the access rights you have
                                      assigned, they can now use Sole’s Command
                                      Centre to:
                                    </p>

                                    <ul style="padding-left: 12px">
                                      <li
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-bottom: 0;
                                          margin-left: 15px;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        Access and manage your financial data
                                        and accounting records seamlessly.
                                      </li>

                                      <li
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-bottom: 0;
                                          margin-top: 6px;
                                          margin-left: 15px;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        Coordinate budgeting, forecasting, and
                                        taxation;
                                      </li>

                                      <li
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-bottom: 0;
                                          margin-top: 6px;
                                          margin-left: 15px;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        Access Sole’s Support and Knowledge
                                        platform; and
                                      </li>

                                      <li
                                        style="
                                          color: #0a0d14;
                                          font-size: 14px;
                                          font-weight: 400;
                                          margin-bottom: 0;
                                          margin-top: 6px;
                                          margin-left: 15px;
                                          font-family: 'Plus Jakarta Sans',
                                            Arial, Helvetica, sans-serif;
                                        "
                                      >
                                        Make informed decisions with real-time
                                        insights.
                                      </li>
                                    </ul>

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
                                      For more information on how to manage,
                                      maintain and remove shared access to your
                                      account, check out Sole’s support and
                                      knowledge hub.
                                    </p>

                                    <table
                                      role="presentation"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      style="margin-top: 18px"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="border-radius: 0px"
                                        >
                                          <a
                                            href="${supportCenterLink}"
                                            style="
                                              display: inline-block;
                                              font-family: 'Plus Jakarta Sans',
                                                Arial, Helvetica, sans-serif;
                                              font-size: 14px;
                                              font-weight: 500;
                                              color: #ffffff;
                                              text-decoration: none;
                                              padding: 10px 20px;
                                              border-radius: 8px;
                                              background-color: #4d4dff;
                                            "
                                          >
                                            Sole Support Center
                                          </a>
                                        </td>
                                      </tr>
                                    </table>

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
                                        Kind regards,
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
                                        The Sole App Team
                                      </p>
                                    </div>

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
                                          <table
                                            role="presentation"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            width="100%"
                                            style="
                                              border-radius: 12px;
                                              background-color: #4d4dff;
                                              text-align: center;
                                            "
                                          >
                                            <tr>
                                              <td style="padding: 12px 4px">
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

                                                <p
                                                  style="
                                                    font-family: 'Plus Jakarta Sans',
                                                      Arial, Helvetica,
                                                      sans-serif;
                                                    font-size: 14px;
                                                    font-weight: 400;
                                                    color: #ffffff;
                                                  "
                                                >
                                                  Simply visit your app store to
                                                  download the app.
                                                </p>

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
                              style="
                                width: 100%;
                                border: none;
                                border-top: 1px solid #eaeaea;
                              "
                            />

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
                                Best accounting app for sole traders and
                                freelancers
                              </p>
                            </div>

                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              align="center"
                              style="margin: 20px auto"
                            >
                              <tr>
                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${twitterLink}"
                                    target="_blank"
                                    style="text-decoration: none"
                                  >
                                    <img
                                      alt="Twitter"
                                      height="17"
                                      src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/twitter.png"
                                      width="17"
                                    />
                                  </a>
                                </td>

                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${linkedinLink}"
                                    target="_blank"
                                    style="text-decoration: none"
                                  >
                                    <img
                                      alt="LinkedIn"
                                      height="20"
                                      src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/linkedin.png"
                                      width="20"
                                    />
                                  </a>
                                </td>

                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${facebookLink}"
                                    target="_blank"
                                    style="text-decoration: none"
                                  >
                                    <img
                                      alt="Facebook"
                                      height="20"
                                      src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/facebook.png"
                                      width="20"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </table>

                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              align="center"
                              style="margin: 20px auto 30px auto"
                            >
                              <tr>
                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${helpcenterLink}"
                                    style="
                                      color: #375dfb;
                                      text-decoration-line: underline;
                                      font-size: 14px;
                                      font-weight: 400;
                                      font-family: 'Plus Jakarta Sans', Arial,
                                        Helvetica, sans-serif;
                                    "
                                    target="_blank"
                                    >Help Centre</a
                                  >
                                </td>

                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${privacyLink}"
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

                                <td align="center" style="padding: 0 8px">
                                  <a
                                    href="${termsLink}"
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
                                      ©2025 Sole App Pty Ltd. All rights
                                      reserved.
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
  </body>
</html>
`;
