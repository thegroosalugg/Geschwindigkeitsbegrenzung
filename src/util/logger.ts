// use negative hues for b/w bg: -1 black ... -100 white
const getStyles = (hue: number) => {
  const isGrey = hue < 0
  const h = isGrey ? 0 : hue % 360
  const s = isGrey ? 0 : 50
  const l = isGrey ? Math.min(Math.abs(hue), 100) : 50

  const color = isGrey && l > 50 ? 'black' : 'white'
  const background = `hsl(${h}, ${s}%, ${l}%)`
  return `color: ${color}; background: ${background}; padding: 2px 4px;`
}

let hour,  minute,  second
    hour = minute = second = '2-digit' as const

const getTime = () => new Date().toLocaleTimeString([], { hour, minute, second, hour12: false })

export default function logger(hue: number, items: object) {
  const style = getStyles(hue)
  const time  = getTime()

  Object.entries(items).forEach(([key, value]) => {
    const message = `%c${key} @${time}`
    const isObject = typeof value === 'object' && value !== null
    if (isObject) {
      console.log(message, style)
      console.dir(value)
    } else {
      console.log(`${message}\n${value}`, style)
    }
  })
}
