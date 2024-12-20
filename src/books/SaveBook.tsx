import React, { useState } from 'react';
import { Dialog, Button } from 'tdesign-react';
import type { DialogProps } from 'tdesign-react';

export default function SaveBook(props: {
  visibleSaveBook: boolean,
  setVisibleSaveBook: (data: boolean) => void
}) {
  const { visibleSaveBook, setVisibleSaveBook} = props;

  const onConfirm: DialogProps['onConfirm'] = (context) => {
    console.log('点击了确认按钮', context);
    setVisibleSaveBook(false)
    // setVisible(false);
  };
  const onCancel: DialogProps['onCancel'] = (context) => {
    console.log('点击了取消按钮', context);
  };
  const onClickCloseBtn: DialogProps['onCloseBtnClick'] = (context) => {
    console.log('点击了关闭按钮', context);
  };
  const onKeydownEsc: DialogProps['onEscKeydown'] = (context) => {
    console.log('按下了ESC', context);
  };
  const onClickOverlay: DialogProps['onOverlayClick'] = (context) => {
    console.log('点击了蒙层', context);
  };
  const handleClose: DialogProps['onClose'] = (context) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
    setVisibleSaveBook(false)
    // setVisible(false);
  };

  return (
    <>
      <Dialog
        header="添加书籍"
        visible={visibleSaveBook}
        width='1200px'
        confirmOnEnter
        onClose={handleClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onEscKeydown={onKeydownEsc}
        onCloseBtnClick={onClickCloseBtn}
        onOverlayClick={onClickOverlay}
      >
        <p>This is a dialog</p>
      </Dialog>
    </>
  );
}
