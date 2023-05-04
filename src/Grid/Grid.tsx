import { Times } from "./Times/Times";
import * as S from "./Styles";
import { Table } from "./Table/Table";
import { DataType, useAppContext } from "../State/AppContext";
import _ from "lodash";
import { useCallback, useEffect } from "react";
export const Grid = () => {
  const { data, weekDays } = useAppContext();
  const getData = useCallback(() => {
    const filteredData = _.chain(data)
      .filter((d) => d.timestamp >= Number(_.first(weekDays)))
      .filter((d) => d.timestamp <= Number(_.last(weekDays)))
      .value();
    const emptyData = weekDays.map(
      (d): DataType => ({ timestamp: Number(d), hours: [] })
    );
    return _.chain(emptyData)
      .concat(filteredData)
      .groupBy("timestamp")
      .values()
      .map((arr) => _.reduce<DataType, DataType>(arr, _.merge, {} as DataType))
      .value();
  }, [data, weekDays]);

  useEffect(() => console.log(data), [data]);
  return (
    <S.Wrapper>
      <Times />
      <Table data={getData()} />
    </S.Wrapper>
  );
};
