import GoldSilverChoose from "@/features/gold-silver-choose/components/gold-silver-choose";
import ShekafSekke from "@/features/shekaf-sekke/components/shekaf-sekke";

export default function Home() {
	return (
		<main className="">
			<ShekafSekke />
			<GoldSilverChoose />
		</main>
	);
}
