// import countries from "../data/countries";
import useData from './useData';

 interface Country {
 	countryCode: string;
 	country: string;
}

// const useCountries = () => ({data: countries, isLoading: false, error: null})

const useCountries = () => useData<Country>('/gcsetting/api/countries');

export default useCountries;
