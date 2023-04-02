import { DropdownOption } from "../../types";

interface DropdownProps {
  options: DropdownOption[];
  label: string;
  name: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, label, name }) => (
  <div className="dropdown">
    <label tabIndex={0} className="btn m-1">
      {label}
    </label>
    <ul
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      {options.map(({ label }) => (
        <li
          onClick={() => {
            console.log({ name });
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  </div>
);
