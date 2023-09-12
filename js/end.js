let size = 8.2;
let columns = Array.from(document.getElementsByClassName('column'));
let class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant'];
let text_list = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K"];
let text_index = 0;
function getClass(n, i) {
    return class_list.find(function (_class, class_index) {
        return i - class_index === n || i + class_index === n;
    }) || '';
}

setInterval(() => {
    let c = text_list[text_index];
    columns.forEach(function (ele, i) {
        let n = c.charCodeAt(i) - "A".charCodeAt(0);
        let offset = -n * size;
        ele.style.transform = 'translateY(calc(50vh + ' + offset + 'rem - ' + (size / 2) + 'rem))';
        Array.from(ele.children).forEach(function (ele2, i2) {
            ele2.className = 'num ' + getClass(n, i2);
        })
    })
    text_index = (text_index + 1);
}, 1600);