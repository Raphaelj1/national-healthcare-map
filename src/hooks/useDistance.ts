import usePost from './usePost';
import { GridCodeInfo } from './usePost';

export interface DistanceData {
	sourceGridCode: GridCodeInfo;
	destinationGridCode: GridCodeInfo;
	distanceKm: number;
	estimatedTravelTime: string;
}

const useDistance = () => usePost<DistanceData>('/external/api/calculate-distance');

// const useDistance = () => ({
// 	data: {
// 		sourceGridCode: {
// 			gridCode: 'aaaa-ahgumc',
// 			lat: '23.011955800000003',
// 			lng: '72.5226441',
// 			country: 'India',
// 			city: 'Ahmedabad',
// 			state: 'Gujarat',
// 			address:
// 				'H610 Titanium city centre 100ft Road, 100 Feet Anand Nagar Rd, behind Iocl petrol pump, Jodhpur Village, Ahmedabad, Gujarat 380015, India',
// 		},

// 		destinationGridCode: {
// 			gridCode: 'aaaa-ahguhy',
// 			lat: '23.0119072',
// 			lng: '72.5226767',
// 			country: 'India',
// 			city: 'Ahmedabad',
// 			state: 'Gujarat',
// 			address:
// 				'H610 Titanium city centre 100ft Road, 100 Feet Anand Nagar Rd, behind Iocl petrol pump, Jodhpur Village, Ahmedabad, Gujarat 380015, India',
// 		},
// 		distanceKm: 0.01,
// 		estimatedTravelTime: '0 mins',
// 	},
// 	error: '',
// 	isLoading: false,
// 	post: (params: any) => console.log('useLocalDistance'),
// 	reset: () => {
// 		console.log('resetLocalDistance');
// 	},
// });

export default useDistance;
