import { API_RESPONSES, PHONE_NUMBER_VALIDATION_ERROR } from "@/constants";

export interface IPaymentApiResponse {
  id: number;
  statusCode: number;
  message: string;
}

export interface IPaymentApiParams {
  phoneNumber: string;
  sum: string;
}

export const makePayment = async (
  params: IPaymentApiParams
): Promise<IPaymentApiResponse | undefined> => {
  const telRegex =
    /^(\+7)[\s\-]\([0-9]{3}\)[\s]?[0-9]{3}[\s]?[0-9]{2}[\s]?[0-9]{2}$/;
  if (!params.phoneNumber.match(telRegex)) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PHONE_NUMBER_VALIDATION_ERROR);
      }, 1000);
    });
  } else {
    const randomId = Math.random() > 0.5 ? 1 : 0;
    const resp = API_RESPONSES.find((response) => response.id === randomId);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resp);
      }, 1000);
    });
  }
};
