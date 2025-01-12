"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function OntologyBuilder() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Clothing", parent: null },
    { id: 2, name: "Tops", parent: 1 },
    { id: 3, name: "Bottoms", parent: 1 },
    { id: 4, name: "Accessories", parent: null },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()
    // Add new category logic here
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    // Implement search logic and update categories display
  }

  const handleExport = () => {
    const jsonData = JSON.stringify(categories)
    const blob = new Blob([jsonData], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ontology.json"
    a.click()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ontology Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fashion Ontology</CardTitle>
            <CardDescription>Expandable tree view of categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id} className={`pl-${category.parent ? "4" : "0"}`}>
                  {category.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
            <CardDescription>Create or edit categories</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddCategory}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category-name">Category Name</Label>
                  <Input id="category-name" placeholder="Enter category name" />
                </div>
                <div>
                  <Label htmlFor="parent-category">Parent Category</Label>
                  <Input id="parent-category" placeholder="Enter parent category (optional)" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter category description" />
                </div>
                <Button type="submit">Add Category</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>AI Suggestions</CardTitle>
          <CardDescription>Proposed new relationships or categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Badge key={index} variant="secondary">{suggestion}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Last updated: 2 hrs ago</p>
        <Button onClick={handleExport}>Export Ontology</Button>
      </div>
    </div>
  )
}

