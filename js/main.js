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
 *                          !=> trả kết quả tongDiem
 *          + diemDT => cần 3 loại đối tượng để kiểm tra
 *                          !=> trả kết quả tongDiem
 *          + tongDiem => cần tổng diemTungMon + diemKhuVuc + diemDoiTuong
 *                           !=> trả kết quả ketQuaTinh
 *          + tạo hàm if else phân loại điều kiện
 *                           !=> trả kết quả 
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
    console.log(diemChuan, Mon1, Mon2, Mon3, diemKV, diemDT);
    var diem3Mon = Mon1 + Mon2 + Mon3;
    // if (tongKetDiem >= diemChuan) {
    //     console.log('đạt');
    // } else if (tongKetDiem < diemChuan) {
    //     console.log('rớt');
    // } else if (Mon1 == 0 || Mon2 == 0 || Mon3 == 0) {
    //     console.log('bạn bị liệt môn => rớt');
    // } else {

    // }
    function diemDT() {
        //kiểm tra: if-else if, checked(radio, checkbox) => true
    
        var diemDT = "";
    
        if (diemDT = 1) {
            diemDoiTuong = 2.5;
        } else if (diemDT = 2) {
            diemDoiTuong = 1.5;
        } else if (diemDT = 3) {
            diemDoiTuong = 1;
        } else if (diemDT = 0) {
            diemDoiTuong = 0;
        } else {
        }
    
        return tongDiem;
    
    }
    function diemKV() {
        //kiểm tra: if-else if, checked(radio, checkbox) => true
    
        var diemKV = "";
    
        if (diemDT = 1) {
            diemKhuVuc = 2;
        } else if (diemDT = 2) {
            diemKhuVuc = 1;
        } else if (diemDT = 3) {
            diemKhuVuc = 0.5;
        } else if (diemDT = 0) {
            diemKhuVuc = 0;
        } else {
        }
        return tongDiem;
    }
    function tongDiem() {
    
        tongKetDiem = diem3Mon + diemDoiTuong + diemKhuVuc;
        console.log(tongKetDiem, diemTungMon)
        return ketQuaTinh;
    }
    
}


