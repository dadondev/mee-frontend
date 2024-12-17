/** @format */
import IconButton from "@/components/custom/icon-button";
import NotesHeader from "@/components/custom/notes-header";

import useNotes from "@/storages/notes.zustand";
import { AnimatePresence, motion } from "framer-motion";
import { Edit2, Eye, Trash2 } from "lucide-react";

const Notes = () => {
	const { notes, removeNote } = useNotes();
	return (
		<div className='min-h-dvh relative pt-5'>
			<NotesHeader />
			{notes.length === 0 && (
				<div className='grid place-items-center h-full'>
					<div className='!inline-block max-h-[300px] max-w-[300px]'>
						<img
							className='max-h-[300px] mx-auto'
							src='/nothing.png'
						/>
						<h1 className='text-gray-400 text-center'>
							You don't have any notes. If you read note, you must create a new
							note
						</h1>
					</div>
				</div>
			)}
			<div className='max-w-2xl mx-auto px-4 xl:px-0 space-y-2'>
				<AnimatePresence>
					{notes.map((note, i) => (
						<motion.div
							initial={{
								opacity: 0,
								translateX: -40,
							}}
							animate={{
								opacity: 1,
								translateX: 0,
								transition: {
									duration: 0.4,
									delay: i * 0.4,
								},
							}}
							exit={{
								opacity: 0,
								translateX: -40,
							}}
							key={i}
							className='border rounded-md py-2 px-4 grid grid-cols-[2fr_2fr_auto] justify-between items-center dark:bg-dark-100'>
							<span className='truncate'>{note.name}</span>
							<span>10.12.2022</span>
							<div className='flex gap-2 items-center'>
								<IconButton
									className='hover:bg-gray-200 dark:hover:bg-dark-200  transition-all'
									variant={"link"}>
									<Eye />
								</IconButton>
								<IconButton
									className='hover:bg-gray-200 dark:hover:bg-dark-200 transition-all'
									variant={"link"}>
									<Edit2 />
								</IconButton>
								<IconButton
									onClick={() => removeNote(note)}
									className='hover:bg-red-500 dark:hover:bg-dark-200  transition-all'
									variant={"link"}>
									<Trash2 />
								</IconButton>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Notes;
