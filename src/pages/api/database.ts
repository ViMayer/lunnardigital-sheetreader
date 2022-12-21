import { query as q } from "faunadb";
import { fauna } from "../../services/fauna";
import { sheetName } from "./connection";

export const dataTeste = async (req: any, res: any) => {
  try {
    const dataReturn = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection(sheetName))),
        q.Lambda((x: any) => q.Get(x))
      )
    );
    return dataReturn;
  } catch {
    return;
  }
};

export const database = async (req: any, res: any) => {
  try {
    const datainfo = await fauna.query(
      q.Get(q.Ref(q.Collection(sheetName), "350951949097500746"))
    );
    return datainfo;
  } catch {
    return;
  }
};

export const allData = async (req: any, res: any) => {
  try {
    q.Map(
      q.Paginate(q.Documents(q.Collection(sheetName))),
      q.Lambda((x: any) => q.Get(x))
    );
    return allData;
  } catch {
    return;
  }
};
