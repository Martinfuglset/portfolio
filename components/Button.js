import Link from "next/link"

const Button = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="p-4 hover:bg-[#ff4d00] bg-[#181818] text-[#efefef] dark:bg-[#efefef] dark:text-[#181818]">
        {text}
      </button>
    </Link>
  )
}

export default Button