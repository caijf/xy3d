import React from "react";
import { Descriptions, Card, Divider } from "antd";
import { numberToChinese } from "util-helpers";
import PageHeaderWrapper from "~/components/PageHeaderWrapper";

const data = [
  {
    name: "江洋大盗",
    map: "大唐国境",
    npc: "赵小虾",
    coord: "92.335",
    content: "接到任务自动寻路消灭：劫匪头目2个。",
    award: "+2点人气"
  },
  {
    name: "打井水",
    map: "大唐国境",
    npc: "赵薰子(144.328)/张老头(208.279)/谷爷爷(214,209)/李大娘(99.162)",
    coord: "144.328",
    content: "提前打好井水(水井在 179.329 或 119.252)，可提交2次。",
    award: "+2点人气"
  },
  {
    name: "偷懒虾兵",
    map: "龙宫",
    npc: "偷懒虾兵",
    coord: "537.530",
    content: "温柔的叫醒他（2点）/拳脚的招呼（4点）。",
    award: "+2/4点人气"
  },
  {
    name: "找兔子叽叽",
    map: "花果山",
    npc: "丢东西的老马猴",
    coord: "316.250",
    content: "抱起兔子走到老马猴旁边放下。",
    award: "+2点人气"
  },
  {
    name: "狮驼演武",
    map: "大唐境外",
    npc: "鲁格",
    coord: "1638.2160",
    content: "打完架扶起NPC",
    award: "+2点人气"
  },
  {
    name: "摘桃子给猴子",
    map: "花果山",
    npc: "-",
    coord: "370.577",
    content:
      "捡起石头，对准桃子，等变成金黄色，才能打下来。得到桃子以后就可以找到猴子（绿色名称），喂给他吃。（一般在喂4～6个的时候给东西，一天只能得一次奖励）",
    award: "猴子的馈赠（银币/药/宝石/人气香/没用的桃树皮等）"
  }
];

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        {data.map((item, index) => (
          <div key={item.name}>
            <Descriptions title={`${numberToChinese(index + 1)}、${item.name}`}>
              <Descriptions.Item label="地图">{item.map}</Descriptions.Item>
              <Descriptions.Item label="任务NPC">{item.npc}</Descriptions.Item>
              <Descriptions.Item label="坐标">{item.coord}</Descriptions.Item>
              <Descriptions.Item label="详细" span={3}>
                {item.content}
              </Descriptions.Item>
              <Descriptions.Item label="奖励" span={3}>
                {item.award}
              </Descriptions.Item>
            </Descriptions>
            <Divider />
          </div>
        ))}
      </Card>
    </PageHeaderWrapper>
  );
};
