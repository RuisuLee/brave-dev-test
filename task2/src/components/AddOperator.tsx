import { styled } from "styled-components";
import { Button } from "./Button";
import { TEXTS } from "@/constants";
import { useState } from "react";
import { AddOperatorForm } from "./AddOperatorForm";

const AddOperatorSection = styled.section``;

export const AddOperator = () => {
  const [addOperator, setAddOperator] = useState(false);
  const [isAddOperatorButtonVisible, setIsAddOperatorButtonVisible] =
    useState(true);

  const onAddOperatorClick = () => {
    setAddOperator(true);
    setIsAddOperatorButtonVisible(false);
  };

  const onSaveButtonClick = () => {
    setAddOperator(false);
    setIsAddOperatorButtonVisible(true);
  };
  return (
    <AddOperatorSection>
      <Button
        buttonText={TEXTS.addOperator}
        buttonType="button"
        onClick={onAddOperatorClick}
        visible={isAddOperatorButtonVisible}
      />
      {addOperator && <AddOperatorForm onSaveClick={onSaveButtonClick} />}
    </AddOperatorSection>
  );
};
