import { ContainerOutlined, InsertRowLeftOutlined, MailOutlined, LineChartOutlined } from '@ant-design/icons';

import { IMenuItem } from './Menu.interface';

export const MyMenu: IMenuItem[] = [
 {
  key: 1,
  label: 'Моя лента',
  path: '/feed',
  icon: <InsertRowLeftOutlined />,
 },
 {
  key: 2,
  label: 'Новости',
  path: '/news',
  icon: <ContainerOutlined />,
 },
 {
  key: 3,
  label: 'Сообщения',
  path: '/messages',
  icon: <MailOutlined />,
 },
 {
  key: 4,
  label: 'Дорожная карта',
  path: '/roadmap',
  icon: <LineChartOutlined />,
 },
];
