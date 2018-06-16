import React from 'react'
import styled from 'styled-components';

const PlayerElement = styled.section`
    visibility: ${p => p.visible ? 'visible' : 'hidden'};
    position: absolute;
    height:${p=>p.size.h};
    width:${p=>p.size.w};
    background: ${p=>p.img};
    top:${p=>p.from.y};
    left:${p=>p.from.x};
    transform: translate(${p=>p.visible?p.delt.x:0},${p=>p.visible?p.delt.y:0});
    transition: transform ${p=>p.d}s;
`;

const Player = ({visible,img,size,from,delt,d,aniPlayerEnd}) => {
    return (
        <PlayerElement
            visible={visible} size={size} img={img}
            from={from} delt={delt} d={d} onTransitionEnd={aniPlayerEnd}
        />
    );
};

export default Player