import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import MapStory from './pages/MapStory';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<HomePage />} />
				<Route path="/story" element={<MapStory />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
