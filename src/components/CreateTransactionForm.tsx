import { useForm } from "react-hook-form";
import { formInputs } from "../config";
import { useRenderForm } from "../hooks";
import { FormControl } from "./composite/FormControl";
import { useEffect, useRef } from "react";
import { getTimeDifference } from "../utils";
import { createTransaction } from "../services";

export const CreateTransactionForm = () => {
  const { renderer } = useRenderForm();
  const { setValue, register, watch, handleSubmit, reset } = useForm();
  const end = useRef();
  const start = useRef();

  if (watch("endDate") !== end) end.current = watch("endDate");
  if (watch("startDate") !== start) start.current = watch("startDate");

  useEffect(
    () =>
      setValue(
        "total",
        getTimeDifference(watch("startDate"), watch("endDate"))
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, watch, end.current, start.current]
  );

  return (
    <div className="w-full h-full bg-[#F47720] flex flex-col items-center justify-center">
      <div className="w-3/4 h-3/4">
        <form
          className="flex flex-col justify-center h-full w-full items-center space-y-12 pt-8 my-auto shadow-lg rounded-lg bg-gray-100"
          onSubmit={handleSubmit(createTransaction)}
        >
          {formInputs.map((row) => (
            <FormControl>
              {row.map(renderer(register, setValue, watch))}
            </FormControl>
          ))}
          <div className="flex flex-row justify-around space-x-8">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button className="btn btn-error" onClick={() => reset()}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
