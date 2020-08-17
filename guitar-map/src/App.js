import React from 'react';
import { Fretboard } from './features/fretboard/Fretboard';
import { ControlPanel } from './features/controls/ControlPanel';
import './App.css';

import { Typography } from 'antd';
import { Layout } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Title level={1} style={{ color: "white" }}>GUITAR MAP</Title>
        </Header>
        <Layout>
          <Sider>
            <ControlPanel />
          </Sider>
          <Content>
            <Fretboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
