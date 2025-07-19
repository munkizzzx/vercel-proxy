export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('No URL provided.');
  }

  try {
    const fetchRes = await fetch(url);
    const data = await fetchRes.text();
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  } catch (err) {
    res.status(500).send('Proxy Error: ' + err.message);
  }
}
