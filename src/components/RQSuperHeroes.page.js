import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroesx')
}

export const RQSuperHeroesPage = () => {
    const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes)

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
