import Head from "next/head"
import Header from "../sections/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Portfolio for Martin Fuglset"/>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
      </div>
    </>
  )
}

export default Layout