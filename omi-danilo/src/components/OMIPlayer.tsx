import { RadioGroup } from "@headlessui/react";
import { createContext, useEffect, useState } from "react";
import * as Tone from "tone";
import FooterButtons from "./FooterButtons";
import NoteTile from "./NoteTile";

const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.AMSynth().toDestination();
const synth3 = new Tone.MonoSynth().toDestination();
const synth4 = new Tone.FMSynth().toDestination();

export const PlayerContext = createContext<any>({
  setNotesSequence: () => undefined,
  setNotesVariation: () => undefined,
  setPlayMusic: () => undefined,
  notesSequence: [],
  Tone,
});

const noteTiles = [
  { noteId: "C4", bgColor: "bg-purple-500" },
  { noteId: "D4", bgColor: "bg-red-500" },
  { noteId: "E4", bgColor: "bg-green-500" },
  { noteId: "F4", bgColor: "bg-blue-500" },
  { noteId: "G4", bgColor: "bg-yellow-500" },
  { noteId: "A4", bgColor: "bg-pink-500" },
  { noteId: "B4", bgColor: "bg-violet-700" },
];

const instruments = ["Tipo 1", "Tipo 2", "Tipo 3", "Tipo 4"];

const tempArray = [
  { instrument: "Tipo 1", type: synth1 },
  { instrument: "Tipo 2", type: synth2 },
  { instrument: "Tipo 3", type: synth3 },
  { instrument: "Tipo 4", type: synth4 },
];

const instrumentsMap = new Map(
  tempArray.map((object) => {
    return [object.instrument, object.type];
  })
);

function OMIPlayer() {
  const [synthName, setSynthName] = useState<string>("Tipo 1");
  const [synth, setSynth] = useState<any>(synth1);
  const [notesSequence, setNotesSequence] = useState<
    { note: string; id: number; duration: number }[]
  >([]);
  const [notesVariation, setNotesVariation] = useState<string>("");
  const [playMusic, setPlayMusic] = useState<boolean>(false);
  const [currentNote, setCurrentNote] = useState<string>("");

  const startPlaying = () => {
    let synthPart = new Tone.Sequence(
      (time, note) => {
        setCurrentNote(note.note);
        synth.triggerAttackRelease(note.note, note.duration, time);
      },
      notesSequence,
      notesVariation
    ).start(0);
    Tone.Transport.start();
  };

  const stopPlaying = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setCurrentNote("");
  };

  useEffect(() => {
    if (playMusic) startPlaying();
    else stopPlaying();
  }, [playMusic]);

  return (
    <PlayerContext.Provider
      value={{
        setNotesSequence: setNotesSequence,
        setNotesVariation: setNotesVariation,
        setPlayMusic: setPlayMusic,
        playMusic: playMusic,
        notesSequence: notesSequence,
        Tone,
      }}
    >
      <div className="relative w-screen grid place-items-center mt-4">
        <div className="absolute left-0 top-0  bg-opacity-20 w-[calc(15vw-1rem)] h-[calc(30vh-1rem)] rounded-[20px] ml-4 grid place-items-center">
          <label className="text-[20px] font-bold place-self-center">
            SINTETIZADOR
          </label>

          <RadioGroup
            value={synthName}
            onChange={(instrument: string) => {
              setSynthName(instrument);
              synth.unsync();
              setSynth(instrumentsMap.get(instrument));
            }}
            className="h-fit px-6 place-self-center"
          >
            <div className="grid grid-cols-2 gap-2">
              {instruments.map((instrument) => {
                return (
                  <RadioGroup.Option
                    key={instrument}
                    value={instrument}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                          : ""
                      }
                  ${checked ? "bg-orange-500" : "bg-zinc-300"}
                    flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none h-[calc(10vh-1rem)]`
                    }
                  >
                    <div className="flex w-full items-center justify-center">
                      <div className="text-[16px] text-center font-bold">
                        {instrument}
                      </div>
                    </div>
                  </RadioGroup.Option>
                );
              })}
            </div>
          </RadioGroup>
        </div>

        <div className="relative md:pl-0 ml-[150px] md:w-[45vw] w-[55vw]  h-[calc(65vh-1rem)] sm:bg-zinc-300 rounded-[20px] opacity-80 shadow-md grid place-items-center">
          <div className="grid grid-cols-7 md:gap-x-3">
            {noteTiles.map((tile) => {
              return (
                <NoteTile
                  key={tile.noteId}
                  noteId={tile.noteId}
                  currentNote={currentNote}
                  bgColor={tile.bgColor}
                />
              );
            })}
          </div>
        </div>

        <FooterButtons />
      </div>
    </PlayerContext.Provider>
  );
}

export default OMIPlayer;
