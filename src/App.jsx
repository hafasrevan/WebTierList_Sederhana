import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import gamesData from "./data/games";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TierList from "./pages/TierList";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

function App() {
  const [games, setGames] = useState(gamesData);

  const handleRatingChange = (gameId, rating) => {
    setGames((previousGames) =>
      previousGames.map((game) =>
        game.id === gameId ? { ...game, rating } : game
      )
    );
  };

  const handleReviewChange = (gameId, review) => {
    setGames((previousGames) =>
      previousGames.map((game) =>
        game.id === gameId ? { ...game, review } : game
      )
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tier-list"
          element={
            <TierList
              games={games}
              setGames={setGames}
            />
          }
        />

        <Route
          path="/reviews"
          element={
            <Reviews
              games={games}
              onRatingChange={handleRatingChange}
              onReviewChange={handleReviewChange}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;