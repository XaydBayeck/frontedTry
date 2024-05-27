import { Button, FormControl, Image, InputGroup } from 'solid-bootstrap'
import styles from './User.module.css'
import { createStore } from 'solid-js/store'

export default function() {
  const [user, setUser] = createStore({
    name: '',
    avatar: 'https://api.dicebear.com/8.x/shapes/svg?seed=Felix',
    role: '',
    email: '',
  })

  const [disp, setDisp] = createStore({
    name: true,
    avatar: true,
    role: true,
    email: true,
  })

  return <>
    <Image src={user.avatar} roundedCircle />
    <Button variant='secondary' onClick={() => alert("TODO!!")}>修改</Button>
    <InputGroup class=''>
      <Button variant='outline-secondary'
        onClick={() => setDisp('name', !disp.name)}>
        用户名
      </Button>
      <FormControl value={user.name}
        readOnly={disp.name}
        onInput={(e) => setUser('name', e.currentTarget.value)}
      />
    </InputGroup>
    <InputGroup class=''>
      <Button variant='outline-secondary'
        onClick={() => setDisp('role', !disp.role)}>
        角色
      </Button>
      <FormControl value={user.role}
        readOnly={disp.role}
        onChange={(e) => setUser('role', e.currentTarget.value)}
      />
    </InputGroup>
    <InputGroup class=''>
      <Button variant='outline-secondary'
        onClick={() => setDisp('email', !disp.email)}
        >
        邮箱
      </Button>
      <FormControl value={user.email}
        readOnly={disp.email}
        onChange={(e) => setUser('email', e.currentTarget.value)}
      />
    </InputGroup>
  </>
}
