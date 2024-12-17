/** @format */

import { create } from "zustand";
import {} from "@blocknote/mantine";
import { persist } from "zustand/middleware";

type singleNote = {
	id: string;
	name: string;
	document: unknown[];
	createdAt: Date;
};

interface StorageI {
	notes: singleNote[];
	giveNote: (a: singleNote) => void;
	removeNote: (a: singleNote) => void;
	edit: (a: singleNote) => void;
}

const useNotes = create<StorageI>()(
	persist(
		(set) => ({
			notes: [],
			giveNote: (note) => {
				set((state) => ({ ...state, notes: [...state.notes, note] }));
			},
			removeNote: (note) => {
				set((state) => ({
					...state,
					notes: state.notes.filter((n) => n.id !== note.id),
				}));
			},
			edit: (note) => {
				set((state) => ({
					...state,
					notes: state.notes.map((n) =>
						n.id !== note.id ? n : { ...note, ...note }
					),
				}));
			},
		}),
		{
			name: "notes",
		}
	)
);

export default useNotes;
