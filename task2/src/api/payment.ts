import { API_RESPONSES } from "@/constants";

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
  const randomId = Math.random() > 0.5 ? 1 : 0;
  const resp = API_RESPONSES.find((response) => response.id === randomId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resp);
    }, 1000);
  });
};
