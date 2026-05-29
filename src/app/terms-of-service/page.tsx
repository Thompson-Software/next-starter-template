import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
	title: "Terms of Service - Luna: Privacy Period",
	description: "Luna's terms of service. Understand your rights and responsibilities when using our period tracking app.",
};

export default function TermsPage() {
	return (
		<>
			<Header variant="minimal" />
			<main className="pt-32 pb-16 px-4 min-h-screen">
				<div className="container max-w-[800px]">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-2 gradient-text">Terms of Service</h1>
						<p className="text-[var(--text-secondary)]">Last updated: May 2026</p>
					</div>

					<div className="space-y-10">
						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">1. Acceptance of Terms</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								By downloading, accessing, or using Luna (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
							</p>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">2. Health Disclaimer</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">
								<strong>IMPORTANT:</strong> Luna is NOT a medical device and is NOT intended to diagnose, treat, cure, or prevent any disease or condition. The App is for informational and educational purposes only.
							</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li>Do not rely on Luna for medical decisions</li>
								<li>Consult a healthcare professional for medical advice</li>
								<li>Predictions are estimates based on logged data and may not be accurate</li>
								<li>The App does not provide birth control or pregnancy prevention</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">3. Data and Privacy</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">
								Your use of Luna is also governed by our Privacy Policy. By using the App, you consent to our data practices as described in the Privacy Policy, including:
							</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li>Local-only data storage on your device</li>
								<li>No cloud storage or server transmission</li>
								<li>No data sharing with third parties</li>
								<li>Your right to delete your data at any time</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">4. Contact Information</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								If you have questions about these Terms of Service, please contact us at: <strong>legal@luna-app.com</strong>
							</p>
						</section>
					</div>

					<div className="text-center mt-12 pt-8 border-t border-[var(--border)]">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)] hover:translate-y-[-2px]">
							Back to Home
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
