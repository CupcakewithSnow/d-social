import { FC } from 'react';

export const MyFeedComponent: FC = () => {
 console.log(localStorage.getItem('token'));

 return <>MyFeed</>;
};
