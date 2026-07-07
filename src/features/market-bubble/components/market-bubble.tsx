import CustomH2 from "@/components/base/custom-h2";
import SectionContainer from "@/components/base/section-container";
import { MarketData } from "../types/data";
import InfoSectionBubble from "./info-section-bubble";

const goldData: MarketData = { symbol: "gold", value: 5 };
const silverData: MarketData = { symbol: "silver", value: -5.8 };

export default function MarketBubble() {
	return (
		<section className="w-full flex justify-between items-center gap-3 max-w-85.75">
			<SectionContainer extraClass="flex-1 w-42">
				<CustomH2 text="حباب طلا" />
				<InfoSectionBubble data={goldData} />
			</SectionContainer>
			<SectionContainer extraClass="flex-1 w-42">
				<CustomH2 text="حباب نقره" />
				<InfoSectionBubble data={silverData} />
			</SectionContainer>
		</section>
	);
}
