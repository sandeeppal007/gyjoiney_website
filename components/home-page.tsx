'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import img1 from "@/images/zac-gudakov-MvY303vrKR0-unsplash.jpg"
import img2 from "@/images/zac-gudakov-FPim6ZLM6fc-unsplash.jpg"
import img3 from "@/images/standsome-worklifestyle--AZhXoSUBkI-unsplash.jpg"

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">GY Joinery</Link>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+44 7934 260742</span>
              </div>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link className="hover:text-gray-300" href="#about">About</Link></li>
                  <li><Link className="hover:text-gray-300" href="#services">Services</Link></li>
                  <li><Link className="hover:text-gray-300" href="#contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="flex flex-col space-y-2">
                <li><Link className="hover:text-gray-300" href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link className="hover:text-gray-300" href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                <li><Link className="hover:text-gray-300" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative py-20 h-px-500">
          <Image
            src={img1}
            alt="Joinery workshop"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-white">Expert Joinery Services</h1>
            <p className="text-xl mb-8 text-white">Crafting Quality for Your Home</p>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Get a Quote</Button>
          </div>
        </section>
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={img3}
                  alt="GY Joinery workshop"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">
                  GY Joinery is a premier joinery and carpentry service in the local area. With years of experience and a passion for craftsmanship, we deliver high-quality woodworking solutions for your home and business.
                </p>
                <p className="text-lg mb-4">
                  Our team of skilled artisans takes pride in every project, ensuring attention to detail and customer satisfaction. From bespoke furniture to custom installations, we bring your vision to life.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-bold">Google Rating:</span>
                  <span className="text-xl">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Custom Furniture', 'Kitchen Fitting', 'Built-in Wardrobes', 'Property Maintenance'].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src={img2}
                    alt={service}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600">High-quality {service.toLowerCase()} tailored to your needs and preferences.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Phone Number" />
                  <Textarea placeholder="Your Message" />
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600">Send Message</Button>
                </form>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-yellow-500" />
                    <span>+44 7934 260742</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-yellow-500" />
                    <span>info@gyjoinery.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                    <span>123 Woodwork Lane, Carpentry Town, CT1 2JN</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-yellow-500">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-yellow-500">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-yellow-500">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GY Joinery. All rights reserved.</p>
          <p className="mt-2">Contractor | Building firm | Joiner | Property maintenance</p>
        </div>
      </footer>
    </div>
  )
}