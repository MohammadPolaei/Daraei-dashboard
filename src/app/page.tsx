import GoldSilverChoose from "@/features/gold-silver-choose/components/gold-silver-choose";
import ShekafSekke from "@/features/shekaf-sekke/components/shekaf-sekke";

export default function Home() {
	return (
		<main className="flex flex-col justify-start items-center gap-5">
			<ShekafSekke />
			<GoldSilverChoose />
		</main>
	);
}
