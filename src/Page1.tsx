export const Page1 = () => {

  const onclickAction = () => calcTotal(1000);

  // const calcTotal = (num) => {
  const calcTotal = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }

  return (
    <div>
      <p>タイトル</p>
      <button onClick={onclickAction}>ボタン実行</button>
    </div>
  )
}