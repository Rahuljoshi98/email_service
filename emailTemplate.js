export const adminEmailTemplate = (
  inviteeName,
  eventType,
  inviteeNameSecond,
  inviteeEmail,
  additionalGuest,
  eventDateAndTime,
  meetingLink,
  inviteeTz
) => {
  //   console.log("in");
  const inviteeHref = `mailto:${inviteeEmail}`;
  let additionalGuestHtml = "";
  if (additionalGuest?.length > 0) {
    additionalGuestHtml = `
      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 12px">
        <tbody>
          <tr>
            <td>
              <div>
                <p style="color: #111827; font-size: 16px; margin-bottom: 8px; margin-top: 0; font-weight: bold;">Additional Guests:</p>
                ${additionalGuest
                  .map(
                    (item) => `
                      <p style="color: #111827; font-size: 16px; margin-bottom: 8px; margin-top: 0;">
                        <a href="mailto:${item}">${item}</a>
                      </p>`
                  )
                  .join("")}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @font-face {
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/spacegrotesk/v6/K23oF1D6hfixQJ9UQb2XvV0EAVxtdCqtFA.woff2)
            format("woff2");
        }
  
        * {
          font-family: "Space Grotesk", Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        .header {
          background-color: red;
        }
      </style>
      <title>Document</title>
    </head>
    <body>
      <table
        align="center"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
          max-width: 37.5em;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          padding-top: 1rem;
          padding-bottom: 1rem;
          height: 100vh;
        "
      >
        <tbody>
          <tr style="width: 100%">
            <td>
              <html dir="ltr" lang="en">
                <head></head>
                <!-- <div
                  style="
                    display: none;
                    overflow: hidden;
                    line-height: 1px;
                    opacity: 0;
                    max-height: 0;
                    max-width: 0;
                  "
                >
                  Top 5 Features of Our Service
                  <div></div>
                </div> -->
                <body>
                  <table
                    align="center"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      max-width: 600px;
                      background-color: #ffffff;
                      border-radius: 8px;
                      margin: 0 auto;
                      padding: 24px;
                    "
                  >
                    <tbody>
                      <tr style="width: 100%">
                        <td>
                          <h1
                            style="
                              font-size: 24px;
                              line-height: 32px;
                              margin-bottom: 45px;
                              padding-bottom: 45px;
                              text-align: center;
                              border-bottom: 1px dashed grey;
                            "
                          >
                            <img
                              alt="Logo"
                              height="38"
                              src="https://waply.co/wp-content/uploads/2025/02/Favic.png"
                              style="
                                display: block;
                                outline: none;
                                border: none;
                                text-decoration: none;
                                margin: auto;
                              "
                              width="52"
                            />
                          </h1>
  
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        Hi ${inviteeName},
                                      </p>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        A new event has been scheduled.
                                      </p>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Event Type:
                                      </p>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        ${eventType}
                                      </p>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Invitee:
                                      </p>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        ${inviteeNameSecond}
                                      </p>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Invitee Email:
                                      </p>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        <a href=${inviteeHref}>${inviteeEmail}</a>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          ${additionalGuestHtml}
  
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Event Date/Time:
                                      </p>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        ${eventDateAndTime}
                                      </p>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 10px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Location:
                                      </p>
                                      <div
                                        style="
                                          border-left: 4px solid #dadada;
                                          padding: 25px 18px;
                                        "
                                      >
                                        <p
                                          style="
                                            color: #111827;
                                            font-size: 16px;
                                            margin-bottom: 8px;
                                            margin-top: 0;
                                          "
                                        >
                                          This is a Google Meet web conference.
                                          <a href=${meetingLink}>Join Now</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 45px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                          font-weight: bold;
                                        "
                                      >
                                        Invitee Time Zone:
                                      </p>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 0;
                                        "
                                      >
                                        ${inviteeTz}
                                      </p>
                                    </div>
                                  </div>
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
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <fieldset
                                    style="
                                      font-family:
                                        &quot;Proxima Nova&quot;,
                                        &quot;proxima-nova&quot;,
                                        Helvetica,
                                        Arial sans-serif;
                                      border: 0 none;
                                      border-top: 1px solid #f4f4f5;
                                      margin-bottom: 10px;
                                    "
                                  >
                                    <legend
                                      align="center"
                                      style="
                                        font-family:
                                          &quot;Proxima Nova&quot;,
                                          &quot;proxima-nova&quot;,
                                          Helvetica,
                                          Arial sans-serif;
                                        font-weight: bold;
                                      "
                                    >
                                      <h4
                                        style="
                                          font-family:
                                            &quot;Proxima Nova&quot;,
                                            &quot;proxima-nova&quot;,
                                            Helvetica,
                                            Arial sans-serif;
                                        "
                                      >
                                        &nbsp; Pro Tip! &nbsp;
                                      </h4>
                                    </legend>
                                  </fieldset>
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
                            style="
                              padding: 45px 0;
                              border-bottom: 1px dashed grey;
                            "
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div style="display: flex">
                                      <div>
                                        <img
                                          alt="Logo"
                                          height="38"
                                          src="https://waply.co/wp-content/uploads/2025/02/Favic.png"
                                          style="
                                            display: block;
                                            outline: none;
                                            border: none;
                                            text-decoration: none;
                                            margin: auto;
                                          "
                                          width="52"
                                        />
                                      </div>
                                      <div style="padding-left: 30px">
                                        <p
                                          style="
                                            color: #111827;
                                            font-size: 18px;
                                            margin-bottom: 12px;
                                            margin-top: 0;
                                            font-weight: bold;
                                          "
                                        >
                                          Use Waply with your other tools
                                        </p>
                                        <p
                                          style="color: #111827; font-size: 16px"
                                        >
                                          Waply works with the tools you already
                                          use including Google Meet.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
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
                            style="margin-bottom: 12px"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <p
                                        style="
                                          color: #111827;
                                          font-size: 16px;
                                          margin-bottom: 8px;
                                          margin-top: 30px;
                                        "
                                      >
                                        Sent from
                                        <a
                                          href="https://waply.co/"
                                          target="_blank"
                                          >Waply</a
                                        >
                                      </p>
                                    </div>
                                  </div>
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
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  `;
};
