import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { CustomSuperHeroes } from './CustomSuperHeroes'

// const fetchSuperHeroes = () => {
//     return axios.get('http://localhost:4000/superheroes')
// }

// const onSuccess = data => {
//     console.log('success callback')
// }

// const onError = error => {
//     console.log('error callback')
// }

export const RQSuperHeroesPage = () => {
    // const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes, {
    //     cacheTime: 300000, // default timeout: 5min
    //     staleTime: 0, // default: 0ms -- background fetch disable for until reach to given time
    //     refetchOnMount: true, // default: true -- initially when go to the component it will fetch, then again go somewhere and come back, it will not fetch if it set to false
    //     refetchOnWindowFocus: true, // default: true -- when focus also its doing refetching
    //     refetchInterval: false, // defaults: false -- if its set to 2000ms every 2s it will call that api
    //     refetchIntervalInBackground: false, // defaults: false -- polling in background
    //     // enabled: false,
    //     onSuccess: onSuccess,
    //     onError: onError,
    //     select: (data) => {
    //         return data.data.map(hero => hero.name)
    //     }
    // })

    // if (isFetching) return <h2>Fetching from the cache</h2>

    // if (isLoading || isFetching) return <h2>Loading...</h2>

    // if (isError) return <h2>{error.message}</h2>

    return (
        <>
            {/* <h2>RQ Super Heroes Page</h2>
            {
                data.map((item) => (
                    <div key={item}>{item}</div>
                ))
            } */}
            {/* <button onClick={refetch}>Load data</button> */}
            <CustomSuperHeroes />
        </>
    )
}
