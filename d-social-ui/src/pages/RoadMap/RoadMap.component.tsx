import { FC } from 'react';

import { Timeline } from 'antd';

import { IRoadMapProps } from './RoadMap.interface';

export const RoadMapComponent: FC<IRoadMapProps> = (props) => {
 return (
  <Timeline
   items={[
    {
     color: 'green',
     children: (
      <>
       <p>
        <strong>Task:1</strong>
       </p>
       <p>Добавление ui и api проекта в репозиторий</p>
      </>
     ),
    },
    {
     color: 'green',
     children: (
      <>
       <p>
        <strong>Task:2</strong>
       </p>
       <p> Создания layout`a и route</p>
      </>
     ),
    },
    {
     color: 'green',
     children: (
      <>
       <p>
        <strong>Task:3</strong>
       </p>
       <p>
        Компонент <strong>Моя лента</strong>
       </p>
       <p>
        Компонент <strong>Новости</strong>
       </p>
       <p>
        Компонент <strong>Сообщения</strong>
       </p>
      </>
     ),
    },
    {
     children: (
      <>
       <p>
        <strong>Task:4</strong>
       </p>
       <p>
        API для <strong>Авторизации</strong>
       </p>
       <p>
        API для <strong>Сообщения</strong>
       </p>
       <p>
        API для <strong>Новости</strong>
       </p>
      </>
     ),
    },
    {
     color: 'gray',
     children: (
      <>
       <p>
        <strong>Task:5</strong>
       </p>
       <p>3D</p>
      </>
     ),
    },
    {
     color: 'gray',
     children: (
      <>
       <p>
        <strong>Task:6</strong>
       </p>
       <p>Внедрение тестов</p>
      </>
     ),
    },
   ]}
  />
 );
};
