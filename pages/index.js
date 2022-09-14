import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  if (typeof window !== 'undefined') {
    const html = document.querySelector("html");
    const swit = document.getElementById("switch");
    
    function myFunction() {
      if (swit.innerHTML == "Lights off"){
        swit.innerHTML = "Lights on";
        html.classList.add("dark");
      } else {
        swit.innerHTML = "Lights off";
        html.classList.remove("dark");
      }
    }
  }  
  return (
    <div class="flex flex-col h-screen justify-between py-6 px-12 bg-[#EFEFEF] text-[#181818] text-lg dark:bg-[#181818] dark:text-[#EFEFEF] tracking-tight">
      <Head>
        <title>Martin Fuglset | Portfolio</title>
        <meta name="description" content="Created by Martin Fuglset" />
        <link rel="icon" href="/Vector.ico" />
      </Head>  

      <header class="flex justify-between">
        <a href='/'>
          Martin Fuglset
        </a>
        <ul class="flex">
          <li>
              <a type='switch' id='switch' class="hover:underline hover:cursor-pointer" onClick={myFunction} >Lights off</a>
          </li>
          <li>
              <a href="/menu" class="ml-10 hover:underline hover:cursor-pointer">Menu</a>
          </li>
        </ul>
      </header>

      <main>
          <h1 className="text-7xl font-regular leading-loose">
            Portfolio
          </h1>
          
          <div class="h-32"></div>

          <Link href="/projects">
            <div class="box-content h-32 w-80 border-t py-2 border-[#181818] dark:border-[#EFEFEF] hover:cursor-pointer hover:underline">
              <div class="flex justify-between">
                <div class="hover:underline">
                  <a>Projects</a>
                </div>
                <div class="text-right">
                    Housing price analysis<br></br>
                    NLP image generation<br></br>
                    Monte Carlo simulation<br></br>
                    ...
                </div>
              </div>
            </div>
          </Link>
          <Link href="/abilities">
            <div class="box-content h-32 w-80 border-t py-2 border-[#181818] dark:border-[#EFEFEF] hover:cursor-pointer hover:underline">
              <div class="flex justify-between">
                <div class="hover:underline">
                  <a>Abilities</a>
                </div>
                <div class="text-right">
                  Python<br></br>
                  JavaScript<br></br>
                  C++<br></br>
                    ...
                </div>
              </div>
            </div>
          </Link>
          <Link href="/cv">
            <div class="box-content h-32 w-80 border-t py-2 border-[#181818] dark:border-[#EFEFEF] hover:cursor-pointer hover:underline">
              <div class="flex justify-between">
                <div class="hover:underline">
                  <a>CV</a>
                </div>
                <div class="text-right">
                    View
                </div>
              </div>
            </div>
          </Link>             
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
