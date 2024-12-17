/** @format */

import { SidebarMenuItem } from "../ui/sidebar";
import { Link, useLocation } from "react-router";
import { linkI } from "@/lib/types";

const CustomSidebarMenuItem = (Props: linkI) => {
	const { name, url } = Props;
	const { pathname } = useLocation();
	const isActive = pathname === url;
	return (
		<SidebarMenuItem
			data-active={isActive}
			className='text-gray-500 data-[active=true]:text-dark-100 hover:bg-gray-100 data-[active=true]:bg-gray-100 dark:hover:bg-dark-100 cursor-pointer py-1.5 px-3 dark:data-[active=true]:bg-dark-100 dark:data-[active=true]:text-white dark:text-gray-400 rounded-md'>
			<Link
				to={url}
				className='flex items-center gap-2'>
				<Props.icon></Props.icon>
				{name}
			</Link>
		</SidebarMenuItem>
	);
};

export default CustomSidebarMenuItem;
