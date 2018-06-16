import React from 'react';
import styled from 'styled-components';

const StaticElement = styled.section`
    position: absolute;
    height:${p=>p.size.h};
    width:${p=>p.size.w};
    background: ${p=>p.img};
    top:${p=>p.pos.y};
    left:${p=>p.pos.x}
`;

const Static = ({img,size,pos}) => (
    <StaticElement img={img} size={size} pos={pos}/>
);

export default Static