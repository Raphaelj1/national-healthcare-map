import usePost from './usePost';

interface GeneratedGridCode {
	gridcode: string;
	country: string;
	city: string;
	state: string;
	address: string;
	latitude: string;
	longitude: string;
}

// type to get generate gridcode
// interface LocationData {
// 	countryCode: string;
// 	lat: string;
// 	long: string;
// }

const useGenerate = () => usePost<GeneratedGridCode>('/gridcode/api/generate');

export default useGenerate;
