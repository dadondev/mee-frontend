/** @format */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { linkI } from "./types";
import { BiCalendar, BiHomeAlt, BiNote } from "react-icons/bi";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const linksList: linkI[] = [
	{
		name: "Home",
		url: "/",
		icon: BiHomeAlt,
	},
	{
		name: "Notes",
		url: "/notes",
		icon: BiNote,
	},
	{
		name: "Calendar",
		url: "/calendar",
		icon: BiCalendar,
	},
];

