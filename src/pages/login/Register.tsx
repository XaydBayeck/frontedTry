import styles from './Login.module.css'
import { AiOutlineMail } from 'solid-icons/ai'
import { IoKeyOutline } from 'solid-icons/io'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'solid-icons/ai'
import { createSignal } from 'solid-js'
import UserInput from './UserInput'

export default function() {
  const [visibale0, setVisibale0] = createSignal(false);
  const [visibale1, setVisibale1] = createSignal(false);

  return (
    <div class={styles.Frame}>
      <UserInput />
      <div class={styles.Comment}>
      </div>
      <div class={styles.Input}>
        <IoKeyOutline style={{
          "margin-right": `10px`,
        }} />
        <input type={visibale0() ? 'text' : 'password'} placeholder='密码' name='password' />
        <div onClick={() => setVisibale0(!visibale0())}
          style={{ cursor: 'pointer' }}>
          {visibale0() ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      </div>
      <div class={styles.Comment}>
      </div>
      <div class={styles.Input}>
        <IoKeyOutline style={{
          "margin-right": `10px`,
        }} />
        <input type={visibale1() ? 'text' : 'password'} placeholder='确认密码' name='password' />
        <div onClick={() => setVisibale1(!visibale1())}
          style={{ cursor: 'pointer' }}>
          {visibale1() ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      </div>
      <div class={styles.Comment}>
      </div>
      <div class={styles.BigButton} onClick={() => alert("TODO!!!")}>
        注册
      </div>
    </div>
  )
}
