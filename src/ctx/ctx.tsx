// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CTX(props: { children: any }) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  )
}
