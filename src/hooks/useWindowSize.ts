import {useEffect, useState} from 'react'

interface WindowSize {
  width: number,
  height: number
}

const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}
