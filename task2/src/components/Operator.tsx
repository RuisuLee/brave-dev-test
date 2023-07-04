import { STYLE_VARS, device } from "@/constants";
import { useStoreDispatch } from "@/lib/store";
import { chooseOperator } from "@/lib/store/operator";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface IProps {
  name: string;
  icon: string;
}

const OperatorCard = styled.div`
  width: 120px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${STYLE_VARS.white};
  border: 1px solid ${STYLE_VARS.lightMainColor};
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px 0px ${STYLE_VARS.gray};
  }

  @media ${device.mobile} {
    width: 100px;
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 4px;
`;

export const Operator = ({ name, icon }: IProps) => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  const onCardClick = () => {
    dispatch(chooseOperator(name));
    router.push("/payment");
  };
  return (
    <OperatorCard
      onClick={() => {
        onCardClick();
      }}
    >
      <Image src={icon}></Image>
      <div>{name}</div>
    </OperatorCard>
  );
};
