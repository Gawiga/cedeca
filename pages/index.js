import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <div className="container">
      <Nav />

      <Head>
        <title>Cedeca Jundiaí</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cedeca Jundiaí" />
        <p className="description">
          Confira nossas redes sociais
        </p>
      </main>

      <Footer />
    </div>
  )
}
