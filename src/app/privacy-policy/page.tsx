import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
	title: "Privacy Policy - Luna: Privacy Period",
	description: "Luna's privacy policy. Learn how we protect your health data with local-only storage and no data sharing.",
};

export default function PrivacyPolicyPage() {
	return (
		<>
			<Header variant="minimal" />
			<main className="pt-32 pb-16 px-4 min-h-screen">
				<div className="container max-w-[800px]">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-2 gradient-text">Privacy Policy</h1>
						<p className="text-[var(--text-secondary)]">Last updated: May 2026</p>
					</div>

					<div className="space-y-10">
						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">1. Our Privacy Commitment</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								Luna is built on a fundamental principle: your health data belongs to you, and only you. We don&apos;t collect, store, or share your personal health information on any servers. All data remains on your device, always.
							</p>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">2. Data Storage</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">
								All data you enter into Luna is stored locally on your device using a SQLite database. This database is located within your app&apos;s private sandbox and is not accessible to other apps or services.
							</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li><strong>Location:</strong> Your device only (local SQLite database)</li>
								<li><strong>Cloud Storage:</strong> None</li>
								<li><strong>Server Access:</strong> None</li>
								<li><strong>Backup:</strong> Optional manual export to your device&apos;s Documents folder</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">3. Data We Do NOT Collect</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">Luna does NOT collect:</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li>Personal identification information (name, email, phone number)</li>
								<li>Location data</li>
								<li>Device identifiers or advertising IDs</li>
								<li>Usage analytics or app performance data</li>
								<li>Any data transmitted to external servers</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">4. Data Sharing</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								We do not share, sell, rent, or trade your data with third parties. Since your data never leaves your device, there is no possibility of unauthorized data sharing.
							</p>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">5. On-Device Machine Learning</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								Luna&apos;s cycle predictions are generated using on-device machine learning. The prediction algorithm runs locally on your phone using your historical cycle data. No prediction data is sent to external servers.
							</p>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">6. Contact Us</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								If you have questions about this privacy policy or Luna&apos;s data practices, please contact us at: <strong>privacy@luna-app.com</strong>
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
