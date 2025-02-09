import "./App.css";
import { Audio } from "./audios/Audio";
import { AudioProvider } from "./audios/AudioProvider";
import { Credit } from "./credits/Credit";
import { DebugProvider } from "./debugs/DebugProvider";
import { Failure } from "./forms/Failure";
import { Rebirth } from "./forms/Rebirth";
import { Success } from "./forms/Success";
import { Game } from "./games/Game";
import { GameProvider } from "./games/GameProvider";
import { Header } from "./headers/Header";
import { Menu } from "./menus/Menu";
import { MenuProvider } from "./menus/MenuProvider";
import { Scene } from "./scenes/Scene";
import { SceneProvider } from "./scenes/SceneProvider";
import { Save } from "./scores/Save";
import { ScoreProvider } from "./scores/ScoreProvider";
import { ServerProvider } from "./servers/ServerProvider";

function App() {
  return (
    <div className="App">
      <DebugProvider>
        <ScoreProvider>
          <MenuProvider>
            <SceneProvider>
              <GameProvider>
                <AudioProvider>
                  <ServerProvider>
                    <Scene>
                      <Game />
                    </Scene>

                    <Credit />

                    <Menu />

                    <Header />

                    <Rebirth />
                    <Failure />
                    <Success />

                    <Audio />

                    <Save />
                  </ServerProvider>
                </AudioProvider>
              </GameProvider>
            </SceneProvider>
          </MenuProvider>
        </ScoreProvider>
      </DebugProvider>
    </div>
  );
}

export default App;
