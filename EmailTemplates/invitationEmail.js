export const invitationEmail = ({
  signUpLink,
  unsubscribeLink,
  twitterLink,
  linkedinLink,
  facebookLink,
  helpcenterLink,
  privacyLink,
  termsLink,
}) => `
<!DOCTYPE html>
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
                              style="padding: 20px"
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
                                      Invitation to Collaborate with Sole
                                    </h1>
                                    <p
                                      style="
                                        color: #0a0d14;
                                        font-size: 14px;
                                        font-weight: 400;
                                        margin-top: 16px;
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
                                      pyplumbandgas@outlook.com is excited to
                                      invite you to collaborate on Sole App, the
                                      simplified accounting solution for
                                      Australian sole traders and small
                                      business.
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
                                      By signing-up to Sole’s Command Centre,
                                      you can help to manage and streamline your
                                      network’s bookkeeping and
                                    </p>

                                    <table
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      data-source-line="49"
                                      style="
                                        margin-top: 16px;
                                        background-color: #f6f8fa;
                                        border-radius: 12px;
                                        padding: 6px;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p
                                              style="
                                                color: #0a0d14;
                                                font-size: 16px;
                                                font-weight: 550;
                                                margin: 0;
                                                padding-left: 6px;
                                                padding-top: 4px;
                                                font-family: 'Plus Jakarta Sans',
                                                  Arial, Helvetica, sans-serif;
                                              "
                                            >
                                              With Sole App, you can:
                                            </p>

                                            <div
                                              style="
                                                background-color: white;
                                                border-radius: 12px;
                                                margin-top: 12px;
                                              "
                                            >
                                              <table
                                                role="presentation"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="
                                                  margin: 0;
                                                  padding: 12px 16px;
                                                  border-bottom: 1px solid
                                                    #e2e4e9;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    valign="middle"
                                                    style="
                                                      width: 25px;
                                                      height: 25px;
                                                      line-height: 0;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        width: 25px;
                                                        height: 25px;
                                                        border-radius: 50%;
                                                        background-color: #ffffff;
                                                        border: 1px solid
                                                          #1516231f;
                                                        display: inline-block;
                                                      "
                                                    >
                                                      <table
                                                        role="presentation"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        width="100%"
                                                        height="100%"
                                                      >
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="middle"
                                                          >
                                                            <img
                                                              src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/calculator.png"
                                                              alt="icon"
                                                              width="16"
                                                              height="16"
                                                              style="
                                                                display: block;
                                                              "
                                                            />
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                  </td>

                                                  <td
                                                    valign="middle"
                                                    style="
                                                      padding-left: 12px;
                                                      font-family: 'Plus Jakarta Sans',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 13px;
                                                      color: #0a0d14;
                                                      font-weight: 400;
                                                    "
                                                  >
                                                    Access and manage user’s
                                                    financial data and
                                                    accounting records
                                                    seamlessly.
                                                  </td>
                                                </tr>
                                              </table>

                                              <table
                                                role="presentation"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="
                                                  margin: 0;
                                                  padding: 12px 16px;
                                                  border-bottom: 1px solid
                                                    #e2e4e9;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    valign="middle"
                                                    style="
                                                      width: 25px;
                                                      height: 25px;
                                                      line-height: 0;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        width: 25px;
                                                        height: 25px;
                                                        border-radius: 50%;
                                                        background-color: #ffffff;
                                                        border: 1px solid
                                                          #1516231f;
                                                        display: inline-block;
                                                      "
                                                    >
                                                      <table
                                                        role="presentation"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        width="100%"
                                                        height="100%"
                                                      >
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="middle"
                                                          >
                                                            <img
                                                              src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/receipt-discount.png"
                                                              alt="icon"
                                                              width="16"
                                                              height="16"
                                                              style="
                                                                display: block;
                                                              "
                                                            />
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                  </td>

                                                  <td
                                                    valign="middle"
                                                    style="
                                                      padding-left: 12px;
                                                      font-family: 'Plus Jakarta Sans',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 13px;
                                                      color: #0a0d14;
                                                      font-weight: 400;
                                                    "
                                                  >
                                                    Coordinate budgeting,
                                                    forecasting, and taxation.
                                                  </td>
                                                </tr>
                                              </table>

                                              <table
                                                role="presentation"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="
                                                  margin: 0;
                                                  padding: 12px 16px;
                                                  border-bottom: 1px solid
                                                    #e2e4e9;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    valign="middle"
                                                    style="
                                                      width: 25px;
                                                      height: 25px;
                                                      line-height: 0;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        width: 25px;
                                                        height: 25px;
                                                        border-radius: 50%;
                                                        background-color: #ffffff;
                                                        border: 1px solid
                                                          #1516231f;
                                                        display: inline-block;
                                                      "
                                                    >
                                                      <table
                                                        role="presentation"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        width="100%"
                                                        height="100%"
                                                      >
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="middle"
                                                          >
                                                            <img
                                                              src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/share.png"
                                                              alt="icon"
                                                              width="16"
                                                              height="16"
                                                              style="
                                                                display: block;
                                                              "
                                                            />
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                  </td>

                                                  <td
                                                    valign="middle"
                                                    style="
                                                      padding-left: 12px;
                                                      font-family: 'Plus Jakarta Sans',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 13px;
                                                      color: #0a0d14;
                                                      font-weight: 400;
                                                    "
                                                  >
                                                    Access Sole’s Support and
                                                    Knowledge platform.
                                                  </td>
                                                </tr>
                                              </table>

                                              <table
                                                role="presentation"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                                style="
                                                  margin: 0;
                                                  padding: 12px 16px;
                                                  border-bottom: 1px solid
                                                    #e2e4e9;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    valign="middle"
                                                    style="
                                                      width: 25px;
                                                      height: 25px;
                                                      line-height: 0;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        width: 25px;
                                                        height: 25px;
                                                        border-radius: 50%;
                                                        background-color: #ffffff;
                                                        border: 1px solid
                                                          #1516231f;
                                                        display: inline-block;
                                                      "
                                                    >
                                                      <table
                                                        role="presentation"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        width="100%"
                                                        height="100%"
                                                      >
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="middle"
                                                          >
                                                            <img
                                                              src="https://s3.ap-southeast-2.amazonaws.com/assets.soleapp.com.au/logo/presention-chart.png"
                                                              alt="icon"
                                                              width="16"
                                                              height="16"
                                                              style="
                                                                display: block;
                                                              "
                                                            />
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </div>
                                                  </td>

                                                  <td
                                                    valign="middle"
                                                    style="
                                                      padding-left: 12px;
                                                      font-family: 'Plus Jakarta Sans',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 13px;
                                                      color: #0a0d14;
                                                      font-weight: 400;
                                                    "
                                                  >
                                                    Make informed decisions with
                                                    real-time insights.
                                                  </td>
                                                </tr>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <!-- Full-width button -->
                                    <table
                                      role="presentation"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="margin-top: 16px"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          bgcolor="#4D4DFF"
                                          style="border-radius: 14px"
                                        >
                                          <a
                                            href="${signUpLink}"
                                            target="_blank"
                                            style="
                                              display: block;
                                              width: 100%;
                                              padding: 12px 0;
                                              font-size: 14px;
                                              font-weight: 500;
                                              font-family: 'Plus Jakarta Sans',
                                                Arial, Helvetica, sans-serif;
                                              color: #ffffff;
                                              text-decoration: none;
                                              border-radius: 8px;
                                              background-color: #4d4dff;
                                            "
                                          >
                                            Sign Up Now
                                          </a>
                                        </td>
                                      </tr>
                                    </table>

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
                                        Sole App Team
                                      </p>
                                    </div>

                                    <!-- choose sole email -->
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      data-source-line="59"
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p
                                              data-source-line="60"
                                              style="
                                                font-size: 14px;
                                                font-weight: 400;
                                                margin-top: 18px;
                                                margin-bottom: 0;
                                                text-align: center;
                                                font-family: 'Plus Jakarta Sans',
                                                  Arial, Helvetica, sans-serif;
                                              "
                                            >
                                              You chose to receive Sole emails
                                              No longer interested?
                                              <a
                                                href="${unsubscribeLink}"
                                                data-source-line="71"
                                                style="
                                                  color: #375dfb;
                                                  text-decoration-line: none;
                                                "
                                                target="_blank"
                                                >Unsubscribe</a
                                              >
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
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
