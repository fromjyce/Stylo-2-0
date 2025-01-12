"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  const [garmentsAnalyzed, setGarmentsAnalyzed] = useState(10452)
  const [currentCapability, setCurrentCapability] = useState(0)
  const capabilities = [
    "AI-Powered Feature Extraction",
    "Dynamic Ontology Building",
    "Real-time Trend Analysis",
    "Personalized Style Recommendations"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGarmentsAnalyzed(prev => prev + 1)
    }, 5000) // Increment every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCapability(prev => (prev + 1) % capabilities.length)
    }, 3000) // Change capability every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x"></div>
        <div className="relative z-10 p-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Fashion Intelligence</h1>
          <p className="text-xl mb-6">Revolutionizing the fashion industry with AI</p>
          <div className="h-12 overflow-hidden">
            <p className="text-2xl font-semibold animate-fade-in-down">
              {capabilities[currentCapability]}
            </p>
          </div>
          <Button className="mt-6" variant="secondary">Get Started</Button>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Empowering Fashion with AI</h2>
        <p className="text-xl mb-6">{garmentsAnalyzed.toLocaleString()} garments analyzed and counting!</p>
        <div className="flex justify-center space-x-4">
          <Button>Start Demo</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Quick Tour</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Welcome to Stylo 2.0</DialogTitle>
                <DialogDescription>
                  Let our AI assistant guide you through the key features of our platform.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                {/* Placeholder for chatbot interface */}
                <p>Chatbot interface goes here</p>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="secondary">Learn More</Button>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-4">What Our Users Say</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[
              { name: "Sarah L.", comment: "Stylo 2.0 has revolutionized my design process!" },
              { name: "Mark T.", comment: "The trend predictions are incredibly accurate." },
              { name: "Emily R.", comment: "I love how easy it is to build and manage ontologies." },
            ].map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <blockquote className="text-lg italic">
                      "{testimonial.comment}" - {testimonial.name}
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Ontology Creation", "Feature Extraction", "Feedback System", "Scalability"].map((feature) => (
          <Card key={feature}>
            <CardHeader>
              <CardTitle>{feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Description of the {feature.toLowerCase()} feature and its benefits.
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

