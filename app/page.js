import Link from "next/link"
export default function Home() {
  return(
    <>
    <h1 className="text-4xl m-2 text-center">Welcome to my Next Dash</h1>
    <ol type="A" className="m-[20px] flex justify-center gap-5">
      <li className="bg-orange-400 p-2"><Link href={'/login'} >Login</Link></li>
      <li className="bg-orange-400 p-2"><Link href={'/post'}>Post</Link></li>
      <li className="bg-orange-400 p-2"><Link href={'/todos'}>Todos</Link></li>
    </ol>
    
    
    </>
  )
}
