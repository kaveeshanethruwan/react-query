import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
        cacheTime: 300000, // default timeout: 5min
    })

    // if (isFetching) return <h2>Fetching from the cache</h2>

    if (isLoading) return <h2>Loading...</h2>

    if (isError) return <h2>{error.message}</h2>

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {
                data?.data.map((item) => (
                    <div key={item.name}>{item.name}</div>
                ))
            }
        </>
    )
}
