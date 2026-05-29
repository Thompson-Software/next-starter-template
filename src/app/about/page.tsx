import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HeartIcon = () => (
	<svg className="w-12 h-12 mx-auto mb-6 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
	</svg>
);

const ClockIcon = () => (
	<svg className="w-12 h-12 mx-auto mb-6 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="12" cy="12" r="10"></circle>
		<path d="M12 6v6l4 2"></path>
	</svg>
);

const ChipIcon = () => (
	<svg className="w-12 h-12 mx-auto mb-6 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
	</svg>
);

const UsersIcon = () => (
	<svg className="w-12 h-12 mx-auto mb-6 text-[var(--color-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
		<circle cx="9" cy="7" r="4"></circle>
		<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
	</svg>
);

export const metadata = {
	title: "About Luna - Privacy Period Tracking App",
	description: "Learn about Luna, the privacy-first period tracking app. Features, benefits, and why Luna is different from other period trackers.",
};

export default function AboutPage() {
	return (
		<>
			<Header variant="minimal" />
			<main>
				{/* Hero Section */}
				<section className="min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-8 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,rgba(236,72,153,0.1)_25%,rgba(59,130,246,0.1)_50%,rgba(239,68,68,0.05)_75%,transparent_100%)]">
					<div className="text-center max-w-[800px]">
						<h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text leading-tight">
							Period Tracking, Reimagined
						</h1>
						<p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed">
							Luna combines powerful cycle tracking with uncompromising privacy. No accounts, no cloud, no data sharing. Just you and your cycle data, completely private.
						</p>
						<div className="mb-12">
							<a href="/#download" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-[var(--color-blue)] text-white shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]">
								Download Luna
							</a>
						</div>
					</div>
				</section>

				{/* Mission Section */}
				<section className="py-24 bg-[var(--color-surface)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Mission</h2>
						<div className="max-w-[800px] mx-auto text-center">
							<p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
								We believe that menstrual health data is deeply personal and deserves the highest level of protection. In an era where data is constantly collected, sold, and exploited, Luna takes a different approach.
							</p>
							<p className="text-lg text-[var(--color-text-secondary)] mb-10 leading-relaxed">
								Our mission is to provide a powerful, intuitive period tracking experience while ensuring that your health information never leaves your device. We don&apos;t believe in trading your privacy for convenience. With Luna, you get both.
							</p>
							<div className="flex justify-center gap-12 flex-wrap">
								<div className="text-center">
									<div className="text-4xl font-extrabold gradient-text mb-2">0</div>
									<div className="text-[var(--color-text-secondary)] text-sm">Data points in cloud</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-extrabold gradient-text mb-2">100%</div>
									<div className="text-[var(--color-text-secondary)] text-sm">Local storage</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-extrabold gradient-text mb-2">∞</div>
									<div className="text-[var(--color-text-secondary)] text-sm">Privacy commitment</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Target Audience Section */}
				<section className="py-24 bg-[var(--color-background)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Who Is Luna For?</h2>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
							<div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<ChipIcon />
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Privacy-Conscious Users</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">If you&apos;re concerned about data privacy and want to keep your health information secure, Luna is designed for you. Your data never leaves your device.</p>
							</div>
							<div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<ClockIcon />
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Busy Professionals</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Quick logging, smart predictions, and no account setup means you can start tracking immediately without wasting time on sign-ups.</p>
							</div>
							<div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<HeartIcon />
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Health Enthusiasts</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Track BBT, cervical mucus, and symptoms to gain deeper insights into your cycle patterns and overall health.</p>
							</div>
							<div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<UsersIcon />
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Anyone Who Values Privacy</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Whether you&apos;re tracking for fertility, health, or just awareness, Luna ensures your personal data stays personal.</p>
							</div>
						</div>
					</div>
				</section>

				{/* Comparison Section */}
				<section className="py-24 bg-[var(--color-surface)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-4 gradient-text">How Luna Compares</h2>
						<p className="text-[var(--color-text-secondary)] text-center text-lg mb-12">See how Luna stacks up against other period tracking apps</p>
						<div className="max-w-[800px] mx-auto border border-[var(--color-border)] rounded-xl overflow-hidden">
							<div className="grid grid-cols-3 bg-[var(--color-background)] border-b border-[var(--color-border)]">
								<div className="p-4 text-center text-[var(--color-text)] font-semibold">Feature</div>
								<div className="p-4 text-center text-[var(--color-secondary)] font-semibold">Luna</div>
								<div className="p-4 text-center text-[var(--color-text)] font-semibold">Other Apps</div>
							</div>
							{[
								["Cloud Storage", "❌ None", "✅ Usually"],
								["Account Required", "❌ No", "✅ Usually"],
								["Data Selling", "❌ Never", "⚠️ Sometimes"],
								["Analytics Tracking", "❌ None", "✅ Common"],
								["Local Storage", "✅ 100%", "⚠️ Partial"],
								["Data Export", "✅ Yes", "⚠️ Sometimes"],
								["Cycle Predictions", "✅ ML-powered", "✅ Yes"],
								["BBT Tracking", "✅ Yes", "⚠️ Premium"],
								["Mucus Tracking", "✅ Yes", "⚠️ Premium"],
								["Monthly Fee", "❌ Free", "⚠️ Often"],
							].map((row, idx) => (
								<div key={idx} className="grid grid-cols-3 border-b border-[var(--color-border)] last:border-b-0">
									<div className="p-4 text-center text-[var(--color-text-secondary)] font-medium">{row[0]}</div>
									<div className="p-4 text-center text-[var(--color-success)] font-semibold">{row[1]}</div>
									<div className="p-4 text-center text-[var(--color-text-secondary)] font-medium">{row[2]}</div>
								</div>
							))}
							</div>
						</div>
				</section>

				{/* Benefits Section */}
				<section className="py-24 bg-[var(--color-background)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Luna?</h2>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
							{[
								{ num: "01", title: "True Privacy", desc: "Your health data is stored exclusively on your device. No cloud backups, no data sharing, no profiling. Your cycle information is yours alone." },
								{ num: "02", title: "No Account Required", desc: "Download and start tracking immediately. No email verification, no password creation, no personal information required. Just you and your data." },
								{ num: "03", title: "Smart Predictions", desc: "On-device machine learning analyzes your cycle patterns to predict your period, ovulation, and fertile windows with increasing accuracy over time." },
								{ num: "04", title: "Complete Control", desc: "Export your data anytime in a standard format. Your data belongs to you, and we make it easy to take it with you." },
								{ num: "05", title: "No Hidden Costs", desc: "All features are available to everyone. No premium tiers, no paywalls, no subscriptions. Privacy shouldn&apos;t be a luxury feature." },
								{ num: "06", title: "Works Offline", desc: "No internet connection required. Track your cycle anywhere, anytime, without worrying about connectivity or data usage." },
							].map((benefit, idx) => (
								<div key={idx} className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] relative overflow-hidden">
									<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--color-secondary)] to-[var(--color-blue)]"></div>
									<div className="text-5xl font-extrabold gradient-text mb-4 opacity-30">{benefit.num}</div>
									<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">{benefit.title}</h3>
									<p className="text-[var(--color-text-secondary)] leading-relaxed">{benefit.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Download Section */}
				<section className="py-24 bg-[var(--color-surface)] text-center">
					<div className="container">
						<h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Take Control?</h2>
						<p className="text-[var(--color-text-secondary)] text-xl mb-8">Download Luna today and experience period tracking with true privacy</p>
						<div className="flex gap-4 justify-center flex-wrap mb-6">
							<a href="#" className="inline-block transition-all duration-300 hover:translate-y-[-2px] hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
								<img
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
									alt="Download on the App Store"
									className="h-12 w-auto block"
								/>
							</a>
							<a href="#" className="inline-block transition-all duration-300 hover:translate-y-[-2px] hover:drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
									alt="Get it on Google Play"
									className="h-12 w-auto block"
								/>
							</a>
						</div>
						<p className="text-[var(--color-text-secondary)] text-sm">iOS 15.0+ • Android 8.0+ • Free forever</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
