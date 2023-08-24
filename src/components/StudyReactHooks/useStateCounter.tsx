import { useState } from "react";
type CounterProps = {
  initialValue: number;
};

// このコンポーネントを使用する際は、以下のように
// propsのinitialValueに初期値をセットしてください
// <Counter initialValue={0}>
const UseStateCounter = (props: CounterProps) => {
  const { initialValue } = props;
  // カウントを保持する１つの状態をuseState()で宣言します。引数には初期値を指定します。
  // countが現在の状態、setCountが状態を更新する関数です。
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCountを呼ぶことで状態を更新します。 */}
      {/* １つ目のボタンでは、setCountに値を渡しているため、引数として渡した値がそのまま次の状態になる。 */}
      {/* ２つ目では、値の代わりに関数を渡している。関数の引数のprevCountには現在のカウントが入っている。
      関数の実行結果は現在の状態に１を足したものなので、結果として、カウントを１増加させたのが次の状態になる。 */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default UseStateCounter;
