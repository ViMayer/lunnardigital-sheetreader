import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Header } from "../Components/Header";
import "../styles/global.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />

      <Component {...pageProps} />
    </SessionProvider>
  );
}
