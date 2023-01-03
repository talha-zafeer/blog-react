import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-404">
      <h2>Sorry</h2>
      <p>The requested page can't be found ...</p>
      <Link to="/">Go back to HomePage ...</Link>
    </div>
  );
};

export default Error404;
