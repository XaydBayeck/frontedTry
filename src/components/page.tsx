import { JSX, Match, Switch, createSignal, useContext } from "solid-js";
import { Context } from './tabs'

type Style = JSX.CSSProperties

const page: Style = {
  display: "flex",
  "justify-content": 'center',
  "align-items": 'center'
}

const window: Style = {
  display: 'flex'
}

const frame: Style = {
  padding: `32px`,
  background: 'white',
  display: 'flex',
  "flex-direction": 'column',
  gap: `10px`,
}

export const Page = (props: {
  default?: number | string,
  children: JSX.Element
}) => {
  const label = createSignal(props.default ?? 0)

  return (
    <div style={page}>
      <div style={window}>
        <Context.Provider value={label}>
          {props.children}
        </Context.Provider>
      </div>
    </div>
  )
}

export const Frame = (props: {
  label: number | string,
  children: JSX.Element
}) => {
  const [label] = useContext(Context) ?? []
  const change = (el: HTMLDivElement) => {
  }

  return <Match when={label?.() == props.label}>
    <div style={frame} ref={change}>
      {props.children}
    </div>
  </Match>
}
