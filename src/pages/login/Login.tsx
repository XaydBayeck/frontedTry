import styles from './Login.module.css'
import { AiOutlineMail } from 'solid-icons/ai'
import { IoKeyOutline } from 'solid-icons/io'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'solid-icons/ai'
import { createSignal } from 'solid-js'

export default function() {
  const [visibale, setVisibale] = createSignal(false);
  return (
      <div class={styles.Frame}>
        <div class={styles.Input}>
          <AiOutlineMail style={{
            "margin-right": `10px`,
          }}/>
          <input type='email' placeholder='邮箱' name='email'/>
        </div>
        <div class={styles.Comment}>
        </div>
        <div class={styles.Input}>
          <IoKeyOutline style={{
            "margin-right": `10px`,
          }} />
          <input type={visibale() ? 'text' : 'password'} placeholder='密码' name='password'/>
          <div onClick={() => setVisibale(!visibale())}
            style={{cursor: 'pointer'}}>
            {visibale() ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <div class={styles.Comment}>
        </div>
        <div class={styles.BigButton} onClick={() => alert("TODO!!!")}>
          登陆
        </div>
        <a class={styles.Link}>
          忘记密码？
        </a>
      </div>
  )
}
