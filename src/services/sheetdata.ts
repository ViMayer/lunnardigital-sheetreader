import { query as q } from "faunadb";
import { fauna } from "./fauna";
import { sheetName } from "../pages/api/connection";

export const getAllData = () => {
  return fauna.query(
    q.Map(
      q.Paginate(q.Match("allData")),
      q.Lambda((x) => q.Get(x))
    )
  );
};
export const createContact = (data) => {
  return fauna.query(q.Create(q.Collection(sheetName), { data }));
};

export const deleteContact = (ref) => {
  return fauna.query(q.Delete(q.Ref(q.Collection(sheetName), ref)));
};

export const updateContact = (ref) => {
  return fauna.query(q.Delete(q.Ref(q.Collection(sheetName), ref)));
};

export const deletePermitted = (id) => {
  return fauna.query(q.Delete(q.Ref(q.Collection("allowedUsers"), id)));
};

export const updatePermitted = (ref, email, status) => {
  console.log("sdasdsd");
  console.log(ref);
  return fauna.query(
    q.Update(q.Ref(q.Collection("allowedUsers"), ref), {
      data: {
        email: email,
        status: status,
      },
    })
  );
};

export const findPermitted = (id) => {
  return fauna.query(q.Get(q.Ref(q.Collection("allowedUsers"), id)));
};

// export const findPermitted = (id) => {
//   console.log("========");
//   return fauna.query(q.Get(q.Match(q.Index("allPermitted"), id)));
// };
