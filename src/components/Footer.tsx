import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[var(--surface)] border-t border-border py-10 sm:py-12 pb-6">
			<div className="container">
				{/* Logo - Centered on mobile */}
				<div className="flex flex-col items-center mb-8 sm:hidden">
					<div className="flex items-center gap-2 mb-2">
						<Image
							src="/logo.png"
							alt="Luna Logo"
							width={32}
							height={32}
							className="object-contain rounded-full border-2 border-blue"
						/>
						<span className="text-xl font-bold gradient-text">Luna</span>
					</div>
					<p className="text-text-secondary text-sm">Your cycle, your privacy.</p>
				</div>

				{/* Links Grid - Legal and App centered on all screen sizes */}
				<div className="grid grid-cols-2 gap-8 mb-8 sm:mb-12 text-center justify-items-center">
					{/* Legal - Left */}
					<div className="footer-section">
						<h4 className="mb-4 text-text">Legal</h4>
						<ul className="list-none">
							<li className="mb-2">
								<Link href="/privacy-policy" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Privacy Policy
								</Link>
							</li>
							<li className="mb-2">
								<Link href="/terms-of-service" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Terms of Service
								</Link>
							</li>
							<li className="mb-2">
								<Link href="/data-collection" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Data Collection
								</Link>
							</li>
						</ul>
					</div>

					{/* App - Right */}
					<div className="footer-section">
						<h4 className="mb-4 text-text">App</h4>
						<ul className="list-none">
							<li className="mb-2">
								<Link href="/about" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									About
								</Link>
							</li>
							<li className="mb-2">
								<Link href="/support" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Support
								</Link>
							</li>
							<li className="mb-2">
								<Link href="/#download" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Download
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Logo - Desktop only, centered */}
				<div className="hidden sm:flex flex-col items-center mb-8">
					<div className="flex items-center gap-2 mb-2">
						<Image
							src="/logo.png"
							alt="Luna Logo"
							width={32}
							height={32}
							className="object-contain rounded-full border-2 border-blue"
						/>
						<span className="text-xl font-bold gradient-text">Luna</span>
					</div>
					<p className="text-text-secondary text-sm">Your cycle, your privacy.</p>
				</div>

				{/* Copyright */}
				<div className="text-center pt-6 border-t border-border text-text-secondary text-sm px-4 space-y-1">
					<p>A Thompson Software App</p>
					<p>Created by Tyler Thompson</p>
					<p>&copy; 2026</p>
				</div>
			</div>
		</footer>
	);
}
