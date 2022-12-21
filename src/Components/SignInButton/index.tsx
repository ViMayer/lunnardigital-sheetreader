import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { defaultUrl } from "../../services/url";
import styles from "./styles.module.scss";

export function SignInButton() {
  const router = useRouter();
  const { data: session } = useSession({
    required: false,
  });

  return session ? (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => {
          signOut();
        }}
      >
        <FaGithub color="#0ce04c" />
        <div className={styles.text}>
          Logado com <span>GitHub</span>
        </div>
      </button>
    </div>
  ) : (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => signIn("github")}
        className={styles.signOutButton}
      >
        <FaGithub color="#d3be04" />
        <div className={styles.text}>
          Logar com <span>GitHub</span>
        </div>
      </button>
    </div>
  );
}
