import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button variant={ButtonVariant.Default}>
      Tenho um Abrigo
    </Button>

    <Button variant={ButtonVariant.OutLined}>
      Quero adotar
    </Button>

    {/* <button onClick={() => setCount((count) => count + 1)}>
      children
    </button>
    {count} */}
    </>
  )
}
