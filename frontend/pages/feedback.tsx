"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function FeedbackAndInsights() {
  const [extractions, setExtractions] = useState([
    { id: 1, feature: "Red Dress", confidence: 0.85, userFeedback: null },
    { id: 2, feature: "Floral Pattern", confidence: 0.72, userFeedback: null },
    { id: 3, feature: "V-Neck", confidence: 0.93, userFeedback: null },
  ])

  const handleFeedback = (id: number, feedback: 'correct' | 'partially_correct' | 'incorrect') => {
    setExtractions(extractions.map(extraction => 
      extraction.id === id ? { ...extraction, userFeedback: feedback } : extraction
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Feedback and Insights</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Extractions</CardTitle>
          <CardDescription>Validate and refine extracted features</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extractions.map((extraction) => (
                <TableRow key={extraction.id}>
                  <TableCell>{extraction.feature}</TableCell>
                  <TableCell>
                    <Progress value={extraction.confidence * 100} className="w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) => handleFeedback(extraction.id, value as 'correct' | 'partially_correct' | 'incorrect')}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Provide feedback" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="correct">Correct</SelectItem>
                        <SelectItem value="partially_correct">Partially Correct</SelectItem>
                        <SelectItem value="incorrect">Incorrect</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Statistics</CardTitle>
            <CardDescription>Visualizations of feedback data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-muted flex items-center justify-center">
              Placeholder for feedback statistics charts
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Improvement</CardTitle>
            <CardDescription>Confidence increase over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-2xl font-bold">15%</p>
              <p className="text-sm text-muted-foreground">Confidence increase</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Before Correction</h4>
              <Progress value={70} className="mb-2" />
              <h4 className="font-semibold mb-2">After Correction</h4>
              <Progress value={85} className="mb-2" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Top Contributors</CardTitle>
          <CardDescription>Users who provided the most valuable feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Contributions</TableHead>
                <TableHead>Badge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alice</TableCell>
                <TableCell>150</TableCell>
                <TableCell><Badge>Feature Refinement Guru</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob</TableCell>
                <TableCell>120</TableCell>
                <TableCell><Badge>Trend Spotter</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Charlie</TableCell>
                <TableCell>100</TableCell>
                <TableCell><Badge>Fashion Expert</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

