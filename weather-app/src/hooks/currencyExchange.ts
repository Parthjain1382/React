import { useEffect, useState } from 'react'

export function useCurrencyExchange(currency: string) {
    const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(error => {
                console.error('Error fetching currency exchange rates:', error)
            })
    }, [currency])

    return data
}


export function useAllCurrencyForExchange() {
    const apiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(error => {
                console.error('Error fetching all currencies:', error)
            })
    }, [])

    return data
}