import { Link } from "react-router-dom";
import {
  Gamepad2,
  Trophy,
  Star,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-badge">
          <Gamepad2 size={16} />
          <span>Web rank dan review game kamu</span>
        </div>

        <h1>
          Rank Your Games
          <br />
          <span>Dan share pengalamanmu</span>
        </h1>

        <p>
          harap tetap berdiskusi dengan santun dan menghargai pendapat orang lain. Jangan lupa untuk memberikan rating dan review yang jujur dan objektif.
        </p>

        <Link to="/tier-list" className="home-button">
          Lihat Tier List
          <ArrowRight size={18} />
        </Link>

        <div className="home-features">
          <div className="home-feature">
            <Trophy size={25} />
            <h3>Rank Games</h3>
            <p>Pilih dan urutkan game favoritmu dari S Tier hingga D Tier</p>
          </div>

          <div className="home-feature">
            <Star size={25} />
            <h3>Give Ratings</h3>
            <p>Rate game favoritmu dari 1 hingga 5 bintang</p>
          </div>

          <div className="home-feature">
            <Gamepad2 size={25} />
            <h3>Write Reviews</h3>
            <p>Bagikan pengalaman bermainmu dengan menulis ulasan untuk pemain lain</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;