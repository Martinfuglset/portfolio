import Head from 'next/head'

export default function CV() {
  return (
    <div>
      <Head>
        <title>Martin Fuglset | CV</title>
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
          CV
        </h1>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <form action="https://drive.google.com/file/d/1yGwirkyA8Mwr1J7GoqDUVsQf0Rrzr1QT/view?usp=sharing">
                <input type="submit" value="Download CV" />
            </form>
        </button>
      
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
