import { signIn } from "next-auth/react";
import { defaultUrl } from "../services/url";
import { useSession } from "next-auth/react";
import styles from "../styles/home.module.scss";

export default function Home(req: any, res: any) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: {
          destination: defaultUrl,
          permanent: false,
        },
      };
    },
  });
  if (status != "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.holder}>
          <button
            onClick={() => {
              signIn("github");
            }}
          >
            <h3>LOGIN</h3>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.holder}>
        <a href={`${defaultUrl + "/dashboard"}`}>
          <h3>PAINEL</h3>
        </a>
      </div>
    </div>
  );
}
