let intArray = [];
let arrQna = [];

///firebaseのデータを取得し、配列に入れます//////
const ref = firebase.database().ref('Words')
ref.on('value', getKey)

function getKey(data) {
    var words = data.val();
    var keys = Object.keys(words)

    for (let i = 0; i < keys.length; i++) {
        intArray = []
        let k = keys[i];

        let v = words[k].Question;
        let w = words[k].Answer1;
        let x = words[k].Answer2;
        let y = words[k].Answer3;
        let z = words[k].Correct;

        intArray.push(v, w, x, y, z)
        arrQna.push(intArray)
    }

    ////配列のデータを表示します。////////////////////

    let i = 0;
    let score = 0;

    function q(i) {
        $('#q').text(arrQna[i][0]);
        $('#ans1').text(arrQna[i][1]);
        $('#ans2').text(arrQna[i][2]);
        $('#ans3').text(arrQna[i][3]);
    };
    q(i);

    ////回答を選んだら、正しいかどうか表示します。////////////

    $('[name=ans]').on('click', function() {
        if ($(this).val() == arrQna[i][4]) {
            alert('正解です。');
            score++;
        } else {
            alert(`違います！正解は選択肢${arrQna[i][4]}です。`);
        };
        /////次の質問に進みます///////////////////////
        i++;
        //////////一回全ての質問が出てからスコアを表示します////////////
        if (i < arrQna.length) {
            q(i);
            // ↑ ここの時点で出てきたデータダケ消したいです。
            ////////////////データ削除//////////////////
            const dlt = firebase.database().ref('Words')
            dlt.on('value', getKeys)

            function getKeys(data) {
                var scores = data.val();
                var keys = Object.keys(scores)
                var k = keys[i]; ///
                ///ここにalert(arrQna[i][0])と記述すると、次の質問のみ表示されます。
                $("#delete").on('click', function() {
                    ///ここにalert(arrQna[i][0])と記述すると、次の質問がi回表示されます？？？？？            
                    alert(`"${arrQna[i][0]}"を削除しますか。消してから復旧できません！`)
                        // firebase.database().ref(`Words/${k}`).remove()
                });
            }
        } else {
            $('main').hide(200);
            $('#delete').hide(200);
            setTimeout(function() {
                $('#score').text(`今回の正解率は${(score/arrQna.length)*100}%です。`);
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