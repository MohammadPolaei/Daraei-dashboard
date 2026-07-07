import SectionContainer from "@/components/base/section-container";
import Bubble from "./bubble";

export default function BubbleShow() {
	return (
		<SectionContainer extraClass="w-full min-h-60 relative">
			<Bubble
				change={26.78}
				title="حباب سکه گرمی"
				size={90}
				className="top-2"
				delay={0}
			/>
			<Bubble
				change={26.78}
				title="حباب نیم سکه"
				size={130}
				className="top-15 left-20"
				delay={1.7}
			/>
			<Bubble
				change={26.78}
				title="حباب ربع سکه"
				size={110}
				className="top-30 right-3"
				delay={3.2}
			/>
			<Bubble
				change={26.78}
				title="حباب سکه امامی"
				size={100}
				className="top-2 right-4"
				delay={5.1}
			/>
		</SectionContainer>
	);
}
