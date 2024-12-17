/** @format */
import RedoAnimText from "@/components/custom/redoAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sentenceParagraph = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 2,
			staggerChildren: 0.03,
		},
	},
};

const letterParagraph = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		delay: 0.3,
	},
};
const text =
	"You can plan and solve your ideas and problems by mee. Make presentations free by mee.";

const Home = () => {
	return (
		<div className='relative flex justify-center items-center min-h-dvh'>
			{/* hero */}

			<div className='w-full p-5 relative'>
				<motion.div className='relative bg-transparent z-10 pt-5 grid justify-center'>
					<div className='flex justify-center'>
						<Badge
							variant={"outline"}
							className='bg-white/30 backdrop-blur-md dark:bg-dark-100'>
							Software is working beta version
						</Badge>
					</div>
					<RedoAnimText />
					<motion.h4
						initial='hidden'
						animate='visible'
						variants={sentenceParagraph}
						className='text-center mt-3 text-gray-600 dark:text-gray-300'>
						{text.split("").map((char, index) => (
							<motion.span
								key={char + "-" + index}
								variants={letterParagraph}>
								{char}
							</motion.span>
						))}
					</motion.h4>

					<div className='pt-5 flex justify-center gap-5'>
						{false ? (
							<>
								<Button>Log in</Button>
								<Button
									variant={"secondary"}
									className='group'>
									Register{" "}
									<ArrowRight className='transition-all group-hover:translate-x-2' />
								</Button>
							</>
						) : (
							<Button>Show projects</Button>
						)}
					</div>
				</motion.div>

				<div className='absolute inset-0 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#000000,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
			</div>
		</div>
	);
};

export default Home;
