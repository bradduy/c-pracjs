// 1. Viết chương trình C++ để in các dòng text đã cho trước.
// console.log("Hello World");
// 2. Viết chương trình C++ để in các dấu sao theo yêu cầu đã cho.
// let n = 5;
// for ( let i = 0; i < n; i++) {
//     console.log('*****');
// }
// 5. Viết chương trình để nhập ba số nguyên đã biết, sau đó in ra màn hình theo thứ tự tăng dần và giảm dần.
// function soSanh(a,b,c) {
//     let temp;
//     if(a>b) {
//         temp = a;
//         a = b;
//         b = temp;
//     }
//     if(a>c) {
//         temp = a;
//         a = c;
//         c = temp;
//     }
//     if (b>c) {
//         temp = b;
//         b = c;
//         c = temp;
//     }
//     console.log(a, b,c)
// }
// soSanh(3,50,5)

// Tìm tổng, hiệu, tích và thương của hai số nguyên
// function phepToan(a, b) {
//     let tong = a + b;
//     let hieu = a - b;
//     let thuong = a / b;
//     console.log("Tong "+ tong, "Hieu "+ hieu, "Thuong "+ thuong) 
// }
// phepToan(10,2);

/*Giả sử bạn là một nhân viên chịu trách nhiệm nhập tên danh sách báo danh của các học sinh đến độ tuổi
vào lớp 10. Bạn cần viết chương trình C++ để nhập tuổi 
và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10*/
// function checkAge(a) {
//     if (a < 16) {
//         console.log("Khong Du Dieu Kien");
//     } else {
//         console.log("Du Dieu Kien")
//     }
// }
// checkAge(15);
/*Nhập một số nguyên bất kỳ từ bàn phím và in kết quả ra số đó là lớn hay nhỏ hơn 100.*/
// function checkNumber(a) {
//     if (a>100) console.log("Lon hon 100");
//     else if (a == 100) console.log("Bang nhau")
//     else console.log("Nho hon 100")
// }
// checkNumber(50);

// Nhập 3 số nguyên và tìm giá trị lớn nhất
// function timSoLonNhat(a, b, c) {
//     let max = a;
//     if (max<b) {
//         max = b;
//     }
//     if (max<c){
//         max = c;
//     }
//     console.log(max)
// }
// timSoLonNhat(5,10,20)

/* Nhập 3 điểm là điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ và xác định học lực
Điểm trung bình >= 9.0 là hạng A.
Điểm trung bình >=7.0 và < 9.0 là hạng B
Điểm trung bình >=5.0 và < 7.0 là hạng C
Điểm trung bình <5.0 là hạng F
*/
// function checkHocLuc(diemKiemTra, thiGiuaKy, cuoiKy) {
//     let diemTrungBinh = (diemKiemTra + thiGiuaKy + cuoiKy)/3;
//     if (diemTrungBinh >= 9) console.log('Hang A');
//     else if ((diemTrungBinh >=7) && (diemTrungBinh < 9)) console.log('Hang B');
//     else if ((diemTrungBinh >= 5) && (diemTrungBinh < 7)) console.log('Hang C');
//     else console.log('Hang F'); 
// }  
// checkHocLuc(5, 5, 10) 

//Tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0
// function timNghiem(a, b, c) {
//     let i = b*b -4*a*c;
//     if (a==0 && b==0 || i < 0) console.log('Phuong Trinh Vo Nghiem');
//     else if (a == 0) console.log('Nghiem duy nhat la '+ (-c/b));
//     else {
//         x1 = (-b+Math.sqrt(i))/(2*a);
//         x2 = (-b-Math.sqrt(i))/(2*a);
//         console.log('Co 2 nghiem x1: ' + x1 + ', va x2: ' + x2 )
//     }
// }
// timNghiem(2, 0, 1)

/*
Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và sau mỗi tháng 
bạn cần tính toán số tiền hoa hồng bạn nhận được. 
Với mức hoa hồng theo doanh số bán hàng như sau:
    5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
    10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
    20 % nếu tổng doanh số là lớn hơn 300 triệu.
Tính hoa hồng đại lý bạn sẽ nhận được.
*/
// function tinhHoaHong(doanhThu) {
//     if ((doanhThu >= 0) && (doanhThu <= 100)) {
//         result = doanhThu * 0.05;
//         console.log(result)
//     } else if ((doanhThu > 100) && (doanhThu <= 300)) {
//         result = doanhThu * 0.1;
//         console.log(result)
//     } else if (doanhThu > 300) {
//         result = doanhThu * 0.2;
//         console.log(result)
//     } 
// }
// tinhHoaHong(300)
/*
Tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
    Phí thuê bao bắt buộc là 25 nghìn.
    600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
    400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
    200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
// */
// function tinhCuocDt(minutes) {
//     let phiCoDinh = 25;
//     if (minutes > 200) {
//         let i = (minutes - 200)*200 + 150*400 + 60*600;
//         let money = 0.01*i + phiCoDinh;
//         console.log(money)
//     } else if (minutes > 50) {
//         let i = (minutes - 50)*400 + 50*600;
//         let money = 0.01*i + phiCoDinh;
//         console.log(money)
//     }
//     else {
//         let i = minutes * 600;
//         let money = 0.01*i + phiCoDinh;
//         console.log(money)
//     }

// }
// tinhCuocDt(170)

/*
Nhập lương nhân viên, tính thuế thu nhập và số tiền lương thực sự. Với các thông số sau:
    30% thuế thu nhập nếu lương là 15 triệu
    20% thuế thu nhập nếu lương từ 7 đến 15 triệu
    10% thuế thu nhập nếu lương dưới 7 triệu
*/
// function getCount(salary) {
//     if (salary >= 15) {
//         let grossSalary = salary * 0.3;
//         console.log('Luong nhan duoc: '+grossSalary);
//     } else if (salary >= 7) {
//         let grossSalary = salary * 0.2;
//         console.log('Luong nhan duoc: '+grossSalary);
//     } else {
//         let grossSalary = salary * 0.1;
//         console.log('Luong nhan duoc: '+grossSalary);
//     }
// }
// getCount(15)

/*
Nhập một số nguyên, tìm bội số của số đó với các số từ 1-15.
*/
// function timBoiSo(a) {
//     for (let i = 1; i < 16; i++) {
//         let result = a * i
//         console.log(result)
//     }
// }
// timBoiSo(2)

/*
Nhập một câu, đếm số từ và ký tự trong câu đó
*/
// function getCount(sentence) {
//     console.log("So ky tu trong cau: " + sentence.length);
//     console.log("So tu trong cau: " + sentence.split(' ').length);
// }
// getCount("I am")

// Nhập một số nguyên và in dưới dạng số đảo ngược (về thứ tự) của số nguyên vừa nhập đó
// function reverse(a) {
//     let x1 = a % 10;
//     let x2 = Math.floor(a/10)
//     let x = x1.toString() + x2.toString()
//     console.log(x)
// }
// let o = reverse(559)
// console.log(o)

// Nhập một số nguyên x và tính giá trị của x - 1/3!x^3 + 1/5!x^5 - 1/7!x^5 + 1/9!x^9.

// Tìm số nguyên tố bởi sử dụng vòng lặp FOR.
// function timSoNguyenTo (num) {
//     let array = [];
//     for (let i = 1; i <= num ; i++) {
//         let result = num % i
//         if (result == 0) {
//             array.push(num);
//             if (num == i) {
//                 if (array.length < 3) {
//                     console.log('So nguyen to');
//                 } else {
//                     console.log('Ko phai so nguyen to')
//                 }
//             } else {
//                 console.log('Continue')
//             }
//         }
//     }
// }
// timSoNguyenTo(7);

// Hiển thị dãy Fibonacci bất kỳ
// function getFi(number) {
//     let fib = [];

//     fib[0] = 0;
//     fib[1] = 1;
//     for (let i = 2; i <= number; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//         console.log(fib[i]);
//     }
// }
// getFi(5)

//Tinh giai thua 1 so nguyen duong bat ky
// function tinhGiaiThua(n) {
//     let firstnum = 1;
//     for (let i = 1; i <= n; i++) {
//         firstnum *= i;
//     }
//     console.log(firstnum);
// };
// tinhGiaiThua(3);

/*
Vẽ tam giác sao
******
****
***
**
*
*/
// function veTamGiac(n) {
//         for (let i = 1; i <= n; i++) {
//             let result = '';
//             for (let j = n; j >= 1; j--) {
//                 if (i <= j) {
//                     result += '*'
//                 } else {
//                     result += ' ';
//                 }
//             }
//             console.log(result);
//         }
// }
// veTamGiac(6)

//#############################################################
// function getFunc(arr) {
//     let max = Math.max.apply(null, arr);
//     let min = Math.min.apply(null, arr);
//     console.log('Max: ' + max + ', Min: ' + min);
//     let ascendArr = arr.sort((a, b) => { return (a - b) });
//     console.log('Tang dan: ' + ascendArr);
//     let decendArr = arr.sort((c, d) => { return (d - c) });
//     console.log('Giam dan: ' + decendArr);
//     let mf = 1;
//     let m = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 m++;
//             };
//             if (mf < m) {
//                 mf = m;
//                 item = arr[i];
//             }
//         }
//         m = 0;
//     }
//     console.log('Item ' +item + ' xuat hien ' + mf)
// }
// getFunc([1, 3, 5, 3])

/*
Nhập và hiển thị một ma trận có kích thước là 5x5, trong đó: các phần tử trên đường chéo 
được điền giá trị 0, các phần tử của tam giác dưới đường chéo được điền các giá trị -1, 
và ở tam giác trên là được điền với các giá trị 1.
*/
// let matrix = [];
// function getMatrix(H) {
//     for (let y = 0; y < H; y++) {
//         matrix[y] = [];
//         for (let x = 0; x < H; x++) {
//             if (x == y) {
//                 matrix[y][x] = "0"
//             } else if (x > y ) {
//                 matrix[y][x] = "1"
//             } else {
//                 matrix[y][x] = "-1"
//             }
//         }
//     }
//     console.log(matrix.join('\n'));
// }
// getMatrix(5)

/*
Tính tổng mỗi hàng, mỗi cột của một ma trận có kích cỡ n: row x m: ceil, 
và nếu là ma trận vuông thì tính tổng đường chéo
// */
// let matrix = [];
// function getMatrix(n, m) {

// }
// getMatrix()

/*
Sử dụng khái niệm truyền mảng tới hàm để tính giá trị trung bình của các giá trị nguyên được nhập từ bàn phím. 
Các giá trị nguyên được lưu trữ trong mảng một chiều và được truyền tới hàm có tên là avg.
*/
// function avgFunc(arr) {
//     let result = 0;
//     for (item of arr) {
//         result += item;
//     };
//     console.log(result/arr.length);
// }
// avgFunc([1,3,4,2])

/*
cộng hai phân số và hiển thị kết quả. Chương trình của bạn sẽ nhắc người dùng nhập phân số 1 và phân số 2. 
Tử số và mẫu số được nhập một cách riêng rẽ bởi khoảng trống, như dưới đây:
Nhap phan so 1 (tuso mauso): 1 2
Nhap phan so 2 (tuso mauso): 2 5
Ket qua: 9/10
*/
// function getCount(a, a1, b ,b1) {
//     let x1 = a/a1;
//     let x2 = b/b1;
//     let x = x1 + x2;
//     console.log(x)
// }
// getCount(1,2,1,2)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

/*
Nhập một số ngày nào đó, sau đó chuyển đổi thành số năm và tuần tương ứng và in kết quả
*/
// const readline = require('readline');
// function tinhDate() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('Type number of days: ', (songay) => {
//         let sonam = songay / 365;
//         let sotuan = sonam * (4*12); 
//         console.log(`So ngay: ${songay}, So nam: ${sonam}, So tuan: ${sotuan}`);

//         rl.close();
//     });
// }
// tinhDate()

const readline = require('readline');

// class sinhvien {
//     mssv;
//     tensv;
//     sex;
//     diemkt1;
//     diemkt2;
//     diemcc;
//     diemgk;
//     diemck;
//     tongdiem
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let students = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

console.log("\n1. Them ban ghi sinh vien\n" + "2. Xoa ban ghi sinh vien\n" + "3. Cap nhat ban ghi sinh vien\n" + "4. Quan sat tat ca ban ghi sinh vien\n" + "5. Tinh diem trung binh cua mot sinh vien da chon\n" + "6. Hien thi sinh vien co tong diem cao nhat\n" + "7. Hien thi sinh vien co tong diem thap nhat\n" + "8. Tim sinh vien boi ID\n" + "9. Sap xep cac ban ghi boi tong diem thi cua sinh vien\n");
rl.question('Choose your option: ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Your choice: ${answer}`);
    if (answer == 1) return addInfo()
    else if (answer == 2) return deleteInfo()
    else if (answer == 3) return updateInfo()
    else if (answer == 4) return viewAllInfo()
    else if (answer == 5) return countAgv()
    else if (answer == 6) return viewBest()
    else if (answer == 7) return viewLowestfo()
    else if (answer == 8) return findId()
    else if (answer == 9) return sortInfo();
});

function addInfo() {
    const r2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    do {
        
    }
    while {

    };
    r2.question('Type new information: ', (item) => {
        console.log(`Add: ${item}`);
        students.push(item);
        console.log(students)
        r2.close();
        rl.close();
    });

}
function updateInfo() {
    console.log('A');
    rl.close();
}
function viewAllInfo() {
    console.log('A');
    rl.close();
}
function countAgv() {
    console.log('A');
    rl.close();
}
function viewBest() {
    console.log('A');
    rl.close();
}
function findId() {
    console.log('A');
    rl.close();
}
function sortInfo() {
    console.log('A');
    rl.close();
}
