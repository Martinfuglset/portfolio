import Head from "next/head"
import Header from "../sections/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Martin Fuglset</title>
        <meta name="description" content="Martin Fuglset"/>
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