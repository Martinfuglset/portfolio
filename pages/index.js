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
              <a href="/menu" class="mr-4 hover:underline md:mr-10">Menu</a>
          </li>
        </ul>
      </header>

      <div>
          <h1 className="text-6xl font-regular leading-loose">
            Portfolio
          </h1>
          
          <div class="h-32"></div>

          <div class="box-content h-32 w-72 border-t-2">
            <div class="flex justify-between">
              <div class="hover:underline">
                <a href="/projects">Projects</a>
              </div>
              <div class="text-right">
                  Housing price analysis<br></br>
                  NLP image generation<br></br>
                  Monte Carlo simulation<br></br>
                  ...
              </div>
            </div>
          </div>
          <div class="box-content h-32 w-72 border-t-2">
            <div class="flex justify-between">
              <div class="hover:underline">
                <a href="/abilities">Abilites</a>
              </div>
              <div class="text-right">
                  Python<br></br>
                  JavaSctipt<br></br>
                  C++<br></br>
                  ...
              </div>
            </div>
          </div>
          <div class="box-content h-32 w-72 border-t-2">
            <div class="flex justify-between">
              <div class="hover:underline">
                <a href="/cv">CV</a>
              </div>
              <div class="text-right">
                  View
              </div>
            </div>
          </div>
      </div>

      <footer>
            <ul class="flex">
                <li>
                    <a href="mailto:fuglsetm@gmail.com" class="mr-4 hover:underline md:mr-10 ">Email</a>
                </li>
                <li>
                    <a href="https://github.com/Martinfuglset" class="mr-4 hover:underline md:mr-10">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/martinfuglset/" class="mr-4 hover:underline md:mr-10">LinkedIn</a>
                </li>
            </ul>
        </footer>
    </div>
  )
}
