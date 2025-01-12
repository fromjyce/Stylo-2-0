"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

export default function FeatureExtraction() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<{ feature: string; confidence: number }[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setResults([
        { feature: "Red Dress", confidence: 0.95 },
        { feature: "V-Neck", confidence: 0.88 },
        { feature: "Short Sleeves", confidence: 0.92 },
      ])
    }, 2000)
  }

  const handleTrySample = () => {
    // Logic to load sample dataset
    console.log("Loading sample dataset")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Feature Extraction Tool</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>Upload images or CSV files</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="file-upload">Upload File</Label>
                <Input id="file-upload" type="file" />
              </div>
              <div className="flex space-x-2">
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Extract Features"}
                </Button>
                <Button type="button" variant="outline" onClick={handleTrySample}>
                  Try Sample Dataset
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
            <CardDescription>Extracted features and confidence scores</CardDescription>
          </CardHeader>
          <CardContent>
            {results.length > 0 ? (
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{result.feature}</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={result.confidence * 100} className="w-[100px]" />
                      <span>{(result.confidence * 100).toFixed(0)}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results yet. Upload a file and extract features to see results.</p>
            )}
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Comparison</CardTitle>
          <CardDescription>Raw data vs. Extracted features</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="raw">
            <TabsList>
              <TabsTrigger value="raw">Raw Data</TabsTrigger>
              <TabsTrigger value="extracted">Extracted Features</TabsTrigger>
            </TabsList>
            <TabsContent value="raw">
              <div className="bg-muted p-4 rounded-lg">
                <p>Raw image or CSV data will be displayed here.</p>
              </div>
            </TabsContent>
            <TabsContent value="extracted">
              <div className="bg-muted p-4 rounded-lg">
                <p>Processed image with heatmap overlay or extracted features will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>Frequently Asked Questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the feature extraction work?</AccordionTrigger>
              <AccordionContent>
                Our AI analyzes images or CSV data to identify key features of garments, such as color, style, and fabric type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What file formats are supported?</AccordionTrigger>
              <AccordionContent>
                We support common image formats (JPEG, PNG) and CSV files for batch processing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How accurate is the feature extraction?</AccordionTrigger>
              <AccordionContent>
                Our AI model achieves an average accuracy of 95% across various garment types and features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

