import React, { useContext } from "react";
import { addDays, startOfWeek } from "date-fns";
import _ from "lodash";

export type DataType = {
  timestamp: number;
  hours: number[];
};
type ContextType = {
  data: DataType[];
  setData: (arg: DataType[]) => void;
  selectedEvent: null | string;
  setSelectedEvent: (arg: null | string) => void;
  day: string;
  setDay: (arg: string) => void;
  weekDays: Date[];
  setWeekDays: (arg: Date[]) => void;
};
export const getWeek = (day: string) => {
  const start = startOfWeek(new Date(day), { weekStartsOn: 1 });
  return _.range(7).map((i) => addDays(start, i));
};
export const defaultValue: ContextType = {
  data: [],
  setData: () => {},
  selectedEvent: null,
  day: new Date().toLocaleDateString(),
  setDay: () => {},
  setSelectedEvent: () => {},
  weekDays: getWeek(new Date().toLocaleDateString()),
  setWeekDays: () => {}
};
export const AppContext = React.createContext<ContextType>(defaultValue);

export const useAppContext = () => useContext(AppContext);
