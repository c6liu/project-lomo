import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Noto_Sans_Display,
} from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const notoSansDisplay = Noto_Sans_Display({
	variable: "--font-display",
	subsets: ["latin"],
	weight: "400",
	style: ["normal"],
});

export const metadata: Metadata = {
	title: "LoMo — Community Help",
	description: "A calm, consent-based community help platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	<html
		lang="en"
		className={`${geistSans.variable} ${geistMono.variable} ${notoSansDisplay.variable} h-full antialiased`}
	>
			<body className="min-h-full flex flex-col">
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	);
}
