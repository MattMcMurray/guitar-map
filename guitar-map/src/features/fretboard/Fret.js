import React from 'react';

import { Button } from 'antd';

export function Fret(props) {

    const Div  = 
    return (
        <div
            style={{
                height: "50px",
                width: props.width
            }}
        >{props.children}</div>
    );
}