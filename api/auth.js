module.exports = (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const callback = 'https://metalsyntax.vercel.app/api/callback';
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(callback)}&scope=repo`;
  res.redirect(302, url);
};
