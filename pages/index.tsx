import Head from 'next/head'
import { AlignLeft, ArrowLeft, DollarSign, Home, Plus, Search, Settings } from '@geist-ui/icons'
import { Page, Text, Tabs, Button, Grid, Drawer, Input, Spacer, Tag } from '@geist-ui/core'
import List from '../components/List'
import { useState } from 'react'

export default function Index() {
  const [drawer, setDrawer] = useState(false)

  return (
    <div>
      <Page className='page' >
        <Page.Content py={0.5}>
          <div className='header'>
            <p>JANUARY</p>
            <h2>-11457.0</h2>
          </div>
          <Tabs initialValue="1" align="center" leftSpace={0} hideDivider >
            <Tabs.Item label={<><Home /> Home</>} value="1" >
              <div className='tab-content'>
                <List />
              </div>
            </Tabs.Item>
            <Tabs.Item label={<><Search /> Search  </>} value="2" >
              <div className='tab-content'>
                <Spacer h={1} />
                <Input iconRight={<Search />} placeholder="Search Transation" scale={4 / 3} crossOrigin={undefined} width="100%" />
              </div>
            </Tabs.Item>
            <Tabs.Item label={<><Settings /> Settings </>} value="3" >
              <div className='tab-content'>
                <Text mt={0}>The Components of React looks very cool.</Text>
              </div>
            </Tabs.Item>
          </Tabs>
          <div className="footer">
            <Button type="secondary-light" onClick={() => setDrawer(!drawer)} icon={<Plus />} auto scale={0.75} >Transaction</Button>
          </div>
        </Page.Content>
      </Page>
      <Drawer className='drawer' visible={drawer} onClose={() => setDrawer(false)} placement={'bottom'}>
        <Drawer.Title >Transaction</Drawer.Title>
        <Drawer.Subtitle>Where you spent ?</Drawer.Subtitle>
        <Drawer.Content >
          <div className="drawer-content">

            <Input width="100%" icon={<AlignLeft />} scale={4 / 3} placeholder="Description" crossOrigin={undefined} />
            <Spacer h={.5} />
            <Input width="100%" icon={<DollarSign />} scale={4 / 3} placeholder="Amount" crossOrigin={undefined} />
            <Spacer h={.5} />
            <p>Transaction Tag:</p>
            <Tag type="default" margin={0.3}>Default</Tag>
            <Tag type="success" margin={0.3}>Success</Tag>
            <Tag type="warning" margin={0.3}>Warning</Tag>
            <Tag type="error" margin={0.3}>Error</Tag>
            <Tag type="secondary" margin={0.3}>Secondary</Tag>
            <Spacer h={.5} />
            <div className='text-center'>
              <Button auto type="abort" onClick={() => setDrawer(false)}>Cancel</Button>
              <Button auto type="secondary-light" onClick={() => setDrawer(false)}>Create</Button>
            </div>

          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  )
}
