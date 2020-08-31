import React from "react";
import { observer } from "mobx-react-lite";
// import NoticeIcon from "./NoticeIcon";
import styles from "./BasicLayout.less";

function HeaderRightContent() {
  return (
    <div className={styles.headerRightContent}>{/* <NoticeIcon /> */}</div>
  );
}

export default observer(HeaderRightContent);
