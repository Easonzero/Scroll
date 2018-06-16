import React from 'react';
import styled from 'styled-components';
import Question from './Question';
import QuestionItem from './QuestionItem';

const QCover = styled.section`
    position: absolute;
    visibility: ${p => p.visible ? 'visible' : 'hidden'};
    opacity: ${p => p.visible ? '1' : '0'};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.3);
    transition: all 1s;
`;

const QContainer = styled.section`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 4.86rem;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
`;

const QList = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: .24rem;
    padding: 0;
`;

const QuestionList = ({hidden,text,qitemList,selected,select,itemAniEnd,listAniEnd}) => (
    <QCover visible={!hidden} onTransitionEnd={listAniEnd}>
        <QContainer>
            <Question key={"qhead"} {...{text}}/>
            <QList>
                {qitemList.map((q,i) => (
                    <QuestionItem
                        key={"q"+i}
                        {...q}
                        selected={selected===i}
                        onClick={select(i)}
                        itemAniEnd={itemAniEnd}
                    />
                ))}
            </QList>
        </QContainer>
    </QCover>
);

export default QuestionList