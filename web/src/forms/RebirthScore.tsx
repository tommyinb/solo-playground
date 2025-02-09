import { Stage } from "../menus/stage";
import "./RebirthScore.css";

export function RebirthScore({ stage }: Props) {
  return (
    <div className="forms-RebirthScore">
      <div className="level">
        <div>Level</div>
        <div>
          {stage.score.level + 1} / {stage.config.level}
        </div>
        <div>
          {stage.score.level + 1 >= stage.config.level * 0.5 ? "★" : "☆"}
          {stage.score.level + 1 >= stage.config.level * 0.8 ? "★" : "☆"}
          {stage.score.level + 1 >= stage.config.level ? "★" : "☆"}
        </div>
      </div>

      <div className="coin">
        <div>Coin</div>
        <div>
          {stage.score.coin} / {stage.config.coin}
        </div>
        <div>
          {stage.score.coin >= stage.config.coin * 0.3 ? "★" : "☆"}
          {stage.score.coin >= stage.config.coin * 0.7 ? "★" : "☆"}
          {stage.score.coin >= stage.config.coin ? "★" : "☆"}
        </div>
      </div>
    </div>
  );
}

interface Props {
  stage: Stage;
}
