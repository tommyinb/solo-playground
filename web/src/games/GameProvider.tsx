import { PropsWithChildren, useRef, useState } from "react";
import { Group } from "three";
import { Computer } from "./computer";
import { Floor } from "./floor";
import { GameContext } from "./GameContext";
import { Player } from "./player";
import { Round } from "./round";

export function GameProvider({ children }: PropsWithChildren) {
  const [round, setRound] = useState<Round>({ index: 0, time: 30 });

  const playerRef = useRef<Group>(null);
  const [player, setPlayer] = useState<Player>({ ref: playerRef, inputs: [] });

  const [computers, setComputers] = useState<Computer[]>([]);

  const [floors, setFloors] = useState<Floor[]>([]);

  return (
    <GameContext.Provider
      value={{
        round,
        setRound,
        player,
        setPlayer,
        computers,
        setComputers,
        floors,
        setFloors,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
