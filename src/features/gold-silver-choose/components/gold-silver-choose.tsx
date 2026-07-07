import ShieldBackground from "@/assets/choose/ShieldBackground";
import SectionContainer from "@/components/base/section-container";

export default function GoldSilverChoose() {
	return (
		<SectionContainer>
			<h2 className="w-full text-right">انتخاب طلا یا نقره</h2>
			<div className="flex justify-center items-center gap-5">
				<div className="w-full flex flex-col justify-center items-center gap-1">
					<span className="text-[#D1810F] text-[15px] font-semibold">طلا</span>
					<span className="text-white text-[15px] font-semibold">66%</span>
					<span className="text-[#898989] text-[12px]">امتیاز جذابیت</span>
				</div>
				<div>
					{" "}
					<div className="relative w-23 h-26.5">
						<ShieldBackground />

						<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
							<span className="text-[8px] text-gray-300">پیشنهاد امروز</span>

							<span className="text-[#F59E0B] text-xl font-bold leading-none my-0">
								طلا
							</span>

							<span className="text-[#F59E0B] text-[8px] font-normal">
								انتخاب بهتر
							</span>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col justify-center items-center gap-1">
					<span className="text-[#B0B0B0] text-[15px] font-semibold">نقره</span>
					<span className="text-white text-[15px] font-semibold">34%</span>
					<span className="text-[#898989] text-[12px]">امتیاز جذابیت</span>
				</div>
			</div>
		</SectionContainer>
	);
}
