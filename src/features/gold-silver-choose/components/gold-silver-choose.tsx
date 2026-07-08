import ShieldBackground from "@/assets/choose/ShieldBackground";
import CustomH2 from "@/components/base/custom-h2";
import SectionContainer from "@/components/base/section-container";
import { faNumber } from "@/utils/convert-number-into-persian";

export default function GoldSilverChoose() {
	return (
		<SectionContainer extraClass="min-w-full">
			<CustomH2 text="انتخاب طلا یا نقره" />
			<div className="flex justify-center items-center gap-5">
				<div className="w-full flex flex-col justify-center items-center gap-1">
					<span className="text-[#D1810F] text-[15px] font-normal">طلا</span>
					<span className="text-white text-[15px] font-normal">{`${faNumber(
						66
					)}٪`}</span>
					<span className="text-[#898989] text-[11px]">امتیاز جذابیت</span>
				</div>
				<div>
					{" "}
					<div className="relative w-23 h-26.5">
						<ShieldBackground />

						<div className="absolute top-[-10] right-0 left-0 bottom-0 flex flex-col items-center justify-center text-center gap-0.75">
							<span className="text-[8px] text-gray-400">پیشنهاد امروز</span>

							<span className="text-[#F59E0B] text-[14px] font-semibold leading-none my-0">
								طلا
							</span>

							<span className="text-[#F59E0B] text-[8px] font-normal">
								انتخاب بهتر
							</span>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col justify-center items-center gap-1">
					<span className="text-[#B0B0B0] text-[15px] font-normal">نقره</span>
					<span className="text-white text-[15px] font-normal">{`${faNumber(
						34
					)}٪`}</span>
					<span className="text-[#898989] text-[11px]">امتیاز جذابیت</span>
				</div>
			</div>
		</SectionContainer>
	);
}
