import React from "react";

interface VerticalIndicatorProps {
	/**
	 * مقداری بین ۱۰- تا ۱۰+ برای نمایش روی نشانگر
	 */
	value: number;
	/**
	 * کلاس‌های اختیاری CSS یا Tailwind
	 */
	className?: string;
}

export const VerticalIndicator: React.FC<VerticalIndicatorProps> = ({
	value,
	className = "",
}) => {
	// محدود کردن مقدار ورودی بین ۱۰- و ۱۰+
	const clampedValue = Math.min(10, Math.max(-10, value));

	// مختصات دقیق درجات روی محور Y بر اساس فایل اصلی SVG
	const centerY = 80.7981; // موقعیت درجه صفر (وسط)
	const minY = 0.298096; // بالاترین درجه (مقدار ۱۰+)
	const maxY = 161.298; // پایین‌ترین درجه (مقدار ۱۰-)

	// محاسبه موقعیت هدف (Target Y) برای مرکز دایره
	let targetY = centerY;
	if (clampedValue > 0) {
		const progress = clampedValue / 10;
		targetY = centerY - progress * (centerY - minY);
	} else if (clampedValue < 0) {
		const progress = Math.abs(clampedValue) / 10;
		targetY = centerY + progress * (maxY - centerY);
	}

	// بررسی وضعیت صفر بودن مقدار
	const isZero = Math.abs(clampedValue) < 0.05;

	// محاسبه دقیق طول دنباله از مرکز دایره تا خط صفر وسط
	const tailLength = Math.abs(targetY - centerY);

	const isNegative = clampedValue < 0;

	// مرکز دایره در گروه متحرک در حالت پیش‌فرض روی Y = 39.1407 قرار دارد.
	// برای تنظیم دقیق دایره روی مقدار هدف: targetY - 39.1407
	const groupTranslateY = targetY - 39.1407;

	return (
		<svg
			width="60"
			height="162"
			viewBox="0 0 60 162"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role="slider"
			aria-valuenow={clampedValue}
			aria-valuemin={-10}
			aria-valuemax={10}
		>
			{/* خطوط پس‌زمینه خط‌کش */}
			<path
				d="M4.61279 0.298096L10.9726 0.298096"
				stroke="#D9D9D9"
				strokeOpacity="0.1"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 9.24255L10.9726 9.24255"
				stroke="#D9D9D9"
				strokeOpacity="0.2"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 18.187L10.9726 18.187"
				stroke="#D9D9D9"
				strokeOpacity="0.3"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 27.1315L10.9726 27.1315"
				stroke="#D9D9D9"
				strokeOpacity="0.4"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M0.372803 36.0759L15.2124 36.0759"
				stroke="#D9D9D9"
				strokeOpacity="0.5"
				strokeWidth="0.74537"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 45.0203L10.9726 45.0203"
				stroke="#D9D9D9"
				strokeOpacity="0.6"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				opacity="0.8"
				d="M4.61279 53.9647L10.9726 53.9647"
				stroke="#D9D9D9"
				strokeOpacity="0.7"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				opacity="0.9"
				d="M4.61279 62.9092L10.9726 62.9092"
				stroke="#D9D9D9"
				strokeOpacity="0.8"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 71.8536L10.9726 71.8536"
				stroke="#D9D9D9"
				strokeOpacity="0.9"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>

			{/* خط مبدأ صفر (وسط) */}
			<path
				d="M0.372803 80.7981L15.2124 80.7981"
				stroke="#D9D9D9"
				strokeWidth="0.74537"
				strokeLinecap="round"
			/>

			<path
				d="M4.61279 89.7426L10.9726 89.7426"
				stroke="#D9D9D9"
				strokeOpacity="0.9"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				opacity="0.9"
				d="M4.61279 98.687L10.9726 98.687"
				stroke="#D9D9D9"
				strokeOpacity="0.8"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				opacity="0.8"
				d="M4.61279 107.631L10.9726 107.631"
				stroke="#D9D9D9"
				strokeOpacity="0.7"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 116.576L10.9726 116.576"
				stroke="#D9D9D9"
				strokeOpacity="0.6"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M0.372803 125.52L15.2124 125.52"
				stroke="#D9D9D9"
				strokeOpacity="0.5"
				strokeWidth="0.74537"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 134.465L10.9726 134.465"
				stroke="#D9D9D9"
				strokeOpacity="0.4"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 143.409L10.9726 143.409"
				stroke="#D9D9D9"
				strokeOpacity="0.3"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 152.354L10.9726 152.354"
				stroke="#D9D9D9"
				strokeOpacity="0.2"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>
			<path
				d="M4.61279 161.298L10.9726 161.298"
				stroke="#D9D9D9"
				strokeOpacity="0.1"
				strokeWidth="0.596296"
				strokeLinecap="round"
			/>

			{/* نشانگر متحرک */}
			<g
				transform={`translate(0, ${groupTranslateY})`}
				style={{ transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)" }}
			>
				{/* ۱. دنباله متحرک (رسم مستقیم بدون قرینه‌سازی‌های پیچیده به منظور رندر پایدار گرادیان) */}
				{!isZero && (
					<path
						// در حالت مثبت دنباله به پایین کشیده می‌شود (دایره بالا است)؛ در حالت منفی دنباله به بالا کشیده می‌شود (دایره پایین است)
						d={
							isNegative
								? `M6.29272 ${39.1407 - tailLength} L9.29272 ${
										39.1407 - tailLength
								  } L9.29272 39.1407 L6.29272 39.1407 Z`
								: `M6.29272 39.1407 L9.29272 39.1407 L9.29272 ${
										39.1407 + tailLength
								  } L6.29272 ${39.1407 + tailLength} Z`
						}
						fill="url(#paint0_linear_2_601)"
					/>
				)}

				{/* ۲. بدنه دایره اصلی نشانگر */}
				<circle cx="7.79272" cy="39.1407" r="4.5" fill="url(#goldCircle)" />

				{/* ۳. افکت نوری Glow دایره */}
				<g filter="url(#filter0_f_2_601)">
					<rect
						x="10.3728"
						y="41.6407"
						width="5"
						height="5"
						rx="2.5"
						transform="rotate(180 10.3728 41.6407)"
						fill="white"
					/>
				</g>
			</g>

			{/* برچسب‌های درصد */}
			<text x="19" y="17" fill="#B8B8B8" fontSize="10" fontWeight="400">
				+۱۰%
			</text>
			<text x="19" y="84" fill="#FFFFFF" fontSize="10" fontWeight="400">
				۰%
			</text>
			<text x="19" y="156" fill="#B8B8B8" fontSize="10" fontWeight="400">
				-۱۰%
			</text>

			<defs>
				<filter
					id="filter0_f_2_601"
					x="4.3728"
					y="35.6407"
					width="7"
					height="7"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="0.5"
						result="effect1_foregroundBlur_2_601"
					/>
				</filter>

				<linearGradient
					id="paint0_linear_2_601"
					x1="7.79272"
					// y1 نقطه متصل به دایره (رنگ غلیظ تر) و y2 انتهای دنباله در خط صفر (محو تر) است
					y1={isNegative ? "39.1407" : "39.1407"}
					x2="7.79272"
					y2={
						isNegative ? `${39.1407 - tailLength}` : `${39.1407 + tailLength}`
					}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#CA9131" stopOpacity="1" />
					<stop offset="1" stopColor="#CA9131" stopOpacity="0.1" />
				</linearGradient>
				<linearGradient
					id="goldCircle"
					x1="7.79272"
					y1="34.6407"
					x2="7.79272"
					y2="43.6407"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#CA9131" />
					<stop offset="50%" stopColor="#CA9131" />
					<stop offset="100%" stopColor="#CA9131" />
				</linearGradient>
			</defs>
		</svg>
	);
};
