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

const useGenerate = () => usePost<GeneratedGridCode>('/gridcode/api/generate');

export default useGenerate;
