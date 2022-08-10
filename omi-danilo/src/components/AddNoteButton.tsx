import { Plus } from "phosphor-react";

interface AddNoteButtonProps {
  onAdd: (newValue: any) => void;
  note: { representation: string; name: string };
  bgColor: string;
}

function AddNoteButton({ onAdd, note, bgColor }: AddNoteButtonProps) {
  let targetDuration = 0.1;

  const handleChange = (event: any) => {
    const { value } = event.target;
    targetDuration = value;
  };
  // TODO refactor this small radio group inputs
  const options = {
    render: (message: string, onConfirm: () => void, onCancel: () => void) => {
      return (
        <>
          <div className="w-[calc(30vw-1rem)] h-[calc(30vh-1rem)] bg-zinc-400 grid grid-flow-row place-items-center rounded-[20px]">
            <h1 className="text-[20px] text-center">{message}</h1>

            <div className="w-full flex flex-row gap-x-2 items-center justify-center">
              <input
                type="radio"
                value={0.1}
                name="note-duration"
                className="rounded-[20px] w-10 h-10 bg-zinc-300 checked:bg-cyan-blue focus:outline-none"
                onChange={handleChange}
              />{" "}
              0.1
              <input
                type="radio"
                value={0.5}
                name="note-duration"
                className="rounded-[20px] w-10 h-10 bg-zinc-300  checked:bg-cyan-blue focus:outline-none"
                onChange={handleChange}
              />{" "}
              0.5
              <input
                type="radio"
                value={1}
                name="note-duration"
                className="rounded-[20px] w-10 h-10 bg-zinc-300  checked:bg-cyan-blue focus:outline-none"
                onChange={handleChange}
              />{" "}
              1
            </div>

            <div className="flex flex-row items-center justify-center w-full gap-x-4 px-2">
              <button
                onClick={onConfirm}
                className="rounded-[20px] bg-green-500 w-[calc(40%-1rem)] h-full hover:text-white hover:border-[1px] hover:border-whiter"
              >
                Confirmar
              </button>
              <button
                onClick={onCancel}
                className="rounded-[20px] bg-red-500 w-[calc(40%-1rem)] h-full hover:text-white hover:border-[1px] hover:border-whiter"
              >
                Sair
              </button>
            </div>
          </div>
        </>
      );
    },
  };
  const onClick = async () => {
    //@ts-ignore
    const result = await confirm("Escolha a duração da nota:", options);

    if (!result) return;

    onAdd((oldValues: any) => [
      ...oldValues,
      {
        note: note.representation,
        duration: targetDuration,
        id: oldValues.length - 1,
      },
    ]);
  };

  return (
    <button
      id={`${note}`}
      onClick={onClick}
      className={`flex flex-row items-center justify-center rounded-[10px] ${bgColor} w-[100px] h-[50px] hover:opacity-50 text-white font-bold text-[30px]`}
    >
      {note.name}
      <Plus />
    </button>
  );
}

export default AddNoteButton;
