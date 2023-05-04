import * as S from "./Styles";
import { BsPlusLg } from "react-icons/bs";
import { useAppContext } from "../../State/AppContext";
import { useCallback } from "react";

const isValid = (
  year: string,
  month: string,
  day: string,
  hour: string,
  min: string,
  sec: string
) => {
  return (
    /\d{4}/.test(year) &&
    /\d{2}/.test(month) &&
    /\d{2}/.test(day) &&
    /\d{2}/.test(hour) &&
    /\d{2}/.test(min) &&
    /\d{2}/.test(sec)
  );
};
export const Title = () => {
  const { data, setData } = useAppContext();

  const onClick = useCallback(() => {
    // 2023-05-05 15:15:15
    const dateInput = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
    if (!dateInput) return;
    const [date, time] = dateInput.split(" ");
    const [year, month, day] = date.split("-");
    const [hour, min, sec] = time.split(":");
    if (!isValid(year, month, day, hour, min, sec)) return;
    const timestamp = Number(new Date(`${month}/${day}/${year}`));
    const dayToChange = data.find((d) => d.timestamp === timestamp);
    const newData = dayToChange
      ? data.map((d) =>
          d.timestamp === timestamp
            ? { ...d, hours: [...d.hours, Number(hour)] }
            : d
        )
      : [
          ...data,
          {
            timestamp,
            hours: [Number(hour)]
          }
        ];
    setData(newData);
  }, [data]);

  return (
    <S.Divider>
      <S.Heading>Interview Calendar</S.Heading>
      <S.Plus onClick={onClick}>
        <BsPlusLg />
      </S.Plus>
    </S.Divider>
  );
};
