import React from "react";
import { Divider, Card } from "antd";
import PageHeaderWrapper from "~/components/PageHeaderWrapper";
import data from "./data";

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        {data.map(item => (
          <div key={item.name}>
            <Divider orientation="left">{item.name}</Divider>
            {item.content && item.content.length > 0 && (
              <ul>
                {item.content.map(ctxItem => (
                  <li key={ctxItem.title}>
                    <a href={ctxItem.link} target="_blank" rel="noreferrer">
                      {ctxItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {item.extra}
          </div>
        ))}
      </Card>
    </PageHeaderWrapper>
  );
};
