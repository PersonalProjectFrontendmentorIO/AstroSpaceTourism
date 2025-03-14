import { useEffect, useState } from "react";
import SpaceTourismLogo from "../../assets/SpaceTourismLogo.svg?url";

const navItems = [
	{ id: "HOME", label: "HOME", path: "/" },
	{ id: "DESTINATION", label: "DESTINATION", path: "/destination" },
	{ id: "CREW", label: "CREW", path: "/crew" },
	{ id: "TECHNOLOGY", label: "TECHNOLOGY", path: "/technology" },
];

const Navbar = () => {
	const [currentPath, setCurrentPath] = useState(
		typeof window !== "undefined" ? window.location.pathname : "/",
	);

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<div className="fixed w-full z-1000 flex justify-between items-center my-10">
			<div className="flex items-center align-middle">
				<img src={SpaceTourismLogo} fetchPriority="high" className="mx-16" />
				<div className="bg-space-white opacity-25 h-px w-[560px] absolute left-0 right-1/6 mx-auto top-1/2 -translate-y-1/2 z-20" />
			</div>
			<div className="flex pl-40 pr-16 space-x-12 justify-between backdrop-blur-2xl text-space-white bg-space-white/10 h-24 items-center">
				{navItems.map((item, index) => (
					<a
						key={item.id}
						href={item.path}
						className="space-text-preset-8 flex gap-3 cursor-pointer h-full items-center relative"
					>
						<div className="flex gap-3 h-full items-center">
							<div className="font-bold">0{index}</div>
							<div>{item.label}</div>
						</div>
						{currentPath === item.path && (
							<div className="absolute left-0 bottom-0 w-full h-[2px] bg-space-white"></div>
						)}
					</a>
				))}
			</div>
		</div>
	);
};

export default Navbar;
