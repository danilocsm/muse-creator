import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NoteProps {
  className?: any;
  children?: ReactNode;
}

function Note({ children, className }: NoteProps) {
  return (
    <motion.div
      className={`transition-all ease-in-out w-[calc(10vw-1rem)] h-[calc(10vh-1rem)] rounded-[20px] grid place-items-center ${
        className ? className : ``
      }`}
    >
      {children}
    </motion.div>
  );
}

export default Note;
