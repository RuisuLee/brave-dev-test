import { STYLE_VARS } from "@/constants";
import { InputHTMLAttributes } from "react";
import CurrencyFormat from "react-currency-format";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import styled from "styled-components";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  placeholdetText: string;
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

export const Input = ({
  name,
  labelText,
  placeholdetText,
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
              <CustomInput
                id={name}
                placeholder={placeholdetText}
                {...field}
              ></CustomInput>
            )}
          />
        );
      case "tel":
        return (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledMaskInput
                format="+7 (###) ### ## ##"
                mask="_"
                id={name}
                placeholder={placeholdetText}
                {...field}
              ></StyledMaskInput>
            )}
          />
        );
      case "currency":
        return (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <StyledMaskInput
                suffix={"₽"}
                thousandSeparator={" "}
                id={name}
                placeholder={placeholdetText}
                isAllowed={(values: IValues) =>
                  Number(values.value) > 0 && Number(values.value) <= 1000
                }
                {...field}
              ></StyledMaskInput>
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
