import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	viewportFit: "cover",
	userScalable: false,
};

export const metadata: Metadata = {
	title: "App Shell PWA",
	description: "App Shell PWA",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	appleWebApp: {
		capable: true,
	},
	other: {
		"apple-mobile-web-app-capable": "yes",
		"mobile-web-app-capable": "yes",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="overscroll-none" lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
