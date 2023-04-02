interface TimePickerProps {
  name: string;
  label: string;
  register: any;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  name,
  label,
  register,
}) => (
  <div className="flex flex-row space-x-2">
    <label htmlFor={name}>{label}:</label>
    <input
      id={name}
      name={name}
      type="time"
      className="input input-xs"
      {...register}
    />
  </div>
);
