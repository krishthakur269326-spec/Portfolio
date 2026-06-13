import React, { useState } from "react";
import { Mail, MapPin, Clock3, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const sendEmail = async (e) => {

        e.preventDefault(); //prevents refresh after submiting form

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    first_Name: formData.firstName,
                    last_Name: formData.lastName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section id='contacts' className="bg-black text-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-gray-700"></span>
                    Get In Touch
                </p>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT SIDE */}
                    <div data-aos="flip-left">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            Let's build something
                            <br />
                            remarkable together
                        </h2>

                        <p className="text-gray-400 text-4 leading-relaxed mb-12">
                            Have a project in mind? Looking for a skilled
                            frontend developer to join your team? I'd love to
                            hear about it. Let's create something exceptional.
                        </p>

                        <div className="space-y-5">
                            <div className="bg-linear-to-r from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Mail size={24} />
                                </div>

                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest pb-4">
                                        Email
                                    </p>
                                    <h4 className="text-4 font-semibold">
                                        krishthakur269326@gmail.com
                                    </h4>
                                </div>
                            </div>

                            <div className="bg-linear-to-r from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>

                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest pb-4">
                                        Location
                                    </p>
                                    <h4 className="text-4 font-semibold">
                                        Kathmandu, Nepal — Open to Remote
                                    </h4>
                                </div>
                            </div>

                            <div className="bg-linear-to-r from-[#111] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Clock3 size={24} />
                                </div>

                                <div>
                                    <p className="text-gray-500 uppercase text-xs tracking-widest pb-4">
                                        Response Time
                                    </p>
                                    <h4 className="text-4 font-semibold">
                                        Usually within 24 hours
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div data-aos="flip-right">
                        <div className="bg-linear-to-br from-[#111] to-[#090909] border border-white/10 rounded-4xl p-8 md:p-10">
                            <form
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Krish"
                                            required
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Thakur"
                                            required
                                            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="krish@example.com"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                        Message
                                    </label>

                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-white/30 transition"
                                    />
                                </div>

                                {success && (
                                    <div className="bg-green-500/10 border border-green-500 text-green-400 rounded-xl p-4">
                                        Message sent successfully! 🚀
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-black font-semibold py-5 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactSection