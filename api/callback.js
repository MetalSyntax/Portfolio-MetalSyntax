module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing code');
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();
  const token = data.access_token;

  if (!token) {
    return res.status(400).send(`OAuth error: ${data.error_description || data.error || 'unknown'}`);
  }

  const message = JSON.stringify({
    token,
    provider: 'github',
  });

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html>
<html>
  <body>
    <p>Autorizado. Puedes cerrar esta ventana.</p>
    <script>
      try {
        window.opener.postMessage(
          'authorization:github:success:${message.replace(/'/g, "\\'")}',
          '*'
        );
      } catch(e) {}
      setTimeout(function() { window.close(); }, 200);
    </script>
  </body>
</html>`);
};
