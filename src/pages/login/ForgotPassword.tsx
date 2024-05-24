import styles from './Login.module.css'
import { AiOutlineMail } from 'solid-icons/ai'
import { JSX, Match, Switch, createSignal } from 'solid-js'
import UserInput from './UserInput';

const inforstyle : JSX.CSSProperties = {
  "margin-bottom": `.8em`,
  "font-size": `15px`,
  "letter-spacing": `.5px`,
  "line-height": 1.8,
};

export default function() {
  const [flag, setFlag] = createSignal(true)
  const [val, setVal] = createSignal('')
  const [sended, setSended] = createSignal(false)

  const valid = () => {
    if (flag()) {
      return val().length > 0
    } else {
      return val().length > 0
    }
  }

  const sendMsg = () => {
    if (valid()) {
      setSended(true)
    } else {
      alert(`输入的${flag() ? '邮箱地址' : '手机号码'}不能为空！！！`)
    }
  }

  const Send = () => {
    return (
      <div class={styles.Frame}>
	<div style={inforstyle}>
          在下面输入您的电子邮件地址或电话号码，<br />
	  我们将向您的电子邮箱或电话发送验证码。
	</div>
	<UserInput value={[val, setVal]} flag={[flag, setFlag]} />
	<div class={styles.Comment}>
	</div>
	<div class={styles.BigButton} onClick={sendMsg}>
          发送
	</div>
      </div>
    )
  }

  const Valid = () => {
    const [count, setCount] = createSignal(30)
    const intervalId = setInterval(() => setCount(c => c - 1), 1000)
    const countdown = () => {
      if (count() <= 0) {
	clearInterval(intervalId)
	return true
      } else {
	return false
      }
    }

    const rsndbtnstyl = {
      width: `40px`,
      cursor: 'pointer'
    }
    return (
      <div class={styles.Frame}>
	<div style={inforstyle}>
	  已发送验证码至
	  <a style={{cursor:'pointer'}} onClick={() => setSended(false)}>
           {val()}
          </a>
	  ,<br />
	  请将收到的验证码输入以进行验证。
	</div>
	<div class={styles.Input}>
	  <input placeholder='验证码' />
	  <Switch>
            <Match when={countdown()}>
	      <div style={rsndbtnstyl} onClick={() => alert("TODO!!")} >
                重发
	      </div>
            </Match>
            <Match when={!countdown()}>
              <div>已发送{count()}s</div>
            </Match>
          </Switch>
	</div>
	<div class={styles.Comment}>
	</div>
	<div class={styles.BigButton} onClick={() => alert("TODO!!!")}>
          验证
	</div>
      </div>
    )
  }

  return (
    <Switch>
      <Match when={sended()}>
	<Valid />
      </Match>
      <Match when={!sended()}>
	<Send />
      </Match>
    </Switch>
  )
}
