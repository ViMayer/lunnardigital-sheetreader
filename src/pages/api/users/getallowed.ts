import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { sheetName } from "../connection";

export const getAllowed = async (req: any, res: any) => {
  try {
    const checkAllowed = await fauna.query(
      q.Get(q.Match(q.Index("user_by_email"), req))
    );
    const isAllowed = Boolean(checkAllowed.data.status);
    return isAllowed;
  } catch (e) {
    console.log("GET ALLOWED ERROR");
    return;
  }
};
