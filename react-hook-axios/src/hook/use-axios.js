import {useEffect, useRef, useState} from "react";

export default function useAxios(configRequest) {
    const { axiosInstance, method, url, othersConfig={} } = configRequest
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {

        const controller = new AbortController()

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axiosInstance[method.toLowerCase()](
                    url,
                    {
                    ...othersConfig,
                    signal: controller.signal
                    }
                )
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        if(effectRun.current) fetchData()

        return () => {
            controller.abort()
            effectRun.current = true
        }

    },[])
    return [data, loading, error]
}