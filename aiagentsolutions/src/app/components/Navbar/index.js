import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex-container">
            <Link href="#">SalesDone</Link>
            <Link href="#">Solutions</Link>
             <Link href="#">use Cases</Link>
             <Link href="#">Pricing</Link>
        </nav>
    )
}