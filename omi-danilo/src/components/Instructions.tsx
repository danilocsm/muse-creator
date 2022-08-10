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
          2. Depois, clique no botão para adicionar notas musicais. Selecione as
          notas e para cada nota adicione um multiplicador para sua duração
          (0.1, 0.5 ou 1).
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          3. Após selecionar sua sequência de notas, escolha os tempos entre
          notas. Existem 3 tempos disponíveis (2n, 4n e 8n).
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          4. Além disso, você pode determinar frequências de BPM diferentes (1x,
          1.25x, 1.5x, 1.75x, 2x).
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          5. Quando estiver com todas as suas opções configuradas, aperte o play
          e relaxe escutando sua música!
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          6. Caso deseje alterar qualquer configuração, como mudar a sequência
          de notas ou o valor de BPM, por exemplo, clique no stop, faça suas
          modificações e clique no play novamente.
        </li>
        <li className="font-serif text-[22px] text-left w-full">
          7. DICA: Para alterar sua sequência de notas, você pode clicar em cada
          uma individualmente para remover notas especificas ou clicar na
          lixeira para limpar tudo.
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
