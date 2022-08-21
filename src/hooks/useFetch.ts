import axiosInstance from '../axios-config';

const useFetchData = () => {

    const fetchData = async (url: string) => {
        try {
            const { data: response } = await axiosInstance.get(url);
            return response;
        } catch (error) {
            console.error(error)
        }
    };


    return {
        fetchData
    };
};

export default useFetchData;