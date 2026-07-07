import BubbleShow from "@/features/bubble-show/components/bubble-show";
import GoldSilverChoose from "@/features/gold-silver-choose/components/gold-silver-choose";
import MarketBubble from "@/features/market-bubble/components/market-bubble";
import ShekafSekke from "@/features/shekaf-sekke/components/shekaf-sekke";

export default function Home() {
	return (
		<main className="flex flex-col justify-start items-center gap-5">
			<ShekafSekke />
			<GoldSilverChoose />
			<MarketBubble />
			<BubbleShow />
		</main>
	);
}
