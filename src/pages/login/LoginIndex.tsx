import { Switch } from 'solid-js'
import Login from './Login'
import { FaRegularUser } from 'solid-icons/fa'
import { BiSolidEdit } from 'solid-icons/bi';
import { AiOutlineLock } from 'solid-icons/ai'
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { Frame, Page } from '../../components/page';
import { Tab, TabIcon, Tabs } from '../../components/tabs';

enum TabKind {
  Login, Regist, FindPassword
}

export default () => (
    <Page default={TabKind.Login}>
      <Tabs>
        <Tab label={TabKind.Login}>
          <TabIcon icon={FaRegularUser} />
          登陆
        </Tab>
        <Tab label={TabKind.Regist}>
          <TabIcon icon={BiSolidEdit} />
          注册
        </Tab>
        <Tab label={TabKind.FindPassword}>
          <TabIcon icon={AiOutlineLock} />
          找回密码
        </Tab>
      </Tabs>
      <Switch>
        <Frame label={TabKind.Login}>
          <Login />
        </Frame>
        <Frame label={TabKind.Regist}>
          <Register />
        </Frame>
        <Frame label={TabKind.FindPassword}>
          <ForgotPassword />
        </Frame>
      </Switch>
    </Page>
  )
