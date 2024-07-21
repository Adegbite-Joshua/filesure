'use client'
import Footer from "@/components/Footer/Footer";
import ApplicationStages from "@/components/LandingPage/ApplicationStages";
import { ConsultationForm } from "@/components/LandingPage/ConsultationForm";
import { FaqsAccordion } from "@/components/LandingPage/FaqsAccordion";
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

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Consultation submitted')
  };

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Discussion submitted')
  };


  const faqs = [
    { question: 'What is the cost of a mobile application?', answer: 'The cost varies based on the requirements and complexity of the project.' },
    { question: 'How long will development take?', answer: 'Development time depends on the project scope. Medium projects take up to 3 months, while large projects take 4-6 months. Average development time from start to finished application: Medium projects up to <strong>3 months</strong>. Large projects about <strong>4-6 months</strong>. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.' },
    { question: 'Do you provide a guarantee for the mobile application?', answer: 'Yes, we provide a guarantee period for our developed applications.' },
    { question: 'I will not tell my idea, do you guarantee confidentiality?', answer: 'Yes, we guarantee confidentiality for all client ideas and projects.' },
];
  return (
    <main className="relative w-full">
      <Navbar />

      <div className="bg-slate-100 pt-40 relative overflow-hidden">
        <div className="flex flex-col p-5 md:p-28 relative z-10">
          <div className="md:w-3/6">
            <p>
              <span className="text-yellow-400 text-4xl font-bold">User-Centric Excellence:</span>
              <span className="text-3xl font-bold">Our App Development services</span>
            </p>
            <p className="text-3xl font-bold">Tackle Your Pain Points</p>
            <p>User-Centric Excellence: Our App Development services Tackles Your Pain Points</p>
            <p>Experience a Seamless Digital Journey with <span className="text-green-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience</span> to Unparalleled Heights.</p>
          </div>
          <ConsultationForm isDiscussionForm={false} buttonText="Get consultation" handleSubmit={handleConsultationSubmit} />
        </div>
        <div className="hidden md:grid grid-cols-2 absolute inset-y-0 right-0 w-1/2 transform -rotate-12 h-full overflow-hidden">
          <img src="/iamge1.png" alt="Image 1" className="col-span-2 p-4" />
          <img src="/image2.png" alt="Image 2" className="col-span-2 p-4" />
          <img src="/image3.png" alt="Image 3" className="col-span-2 p-4" />
          <img src="/hope.png" alt="Image 4" className="col-span-2 p-4" />
        </div>
      </div>

      <div className="p-3 md:p-10">
        <hr />
        <div className="flex flex-wrap justify-evenly my-14">
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
          <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" src="/planet.png" alt="Planet image" />
        </div>

        <hr />
        <div className="grid grid-cols-2 p-5 md:p-24">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold mb-6">Full development cycle</h3>
            <h6 className="font-bold">We use proven technologies</h6>
            <Stacks title="Web" stacks={webStacks} />
            <Stacks title="Mobile" stacks={mobileStacks} />
          </div>
          <StacksAccordion />
        </div>
      </div>

      <div className="bg-slate-100 p-5 md:p-28">
        <h3 className="md:w-3/6 font-bold text-4xl">Developed more than <span className="text-green-600">100</span> projects in <span className="text-green-600">15</span> industries</h3>
        <div className="grid grid-cols-6 gap-4 my-5">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Project icon="/social.png" project="Social media" />
            <Project icon="/sport.png" project="Fitness and sport" />
            <Project icon="/bank.png" project="Bank" />
            <Project icon="/construction.png" project="Construction" />
            <Project icon="/game.png" project="Game projects" />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Project icon="/education.png" project="Education" />
            <Project icon="/transport.png" project="Auto, transport" />
            <Project icon="/health.png" project="Medicine, health" />
            <Project icon="/restaurant.png" project="Restaurants, food delivery" />
            <Project icon="/market-place.png" project="Marketplaces" />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <Project icon="/technology.png" project="AR technology" />
            <Project icon="/tv.png" project="TV series" />
            <Project icon="/work.png" project="Startups" />
            <Project icon="/religion.png" project="Religion" />
            <Project icon="/courses.png" project="Online courses" />
          </div>
        </div>
        <h3 className="text-4xl font-bold">Projects we are proud of</h3>
        <p className="my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit amet itaque asperiores.</p>
        <ProjectTabs />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-yellow-500 via-yellow-500  to-green-700 p-5 md:px-20 md:p-10">
        <div className="w-full md:w-3/6 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">Let's discuss<br />Your project</h1>
            <p className="text-lg text-white mb-8">
              Let's figure out how to create an effective application, its cost, and terms of its development
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/6">
          <ConsultationForm isDiscussionForm={true} buttonText="Discuss the project" handleSubmit={handleDiscussionSubmit} />
        </div>
      </div>

      <div className="container p-5 md:p-12">
        <h3 className="text-4xl font-bold">Application Development Stages</h3>
        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <ApplicationStages
              icon="/plan.png"
              title="Analysis"
              text="We craft precise technical specs, aligning with your business, technology, and user requirements."
              stageIcon="/1.png"
            />
            <ApplicationStages
              icon="/design.png"
              title="Design"
              text="We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
              stageIcon="/2.png"
            />
            <ApplicationStages
              icon="/coding.png"
              title="Development"
              text="We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
              stageIcon="/3.png"
            />
          </div>
          <img className="col-span-6 md:col-span-3 lg:col-span-2 h-auto my-auto" src="/hope.png" alt="Application Development Stages Image" />
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <ApplicationStages
              icon="/copyright.png"
              title="Testing"
              text="We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions."
              stageIcon="/4.png"
            />
            <ApplicationStages
              icon="/hosting.png"
              title="Launching"
              text="We design the application page and publish it in the App Store and Google Play stores."
              stageIcon="/5.png"
            />
            <ApplicationStages
              icon="/mobile.png"
              title="Support"
              text="We monitor the stability of the application, update it for new devices and versions of iOS and Android."
              stageIcon="/6.png"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3 p-5 md:p-20">
        <div>
          <h3 className="text-3xl font-bold my-5">Our Team</h3>
          <p className="font-semibold">Thousand is a full-cycle digital production company with its ownproduct analysis, design, web and mobile development.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 my-5">
            <div>
              <h3 className="text-4xl font-bold">28</h3>
              <p className="font-semibold my-3 text-gray-500">team members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">+100</h3>
              <p className="font-semibold my-3 text-gray-500">projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">7 years</h3>
              <p className="font-semibold my-3 text-gray-500">in IT sphere</p>
            </div>
          </div>
          <p className="font-semibold">All the neccessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
        </div>
        <img src="/our-team.png" alt="Our Team" className="shadow-lg rounded-md" />
      </div>

      <div className="p-5 md:p-20">
        <h3 className="text-4xl font-bold">FAQ</h3>
        <FaqsAccordion faqs={faqs} />
      </div>

      <Footer />
    </main>
  );
}
