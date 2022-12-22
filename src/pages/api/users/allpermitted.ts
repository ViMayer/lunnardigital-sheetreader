import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { sheetName } from "../connection";

export const allPermitted = async (req: any, res: any) => {
  try {
    const info = await fauna.query(
      q.Map(
        q.Paginate(q.Match("allPermitted")),
        q.Lambda((x) => q.Get(x))
      )
    );
    return info;
  } catch (e) {
    return;
  }
};
