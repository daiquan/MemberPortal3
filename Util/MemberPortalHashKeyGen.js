function clean_hex(input, remove_0x) {
    input = input.toUpperCase();

    if (remove_0x) {
        input = input.replace(/0x/gi, "");
    }

    var orig_input = input;
    input = input.replace(/[^A-Fa-f0-9]/g, "");
    if (orig_input != input)
        alert("Warning! Non-hex characters in input string ignored.");
    return input;
}

var base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function binary_to_base64(input) {
    var ret = new Array();
    var i = 0;
    var j = 0;
    var char_array_3 = new Array(3);
    var char_array_4 = new Array(4);
    var in_len = input.length;
    var pos = 0;

    while (in_len--) {
        char_array_3[i++] = input[pos++];
        if (i == 3) {
            char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
            char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
            char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
            char_array_4[3] = char_array_3[2] & 0x3f;

            for (i = 0; (i < 4); i++)
                ret += base64_chars.charAt(char_array_4[i]);
            i = 0;
        }
    }

    if (i) {
        for (j = i; j < 3; j++)
            char_array_3[j] = 0;

        char_array_4[0] = (char_array_3[0] & 0xfc) >> 2;
        char_array_4[1] = ((char_array_3[0] & 0x03) << 4) + ((char_array_3[1] & 0xf0) >> 4);
        char_array_4[2] = ((char_array_3[1] & 0x0f) << 2) + ((char_array_3[2] & 0xc0) >> 6);
        char_array_4[3] = char_array_3[2] & 0x3f;

        for (j = 0; (j < i + 1); j++)
            ret += base64_chars.charAt(char_array_4[j]);

        while ((i++ < 3))
            ret += '=';

    }

    return ret;
}

function ConvertHexToBase64(valueToConvert) {
    var cleaned_hex = clean_hex(valueToConvert, true);
    
    if (cleaned_hex.length % 2) {
        alert("Error: cleaned hex string length is odd.");
        document.frmConvert.base64.value = "";
        return;
    }
    var binary = new Array();
    for (var i = 0; i < cleaned_hex.length / 2; i++) {
        var h = cleaned_hex.substr(i * 2, 2);
        binary[i] = parseInt(h, 16);
    }
    return binary_to_base64(binary);
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function ascii2base64(valueToConvert) {
    var input = valueToConvert.replace(/\r/g, '');
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) { enc3 = enc4 = 64; }
        else if (isNaN(chr3)) { enc4 = 64; }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
}
function CalculateSHA512Hash(email, pw) {
    var hexValue = calcHash(pw, 'SHA-512', "HEX");
    var base64ValuePw = ConvertHexToBase64(hexValue);
    var saltEmail = ascii2base64(email);
    var finalHash = calcHash(base64ValuePw + saltEmail, 'SHA-512', "HEX");
    var finalHashValue = ConvertHexToBase64(finalHash);
    //alert(finalHashValue);
    return finalHashValue;
}

function calcHash(valueToHash, variant, format) {
    var shaObj = new jsSHA(valueToHash, "ASCII");
    return shaObj.getHash(variant, format);
}