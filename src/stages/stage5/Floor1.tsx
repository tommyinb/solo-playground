import { Coin } from "../stage1/Coin";
import { Floor } from "../stage1/Floor";
import { PressedButton } from "../stage1/PressedButton";
import { useNextLevel } from "../stage1/useNextLevel";

export function Floor1({ index }: Props) {
  const nextLevel = useNextLevel(index);

  return (
    <Floor index={index} width={10} depth={10}>
      <Coin position={[-3, 0, 0]} />
      <Coin position={[3, 0, 0]} />
      <Coin position={[0, 0, -3]} />

      <PressedButton position={[0, 0, 3]} onPress={nextLevel} />
    </Floor>
  );
}

interface Props {
  index: number;
}
