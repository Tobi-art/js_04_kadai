let arrQna = [];
let score = 0;
let i = 0;

//firebaseのデータを取得し、配列に入れます
const ref = firebase.database().ref('Words')
ref.on('value', getKey)

function getKey(data) {
    var words = data.val();
    var keys = Object.keys(words)

    for (let j = 0; j < keys.length; j++) {
        intArray = []
        let k = keys[j];

        let v = words[k].Question;
        let w = words[k].Answer1;
        let x = words[k].Answer2;
        let y = words[k].Answer3;
        let z = words[k].Correct;

        intArray.push(v, w, x, y, z)
        arrQna.push(intArray)
    }

    //配列のデータを表示します。
    function q(i) {
        $('#q').text(arrQna[i][0]);
        $('#ans1').text(arrQna[i][1]);
        $('#ans2').text(arrQna[i][2]);
        $('#ans3').text(arrQna[i][3]);
    };
    q(i);

    //一番最初に表示されたデータの削除機能。69行目の関数は、$('[name=ans]')にクリックしてから行動します。
    const dlt = firebase.database().ref('Words') //ここは７〜１６行目と同じなのでgetKey関数を使いたいですが、なかなか呼び出しできません…
    dlt.on('value', getKeys)

    function getKeys(data) {
        var scores = data.val();
        var keys = Object.keys(scores)
        var k = keys[i];
        $("#delete").on('click', function() {
            if (i === 0) {
                alert(`"${arrQna[i][0]}"を削除しますか。消してから復旧できません！`)
                firebase.database().ref(`Words/${k}`).remove()
            }
        });
    }

    //回答を選んだら、正しいかどうか表示します。
    $('[name=ans]').on('click', function() {
        if ($(this).val() == arrQna[i][4]) {
            alert('正解です。');
            score++;
        } else {
            alert(`違います！正解は ${arrQna[i][4]}) です。`);
        };
        //次の質問に進みます
        i++;
        //一回全ての質問が出てからスコアを表示します
        if (i < arrQna.length) {
            q(i);

            //↑↑ ここの時点で出てきたデータのみ消したいです。
            ////////////////データ削除//////////////////
            const dlt = firebase.database().ref('Words') //ここは７〜１６行目と同じなのでgetKey関数を使いたいですが、なかなか呼び出しできません…
            dlt.on('value', getKeys)

            function getKeys(data) {
                var scores = data.val();
                var keys = Object.keys(scores)
                var k = keys[i];

                $("#delete").on('click', function() {
                    if (i != 1) {
                        alert('まだバグ対応中なので現時点で削除できません。')
                            //このアラートは何度もでます！？（i回）削除機能を有効にすると、複数の単語が消えてしまします。
                    }　
                    else {
                        alert(`"${arrQna[i][0]}"を削除しますか。消してから復旧できません！`)
                        firebase.database().ref(`Words/${k}`).remove()
                    }
                });
            }

        } else { //全ての質問が１回でたら、スコアを表示します。
            $('main').hide(200);
            $('#delete').hide(200);
            setTimeout(function() {
                $('#score').text(`今回の正解率は${Math.floor((score/arrQna.length)*100)}%です。`);
            }, 500);
            $('aside').show(200);
        }
        /////scoreが表示された後resetします。
        $('#again').on('click', function() {
            i = 0;
            score = 0;
            q(i);
            $('main').show(1000);
            $('aside').hide(1000)
        });
    });
}

//////////新しいデータを登録します/////////////////////
const newEntry = firebase.database().ref('Words');

$('#submit').on('click', function() {
    var qu = $('#Question').val();
    var an1 = $('#Answer1').val();
    var an2 = $('#Answer2').val();
    var an3 = $('#Answer3').val();
    var co = $('#Correct').val();

    newEntry.push({
        Question: qu,
        Answer1: an1,
        Answer2: an2,
        Answer3: an3,
        Correct: co
    });
    alert('登録できました。')
});