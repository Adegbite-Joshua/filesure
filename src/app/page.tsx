'use client'
import { ConsultationForm } from "@/components/LandingPage/ConsultationForm";
import Project from "@/components/LandingPage/Project";
import ProjectTabs from "@/components/LandingPage/ProjectTabs";
import Stacks from "@/components/LandingPage/Stacks";
import { StacksAccordion } from "@/components/LandingPage/StacksAccordion";
import Navbar from "@/components/NavBar/Navbar";

export default function Home() {
  const webStacks = [
    "PHP",
    "Javascript",
    "Node.JS",
    "Web Socket",
    "Vue.js",
    "Nuxt",
    "MySQL",
    "Laravel",
    "GO lang",
    "django",
    "Python"
  ];

  const mobileStacks = [
    "Swift",
    "Kotlin",
    "Alamofire",
    "Firebase",
    "CoreData",
    "Room",
    "Realm",
    "Coroutine",
    "RxJava",
    "RxSwift",
    "Unit Test",
    "Navigation"
  ];
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
          <ConsultationForm />
        </div>
      </div>
      <div className="p-10">
        <hr />
        <div className="flex justify-evenly my-14">
          <img src="/planet.png" alt="" />
          <img src="/planet.png" alt="" />
          <img src="/planet.png" alt="" />
          <img src="/planet.png" alt="" />
          <img src="/planet.png" alt="" />
          <img src="/planet.png" alt="" />
        </div>
        <hr />
        <div className="grid grid-cols-2 p-24">
          <div className="col-span-1">
            <h3 className="text-3xl font-bold mb-6">Full development cycle</h3>
            <h6 className="font-bold">We use proven technologies</h6>
            <Stacks title="Web" stacks={webStacks} />
            <Stacks title="Mobile" stacks={mobileStacks} />
          </div>
          <StacksAccordion />
        </div>
      </div>
      <div className="bg-slate-100 p-28">
        <h3 className="w-3/6 font-bold text-4xl">Develpoed more than <span className="text-green-600">100</span> projects in <span className="text-green-600">15</span> industries</h3>
        <div className="grid grid-cols-3 gap-4 my-5">
          <div className="col-span-1">
            <Project icon="/social.png" project="Social media" />
            <Project icon="/social.png" project="Fitness and sport" />
            <Project icon="/social.png" project="Bank" />
            <Project icon="/social.png" project="Construction" />
            <Project icon="/social.png" project="Game projects" />
          </div>
          <div className="col-span-1">
            <Project icon="/social.png" project="Education" />
            <Project icon="/social.png" project="Auto, transport" />
            <Project icon="/social.png" project="Medicine, health" />
            <Project icon="/social.png" project="Restaurants, food delivery" />
            <Project icon="/social.png" project="Marketplaces" />
          </div>
          <div className="col-span-1">
            <Project icon="/social.png" project="AR technology" />
            <Project icon="/social.png" project="TV series" />
            <Project icon="/social.png" project="Startups" />
            <Project icon="/social.png" project="Religion" />
            <Project icon="/social.png" project="Online courses" />
          </div>
        </div>
        <h3 className="text-4xl font-bold">Projects we are proud of</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit amet itaque asperiores.</p>
        <ProjectTabs/>
      </div>
    </main>
  );
}
