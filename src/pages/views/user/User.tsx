import { Match, Switch, createSignal } from 'solid-js'
import navs from '../../../components/navs'
import styles from './User.module.css'
import { IconTypes } from 'solid-icons'
import { FaRegularUser } from 'solid-icons/fa'
import { BsCalendar3, BsCameraReels, BsCart } from 'solid-icons/bs'
import Basic from './Basic'

enum UserPages {
  Basic,
  Activities,
  Resources,
  Agend,
}

const { NavSide } = navs<UserPages>()

export default function() {
  const [nav, setNav] = createSignal<UserPages>(UserPages.Basic)

  const items: {label:UserPages, icon:IconTypes, content: string}[] = [
    {
      label: UserPages.Basic,
      icon: FaRegularUser,
      content: '基础信息'
    },
    {
      label: UserPages.Activities,
      icon: BsCameraReels,
      content: '活动管理'
    },
    {
      label: UserPages.Resources,
      icon: BsCart,
      content: '资源申视'
    },
    {
      label: UserPages.Agend,
      icon: BsCalendar3,
      content: '日程查看'
    },
  ]

  return (
    <div class={styles.Page}>
      <div class={styles.Window}>
        <NavSide label={[nav, setNav]} items={items} />
        <Switch>
          <Match when={nav() == UserPages.Basic}>
            <Basic />
          </Match>
          <Match when={nav() == UserPages.Activities}>
            <Basic />
          </Match>
          <Match when={nav() == UserPages.Resources}>
            <Basic />
          </Match>
          <Match when={nav() == UserPages.Agend}>
            <Basic />
          </Match>
        </Switch>
      </div>
    </div>
  )
}
