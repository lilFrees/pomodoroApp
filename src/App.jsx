import Pomodoro from './pages/Pomodoro';
import TimerProvider from './contexts/TimerContext';
import { UserProvider } from './contexts/UserContext';
import { BackgroundProvider } from './contexts/BackgroundContext';
import { TaskProvider } from './contexts/TaskContext';

function App() {
	return (
		<BackgroundProvider>
			<UserProvider>
				<TimerProvider>
					<TaskProvider>
						<Pomodoro />
					</TaskProvider>
				</TimerProvider>
			</UserProvider>
		</BackgroundProvider>
	);
}

export default App;
