import * as S from "./Styles";

type DateProps = {
  num: number;
  isActive: boolean;
  onClick: () => void;
};
export const Date = ({ num, isActive, onClick }: DateProps) => {
  return (
    <S.Date isActive={isActive} onClick={onClick}>
      {num}
    </S.Date>
  );
};
