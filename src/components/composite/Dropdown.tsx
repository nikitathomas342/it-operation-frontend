import { useRef, useState } from "react";
import { DropdownOption } from "../../types";
import { useOnClickOutside } from "../../hooks";

interface DropdownProps {
  options: DropdownOption[];
  label: string;
  name: string;
  setValue: any;
  watch: any;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  name,
  setValue,
  watch,
}) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setShow(false));

  return (
    <div className="flex flex-row">
      <p className="mx-1">{label}:</p>
      <div className="dropdown" ref={dropdownRef}>
        <input onClick={() => setShow((v) => !v)} value={watch(name)?.label} />
        {show && (
          <ul className="menu p-2 shadow bg-base-100 rounded-box w-52 absolute z-50">
            {options.map((option) => (
              <li
                className="p-1"
                onClick={() => {
                  console.log({ option });
                  setShow(false);
                  setValue(name, option);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
