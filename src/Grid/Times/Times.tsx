import * as S from "./Styles";
import _ from "lodash";

const getDouble = (n: number) => {
  const num = n.toString();
  return num.length === 2 ? num : "0" + num;
};
export const Times = () => {
  return (
    <S.Divider>
      {_.range(24)
        .map(getDouble)
        .map((t) => (
          <S.Time key={t}>{`${t}:00`}</S.Time>
        ))}
    </S.Divider>
  );
};
