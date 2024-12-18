import Layout from '../layout/Layout';
import React, { useEffect, useState } from 'react';
import { Table, Checkbox, Radio, Space, Tag, Button, Form, Input } from 'tdesign-react';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-react';
import stylescss from './books.module.css';
import { createStyles } from 'antd-style';
import BookDetail from './BookDetaily';
import SaveBook from './SaveBook';

const { FormItem } = Form;

type Layout = 'vertical' | 'inline';

import type { TableProps } from 'tdesign-react';

const useStyles = createStyles(({ token, css }) => ({
  // 支持 css object 的写法
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // 也支持通过 css 字符串模板获得和 普通 css 一致的书写体验
  card: css`
    color: ${token.colorTextTertiary};
    box-shadow: ${token.boxShadow};
    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }

    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};
    transition: all 100ms ${token.motionEaseInBack};

    margin-bottom: 8px;
    cursor: pointer;
  `,
}));

const data: TableProps['data'] = [];
const total = 28;

for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    applicant: ['贾明', '张三', '王芳'][i % 3],
    status: i % 3,
    channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    },
    matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  });
}

const statusNameListMap = {
  0: { label: '审批通过', theme: 'success', icon: <CheckCircleFilledIcon /> },
  1: { label: '审批失败', theme: 'danger', icon: <CloseCircleFilledIcon /> },
  2: { label: '审批过期', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
};


const Books = () => {
  const { styles, cx, theme } = useStyles();
  const [visibleDetaile, setVisibleDetaile] = useState<boolean>(false);
  const [visibleSaveBook, setVisibleSaveBook] = useState<boolean>(false);
  const [booksList, setBooksList] = useState([]);

  const showView = (data: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log('e', data)
    setVisibleDetaile(true)
  }

  const getBooksListFun = async () => {
    const response = await fetch('/api/books?pageNum=1&pageSize=10', 
    { 
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((data:{
      success: boolean,
      data: []
    }) => {
      if(data.success) {
        setBooksList([...data.data])
      }
    })
  }

  useEffect(() => {
    getBooksListFun();
  }, [])

  const table = (
    <Table
      data={booksList}
      columns={[
        {
          colKey: 'name',
          title: '标题',
        },
        { colKey: 'sub_name', title: '副标题', width: 100,},
        { colKey: 'author', title: '作者', width: 100, ellipsis: true },
        { colKey: 'publishing_house', title: '出版社' },
        { colKey: 'year_of_publication', title: '出版时间', width: 120, },
        { colKey: 'ISBN', title: 'ISBN' },
        { colKey: 'operator', title: '操作', fixed: 'right', cell: ({ row }) => (
          <Space>
            <Button variant="outline" theme="default" onClick={(row) => showView(row)}>查看</Button>
            <Button theme="primary" variant="base">编辑</Button>
            <Button theme="danger" variant="outline">删除</Button>
          </Space>
          )
        }
      ]}
      rowKey="index"
      verticalAlign="top"
      size='large'
      bordered={true}
      hover={true}
      stripe={true}
      showHeader={true}
      tableLayout='fixed'
      rowClassName={({ rowIndex }) => `${rowIndex}-class`}
      cellEmptyContent={'-'}
      resizable
      // 与pagination对齐
      pagination={{
        defaultCurrent: 2,
        defaultPageSize: 5,
        total,
        showJumper: true,
        onChange(pageInfo) {
          console.log(pageInfo, 'onChange pageInfo');
        },
        onCurrentChange(current, pageInfo) {
          console.log(current, pageInfo, 'onCurrentChange current');
        },
        onPageSizeChange(size, pageInfo) {
          console.log(size, pageInfo, 'onPageSizeChange size');
        },
      }}
      onPageChange={(pageInfo) => {
        console.log(pageInfo, 'onPageChange');
      }}
      onRowClick={({ row, index, e }) => {
        console.log('onRowClick', { row, index, e });
      }}
    />
  );

  return (
    <Layout className={stylescss.ctxWrap}>
      <Space direction="vertical">
        <Space direction="vertical">
          <Form layout='inline' labelWidth={60} colon={true}>
            <FormItem label="标题" name="name">
              <Input />
            </FormItem>
            <FormItem label="作者" name="name">
              <Input />
            </FormItem>
            <FormItem label="ISBN" name="password">
              <Input />
            </FormItem>
            <FormItem label="" name="password">
              <Button theme="primary" variant="base">查询</Button>
            </FormItem>
          </Form>
        </Space>
        <Space className={stylescss.operatorWrap}>
          <Button theme="primary" variant="base" onClick={() => setVisibleSaveBook(true)}>新建</Button>
          <Button theme="primary" variant="base">导入</Button>
        </Space>
        {table}
      </Space>

      {/* 书籍详情 */}
      <BookDetail
        visibleDetaile={visibleDetaile}
        setVisibleDetaile={e => setVisibleDetaile(e)}/>
      {/* 创建书籍 */}
      <SaveBook
        visibleSaveBook={visibleSaveBook}
        setVisibleSaveBook={e => setVisibleSaveBook(e)} />
    </Layout>
  )
}

export default Books;
