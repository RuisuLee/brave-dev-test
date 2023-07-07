import {
  FAIL,
  PHONE_NUMBER_VALIDATION_ERROR,
  SUCCESS,
  SUM_VALIDATION_ERROR,
} from "@/constants";

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPhoneNumberCorrect(params.phoneNumber)) {
        if (isSumCorrect(params.sum)) {
          const randomId = Math.random() > 0.5 ? 1 : 0;
          if (randomId === 0) {
            resolve(SUCCESS);
          } else {
            reject(FAIL);
          }
        } else {
          reject(SUM_VALIDATION_ERROR);
        }
      } else {
        reject(PHONE_NUMBER_VALIDATION_ERROR);
      }
    }, 1000);
  });
};

const isPhoneNumberCorrect = (number: string): boolean => {
  const telRegex =
    /^(\+7)[\s\-]\([0-9]{3}\)[\s]?[0-9]{3}[\s]?[0-9]{2}[\s]?[0-9]{2}$/;
  return !!number.match(telRegex);
};

const isSumCorrect = (sum: string): boolean => {
  const currencyIndex = sum.indexOf("₽");
  const amount = Number(sum.slice(0, currencyIndex));
  return amount > 0 && amount <= 1000;
};
