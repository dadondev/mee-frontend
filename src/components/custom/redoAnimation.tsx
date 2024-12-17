/** @format */

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function RedoAnimText() {
	const textIndex = useMotionValue(0);
	const texts = [
		"Welcome to mee",
		"Mee is an awasome software",
		"Mee is free and open source software",
	];

	const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.get().slice(0, latest)
	);
	const updatedThisRound = useMotionValue(true);

	useEffect(() => {
		animate(count, 60, {
			type: "tween",
			duration: 2,
			ease: "easeOut",
			repeat: Infinity,
			repeatType: "reverse",
			repeatDelay: 1,
			onUpdate(latest) {
				if (updatedThisRound.get() === true && latest > 0) {
					updatedThisRound.set(false);
				} else if (updatedThisRound.get() === false && latest === 0) {
					if (textIndex.get() === texts.length - 1) {
						textIndex.set(0);
					} else {
						textIndex.set(textIndex.get() + 1);
					}
					updatedThisRound.set(true);
				}
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<motion.span className='inline-block mx-auto text-center text-4xl h-10 px-2 rounded-md dark:text-white backdrop-blur-xl bg-white/30 dark:bg-black/30'>
			{displayText}
		</motion.span>
	);
}
