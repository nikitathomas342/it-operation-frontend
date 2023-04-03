import classNames from "classnames";
import { PAGES } from "../types";
import { useNavigate } from "react-router-dom";
import { firstCharToUpperCase } from "../utils";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 bg-black py-3">
      <div className="flex flex-row justify-start items-center px-5">
        {Object.values(PAGES).map((value) => (
          <div
            className={classNames(
              "transition duration-200 px-4 py-2 rounded-lg mx-2",
              window.location.pathname.includes(value)
                ? "bg-gray-200 hover:bg-gray-100"
                : "hover:bg-white text-white hover:text-black"
            )}
            onClick={() => navigate(`/${value}`)}
          >
            {firstCharToUpperCase(value)}
          </div>
        ))}
        <button className="btn btn-success float-right">EXPORT</button>
      </div>
    </div>
  );
};
