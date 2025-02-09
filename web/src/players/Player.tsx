import { Sphere } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { Group, Mesh, Vector3 } from "three";
import { DebugContext } from "../debugs/DebugContext";
import { GameContext } from "../games/GameContext";
import { Hand } from "./Hand";
import { useAction } from "./useAction";
import { useInput } from "./useInput";
import { useMove } from "./useMove";

export function Player() {
  const groupRef = useRef<Group>(null);
  const { setPlayer } = useContext(GameContext);
  useEffect(
    () => setPlayer((player) => ({ ...player, ref: groupRef })),
    [setPlayer]
  );

  const meshRef = useRef<Mesh>(null);
  const input = useInput(meshRef);

  const [target, setTarget] = useState(new Vector3(0, 0, 0));
  useAction(input, setTarget, groupRef);
  useMove(groupRef, target);

  const { debug } = useContext(DebugContext);

  return (
    <>
      {debug && <Sphere args={[0.1, 4, 2]} position={target} />}

      <group ref={groupRef}>
        <Hand />

        <mesh ref={meshRef} position={[0, 0.5, 0]} visible={debug}>
          <boxGeometry args={[1, 1, 1]} />

          <meshStandardMaterial color="#444" wireframe={true} />
        </mesh>
      </group>
    </>
  );
}
