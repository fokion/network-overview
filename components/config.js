
import path from 'path'
export const server = process.env.NODE_ENV !== 'production'? "http://localhost:3000":"";
export const endpointsLocation = process.env.ENDPOINTS ? process.env.ENDPOINTS : path.join(process.cwd(),"endpoints.json")