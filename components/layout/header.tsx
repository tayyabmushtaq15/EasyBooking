"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-blue-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            BookingHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/stays" className="hover:underline transition-all font-bold">
              Stays
            </Link>
            {/* <Link href="/experiences" className="hover:underline transition-all font-bold">
              Experiences
            </Link>
            <Link href="/car-rental" className="hover:underline transition-all font-bold">
              Car Rental
            </Link> */}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button variant="ghost" className="text-blue-600 hover:bg-blue-700 text-sm px-2 lg:px-4 font-bold">
              USD
            </Button>
            <Link href="/vendor/signup">
              <Button variant="ghost" className="text-blue-600 hover:bg-blue-700 text-sm px-2 lg:px-4 font-bold">
                List property
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" className="text-blue-600 bg-white hover:bg-gray-100 text-sm px-2 lg:px-4 font-bold">
                Register
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost" className="text-blue-600 hover:bg-blue-700 text-sm px-2 lg:px-4 font-bold">
                Sign in
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/stays" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Stays
                </Link>
                {/* <Link href="/experiences" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Experiences
                </Link>
                <Link href="/car-rental" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Car Rental
                </Link> */}
                <div className="border-t pt-4 space-y-3">
                  <Link href="/vendor/signup">
                    <Button variant="outline" className="w-full bg-transparent">
                      List Your Property
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full">Register</Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full bg-transparent">
                      Sign in
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
