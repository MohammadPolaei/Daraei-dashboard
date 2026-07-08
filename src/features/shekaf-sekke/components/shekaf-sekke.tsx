import CustomH2 from "@/components/base/custom-h2";
import SectionContainer from "@/components/base/section-container";
import GoldGauge from "@/features/shekaf-sekke/components/gold-gauge";

const shekafData = { abshodeh: 5, neutral: 0, robSekke: 3 };

export default function ShekafSekke() {
	return (
		<SectionContainer extraClass="w-full">
			<div className="flex flex-row justify-between items-center h-full">
				<div className="w-50">
					<GoldGauge
						abshodeh={shekafData.abshodeh}
						neutral={shekafData.neutral}
						robSekeh={shekafData.robSekke}
					/>
				</div>
				<div className="h-full flex flex-col justify-between items-end gap-14">
					<CustomH2 text="شکاف ربع سکه" />
					<div className="text-[8px] text-center p-2 rounded-[7px] border border-[#E6B745]/50 bg-radial from-[#E6B745]/25 to-transparent text-shadow-2xs text-shadow-[#E6B745]/10 font-normal">
						{shekafData.robSekke > shekafData.abshodeh
							? "خرید ربع سکه به صرفه تر است"
							: "خرید طلا به صرفه تر است"}
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
