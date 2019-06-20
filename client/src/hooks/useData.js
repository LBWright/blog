import { useEffect, useState } from 'react'
import axios from 'axios'

const useData = ({ resource, id }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        const executeFetch = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`/api/${resource}`)
                setLoading(false)
                setData(res.json())
            } catch (e) {
                setLoading(false)
                setError(e)
            }
        }
        executeFetch()
    }, [resource, id])

    return [data, error, loading]
}

export default useData
