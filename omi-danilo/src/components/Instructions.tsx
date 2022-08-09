import { motion } from "framer-motion";
import { XCircle } from "phosphor-react";
import { useContext } from "react";
import { OMIContext } from "./OMI";

const Instructions = () => {
  const context = useContext(OMIContext);
  const variants = {
    active: { height: "100%", transition: { ease: "easeOut", duration: 0.5 } },
  };
  return (
    <motion.div
      variants={variants}
      animate={["active"]}
      exit={{ height: "0%", transition: { ease: "easeOut", duration: 0.5 } }}
      className="relative w-screen bg-zinc-200 grid place-items-center"
    >
      <motion.button
        initial={{ display: "block" }}
        exit={{ display: "none" }}
        className="absolute left-[calc(25%-1rem)] top-10 text-[24px] hover:text-red-500"
        onClick={() => context.setShowInstructions(false)}
      >
        <XCircle size={50} />
      </motion.button>
      <motion.ol
        initial={{ display: "block" }}
        exit={{ display: "none" }}
        className="absolute top-10 left-[calc(30%-1rem)] w-[calc(50vw-1rem)]"
      >
        <li className="font-serif text-[22px] text-left w-full">
          1. Primeiro, selecione um tipo de instrumento.
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          2. Depois, clique no botão para adicionar notas musicais
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          3. Você pode escolher diferente tempos para as notas utilizando os
          botões ao lado do botão de play
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          4. Além disso, você pode determinar frequências de BPM diferentes (1x,
          1.25x, 1.5x, 1.75x, 2x).
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          5. Quando tiver com todas as opções configuradas, aperte o play e
          relaxe escutando sua música!
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          6. Caso deseja remover o alguma nota especifica, clique no botão de
          adicionar notas e em seguida clique na nota que deseja remover. Se
          prefereir, clique na lixeira para limpar todas as notas!
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          7. Sempre que quiser trocar as configurações, aperte no pause e dê
          play novamente para as novas configurações entrarem em ação.
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          8. Use sua criatividade para criar os mais diversos tipos de melodias.
          DIVIRTA-SE.{" "}
        </li>
      </motion.ol>
    </motion.div>
  );
};

export default Instructions;
