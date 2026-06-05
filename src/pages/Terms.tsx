import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {

  return (
    <div className="min-h-screen relative bg-slate-50">
      <Header />

      {/* Decorative Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0a0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[45rem] h-[45rem] bg-secondary-100/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <header className="mb-12 border-b border-slate-100 pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Terms and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Conditions</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Please read these terms carefully before using our services. By accessing our site or contacting us, you agree to be bound by them.
              </p>
            </header>

            <div className="space-y-10 text-base leading-relaxed text-slate-600">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>
                  These terms and conditions govern your use of our services and website.
                  By contacting us or using our services, you agree to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
                <p>
                  We provide web development, mobile app development, and cloud development services.
                  All services are provided on a project basis with agreed-upon specifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Privacy</h2>
                <p>
                  Your personal information provided through our contact form will only be used
                  to respond to your inquiry and discuss potential projects. We do not share
                  your information with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Project Terms</h2>
                <p>
                  Project specifications, timelines, and pricing will be agreed upon before
                  work begins. Changes to project scope may affect timeline and cost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact</h2>
                <p>
                  If you have any questions about these terms, please contact us at{" "}
                  <a href="mailto:connect@pinaktechnology.com" className="text-primary-500 font-bold hover:text-primary-600 transition-colors">
                    connect@pinaktechnology.com
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
