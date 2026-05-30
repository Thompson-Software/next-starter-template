"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
	variant?: "home" | "minimal";
}

const MenuIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
);

const CloseIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<line x1="18" y1="6" x2="6" y2="18"></line>
		<line x1="6" y1="6" x2="18" y2="18"></line>
	</svg>
);

export default function Header({ variant = "home" }: HeaderProps) {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (path: string) => {
		if (path.startsWith("#")) return false;
		return pathname === path;
	};

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	const navLinks = variant === "home" ? (
		<>
			<Link
				href="/#features"
				onClick={closeMenu}
				className="text-text-secondary font-medium transition-colors duration-300 hover:text-text py-2"
			>
				Features
			</Link>
			<Link
				href="/#privacy"
				onClick={closeMenu}
				className="text-text-secondary font-medium transition-colors duration-300 hover:text-text py-2"
			>
				Privacy
			</Link>
			<Link
				href="/about"
				onClick={closeMenu}
				className={`font-medium transition-colors duration-300 hover:text-text py-2 ${
					isActive("/about") ? "text-text" : "text-text-secondary"
				}`}
			>
				About
			</Link>
			<Link
				href="/support"
				onClick={closeMenu}
				className={`font-medium transition-colors duration-300 hover:text-text py-2 ${
					isActive("/support") ? "text-text" : "text-text-secondary"
				}`}
			>
				Support
			</Link>
			<Link
				href="/#download"
				onClick={closeMenu}
				className="text-text-secondary font-medium transition-colors duration-300 hover:text-text py-2"
			>
				Download
			</Link>
		</>
	) : (
		<>
			<Link
				href="/"
				onClick={closeMenu}
				className={`font-medium transition-colors duration-300 hover:text-text py-2 ${
					isActive("/") ? "text-text" : "text-text-secondary"
				}`}
			>
				Home
			</Link>
			<Link
				href="/about"
				onClick={closeMenu}
				className={`font-medium transition-colors duration-300 hover:text-text py-2 ${
					isActive("/about") ? "text-text" : "text-text-secondary"
				}`}
			>
				About
			</Link>
			<Link
				href="/support"
				onClick={closeMenu}
				className={`font-medium transition-colors duration-300 hover:text-text py-2 ${
					isActive("/support") ? "text-text" : "text-text-secondary"
				}`}
			>
				Support
			</Link>
		</>
	);

	return (
		<header className="fixed top-0 left-0 right-0 bg-surface/95 backdrop-blur-[10px] z-[1000] border-b border-border">
			<nav className="flex justify-between items-center py-4 px-4 sm:px-8 max-w-[1200px] mx-auto">
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

				{/* Desktop Navigation */}
				<div className="hidden md:flex gap-8">
					{navLinks}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-text p-2 -mr-2"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</nav>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg">
					<div className="flex flex-col px-4 py-4">
						{navLinks}
					</div>
				</div>
			)}
		</header>
	);
}
