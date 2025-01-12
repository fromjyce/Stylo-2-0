"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecommendationsDashboard() {
  const [outfitOfTheDay, setOutfitOfTheDay] = useState({
    top: "White Cotton T-Shirt",
    bottom: "Blue Denim Jeans",
    shoes: "Brown Leather Sneakers",
    accessory: "Silver Watch"
  })

  const recommendations = [
    { id: 1, name: "Blue Denim Jacket", brand: "FashionCo", price: 89.99, similarity: 0.95 },
    { id: 2, name: "Black Leather Boots", brand: "StyleWalk", price: 129.99, similarity: 0.88 },
    { id: 3, name: "White Cotton T-Shirt", brand: "BasicLux", price: 24.99, similarity: 0.82 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recommendations Dashboard</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Outfit of the Day</CardTitle>
          <CardDescription>AI-curated look based on current trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {Object.entries(outfitOfTheDay).map(([category, item]) => (
              <li key={category} className="flex justify-between items-center">
                <span className="capitalize">{category}</span>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
          <Button className="mt-4">Refresh Outfit</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.brand}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?text=${encodeURIComponent(item.name)}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">${item.price.toFixed(2)}</span>
                <Badge variant="secondary">
                  {(item.similarity * 100).toFixed(0)}% Match
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Style a Look</CardTitle>
          <CardDescription>Mix and match to create your perfect outfit</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tops">
            <TabsList>
              <TabsTrigger value="tops">Tops</TabsTrigger>
              <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
              <TabsTrigger value="shoes">Shoes</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            <TabsContent value="tops">
              <div className="grid grid-cols-3 gap-4">
                {/* Placeholder for draggable top items */}
                <div className="aspect-square bg-muted rounded-lg"></div>
                <div className="aspect-square bg-muted rounded-lg"></div>
                <div className="aspect-square bg-muted rounded-lg"></div>
              </div>
            </TabsContent>
            {/* Similar TabsContent for bottoms, shoes, and accessories */}
          </Tabs>
          <div className="mt-4 p-4 border rounded-lg">
            <p className="text-center mb-2">Your Styled Look</p>
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder for drop zones */}
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="aspect-square bg-muted rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

