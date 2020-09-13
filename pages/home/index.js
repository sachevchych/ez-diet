import React from "react";
import Head from 'next/head'
import MainLayout from "../../layouts/MainLayout";
import RecipesList from "../../components/RecipesList/RecipesList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Cook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h2>Головна сторінка</h2>
          <RecipesList/>
      </MainLayout>
    </div>
  )
}
