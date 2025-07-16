"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Star, CreditCard, Shield, Info } from "lucide-react"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  })

  // Mock property data
  const property = {
    id: params.id,
    title: "Luxury Beach Resort",
    location: "Maldives",
    price: 450,
    rating: 4.8,
    reviews: 1234,
    image: "/placeholder.svg?height=200&width=300",
    host: "Sarah Johnson",
  }

  const bookingDetails = {
    checkIn: "Dec 25, 2024",
    checkOut: "Dec 28, 2024",
    guests: 2,
    nights: 3,
  }

  const pricing = {
    basePrice: property.price * bookingDetails.nights,
    cleaningFee: 75,
    serviceFee: 188,
    taxes: 95,
    total: 0,
  }
  pricing.total = pricing.basePrice + pricing.cleaningFee + pricing.serviceFee + pricing.taxes

  const handleInputChange = (field: string, value: string) => {
    setGuestInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleCardChange = (field: string, value: string) => {
    setCardInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking submitted:", { guestInfo, cardInfo, paymentMethod })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href={`/property/${params.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to property
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-10">Confirm and pay</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="space-y-8">
              {/* Trip Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Your trip</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Dates</p>
                      <p className="text-sm text-gray-600">
                        {bookingDetails.checkIn} - {bookingDetails.checkOut}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Guests</p>
                      <p className="text-sm text-gray-600">{bookingDetails.guests} guests</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Guest Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Guest information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          value={guestInfo.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          value={guestInfo.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={guestInfo.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={guestInfo.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="requests">Special requests (optional)</Label>
                      <Textarea
                        id="requests"
                        placeholder="Any special requests or requirements?"
                        value={guestInfo.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose how to pay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit or debit card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="paypal"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <Label htmlFor="cardNumber">Card number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardInfo.number}
                          onChange={(e) => handleCardChange("number", e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={cardInfo.expiry}
                            onChange={(e) => handleCardChange("expiry", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input
                            id="cvc"
                            placeholder="123"
                            value={cardInfo.cvc}
                            onChange={(e) => handleCardChange("cvc", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on card</Label>
                        <Input
                          id="cardName"
                          value={cardInfo.name}
                          onChange={(e) => handleCardChange("name", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms of Service
                        </Link>
                        ,{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                        , and{" "}
                        <Link href="/host-guarantee" className="text-blue-600 hover:underline">
                          Host Guarantee Terms
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm">
                        Send me marketing emails about EasyBooking's products and services
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg rounded-md shadow-md">
                Confirm and pay
              </Button>
            </div>

            {/* Booking Summary */}
            <div className="space-y-8">
              {/* Property Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{property.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{property.rating}</span>
                        <span className="text-sm text-gray-600 ml-1">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Price details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>
                      ${property.price} x {bookingDetails.nights} nights
                    </span>
                    <span>${pricing.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>${pricing.cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>${pricing.serviceFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>${pricing.taxes}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total (USD)</span>
                    <span>${pricing.total}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Cancellation Policy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Cancellation policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Free cancellation for 48 hours. Cancel before check-in on Dec 23 for a partial refund.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              {/* Ground Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2" />
                    Ground rules
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    We ask every guest to remember a few simple things about what makes a great guest.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Follow the house rules</li>
                    <li>• Treat your Host's home like your own</li>
                    <li>• Communicate with your Host</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
