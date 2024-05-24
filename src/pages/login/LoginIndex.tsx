import { JSX, Match, Switch, createSignal } from 'solid-js'
import styles from './Login.module.css'
import Login from './Login'
import { FaRegularUser } from 'solid-icons/fa'
import { BiSolidEdit } from 'solid-icons/bi';
import { AiOutlineLock } from 'solid-icons/ai'
import Register from './Register';
import ForgotPassword from './ForgotPassword';

type LoginNavKind = "login" | "regist" | "find password"

export default function() {
  const [nav, setNav] = createSignal<LoginNavKind>("login")
  const tabactive = (label: LoginNavKind) => nav() == label;
  const Tab = (props: { label: LoginNavKind, children?: JSX.Element }) => {
    const logocolor = () => tabactive(props.label) ? 'white' : 'black';
    const logo = () => {
      switch (props.label) {
        case 'login': return <FaRegularUser size={24} color={logocolor()} />;
        case 'regist': return <BiSolidEdit size={24} color={logocolor()} />;
        case 'find password': return <AiOutlineLock size={24} color={logocolor()} />;
      }
    }
    const tabclasses = () => {
      return {
        [styles.Tab]: true,
        [styles.TabActive]: tabactive(props.label),
      }
    };
    return (
      <div classList={tabclasses()} onClick={() => setNav(props.label)}>
        <div class={styles.TabLogo}>
          {logo()}
        </div>
        {props.children}
      </div>
    );
  };

  return (
    <div class={styles.Page}>
      <div class={styles.Window}>
        <div class={styles.TabNav}>
          <Tab label='login'>登陆</Tab>
          <Tab label='regist'>注册</Tab>
          <Tab label='find password'>找回密码</Tab>
        </div>
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
