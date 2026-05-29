import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const CheckIcon = () => (
	<svg className="w-5 h-5 text-[var(--success)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<polyline points="20 6 9 17 4 12"></polyline>
	</svg>
);

export const metadata = {
	title: "Data Collection Policy - Luna: Privacy Period",
	description: "Luna's data collection policy. Learn about our commitment to minimal data collection and future opt-in analytics.",
};

export default function DataCollectionPage() {
	return (
		<>
			<Header variant="minimal" />
			<main className="pt-32 pb-16 px-4 min-h-screen">
				<div className="container max-w-[800px]">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-2 gradient-text">Data Collection Policy</h1>
						<p className="text-[var(--text-secondary)]">Last updated: May 2026</p>
					</div>

					<div className="space-y-10">
						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Current Data Collection Status</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-6">
								<strong>Luna currently does NOT collect any data.</strong> The app operates entirely offline with respect to data processing and analytics.
							</p>
							<div className="bg-[var(--surface)] border border-[var(--primary)] rounded-xl p-6">
								<h3 className="text-[var(--primary)] mb-4 text-lg font-semibold flex items-center gap-2">
									<CheckIcon />
									Zero Data Collection
								</h3>
								<p className="text-[var(--text-secondary)]">
									No analytics, no tracking, no usage statistics, no crash reports, and no performance metrics are collected or transmitted to any server.
								</p>
							</div>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">What This Means for You</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">Because Luna collects no data:</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li>Your cycle data never leaves your device</li>
								<li>We don&apos;t track how you use the app</li>
								<li>We don&apos;t track which features you use or don&apos;t use</li>
								<li>We don&apos;t collect crash reports or error logs</li>
								<li>We don&apos;t track app performance metrics</li>
								<li>We don&apos;t serve ads or use third-party tracking</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Future Analytics (Opt-In Only)</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed mb-4">
								We may consider adding optional, anonymous analytics in the future to help improve the app. If we do:
							</p>
							<ul className="list-none space-y-2 text-[var(--text-secondary)]">
								<li><strong>It will be opt-in only</strong> — You must explicitly consent</li>
								<li><strong>It will be anonymous</strong> — No personally identifiable information</li>
								<li><strong>It will be minimal</strong> — Only essential metrics for improvement</li>
								<li><strong>You can opt-out at any time</strong> — In app settings</li>
								<li><strong>Health data will NEVER be collected</strong> — Even with analytics enabled</li>
							</ul>
						</section>

						<section className="pb-10 border-b border-[var(--border)]">
							<h2 className="text-2xl font-semibold mb-4 text-[var(--text)]">Contact Us</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								If you have questions about our data collection practices or privacy commitment, please contact us at: <strong>privacy@luna-app.com</strong>
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
