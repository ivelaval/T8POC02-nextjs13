import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-back min-h-screen">
      <Head>
        <title></title>
        <meta name="description" content=""/>   
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Nextjs 13 landing page</h1>
      </main>
    </div>
  )
}
