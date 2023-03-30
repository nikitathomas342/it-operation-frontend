import { useState } from "react";

enum NavigationTabs {
  FORM = "form",
  ALL = "all",
  BOONTERM = "boonterm",
  BEWALLET = "bewallet",
  CENPAY = "cenpay",
  PARTNER = "partner",
}

export const NavigationBar = () => {
  const [currentTab, setCurrentTab] = useState<NavigationTabs>(
    NavigationTabs.FORM
  );

  return <div className="sticky top-0 bg-black-200"></div>;
};
