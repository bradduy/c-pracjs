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
function getFi(number) {
    if (number == 1) {
        console.log("1")
    } else {
        for (let i = 1; i < number; i++) {
            let a = number - i;
            let b = number - (i - 1);
            console.log(a, b)
        }
    }

}

getFi(0)