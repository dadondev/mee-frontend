/** @format */
import TooltipableButton from "@/components/custom/tooltipable-button";
import useNotes from "@/storages/notes.zustand";

import { BlockNoteView } from "@blocknote/mantine";

import { useCreateBlockNote } from "@blocknote/react";
import { SaveAll, Trash2 } from "lucide-react";
import { useId, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CreateNote = () => {
	const navigate = useNavigate();
	const id = useId();
	const { giveNote } = useNotes();
	const editor = useCreateBlockNote({
		initialContent: [
			{
				type: "heading",
				content: [
					{
						styles: {},
						text: "Change name",
						type: "text",
					},
				],
				props: {
					level: 1,
				},
			},
		],
	});
	const [datas, setDatas] = useState(editor.document);
	const title = datas[0].content;
	editor.onChange((data) => {
		const IsfirstElementTitle =
			data.document[0].type === "heading" && data.document[0].props.level === 1;

		if (!IsfirstElementTitle) {
			editor.insertBlocks(
				[
					{
						type: "heading",
						content: [
							{
								styles: {},
								text: "Change name",
								type: "text",
							},
						],
						props: {
							level: 1,
						},
					},
				],
				data.document[0],
				"before"
			);
			toast.warning("Entering title to note is required!");
		}
		setDatas(data.document);
	});
	function handleSave() {
		const data = {
			id,
			name: (title as { text: string }[])[0].text,
			document: datas,
			createdAt: new Date(),
		};
		giveNote(data);
		toast.success("Note saved successfully!");
		navigate("/");
	}
	return (
		<div className='px-4 xl:max-w-4xl xl:px-0 mx-auto pt-5'>
			<div className='flex justify-between mx-auto sticky top-2'>
				<TooltipableButton
					onClick={() => editor.removeBlocks(editor.document)}
					buttonVariant='secondary'
					tooltip='Clean the note'>
					<Trash2 />
				</TooltipableButton>
				<TooltipableButton
					tooltip='Save the note'
					onClick={handleSave}>
					<SaveAll />
				</TooltipableButton>
			</div>
			<div className='pt-5'>
				<BlockNoteView
					editor={editor}
					data-theming-css-demo
				/>
			</div>
		</div>
	);
};

export default CreateNote;
