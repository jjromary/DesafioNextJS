import Head from "next/head";
import React, { useEffect } from "react";
import { Buscar } from "../components/Buscar"; 
import { Dashboard } from "../components/Dashboard";

 

export default function Home() {
  return (
    <>
      <Head>
        <title>Vixi | Desafio</title>
      </Head>
      <main>
        <Buscar />
        <Dashboard />
      </main>
    </>
  )
}