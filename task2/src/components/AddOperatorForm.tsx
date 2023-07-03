import { STYLE_VARS, TEXTS } from "@/constants";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import { useStoreDispatch } from "@/lib/store";
import { addOperator } from "@/lib/store/operators";

interface IProps {
  onSaveClick: () => void;
}

const AddOperatorFormWrapper = styled.form`
  border: 1px solid ${STYLE_VARS.lightMainColor};
  border-radius: 4px;
  padding: 30px;
  margin-top: 20px;
`;

export const AddOperatorForm = ({ onSaveClick }: IProps) => {
  const methods = useForm();
  const dispatch = useStoreDispatch();
  const onSubmit = methods.handleSubmit((data) => {
    dispatch(
      addOperator({
        name: data.operatorName,
        icon: data.operatorIcon,
      })
    );
    onSaveClick();
  });

  return (
    <FormProvider {...methods}>
      <AddOperatorFormWrapper
        onSubmit={(e: any) => e.preventDefault()}
        noValidate
      >
        <Input
          name="operatorName"
          labelText={TEXTS.inputOperatorName}
          placeholdetText={TEXTS.operatorName}
          type="text"
          control={methods.control}
        ></Input>
        <Input
          name="operatorIcon"
          labelText={TEXTS.inputLinkToOperatorIcon}
          placeholdetText={TEXTS.linkToOperatorIcon}
          type="text"
          control={methods.control}
        ></Input>
        <Button
          buttonText={TEXTS.save}
          buttonType="button"
          onClick={onSubmit}
        ></Button>
        <Button
          buttonText={TEXTS.cancel}
          buttonType="button"
          onClick={onSaveClick}
          margin="10px 0 0 0"
        ></Button>
      </AddOperatorFormWrapper>
    </FormProvider>
  );
};
