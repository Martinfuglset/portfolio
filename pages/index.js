import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';


const Cube = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //if(!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if(currentTheme === 'light'){
    return ("https://prod.spline.design/rkU4Xnbh-xYB26Ea/scene.splinecode")
  } else {
    return ("https://prod.spline.design/Zn4pPGV65ax0UvRZ/scene.splinecode")
  }
}

export default function Home() {
  return (
      <main className='flex justify-around px-20 space-x-10'>
        <div className='flex flex-row content-center'>
          <div className='text-7xl leading-relaxed ml-64'>
            <div className='h-72'></div>
            <a className='hover:underline' href='/projects'>Projects</a><br></br>
            <a className='hover:underline' href='/abilities'>Abilities</a><br></br>
            <a className='hover:underline' href='/cv'>CV</a><br></br>
          </div>
          <Spline class="scale-75" scene={Cube()} />
        </div>
      </main>
  )
}
