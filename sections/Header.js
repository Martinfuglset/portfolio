import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react";
// import Menu from "../components/Menu";
// import Modal from "../components/Modal";

const Header = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

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

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  const pageTitle = () => {
    if(!mounted) return null;

    const currUrl = window.location.pathname;

    if(currUrl === '/cv'){
      return (currUrl.replace("/","").toUpperCase())
    } else {
      return (toTitleCase(currUrl.replace("/","")))
    }
  }


  return (
    <header className="h-16 flex items-center justify-between">
      <Link href="/"><a>Martin Fuglset</a></Link>
      <a className="ml-10`">{pageTitle()}</a>
      <ul className="flex gap-8">
          <a className="hover:cursor-pointer hover:underline">{renderThemeChanger()}</a>
          <a className="hover:cursor-pointer hover:underline">Menu</a>
      </ul>
    </header>
  )
}

export default Header