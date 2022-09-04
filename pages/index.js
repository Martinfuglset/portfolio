import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Created by Martin Fuglset" />
        <link rel="icon" href="/Vector.ico" />
      </Head>

      <header className={styles.header}>
        <p>
          <a href='/'>
            Martin Fuglset&nbsp;
          </a>
          <a>Lights off&nbsp;</a>
          <a>Menu</a>
        </p>
      </header>

      <main className={styles.main}>
        <h1 className="text-8xl font-regular">
          Portfolio
        </h1>

        <div className={styles.grid}>
          <a href="/cv">
            <h2>CV</h2>
            <p>CV</p>
          </a>

          <a href="/projects">
            <h2>Projects</h2>
            <p>Project 1</p>
          </a>

          <a href="abilities">
            <h2>Abilities</h2>
            <p>Python</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.grid}>
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
