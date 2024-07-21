import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  TabsList,
  TabsContent,
  Tabs,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProjectTabs() {
  return (
    <Tabs defaultValue="project1" className="w-full">
      <TabsList className="grid bg-transparent md:w-3/6 grid-cols-4">
        <TabsTrigger className='disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent' value="project1"><span className='text-sm md:text-lg font-bold'>Project 1</span></TabsTrigger>
        <TabsTrigger className='disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent' value="project2"><span className='text-sm md:text-lg font-bold'>Project 2</span></TabsTrigger>
        <TabsTrigger className='disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent' value="project3"><span className='text-sm md:text-lg font-bold'>Project 3</span></TabsTrigger>
        <TabsTrigger className='disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent' value="project4"><span className='text-sm md:text-lg font-bold'>Project 4</span></TabsTrigger>
      </TabsList>

      <TabsContent value="project1">
        <Project project="1" />
      </TabsContent>

      <TabsContent value="project2">
        <Project project="2" />
      </TabsContent>

      <TabsContent value="project3">
        <Project project="3" />
      </TabsContent>

      <TabsContent value="project4">
        <Project project="4" />
      </TabsContent>
    </Tabs>
  )
}

function Project({ project }: { project: string }) {
  return (
    <div className="container flex flex-col md:flex-row mx-auto md:p-4">
      <div className='w-full md:w-7/12'>
        <div className="mb-8">
          <h1 className="text-4xl my-8 font-bold">Project {project}</h1>
          <p className='mb-8'>Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
          <div className="mt-4">
            <p>Business analysis / iOS / Android / QA / UI/UX Design</p>
          </div>
          <div className="flex items-center mt-2">
            <span className="mr-4 flex gap-2">
              <img src="/location.png" alt="Location icon" /> India
            </span>
            <span className="mr-4 flex gap-2">
              <img src="/work.png" alt="Briefcase icon" /> Real Estate
            </span>
          </div>
        </div>

        <div className="grid md:w-3/6 grid-cols-2 gap-8 mb-8">
          <Card className='col-span-1 bg-transparent border-0 shadow-none'>
            <CardHeader>
              <CardTitle className='font-bold'>400%</CardTitle>
              <CardDescription>User Growth</CardDescription>
            </CardHeader>
          </Card>
          <Card className='col-span-1 bg-transparent border-0 shadow-none'>
            <CardHeader>
              <CardTitle className='font-bold'>+200,000</CardTitle>
              <CardDescription>Active Users</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="md:w-5/12 flex justify-end items-end mb-8">
          <a href="www.apple.com" className="mr-4">
            <img src="app_store.png" alt="Download on the App Store" />
          </a>
          <a href="play.google.com">
            <img src="play_store.png" alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-5/12 flex mb-8 justify-end items-end">
        <img src="/double_image.png" alt="App Screenshot 1" className="w-auto ms-auto mx-2" />
        {/* <img src="/hope1.png" alt="App Screenshot 2" className="w-1/3 mx-2" /> */}
      </div>
    </div>
  )
}

export default ProjectTabs;
