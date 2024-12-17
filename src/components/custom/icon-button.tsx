/** @format */

import { Button } from "../ui/button";
import { iconButtonI } from "@/lib/types";

const IconButton = ({ children, className, onClick, variant }: iconButtonI) => {
	return (
		<Button
			onClick={onClick}
			variant={variant}
			className={"h-auto py-1.5 px-2 " + className}>
			{children}
		</Button>
	);
};

export default IconButton;
