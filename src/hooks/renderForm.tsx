import { useCallback, useMemo } from "react";
import { DatePicker } from "../components/composite/DatePicker";
import { Dropdown } from "../components/composite/Dropdown";
import { Input } from "../components/composite/Input";
import { FormType } from "../types";
import { TimePicker } from "../components/composite/Time";

export const useRenderForm = () => {
  const renderer = useCallback(
    (register: any, setValue: any, watch: any) =>
      ({ name, label, type, options, disabled }: any) => {
        if (type === FormType.TEXT)
          return (
            <Input
              name={name}
              label={label}
              disabled={disabled}
              register={register(name)}
            />
          );
        if (type === FormType.DATE)
          return (
            <DatePicker name={name} label={label} register={register(name)} />
          );
        if (type === FormType.TIME)
          return (
            <TimePicker name={name} label={label} register={register(name)} />
          );
        if (type === FormType.DROPDOWN)
          return (
            <Dropdown
              options={options}
              name={name}
              label={label}
              setValue={setValue}
              watch={watch}
            />
          );
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
