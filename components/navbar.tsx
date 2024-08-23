import Link from "next/link"

const links =  [
    {href:"/counter", text:'counter'},
    {href:"/bar", text:'bar'},
    {href:"/todo-list", text:'todo-list'},
    {href:"/prisma", text:'prisma'},   
]

export default function Navbar() {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">Home</Link>
        <ul className="menu md:ml-8 flex-col sm:flex-row">
          {
            links.map((link) =>(
              <li key={link.text}>
                <Link href={link.href} className="capitalize">{link.text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}


