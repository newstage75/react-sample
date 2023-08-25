import React, { memo, useState } from "react";

type FizzProps = {
    isFizz: boolean
}

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が際描画されるとFizzも際描画される
const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizzが再描画されました, isFizz~${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
    // propsにonClickを追加
    onClick: () => void
}

// Buzzはメモ化した関数コンポーネント
// isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
// 親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは際描画しない
const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz, onClick} = props
    console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`)
    return(
        <span onClick={onClick}>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})

// この形式でexportしたときはimport { Parent } from ...　で読み込む
export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    //この関数はParentの際描画の度に作成される
    const onbuzzClick = () => {
        console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
    }

    console.log(`Parentが描画されました, count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onbuzzClick} />
            </p>
        </div>
    )
}