interface NoteTagProps {
  onClick: (oldValues: any) => void;
  note: { note: string; id: number };
  bgColor: string | undefined;
}

function NoteTag({ note, onClick, bgColor }: NoteTagProps) {
  return (
    <button
      onClick={() => {
        onClick((oldValues: any) =>
          oldValues.filter((value: any) => value.id !== note.id)
        );
      }}
      className={`grid place-items-center rounded-[20px] w-[70px] h-[50px] ${bgColor} text-black hover:opacity-50 font-bold`}
    >
      {note.note}
    </button>
  );
}

export default NoteTag;
