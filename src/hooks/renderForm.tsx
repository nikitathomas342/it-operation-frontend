import { useCallback, useMemo } from "react";
import { DatePicker } from "../components/composite/DatePicker";
import { Dropdown } from "../components/composite/Dropdown";
import { Input } from "../components/composite/Input";
import { FormType } from "../types";

export const useRenderForm = () => {
  const renderer = useCallback(
    ({ name, label, type, options, disabled }: any) => {
      if (type === FormType.TEXT)
        return <Input name={name} label={label} disabled={disabled} />;
      if (type === FormType.DATE)
        return <DatePicker name={name} label={label} />;
      if (type === FormType.DROPDOWN)
        return <Dropdown options={options} name={name} label={label} />;
      return null;
    },
    []
  );

  return useMemo(
    () => ({
      renderer,
    }),
    [renderer]
  );
};
