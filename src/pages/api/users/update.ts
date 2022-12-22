import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { updatePermitted } from "../../../services/sheetdata";
export default async function handler(req: any, res: any) {
  try {
    console.log("UPDATING");
    // pegar email voltar com id
    const response = await fauna.query(
      q.Get(q.Match(q.Index("user_by_email"), req.body.email))
    );
    console.log("response.ref");
    console.log(req.body.status);
    console.log("EEEEE");

    const contact = await updatePermitted(
      response.ref.id,
      req.body.email,
      req.body.status
    );

    return res.send(contact);
    return;
  } catch {
    return;
  }
}
