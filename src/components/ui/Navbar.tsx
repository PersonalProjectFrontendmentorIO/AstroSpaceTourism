import SpaceTourismLogo from "../../assets/SpaceTourismLogo.svg?url";

const Navbar = () => {
	return (
		<div className="fixed w-full z-1000 flex justify-between items-center my-10">
			<div className="flex items-center align-middle">
				<img src={SpaceTourismLogo} fetchPriority="high" className="mx-16" />
				<div className="bg-space-white opacity-25 h-px w-[560px] absolute left-0 right-1/6 mx-auto top-1/2 -translate-y-1/2 z-20" />
			</div>
			<div className="flex pl-40 pr-16 space-x-12 justify-between backdrop-blur-2xl text-space-white bg-space-white/10 h-24 items-center">
				<div className="space-text-preset-8 flex gap-3">
					<div className="font-bold">00</div>
					<div>HOME</div>
				</div>
				<div className="space-text-preset-8 flex gap-3">
					<div className="font-bold">01</div>
					<div>DESTINATION</div>
				</div>
				<div className="space-text-preset-8 flex gap-3">
					<div className="font-bold">02</div>
					<div>CREW</div>
				</div>
				<div className="space-text-preset-8 flex gap-3">
					<div className="font-bold">03</div>
					<div>TECHNOLOGY</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
