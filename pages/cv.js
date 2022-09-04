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
        <button class="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href='https://drive.google.com/file/d/1yGwirkyA8Mwr1J7GoqDUVsQf0Rrzr1QT/view?usp=sharing'>
                    Download CV
                </a>
            </span>
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
