import { useState } from "react";
import classNames from "classnames";
import { PAGES } from "../types";

const { FORM } = PAGES;

export const NavigationBar = () => {
  const [currentTab, setCurrentTab] = useState<PAGES>(FORM);

  return (
    <div className="sticky top-0 bg-gray-300 py-3">
      <div className="flex flex-row justify-start items-center">
        <p className="mx-1">Logo</p>
        {Object.values(PAGES).map((value) => (
          <div
            className={classNames(
              "hover:bg-white transition duration-200 px-4 py-2 rounded-lg",
              { active: currentTab === value }
            )}
            onClick={() => setCurrentTab(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
