import SectionContainer from "@/components/base/section-container";
import GoldGauge from "@/features/shekaf-sekke/components/gold-gauge";

export default function ShekafSekke() {
	return (
		<SectionContainer>
			<div className="flex flex-row justify-between items-center h-full">
				<div className="w-50">
					<GoldGauge abShodehScore={2} khonsaScore={5} robeSekkehScore={6} />
				</div>
				<div className="h-full flex flex-col justify-between items-end gap-10">
					<h2 className="text-[14px] text-right">شکاف ربع سکه</h2>
					<div className="text-[8px] text-center p-2 rounded-[7px] border border-[#E6B745]/50 bg-radial from-[#E6B745]/20 to-transparent text-shadow-2xs text-shadow-[#E6B745]/10 font-normal">
						خرید طلا به صرفه تر است
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
