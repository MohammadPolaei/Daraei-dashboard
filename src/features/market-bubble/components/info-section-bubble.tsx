import goldBubble from "@/assets/market-bubble/gold.svg";
import silverBubble from "@/assets/market-bubble/silver.svg";

import { VerticalIndicatorSilver } from "@/assets/market-bubble/silver-indicator";
import { VerticalIndicator } from "@/assets/market-bubble/VerticalIndicator";
import { faNumber } from "@/utils/convert-number-into-persian";
import { MarketData } from "../types/data";
export default function InfoSectionBubble({ data }: { data: MarketData }) {
	return (
		<div className="w-full relative flex flex-col justify-start items-end">
			<h3 className="w-full text-right text-[12px] text-[#898989]">
				حباب بازار
			</h3>
			<span className="text-[14px] text-white text-right">
				{`${data.value > 0 ? "+" : ""}${faNumber(data.value).replace(
					".",
					"/"
				)}٪`}
			</span>
			<div className="inline-block animate-bubblePulse">
				<img
					draggable={false}
					src={data.symbol == "gold" ? goldBubble.src : silverBubble.src}
				/>
			</div>
			<p className="text-white text-[10px]">فاصله از ارزش ذاتی</p>
			<div className="absolute left-0 top-[-17] w-full">
				{data.symbol == "gold" ? (
					<VerticalIndicator value={data.value} />
				) : (
					<VerticalIndicatorSilver value={data.value} />
				)}
			</div>
		</div>
	);
}
