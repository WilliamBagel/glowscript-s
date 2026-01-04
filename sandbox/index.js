const csp = `http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval'"`
const sandbox = document.getElementById('sandbox');
const srcdoc = `
    <!DOCTYPE html>
        <html style="height:100%; overflow:hidden;">
        <head>
            <meta ${csp}>
        </head>
        <body style="border:none; margin:0px; width:100%; height:100%">
            <iframe id="sandbox" style="border:none; width:100%; height:100%"></iframe>
            <script>
                const sandbox = document.getElementById('sandbox');
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    const glowscriptHTML = xhr.response;
                    sandbox.srcdoc = glowscriptHTML;
                };
                xhr.open("GET", "GlowScript.html");
                xhr.send();
            </script>
        </ body>
        </html>`
sandbox.srcdoc = srcdoc;