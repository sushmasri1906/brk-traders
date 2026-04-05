import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppFloat from "@/components/common/WhatsapFloat";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BRK Traders",
	description:
		"BRK Traders is a leading trading company specializing in commodities, financial instruments, and global markets. With a commitment to excellence and innovation, we provide our clients with unparalleled trading solutions and insights to navigate the complexities of the financial world.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Navbar />
				<WhatsAppFloat />
				{children}
				<Footer />
			</body>
		</html>
	);
}
