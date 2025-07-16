"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Home, Building, TreePine, Tent } from "lucide-react"

export default function VendorSignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Property Info
    propertyType: "",
    propertyName: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // Pricing
    basePrice: "",
    cleaningFee: "",
    // Amenities
    amenities: [] as string[],
    // Legal
    agreeToTerms: false,
    agreeToHostGuarantee: false,
  })

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const propertyTypes = [
    { id: "hotel", label: "Hotel", icon: Building, description: "Traditional hotel with multiple rooms" },
    { id: "apartment", label: "Apartment", icon: Home, description: "Entire apartment or condo" },
    { id: "house", label: "House", icon: Home, description: "Entire house or villa" },
    { id: "cabin", label: "Cabin", icon: TreePine, description: "Cozy cabin or cottage" },
    { id: "glamping", label: "Glamping", icon: Tent, description: "Luxury camping experience" },
  ]

  const amenitiesList = [
    "WiFi",
    "Kitchen",
    "Parking",
    "Pool",
    "Hot Tub",
    "Gym",
    "Spa",
    "Restaurant",
    "Bar",
    "Beach Access",
    "Ski Access",
    "Pet Friendly",
    "Air Conditioning",
    "Heating",
    "Fireplace",
    "Balcony",
    "Garden",
  ]

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }))
  }

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("Vendor signup data:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="w-full">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
              <span>Personal Info</span>
              <span>Property Details</span>
              <span className="hidden sm:inline">Location</span>
              <span>Complete</span>
            </div>
            <Progress value={progress} className="h-2 sm:h-3" />
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-10">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Personal Information</CardTitle>
                <CardDescription className="text-base">
                  Tell us about yourself to get started as a host
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="h-12 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="h-12 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 rounded-md"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12 rounded-md"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Property Type & Details */}
          {step === 2 && (
            <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-10">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Property Details</CardTitle>
                <CardDescription className="text-base">
                  What type of property are you listing?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-base font-medium">Property Type *</Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) => handleInputChange("propertyType", value)}
                    className="space-y-3"
                  >
                    {propertyTypes.map((type) => (
                      <div
                        key={type.id}
                        className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                        <type.icon className="h-6 w-6 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <Label htmlFor={type.id} className="font-medium cursor-pointer text-base">
                            {type.label}
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyName" className="text-sm font-medium">
                    Property Name *
                  </Label>
                  <Input
                    id="propertyName"
                    placeholder="e.g., Cozy Downtown Apartment"
                    value={formData.propertyName}
                    onChange={(e) => handleInputChange("propertyName", e.target.value)}
                    className="h-12 rounded-md"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your property, its unique features, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="resize-none rounded-md"
                  />
                  <p className="text-xs text-gray-500">Help guests understand what makes your place special</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Location & Amenities */}
          {step === 3 && (
            <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-10">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Location & Amenities</CardTitle>
                <CardDescription className="text-base">
                  Where is your property located and what amenities do you offer?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">
                    Street Address *
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="h-12 rounded-md"
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="h-12 rounded-md"
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium">
                      State/Province *
                    </Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className="h-12 rounded-md"
                      placeholder="NY"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-sm font-medium">
                      ZIP/Postal Code *
                    </Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="h-12 rounded-md"
                      placeholder="10001"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium">
                      Country *
                    </Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className="h-12 rounded-md">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Amenities</Label>
                  <p className="text-sm text-gray-600">Select all amenities that apply to your property</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {amenitiesList.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                        <Checkbox
                          id={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm cursor-pointer flex-1">
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Pricing & Legal */}
          {step === 4 && (
            <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-10">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Pricing & Legal</CardTitle>
                <CardDescription className="text-base">
                  Set your pricing and agree to our terms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="basePrice" className="text-sm font-medium">
                      Base Price per Night ($) *
                    </Label>
                    <Input
                      id="basePrice"
                      type="number"
                      placeholder="150"
                      value={formData.basePrice}
                      onChange={(e) => handleInputChange("basePrice", e.target.value)}
                      className="h-12 rounded-md"
                      required
                    />
                    <p className="text-xs text-gray-500">Your nightly rate before taxes and fees</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cleaningFee" className="text-sm font-medium">
                      Cleaning Fee ($)
                    </Label>
                    <Input
                      id="cleaningFee"
                      type="number"
                      placeholder="50"
                      value={formData.cleaningFee}
                      onChange={(e) => handleInputChange("cleaningFee", e.target.value)}
                      className="h-12 rounded-md"
                    />
                    <p className="text-xs text-gray-500">One-time cleaning fee (optional)</p>
                  </div>
                </div>

                <div className="space-y-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-gray-900 mb-4">Legal Agreements</h3>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      I agree to EasyBooking's{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="hostGuarantee"
                      checked={formData.agreeToHostGuarantee}
                      onCheckedChange={(checked) => handleInputChange("agreeToHostGuarantee", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="hostGuarantee" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link href="/host-guarantee" className="text-blue-600 hover:underline font-medium">
                        Host Guarantee Terms
                      </Link>{" "}
                      and understand the booking and cancellation policies
                    </Label>
                  </div>
                </div>

                {(!formData.agreeToTerms || !formData.agreeToHostGuarantee) && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      Please agree to all terms and conditions to complete your registration.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="order-2 sm:order-1 h-12 px-6 bg-transparent rounded-md"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {step < totalSteps ? (
              <Button onClick={nextStep} className="order-1 sm:order-2 bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-md">
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.agreeToTerms || !formData.agreeToHostGuarantee}
                className="order-1 sm:order-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 h-12 px-6 font-medium rounded-md"
              >
                Complete Registration
              </Button>
            )}
          </div>

          {/* Mobile Step Indicator */}
          <div className="flex justify-center mt-8 sm:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i + 1 <= step ? "bg-blue-600" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
