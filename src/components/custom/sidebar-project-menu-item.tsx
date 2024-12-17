/** @format */

import { SidebarMenuItem } from "../ui/sidebar";
import { File, MoreHorizontal } from "lucide-react";

const SidebarProjectMenuItem = () => {
	return (
		<>
			<SidebarMenuItem className='px-3 py-1.5 dark:hover:bg-dark-200 hover:bg-gray-100 rounded-md cursor-pointer'>
				<div className='flex items-center gap-2'>
					<File size={14} />
					<span>Backend app</span>
					<div className='flex-grow flex justify-end items-center'>
						<button className='dark:hover:bg-dark-300 hover:bg-gray-200 px-1.5 py-0.5 rounded-md ml-auto'>
							<MoreHorizontal size={14} />
						</button>
					</div>
				</div>
			</SidebarMenuItem>
		</>
	);
};

export default SidebarProjectMenuItem;
