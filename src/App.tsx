import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./Styles/theme";
import GlobalStyles from "./Styles/global";
import { Header } from "./Header/Header";
import { Wrapper } from "./Styles";
import { Footer } from "./Footer/Footer";
import { Grid } from "./Grid/Grid";
import { AppContext, getWeek } from "./State/AppContext";
import { defaultValue } from "./State/AppContext";
import { addDays, startOfWeek } from "date-fns";
import _ from "lodash";

const initData = [
  {
    timestamp: Number(new Date("5/4/2023")),
    hours: [10, 12, 20]
  },
  {
    timestamp: Number(new Date("5/5/2023")),
    hours: [10, 12, 20]
  }
];

function App() {
  const [selectedEvent, setSelectedEvent] = useState<null | string>(null);
  const [day, setDay] = useState(defaultValue.day);
  const [weekDays, setWeekDays] = useState(defaultValue.weekDays);
  const [data, setData] = useState(initData);

  useEffect(() => {
    setWeekDays(getWeek(day));
  }, [day]);

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <AppContext.Provider
        value={{
          data,
          setData,
          day,
          setDay,
          selectedEvent,
          setSelectedEvent,
          weekDays,
          setWeekDays
        }}
      >
        <Wrapper>
          <Header />
          <Grid />
          <Footer />
        </Wrapper>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
