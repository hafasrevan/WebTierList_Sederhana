import PropTypes from "prop-types";
import { Star } from "lucide-react";
import ReviewCard from "../components/ReviewCard";

import "./Reviews.css";
function Reviews({ games, onRatingChange, onReviewChange }) {
  const rankedGames = games.filter((game) => game.tier);

  return (
    <main className="reviews-page">
      <div className="reviews-page-heading">
        <span className="reviews-page-badge">
          <Star size={15} />
          Tempat opini game mu
        </span>

        <h1>Game Reviews</h1>

        <p>
          Silahkan berikan ulasan jujur dan objektif tentang pengalaman bermain game favoritmu. Ulasanmu akan membantu pemain lain dalam memilih game yang sesuai dengan preferensi mereka
        </p>
      </div>

      <div className="reviews-page-content">
        <div className="reviews-page-summary">
          <div>
            <span className="summary-number">
              {rankedGames.length}
            </span>
            <span className="summary-label">
              Ranked Games
            </span>
          </div>

          <div>
            <span className="summary-number">
              {rankedGames.filter((game) => game.rating > 0).length}
            </span>
            <span className="summary-label">
              Rated Games
            </span>
          </div>
        </div>

        <div className="reviews-list">
          {rankedGames.length > 0 ? (
            rankedGames.map((game) => (
              <ReviewCard
                key={game.id}
                game={game}
                onRatingChange={onRatingChange}
                onReviewChange={onReviewChange}
              />
            ))
          ) : (
            <div className="reviews-empty">
              <Star size={35} />
              <h3>No Reviews Yet</h3>
              <p>
                Dimohonkan untuk mengurutkan game favoritmu di halaman Tier List terlebih dahulu...
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

Reviews.propTypes = {
  games: PropTypes.array.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
};

export default Reviews;