"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
     const router = useRouter();
      const handleClick = () => {
        return router.push("/book/add_lead");
      };
    return(
        <>
        {/* <nav className="flex-box">
            <div className="flex-container">
            <Link href="#">SalesDone</Link>
            <Link href="#">Solutions</Link>
             <Link href="#">use Cases</Link>
             <Link href="#">Pricing</Link>
             </div>
             <div>
               <button className="book-btn" onClick={handleClick}>Book a Call</button>
               </div>
        </nav> */}
        {/* <div>
            <button>Book Now</button>
        </div> */}

        <nav className="nav">
  <div className="nav-left">
    <Link href="#">SalesDone</Link>
  </div>

  <div className="nav-center">
    <Link className="transition-colors" href="#">Solutions</Link>
    <Link className="transition-colors" href="#">Use Cases</Link>
    <Link className="transition-colors" href="#">Pricing</Link>
  </div>

  <div className="nav-right">
    <button className="book-btn" onClick={handleClick}>Book a Call</button>
  </div>
</nav>
        </>
    )
}