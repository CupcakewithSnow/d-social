import { IMenuItems } from "./Menu.interface";

export const MyMenu: IMenuItems[] = [
  {
    label: "Моя лента",
    key: 1,
    onClick: () => console.log("my short lent"),
  },
];
