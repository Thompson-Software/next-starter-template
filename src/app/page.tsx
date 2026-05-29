import Header from "@/components/Header";
import Footer from "@/components/Footer";

// SVG Icons as components
const LockIcon = () => (
	<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
		<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
	</svg>
);

const ChipIcon = () => (
	<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
	</svg>
);

const PhoneIcon = () => (
	<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
		<line x1="12" y1="18" x2="12.01" y2="18"></line>
	</svg>
);

const ChartIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<line x1="18" y1="20" x2="18" y2="10"></line>
		<line x1="12" y1="20" x2="12" y2="4"></line>
		<line x1="6" y1="20" x2="6" y2="14"></line>
	</svg>
);

const GlobeIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="2" y1="12" x2="22" y2="12"></line>
		<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
	</svg>
);

const CalendarIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
		<line x1="16" y1="2" x2="16" y2="6"></line>
		<line x1="8" y1="2" x2="8" y2="6"></line>
		<line x1="3" y1="10" x2="21" y2="10"></line>
	</svg>
);

const ThermometerIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
	</svg>
);

const InfoIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="12" y1="16" x2="12" y2="12"></line>
		<line x1="12" y1="8" x2="12.01" y2="8"></line>
	</svg>
);

const SaveIcon = () => (
	<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
		<polyline points="17 21 17 13 7 13 7 21"></polyline>
		<polyline points="7 3 7 8 15 8"></polyline>
	</svg>
);

const CheckIcon = () => (
	<svg className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<polyline points="20 6 9 17 4 12"></polyline>
	</svg>
);

const PhoneLargeIcon = () => (
	<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
		<line x1="12" y1="18" x2="12.01" y2="18"></line>
	</svg>
);

const BlockIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="15" y1="9" x2="9" y2="15"></line>
		<line x1="9" y1="9" x2="15" y2="15"></line>
	</svg>
);

export default function Home() {
	return (
		<>
			<Header variant="home" />
			<main>
				{/* Hero Section */}
				<section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-8 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,rgba(236,72,153,0.1)_25%,rgba(59,130,246,0.1)_50%,rgba(239,68,68,0.05)_75%,transparent_100%)]">
					<div className="text-center max-w-[800px]">
						<h1 className="text-6xl font-extrabold mb-6 gradient-text leading-tight">
							Your Cycle, Your Privacy
						</h1>
						<p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed">
							Track your period, ovulation, and fertility windows with complete privacy. Available on iOS and Android. No accounts. No cloud. No data sharing.
						</p>
						<div className="mb-12">
							<a href="#download" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-[var(--color-blue)] text-white shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]">
								Download on App Store
							</a>
						</div>
						<div className="flex justify-center gap-6 flex-wrap">
							<div className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)]">
								<span className="text-[var(--color-blue)]"><LockIcon /></span>
								<span>100% Local Storage</span>
							</div>
							<div className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)]">
								<span className="text-[var(--color-blue)]"><ChipIcon /></span>
								<span>On-Device ML</span>
							</div>
							<div className="flex items-center gap-2 px-5 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)]">
								<span className="text-[var(--color-secondary)]"><PhoneIcon /></span>
								<span>No Account Required</span>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="py-24 bg-[var(--color-surface)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Features</h2>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-blue)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--color-blue)]"><ChartIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Cycle Tracking</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Log period start/end dates, flow levels, and symptoms with an intuitive interface.</p>
							</div>
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--color-secondary)]"><GlobeIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Smart Predictions</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">On-device machine learning predicts your cycle, ovulation, and fertility windows.</p>
							</div>
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-blue)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--color-blue)]"><CalendarIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Calendar View</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Visual calendar showing your period, fertile window, and predicted ovulation day.</p>
							</div>
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--red)] hover:shadow-[0_10px_30px_rgba(239,68,68,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--red)]"><ThermometerIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">BBT & Mucus Tracking</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Track basal body temperature and cervical mucus to improve prediction accuracy.</p>
							</div>
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-blue)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--color-blue)]"><InfoIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Insights</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">View cycle regularity, mood trends, and symptom patterns over time.</p>
							</div>
							<div className="group bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-border)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[var(--color-secondary)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.2)]">
								<div className="w-10 h-10 mb-4 text-[var(--color-secondary)]"><SaveIcon /></div>
								<h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Backup & Export</h3>
								<p className="text-[var(--color-text-secondary)] leading-relaxed">Export your data anytime. Your data belongs to you.</p>
							</div>
						</div>
					</div>
				</section>

				{/* Privacy Section */}
				<section id="privacy" className="py-24 bg-[var(--color-background)]">
					<div className="container">
						<h2 className="text-4xl font-bold text-center mb-12 gradient-text">Privacy First</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
							<div>
								<p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
									Luna is built on a simple principle: your health data is yours and yours alone. We don&apos;t believe in tracking, profiling, or monetizing your personal information.
								</p>
								<ul className="list-none space-y-5">
									<li className="flex items-start gap-4 text-[var(--color-text-secondary)]">
										<CheckIcon />
										<span><strong>No cloud storage</strong> — All data stays on your device in a local SQLite database</span>
									</li>
									<li className="flex items-start gap-4 text-[var(--color-text-secondary)]">
										<CheckIcon />
										<span><strong>No accounts required</strong> — Use the app immediately without signing up</span>
									</li>
									<li className="flex items-start gap-4 text-[var(--color-text-secondary)]">
										<CheckIcon />
										<span><strong>No data sharing</strong> — We never sell, rent, or share your data</span>
									</li>
									<li className="flex items-start gap-4 text-[var(--color-text-secondary)]">
										<CheckIcon />
										<span><strong>No analytics</strong> — We don&apos;t track how you use the app</span>
									</li>
									<li className="flex items-start gap-4 text-[var(--color-text-secondary)]">
										<CheckIcon />
										<span><strong>On-device ML</strong> — Predictions happen locally, not on our servers</span>
									</li>
								</ul>
							</div>
							<div className="flex flex-col items-center gap-6">
								<div className="bg-[var(--color-surface)] p-8 rounded-2xl border-2 border-[var(--color-blue)] text-center w-[200px] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
									<div className="w-12 h-12 mx-auto mb-2 text-[var(--color-blue)]"><PhoneLargeIcon /></div>
									<div className="font-bold mb-1">Your Device</div>
									<div className="text-[var(--color-text-secondary)] text-sm">All data stored locally</div>
								</div>
								<div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-surface)] rounded-full border border-[var(--color-blue)]">
									<span className="text-[var(--color-blue)]"><BlockIcon /></span>
									<span className="font-semibold text-[var(--color-text-secondary)]">No Cloud</span>
								</div>
								<div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-surface)] rounded-full border border-[var(--color-blue)]">
									<span className="text-[var(--color-blue)]"><BlockIcon /></span>
									<span className="font-semibold text-[var(--color-text-secondary)]">No Tracking</span>
								</div>
								<div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-surface)] rounded-full border border-[var(--color-secondary)]">
									<span className="text-[var(--color-secondary)]"><BlockIcon /></span>
									<span className="font-semibold text-[var(--color-text-secondary)]">No Accounts</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Download Section */}
				<section id="download" className="py-24 bg-[var(--color-surface)] text-center">
					<div className="container">
						<h2 className="text-4xl font-bold mb-4 gradient-text">Download Luna</h2>
						<p className="text-[var(--color-text-secondary)] text-xl mb-8">Available on iOS and Android</p>
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
						<p className="text-[var(--color-text-secondary)] text-sm">iOS 15.0+ • Android 8.0+</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
