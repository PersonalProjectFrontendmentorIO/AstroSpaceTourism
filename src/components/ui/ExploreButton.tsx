import * as motion from "motion/react-client";

const ExploreButton = () => {
  return (
		<div className="flex justify-center items-center relative">
			<motion.div
				whileHover={{ scale: 1.8, opacity: 0.1 }}
				whileTap={{ scale: 1.5, opacity: 0.2 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
				className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-space-white rounded-full absolute top-0 left-0 z-10"
			></motion.div>

			<motion.div
				whileTap={{ scale: 0.9 }}
				className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-space-white rounded-full"
			></motion.div>

			<div className="absolute text-4xl text-black z-20 pointer-events-none">
				EXPLORE
			</div>
		</div>
	);
};

export default ExploreButton;
