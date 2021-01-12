import React from "react";
import { Divider, Card } from "antd";
import { numberToChinese } from "util-helpers";
import PageHeaderWrapper from "~/components/PageHeaderWrapper";
import imageDyt01 from "~/assets/images/dyt01.jpg";

const data = [
  {
    name: "快速跳到大雁塔顶",
    content: [
      "依次点击右侧功能“行游录-行历-回顾-第一回 万鬼长安”",
      "找到紧挨着上边俩视频中，靠下的哪一个（如下图）",
      "点击播放视频之后观看或者直接跳过就直接被祥云送到大雁塔顶端了"
    ],
    extra: <img src={imageDyt01} alt="" style={{ maxWidth: "100%" }} />
  },
  {
    name: "跑商路线(推荐)",
    content: ["大唐国境 —> 鬼市/宝象国"],
    extra: (
      <>
        <p>
          平均4分钟左右一票。（跑商金额达到要求后，点击【活动】-【降妖试炼】再退出，可以快速回到长安）
        </p>
        <p>如果卖出价格差一点，可以试着换线，不同分线价格有差异。</p>
      </>
    )
  },
  {
    name: "洗宝宝",
    content: [
      "洗到珍品或多技能的就留着，换另一只洗",
      "珍品可以卖或合，多技能可以合",
      "珍品多技能且资质还成的，可自用"
    ]
  },
  {
    name: "兽决评分",
    content: [
      "低书60、高书180：精准，慧根，精神，止痛，延伸，法术波动，防御，固法，招架，反震，守卫，庇护，愈合，谨慎，毒，极限，敏捷，固守，扰乱，信仰，铁壁，驱鬼，当先",
      "低书70、高书210：吸血，强力，隐身，感知，修灵，截流，坚韧，魂佑，冥思，再生，替身，偷袭，技巧，斥敌",
      "低书80、高书240：会心，突进，连击，暗刃，魔心，吟法，法连，法爆",
      "低书100、高书300：鬼魂、神佑"
    ]
  },
  {
    name: "积分兑换",
    content: [
      "队长积分：每天5个队长礼盒（有几率五宝）",
      "副本积分：换吉祥锦囊（卖金币）",
      "侠士积分：宝石锤",
      "门派积分：礼盒",
      "三才积分：附灵符"
    ]
  },
  {
    name: "五行练气（可能有误，仅供参考）",
    content: [
      "140以下=60书铁晶石",
      "140～159=70书铁晶石",
      "160～189=80书铁晶石",
      "190以上=90书铁晶石",
      "建议：五宝兽决高花乐留到最后5个，看分数到不了160就全取消了（因为70不值钱）。"
    ]
  },
  {
    name: "其他",
    content: [
      "省钱：月华露中和大最好是卖银币，小的可以吃。宝宝升级挂日常一条相当月华露几百万银币",
      "游历值：每20点增加10点魔法（主支线、逸闻、知交（众生谱/知音谱每天赠礼500点）等方式获取）",
      "人气值：到1万点时，气血上限+350点（每天烧香+5个日常人气任务）"
    ]
  }
];

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        {data.map((item, index) => (
          <div key={item.name}>
            <Divider orientation="left">
              {numberToChinese(index + 1)}、{item.name}
            </Divider>
            {item.content && item.content.length > 0 && (
              <ol>
                {item.content.map(ctxItem => (
                  <li key={ctxItem}>{ctxItem}</li>
                ))}
              </ol>
            )}
            {item.extra}
          </div>
        ))}
      </Card>
    </PageHeaderWrapper>
  );
};
