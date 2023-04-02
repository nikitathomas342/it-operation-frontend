import { useForm } from "react-hook-form";
import { formInputs } from "../config";
import { useRenderForm } from "../hooks";
import { FormControl } from "./composite/FormControl";

export const CreateTransactionForm = () => {
  const { renderer } = useRenderForm();
  const { setValue, register, watch, handleSubmit, reset } = useForm();

  const submit = (d: any) => {
    console.log({ d });
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      <form
        className="flex flex-col justify-center items-center w-full space-y-8 pt-8"
        onSubmit={handleSubmit(submit)}
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
          <button className="btn btn-error" onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
