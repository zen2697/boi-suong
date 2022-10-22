// Viết một function có tên numberOneTriangle(). 
// Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác. VD:
// input: numberOneTriangle(4)
// output: 

// input: numberOneTriangle(2)
// output: 

// let a = Number(prompt("Nhập 1 số a"));
// let b = Number(prompt("Nhập 1 số b"));
// let arr = [a, b];

// for (const item of arr) {
//     function laSoNguyenTo(item) {
//         var soUoc = 1;

//         for (var i = 2; i <= item; i++) {
//             if (item % i == 0) {
//                 soUoc = soUoc + 1;
//             }
//         }

//         if (soUoc == 2) {
//             return true; // trả về kết quả true;
//         } else {
//             return false; // trả về kết quả false;
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (laSoNguyenTo(i)) {
//             console.log(i + " la SNT");
//         } else {
//             console.log(i + " ko phai la SNT");
//         }
//     }
// }
// console.log(arr);


//////////////////////

function laSoNguyenTo(n) {
    var soUoc = 1;

    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            soUoc = soUoc + 1;
        }
    }

    if (soUoc == 2) {
        return true; // trả về kết quả true;
    } else {
        return false; // trả về kết quả false;
    }
}

let a = Number(prompt("Nhập một số a"));
let b = Number(prompt("Nhập một số b"));
let arr = [a, b];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (laSoNguyenTo(a)) {
        console.log(a + ' là số nguyên tố');
    } else {
        console.log(a + ' không phải số nguyên tố');
    }
    if (laSoNguyenTo(b)) {
        console.log(b + ' là số nguyên tố');
    } else {
        console.log(b + ' không phải số nguyên tố');
    }
}