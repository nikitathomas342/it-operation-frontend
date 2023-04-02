import { formInputs } from "../config";
import { FormControl } from "./composite/FormControl";
import { Input } from "./composite/Input";

export const CreateTransactionForm = () => {
  const submit = (d: any) => {
    console.log({ d });
  };

  const clearForm = () =>
    formInputs
      .flat()
      .forEach(
        ({ name }) =>
          ((document.getElementsByName(name)[0] as HTMLInputElement).value = "")
      );

  return (
    <div className="w-screen h-screen bg-gray-100">
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={submit}
      >
        {formInputs.map((row) => (
          <FormControl>
            {row.map(({ name, label }) => (
              <Input name={name} label={label} />
            ))}
          </FormControl>
        ))}
        <div className="flex flex-row justify-around space-x-8">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button className="btn btn-error" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
