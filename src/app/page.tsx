import { LeftSideWithButton } from "@/components/shell/left-side-with-button";
import { ResponsiveNav } from "@/components/shell/responsive-nav";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<ResponsiveNav />
			<LeftSideWithButton />
			<div className="h-[1000px] w-20 bg-green-900"></div>
		</main>
	);
}
