import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Pomodoro from "./pages/Pomodoro";
import TimerProvider from "./contexts/TimerContext";
import { UserProvider } from "./contexts/UserContext";
import { BackgroundProvider } from "./contexts/BackgroundContext";

function App() {
  return (
    <BackgroundProvider>
      <UserProvider>
        <TimerProvider>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Pomodoro />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </BrowserRouter>
        </TimerProvider>
      </UserProvider>
    </BackgroundProvider>
  );
}

export default App;
