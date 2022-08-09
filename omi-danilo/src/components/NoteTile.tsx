interface NoteTileProps {
  noteId: string;
  currentNote: string;
  bgColor: string;
}

function NoteTile({ noteId, currentNote, bgColor }: NoteTileProps) {
  return (
    <div
      className={`w-[calc(6vw-1rem)] h-[calc(60vh-1rem)] p-4 shadow-lg grid place-items-center border-[2px] border-black ${
        currentNote === noteId ? bgColor : `bg-white`
      } transition-all ease-in-out`}
    ></div>
  );
}

export default NoteTile;
