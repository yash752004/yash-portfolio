import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {

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
                                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Policy</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Last updated: 06 April 2025. This Privacy Policy describes how we collect, use, and protect your personal data when you use our services.
                            </p>
                        </header>

                        <div className="space-y-10 text-base leading-relaxed text-slate-600">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Interpretation and Definitions</h2>
                                <p>
                                    Terms like "You", "Your", "Company", "We", "Us", and "Our" are defined within the context of this policy. Capitalized words have meanings described under this section regardless of singular or plural usage.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Data Collected</h2>
                                <p>
                                    We collect Personal Data such as name, email, phone number, and location. We also collect Usage Data like IP address, browser type, and page visits automatically.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies and Tracking</h2>
                                <p>
                                    Our website uses Cookies and similar technologies to enhance your experience and analyze site traffic. You can manage your cookie preferences through your browser settings.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Use of Data</h2>
                                <p>
                                    Your data is used to maintain and improve our Service, respond to inquiries, personalize content, send updates, and comply with legal obligations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Sharing of Data</h2>
                                <p>
                                    We may share your data with service providers, affiliates, and business partners. Your information is never sold. Data may be disclosed when required by law or in business transfers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
                                <p>
                                    Personal Data is retained only as long as necessary for the purposes set out in this policy. Usage Data is kept for internal analysis and service improvements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
                                <p>
                                    You may access, update, or request deletion of your Personal Data at any time. Contact us via the methods below to exercise your rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Security</h2>
                                <p>
                                    We use commercially reasonable measures to protect your Personal Data, but no method is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
                                <p>
                                    We do not knowingly collect data from children under 13. If we become aware of such data, we delete it immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. External Links</h2>
                                <p>
                                    Our site may contain links to other websites not operated by us. We are not responsible for their content or privacy practices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy periodically. We will notify you via email or prominent notice before any significant changes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
                                <p>
                                    If you have any questions, reach out to us at{" "}
                                    <a href="mailto:connect@pinaktechnology.com" className="text-primary-500 font-bold hover:text-primary-600 transition-colors">
                                        connect@pinaktechnology.com
                                    </a>{" "}
                                    or visit our{" "}
                                    <Link to="/contact" className="text-primary-500 font-bold hover:text-primary-600 transition-colors">
                                        contact page
                                    </Link>.
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

export default PrivacyPolicy;
