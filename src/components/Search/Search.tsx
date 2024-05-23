import React from "react";
import Select, { ActionMeta, SingleValue, MultiValue } from "react-select";
import withLogger from "../WithNameLogging/WithNameLogging";
import TSelectOption, { TSelectFunc } from "@/types/select";

type TProps = {
  options: TSelectOption[];
  onChange: TSelectFunc;
  isMulti: boolean;
  value: TSelectOption[];
};

const SearchInput: React.FC<TProps> = ({
  options,
  onChange,
  isMulti,
  value,
}) => {
  const handleChange = (
    newValue: SingleValue<TSelectOption> | MultiValue<TSelectOption>
    // actionMeta: ActionMeta<TSelectOption>
  ) => {
    if (Array.isArray(newValue)) {
      const selectedOptionValues: number[] = newValue.map(
        (option) => (option as TSelectOption).value
      );
      const selectedOptions: TSelectOption[] = options.filter((option) =>
        selectedOptionValues.includes(option.value)
      );
      onChange(selectedOptions);
    } else if (newValue) {
      const selectedOption: TSelectOption = options.find(
        (option) => option.value === (newValue as TSelectOption).value
      )!;
      onChange([selectedOption]);
    } else {
      onChange(null);
    }
  };

  const customClassNames = {
    container: (state: any) => `w-96 text-black`,
    control: (state: any) => "custom-control",
    valueContainer: () => "custom-value-container",
    input: () => "custom-input",
    indicatorsContainer: () => "custom-indicators-container",
    indicatorSeparator: () => "custom-indicator-separator",
    dropdownIndicator: () => "custom-dropdown-indicator",
    clearIndicator: () => "custom-clear-indicator",
    menu: () => "custom-menu",
    menuList: () => "custom-menu-list",
    option: (state: any) => "custom-option",
    group: () => "custom-group",
    groupHeading: () => "custom-group-heading",
    loadingMessage: () => "custom-loading-message",
    noOptionsMessage: () => "custom-no-options-message",
    singleValue: () => "custom-single-value",
    multiValue: () => "custom-multi-value",
    multiValueLabel: () => "custom-multi-value-label",
    multiValueRemove: () => "custom-multi-value-remove",
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      isMulti={isMulti}
      classNames={customClassNames}
      hideSelectedOptions
      components={{
        MultiValue: () => null,
      }}
      value={value}
    />
  );
};

export default withLogger(SearchInput);
