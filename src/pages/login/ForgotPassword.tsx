import styles from './Login.module.css'
import { AiOutlineMail } from 'solid-icons/ai'
import { JSX, createSignal } from 'solid-js'

const inforstyle : JSX.CSSProperties = {
  "margin-bottom": `.8em`,
  "font-size": `15px`,
  "letter-spacing": `.5px`,
  "line-height": 1.8,
};

export default function() {
  return (
    <div class={styles.Frame}>
      <div style={inforstyle}>
        在下面输入您的电子邮件地址，<br />我们将向您发送一封包含说明的电子邮件。
      </div>
      <div class={styles.Input}>
        <AiOutlineMail style={{
          "margin-right": `10px`,
        }} />
        <input type='email' placeholder='邮箱' name='email' />
      </div>
      <div class={styles.Comment}>
      </div>
      <div class={styles.BigButton} onClick={() => alert("TODO!!!")}>
        发送
      </div>
    </div>
  )
}
