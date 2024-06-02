import Pomodoro from './pages/Pomodoro';
import TimerProvider from './contexts/TimerContext';
import { UserProvider } from './contexts/UserContext';
import { BackgroundProvider } from './contexts/BackgroundContext';

function App() {
	return (
		<BackgroundProvider>
			<UserProvider>
				<TimerProvider>
					<Pomodoro />
				</TimerProvider>
			</UserProvider>
		</BackgroundProvider>
	);
}

export default App;
