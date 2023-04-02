import { formInputs } from "../config";
import { useRenderForm } from "../hooks/renderForm";
import { FormControl } from "./composite/FormControl";

export const CreateTransactionForm = () => {
  const { renderer } = useRenderForm();
  const submit = (d: any) => {
    console.log({ d });
  };

  // const clearForm = () =>
  // formInputs
  //   .flat()
  //   .forEach(
  //     ({ name }) =>
  //       ((document.getElementsByName(name)[0] as HTMLInputElement).value = "")
  //   );

  return (
    <div className="w-screen h-screen bg-gray-100">
      <form
        className="flex flex-col justify-center items-center w-full space-y-8 pt-8"
        onSubmit={submit}
      >
        {formInputs.map((row) => (
          <FormControl>{row.map(renderer)}</FormControl>
        ))}
        <div className="flex flex-row justify-around space-x-8">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button className="btn btn-error">Clear</button>
        </div>
      </form>
    </div>
  );
};
