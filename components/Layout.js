import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="./icon.svg"/> */}
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Portfolio for Martin Fuglset"/>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout