import * as S from "./Styles";
import { DataType, useAppContext } from "../State/AppContext";
import { useCallback } from "react";

export const Footer = () => {
  const { selectedEvent, setDay, setData, data, setSelectedEvent } =
    useAppContext();
  const deleteEvent = useCallback(() => {
    if (!selectedEvent) return;
    const [time, hour] = selectedEvent.split(" ");
    const currentDay = data.find(
      (d) => d.timestamp === Number(time)
    ) as DataType;
    const newData = data.map((d) =>
      d.timestamp === Number(time)
        ? {
            ...currentDay,
            hours: currentDay.hours.filter((h) => h !== Number(hour))
          }
        : d
    );
    setData(newData);
    setSelectedEvent(null);
  }, [selectedEvent, data]);

  return (
    <S.Footer>
      <S.ActionItem
        isVisible={true}
        onClick={() => setDay(new Date().toLocaleDateString())}
      >
        Today
      </S.ActionItem>
      <S.ActionItem isVisible={!!selectedEvent} onClick={deleteEvent}>
        Delete
      </S.ActionItem>
    </S.Footer>
  );
};
