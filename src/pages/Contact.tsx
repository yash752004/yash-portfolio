import { useState } from "react";
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
import FAQSection from "@/components/sections/FAQSection";

const ContactHeroSection = () => {
  return (
    <section className="page-section pt-40 pb-0">
      <div className="container items-start lg:px-24">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl/[1.2] font-bold text-gradient max-w-3xl">Let's Connect and Collaborate</h2>
          <p className="text-xl pt-6 text-gray-700 dark:text-gray-300 max-w-3xl">We'd love to hear from you! Whether you have a question about our services, need assistance with a project, or just want to chat, feel free to reach out.</p>
        </div>
      </div>
    </section>
  );
};

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
      <main>
        <ContactHeroSection />
        <section className="page-section">
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12">
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-12 bg-primary-50 dark:bg-gray-800 p-8 rounded-3xl">
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl font-bold text-gradient">Get In Touch</h1>
                  <p className="text-xl">Drop a message. Let's discuss your ideas, projects or questions.</p>
                  <p className="text-2xl font-bold">Let's builds something amazing.</p>
                </div>
                <div className="rounded-3xl p-6 border-2 border-primary-300 dark:border-primary-600 bg-white dark:bg-gray-900">
                  <h3 className="text-xl font-bold mb-4">My Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm">Email</p>
                        <p className="text-sm lg:text-md font-medium">contact@pinaktechnology.com</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-4">
                      <div className="rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm">Phone</p>
                        <p className="text-sm lg:text-md font-medium">+91 7861945362</p>
                      </div>
                    </div> */}
                    {/* <div className="flex items-center gap-4">
                      <div className="rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm">Location</p>
                        <p className="text-sm lg:text-md font-medium">Ahmedabad, India</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-3xl bg-gray-50 dark:bg-stone-800/50 shadow-2xl p-8">
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
                      <Link to="/terms" target="_blank" className="link link-focus underline">Terms & Condition</Link>
                      {" "}and <Link to="/privacy-policy" target="_blank" className="link link-focus underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
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
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;