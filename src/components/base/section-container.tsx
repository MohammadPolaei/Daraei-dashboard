import { ReactNode } from "react";

export default function SectionContainer({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<section className="min-w-85.75 text-white p-3 rounded-3xl border border-gray-600 mx-auto shadow-2xl">
			{children}
		</section>
	);
}
