
let currentNumber = 0;
let lastNumber = null;
let kigou = '';
let syousuten = 0;
let syousuten_ari = false;

function clickNumber(num) {
    if(syousuten_ari == true){ //もし小数の位を入力している場合
        syousuten++;
        currentNumber = currentNumber + ((0.1 ** syousuten) * num);
    }else{ //正の位を入力してる時
        currentNumber = currentNumber * 10 + num;
    }

    document.getElementById('number_text').textContent = currentNumber;
    console.log('数字ボタンが押されました');
    console.log('currentNumber:' + currentNumber + ', lastNumber: ' + lastNumber);

    //計算が終わって=を押して計算済みの数字が出た後に数字を押したらリセットできるようにする
    if (kigou == '') { 
        lastNumber = null;
    }
}

function syosuClick(){
    if(syousuten_ari == false){
        syousuten_ari = true;
        let originalText = document.getElementById('number_text').textContent;
        document.getElementById('number_text').textContent = originalText + '.';
    }
}

function clickKigou(kigouText) {
    syousuten_ari = false;
    syousuten = 0;

    keisan();
    kigou = kigouText;


    document.getElementById('kigou_td_w').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_w').style.color = '#62585A';
    document.getElementById('kigou_td_k').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_k').style.color = '#62585A';
    document.getElementById('kigou_td_t').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_t').style.color = '#62585A';
    document.getElementById('kigou_td_h').style.backgroundColor = '#F0D3D1';
    document.getElementById('kigou_td_h').style.color = '#62585A';
    if (kigou == '/') {
        document.getElementById('kigou_td_w').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_w').style.color = '#F0D3D1';
    } else if (kigou == '*') {
        document.getElementById('kigou_td_k').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_k').style.color = '#F0D3D1';
    } else if (kigou == '+') {
        document.getElementById('kigou_td_t').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_t').style.color = '#F0D3D1';
    } else if (kigou == '-') {
        document.getElementById('kigou_td_h').style.backgroundColor = '#62585A';
        document.getElementById('kigou_td_h').style.color = '#F0D3D1';
    }
}


function keisan() {
    if (kigou == '/') {
        lastNumber = lastNumber / currentNumber;
    } else if (kigou == '*') {
        lastNumber = lastNumber * currentNumber;
    } else if (kigou == '+') {
        lastNumber = lastNumber + currentNumber;
    } else if (kigou == '-') {
        lastNumber = lastNumber - currentNumber;
    }

    if (lastNumber == null) { // 初めての計算の場合
        lastNumber = currentNumber;
    }

    currentNumber = 0;
    document.getElementById('number_text').textContent = lastNumber;
    console.log('記号ボタンが押されました');
    console.log('currentNumber:' + currentNumber + ', lastNumber: ' + lastNumber);
}

function reloadClick() {
    location.reload();
}

function tokusyu(kazu) {
    if (kigou == '' && lastNumber != null) { //=ボタンが押された後にボタンを押した時
        lastNumber = lastNumber * kazu;
        document.getElementById('number_text').textContent = lastNumber;
    } else { //計算中もしくは、初回（何も+や-ボタンを使ってない時）の時
        currentNumber = currentNumber * kazu;
        document.getElementById('number_text').textContent = currentNumber;
    }
}

