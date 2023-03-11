import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { MessageCardComponent } from './components/MessageCard/MessageCard.component';

import './style/main.css';

export const MessagesComponent: FC = () => {
 const state = useAppSelector((state) => state.messages);
 const dispatch = useAppDispatch();

 return (
  <div className="layoutMessage">
   <div>
    <span className="layoutMessage_messageTitle">Сообщения</span>
   </div>
   <div className="layoutMessage_messages">
    {state.messages.map((x) => {
     return <MessageCardComponent message={x} />;
    })}
   </div>
  </div>
 );
};
