import Head from 'next/head'

export default function Home() {
  return (
    <div class="flex flex-col h-screen justify-between p-6 bg-[#EFEFEF]">
      <Head>
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Created by Martin Fuglset" />
        <link rel="icon" href="/Vector.ico" />
      </Head>

      <header class="flex justify-between">
        <a href='/'>
          <img class="scale-75" src='logoblack.svg'></img>
        </a>
        <ul class="flex">
          <li>
              <a href="/" class="mr-4 hover:underline md:mr-10 ">Lights off</a>
          </li>
          <li>
              <a href="/" class="mr-4 underline md:mr-10">Menu</a>
          </li>
        </ul>
      </header>
      <ul class="text-end leading-relaxed py-96 text-6xl">
          <li>
              <a href="/projects" class="mr-4 hover:underline md:mr-10 ">Projects</a>
          </li>
          <li>
              <a href="/cv" class="mr-4 hover:underline md:mr-10">CV</a>
          </li>
          <li>
              <a href="/abilities" class="mr-4 hover:underline md:mr-10">Abilites</a>
          </li>
        </ul>
    </div>
  )
}
