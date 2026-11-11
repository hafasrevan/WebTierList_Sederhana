import PropTypes from "prop-types";
import GameLibrary from "../components/GameLibrary";
import TierRow from "../components/TierRow";

const tierNames = ["S", "A", "B", "C", "D"];

function TierList({ games, setGames }) {
  const handleDragStart = (event, game) => {
    event.dataTransfer.setData("gameId", String(game.id));
  };

  const handleDrop = (event, selectedTier) => {
    event.preventDefault();

    const gameId = Number(
      event.dataTransfer.getData("gameId")
    );

    setGames((previousGames) =>
      previousGames.map((game) =>
        game.id === gameId
          ? { ...game, tier: selectedTier }
          : game
      )
    );
  };

  return (
    <div className="tier-list-page">
      <div className="page-heading">
        <h1>Game Tier List</h1>
        <p>
          Rank your favorite games from S Tier to D Tier.
        </p>
      </div>

      <GameLibrary
        games={games}
        onDragStart={handleDragStart}
      />

      <section className="tier-container">
        {tierNames.map((tier) => (
          <TierRow
            key={tier}
            tier={tier}
            games={games.filter(
              (game) => game.tier === tier
            )}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        ))}
      </section>
    </div>
  );
}

TierList.propTypes = {
  games: PropTypes.array.isRequired,
  setGames: PropTypes.func.isRequired,
};

export default TierList;