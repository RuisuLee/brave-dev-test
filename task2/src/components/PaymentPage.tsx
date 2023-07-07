import styled from "styled-components";
import { Main } from "./StyledComponents/Main";
import { Input } from "./Input";
import { STYLE_VARS, TEXTS, PHONE_IS_EMPTY, SUM_IS_EMPTY } from "@/constants";
import { Button } from "./Button";
import IconBack from "../assets/arrow-back.svg";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "@/lib/store";
import { useEffect, useState } from "react";
import { setLoaderVisibility } from "@/lib/store/loader";
import { makePayment } from "@/api/payment";

interface IProps {
  id: string;
}

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
  color: ${STYLE_VARS.red};
`;

const SuccessMessage = styled(Message)`
  color: ${STYLE_VARS.mainColor};
`;

export const PaymentPage = ({ id }: IProps) => {
  const router = useRouter();
  const methods = useForm();
  const operators = useSelector(
    (state: RootState) => state.operators.operators
  );
  const dispatch = useStoreDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [operator, setOperator] = useState({
    id: 0,
    icon: "",
    name: "",
  });

  const onSubmit = methods.handleSubmit((data) => {
    if (!data.phoneNumber) {
      setErrorMessage(PHONE_IS_EMPTY);
      return;
    }
    if (!data.sum) {
      setErrorMessage(SUM_IS_EMPTY);
      return;
    }
    dispatch(setLoaderVisibility(true));

    makePayment({ phoneNumber: data.phoneNumber, sum: data.sum })
      .then((response) => {
        const message = (response && response.message) || "";
        dispatch(setLoaderVisibility(false));
        setErrorMessage("");
        setSuccessMessage(message + " Возврат на глвную страницу..");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((error) => {
        const message = (error && error.message) || "";
        dispatch(setLoaderVisibility(false));
        setSuccessMessage("");
        setErrorMessage(message);
      });
  });

  useEffect(() => {
    const op = operators.find((o) => o.id.toString() === id);
    if (!op) {
      router.push("/");
    } else {
      setOperator(op);
    }
  }, []);

  useEffect(() => {
    const { unsubscribe } = methods.watch((value) => {
      if (value.phoneNumber || value.sum) {
        setErrorMessage("");
      }
    });
    return () => unsubscribe();
  }, [methods.watch]);

  return (
    <Main>
      <Header>
        <StyledIcon
          onClick={() => {
            router.back();
          }}
        />
        <Div>{operator && operator.name}</Div>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={(e: any) => e.preventDefault()} noValidate>
          <Input
            name="phoneNumber"
            labelText={TEXTS.inputPhoneNumber}
            placeholderText={TEXTS.inputPhoneNumberPlaceholder}
            type="tel"
            control={methods.control}
          />
          <Input
            name="sum"
            labelText={TEXTS.inputSum}
            placeholderText={TEXTS.inputSumPlaceholder}
            type="currency"
            control={methods.control}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          <Button
            buttonText={TEXTS.confirm}
            buttonType="button"
            onClick={onSubmit}
          />
        </Form>
      </FormProvider>
    </Main>
  );
};
