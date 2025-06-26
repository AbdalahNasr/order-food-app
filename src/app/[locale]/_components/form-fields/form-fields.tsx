import { IFormField } from "../../../../Types/app";
import { ValidationErrors } from "@/validations/auth";
import { InputTypes } from "@/components/constants/enum";
import TextField from "@/form-fields/text-field";
import PasswordField from "@/form-fields/password-field";
import Checkbox from "./checkbox";

interface Props extends IFormField {
  error: ValidationErrors;
}

const FormFields = (props: Props) => {
  const { type } = props;
  const renderField = (): React.ReactNode => {
    if (type === InputTypes.EMAIL || type === InputTypes.TEXT) {
      return <TextField {...props} />;
    }

    if (type === InputTypes.PASSWORD) {
      return <PasswordField {...props} />;
    }

    if (type === InputTypes.CHECKBOX) {
      // Remove duplicate name prop, spread props only
      return (
        <Checkbox
          checked={false}
          label={props.label ?? ""}
          {...props}
        />
      );
    }

    return <TextField {...props} />;
  };

  return <>{renderField()}</>;
};

export default FormFields;