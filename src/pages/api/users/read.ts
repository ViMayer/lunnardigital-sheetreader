import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { sheetName } from "../connection";
import { allPermitted } from "./allpermitted";

export default async function infos(req: any, res: any) {
  const response = await allPermitted(req, res);
  res.json(response);
}
