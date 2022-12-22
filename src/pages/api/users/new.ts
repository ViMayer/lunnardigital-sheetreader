import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";

export default async function newUser(req, res) {
  try {
    const dados = {
      email: req.body.email,
      status: req.body.status,
    };
    const info = await fauna.query(
      q.Create(q.Collection("allowedUsers"), {
        data: {
          email: dados.email,
          status: dados.status,
        },
      })
    );
    res.json({ dados });
  } catch (e) {
    console.log(e);
  }
}
