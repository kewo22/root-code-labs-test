import { useEffect, useState } from 'react';
import axiosInstance from '../axios-config';

const useFetchData = () => {
    // const [data, setData] = useState<any>();
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchData(url);
    // }, []);

    const fetchData = async (url: string) => {
        try {
            const { data: response } = await axiosInstance.get(url);
            // setData(response);
            return response;
        } catch (error) {
            console.error(error)
        }
        // setLoading(false);
    };


    return {
        // data,
        // loading,
        fetchData
    };
};

export default useFetchData;