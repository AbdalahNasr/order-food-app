import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ValidationErrors } from "@/validations/auth";
import { useParams } from "next/navigation";
import { Languages } from "@/components/constants/enum";
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";
import { IFormField } from "../Types/app";

interface Props extends IFormField {
  error: ValidationErrors;
}
interface IState {
  showPassword: boolean;
}

const INITIAL_STATE: IState = { showPassword: false };

const PasswordField = ({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  error,
  defaultValue,
}: Props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { showPassword } = state;
  const { locale } = useParams();
  const handleClickShowPassword = () =>
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="capitalize text-black">
        {label}
      </Label>
      <div className="relative  flex  items-center">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          autoComplete="off"
          name={name}
          id={name}
          defaultValue={defaultValue}
        />

        <button
          type="button"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          className={`absolute   ${
            locale === Languages.ARABIC ? "left-4 " : "right-4 "
          }`}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4 " />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
        </button>
      </div>
      {error && error[name] && (
        <p
          className={`text-accent mt-2 text-sm font-medium ${
            error[name] ? "text-destructive" : ""
          }`}
        >
          {error[name]}
        </p>
      )}
    </div>
  );
};

export default PasswordField;