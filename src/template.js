export default function template(title, initialState = {}, content = "") {
  let scripts = "";
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `;
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <meta name="Description" content="Its Hackers paradise">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}
