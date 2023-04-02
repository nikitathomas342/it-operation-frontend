interface InputProps {
  name: string;
  label: string;
  disabled: boolean;
}
export const Input: React.FC<InputProps> = ({ name, label }) => (
  <div className="flex flex-row space-x-2">
    <label htmlFor={name}>{label}:</label>
    <input id={name} name={name} className="input input-xs" />
  </div>
);
