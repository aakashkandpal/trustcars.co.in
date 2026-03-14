import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

const fallbackTestimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    content:
      "The experience at TrustCars was exceptional. Found my dream 5 Series in perfect condition.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Architect",
    content:
      "Professional service and transparent pricing. Highly recommended for premium cars.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];

// GET /api/testimonials
export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.testimonials.list.path);
        const contentType = res.headers.get("content-type") ?? "";

        if (!res.ok || !contentType.includes("application/json")) {
          return fallbackTestimonials;
        }

        const parsed = api.testimonials.list.responses[200].safeParse(
          await res.json(),
        );

        if (!parsed.success || parsed.data.length === 0) {
          return fallbackTestimonials;
        }

        return parsed.data;
      } catch {
        return fallbackTestimonials;
      }
    },
  });
}
