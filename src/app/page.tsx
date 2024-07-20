'use client'
import { ConsultationForm } from "@/components/LandingPage/ConsultationForm";
import Navbar from "@/components/NavBar/Navbar";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <div className="bg-slate-100 pt-40">
        <div className="flex flex-col p-28">
          <div className="w-3/6">
            <p>
              <span className="text-yellow-400 text-4xl font-bold">User-Centric Excellence:</span> 
              <span className="text-3xl font-bold">Our App Development services</span>
            </p>
            <p className="text-3xl font-bold">Tackle Your Pain Points</p>
            <p>User-Centric Excellence: Our App Development services Tackles Your Pain Points</p>
            <p>Experience a Seamless Digital Journey with <span className="text-green-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience</span> to Unparalleled Heights.</p>
          </div>
          <ConsultationForm/>
        </div>
      </div>
    </main>
  );
}
