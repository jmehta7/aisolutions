"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    return router.push("/book/add_book");
  };
  return (
    <section className="home-solution">
      <h1 className="solution-title">Deploy AI Agents to Run Your Business on Autopilot</h1>
      <p className="solution-subtitle">Scale faster without increasing headcount, work smarter, and eliminate repetitive tasks — our custom AI agents handle operations, boost sales, and streamline workflows 24/7</p>
     
      <div className="solution-flex">
      <button className="solution-btn" onClick={handleClick}>Book a call</button>
       <button className="solution-btn">Join Community</button>
        <button className="solution-btn">Solutions</button>
        </div>
    </section>
  )
}
