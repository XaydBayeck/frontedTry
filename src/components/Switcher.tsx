import { Accessor, Setter } from 'solid-js'
import styles from './Switcher.module.css'
import { JSX } from 'solid-js/jsx-runtime'

const Switcher = (props: {
  flag: [Accessor<boolean>, Setter<boolean>],
  children: JSX.Element
}) => {
  const [flag, setFlag] = props.flag
  return (
    <div class={styles.Switcher} onClick={() => setFlag(!flag())}>
      {props.children}
    </div>
  )
}

export default Switcher
