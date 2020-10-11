import React from "react";
import { Divider, Card, Collapse } from "antd";
import PageHeaderWrapper from "~/components/PageHeaderWrapper";
import data from "./data";

const { Panel } = Collapse;

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
            {item.extra && (
              <Collapse>
                <Panel header={`查看${item.name}补充`} key="1">
                  {item.extra}
                </Panel>
              </Collapse>
            )}
          </div>
        ))}
      </Card>
    </PageHeaderWrapper>
  );
};
