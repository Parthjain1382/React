import { useState, useMemo } from 'react'
import './App.css'
import { useCurrencyExchange, useAllCurrencyForExchange } from './hooks/currencyExchange'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('eur')

  const ratesData = useCurrencyExchange(fromCurrency)
  const allCurrencies = useAllCurrencyForExchange()

  const currencyOptions = useMemo(
    () => (allCurrencies ? Object.entries(allCurrencies).filter(([, name]) => name) : []),
    [allCurrencies]
  )

  const rate = useMemo(() => {
    if (!ratesData) return null
    return ratesData[fromCurrency]?.[toCurrency] ?? null
  }, [ratesData, fromCurrency, toCurrency])

  const convertedAmount = useMemo(() => {
    if (rate == null || amount === '') return ''
    return (Number(amount) * rate).toFixed(4)
  }, [amount, rate])

  if (!ratesData || !allCurrencies) {
    return (
      <div className="app">
        <div className="converter-card loading-card">
          <div className="spinner" />
          <p>Loading exchange rates...</p>
        </div>
      </div>
    )
  }

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    if (convertedAmount) {
      setAmount(parseFloat(convertedAmount))
    }
  }

  return (
    <div className="app">
      <div className="converter-card">
        <header className="converter-header">
          <h1>Currency Exchange</h1>
          <p>Live conversion rates</p>
        </header>

        <div className="converter-body">
          <div className="currency-row">
            <span className="currency-label">From</span>
            <div className="currency-input-group">
              <input
                type="number"
                className="amount-input"
                placeholder="0.00"
                value={amount}
                min="0"
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className="currency-select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currencyOptions.map(([code, name]) => (
                  <option key={code} value={code}>
                    {code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="button" className="swap-btn" onClick={handleSwap} aria-label="Swap currencies">
            ⇅
          </button>

          <div className="currency-row">
            <span className="currency-label">To</span>
            <div className="currency-input-group">
              <input
                type="text"
                className="amount-input amount-input--readonly"
                readOnly
                value={convertedAmount}
                placeholder="0.00"
              />
              <select
                className="currency-select"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencyOptions.map(([code, name]) => (
                  <option key={code} value={code}>
                    {code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <footer className="converter-footer">
          {rate != null ? (
            <p>
              1 {fromCurrency.toUpperCase()} = {rate} {toCurrency.toUpperCase()}
            </p>
          ) : (
            <p className="rate-placeholder">Rate unavailable for this pair</p>
          )}
        </footer>
      </div>
    </div>
  )
}

export default App
