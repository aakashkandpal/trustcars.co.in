import { db } from "./db";
import {
  cars,
  testimonials,
  enquiries,
  type Car,
  type InsertCar,
  type Enquiry,
  type InsertEnquiry,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCars(): Promise<Car[]>;
  getCar(id: number): Promise<Car | undefined>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getTestimonials(): Promise<Testimonial[]>;
  
  // Seeding helpers
  createCar(car: InsertCar): Promise<Car>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getCars(): Promise<Car[]> {
    return await db.select().from(cars);
  }

  async getCar(id: number): Promise<Car | undefined> {
    const [car] = await db.select().from(cars).where(eq(cars.id, id));
    return car;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [newEnquiry] = await db.insert(enquiries).values(enquiry).returning();
    return newEnquiry;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createCar(car: InsertCar): Promise<Car> {
    const [newCar] = await db.insert(cars).values(car).returning();
    return newCar;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const hondaCity: InsertCar = {
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
      description: "Well maintained Honda City 2016 model. Excellent engine condition and clean interiors.",
      isSold: false,
    };
    await this.createCar(hondaCity);

export const storage = new DatabaseStorage();
