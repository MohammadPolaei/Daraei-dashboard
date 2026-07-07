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

export const VerticalIndicatorSilver: React.FC<VerticalIndicatorProps> = ({
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
			width="16"
			height="162"
			viewBox="0 0 16 162"
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
				<path
					d="M6.29272 44.7981C6.29272 43.9505 5.72734 43.2277 5.05496 42.7116C3.98351 41.8892 3.29272 40.5958 3.29272 39.1407C3.29272 36.6554 5.30744 34.6407 7.79272 34.6407C10.278 34.6407 12.2927 36.6554 12.2927 39.1407C12.2927 40.5958 11.6019 41.8892 10.5305 42.7116C9.85811 43.2277 9.29272 43.9505 9.29272 44.7981L9.29272 46.0000C9.29272 46.8284 8.62115 47.5000 7.79272 47.5000C6.9643 47.5000 6.29272 46.8284 6.29272 46.0000L6.29272 44.7981Z"
					fill="url(#silverCircle)"
				/>

				{/* ۳. افکت نوری Glow دایره */}
				<g filter="url(#filter0_f_2_601)">
					<rect
						x="10.3728"
						y="41.6407"
						width="5"
						height="5"
						rx="2.5"
						transform="rotate(180 10.3728 41.6407)"
						fill="#F5F5F5"
					/>
				</g>
			</g>

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
					y1="39.1407"
					x2="7.79272"
					y2={
						isNegative ? `${39.1407 - tailLength}` : `${39.1407 + tailLength}`
					}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#F4F4F4" stopOpacity="1" />
					<stop offset="45%" stopColor="#D5D5D5" stopOpacity="0.9" />
					<stop offset="100%" stopColor="#8B8B8B" stopOpacity="0.1" />
				</linearGradient>
				<linearGradient
					id="silverCircle"
					x1="7.79272"
					y1="34.6407"
					x2="7.79272"
					y2="47.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#FAFAFA" />
					<stop offset="30%" stopColor="#E6E6E6" />
					<stop offset="65%" stopColor="#BDBDBD" />
					<stop offset="100%" stopColor="#8A8A8A" />
				</linearGradient>
			</defs>
		</svg>
	);
};
