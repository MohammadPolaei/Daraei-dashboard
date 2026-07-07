import { ReactNode } from "react";

export default function SectionContainer({
	children,
	extraClass,
}: {
	children: ReactNode;
	extraClass: string;
}) {
	return (
		<section
			className={`${extraClass} text-white p-3 rounded-3xl border border-gray-600 mx-auto shadow-2xl">`}
		>
			{children}
		</section>
	);
}
