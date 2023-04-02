interface DatePickerProps {
  name: string;
  label: string;
  register: any;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label,
  register,
}) => (
  <div className="flex flex-row space-x-2">
    <label htmlFor={name}>{label}:</label>
    <input
      id={name}
      name={name}
      type="date"
      className="input input-xs"
      {...register}
    />
  </div>
);
