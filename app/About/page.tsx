"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
function About() {
    const router = useRouter();
    return (
        <>
            <h2>Welcome to About page</h2><br />

            <Link href='/'>Home</Link><br /><br />
            <Link href='/Navbar'>Contact</Link><br /><br />
            
            <button onClick={() => router.push("/")}>Go to Home page</button>
            <button onClick={() => router.push("/Navbar")}>Go to Navbar page</button>
        </>
    )
};
export default About