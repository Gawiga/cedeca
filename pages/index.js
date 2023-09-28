import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import CedecaNavbar from '@components/CedecaNavbar'

export default function Home() {
  return (
    <div id="start-main-cedeca">
      <Head>
        <title>Cedeca Jundiaí</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
      </Head>

      <main>
        <Nav />
        <CedecaNavbar />
        <Header title="Cedeca Jundiaí" />
        <p className="description">
          Confira nossas redes sociais
        </p>
      </main>

      <Footer />
    </div>
  )
}
