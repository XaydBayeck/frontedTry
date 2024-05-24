import styles from './Login.module.css'
import { AiOutlineMail } from 'solid-icons/ai'
import { HiOutlineDevicePhoneMobile } from 'solid-icons/hi'
import Switcher from '../../components/Switcher'
import { Accessor, Match, Setter, Show, Switch, createSignal } from 'solid-js'

export default function(props: {
  value?: [Accessor<string>, Setter<string>]
  flag?: [Accessor<boolean>, Setter<boolean>]
}) {
  const [flag, setFlag] = props.flag || createSignal(true)
  let input
  if (props.value) {
    const [value, setValue] = props.value
    input = 
      <input type={flag() ? 'email' : 'tel'}
	placeholder={flag() ? '邮箱' : '手机号'}
	name='usernumber'
	value={value()}
	onChange={(e) => setValue(e.currentTarget.value)}
      />
  } else {
    input =
      <input type={flag() ? 'email' : 'tel'}
	placeholder={flag() ? '邮箱' : '手机号'} />
  }
  return (
    <div class={styles.Input}>
      <Switcher flag={[flag, setFlag]}>
	<Switch>
	  <Match when={flag()}>
	    <AiOutlineMail style={{"margin-right": `10px`}}/>
          </Match>
	  <Match when={!flag()}>
	    <HiOutlineDevicePhoneMobile style={{"margin-right": `10px`}}/>
	  </Match>
	</Switch>
      </Switcher>
      {input}
    </div>
  )
}
