import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";
import Instructions from "./Instructions";
import Navbar from "./Navbar";
import OMIPlayer from "./OMIPlayer";

export const OMIContext = createContext<{
  showMenu: boolean;
  setShowInstructions: (newValue: boolean) => void;
}>({
  showMenu: false,
  setShowInstructions: () => undefined,
});

const OMI = () => {
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  return (
    <OMIContext.Provider
      value={{
        showMenu: showInstructions,
        setShowInstructions: setShowInstructions,
      }}
    >
      <Navbar />
      <div className="relative w-screen h-screen grid-place-items-center grid-flow-row">
        <AnimatePresence>
          {showInstructions && <Instructions />}
        </AnimatePresence>

        <OMIPlayer />
      </div>
    </OMIContext.Provider>
  );
};

export default OMI;
