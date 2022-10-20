//! Bài 1
/**
 * Khối 1: 
 * diemChuan, diemKV, diemDT, diemTungMon (lấy dữ liệu từ form)
 * 
 * Khối 2:
 *   Tính tổng Điểm (main - hàm chính của ứng)
 *          + lấy giá trị từ form
 *          + diemChuan (lấy giá trị từ form)
 *          + diemKV => cần 3 khu vực để kiểm tra
 *                      
 *          + diemDT => cần 3 loại đối tượng để kiểm tra
 *                        
 *          + tongDiem => cần tổng diemTungMon + diemKhuVuc + diemDoiTuong
 *                           
 *          + tạo hàm if else phân loại điều kiện
 *                      
 * 
 *  
 * 
 * Khối 3:
 * + trả kết quả lên UI
 */

function ketQuaTinh() {
    var diemChuan = Number(document.getElementById("number1").value);
    var Mon1 = Number(document.getElementById("number4").value);
    var Mon2 = Number(document.getElementById("number5").value);
    var Mon3 = Number(document.getElementById("number6").value);
    var diemKV = Number(document.getElementById("exampleFormControlSelect1").value);
    var diemDT = Number(document.getElementById("exampleFormControlSelect12").value);

    var diem3Mon = Mon1 + Mon2 + Mon3;

    var tongDiem = diem3Mon + diemKV + diemDT;

    console.log(tongDiem);
    if (tongDiem >= diemChuan && Mon1 > 0 && Mon2 > 0 && Mon3 > 0) {
        console.log('đạt');
        document.getElementById('ketQuaTraVe0').innerHTML = 'tổng điểm là: ' + tongDiem + " Bạn Đã đậu, xin chúc mừng";
    } else if (tongDiem < diemChuan || Mon1 > 0 || Mon2 > 0 || Mon3 > 0) {
        console.log('không đạt');
        document.getElementById('ketQuaTraVe0').innerHTML = 'tổng điểm là: ' + tongDiem + " rớt, xin chia buồn :))";
    } else {
        alert('số điểm không hợp lệ');
    }
}

//! Bài 2
/**
 * Khối 1: 
 * GIA_50KWDAU, GIA_50KWTIEP, GIA_100KWTIEP, GIA_150KWTIEP, GIA_TREN150, Name, soKW (lấy dữ liệu từ form)
 * 
 * Khối 2:
 *   Tính tổng tiền
 *          + lấy giá trị từ form
 *          + lấy soKW 
 *   
 *          + tạo hàm if else phân loại điều kiện
 *          giá từ (1-50)        tienTheoKW = GIA_50KWDAU * tongSoKw;
 *          giá từ (1-100)       tienTheoKW = gia_1 + ((tongSoKw - 50) * GIA_50KWTIEP);    
 *          giá từ (1-200)       tienTheoKW = gia_1 + gia_2 + ((tongSoKw - 100) * GIA_100KWTIEP);
 *          giá từ (1-350)       tienTheoKW = gia_1 + gia_2 + gia_3 + ((tongSoKw - 200) * GIA_150KWTIEP);
 *          giá trên 350         tienTheoKW = gia_1 + gia_2 + gia_3 + gia_4 + ((tongSoKw - 350) * GIA_TREN150);
 * 
 * Khối 3:
 * + trả kết quả lên UI
 */


const GIA_50KWDAU = 500;
const GIA_50KWTIEP = 650;
const GIA_100KWTIEP = 850;
const GIA_150KWTIEP = 1100;
const GIA_TREN150 = 1300;

function tinhTienDien() {
    var Name = document.getElementById("num4").value;
    var tongSoKw = document.getElementById("num5").value;
    var gia_1 = 50 * 500;
    var gia_2 = 50 * 650;
    var gia_3 = 100 * 850;
    var gia_4 = 150 * 1100;

    var tienTheoKW = "";
    if (0 < tongSoKw && tongSoKw <= 50) {
        tienTheoKW = GIA_50KWDAU * tongSoKw;

    } else if (50 < tongSoKw && tongSoKw <= 100) {
        tienTheoKW = gia_1 + ((tongSoKw - 50) * GIA_50KWTIEP);

    } else if (100 < tongSoKw && tongSoKw <= 200) {
        tienTheoKW = gia_1 + gia_2 + ((tongSoKw - 100) * GIA_100KWTIEP);

    } else if (200 < tongSoKw && tongSoKw <= 350) {
        tienTheoKW = gia_1 + gia_2 + gia_3 + ((tongSoKw - 200) * GIA_150KWTIEP);

    } else if (tongSoKw > 350) {
        tienTheoKW = gia_1 + gia_2 + gia_3 + gia_4 + ((tongSoKw - 350) * GIA_TREN150);

    } else if (tongSoKw <= 0) {
        alert("số KW không hợp lệ");
    } else {
        alert("số KW không hợp lệ");
    }
    document.getElementById('ketQuaTienDien').innerHTML = Name + "Tiền Điện: " + tienTheoKW;
}



