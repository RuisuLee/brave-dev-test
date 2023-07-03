"use client";

import { MainPage } from "@/components/MainPage";
import { MainWrapper } from "@/components/StyledComponents/MainWrapper";
import { Loader } from "@/components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Home() {
  const isLoaderVisible = useSelector(
    (state: RootState) => state.loader.isVisible
  );
  return (
    <>
      <MainWrapper>
        {isLoaderVisible && <Loader></Loader>}
        <MainPage></MainPage>
      </MainWrapper>
    </>
  );
}
