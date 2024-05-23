export interface IInputProps {
  name: string;
  label: string;
  error: string | { field: any; message: any };
}

export interface IInputWrapperProps extends IInputProps {
  children: React.ReactNode;
  focused: boolean;
}
