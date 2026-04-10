import { components } from "react-select";
import dropdownIcon from "../../public/Day Change dropdown icon.svg";

const CustomDropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <img
      src={dropdownIcon}
      alt=""
    />
  </components.DropdownIndicator>
);

export const customComponents = {
  DropdownIndicator: CustomDropdownIndicator,
};
