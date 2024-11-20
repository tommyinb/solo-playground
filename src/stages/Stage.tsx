import { useMemo } from "react";
import { Vector3 } from "three";
import { Button } from "./Button";
import { Ground } from "./Ground";
import { useOnePressState } from "./useOnePressButton";

export function Stage() {
  const ground1Position = useMemo(() => new Vector3(0, 0, 0), []);

  const button1Position = useMemo(() => new Vector3(0, 0, 3), []);
  const [button1Pressed, setButton1Pressed] = useOnePressState();

  const ground2Position = useMemo(() => new Vector3(0, 0, 10), []);

  const button2Position = useMemo(() => new Vector3(0, 0, 13), []);
  const [button2Pressed, setButton2Pressing] = useOnePressState();

  const button3Position = useMemo(() => new Vector3(3, 0, 10), []);
  const [button3Pressed, setButton3Pressing] = useOnePressState();

  const button4Position = useMemo(() => new Vector3(-3, 0, 10), []);
  const [button4Pressed, setButton4Pressing] = useOnePressState();

  return (
    <>
      <Ground width={10} depth={10} position={ground1Position} />

      <Button
        width={1.1}
        depth={1.1}
        position={button1Position}
        pressed={button1Pressed}
        setPressing={setButton1Pressed}
      />

      {button1Pressed && (
        <>
          <Ground width={10} depth={10} position={ground2Position} />

          <Button
            width={1.1}
            depth={1.1}
            position={button2Position}
            pressed={button2Pressed}
            setPressing={setButton2Pressing}
          />

          <Button
            width={1.1}
            depth={1.1}
            position={button3Position}
            pressed={button3Pressed}
            setPressing={setButton3Pressing}
          />

          <Button
            width={1.1}
            depth={1.1}
            position={button4Position}
            pressed={button4Pressed}
            setPressing={setButton4Pressing}
          />
        </>
      )}
    </>
  );
}
