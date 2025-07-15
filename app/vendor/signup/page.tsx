"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home, Building, TreePine, Tent } from "lucide-react";

export default function VendorSignupPage() {
  const [step, setStep] = useState(1);
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
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const propertyTypes = [
    { id: "hotel", label: "Hotel", icon: Building, description: "Traditional hotel with multiple rooms" },
    { id: "apartment", label: "Apartment", icon: Home, description: "Entire apartment or condo" },
    { id: "house", label: "House", icon: Home, description: "Entire house or villa" },
    { id: "cabin", label: "Cabin", icon: TreePine, description: "Cozy cabin or cottage" },
    { id: "glamping", label: "Glamping", icon: Tent, description: "Luxury camping experience" },
  ];

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
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Vendor signup data:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
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
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl text-gray-900">Personal Information</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Tell us about yourself to get started as a host
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="h-10 sm:h-11"
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
                      className="h-10 sm:h-11"
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
                    className="h-10 sm:h-11"
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
                    className="h-10 sm:h-11"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}
          {/* Continue with other steps as needed... */}
        </div>
      </div>
    </div>
  );
}
