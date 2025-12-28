import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEnquirySchema, type InsertEnquiry } from "@shared/schema";
import { useCreateEnquiry } from "@/hooks/use-enquiries";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  carId?: number;
  onSuccess?: () => void;
}

export function EnquiryForm({ carId, onSuccess }: EnquiryFormProps) {
  const { toast } = useToast();
  const createEnquiry = useCreateEnquiry();
  
  const form = useForm<InsertEnquiry>({
    resolver: zodResolver(insertEnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: carId 
        ? "I am interested in this car. Please contact me." 
        : "I would like to know more about your services.",
      carId: carId || null,
    },
  });

  const onSubmit = (data: InsertEnquiry) => {
    createEnquiry.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Enquiry Sent!",
          description: "Our team will contact you shortly.",
        });
        form.reset();
        onSuccess?.();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Could not send enquiry. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Name</label>
        <input
          {...form.register("name")}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          placeholder="John Doe"
        />
        {form.formState.errors.name && (
          <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
        <input
          {...form.register("phone")}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          placeholder="+91 98765 43210"
        />
        {form.formState.errors.phone && (
          <p className="text-red-400 text-xs">{form.formState.errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Message</label>
        <textarea
          {...form.register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
          placeholder="How can we help you?"
        />
        {form.formState.errors.message && (
          <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={createEnquiry.isPending}
        className="w-full py-3.5 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-out flex items-center justify-center gap-2"
      >
        {createEnquiry.isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
