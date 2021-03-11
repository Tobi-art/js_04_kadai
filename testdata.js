firebase.database().ref('Words').push({
    Question: `htmlのリンクタグ`,
    Answer1: `1) <href>`,
    Answer2: `2) <a>`,
    Answer3: `3) <link>`,
    Correct: 2
});

firebase.database().ref('Words').push({
    Question: `画像タグ`,
    Answer1: `1) <igm>`,
    Answer2: `2) <src>`,
    Answer3: `3) <img>`,
    Correct: 3
});

firebase.database().ref('Words').push({
    Question: `array`,
    Answer1: `1) 配列`,
    Answer2: `2) 矢印`,
    Answer3: `3) 関数の省略した書き方`,
    Correct: 1
});

firebase.database().ref('Words').push({
    Question: `var`,
    Answer1: `1) 変数の宣言。値を変更できる。`,
    Answer2: `2) 関数の宣言。値を変更できない。`,
    Answer3: `3) 関数の宣言。再宣言できない。`,
    Correct: 1
});

firebase.database().ref('Words').push({
    Question: `return`,
    Answer1: `1) ポップアップで表示されます。`,
    Answer2: `2) コンソルに表示されます。`,
    Answer3: `3) 値が関数外にアクセス可能になります。`,
    Correct: 3
});

firebase.database().ref('Words').push({
    Question: `alert`,
    Answer1: `1) コンソルに表示されます。`,
    Answer2: `2) ポップアップで表示されます。`,
    Answer3: `3) 値が関数外にアクセス可能になります。`,
    Correct: 2
});