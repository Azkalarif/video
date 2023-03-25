import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.query;
    const response = await axios.get(url, { responseType: 'stream' });

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', response.headers['content-length']);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Accept-Ranges', 'bytes');
//console.log(res)
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
