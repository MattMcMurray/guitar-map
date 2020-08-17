import React from 'react';
import { Fretboard } from './features/fretboard/Fretboard';
import { ControlPanel } from './features/controls/ControlPanel';
import { useSelector } from "react-redux";
import './App.css';

import { Typography } from 'antd';
import { Layout } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const { tuning } = useSelector((state) => state.controls);
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
            <Fretboard tuning={tuning || "E,A,D,G,B,E"}/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
