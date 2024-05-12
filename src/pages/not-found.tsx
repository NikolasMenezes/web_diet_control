import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div>content not found</div>
      <Link to="/">Back to home page</Link>
    </>
  );
}
