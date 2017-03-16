var exports = module.exports = {};
exports.readtext = function (inputs) {
    var text = inputs.toString();
    var res = '';
    var numberth = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
    var textbath = ["บาท", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
    for (i = text.length - 1; i >= 0; i--) {
        if (text[(text.length - 1) - i] != 0) {
            res = res + numberth[text[(text.length - 1) - i]] + textbath[i];
        }
    }
    res = res.replace("สองสิบ", "ยี้สิบ");
    res = res.replace("สามศูนย์", "สามสิบ");
    res = res.replace("หนึ่งสิบ", "สิบ");

    if (res.indexOf("หนึ่งบาท") > 0) {
        res = res.replace("หนึ่งบาท", "เอ็ดบาท");
    }
    if (res.indexOf("บาท") == -1) {
        res = res + "บาท";
    }
    return res;
}; 