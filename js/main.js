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

    }
}


