import React from 'react';
import styled from 'styled-components';
import Dynamic from './Dynamic';
import Static from './Static';
import Player from './Player';

const Bg = styled.section`
    position:relative;
    height:19.34rem;
    width:100%;
    background: url(${p=>process.env.PUBLIC_URL+p.bg}) center no-repeat;
    background-size: 100% 100%;
`;

const Stage = ({aniStage,bg,dyList,stList,player,aniPlayerEnd}) => (
    <Bg bg={bg}>
        {[
            ...dyList.map((dy,i) =>
                <Dynamic
                    key={"dy"+i}
                    animate={aniStage}
                    {...dy}
                />
            ),
            ...stList.map((st,i) =>
                <Static
                    key={"st"+i}
                    {...st}
                />
            )
        ]}
        <Player
            {...player}
            aniPlayerEnd={aniPlayerEnd}
        />
    </Bg>
);

export default Stage