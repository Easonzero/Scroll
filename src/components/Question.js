import React from 'react';
import styled from 'styled-components';

const Q = styled.section`
    background: -webkit-linear-gradient(-180deg,#19336B,#23356A);
    border: .02rem solid #999BC5;
    box-shadow: 0 0.07rem 0.14rem 0 #23356A;
    border-radius: .06rem;
    width: 4.26rem;
    padding: .22rem .3rem;
    line-height: .34rem;
    font-size: .24rem;
    color: #CDE1FF;
`;

const Question = ({text}) => {
    return (
        <Q>{text}</Q>
    );
};

export default Question