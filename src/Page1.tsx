export const Page1 = () => {

  const onclickAction1 = () => calcTotal(1000);
  const onclickAction2 = () => console.log(getTotal(1000));

  // const calcTotal = (num) => {
  // const calcTotal = (num: number) => {
  const calcTotal = (num: number): void => {
    const total1 = num * 1.1;
    console.log(total1);
  }

  const getTotal = (num: number): number => {
    let total2: number = 0; 
    total2 = num * 1.1;
    return total2;
  }

  return (
    <div>
      <p>タイトル</p>
      <button onClick={onclickAction1}>ボタン1実行</button>
      <br />
      <button onClick={onclickAction2}>ボタン2実行</button>
    </div>
  )
}