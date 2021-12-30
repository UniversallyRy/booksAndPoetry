import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://openlibrary.org/isbn/9780140328721';
  
  await axios
    .get(url)
    .then(({ data }:any) => {
      res.status(200).json({ data })
    })
    .catch(({ err }:any) => {
      res.status(400).json({ err })
    })
}