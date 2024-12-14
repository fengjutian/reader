import { Drawer } from 'tdesign-react';

const BookDetail = (props: {
  visibleDetaile: boolean,
  setVisibleDetaile: (data: boolean) => void
}) => {
  const { visibleDetaile, setVisibleDetaile } = props;

  const handleClose = () => {
    setVisibleDetaile(false)
  };

  return (
    <div>
      <Drawer header="抽屉标题" visible={visibleDetaile} onClose={handleClose}>
        <p>抽屉的内容</p>
      </Drawer>
    </div>
  )
}

export default BookDetail;
