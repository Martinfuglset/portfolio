import Link from "next/link"

const Footer = () => {
  return (
    <footer className="h-16 flex items-center justify-between">
      <ul className="flex gap-8">
          <Link href="mailto:fuglsetm@gmail.com"><a className="hover:underline">Email</a></Link>
          <Link href="https://github.com/Martinfuglset"><a className="hover:underline">GitHub</a></Link>
          <Link href="https://www.linkedin.com/in/martinfuglset/"><a className="hover:underline">LinkedIn</a></Link>
      </ul>   
    </footer>
  )
}

export default Footer