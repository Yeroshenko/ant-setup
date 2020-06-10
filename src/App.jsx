import React from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd'

const { Header, Content, Footer } = Layout

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'>nav 1</Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={contentStyle}>
        <Button type='primary'>Primary Button</Button>
        <Button style={{ margin: '0 1rem' }}>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2020 Created by Yeroshenko
    </Footer>
  </Layout>
)

const contentStyle = {
  backgroundColor: '#fff',
  padding: '24px',
  minHeight: '280px',
  display: 'flex',
}

export default App
