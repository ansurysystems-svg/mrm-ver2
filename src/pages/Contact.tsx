import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import * as React from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mvzdozve", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message Sent", {
          description: "Thank you for reaching out. We will get back to you shortly.",
        });
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later or contact us directly.",
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Contact Us</span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight">
                Let's Discuss Your <br />
                <span className="text-accent italic font-serif">Legal Strategy</span>
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed mb-12">
                Our team is ready to provide the expert counsel you need. Reach out to us today to schedule a consultation.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Office</h3>
                    <p className="text-gray-600 mt-1">Westlands Business Park, Nairobi, Kenya<br />P.O. Box 67718-00100</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                    <p className="text-gray-600 mt-1">+254 702 929 018</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600 mt-1">info@mrmadvocates.co.ke</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Working Hours</h3>
                    <p className="text-gray-600 mt-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-none shadow-2xl rounded-3xl overflow-hidden min-h-[600px] flex flex-col">
                <CardContent className="p-10 flex-1 flex flex-col">
                  {isSuccess ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">Message Received!</h2>
                        <p className="text-gray-600 text-lg">
                          Thank you for reaching out to MRM Advocates. <br />
                          Our team will review your message and contact you shortly.
                        </p>
                      </div>
                      <Button 
                        onClick={() => setIsSuccess(false)}
                        variant="outline" 
                        className="rounded-xl px-8 h-12"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                            <Input required name="name" placeholder="John Doe" className="h-12 bg-secondary/30 border-none rounded-xl" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                            <Input required name="email" type="email" placeholder="john@example.com" className="h-12 bg-secondary/30 border-none rounded-xl" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                          <Input required name="subject" placeholder="Legal Consultation" className="h-12 bg-secondary/30 border-none rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                          <Textarea required name="message" placeholder="How can we help you?" className="min-h-[150px] bg-secondary/30 border-none rounded-xl resize-none" />
                        </div>
                        <Button disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-white h-14 rounded-xl text-lg font-bold shadow-lg shadow-accent/20">
                          {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 w-5 h-5" />
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851724219358!2d36.8048123!3d-1.2612048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c3a112d3f%3A0x295f12994441c9af!2sWestlands%20Business%20Park!5e0!3m2!1sen!2ske!4v1712999999999!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
