import PropTypes from "prop-types";

function ReviewCard({ game, onRatingChange, onReviewChange }) {
  return (
    <div className="review-card">
      <div className="review-game-info">
        <div className="review-game-image">
          {game.image && (
            <img
              src={game.image}
              alt={game.name}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>

        <div>
          <h3>{game.name}</h3>
          <span>{game.genre} · Tier {game.tier}</span>
        </div>
      </div>

      <div className="review-rating">
        <span className="review-label">Your Rating</span>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={star <= game.rating ? "star active" : "star"}
              onClick={() => onRatingChange(game.id, star)}
              aria-label={`Rate ${star} out of 5`}
            >
              ★
            </button>
          ))}
        </div>

        <span className="rating-number">
          {game.rating}/5
        </span>
      </div>

      <div className="review-input">
        <label htmlFor={`review-${game.id}`}>
          Apa alasan kamu memberi rating berikut...?
        </label>

        <textarea
          id={`review-${game.id}`}
          value={game.review}
          onChange={(event) =>
            onReviewChange(game.id, event.target.value)
          }
          placeholder="Silakan tulis ulasanmu di sini..."
          rows={3}
        />
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string,
    tier: PropTypes.string,
    rating: PropTypes.number,
    review: PropTypes.string,
  }).isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
};

export default ReviewCard;