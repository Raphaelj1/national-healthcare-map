import usePost, { GridCodeInfo } from './usePost';

export interface RouteData {
	details: GridCodeInfo[];
	mapUrl?: string;
}

const useRoutes = () => usePost<RouteData>('/external/api/search-gridcodes');

export default useRoutes;
