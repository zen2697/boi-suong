/* Viết một function có tên numberOneTriangle(). 
Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác. */


let input = prompt('')
input = parseInt(input)
for (i = 0; i < input; i++) {
    for (j = 0; j <= i; j++) {
        document.writeln("*")
    }
    document.writeln("<br/>")
}