/** @format */

import { ReactNode } from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarProvider,
} from "../ui/sidebar";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useTheme } from "./themeProvider";
import { Link } from "react-router";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import CustomSidebarMenuItem from "./sidebar-menu-item";
import { linksList } from "../../lib/utils";
import SidebarProjectMenuItem from "./sidebar-project-menu-item";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const { setTheme, theme } = useTheme();
	return (
		<div className='h-full'>
			<SidebarProvider>
				<Sidebar>
					<SidebarContent>
						<SidebarHeader>
							<Link
								to={"/"}
								className='text-2xl flex items-center justify-between'>
								mee
								<Badge>v1</Badge>
							</Link>
							<Separator />
						</SidebarHeader>
						<SidebarMenu className='h-full'>
							<SidebarGroup>
								<SidebarGroupLabel>Pages</SidebarGroupLabel>
								<SidebarGroupContent>
									{linksList.map((e) => (
										<CustomSidebarMenuItem
											{...e}
											key={e.name}
										/>
									))}
								</SidebarGroupContent>
							</SidebarGroup>
							<SidebarGroup>
								<SidebarGroupLabel>Projects</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarProjectMenuItem />
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarMenu>
						<SidebarFooter>
							<Select
								onValueChange={(theme: "system" | "light" | "dark") =>
									setTheme(theme)
								}>
								<SelectTrigger className='rounded-none'>
									<SelectValue
										defaultValue={theme}
										placeholder={
											theme.slice(0, 1).toUpperCase() +
											theme.slice(1, theme.length)
										}
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='light'>Light</SelectItem>
									<SelectItem value='dark'>Dark</SelectItem>
									<SelectItem value='system'>System</SelectItem>
								</SelectContent>
							</Select>
						</SidebarFooter>
					</SidebarContent>
				</Sidebar>
				<SidebarInset className='h-full'>
					<SidebarContent className='block'>
						<ScrollArea className='min-h-dvh [&>div>div]:!block [&>div>div]:min-h-dvh'>
							{children}
							<ScrollBar />
						</ScrollArea>
					</SidebarContent>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
};

export default MainLayout;
