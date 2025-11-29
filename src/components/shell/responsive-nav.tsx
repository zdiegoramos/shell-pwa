export function ResponsiveNav() {
	return (
		<div
			className="fixed inset-x-0 bottom-0 z-50 mb-[env(safe-area-inset-bottom)] flex justify-center border-t bg-emerald-600/40 md:top-0 md:bottom-auto md:mt-[env(safe-area-inset-top)] md:mb-0 md:border-t-0 md:border-b"
			data-responsive-nav
		>
			<div className="flex h-full w-full items-center justify-between">
				<div className="flex h-full items-center gap-2">Logo</div>
				<nav className="flex h-full items-center gap-4">Link 1</nav>
			</div>
		</div>
	);
}
