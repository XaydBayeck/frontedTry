import { IconTypes } from "solid-icons";
import { Signal, createContext, useContext } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

type Style = JSX.CSSProperties

const tab: Style = {
  padding: `20px 20px`,
  "font-size": `17px`,
  cursor: 'pointer',
}

const tabs: Style = {
  background: 'white',
  "margin-right": `10px`,
}

const logo: Style = {
  "margin-bottom": `7.8px`,
}

export const Context = createContext<Signal<number | string>>()
const Label = createContext<number | string>()

export const Tabs = (props: {children: JSX.Element}) => <div style={tabs}>
  {props.children}
</div>

export const Tab = (props: {
  label: number | string,
  children: JSX.Element
}) => {
  const [label, setLabel] = useContext(Context) ?? [null, null]
  const active = () => props.label == label?.()
  const activeStyle: () => Style = () => Object.assign({}, tab, active() ? {
    background:`#00ad45`, 
    color: `white`
  } : {})

  return (
    <div style={activeStyle()} onClick={() => setLabel?.(props.label)}>
      <Label.Provider value={props.label}>
        {props.children}
      </Label.Provider>
    </div>
  )
}

export const TabIcon = (props:{icon: IconTypes}) => {
  const [label] = useContext(Context) ?? [null, null]
  const tablabel = useContext(Label)
  const color = () => label?.() == tablabel ? 'white' : 'black'
  return (
    <div style={logo}>
      <props.icon size={24} color={color()} />
    </div>
  )
}

// <Page>
//   <Tabs>
//     <Tab label='login'>
//       <TabIcon icon={UserIcon}/>
//       "登陆"
//     </Tab>
//   </Tabs>
//   ...
//   <Frames>
//     <Frame label='login'>
//       ...
//     </Frame>
//   </Frames>
//   ...
// </Page>
