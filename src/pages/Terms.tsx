import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none"  >
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
              Terms and Conditions
            </h1>
            <p className="text-lg mb-8">
              Please read these terms carefully before using our services. By accessing our site or contacting us, you agree to be bound by them.
            </p>

            <div className="space-y-10 text-base leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  These terms and conditions govern your use of our services and website.
                  By contacting us or using our services, you agree to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p>
                  We provide web development, mobile app development, and cloud development services.
                  All services are provided on a project basis with agreed-upon specifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Privacy</h2>
                <p>
                  Your personal information provided through our contact form will only be used
                  to respond to your inquiry and discuss potential projects. We do not share
                  your information with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Project Terms</h2>
                <p>
                  Project specifications, timelines, and pricing will be agreed upon before
                  work begins. Changes to project scope may affect timeline and cost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
                <p>
                  If you have any questions about these terms, please contact us at{" "}
                  <a href="mailto:yashpatel.dev01@gmail.com" className="text-primary underline">
                    yashpatel.dev01@gmail.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
