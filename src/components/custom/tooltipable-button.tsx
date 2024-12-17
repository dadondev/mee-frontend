/** @format */

import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TooltipableButton = ({
	children,
	tooltip,
	buttonVariant,
	onClick,
}: {
	children: ReactNode;
	tooltip: string;
	buttonVariant?: "default" | "secondary";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					onClick={onClick}
					variant={buttonVariant}>
					{children}
				</Button>
			</TooltipTrigger>
			<TooltipContent>{tooltip}</TooltipContent>
		</Tooltip>
	);
};

export default TooltipableButton;
