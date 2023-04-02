interface InputProps {
  name: string;
  label: string;
  disabled: boolean;
  register: any;
}
export const Input: React.FC<InputProps> = ({ name, label, register }) => (
  <div className="flex flex-row space-x-2">
    <label htmlFor={name}>{label}:</label>
    <input id={name} name={name} className="input input-xs" {...register} />
  </div>
);
