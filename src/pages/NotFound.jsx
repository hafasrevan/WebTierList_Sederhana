import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found-page">
      <AlertCircle size={55} />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;