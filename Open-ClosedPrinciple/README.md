Một software system luôn ủng hộ việc mở rộng và hạn chế việc chỉnh sửa. Nghĩa là một software system nên cho phép thay đổi cách hoạt động bằng việc thêm vào code mới thay vì sửa những code cũ.

Example counter.js:
Ta có 1 module trả về một object với các hàm thêm, trừ và trả về giá trị biến đếm private  của module này. Khi ta cần sử dụng liên tục một hàm thêm giá trị 2 cho biến đếm, thay vì chèm thêm code vào module, ta sẽ thêm hàm ở ngoài phạm vi code tạo module cũ.