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
  // MANAGE SESSION
  const router = useRouter();
  const { status } = useSession({});
  if (status != "loading" && status != "authenticated") {
    router.push(defaultUrl);
  } else if (status === "authenticated") {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Detalhes</h1>
          </div>
          <div className={styles.holder}>
            <div className={styles.left}>
              <ul className={styles.titles}>
                <li>
                  <h3>Id:</h3>
                </li>
                <li>
                  <h3>shopOwner:</h3>
                </li>

                <li>
                  <h3>transfers:</h3>
                </li>
                <li>
                  <h3>consultSale:</h3>
                </li>
                <li>
                  <h3>automaticValue:</h3>
                </li>
                <li>
                  <h3>firstName:</h3>
                </li>
                <li>
                  <h3>grupo:</h3>
                </li>
                <li>
                  <h3>cota:</h3>
                </li>
                <li>
                  <h3>parcelDetails:</h3>
                </li>
                <li>
                  <h3>history:</h3>
                </li>
                <li>
                  <h3>slug:</h3>
                </li>
                <li>
                  <h3>slugTenant:</h3>
                </li>
                <li>
                  <h3>cd_repres:</h3>
                </li>
                <li>
                  <h3>comis:</h3>
                </li>
                <li>
                  <h3>consorciado:</h3>
                </li>
                <li>
                  <h3>consultor:</h3>
                </li>
                <li>
                  <h3>data_venda:</h3>
                </li>
                <li>
                  <h3>equipe:</h3>
                </li>
                <li>
                  <h3>n_contrato:</h3>
                </li>
                <li>
                  <h3>nm_categ_comis:</h3>
                </li>
                <li>
                  <h3>parcela:</h3>
                </li>
                <li>
                  <h3>vend_cota:</h3>
                </li>
                <li>
                  <h3>vlr_base_credito:</h3>
                </li>
                <li>
                  <h3>vlr_bruto_comissao:</h3>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <ul className={styles.paragraphs}>
                <li>
                  <p>
                    {users.ref["@ref"].id != 0
                      ? users.ref["@ref"].id
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.shopOwner != 0
                      ? users.data.shopOwner
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.transfers != 0
                      ? users.data.transfers
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.consultSale != 0
                      ? users.data.consultSale
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.automaticValue != 0
                      ? users.data.automaticValue
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.firstName != 0
                      ? users.data.firstName
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>{users.data.grupo != 0 ? users.data.grupo : "======="}</p>
                </li>
                <li>
                  <p>{users.data.cota != 0 ? users.data.cota : "======="}</p>
                </li>
                <li>
                  <p>
                    {users.data.parcelDetails != 0
                      ? users.data.parcelDetails
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.history != 0 ? users.data.history : "======="}
                  </p>
                </li>
                <li>
                  <p>{users.data.slug != 0 ? users.data.slug : "======="}</p>
                </li>
                <li>
                  <p>
                    {users.data.slugTenant != 0
                      ? users.data.slugTenant
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.cd_repres != 0
                      ? users.data.cd_repres
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>{users.data.comis != 0 ? users.data.comis : "======="}</p>
                </li>
                <li>
                  <p>
                    {users.data.consorciado != 0
                      ? users.data.consorciado
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.consultor != 0
                      ? users.data.consultor
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.data_venda != 0
                      ? users.data.data_venda
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.equipe != 0 ? users.data.equipe : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.n_contrato != 0
                      ? users.data.n_contrato
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.nm_categ_comis != 0
                      ? users.data.nm_categ_comis
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.parcela != 0 ? users.data.parcela : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.vend_cota != 0
                      ? users.data.vend_cota
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.vlr_base_credito != 0
                      ? users.data.vlr_base_credito
                      : "======="}
                  </p>
                </li>
                <li>
                  <p>
                    {users.data.vlr_bruto_comissao != 0
                      ? users.data.vlr_bruto_comissao
                      : "======="}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <h1>Error</h1>;
};

export default Details;

export const getServerSideProps = async ({ req, params }) => {
  const res = await fetch(`${defaultUrl + "/api/detalhes/" + params.id}`);
  const users = await res.json();
  return { props: { users: users } };
};
