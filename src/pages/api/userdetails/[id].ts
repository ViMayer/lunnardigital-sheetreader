import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { sheetName } from "../connection";

export default async function getDetails(req: any, res: any, params: any) {
  try {
    const detalhes = await fauna.query(
      q.Get(q.Ref(q.Collection("allowedUsers"), req.query.id))
    );
    return res.json(detalhes);
  } catch (e) {
    console.log("ERROR: userDetails");
    return;
  }
}
