import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
        cacheTime: 300000, // default timeout: 5min
        staleTime: 0, // default: 0ms -- background fetch disable for until reach to given time
        refetchOnMount: true, // default: true -- initially when go to the component it will fetch, then again go somewhere and come back, it will not fetch if it set to false
        refetchOnWindowFocus: true, // default: true -- when focus also its doing refetching
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
