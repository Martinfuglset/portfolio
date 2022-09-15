import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react";

const Header = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'dark') {
      return (
        <a onClick={() => setTheme('light')}>
          Lights on
        </a>
        )
    } else {
      return (
        <a onClick={() => setTheme('dark')}>
          Lights off
        </a>
        )
    }

  }

  return (
    <header className="h-16 flex items-center justify-between">
      <Link href="/"><a>Martin Fuglset</a></Link>
      <ul className="flex gap-8">
          <a className="hover:cursor-pointer hover:underline">{renderThemeChanger()}</a>
          <Link href="/"><a className="hover:cursor-pointer hover:underline">Menu</a></Link>
      </ul>   
    </header>
  )
}

export default Header