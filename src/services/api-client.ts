import axios from 'axios';

const apiKey = import.meta.env.VITE_GRIDCODE_API_KEY;

export default axios.create({
	baseURL: 'https://gcorea.gridweb.net',
	headers: {
		'api-key': `${apiKey}`
	},
});
