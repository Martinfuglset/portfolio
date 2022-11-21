import Link from "next/link"

const Button = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="
      p-3
      border-2

      bg-[#fff]
      text-[#000]
      border-[#000]
      hover:bg-[#000]
      hover:text-[#fff]
      
      dark:bg-[#000]
      dark:text-[#fff]
      dark:border-[#fff]
      dark:hover:bg-[#fff]
      dark:hover:text-[#000]
      "
      >
        {text}
      </button>
    </Link>
  )
}

export default Button