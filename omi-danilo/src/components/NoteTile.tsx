interface NoteTileProps {
  noteId: string;
  currentNote: string;
  bgColor: string;
}

function NoteTile({ noteId, currentNote, bgColor }: NoteTileProps) {
  return (
    <div
      className={` w-[calc(9vw-1rem)] h-[calc(70vh-1rem)] rounded-[20px] p-4 shadow-lg grid place-items-center ${
        currentNote === noteId ? bgColor : `bg-black`
      } transition-all ease-in-out`}
    ></div>
  );
}

export default NoteTile;
