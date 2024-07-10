import React from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'
import { Link } from 'react-router-dom'
import { RQSuperHeroPage } from './RQSuperHeroPage'

export const CustomSuperHeroes = () => {
    const onSuccess = data => {
        console.log('success callback')
    }

    const onError = error => {
        console.log('error callback')
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    if (isLoading || isFetching) return <h2>Loading...</h2>

    if (isError) return <h2>{error.message}</h2>

    return (
        <>
            <h2>Custom RQ Super Heroes Page</h2>
            {
                // data.map((item) => (
                //     <div key={item}>{item}</div>
                // ))

                data?.data.map((item) => (
                    <div key={item.name}>
                        <Link to={`/super-heroes/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </>
    )
}
