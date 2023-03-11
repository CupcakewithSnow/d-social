import Card from 'antd/es/card/Card';
import { FC } from 'react';
import { Avatar } from 'antd';

import { IMessageCardProps } from './MessageCard.interface';
import './MessageCard.css';

export const MessageCardComponent: FC<IMessageCardProps> = (props) => {
 const key: number = Math.floor(Math.random() * 100);
 return (
  <div className="card">
   <div className="card_avatar">
    <Avatar size={50} src={`https://joesch.moe/api/v1/random?key=${key}`} />
   </div>
   <div className="card_message">
    <div className="message_title">
     <span className="title">{props.message.userName}</span>
    </div>
    <div className="message_body">
     <span>{props.message.message}</span>
    </div>
   </div>
  </div>
 );
};
