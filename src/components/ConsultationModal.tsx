import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface ConsultationModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

export function ConsultationModal({ trigger, className }: ConsultationModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);
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
        toast.success("Consultation Request Sent", {
          description: "Our team will contact you within 24 hours to confirm your appointment.",
        });
      } else {
        toast.error("Failed to send request", {
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
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) setTimeout(() => setIsSuccess(false), 300);
    }}>
      <DialogTrigger
        render={
          trigger || (
            <Button className={className}>
              Book a Consultation
            </Button>
          )
        }
      />
      <DialogContent className="sm:max-w-[500px] rounded-3xl p-0 overflow-hidden border-none shadow-2xl max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6 bg-white">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Request Sent!</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Thank you for choosing MRM Advocates. <br />
                We've received your consultation request and will get back to you within 24 hours.
              </p>
            </div>
            <Button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white h-14 rounded-xl text-lg font-bold"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-gray-900 p-6 sm:p-8 text-white">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold">Schedule a Consultation</DialogTitle>
                <DialogDescription className="text-gray-400 mt-2 text-sm">
                  Select a preferred time and share your case details. Our legal experts will review and get back to you.
                </DialogDescription>
              </DialogHeader>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <Input required name="name" placeholder="Jane Doe" className="bg-secondary/30 border-none h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email
                  </label>
                  <Input required name="email" type="email" placeholder="jane@example.com" className="bg-secondary/30 border-none h-11 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Preferred Date
                  </label>
                  <Input required name="date" type="date" className="bg-secondary/30 border-none h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3 h-3" /> Preferred Time
                  </label>
                  <Input required name="time" type="time" className="bg-secondary/30 border-none h-11 rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" /> Practice Area & Brief Description
                </label>
                <Textarea 
                  required
                  name="message"
                  placeholder="Tell us briefly about your legal matter..." 
                  className="bg-secondary/30 border-none min-h-[100px] rounded-xl resize-none" 
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white h-14 rounded-xl text-lg font-bold shadow-lg shadow-accent/20 transition-all active:scale-[0.98]"
              >
                {isSubmitting ? "Sending Request..." : "Confirm Booking"}
                {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
              </Button>
              
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                Your information is handled with strict confidentiality.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
