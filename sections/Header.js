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

    if(currUrl === '/'){
      return
    } else {
      if(currUrl === '/cv'){
        return (currUrl.replace("/"," / ").toUpperCase())
      } else {
        return (toTitleCase(currUrl.replace("/"," / ")))
      }
    }
  }

  return (
        <div className="flex items-center justify-between h-16">
          <div className="">
            <Link href={"/"}>
              <a className="hover:cursor-pointer">Martin Fuglset</a>
            </Link>
            <>{pageTitle()}</>
          </div>
          <div className="">Contact</div>
          <div className=""><a className="hover:cursor-pointer">{renderThemeChanger()}</a></div>
        </div>
      )
    }

export default Header