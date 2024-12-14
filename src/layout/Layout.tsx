import React from 'react';
import { Layout, Menu } from 'tdesign-react';
import type { MenuProps } from 'tdesign-react';
import classNames from 'classnames';
import styles from './layout.module.css';
// import CTX from '../ctx/ctx'

const { Content, Footer, Aside } = Layout;
const { MenuItem } = Menu;

const Logo = () => <img width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />;

function BasicUsage(props: MenuProps) {
  return (
    <Menu className={styles.menuCtx} logo={<Logo />} {...props}>
      <MenuItem value="1">侧边内容一</MenuItem>
      <MenuItem value="2">侧边内容二</MenuItem>
      <MenuItem value="3">侧边内容三</MenuItem>
      <MenuItem value="4">侧边内容四</MenuItem>
      <MenuItem value="5">侧边内容无</MenuItem>
    </Menu>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BasicDivider(props: { children: any, className: any }) {
  const { children, className } = props
  console.log('className', className);

  return (
    <div className={classNames(styles.homeCtx)}>
      <Layout>
        <Aside>
          <BasicUsage />
        </Aside>
        <Layout>
          <Content className={className}>
            {children}
          </Content>
          <Footer>Copyright @ 2019-2020 Tencent. All Rights Reserved</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
