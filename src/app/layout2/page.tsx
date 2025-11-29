import { Footer } from "@/components/shell/footer";
import { LeftSide } from "@/components/shell/left-side";
import { Nav } from "@/components/shell/nav";

export default function HomePage() {
	return (
		<main className="bg-amber-500">
			<Nav />
			<LeftSide />
			<div className="h-[1000px] w-20 bg-green-900"></div>
			<Footer />
		</main>
	);
}
