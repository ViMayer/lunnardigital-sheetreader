import { getInfo } from "./connection";

export default async function infos(req: any, res: any) {
  const response = await getInfo(req, res);
  res.json(response);
}
