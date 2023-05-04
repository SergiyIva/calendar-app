import * as S from "./Styles";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import _ from "lodash";
import { addDays, subDays } from "date-fns";
import { getWeek, useAppContext } from "../../../State/AppContext";
import { useCallback } from "react";

type MonthAndYearProps = {
  weekDays: Date[];
  setWeekDays: (arg: Date[]) => void;
};
type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
const numToMonth = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};
export const MonthAndYear = ({ weekDays, setWeekDays }: MonthAndYearProps) => {
  const { setDay } = useAppContext();

  const toForward = useCallback(() => {
    const firstDayOfNextWeek = addDays(_.last(weekDays)!, 1);
    setWeekDays(getWeek(firstDayOfNextWeek.toLocaleDateString()));
    setDay(firstDayOfNextWeek.toLocaleDateString());
  }, [weekDays]);

  const toPrevious = useCallback(() => {
    const lastDayOfPrevWeek = subDays(_.first(weekDays)!, 1);
    const newWeek = getWeek(lastDayOfPrevWeek.toLocaleDateString());
    setWeekDays(newWeek);
    setDay(newWeek[0].toLocaleDateString());
  }, [weekDays]);

  return (
    <S.MonthAndYearDivider>
      <S.ArrowContainer onClick={toPrevious}>
        <BsChevronLeft />
      </S.ArrowContainer>
      <S.MonthAndYear>
        {numToMonth[new Date(_.first(weekDays)!).getMonth() as Month]}{" "}
        {new Date(_.first(weekDays)!).getFullYear()}
      </S.MonthAndYear>
      <S.ArrowContainer onClick={toForward}>
        <BsChevronRight />
      </S.ArrowContainer>
    </S.MonthAndYearDivider>
  );
};
