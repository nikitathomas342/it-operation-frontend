interface DatePickerProps {
  name: string;
  label: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ name, label }) => (
  <div className="flex flex-row space-x-2">
    <label htmlFor={name}>{label}:</label>
    <input id={name} name={name} type="date" className="input input-xs" />
  </div>
);
