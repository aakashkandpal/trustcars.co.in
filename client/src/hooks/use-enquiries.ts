import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertEnquiry } from "@shared/schema";

// POST /api/enquiries
export function useCreateEnquiry() {
  return useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.cars.list.responses[200].safeParse(await res.json()); // Using any schema just to parse error structure if needed, or generic error
           throw new Error("Validation failed");
        }
        throw new Error("Failed to submit enquiry");
      }
      return api.enquiries.create.responses[201].parse(await res.json());
    },
  });
}
