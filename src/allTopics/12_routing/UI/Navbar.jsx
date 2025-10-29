import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex gap-10 p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/references/react">References</Link>
        </li>
      </ul>

      <hr />
    </>
  );
};

export default Navbar;
