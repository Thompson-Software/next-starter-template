import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[var(--surface)] border-t border-border py-12 pb-6">
			<div className="container">
				<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mb-8">
					<div className="footer-section">
						<div className="flex items-center gap-2 mb-2">
							<Image
								src="/logo.png"
								alt="Luna Logo"
								width={24}
								height={24}
								className="object-contain rounded-full border-2 border-blue"
							/>
							<span className="text-xl font-bold gradient-text">Luna</span>
						</div>
						<p className="text-text-secondary text-sm">Your cycle, your privacy.</p>
					</div>
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
					<div className="footer-section">
						<h4 className="mb-4 text-text">App</h4>
						<ul className="list-none">
							<li className="mb-2">
								<Link href="/#features" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Features
								</Link>
							</li>
							<li className="mb-2">
								<Link href="/#privacy" className="text-text-secondary no-underline transition-colors duration-300 hover:text-[var(--primary)]">
									Privacy
								</Link>
							</li>
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
				<div className="text-center pt-6 border-t border-border text-text-secondary text-sm">
					<p>&copy; 2026 Luna. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
