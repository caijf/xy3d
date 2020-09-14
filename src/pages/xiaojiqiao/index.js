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
    content: ["大唐国境 —> 长寿村/宝象国", "长寿村 <—> 宝象国"],
    extra: (
      <>
        <p>
          平均5～7分钟一票。一般从大唐国境到长寿村就能完成。如果不行，就从长寿村到宝象国来回倒一次就可以（两地距离非常近）。
        </p>
        <p>如果卖出价格差一点，可以试着换线</p>
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
