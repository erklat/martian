type TSelectOption = {
  label: string;
  value: number;
};

export type TSelectFunc = (arg0: TSelectOption[] | null) => void;

export default TSelectOption;
