import { Footer } from "@/components/shell/footer";
import { LeftSideWithButton } from "@/components/shell/left-side-with-button";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<LeftSideWithButton />
			<div className="h-[1000px] w-20 bg-green-900"></div>
			<Footer />
		</main>
	);
}
