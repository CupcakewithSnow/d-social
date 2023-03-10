import { Button } from 'antd';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { increment, incrementByAmount } from './state/MessagesState';
import './style/main.css';

export const MessagesComponent: FC = () => {
 const state = useAppSelector((state) => state.messages);
 const dispatch = useAppDispatch();

 return (
  <div className="layoutMessage">
   <div>{state.value}</div>
   <div>---------</div>
   <Button
    onClick={() => {
     dispatch(incrementByAmount(4));
    }}
   >
    Add
   </Button>
  </div>
 );
};
