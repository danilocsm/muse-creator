import { useContext } from "react";
import { musics } from "../notes";
import { OMIContext } from "./OMI";

interface MenuProps {}

const Menu = (props: MenuProps) => {
  const { setMusicToPlay, setShowInstructions: setShowMenu } =
    useContext(OMIContext);

  const handleClick = (event: any) => {
    if (event.target.name === "BRILHA_ESTRELINHA")
      setMusicToPlay(musics.BRILHA_ESTRELINHA);
    else if (event.target.name === "ODE_A_ALEGRIA")
      setMusicToPlay(musics.ODE_A_ALEGRIA);
    setShowMenu(false);
  };

  return (
    <div className="w-full h-full grid place-items-center">
      <h1 className="text-center text-[24px]">
        Olá, selecione uma música abaixo e prepare-se para executar as notas
        musicais na sequência correta
      </h1>
      <div className="flex flex-row items-center justify-center w-full gap-x-4">
        <button
          onClick={handleClick}
          name="BRILHA_ESTRELINHA"
          className="rounded-[20px] bg-purple-500 w-[200px] h-[50px] hover:opacity-60 font-bold focus:outline-none"
        >
          BRILHA ESTRELINHA
        </button>
        <button
          onClick={handleClick}
          name="ODE_A_ALEGRIA"
          className="rounded-[20px] bg-purple-500 w-[200px] h-[50px] hover:opacity-60 font-bold focus:outline-none"
        >
          ODE À ALEGRIA
        </button>
      </div>
    </div>
  );
};

export default Menu;
