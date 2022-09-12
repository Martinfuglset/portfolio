import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div class="flex flex-col h-screen justify-between py-6 px-12 bg-[#EFEFEF] text-[#181818] text-lg dark:bg-[#181818] dark:text-[#EFEFEF]">
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
              <a href="/" class="hover:underline">Lights off</a>
          </li>
          <li>
              <a href="/menu" class="ml-10 hover:underline">Menu</a>
          </li>
        </ul>
      </header>

      <main>
        <p>Housing price analysis</p>
      </main>

      <footer>
            <ul class="flex">
                <li>
                    <a href="mailto:fuglsetm@gmail.com" class="hover:underline md:mr-10 ">Email</a>
                </li>
                <li>
                    <a href="https://github.com/Martinfuglset" class="hover:underline md:mr-10">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/martinfuglset/" class="hover:underline md:mr-10">LinkedIn</a>
                </li>
            </ul>
        </footer>
    </div>
  )
}

