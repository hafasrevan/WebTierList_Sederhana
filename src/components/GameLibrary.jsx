import PropTypes from "prop-types";
import GameCard from "./GameCard";

function GameLibrary({ games, onDragStart }) {
  const availableGames = games.filter((game) => !game.tier);

  return (
    <section className="game-library">
      <div className="section-heading">
        <div>
          <h2>Game Library</h2>
          <p>Tarik game favoritmu ke dalam tier.</p>
        </div>

        <span className="game-count">
          {availableGames.length} Games
        </span>
      </div>

      <div className="game-library-list">
        {availableGames.length > 0 ? (
          availableGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onDragStart={onDragStart}
            />
          ))
        ) : (
          <p className="empty-library">
            Yeay semua game sudah diurutkan :)
          </p>
        )}
      </div>
    </section>
  );
}

GameLibrary.propTypes = {
  games: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default GameLibrary;