import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Created by Martin Fuglset" />
        <link rel="icon" href="/Vector.ico" />
      </Head>

      <header>
        <p>
          <a href='/'>
            Martin Fuglset&nbsp;
          </a>
          <a>Lights off&nbsp;</a>
          <a>Menu</a>
        </p>
      </header>

      <main>
        <h1 className="text-6xl font-regular">
          Portfolio
        </h1>

        <div class="box-content h-32 w-72 border-t-2">
          <div class="flex justify-between">
            <div>
              <a href="/projects">Projects</a>
            </div>
            <div class="text-right">
                Housing price analysis<br></br>
                NLP image generation<br></br>
                Monte Carlo simulation
            </div>
          </div>
        </div>

        <div class="box-content h-32 w-72 border-t-2">
          <div class="flex justify-between">
            <div>
              <a href="/abilities">Abilites</a>
            </div>
            <div class="text-right">
                Python<br></br>
                JavaSctipt<br></br>
                C++
            </div>
          </div>
        </div>

        <div class="box-content h-32 w-72 border-t-2">
          <div class="flex justify-between">
            <div>
              <a href="/cv">CV</a>
            </div>
            <div class="text-right">
                View
            </div>
          </div>
        </div>
      
      </main>

      <footer>
        <div>
        <a href='mailto:fuglsetm@gmail.com'>
          Email&nbsp; 
        </a>
        <a href='https://github.com/Martinfuglset'>
          GitHub&nbsp; 
        </a>
        <a href='https://www.linkedin.com/in/martinfuglset/'>
          LinkedIn
        </a>
        </div>
      </footer>
    </div>
  )
}
