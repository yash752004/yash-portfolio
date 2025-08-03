import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {

    return (
        <div className="min-h-screen">
            <Header />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert max-w-none">
                        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Last updated: 06 April 2025. This Privacy Policy describes how we collect, use, and protect your personal data when you use our services.
                        </p>

                        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">1. Interpretation and Definitions</h2>
                                <p>
                                    Terms like "You", "Your", "Company", "We", "Us", and "Our" are defined within the context of this policy. Capitalized words have meanings described under this section regardless of singular or plural usage.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">2. Types of Data Collected</h2>
                                <p>
                                    We collect Personal Data such as name, email, phone number, and location. We also collect Usage Data like IP address, browser type, and page visits automatically.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
                                <p>
                                    Our website uses Cookies and similar technologies to enhance your experience and analyze site traffic. You can manage your cookie preferences through your browser settings.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">4. Use of Data</h2>
                                <p>
                                    Your data is used to maintain and improve our Service, respond to inquiries, personalize content, send updates, and comply with legal obligations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">5. Sharing of Data</h2>
                                <p>
                                    We may share your data with service providers, affiliates, and business partners. Your information is never sold. Data may be disclosed when required by law or in business transfers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                                <p>
                                    Personal Data is retained only as long as necessary for the purposes set out in this policy. Usage Data is kept for internal analysis and service improvements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                                <p>
                                    You may access, update, or request deletion of your Personal Data at any time. Contact us via the methods below to exercise your rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
                                <p>
                                    We use commercially reasonable measures to protect your Personal Data, but no method is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                                <p>
                                    We do not knowingly collect data from children under 13. If we become aware of such data, we delete it immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">10. External Links</h2>
                                <p>
                                    Our site may contain links to other websites not operated by us. We are not responsible for their content or privacy practices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy periodically. We will notify you via email or prominent notice before any significant changes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                                <p>
                                    If you have any questions, reach out to us at{" "}
                                    <a href="mailto:yashpatel.dev01@gmail.com" className="text-primary underline">
                                        yashpatel.dev01@gmail.com
                                    </a>{" "}
                                    or visit our{" "}
                                    <a href="/contact" target="_blank" className="text-primary underline">
                                        contact page
                                    </a>
                                    .
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
