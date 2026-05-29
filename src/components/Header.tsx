"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
	variant?: "home" | "minimal";
}

export default function Header({ variant = "home" }: HeaderProps) {
	const pathname = usePathname();

	const isActive = (path: string) => {
		if (path.startsWith("#")) return false;
		return pathname === path;
	};

	return (
		<header className="fixed top-0 left-0 right-0 bg-surface/95 backdrop-blur-[10px] z-[1000] border-b border-border">
			<nav className="flex justify-between items-center py-4 px-8 max-w-[1200px] mx-auto">
				<Link href="/" className="flex items-center gap-2 no-underline text-text">
					<Image
						src="/logo.png"
						alt="Luna Logo"
						width={24}
						height={24}
						className="object-contain rounded-full border-2 border-blue"
					/>
					<span className="text-xl font-bold gradient-text">Luna</span>
				</Link>

				<div className="flex gap-8">
					{variant === "home" ? (
						<>
							<Link
								href="/#features"
								className="text-text-secondary font-medium transition-colors duration-300 hover:text-text"
							>
								Features
							</Link>
							<Link
								href="/#privacy"
								className="text-text-secondary font-medium transition-colors duration-300 hover:text-text"
							>
								Privacy
							</Link>
							<Link
								href="/about"
								className={`font-medium transition-colors duration-300 hover:text-text ${
									isActive("/about") ? "text-text" : "text-text-secondary"
								}`}
							>
								About
							</Link>
							<Link
								href="/support"
								className={`font-medium transition-colors duration-300 hover:text-text ${
									isActive("/support") ? "text-text" : "text-text-secondary"
								}`}
							>
								Support
							</Link>
							<Link
								href="/#download"
								className="text-text-secondary font-medium transition-colors duration-300 hover:text-text"
							>
								Download
							</Link>
						</>
					) : (
						<>
							<Link
								href="/"
								className={`font-medium transition-colors duration-300 hover:text-text ${
									isActive("/") ? "text-text" : "text-text-secondary"
								}`}
							>
								Home
							</Link>
							<Link
								href="/about"
								className={`font-medium transition-colors duration-300 hover:text-text ${
									isActive("/about") ? "text-text" : "text-text-secondary"
								}`}
							>
								About
							</Link>
							<Link
								href="/support"
								className={`font-medium transition-colors duration-300 hover:text-text ${
									isActive("/support") ? "text-text" : "text-text-secondary"
								}`}
							>
								Support
							</Link>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
