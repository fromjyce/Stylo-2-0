"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PersonalizedDashboard() {
  const [sustainableScore, setSustainableScore] = useState(75)
  const recommendations = [
    { id: 1, name: "Striped Sweater", brand: "CozyKnits", price: 59.99 },
    { id: 2, name: "Slim Fit Jeans", brand: "DenimCo", price: 79.99 },
    { id: 3, name: "Leather Tote Bag", brand: "LuxeAccessories", price: 149.99 },
  ]

  const [closet, setCloset] = useState([
    { id: 1, name: "White T-Shirt", category: "Tops" },
    { id: 2, name: "Black Jeans", category: "Bottoms" },
    { id: 3, name: "Sneakers", category: "Shoes" },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Personalized Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Style Recommendations</CardTitle>
            <CardDescription>AI-powered personal style suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recommendations.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <Badge variant="secondary">${item.price}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sustainable Fashion Analyzer</CardTitle>
            <CardDescription>Environmental impact insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">{sustainableScore}</h3>
              <p className="text-sm text-muted-foreground">Sustainable Score</p>
            </div>
            <Progress value={sustainableScore} className="w-full" />
            <p className="mt-2 text-sm text-muted-foreground">
              Your wardrobe is {sustainableScore}% sustainable. Keep it up!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Virtual Closet</CardTitle>
            <CardDescription>Manage your personal wardrobe</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tops">
              <TabsList>
                <TabsTrigger value="tops">Tops</TabsTrigger>
                <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
                <TabsTrigger value="shoes">Shoes</TabsTrigger>
              </TabsList>
              <TabsContent value="tops">
                <ul className="space-y-2">
                  {closet.filter(item => item.category === "Tops").map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="bottoms">
                <ul className="space-y-2">
                  {closet.filter(item => item.category === "Bottoms").map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="shoes">
                <ul className="space-y-2">
                  {closet.filter(item => item.category === "Shoes").map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            <Button className="mt-4">Add Item</Button>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Style Evolution</CardTitle>
          <CardDescription>Your changing preferences over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-muted flex items-center justify-center">
            Placeholder for style evolution graph
          </div>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
          <CardDescription>Your recent interactions and discoveries</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>You liked a Floral Summer Dress</li>
            <li>You viewed 3 sustainable fashion options</li>
            <li>New trend alert: Oversized Blazers</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

