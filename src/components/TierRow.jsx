import PropTypes from "prop-types";
import GameCard from "./GameCard";

function TierRow({ tier, games, onDragStart, onDrop }) {
  return (
    <div
      className={`tier-row tier-${tier.toLowerCase()}`}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => onDrop(event, tier)}
    >
      <div className="tier-label">
        <h2>{tier}</h2>
      </div>

      <div className="tier-games">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onDragStart={onDragStart}
            />
          ))
        ) : (
          <span className="tier-placeholder">
            Drop games here
          </span>
        )}
      </div>
    </div>
  );
}

TierRow.propTypes = {
  tier: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default TierRow;