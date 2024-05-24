import { Match, Switch, createSignal } from 'solid-js'
import styles from './Login.module.css'
import Login from './Login'
import { FaRegularUser } from 'solid-icons/fa'
import { BiSolidEdit } from 'solid-icons/bi';
import { AiOutlineLock } from 'solid-icons/ai'
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import navs from '../../components/navs';
import { IconTypes } from 'solid-icons';

type LoginNavKind = "login" | "regist" | "find password"
const { NavSide } = navs<LoginNavKind>()

export default function() {
  const [nav, setNav] = createSignal<LoginNavKind>("login")

  const items: {label:LoginNavKind, icon: IconTypes, content: string}[] = [
    {
      label: "login",
      icon: FaRegularUser,
      content: "登陆",
    },
    {
      label: "regist",
      icon: BiSolidEdit,
      content: "登陆",
    },
    {
      label: "find password",
      icon: AiOutlineLock,
      content: "登陆",
    },
  ]

  return (
    <div class={styles.Page}>
      <div class={styles.Window}>
        <NavSide label={[nav, setNav]} items={items} />
        <Switch>
          <Match when={nav() == "login"}>
            <Login />
          </Match>
          <Match when={nav() == "regist"}>
            <Register />
          </Match>
          <Match when={nav() == "find password"}>
            <ForgotPassword />
          </Match>
        </Switch>
      </div>
    </div>
  )
}
