firebase.database().ref('Words').push({
    Question: `htmlのリンクタグ`,
    Answer1: `<href>`,
    Answer2: `<a>`,
    Answer3: `<link>`,
    Correct: 2
});

firebase.database().ref('Words').push({
    Question: `画像タグ`,
    Answer1: `<igm>`,
    Answer2: `<src>`,
    Answer3: `<img>`,
    Correct: 3
});

firebase.database().ref('Words').push({
    Question: `array`,
    Answer1: `配列`,
    Answer2: `矢印`,
    Answer3: `関数の省略`,
    Correct: 1
});

firebase.database().ref('Words').push({
    Question: `var`,
    Answer1: `変数の宣言。値を変更できる。`,
    Answer2: `関数の宣言。値を変更できない。`,
    Answer3: `関数の宣言。再宣言できない。`,
    Correct: 1
});

firebase.database().ref('Words').push({
    Question: `return`,
    Answer1: `ポップアップで表示されます。`,
    Answer2: `コンソルに表示されます。`,
    Answer3: `値が関数外にアクセス可能になります。`,
    Correct: 3
});

firebase.database().ref('Words').push({
    Question: `alert`,
    Answer1: `コンソルに表示されます。`,
    Answer2: `ポップアップで表示されます。`,
    Answer3: `値が関数外にアクセス可能になります。`,
    Correct: 2
});