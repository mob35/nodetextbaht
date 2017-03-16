var exports = module.exports = {};
exports.readtext = function (inputs) {
    var text = inputs.toString();
    var res = '';
    var resEn = '';
    var inn = '';
    var numberth = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    var textbath = ['บาท', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
    var Ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Ninteen'];
    var Tens = ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fift', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];


    for (i = text.length - 1; i >= 0; i--) {
        if (text[(text.length - 1) - i] != 0) {
            res = res + numberth[text[(text.length - 1) - i]] + textbath[i];
        }
    }

    if (text > 999999 && text < 10000000) {
        inn = text / 1000000;
        resEn = resEn + Ones[parseInt(inn) - 1] + " Million ";
        text = text % 1000000;
    }

    if (text > 99999 && text < 1000000) {
        inn = text / 100000;
        resEn = resEn + Ones[parseInt(inn) - 1] + " Hundred Thousand ";
        text = text % 100000;
    }

    if (text > 9999 && text < 100000) {
        inn = text / 10000;
        resEn = resEn + Ones[parseInt(inn) - 1] + " Ten Thousand ";
        text = text % 10000;
    }

    if (text > 999 && text < 10000) {
        inn = text / 1000;
        resEn = resEn + Ones[parseInt(inn) - 1] + " Thousand ";
        text = text % 1000;
    }


    if (text > 99 && text < 1000) {
        inn = text / 100;
        resEn = resEn + Ones[parseInt(inn) - 1] + " Hundred ";
        text = text % 100;
    }

    if (text > 19 && text < 100) {
        inn = text / 10;
        resEn = resEn + Tens[parseInt(inn) - 1] + " ";
        text = text % 10;
    }

    if (text > 0 && text < 20) {
        resEn = resEn + Ones[text - 1];
    }

    res = res.replace('สองสิบ', 'ยี่สิบ');
    res = res.replace('สามศูนย์', 'สามสิบ');
    res = res.replace('หนึ่งสิบ', 'สิบ');


    if (res.indexOf('หนึ่งบาท') > 0) {
        res = res.replace('หนึ่งบาท', 'เอ็ดบาท');
    }
    if (res.indexOf('บาท') == -1) {
        res = res + 'บาท';
    }
    // 


    return res + ' : ' + resEn;
}; 