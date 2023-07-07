export const STYLE_VARS = {
  gradient: {
    from: "#a27cfe",
    to: "#6267ed",
  },
  white: "#fff",
  black: "#000",
  mainColor: "#6269f1",
  lightMainColor: "#e2e3ff",
  darkMainColor: "#565cd8",
  gray: "#c0c0c0",
  lightGray: "#eeeff2",
  red: "#ff5555",
};

export const device = {
  mobile: `(min-width: 320px) and (max-width: 424px)`,
  tablet: `(min-width: 425px) and (max-width: 768px)`,
  laptop: `(min-width: 768px) and (max-width: 1024px)`,
  desktop: `(min-width: 2560px)`,
};

export const OPERATORS = [
  {
    id: 0,
    name: "МТС",
    icon: "https://moskva.mts.ru/upload/images/logo/new/mts_logo_cmyk.png",
  },
  {
    id: 1,
    name: "Билайн",
    icon: "https://seeklogo.com/images/B/beeline-logo-6CDD082243-seeklogo.com.png",
  },
  {
    id: 2,
    name: "Мегафон",
    icon: "https://udm.megafon.ru/public/favicons/apple-touch-icon-180x180.png",
  },
];

export const TEXTS = {
  chooseOperator: "Выберите оператора",
  addOperator: "Добавить оператора",
  inputOperatorName: "Введите название оператора",
  operatorName: "Название оператора",
  inputLinkToOperatorIcon: "Вставьте ссылку на логотип",
  linkToOperatorIcon: "Полная ссылка до изображения",
  save: "Сохранить",
  cancel: "Отменить",
  inputPhoneNumber: "Введите номер телефона",
  inputPhoneNumberPlaceholder: "+7 (###) ### ## ##",
  inputSum: "Введите сумму",
  inputSumPlaceholder: "От 1 до 1000₽",
  confirm: "Подтвердить",
};

export const PHONE_IS_EMPTY = "Поле телефона не может быть пустым!";
export const SUM_IS_EMPTY = "Полу суммы не может быть пустым!";

export const FAIL = {
  id: 1,
  statusCode: 500,
  message: "Что-то пошло не так, попробуйте ещё раз",
};

export const SUCCESS = {
  id: 0,
  statusCode: 200,
  message: "Оплата прошла успешно!",
};

export const PHONE_NUMBER_VALIDATION_ERROR = {
  id: 2,
  statusCode: 400,
  message: "Неверный номер телефона!",
};

export const SUM_VALIDATION_ERROR = {
  id: 3,
  statusCode: 400,
  message: "Введена неверная сумма!",
};
