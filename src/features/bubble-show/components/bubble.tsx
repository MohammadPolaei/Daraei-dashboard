import { faNumber } from "@/utils/convert-number-into-persian";

interface BubbleProps {
	size?: number;
	className?: string;
	title: string;
	change: number;
	delay?: number;
}

export default function Bubble({
	size = 180,
	className = "",
	title,
	change,
	delay = 0,
}: BubbleProps) {
	return (
		<div
			className={`
        absolute
        rounded-full
        border border-gray-600/50
        bg-radial
        via-transparent
        from-transparent
        to-gray-300/40
        backdrop-blur-md
        flex flex-col
        justify-center
        items-center
        text-center
        bubble-float
        ${className}
      `}
			style={{
				width: size,
				height: size,
				animationDelay: `${delay}s`,
			}}
		>
			<div>
				<span className="text-[12px] font-medium">{title}</span>

				<div className="flex items-center justify-center gap-1 mt-2">
					<div
						className={`w-2 h-2 rounded-full ${
							change > 0 ? "bg-[#53FF45]" : "bg-[#ff4545]"
						}`}
					/>

					<span
						className={`text-[10px] font-light ${
							change > 0 ? "text-[#53FF45]" : "text-[#ff4545]"
						}`}
					>
						%{faNumber(change)}
					</span>
				</div>
			</div>
		</div>
	);
}
