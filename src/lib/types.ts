/** @format */

import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface linkI {
	name: string;
	url: string;
	icon: IconType;
}

export interface iconButtonI {
	onClick?: () => void;
	children: ReactNode;
	className?: string;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link"
		| null
		| undefined;
}
