import { getDetails } from "../api/connection";
import { GetStaticProps } from "next";
import { database, allData, dataTeste } from "../api/database";
import { query as q } from "faunadb";
import { fauna } from "../../services/fauna";
import { sheetName } from "../api/connection";
import { stringify } from "querystring";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./details.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useFormik } from "formik";
import { readUnique } from "../api/detalhes";
import { getAllData } from "../../services/sheetdata";
import { defaultUrl } from "../../services/url";
import { Header } from "../../Components/Header";

const Details = ({ users }) => {
  console.log(users);
  // MANAGE SESSION
  const router = useRouter();
  const { status } = useSession({});
  return (
    <>
      <h1>DETALHES</h1>
      <h3>ID: {users.ref["@ref"].id}</h3>
      <h3>email: {users.data.email}</h3>
    </>
  );
};

export default Details;

export const getServerSideProps = async ({ req, params }) => {
  const res = await fetch(`${defaultUrl + "/api/userdetails/" + params.id}`);
  const users = await res.json();
  return { props: { users: users } };
};
