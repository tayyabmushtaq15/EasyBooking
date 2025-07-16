"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { MapPin, Star, Heart, Filter, Grid, List, ArrowLeft } from "lucide-react"

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [filters, setFilters] = useState({
    propertyType: [] as string[],
    amenities: [] as string[],
    rating: 0,
  })

  const properties = [
    {
      id: 1,
      title: "Luxury Beach Resort",
      location: "Maldives",
      price: 450,
      originalPrice: 520,
      rating: 4.8,
      reviews: 1234,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Pool", "Spa", "Beach Access"],
      type: "Resort",
      discount: 15,
    },
    {
      id: 2,
      title: "Mountain View Hotel",
      location: "Swiss Alps",
      price: 320,
      rating: 4.6,
      reviews: 856,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Parking", "Restaurant", "Ski Access"],
      type: "Hotel",
    },
    {
      id: 3,
      title: "City Center Apartment",
      location: "New York",
      price: 180,
      rating: 4.4,
      reviews: 432,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Kitchen", "Gym", "Metro Access"],
      type: "Apartment",
    },
    {
      id: 4,
      title: "Cozy Cabin Retreat",
      location: "Colorado Mountains",
      price: 220,
      rating: 4.7,
      reviews: 298,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Fireplace", "Hot Tub", "Mountain View"],
      type: "Cabin",
    },
    {
      id: 5,
      title: "Glamping Experience",
      location: "Yellowstone",
      price: 280,
      originalPrice: 320,
      rating: 4.5,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Bathroom", "Kitchenette", "Nature View"],
      type: "Glamping",
      discount: 12,
    },
    {
      id: 6,
      title: "Beachfront Villa",
      location: "Bali, Indonesia",
      price: 380,
      rating: 4.9,
      reviews: 567,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Private Pool", "Beach Access", "Chef Service"],
      type: "Villa",
    },
  ]

  const propertyTypes = ["Hotel", "Apartment", "Resort", "Villa", "Cabin", "Glamping"]
  const amenitiesList = ["Wifi", "Pool", "Spa", "Parking", "Restaurant", "Gym", "Kitchen", "Beach Access"]

  const handleFilterChange = (type: string, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [type]: checked
        ? [...(prev[type as keyof typeof prev] as string[]), value]
        : (prev[type as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              EasyBooking
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">USD</Button>
              <Button variant="ghost">Sign in</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Search Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-gray-600">{properties.length} properties found</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 mr-2" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Price per night</Label>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Property Type */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Property Type</Label>
                  <div className="space-y-2">
                    {propertyTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={filters.propertyType.includes(type)}
                          onCheckedChange={(checked) => handleFilterChange("propertyType", type, checked as boolean)}
                        />
                        <Label htmlFor={type} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Amenities */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Amenities</Label>
                  <div className="space-y-2">
                    {amenitiesList.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={filters.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleFilterChange("amenities", amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Rating */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Minimum Rating</Label>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox
                          id={`rating-${rating}`}
                          checked={filters.rating === rating}
                          onCheckedChange={(checked) =>
                            setFilters((prev) => ({ ...prev, rating: checked ? rating : 0 }))
                          }
                        />
                        <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {rating}+
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "space-y-6"}>
              {properties.map((property) => (
                <Link key={property.id} href={`/property/${property.id}`}>
                  <Card
                    className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div className={`relative ${viewMode === "list" ? "w-64 flex-shrink-0" : "h-48"}`}>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      {property.discount && (
                        <Badge className="absolute top-2 left-2 bg-red-500">-{property.discount}%</Badge>
                      )}
                    </div>
                    <CardContent className="p-4 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{property.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center ml-4">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{property.rating}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {property.amenities.slice(0, 4).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold">${property.price}</span>
                            {property.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${property.originalPrice}</span>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">per night</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{property.reviews} reviews</p>
                          <Badge variant="outline" className="text-xs">
                            {property.type}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
