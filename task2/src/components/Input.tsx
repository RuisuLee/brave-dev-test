import { STYLE_VARS } from "@/constants";
import { InputHTMLAttributes } from "react";
import CurrencyFormat from "react-currency-format";
import { Control, Controller, FieldValues } from "react-hook-form";
import styled from "styled-components";
import InputMask from "react-input-mask";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  placeholderText: string;
  type: "text" | "tel" | "currency";
  control?: Control<FieldValues, any>;
}

interface IValues {
  formattedValue: string;
  value: string;
  floatValue: number;
}

const CustomInputWrapper = styled.div`
  margin: 15px 0;
`;
const Label = styled.label`
  font-size: 14px;
`;
const CustomInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${STYLE_VARS.lightGray};
  border-radius: 4px;
  outline: none;
`;
const StyledMaskInput = styled(CurrencyFormat)`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${STYLE_VARS.lightGray};
  border-radius: 4px;
  outline: none;
`;
const StyledPhoneInput = styled(InputMask)`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${STYLE_VARS.lightGray};
  border-radius: 4px;
  outline: none;
`;

export const Input = ({
  name,
  labelText,
  placeholderText,
  type,
  control,
}: IInputProps) => {
  const getInput = (type: string) => {
    switch (type) {
      case "text":
        return (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            defaultValue={""}
            render={({ field }) => (
              <CustomInput id={name} placeholder={placeholderText} {...field} />
            )}
          />
        );
      case "tel":
        return (
          <Controller
            name={name}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <StyledPhoneInput
                mask="+7 (999) 999 99 99"
                id={name}
                placeholder={placeholderText}
                {...field}
              />
            )}
          />
        );
      case "currency":
        return (
          <Controller
            name={name}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <StyledMaskInput
                suffix={"₽"}
                thousandSeparator={" "}
                id={name}
                placeholder={placeholderText}
                isAllowed={(values: IValues) =>
                  values.value === "" ||
                  (Number(values.value) > 0 && Number(values.value) <= 1000)
                }
                {...field}
              />
            )}
          />
        );
      default:
        break;
    }
  };

  return (
    <CustomInputWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      {getInput(type)}
    </CustomInputWrapper>
  );
};
