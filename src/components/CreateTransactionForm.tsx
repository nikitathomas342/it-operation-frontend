export const CreateTransactionForm = () => {
    const onSubmit = () => {};
    return (
      <form onSubmit={onSubmit}>
        <label>End</label>
        <input className="" />
        <div className="flex flex-row justify-around">
          <button type="submit">Submit</button>
          <button>Clear</button>
        </div>
      </form>
    );
};
