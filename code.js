let intArray = [];
let objqna = [];

var ref = firebase.database().ref('Words')
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
        objqna.push(intArray)
    }

    let i = 0;
    let score = 0;

    function q(i) {
        $('#q').text(objqna[i][0]);
        $('#ans1').text(objqna[i][1]);
        $('#ans2').text(objqna[i][2]);
        $('#ans3').text(objqna[i][3]);
    };
    q(i);

    $('[name=ans]').on('click', function() {
        if ($(this).val() == objqna[i][4]) {
            alert('Correct');
            score++;
        } else {
            alert('Wrong!');
        }
        i++;
        if (i < objqna.length) {
            q(i);
        } else {
            $('main').hide(200);
            setTimeout(function() {
                $('#score').text(`You've got ${score} out of ${objqna.length} correct`);
            }, 500);
            $('aside').show(200);
        }
    });
}

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
    alert('New Question Registered.')
});

$('#again').on('click', function() {
    i = 0;
    score = 0;
    $('main').show(1000);
    $('aside').hide(1000)
});