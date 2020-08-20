import React, { useState } from 'react';
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
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="App">
      <Layout style={{height: "100vh"}}>
        <Header>
          <Title level={1} style={{ color: "white" }}>GUITAR MAP</Title>
        </Header>
        <Layout>
          <Sider
            collapsible
            onCollapse={() => {
              console.log('collapse');
              console.log(showControls);
              setShowControls(!showControls)
            }}
          >
            <ControlPanel expandControls={showControls} />
          </Sider>
          <Content style={{height: "100%"}}>
            <div
              className="container"
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fretboard tuning={tuning || "E,A,D,G,B,E"}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
