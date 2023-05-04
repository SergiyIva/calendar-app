import _ from "lodash";
import * as S from "./Styles";
import { DataType, useAppContext } from "../../State/AppContext";

type TableProps = {
  data: DataType[];
};
export const Table = ({ data }: TableProps) => {
  const { selectedEvent, setSelectedEvent } = useAppContext();

  return (
    <S.Table role={"grid"}>
      <tbody>
        {_.range(24).map((i) => (
          <tr key={i}>
            {data.map(({ timestamp, hours }, j) => (
              <S.Cell
                isLast={j === 6}
                key={`${i}${j}`}
                onClick={
                  hours.indexOf(i) >= 0
                    ? () => {}
                    : () => setSelectedEvent(null)
                }
              >
                {hours.indexOf(i) >= 0 && (
                  <S.Event
                    isSelected={selectedEvent === `${timestamp} ${i}`}
                    onClick={() => setSelectedEvent(`${timestamp} ${i}`)}
                  />
                )}
              </S.Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};
