import usePost from './usePost';

// type to post location to save info
// interface LocationData {
// 	countryCode: string;
// 	gridcode: string;
// 	categoryId: string;
// 	titleDescription: string;
// 	latA: string;
// 	longA: string;
// 	latB: string;
// 	longB: string;
// 	latC: string;
// 	longC: string;
// }

interface SavedGridCode {
	status: string;
	gridCode: string;
	countryCode: string;
	latitude: string;
	longitude: string;
}

const useSave = () => usePost<SavedGridCode>('/gridcode/api/store');

export default useSave;
