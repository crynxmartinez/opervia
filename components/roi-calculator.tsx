'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react'

export function ROICalculator() {
  const [clients, setClients] = useState(3)
  const [monthlyValue, setMonthlyValue] = useState(5000)
  const [hoursSaved, setHoursSaved] = useState(15)
  const [hourlyRate, setHourlyRate] = useState(100)

  // Calculations
  const yearlyRevenue = clients * monthlyValue * 12
  const investment = 70000
  const netProfit = yearlyRevenue - investment
  const roiPercent = ((netProfit / investment) * 100).toFixed(1)
  const paybackMonths = investment > 0 ? Math.ceil(investment / (yearlyRevenue / 12)) : 0
  const timeValue = hoursSaved * 52 * hourlyRate

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getROIColor = () => {
    const roi = parseFloat(roiPercent)
    if (roi >= 100) return 'text-green-600'
    if (roi >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const loadPreset = (preset: 'small' | 'growing' | 'established') => {
    switch (preset) {
      case 'small':
        setClients(2)
        setMonthlyValue(3000)
        setHoursSaved(10)
        break
      case 'growing':
        setClients(5)
        setMonthlyValue(5000)
        setHoursSaved(15)
        break
      case 'established':
        setClients(10)
        setMonthlyValue(7000)
        setHoursSaved(25)
        break
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Calculate Your Potential ROI
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Adjust the sliders to see how quickly the Opervia partnership pays for itself
            </p>

            {/* Preset Buttons */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">Quick Scenarios:</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => loadPreset('small')}
                  className="px-4 py-2 bg-white border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                >
                  Small Agency
                </button>
                <button
                  onClick={() => loadPreset('growing')}
                  className="px-4 py-2 bg-white border-2 border-purple-300 text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200"
                >
                  Growing Agency
                </button>
                <button
                  onClick={() => loadPreset('established')}
                  className="px-4 py-2 bg-white border-2 border-green-300 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
                >
                  Established Agency
                </button>
              </div>
            </div>

            {/* Input Controls */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6 space-y-6">
              {/* Number of Clients */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Number of Clients
                  </label>
                  <span className="text-2xl font-bold text-blue-600">{clients}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={clients}
                  onChange={(e) => setClients(parseInt(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Monthly Client Value */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Average Monthly Client Value
                  </label>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(monthlyValue)}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={monthlyValue}
                  onChange={(e) => setMonthlyValue(parseInt(e.target.value))}
                  className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000</span>
                  <span>$15,000</span>
                </div>
              </div>

              {/* Hours Saved */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    Hours Saved Per Week
                  </label>
                  <span className="text-2xl font-bold text-purple-600">{hoursSaved}h</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                  className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Hourly Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Your Hourly Rate
                  </label>
                  <span className="text-2xl font-bold text-yellow-600">{formatCurrency(hourlyRate)}/hr</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$50</span>
                  <span>$500</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 md:p-8 shadow-xl border-2 border-green-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Your Projected Results
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Year 1 Revenue */}
                <div className="bg-white rounded-lg p-5 shadow-md border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Year 1 Revenue</p>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(yearlyRevenue)}</p>
                  <p className="text-xs text-gray-500 mt-1">{clients} clients × {formatCurrency(monthlyValue)}/mo × 12</p>
                </div>

                {/* Opervia Investment */}
                <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Opervia Investment</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(investment)}</p>
                  <p className="text-xs text-gray-500 mt-1">One-time + 12 months support</p>
                </div>

                {/* Net Profit */}
                <div className="bg-white rounded-lg p-5 shadow-md border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Net Profit (Year 1)</p>
                  <p className={`text-4xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(netProfit)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Revenue - Investment</p>
                </div>

                {/* ROI Percentage */}
                <div className="bg-white rounded-lg p-5 shadow-md border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
                  <p className={`text-4xl font-bold ${getROIColor()}`}>
                    {roiPercent}%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {paybackMonths > 0 && paybackMonths <= 12 ? `Payback in ${paybackMonths} months` : paybackMonths > 12 ? 'Payback beyond year 1' : 'Immediate return'}
                  </p>
                </div>

                {/* Time Value */}
                <div className="bg-white rounded-lg p-5 shadow-md border border-purple-200 md:col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Value of Time Saved</p>
                  <p className="text-3xl font-bold text-purple-600">{formatCurrency(timeValue)}/year</p>
                  <p className="text-xs text-gray-500 mt-1">{hoursSaved} hours/week × 52 weeks × {formatCurrency(hourlyRate)}/hr</p>
                </div>
              </div>

              {/* ROI Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">ROI Progress</span>
                  <span className={`text-lg font-bold ${getROIColor()}`}>{roiPercent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      parseFloat(roiPercent) >= 100
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : parseFloat(roiPercent) >= 50
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                        : 'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}
                    style={{ width: `${Math.min(Math.max(parseFloat(roiPercent), 0), 200)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This calculator shows potential returns based on your inputs. With Opervia's custom system and white-label support, many agencies charge premium rates ($7K-$15K/month), significantly increasing ROI. Results may vary based on your specific business model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
