"use client";

import { createGlobalStyle } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Оплата связи",
  description: "Web приложение — терминал оплаты мобильного телефона.",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Provider store={store}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
