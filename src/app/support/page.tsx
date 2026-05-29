"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
	<svg
		className={`w-6 h-6 text-[var(--color-text-secondary)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<polyline points="6 9 12 15 18 9"></polyline>
	</svg>
);

const faqs = [
	{
		question: "How do I start tracking my cycle?",
		answer: "Simply open Luna and tap the \"Log Period\" button on the calendar view. You can enter your period start date, flow level, and any symptoms you're experiencing. The app will automatically begin tracking your cycle and making predictions based on your input.",
	},
	{
		question: "Is my data really private?",
		answer: "Yes, absolutely. All your data is stored locally on your device in a secure SQLite database. We don't use cloud storage, we don't collect analytics, and we don't share your data with anyone. Your health information never leaves your device.",
	},
	{
		question: "How accurate are the predictions?",
		answer: "Luna uses on-device machine learning to analyze your cycle patterns. Predictions become more accurate over time as you log more data. Most users see reliable predictions after 2-3 cycles of consistent tracking. You can also improve accuracy by tracking additional data like BBT and cervical mucus.",
	},
	{
		question: "Can I export my data?",
		answer: "Yes! Go to Settings > Export Data to download all your tracked information in a secure format. Your data belongs to you, and we make it easy to take it with you if you ever switch apps or want a backup.",
	},
	{
		question: "What if I lose my phone?",
		answer: "Since Luna stores all data locally on your device, if you lose your phone without a backup, you would need to start fresh. We recommend exporting your data periodically using the export feature in Settings to keep a safe copy of your information.",
	},
	{
		question: "Do I need an account?",
		answer: "No account needed! Luna works completely offline without any sign-up process. Just download and start tracking immediately. Your data stays on your device and is never tied to an account or email address.",
	},
];


export default function SupportPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Thank you for your message! Our support team will get back to you within 24-48 hours.");
		(e.target as HTMLFormElement).reset();
	};

	return (
		<>
			<Header variant="minimal" />
			<main>
				{/* Hero Section */}
				<section className="min-h-[40vh] flex items-center justify-center pt-32 pb-16 px-8 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,rgba(236,72,153,0.1)_25%,rgba(59,130,246,0.1)_50%,rgba(239,68,68,0.05)_75%,transparent_100%)]">
					<div className="text-center max-w-[800px]">
						<h1 className="text-5xl font-extrabold mb-6 gradient-text leading-tight">How can we help?</h1>
						<p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
							Find answers to common questions or get in touch with our support team.
						</p>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-24 bg-[var(--color-surface)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
						<div className="max-w-[800px] mx-auto space-y-4">
							{faqs.map((faq, index) => (
								<div
									key={index}
									className={`bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[var(--color-blue)] ${openIndex === index ? "border-[var(--color-secondary)]" : ""}`}
								>
									<button
										onClick={() => toggleFaq(index)}
										className="w-full flex justify-between items-center gap-4 p-6 cursor-pointer text-left"
									>
										<h3 className="text-lg font-semibold text-[var(--color-text)] m-0">{faq.question}</h3>
										<ChevronIcon isOpen={openIndex === index} />
									</button>
									<div
										className="overflow-hidden transition-all duration-300"
										style={{ maxHeight: openIndex === index ? "500px" : "0" }}
									>
										<p className="text-[var(--color-text-secondary)] leading-relaxed px-6 pb-6">{faq.answer}</p>
									</div>
								</div>
							))}
							</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="py-24 bg-[var(--color-background)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-4 gradient-text">Contact Support</h2>
						<p className="text-[var(--color-text-secondary)] text-center text-lg mb-12">Can&apos;t find what you&apos;re looking for? Send us a message.</p>
						<form onSubmit={handleSubmit} className="max-w-[600px] mx-auto space-y-6">
							<div>
								<label htmlFor="name" className="block mb-2 text-[var(--color-text)] font-medium">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] text-base transition-all duration-300 focus:outline-none focus:border-[var(--color-blue)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-[var(--color-text)] font-medium">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] text-base transition-all duration-300 focus:outline-none focus:border-[var(--color-blue)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
								/>
							</div>
							<div>
								<label htmlFor="subject" className="block mb-2 text-[var(--color-text)] font-medium">Subject</label>
								<select
									id="subject"
									name="subject"
									required
									className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] text-base transition-all duration-300 focus:outline-none focus:border-[var(--color-blue)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] cursor-pointer"
								>
									<option value="">Select a topic</option>
									<option value="general">General Inquiry</option>
									<option value="technical">Technical Issue</option>
									<option value="feature">Feature Request</option>
									<option value="privacy">Privacy Question</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label htmlFor="message" className="block mb-2 text-[var(--color-text)] font-medium">Message</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] text-base transition-all duration-300 focus:outline-none focus:border-[var(--color-blue)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] resize-y min-h-[120px]"
								></textarea>
							</div>
							<button
								type="submit"
								className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-[var(--color-blue)] text-white shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]"
							>
								Send Message
							</button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
