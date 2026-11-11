import PropTypes from "prop-types";
import { Gamepad2 } from "lucide-react";

function GameCard({ game, onDragStart }) {
  return (
    <div
      className="game-card"
      draggable={true}
      onDragStart={(event) => onDragStart(event, game)}
      title={`Drag ${game.name} to a tier`}
    >
      <div className="game-card-image">
  {game.image ? (
    <img
      src={game.image}
      alt={game.name}
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.nextElementSibling.style.display = "flex";
      }}
    />
  ) : null}

  <div className="game-image-placeholder">
    <Gamepad2 size={35} />
  </div>
</div>

      <div className="game-card-info">
        <h3>{game.name}</h3>
        <span>{game.genre}</span>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default GameCard;