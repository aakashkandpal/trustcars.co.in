import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.cars.list.path, async (req, res) => {
    const cars = await storage.getCars();
    res.json(cars);
  });

  app.get(api.cars.get.path, async (req, res) => {
    const car = await storage.getCar(Number(req.params.id));
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  });

  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      res.status(201).json(enquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // Seed data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCars = await storage.getCars();
  if (existingCars.length === 0) {
    await storage.createCar({
      make: "Honda",
      model: "City",
      year: 2016,
      price: 575000,
      mileage: 67000,
      fuelType: "Petrol",
      transmission: "Manual",
      imageUrls: [
        "/attached_assets/City_8_1770652736856.jpg",
        "/attached_assets/City_4_1770652736856.jpg",
        "/attached_assets/City_5_1770652736856.jpg",
        "/attached_assets/City_6_1770652736856.jpg",
        "/attached_assets/City_9_1770652736856.jpg",
        "/attached_assets/City_3_1770652736856.jpg"
      ],
      description: "Well maintained Honda City 2016 model. Excellent engine condition and clean interiors."
    });

    await storage.createCar({
      make: "BMW",
      model: "5 Series 520d",
      year: 2021,
      price: 4500000,
      mileage: 12000,
      fuelType: "Diesel",
      transmission: "Automatic",
      imageUrls: ["https://images.unsplash.com/photo-1555215695-3004980adade?w=800&q=80"],
      description: "Premium luxury sedan in pristine condition. Single owner, dealer serviced."
    });
    
    await storage.createCar({
      make: "Mercedes-Benz",
      model: "C-Class C200",
      year: 2022,
      price: 5200000,
      mileage: 8500,
      fuelType: "Petrol",
      transmission: "Automatic",
      imageUrls: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"],
      description: "Elegant and sporty. Panoramic sunroof, Burmester sound system."
    });

    await storage.createCar({
      make: "Audi",
      model: "A6 Technology",
      year: 2020,
      price: 3800000,
      mileage: 25000,
      fuelType: "Diesel",
      transmission: "Automatic",
      imageUrls: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"],
      description: "Matrix LED headlights, Virtual Cockpit, excellent highway cruiser."
    });

    await storage.createCar({
      make: "Toyota",
      model: "Fortuner Legender",
      year: 2023,
      price: 4800000,
      mileage: 5000,
      fuelType: "Diesel",
      transmission: "Automatic",
      imageUrls: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"],
      description: "Rugged 4x4 capability with luxury interiors. Like new."
    });
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await storage.createTestimonial({
      name: "Rahul Sharma",
      role: "Business Owner",
      content: "The experience at TrustCars was exceptional. Found my dream 5 Series in perfect condition.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    });

    await storage.createTestimonial({
      name: "Priya Patel",
      role: "Architect",
      content: "Professional service and transparent pricing. Highly recommended for premium cars.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    });
  }
}
