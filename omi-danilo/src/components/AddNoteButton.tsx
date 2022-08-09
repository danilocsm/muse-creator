import { Plus } from "phosphor-react";

interface AddNoteButtonProps {
  onAdd: (newValue: any) => void;
  note: { representation: string; name: string };
  bgColor: string;
}

function AddNoteButton({ onAdd, note, bgColor }: AddNoteButtonProps) {
  return (
    <button
      id={`${note}`}
      onClick={() => {
        onAdd((oldValues: any) => [
          ...oldValues,
          { note: note.representation, id: oldValues.length - 1 },
        ]);
      }}
      className={`flex flex-row items-center justify-center rounded-[10px] ${bgColor} w-[100px] h-[50px] hover:opacity-50 text-white font-bold text-[30px]`}
    >
      {note.name}
      <Plus />
    </button>
  );
}

export default AddNoteButton;
