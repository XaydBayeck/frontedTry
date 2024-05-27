import { Switch } from 'solid-js'
import { FaRegularUser } from 'solid-icons/fa'
import { BsCalendar3, BsCameraReels, BsCart } from 'solid-icons/bs'
import Basic from './Basic'
import { Frame, Page } from '../../../components/page'
import { Tab, TabIcon, Tabs } from '../../../components/tabs'

enum UserPages {
  Basic,
  Activities,
  Resources,
  Agend,
}

export default () => (
    <Page default={UserPages.Basic}>
      <Tabs>
        <Tab label={UserPages.Basic}>
          <TabIcon icon={FaRegularUser} />
          基础信息
        </Tab>
        <Tab label={UserPages.Activities}>
          <TabIcon icon={BsCameraReels} />
          活动管理
        </Tab>
        <Tab label={UserPages.Resources}>
          <TabIcon icon={BsCart} />
          资源申视
        </Tab>
        <Tab label={UserPages.Agend}>
          <TabIcon icon={BsCalendar3} />
          日程查询
        </Tab>
      </Tabs>
      <Switch>
        <Frame label={UserPages.Basic}>
          <Basic />
        </Frame>
        <Frame label={UserPages.Activities}>
          <Basic />
        </Frame>
        <Frame label={UserPages.Resources}>
          <Basic />
        </Frame>
        <Frame label={UserPages.Agend}>
          <Basic />
        </Frame>
      </Switch>
    </Page>
  )
