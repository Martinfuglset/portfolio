import Head from "next/head"
import React from 'react'
import Table from '../components/Table'

const data = [
  {
    name: 'Ability1',
    email: 'Expert'
  }
]

function App() {
  return <Table data={data} />
}


export default function Abilities() {
  return (
      <main>
        <Head>
          <title>Martin Fuglset / Abilities</title>
        </Head>
        {/* <div>{App()}</div> */}

      </main>
  )
}