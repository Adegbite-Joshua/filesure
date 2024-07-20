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
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="project1">Project 1</TabsTrigger>
        <TabsTrigger value="project2">Project 2</TabsTrigger>
        <TabsTrigger value="project3">Project 3</TabsTrigger>
        <TabsTrigger value="project4">Project 4</TabsTrigger>
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

function Project({project}:{project:string}) {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Project {project}</h1>
        <p>Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
        <div className="mt-4">
          <span className="text-lg font-semibold">Business analysis</span>
          <span> / iOS / Android / QA / UI/UX Design</span>
        </div>
        <div className="flex justify-center items-center mt-2">
          <span className="mr-4">📍 India</span>
          <span>🏢 Real Estate</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>400%</CardTitle>
            <CardDescription>User Growth</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>+200,000</CardTitle>
            <CardDescription>Active Users</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex justify-center mb-8">
        <a href="#" className="mr-4">
          <img src="path-to-apple-store-logo.png" alt="Download on the App Store" />
        </a>
        <a href="#">
          <img src="path-to-google-play-logo.png" alt="Get it on Google Play" />
        </a>
      </div>

      <div className="flex justify-center mb-8">
        <img src="path-to-screenshot1.png" alt="App Screenshot 1" className="w-1/3 mx-2" />
        <img src="path-to-screenshot2.png" alt="App Screenshot 2" className="w-1/3 mx-2" />
      </div>
    </div>
  )
}

export default ProjectTabs;
