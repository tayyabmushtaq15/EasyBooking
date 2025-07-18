"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MapPin, Calendar, Users, Search, Star, Heart, Menu } from "lucide-react"

export default function HomePage() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()

  const propertyTypes = [
    {
      title: "Hotels",
      image: "/placeholder.svg?height=200&width=300",
      count: "1,234 properties",
    },
    {
      title: "Apartments",
      image: "/placeholder.svg?height=200&width=300",
      count: "856 properties",
    },
    {
      title: "Resorts",
      image: "/placeholder.svg?height=200&width=300",
      count: "432 properties",
    },
    {
      title: "Villas",
      image: "/placeholder.svg?height=200&width=300",
      count: "298 properties",
    },
    {
      title: "Glamping",
      image: "/placeholder.svg?height=200&width=300",
      count: "156 properties",
    },
    {
      title: "Cabins",
      image: "/placeholder.svg?height=200&width=300",
      count: "89 properties",
    },
  ]

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Beach Resort",
      location: "Maldives",
      price: 450,
      rating: 4.8,
      reviews: 1234,
      image: "/placeholder.svg?height=200&width=300",
      amenities: ["Wifi", "Pool", "Spa", "Beach Access"],
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
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Find your next stay</h1>
            <p className="text-lg md:text-2xl opacity-90">Search low prices on hotels, homes and much more...</p>
          </div>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto shadow-lg rounded-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="relative col-span-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input placeholder="Where are you going?" className="pl-10 h-12 rounded-md" />
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal h-12 w-full bg-white text-gray-900 border rounded-md">
                      <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{checkIn ? checkIn.toLocaleDateString() : "Check-in"}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={checkIn} onSelect={setCheckIn} />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal h-12 w-full bg-white text-gray-900 border rounded-md">
                      <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{checkOut ? checkOut.toLocaleDateString() : "Check-out"}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent mode="single" selected={checkOut} onSelect={setCheckOut} />
                  </PopoverContent>
                </Popover>
                <Select>
                  <SelectTrigger className="h-12 w-full rounded-md border">
                    <Users className="mr-2 h-5 w-5 flex-shrink-0" />
                    <SelectValue placeholder="Guests & rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-adult">1 adult</SelectItem>
                    <SelectItem value="2-adults">2 adults</SelectItem>
                    <SelectItem value="family">2 adults · 2 children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-6">
                <Link href="/search">
                  <Button className="w-full bg-blue-500 hover:bg-blue-700 h-12 text-lg rounded-md shadow-md">
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Quick escape, quality time</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">Save up to 20% with a Getaway Deal</p>
                  <Button className="w-full sm:w-auto">Save on stays</Button>
                </div>
                <div className="w-full sm:w-48 h-32 sm:h-auto relative">
                  <Image src="/placeholder.svg?height=150&width=200" alt="Getaway Deal" fill className="object-cover" />
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">New year, new adventures</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Save 15% or more when you book and stay before April 1, 2024
                  </p>
                  <Button className="w-full sm:w-auto">Find Early 2024 Deals</Button>
                </div>
                <div className="w-full sm:w-48 h-32 sm:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="New Year Deal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Browse by Property Type */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by property type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {propertyTypes.map((type, index) => (
              <Link key={index} href={`/search?type=${type.title.toLowerCase()}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between rounded-xl">
                  <div className="relative h-24 md:h-32">
                    <Image src={type.image || "/placeholder.svg"} alt={type.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4 flex flex-col items-center">
                    <h3 className="font-semibold text-base text-center">{type.title}</h3>
                    <p className="text-xs text-gray-600 text-center">{type.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col rounded-xl">
                  <div className="relative h-48">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1 justify-between">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-base flex-1 mr-2">{property.title}</h3>
                      <div className="flex items-center flex-shrink-0">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2 text-sm">{property.location}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {property.amenities.slice(0, 3).map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-xl font-bold">${property.price}</span>
                        <span className="text-sm text-gray-600 ml-1">per night</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{property.reviews} reviews</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">EasyBooking</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Your trusted travel companion for finding the perfect accommodation worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="hover:text-white transition-colors">
                    Safety
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="/vendor/signup" className="hover:text-white transition-colors">
                    List Your Property
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate" className="hover:text-white transition-colors">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-white transition-colors">
                    Business Travel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 EasyBooking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
