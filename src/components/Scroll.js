import React from 'react';
import styled from 'styled-components';
import Stage from './Stage';

const ScrollView = styled.section`
    height:100%;
    width:100%;
    display : ${p=>p.hidden ? "none" : "block"};
    transform: translate(0,${p=>-p.offsetY}rem);
    transition: transform 1s;
`;

const Scroll = ({hidden,offsetY,stageList,scrollEnd,aniPlayerEnd}) => (
    <ScrollView offsetY={offsetY} hidden={hidden} onTransitionEnd={scrollEnd}>
        {stageList.map((stage,i) =>
            <Stage
                key={i}
                {...stage}
                aniPlayerEnd={aniPlayerEnd}
            />
        ).reverse()}
    </ScrollView>
);

export default Scroll