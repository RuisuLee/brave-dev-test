import { STYLE_VARS } from "@/constants";
import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  visible?: boolean;
  margin?: string;
}

const CustomButton = styled.button<{
  $isVisible: boolean;
  $margin: string;
}>`
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  width: 100%;
  height: 40px;
  margin: ${(props) => props.$margin};
  background-color: ${STYLE_VARS.mainColor};
  color: ${STYLE_VARS.white};
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${STYLE_VARS.darkMainColor};
  }
`;

export const Button = ({
  buttonText,
  buttonType,
  visible = true,
  margin = "0",
  onClick,
}: IProps) => {
  return (
    <CustomButton
      onClick={onClick}
      type={buttonType}
      $isVisible={visible}
      $margin={margin}
    >
      {buttonText}
    </CustomButton>
  );
};
