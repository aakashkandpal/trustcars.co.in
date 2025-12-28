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
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }
}

export const storage = new DatabaseStorage();
