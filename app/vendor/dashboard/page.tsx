"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Calendar, DollarSign, Star, TrendingUp, Eye, Edit, Trash2, MessageSquare, Settings } from "lucide-react"

export default function VendorDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30")

  // Mock data
  const stats = {
    totalEarnings: 12450,
    totalBookings: 47,
    averageRating: 4.8,
    occupancyRate: 78,
  }

  const properties = [
    {
      id: 1,
      title: "Luxury Beach Resort",
      location: "Maldives",
      price: 450,
      rating: 4.8,
      reviews: 234,
      bookings: 12,
      earnings: 5400,
      status: "active",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Mountain View Cabin",
      location: "Colorado",
      price: 220,
      rating: 4.6,
      reviews: 89,
      bookings: 8,
      earnings: 1760,
      status: "active",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "City Center Apartment",
      location: "New York",
      price: 180,
      rating: 4.4,
      reviews: 156,
      bookings: 15,
      earnings: 2700,
      status: "inactive",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      guest: "John Smith",
      property: "Luxury Beach Resort",
      checkIn: "2024-01-15",
      checkOut: "2024-01-18",
      amount: 1350,
      status: "confirmed",
    },
    {
      id: 2,
      guest: "Emily Johnson",
      property: "Mountain View Cabin",
      checkIn: "2024-01-20",
      checkOut: "2024-01-23",
      amount: 660,
      status: "pending",
    },
    {
      id: 3,
      guest: "Michael Brown",
      property: "City Center Apartment",
      checkIn: "2024-01-25",
      checkOut: "2024-01-27",
      amount: 360,
      status: "confirmed",
    },
  ]

  const messages = [
    {
      id: 1,
      guest: "Sarah Wilson",
      property: "Luxury Beach Resort",
      message: "Hi! I have a question about the check-in process...",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      guest: "David Lee",
      property: "Mountain View Cabin",
      message: "Thank you for the wonderful stay!",
      time: "1 day ago",
      unread: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                EasyBooking
              </Link>
              <Badge variant="secondary">Vendor Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-600">Here's what's happening with your properties</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold">{stats.totalBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold">{stats.averageRating}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Across all properties</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
                  <p className="text-2xl font-bold">{stats.occupancyRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Properties Tab */}
          <TabsContent value="properties" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Properties</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Property
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        property.status === "active" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {property.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{property.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{property.location}</p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{property.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({property.reviews})</span>
                      </div>
                      <span className="font-bold">${property.price}/night</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600">Bookings</p>
                        <p className="font-semibold">{property.bookings}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Earnings</p>
                        <p className="font-semibold">${property.earnings}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Bookings</h2>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4">Guest</th>
                        <th className="text-left p-4">Property</th>
                        <th className="text-left p-4">Check-in</th>
                        <th className="text-left p-4">Check-out</th>
                        <th className="text-left p-4">Amount</th>
                        <th className="text-left p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>{booking.guest[0]}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{booking.guest}</span>
                            </div>
                          </td>
                          <td className="p-4">{booking.property}</td>
                          <td className="p-4">{booking.checkIn}</td>
                          <td className="p-4">{booking.checkOut}</td>
                          <td className="p-4 font-semibold">${booking.amount}</td>
                          <td className="p-4">
                            <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                              {booking.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold">Messages</h2>

            <div className="space-y-4">
              {messages.map((message) => (
                <Card key={message.id} className={message.unread ? "border-blue-200 bg-blue-50" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback>{message.guest[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">{message.guest}</span>
                            <span className="text-sm text-gray-500">·</span>
                            <span className="text-sm text-gray-500">{message.property}</span>
                            {message.unread && (
                              <Badge variant="secondary" className="text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-700">{message.message}</p>
                          <p className="text-sm text-gray-500 mt-1">{message.time}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                    <p className="text-gray-500">Revenue chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Trends</CardTitle>
                  <CardDescription>Booking patterns and occupancy rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                    <p className="text-gray-500">Booking trends chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Property Performance</CardTitle>
                  <CardDescription>Compare performance across properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {properties.map((property) => (
                      <div key={property.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{property.title}</p>
                          <p className="text-sm text-gray-600">{property.bookings} bookings</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${property.earnings}</p>
                          <p className="text-sm text-gray-600">Revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guest Reviews</CardTitle>
                  <CardDescription>Recent reviews and ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Overall Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold">{stats.averageRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Reviews</span>
                      <span className="font-semibold">479</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Response Rate</span>
                      <span className="font-semibold">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
