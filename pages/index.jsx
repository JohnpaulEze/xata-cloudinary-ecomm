import Head from 'next/head'
import { BaseClient } from '@xata.io/client';
import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home({ products }) {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main>
        <div id='products' className="">
          <h1 className="text-3xl font-semibold text-center py-10">Products</h1>
          <Products products={products} />
        </div>
      </main>

    </div>
  )
}

export async function getServerSideProps() {
  const xata = new BaseClient({
    branch: 'main',
    apiKey: process.env.API_KEY,
    databaseURL: process.env.XATA_DATABASE_URL
    //fetch: fetchImplementation // Required if your runtime doesn't provide a global `fetch` function.
  });

  const page = await xata.db.products
    .select(["*"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  //console.log(page.records)
  return {
    props: {
      products: JSON.parse(JSON.stringify(page.records)),
    }
  }
}
