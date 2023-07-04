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
};

export const device = {
  mobile: `(min-width: 320px) and (max-width: 424px)`,
  tablet: `(min-width: 425px) and (max-width: 768px)`,
  laptop: `(min-width: 768px) and (max-width: 1024px)`,
  desktop: `(min-width: 2560px)`,
};

export const OPERATORS = [
  {
    name: "МТС",
    icon: "https://moskva.mts.ru/upload/images/logo/new/mts_logo_cmyk.png",
  },
  {
    name: "Билайн",
    icon: "https://seeklogo.com/images/B/beeline-logo-6CDD082243-seeklogo.com.png",
  },
  {
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

export const API_RESPONSES = [
  {
    id: 0,
    statusCode: 200,
    message: "Оплата прошла успешно!",
  },
  {
    id: 1,
    statusCode: 400,
    message: "Ошибка! Проверьте введеные данные.",
  },
];

export const PHONE_NUMBER_VALIDATION_ERROR = {
  id: 2,
  statusCode: 400,
  message: "Неверный номер телефона!",
};
