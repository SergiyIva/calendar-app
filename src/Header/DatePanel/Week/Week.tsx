import * as S from "./Styles";
import { Date as DateComponent } from "./Date/Date";
import { useAppContext } from "../../../State/AppContext";

type WeekProps = {
  weekDays: Date[];
};

const days = ["M", "T", "W", "T", "F", "S", "S"];
export const Week = ({ weekDays }: WeekProps) => {
  const { day, setDay } = useAppContext();
  const onClickDay = (date: Date) => {
    setDay(date.toLocaleDateString());
  };
  return (
    <>
      <S.SmallWeekContainer>
        {days.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </S.SmallWeekContainer>
      <S.NumWeekContainer>
        {weekDays.map((d) => (
          <DateComponent
            key={d.toLocaleDateString()}
            num={d.getDate()}
            isActive={day === d.toLocaleDateString()}
            onClick={() => onClickDay(d)}
          />
        ))}
      </S.NumWeekContainer>
    </>
  );
};
