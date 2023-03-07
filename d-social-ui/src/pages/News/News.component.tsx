import { FC, useEffect, useState } from "react";

import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { INews } from "./service/news.interface";
import { NewsService } from "./service/news.service";

export const NewsComponent: FC = () => {
  const service = new NewsService();

  const [data, setData] = useState<INews[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(true);

  useEffect(() => {
    service.GetPostsAsync().then((res) => {
      setData(res);
      setIsSubmitting(false);
    });
    return () => console.log("destroy");
  }, []);

  return (
    <>
      {isSubmitting ? (
        <LoadingOutlined />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.body}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
};
