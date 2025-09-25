import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hemnath04112004@gmail.com",
    text: "hemnath04112004@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hemnath-marimuthu-in/",
    text: "LinkedIn Profile",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Hemnath4114",
    text: "GitHub Profile",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            data-testid="text-contact-title"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I'm always interested in new opportunities and interesting projects. 
                Whether you want to work together or just say hello, feel free to reach out!
              </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors hover-elevate p-3 rounded-lg"
                    whileHover={{ x: 5 }}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.text}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle data-testid="text-form-title">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...form.register("name")}
                        data-testid="input-name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...form.register("email")}
                        data-testid="input-email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={5}
                        {...form.register("message")}
                        data-testid="input-message"
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-destructive">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full hover-elevate"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}