import * as S from "./Styles";
import { useEffect, useState } from "react";
import { useAppContext } from "../../State/AppContext";
import { addDays, startOfWeek } from "date-fns";
import _ from "lodash";
import { Week } from "./Week/Week";
import { MonthAndYear } from "./MonthAndYear/MonthAndYear";

export const DatePanel = () => {
  const { day, weekDays, setWeekDays } = useAppContext();

  return (
    <S.Divider>
      <Week weekDays={weekDays} />
      <MonthAndYear weekDays={weekDays} setWeekDays={setWeekDays} />
    </S.Divider>
  );
};
