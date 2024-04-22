let currentNumber = 0;
let lastNumber = null;
let kigou = '';
let syousuten = 0;
let syousuten_ari = false;

document.getElementById('calculator').addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName === 'TD') {
        let buttonText = target.textContent;

        switch(buttonText) {
            case 'AC':
                reloadClick();
                break;
            case '+/-':
                tokusyu(-1);
                break;
            case '%':
                tokusyu(0.01);
                break;
            case '÷':
                clickKigou('/');
                break;
            case '×':
                clickKigou('*');
                break;
            case '-':
                clickKigou('-');
                break;
            case '+':
                clickKigou('+');
                break;
            case '=':
                clickKigou('');
                break;
            default:
                if (!isNaN(parseInt(buttonText))) {
                    clickNumber(parseInt(buttonText));
                } else if (buttonText === '.') {
                    syosuClick();
                }
                break;
        }
    }
});

function clickNumber(num) {
    if(syousuten_ari == true){
        syousuten++;
        currentNumber = currentNumber + ((0.1 ** syousuten) * num);
    }else{
        currentNumber = currentNumber * 10 + num;
    }

    document.getElementById('number_text').textContent = currentNumber;
    console.log('数字ボタンが押されました');
    console.log('currentNumber:' + currentNumber + ', lastNumber: ' + lastNumber);

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

    if (lastNumber == null) {
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
    if (kigou == '' && lastNumber != null) {
        lastNumber = lastNumber * kazu;
        document.getElementById('number_text').textContent = lastNumber;
    } else {
        currentNumber = currentNumber * kazu;
        document.getElementById('number_text').textContent = currentNumber;
    }
}
