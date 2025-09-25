import { ContactSection } from "../ContactSection";
import { ThemeProvider } from "../ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

export default function ContactSectionExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ContactSection />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}