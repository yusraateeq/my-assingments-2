"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();

    return (
        <>
            <h2>Welcome to contact page</h2><br />

            <Link href="/">Home</Link><br /><br />
            <Link href="/About">About</Link><br /><br />

            <button onClick={() => router.push("/")}>Go to Home page</button>
            <button onClick={() => router.push("/About")}>Go to Navbar page</button>
        </>
    )
};
export default Navbar