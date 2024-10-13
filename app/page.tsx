"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Homepage() {
  const router = useRouter();
  return (
    <>
      <h1>Welcome to Home page</h1><br /><br />
      <Link href='/About'>About</Link><br /><br />
      <Link href='/Navbar'>Contact</Link><br /><br />

      <button onClick={() => router.push("/About")}>Go to About page</button>
      <button onClick={() => router.push("/Navbar")}>Go to Contact page</button>
    </>
  )
};