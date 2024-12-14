import React from 'react';
import { Layout, Menu } from 'tdesign-react';
import type { MenuProps } from 'tdesign-react';
import classNames from 'classnames';
import styles from './layout.module.css';
import { useNavigate } from "react-router";
// import CTX from '../ctx/ctx'

const { Content, Footer, Aside } = Layout;
const { MenuItem } = Menu;

const Logo = () => <img width="136" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BasicDivider(props: { children: any, className?: any }) {
  const { children, className } = props
  console.log('className', className);

  const navigate = useNavigate();

  const goPages = (e: any) => {
    console.log('e', e);
    navigate(e)
  }

  function BasicUsage(props: MenuProps) {
    return (
      <Menu onChange={goPages} className={styles.menuCtx} logo={<Logo />} {...props}>
        <MenuItem value="/books">书籍管理</MenuItem>
        <MenuItem value="/authors">作家管理</MenuItem>
        <MenuItem value="3">侧边内容三</MenuItem>
        <MenuItem value="4">侧边内容四</MenuItem>
        <MenuItem value="5">侧边内容无</MenuItem>
      </Menu>
    );
  }

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
