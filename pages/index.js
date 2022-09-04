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
        <h1 className="text-8xl font-regular">
          Portfolio
        </h1>

        <div class="box-content h-32 w-32">
          <div class="border-t-2">
            <a href="/cv">
              <h2>CV</h2>
              <p>CV</p>
            </a>
          </div>
        </div>

        <div class="box-content h-32 w-32">
          <div class="border-t-2">
            <a href="/projects">
              <h2>Projects</h2>
              <p>Project 1</p>
            </a>
          </div>
        </div>

        <div class="box-content h-32 w-32">
          <div class="border-t-2">
            <a href="abilities">
              <h2>Abilities</h2>
              <p>Python</p>
            </a>
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
