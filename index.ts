import AsaQuery from 'asa-query-ulta';
import express from 'express';

const app = express();

app.get('/:ip', async (req, res) => {
  const ip = req.params.ip;
  //Validate IP:PORT using REGEX
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{1,5})?$/;
  if (!ipv4Regex.test(ip)) return res.send('Invalid IP:PORT');

  const query = new AsaQuery();
  const response = await query.unofficial().ipContains(ip).exec();
  res.send(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
