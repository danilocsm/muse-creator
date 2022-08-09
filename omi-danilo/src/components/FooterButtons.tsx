import { RadioGroup } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import { MusicNotes, Play, Plus, Stop } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import NotesInput from "./NotesInput";
import { PlayerContext } from "./OMIPlayer";

const notesVariations = ["2n", "4n", "8n"];
const notesVelocities = [1, 1.25, 1.5, 1.75, 2];
const notesDuration = [0.1, 0.5, 1];

function FooterButtons() {
  const [variation, setVariation] = useState<string>("8n");
  const [velocity, setVelocity] = useState<number>(1);
  const [showNotesInput, setShowNotesInput] = useState<boolean>(false);
  const context = useContext(PlayerContext);

  useEffect(() => {
    context.setNotesVariation(variation);
  }, [variation]);

  return (
    <footer className="relative w-[calc(60vw-1rem)] grid grid-flow-col gap-x-4 place-items-center pt-4">
      <button
        onClick={() => {
          context.Tone.Transport.bpm.value = 100 * velocity;
          context.Tone.start();
          context.setPlayMusic((value: boolean) => !value);
        }}
        className={`${
          context.playMusic ? "text-red-600" : "text-green-600"
        } bg-zinc-200 rounded-full w-[60px] h-[60px] grid place-items-center hover:opacity-50`}
      >
        {(context.playMusic && <Stop size={50} />) || <Play size={50} />}
      </button>

      <button
        onClick={() => setShowNotesInput(!showNotesInput)}
        className="flex flex-row items-center justify-center gap-x-2 rounded-[20px] bg-zinc-200 h-[50px] w-[100px] hover:opacity-50"
      >
        <Plus size={40} />
        <MusicNotes size={40} />
      </button>
      <AnimatePresence>
        {showNotesInput && (
          <NotesInput
            notesSequence={context.notesSequence}
            setShowInput={setShowNotesInput}
            setNotesSequence={context.setNotesSequence}
          />
        )}
      </AnimatePresence>

      <RadioGroup
        value={variation}
        onChange={setVariation}
        className="h-fit px-6 place-self-center"
      >
        <RadioGroup.Label className="text-center text-[20px] font-bold">
          Tempo entre notas
        </RadioGroup.Label>
        <div className="grid grid-cols-3 gap-2">
          {notesVariations.map((variation) => {
            return (
              <RadioGroup.Option
                key={variation}
                value={variation}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                      : ""
                  }
                  ${checked ? "bg-cyan-500" : "bg-zinc-300"}
                    flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <div className="flex w-full items-center justify-center">
                    <div className="text-[20px]">{variation}</div>
                  </div>
                )}
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>

      <RadioGroup
        value={velocity}
        onChange={setVelocity}
        className="h-fit px-6 place-self-center"
      >
        <RadioGroup.Label className="text-center text-[20px] font-bold">
          Velocidade
        </RadioGroup.Label>
        <div className="grid grid-cols-5 gap-2">
          {notesVelocities.map((velocity) => {
            return (
              <RadioGroup.Option
                key={velocity}
                value={velocity}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                      : ""
                  }
                  ${checked ? "bg-lime-500" : "bg-zinc-300"}
                    flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none `
                }
              >
                {({ active, checked }) => (
                  <div className="flex w-full items-center justify-center">
                    <div className="text-[20px]">{`${velocity}x`}</div>
                  </div>
                )}
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>
    </footer>
  );
}

export default FooterButtons;
