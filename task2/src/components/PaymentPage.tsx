import styled from "styled-components";
import { Main } from "./StyledComponents/Main";
import { Input } from "./Input";
import { STYLE_VARS, TEXTS } from "@/constants";
import { Button } from "./Button";
import IconBack from "../assets/arrow-back.svg";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "@/lib/store";
import { useEffect, useState } from "react";
import { setLoaderVisibility } from "@/lib/store/loader";
import { makePayment } from "@/api/payment";

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(IconBack)`
  height: 20px;
  cursor: pointer;
  path {
    fill: ${STYLE_VARS.mainColor};
  }
`;

const Div = styled.div`
  margin-left: 20px;
`;

const Form = styled.form``;

const Message = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ErrorMessage = styled(Message)`
  color: #ff5555;
`;

const SuccessMessage = styled(Message)`
  color: ${STYLE_VARS.mainColor};
`;

export const PaymentPage = () => {
  const router = useRouter();
  const methods = useForm();
  const operator = useSelector((state: RootState) => state.operator.operator);
  const dispatch = useStoreDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = methods.handleSubmit((data) => {
    dispatch(setLoaderVisibility(true));

    makePayment({ phoneNumber: data.phoneNumber, sum: data.sum }).then(
      (response) => {
        const message = (response && response.message) || "";
        dispatch(setLoaderVisibility(false));
        if (response?.statusCode !== 200) {
          setSuccessMessage("");
          setErrorMessage(message);
        } else {
          setErrorMessage("");
          setSuccessMessage(message + " Возврат на глвную страницу..");
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      }
    );
  });

  useEffect(() => {
    if (!operator) {
      router.push("/");
    }
  }, []);

  return (
    <Main>
      <Header>
        <StyledIcon
          onClick={() => {
            router.back();
          }}
        ></StyledIcon>
        <Div>{operator}</Div>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={(e: any) => e.preventDefault()} noValidate>
          <Input
            name="phoneNumber"
            labelText={TEXTS.inputPhoneNumber}
            placeholdetText={TEXTS.inputPhoneNumberPlaceholder}
            type="tel"
            control={methods.control}
          ></Input>
          <Input
            name="sum"
            labelText={TEXTS.inputSum}
            placeholdetText={TEXTS.inputSumPlaceholder}
            type="currency"
            control={methods.control}
          ></Input>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          <Button
            buttonText={TEXTS.confirm}
            buttonType="button"
            onClick={onSubmit}
          ></Button>
        </Form>
      </FormProvider>
    </Main>
  );
};
