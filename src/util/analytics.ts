import fetchData from './fetchData'
import logger from './logger'

export async function postAnalytics() {
  const localData = localStorage.getItem('analytics')

  if (localData) {
    const savedData = JSON.parse(localData)
    const isLessThan24Hrs = Date.now() - new Date(savedData).getTime() < 24 * 60 * 60 * 1000
    if (isLessThan24Hrs) return
  }

  const { width, height } = window.screen
  if (!width || !height) return

  const date = new Date().toISOString()

  try {
    await fetchData({
         url: import.meta.env.VITE_ANALYTICS_URL,
      method: 'POST',
      headers: { ['x-analytics']: 'true' },
      data: {
             date,
              url: location.href,
           screen: { width, height },
        userAgent: navigator.userAgent,
      },
    })

    localStorage.setItem('analytics', JSON.stringify(date))
  } catch (error) {
    logger(0, { error })
  }
}
