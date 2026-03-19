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
        const errorBody = await res.json().catch(() => null);

        if (res.status === 400) {
          const parsedError = api.enquiries.create.responses[400].safeParse(errorBody);
          if (parsedError.success) {
            throw new Error(parsedError.data.message);
          }
          throw new Error("Please check your enquiry details and try again.");
        }

        const message =
          errorBody &&
          typeof errorBody === "object" &&
          "message" in errorBody &&
          typeof errorBody.message === "string"
            ? errorBody.message
            : "Could not send enquiry right now. Please try again.";

        throw new Error(message);
      }

      return api.enquiries.create.responses[201].parse(await res.json());
    },
  });
}
