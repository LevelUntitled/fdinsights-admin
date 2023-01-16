import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";
import Router from "next/router";
const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      Router.push("/dashboard");
    } else {
      Router.push("/login");
    }
  });

  return <></>;
};

export default Home;
