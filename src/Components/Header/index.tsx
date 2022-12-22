import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { defaultUrl } from "../../services/url";

export function Header() {
  return (
    <header className={styles.container}>
      <a href={defaultUrl}>
        <h1>Home</h1>
      </a>
      <SignInButton />
    </header>
  );
}
