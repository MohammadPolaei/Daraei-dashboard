import React, { useMemo } from "react";

interface GoldGaugeProps {
	robeSekkehScore: number;
	khonsaScore: number;
	abShodehScore: number;
}

const GoldGauge: React.FC<GoldGaugeProps> = ({
	robeSekkehScore,
	khonsaScore,
	abShodehScore,
}) => {
	const dominantState = useMemo(() => {
		const max = Math.max(robeSekkehScore, khonsaScore, abShodehScore);
		if (max === 0) return "خنثی";
		if (max === robeSekkehScore) return "ربع سکه";
		if (max === abShodehScore) return "آب‌شده";
		return "خنثی";
	}, [robeSekkehScore, khonsaScore, abShodehScore]);

	const indicatorAngle = useMemo(() => {
		const total = robeSekkehScore + khonsaScore + abShodehScore;
		if (total === 0) return 0;

		const normalizedWeight =
			(-1 * robeSekkehScore + 0 * khonsaScore + 1 * abShodehScore) / total;

		return normalizedWeight * 80;
	}, [robeSekkehScore, khonsaScore, abShodehScore]);

	return (
		<div className="relative flex flex-col items-center justify-center px-6 rounded-3xl w-full max-w-md mx-auto overflow-hidden">
			<div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none" />

			<div className="relative w-full aspect-2/1 max-w-[320px] z-10">
				<svg
					viewBox="0 0 300 200"
					className="w-full h-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
				>
					<defs>
						<linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#3d2d1d" />
							<stop offset="50%" stopColor="#6e5033" />
							<stop offset="100%" stopColor="#3d2d1d" />
						</linearGradient>

						<linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#fbd38d" stopOpacity="0.18" />
							<stop offset="100%" stopColor="#fbd38d" stopOpacity="0" />
						</linearGradient>

						<filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
							<feGaussianBlur stdDeviation="5" result="blur" />
							<feComposite in="SourceGraphic" in2="blur" operator="over" />
						</filter>
					</defs>

					<path
						d="M 45 145 A 105 105 0 0 1 255 145"
						fill="none"
						stroke="url(#arcGradient)"
						strokeWidth="5"
						strokeLinecap="round"
						className="opacity-90"
					/>

					<path
						d="M 100 145 A 50 50 0 0 1 200 145 Z"
						fill="#141416"
						stroke="#262629"
						strokeWidth="1.5"
					/>

					<g
						style={{
							transform: `rotate(${indicatorAngle}deg)`,
							transformOrigin: "150px 145px",
							transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
						}}
					>
						<polygon points="150,145 140,40 160,40" fill="url(#beamGradient)" />

						<circle
							cx="150"
							cy="40"
							r="7"
							fill="#fbd38d"
							stroke="#0a0a0a"
							strokeWidth="2"
							className="shadow-inner"
							style={{ filter: "drop-shadow(0px 0px 8px #fbd38d)" }}
						/>
					</g>

					<text
						x="150"
						y="125"
						textAnchor="middle"
						fill="#fbd38d"
						className="font-bold text-[15px] select-none"
						style={{
							filter: "drop-shadow(0px 0px 5px rgba(251, 211, 141, 0.5))",
						}}
					>
						{dominantState}
					</text>

					<text
						x="150"
						y="23"
						textAnchor="middle"
						fill="#fff"
						className="text-[18px] opacity-95 select-none font-light"
					>
						خنثی
					</text>

					<text
						x="35"
						y="170"
						textAnchor="middle"
						fill="#ffffff"
						className="text-[18px] opacity-95 select-none font-light"
					>
						ربع سکه
					</text>

					<text
						x="265"
						y="170"
						textAnchor="middle"
						fill="#ffffff"
						className="text-[18px] opacity-95 select-none font-light"
					>
						آب‌شده
					</text>
				</svg>
			</div>
		</div>
	);
};

export default GoldGauge;
