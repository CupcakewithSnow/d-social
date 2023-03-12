import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

interface Item {
 label: React.ReactNode;
 key: React.Key;
 onClick: () => void;
 icon?: React.ReactNode;
}

export function getItem(item: Item): MenuItem {
 return {
  key: item.key,
  icon: item.icon,
  label: item.label,
  onClick: item.onClick,
 } as MenuItem;
}
