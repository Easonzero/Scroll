import React from 'react';
import styled from 'styled-components';

const DynamicElement = styled.section`
    position: absolute;
    height:${p=>p.size.h};
    width:${p=>p.size.w};
    background: ${p=>p.img};
    top:${p=>p.from.y};
    left:${p=>p.from.x};
    transform: translate(${p=>p.animate?p.delt.x:0},${p=>p.animate?p.delt.y:0});
    transition: transform ${p=>p.d}s;
`;

const Dynamic = ({animate,img,size,from,delt,d}) => {
    return (
        <DynamicElement
            size={size} img={img}
            from={from} delt={delt}
            d={d} animate={animate}
        />
    );
}

export default Dynamic