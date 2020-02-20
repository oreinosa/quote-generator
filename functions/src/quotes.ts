import * as express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { Request, Response } from 'express';
dotenv.config();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = express();
app.use(cors());
const endpoint = process.env.QUOTES_API_ENDPOINT || "";
const apiHost = process.env.QUOTES_API_HOST || "";
const apiKey = process.env.QUOTES_API_KEY || "";

const headers = {
  "x-rapidapi-host": apiHost,
  "x-rapidapi-key": apiKey
};

app.get('/random', async (request: Request, response: Response) => {
  try {
    const { data } = await axios.get(`${endpoint}/random`, {
      headers
    });
    console.log(data);
    response.status(200).json(data);
  } catch (e) {
    console.log(e);
    response.status(500).send('Unable to get quote. Please try again.');
  }
});

app.get('/keywords/:keywords', async (request: Request, response: Response) => {
  let { keywords } = request.params;
  if (!keywords) {
    response.status(401).send('Please enter a valid keyword.');
  } else {
    try {
      keywords = keywords.trim().toLowerCase();
      console.log(`searching for ${keywords}`);
      const { data } = await axios.get(`${endpoint}/keyword/${keywords}`, {
        headers
      });
      console.log(data);
      response.status(200).json(data);
    } catch (e) {
      console.log(e.data);
      response.status(500).send('Unable to get quote. Please try again.');
    }
  }
});

app.get('/author/:author', async (request: Request, response: Response) => {
  let { author } = request.params;
  if (!author) {
    response.status(401).send('Please enter a valid author.');
  } else {
    try {
      author = author.trim().toLowerCase();
      console.log(`searching for ${author}`)
      const { data } = await axios.get(`${endpoint}/author/${author}`, {
        headers
      });
      console.log(data);
      response.status(200).json(data);
    } catch (e) {
      console.log(e);
      response.status(500).send('Unable to get quote. Please try again.');
    }
  }
});

export default app;