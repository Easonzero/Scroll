import React from 'react';
import styled from 'styled-components';
import bright from '../animate/bright';

const QItem = styled.li`
    background: #23356a;
    border: .02rem solid #999bc5;
    box-shadow: 0 0.07rem 0.14rem 0 #23356a;
    border-radius: .06rem;
    width: 4.26rem;
    padding: .22rem .3rem;
    line-height: .36rem;
    height: .34rem;
    font-size: .24rem;
    color: #cde1ff;
    margin-bottom: .14rem;
    transition: all .5s;
    opacity: .6;
    ${p=>p.selected&&`animation: ${bright} .4s 2 alternate;`};
`;
const QuestionItem = ({index,text,selected,onClick,itemAniEnd}) => (
    <QItem selected={selected} onClick={onClick} onAnimationEnd={itemAniEnd}>{index+'. '+text}</QItem>
);

export default QuestionItem