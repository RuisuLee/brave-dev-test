"use client";

import { PaymentPage } from "@/components/PaymentPage";
import { MainWrapper } from "@/components/StyledComponents/MainWrapper";
import { Loader } from "@/components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Page() {
  const isLoaderVisible = useSelector(
    (state: RootState) => state.loader.isVisible
  );
  return (
    <MainWrapper>
      {isLoaderVisible && <Loader></Loader>}
      <PaymentPage></PaymentPage>
    </MainWrapper>
  );
}
