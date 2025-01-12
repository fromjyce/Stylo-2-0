"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function TrendsAndAnalytics() {
  const [timelineValue, setTimelineValue] = useState([2023])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trends and Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fashion Trend Analysis</CardTitle>
            <CardDescription>Live visualizations of current trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-muted flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?text=Fashion+Trend+Map"
                alt="Fashion Trend Map"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What's Hot Now?</CardTitle>
            <CardDescription>AI-predicted trends updated hourly</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Oversized Blazers</span>
                <Badge>Trending in Europe</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span>Pastel Colors</span>
                <Badge>Global Trend</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span>Sustainable Fabrics</span>
                <Badge>Rising Trend</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Trend Timeline</CardTitle>
          <CardDescription>View past and projected future trends</CardDescription>
        </CardHeader>
        <CardContent>
          <Slider
            defaultValue={[2023]}
            max={2025}
            min={2020}
            step={1}
            onValueChange={(value) => setTimelineValue(value)}
          />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Trends in {timelineValue[0]}</h3>
            <ul className="space-y-2">
              <li>Trend 1 for the selected year</li>
              <li>Trend 2 for the selected year</li>
              <li>Trend 3 for the selected year</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Key takeaways from our trend analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Based on our analysis, we predict a shift towards more sustainable and versatile fashion choices in the coming year. Consumers are increasingly valuing pieces that can be styled multiple ways and have a lower environmental impact.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

