import usePost from './usePost';
import { GridCodeInfo } from './usePost';

export interface DistanceData {
	sourceGridCode: GridCodeInfo;
	destinationGridCode: GridCodeInfo;
	distanceKm: number;
	estimatedTravelTime: string;
}

const useDistance = () => usePost<DistanceData>('/external/api/calculate-distance');

export default useDistance;
