import { useState,useEffect } from "react";
import axios from "axios";
// import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Terms Acceptance
    if (!formData.acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // Validate Form Fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all the required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send user-submitted message to you
      await emailjs.send(
        'service_0pj210f',
        'template_smk2wgd',
        {
          name: formData.name,
          email: formData.email,
          to_email: formData.email,
          message: formData.message,
        },
        'tditcM8PZPUoK7LvR'
      );

      // 2. Send confirmation message to user
      await emailjs.send(
        'service_0pj210f',
        'template_q8ouzz5',
        {
          name: formData.name,
          email: formData.email,
          to_email: formData.email,
          message: formData.message,
        },
        'tditcM8PZPUoK7LvR'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "", acceptTerms: false });
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 py-6 relative z-10">
          <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 flex flex-col justify-start gap-12 bg-green-100 dark:bg-zinc-800 p-8 rounded-3xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold text-gradient">Get In Touch</h1>
                <p className="text-xl">Feel free to drop a message. Let's discuss your ideas, projects or questions.</p>
                <p className="text-2xl font-bold">Let's builds something amazing together.</p>
              </div>
              <div className="rounded-3xl p-6 border-2 border-emerald-300 dark:border-emerald-600 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-bold mb-4">My Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">Email</p>
                      <p className="font-medium">yashpatel.dev01@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">Phone</p>
                      <p className="font-medium">+91 7861945362</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">Location</p>
                      <p className="font-medium">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl bg-gray-50 dark:bg-emerald-900 shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Tell me your Thoughts</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="input-focus"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="input-focus"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Thoughts, Project Ideas or Questions..."
                    rows={6}
                    className="input-focus resize-none"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1 input-focus"
                  />
                  <label htmlFor="terms" className="text-sm leading-relaxed">
                    I accept the{" "}
                    <Link to="/terms" target="_blank" className="text-primary underline input-focus hover:text-emerald-500">Terms & Condition</Link>
                    {" "}and <Link to="/privacy-policy" target="_blank" className="text-primary underline input-focus hover:text-emerald-500">Privacy Policy</Link>.
                  </label>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-repeat text-lg py-6 rounded-xl text-white link-focus"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-glass backdrop-blur-xl rounded-3xl p-8 border">
                <h3 className="text-xl font-bold mb-6">Availability</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Free initial consultation</span>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;