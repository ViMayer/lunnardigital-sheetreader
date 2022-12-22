import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { sheetName } from "../connection";
import { getAllowed } from "./getallowed";

export default async function infos(req: any, res: any) {
  try {
    const response = await getAllowed(req.body.email, res);
    res.json(response);
  } catch (e) {
    console.log("USERS INDEX ERROR");
    console.log(e);
  }
}
