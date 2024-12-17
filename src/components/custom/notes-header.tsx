/** @format */

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { FilePlus } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useNavigate } from "react-router";

const NotesHeader = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/notes/create");
	};
	return (
		<div className='sticky top-0 max-w-2xl px-4 xl:px-0 mx-auto mb-10 flex justify-between'>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant={"default"}
						onClick={handleClick}>
						<FilePlus />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Create a new note</TooltipContent>
			</Tooltip>
			<Select defaultValue='date'>
				<SelectTrigger className='max-w-[110px]'>
					<SelectValue placeholder='Date'></SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='date'>By Date</SelectItem>
					<SelectItem value='name'>By Name</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default NotesHeader;
