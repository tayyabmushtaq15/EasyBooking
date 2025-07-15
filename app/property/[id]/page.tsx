"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Star,
  Heart,
  Share,
  MapPin,
  Wifi,
  Car,
  Utensils,
  Waves,
  CalendarIcon,
  Users,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("2")

  // Mock property data
  const property = {
    id: params.id,
    title: "Luxury Beach Resort",
    location: "Maldives",
    price: 450,
    originalPrice: 520,
    rating: 4.8,
    reviews: 1234,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Free Parking" },
      { icon: Utensils, name: "Restaurant" },
      { icon: Waves, name: "Beach Access" },
    ],
    description:
      "Experience luxury at its finest in this stunning beachfront resort. Wake up to breathtaking ocean views, enjoy world-class amenities, and create unforgettable memories in paradise.",
    host: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: "2019",
      isSuper: true,
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation for 48 hours",
    },
  }

  const reviews = [
    {
      id: 1,
      user: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely amazing stay! The views were incredible and the service was top-notch.",
    },
    {
      id: 2,
      user: "Emily Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "1 month ago",
      comment: "Perfect location and beautiful property. Would definitely stay again!",
    },
  ]

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 3 // Default
  }

  const nights = calculateNights()
  const subtotal = property.price * nights
  const cleaningFee = 75
  const serviceFee = Math.round(subtotal * 0.12)
  const total = subtotal + cleaningFee + serviceFee

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/search" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to results
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{property.rating}</span>
              <span className="mx-1">·</span>
              <span className="underline">{property.reviews} reviews</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-8 h-96">
          <div className="col-span-2 row-span-2">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover rounded-l-lg"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${property.title} ${index + 2}`}
                fill
                className={`object-cover ${index === 1 ? "rounded-tr-lg" : index === 3 ? "rounded-br-lg" : ""}`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host Info */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">Hosted by {property.host.name}</h2>
                <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              </div>
              <Avatar className="h-12 w-12">
                <AvatarImage src={property.host.avatar || "/placeholder.svg"} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Award className="h-6 w-6 text-red-500" />
                <div>
                  <h3 className="font-medium">Superhost</h3>
                  <p className="text-sm text-gray-600">Superhosts are experienced, highly rated hosts.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div>
                  <h3 className="font-medium">Self check-in</h3>
                  <p className="text-sm text-gray-600">Check yourself in with the keypad.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-medium">Free cancellation</h3>
                  <p className="text-sm text-gray-600">Cancel before check-in for a full refund.</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <amenity.icon className="h-5 w-5" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Reviews */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <h3 className="text-xl font-semibold">
                  {property.rating} · {property.reviews} reviews
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-6">
                Show all {property.reviews} reviews
              </Button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl">${property.price}</span>
                    <span className="text-base font-normal text-gray-600"> night</span>
                  </div>
                  {property.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${property.originalPrice}</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? checkIn.toLocaleDateString() : "Check-in"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? checkOut.toLocaleDateString() : "Check-out"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                    </PopoverContent>
                  </Popover>
                </div>

                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                  </SelectContent>
                </Select>

                <Link href={`/booking/${property.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Reserve</Button>
                </Link>

                <p className="text-center text-sm text-gray-600">You won't be charged yet</p>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>
                      ${property.price} x {nights} nights
                    </span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>${cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>${serviceFee}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Where you'll be</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be displayed here</p>
          </div>
          <p className="mt-4 text-gray-700">
            Located in the heart of {property.location}, this property offers easy access to local attractions and
            amenities.
          </p>
        </div>

        {/* Policies */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Things to know</h3>
          <Tabs defaultValue="house-rules" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="house-rules">House rules</TabsTrigger>
              <TabsTrigger value="safety">Safety & property</TabsTrigger>
              <TabsTrigger value="cancellation">Cancellation policy</TabsTrigger>
            </TabsList>
            <TabsContent value="house-rules" className="space-y-2">
              <p>Check-in: {property.policies.checkIn}</p>
              <p>Check-out: {property.policies.checkOut}</p>
              <p>No smoking</p>
              <p>No pets</p>
              <p>No parties or events</p>
            </TabsContent>
            <TabsContent value="safety" className="space-y-2">
              <p>Smoke alarm</p>
              <p>Carbon monoxide alarm</p>
              <p>Fire extinguisher</p>
              <p>First aid kit</p>
            </TabsContent>
            <TabsContent value="cancellation" className="space-y-2">
              <p>{property.policies.cancellation}</p>
              <p>
                Review the Host's full cancellation policy which applies even if you cancel for illness or disruptions
                caused by COVID-19.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
