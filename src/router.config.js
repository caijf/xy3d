import React from "react";
import {
  FileDoneOutlined,
  FunctionOutlined,
  WechatOutlined,
  CoffeeOutlined,
  OrderedListOutlined
} from "@ant-design/icons";

// pages
import Exception403 from "~/pages/exception/403";
import Exception404 from "~/pages/exception/404";
import Exception500 from "~/pages/exception/500";

import Tiku from "~/pages/tiku";
import YinCang from "~/pages/YinCang";
import Xiaojiqiao from "~/pages/xiaojiqiao";
import Strategies from "~/pages/strategies";
import YYS from "~/pages/yys";

// 这里为什么不使用 Layout，因为会有循环引用问题。比如 BasicLayout 依赖 menu，menu 依赖 routes，routes 依赖 BasicLayout
//
// 图标请使用 @ant-design/icons 引入的组件（https://ant.design/components/icon-cn/），或 图片地址。

export default {
  // 以下页面需要登录、权限，使用 BasicLayout 布局
  basic: [
    {
      path: "tiku",
      name: "科举答题器",
      icon: <FileDoneOutlined />,
      component: Tiku
    },
    {
      path: "xiaojiqiao",
      name: "小技巧",
      icon: <CoffeeOutlined />,
      component: Xiaojiqiao
    },
    {
      path: "yincang",
      name: "隐藏任务",
      icon: <OrderedListOutlined />,
      component: YinCang
    },
    {
      path: "strategies",
      name: "攻略合集",
      icon: <FunctionOutlined />,
      component: Strategies
    },
    {
      path: "yys",
      name: "痒痒鼠宝典",
      icon: <WechatOutlined />,
      component: YYS
    },
    {
      path: "exception",
      hideInMenu: true,
      routes: [
        {
          path: "403",
          name: "403",
          component: Exception403
        },
        {
          path: "404",
          name: "404",
          component: Exception404
        },
        {
          path: "500",
          name: "500",
          component: Exception500
        }
      ]
    }
  ]
};
