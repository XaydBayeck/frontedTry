import { JSX } from 'solid-js/jsx-runtime'
import styles from './navs.module.css'
import { Accessor, For, Setter, createContext, useContext } from 'solid-js'
import { IconTypes } from 'solid-icons'

export default function <K>() {
  type Ctx = {
    label: Accessor<K>,
    setLabel: Setter<K>,
  }

  const Context = createContext<Ctx>()

  type NavProps = {
    label: [Accessor<K>, Setter<K>],
    children: JSX.Element
  }

  type TabProps = {
    label: K
    children: JSX.ArrayElement
  }

  type Items = {
    label: K,
    icon: IconTypes,
    content: JSX.Element,
  }[]

  type NavSideProps = {
    label: [Accessor<K>, Setter<K>],
    items: Items
  }

  const TabNav = (props: NavProps) => {
    const [label, setLabel] = props.label
    return (
      <div class={styles.TabNav}>
        <Context.Provider
          value={{
            label,
            setLabel
          }}>
          {props.children}
        </Context.Provider>
      </div>
    )
  }

  const Tab = (props: TabProps) => {
    const [logo, children] = props.children
    const ctx = useContext(Context)

    const classes = () => {
      return {
        [styles.Tab]: true,
        [styles.TabActive]: props.label == ctx?.label()
      }
    }

    return (
      <div classList={classes()} onClick={() => ctx?.setLabel(() => props.label)}>
        <div class={styles.TabLogo}>
          {logo}
        </div>
        {children}
      </div>
    )
  }

  const NavSide = (props: NavSideProps) => {
    const logocolor = (label: K) => props.label[0]() == label ? 'white' : 'black'
    return (
      <TabNav label={props.label}>
        <For each={props.items}>
          {(item) => (
            <Tab label={item.label}>
              <item.icon size={24} color={logocolor(item.label)} />
              {item.content}
            </Tab>
          )}
        </For>
      </TabNav>
    )
  }
  return {
    TabNav,
    Tab,
    NavSide
  }
}
