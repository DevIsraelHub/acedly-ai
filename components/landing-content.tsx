"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/constants";

const testimonials = [
  {
    name: "Benson",
    avatar: "B",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "James",
    avatar: "J",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Blessing",
    avatar: "B",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Steven",
    avatar: "S",
    title: "Developer",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <>
      <div className="px-10 pb-20 w-full">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Feautures</h2>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4">
          {features.map((item) => (
            <Card key={item.description} className="bg-[#292929] border-none text-white w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.title}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card key={item.description} className="bg-[#292929] border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}