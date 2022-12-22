import Router, { useRouter } from "next/router";
import { api } from "../../services/api";
import { signIn } from "next-auth/react";
import { defaultUrl } from "../../services/url";
import { useSession } from "next-auth/react";

export default function Users() {
  const router = useRouter();
  // MANAGE SESSION
  const { status } = useSession();
  // CREATE
  async function newUser(e: any) {
    e.preventDefault();
    const dados = {
      email: document.querySelector(".email").value,
      status: Boolean(document.querySelector(".status").value),
    };
    try {
      const response = await api.post("users/new", {
        email: dados.email,
        status: dados.status,
      });
      const res = await response.data;
      console.log(res);
      alert("cadastrado com sucesso");

      return res;
    } catch (e) {
      alert("ERROR");
      console.log(e);
    }
  }
  // DELETE
  async function deleteUser(e: any) {
    e.preventDefault();
    const dados = {
      email: document.querySelector(".email").value,
    };
    try {
      const response = await api.post("users/delete", {
        email: dados.email,
      });
      const res = await response.data;
      console.log("dados.email");
      console.log(dados.email);
      return res;
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  }
  // UPDATE
  async function updateUser(e: any) {
    console.log("sdsd");
    e.preventDefault();
    const dados = {
      email: document.querySelector(".email").value,
      status: Boolean(document.querySelector(".status").value),
    };
    console.log("dados.status");
    console.log(dados.status);
    try {
      const response = await api.post("users/update", {
        email: dados.email,
        status: dados.status,
      });
      const res = await response.data;

      return res;
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  }
  // FIND
  async function findUser(e: any) {
    e.preventDefault();
    const dados = {
      email: document.querySelector(".email").value,
    };

    try {
      const response = await api.post("users/find", {
        email: dados.email,
      });

      const res = await response.data;
      console.log(res.ref["@ref"].id);
      router.push(`${defaultUrl + "/userinfo/" + res.ref["@ref"].id}`);
      return res;
    } catch {
      console.log("ERROR");
    }
  }
  if (status === "authenticated") {
    return (
      <>
        <div>
          <form>
            <h1>PAINEL DE USUARIOS</h1>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="seuemail@email.com"
              required
            />
            <br />

            <select className="status" name="status">
              <option value="true">Permitido</option>
              <option value="">Negado</option>
            </select>
            <br />

            <button onClick={newUser} type="submit">
              CADASTRAR
            </button>
            <br />

            <button onClick={deleteUser} type="submit">
              DELETAR
            </button>
            <br />

            <button onClick={findUser} type="submit">
              PROCURAR
            </button>
            <br />

            <button onClick={updateUser} type="submit">
              ATUALIZAR
            </button>
          </form>
        </div>
      </>
    );
  } else if (status === "loading") {
    return <h1>CARREGANDO...</h1>;
  } else if (status === "unauthenticated") {
    return <h1>ACESSO NEGADO</h1>;
  }
}
