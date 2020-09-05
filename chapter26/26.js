import React from ‘react‘;
import styled, { css } from ‘styled-components‘;
import { Link } from ‘react-router-dom‘;
import palette from ‘../../lib/styles/palette‘;


const buttonStyle = css`
  (…)



&:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
`;



(…)