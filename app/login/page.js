import Link from "next/link"
export default function Login() {
  return (
    <div>
      <form action="post">
        <input type="text" placeholder="enter username or e-mail" />
        <input type="text" placeholder="enter password" />
        <Link href={'/dashboard'}><input type="button" value="Submit" /></Link>
      </form>
    </div>
  )
}
