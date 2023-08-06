import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.send('hello world');
    } catch(error) {
        console.error(error);
    }
})

app.post('/dream', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    // const aiResponse = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: '1024x1024',
    // });

    const image = 'https://img.freepik.com/free-psd/portrait-happy-cardigan-welsh-corgi_53876-73961.jpg?w=740&t=st=1691234269~exp=1691234869~hmac=6404caa24d308c7daad7d1d2460cfa3a56a40d94f0032773f83b27a441b18104';
    res.send({ image });
  } catch (error) {
    console.error(error)
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));
