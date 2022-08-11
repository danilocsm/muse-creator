import { motion } from "framer-motion";
import { Trash, XCircle } from "phosphor-react";
import AddNoteButton from "./AddNoteButton";
import NoteTag from "./NoteTag";

interface NotesInputProps {
  setNotesSequence: (oldValues: any) => void;
  setShowInput: (oldValues: any) => void;
  notesSequence: { note: string; id: number; duration: number }[];
}

const notes = [
  { representation: "C4", name: "dó", bgColor: "bg-purple-500" },
  { representation: "D4", name: "ré", bgColor: "bg-red-500" },
  { representation: "E4", name: "mi", bgColor: "bg-green-500" },
  { representation: "F4", name: "fá", bgColor: "bg-blue-500" },
  { representation: "G4", name: "sol", bgColor: "bg-yellow-500" },
  { representation: "A4", name: "lá", bgColor: "bg-pink-500" },
  { representation: "B4", name: "si", bgColor: "bg-violet-700" },
];

const notesColosrMap = new Map(
  notes.map((object) => {
    return [object.representation, object.bgColor];
  })
);

function NotesInput({
  setNotesSequence,
  setShowInput,
  notesSequence,
}: NotesInputProps) {
  const variants = {
    active: { height: "500px", transition: { ease: "easeOut", duration: 0.5 } },
  };

  const onClearAllNotesClick = () => {
    setNotesSequence([]);
  };

  return (
    <motion.div
      variants={variants}
      animate="active"
      exit={{ height: "0%", transition: { ease: "easeOut", duration: 0.5 } }}
      className="absolute sm:w-[54vw] h-[70vh] sm:h-[calc(35vh-1rem)] bg-zinc-200 grid place-items-center gap-y-6 rounded-[20px] p-2 mx-10"
    >
      <motion.button
        initial={{ display: "block" }}
        exit={{ display: "none" }}
        className="absolute left-4 top-2 text-[24px] hover:text-red-500"
        onClick={() => setShowInput(false)}
      >
        <XCircle size={50} />
      </motion.button>

      <motion.button
        initial={{ display: "block" }}
        exit={{ display: "none" }}
        onClick={onClearAllNotesClick}
        className="absolute top-2 right-4 hover:text-red-500 text-[24px]"
      >
        <Trash size={50} />
      </motion.button>

      <motion.div
        initial={{ display: "flex" }}
        exit={{ display: "none" }}
        className="flex-wrap flex-row gap-2 sm:m-0 mt-12 justify-center overflow-y-auto overflow-x-hidden p-4 h-[20vh] sm:h-[25vh]"
      >
        {notesSequence?.length > 0 &&
          notesSequence.map((note) => {
            return (
              <NoteTag
                key={note.id}
                note={note}
                onClick={setNotesSequence}
                bgColor={notesColosrMap.get(note.note)}
              />
            );
          })}
      </motion.div>

      <motion.div
        initial={{ display: "grid" }}
        exit={{ display: "none" }}
        className="sm:grid-flow-col grid-cols-2 place-items-center gap-2 w-[52vw]"
      >
        {notes.map((note) => {
          return (
            <AddNoteButton
              key={note.name}
              onAdd={setNotesSequence}
              note={note}
              bgColor={note.bgColor}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default NotesInput;
