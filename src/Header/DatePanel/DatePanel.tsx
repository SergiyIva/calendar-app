import * as S from "./Styles";
import { useAppContext } from "../../State/AppContext";
import { Week } from "./Week/Week";
import { MonthAndYear } from "./MonthAndYear/MonthAndYear";

export const DatePanel = () => {
  const { weekDays, setWeekDays } = useAppContext();

  return (
    <S.Divider>
      <Week weekDays={weekDays} />
      <MonthAndYear weekDays={weekDays} setWeekDays={setWeekDays} />
    </S.Divider>
  );
};
