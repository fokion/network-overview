import {endpointsLocation} from "../../components/config";
import { promises as fs } from 'fs'
export default async function handler(req, res) {
    console.log(endpointsLocation)
    const buffer = await fs.readFile(endpointsLocation);
    res.status(200).json(JSON.parse(Buffer.from(buffer).toString()));
}
