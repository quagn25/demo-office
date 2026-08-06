/* ==================================================
   VioOffice Register Form Logic (Interactive & AJAX)
   ================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // 0. Cho phép lăn con lăn chuột / touchpad cuộn mượt trong form-scroll-box
    const formScrollBox = document.querySelector('.form-scroll-box');
    if (formScrollBox) {
        formScrollBox.addEventListener('wheel', function (e) {
            e.stopPropagation();
        }, { passive: true });
    }

    // 1. Kéo thả & Nhấn để chọn file cho ô vuông GPKD
    const boxGpkd = document.getElementById('box_gpkd');
    const inputGpkd = document.getElementById('gpkd_file');
    const labelGpkd = document.getElementById('label_gpkd');
    if (boxGpkd && inputGpkd) {
        boxGpkd.addEventListener('click', () => inputGpkd.click());
        boxGpkd.addEventListener('dragover', (e) => { e.preventDefault(); boxGpkd.style.backgroundColor = '#eafeef'; });
        boxGpkd.addEventListener('dragleave', (e) => { e.preventDefault(); boxGpkd.style.backgroundColor = '#f4fbfb'; });
        boxGpkd.addEventListener('drop', (e) => {
            e.preventDefault();
            boxGpkd.style.backgroundColor = '#f4fbfb';
            if (e.dataTransfer.files.length) {
                inputGpkd.files = e.dataTransfer.files;
                showBadge(labelGpkd, e.dataTransfer.files[0].name);
            }
        });
        inputGpkd.addEventListener('change', () => {
            if (inputGpkd.files.length) showBadge(labelGpkd, inputGpkd.files[0].name);
        });
    }

    // 2. Kéo thả & Nhấn để chọn file cho ô vuông CCCD
    const boxCccd = document.getElementById('box_cccd');
    const inputCccd = document.getElementById('cccd_file');
    const labelCccd = document.getElementById('label_cccd');
    if (boxCccd && inputCccd) {
        boxCccd.addEventListener('click', () => inputCccd.click());
        boxCccd.addEventListener('dragover', (e) => { e.preventDefault(); boxCccd.style.backgroundColor = '#e8f4ff'; });
        boxCccd.addEventListener('dragleave', (e) => { e.preventDefault(); boxCccd.style.backgroundColor = '#f4fbfb'; });
        boxCccd.addEventListener('drop', (e) => {
            e.preventDefault();
            boxCccd.style.backgroundColor = '#f4fbfb';
            if (e.dataTransfer.files.length) {
                inputCccd.files = e.dataTransfer.files;
                showBadge(labelCccd, e.dataTransfer.files[0].name);
            }
        });
        inputCccd.addEventListener('change', () => {
            if (inputCccd.files.length) showBadge(labelCccd, inputCccd.files[0].name);
        });
    }

    function showBadge(el, name) {
        if (!el) return;
        el.textContent = '✓ ' + name;
        el.classList.remove('d-none');
    }

    // 3. Kiểm tra Validate & Xử lý gửi Form AJAX
    const form = document.getElementById('vio_register_form');
    const alertSuccess = document.getElementById('register-alert');
    const alertError = document.getElementById('register-error');
    const btnSubmitRegister = document.getElementById('btn_submit_register');
    const btnText = document.getElementById('btn_text');
    const btnLoading = document.getElementById('btn_loading');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Kiểm tra validation (HTML5 Validation & Bootstrap Was-Validated)
            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            alertSuccess.classList.add('d-none');
            alertError.classList.add('d-none');
            btnSubmitRegister.disabled = true;
            btnText.classList.add('d-none');
            btnLoading.classList.remove('d-none');

            const formData = new FormData(form);

            fetch("register.html", {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': "",
                    'Accept': 'application/json'
                },
                body: formData
            })
                .then(async response => {
                    const contentType = response.headers.get("content-type");
                    if (!contentType || !contentType.includes("application/json")) {
                        if (response.status === 419) {
                            throw { message: 'Phiên làm việc đã hết hạn (419). Vui lòng nhấn F5 tải lại trang để làm mới token CSRF.' };
                        }
                        if (response.status === 500) {
                            throw { message: 'Lỗi máy chủ (500): Vui lòng kiểm tra cấu hình Database.' };
                        }
                        throw { message: 'Lỗi phản hồi máy chủ (' + response.status + '): Máy chủ trả về dữ liệu không đúng định dạng JSON.' };
                    }
                    const data = await response.json();
                    if (!response.ok) {
                        throw data;
                    }
                    return data;
                })
                .then(data => {
                    btnSubmitRegister.disabled = false;
                    btnText.classList.remove('d-none');
                    btnLoading.classList.add('d-none');

                    if (data.success) {
                        console.log("Đăng ký thành công", data);

                        let msg = '<strong>' + data.message + '</strong><br>';
                        msg += 'Tài khoản: ' + data.data.name + ' (' + data.data.email + ')<br>';
                        msg += 'Doanh nghiệp: ' + data.data.company_name + ' | Gói: ' + data.data.package;
                        if (data.data.uploaded_files && data.data.uploaded_files.length > 0) {
                            msg += '<br><strong>Tài liệu đính kèm:</strong> ';
                            data.data.uploaded_files.forEach(f => {
                                msg += '[' + f.type + ': ' + f.name + ' (' + f.size + ')] ';
                            });
                        }
                        alertSuccess.innerHTML = msg;
                        alertSuccess.classList.remove('d-none');
                        form.reset();
                        form.classList.remove('was-validated');
                        if (labelGpkd) labelGpkd.classList.add('d-none');
                        if (labelCccd) labelCccd.classList.add('d-none');
                    } else {
                        let errMsg = data.message || 'Có lỗi xảy ra khi gửi đăng ký.';
                        if (data.errors) {
                            errMsg = Object.values(data.errors).flat().join('<br>');
                        }
                        if (errMsg.includes('SQLSTATE') || errMsg.includes('SQL') || errMsg.includes('Exception') || errMsg.includes('SQLSTATE[HY000]')) {
                            errMsg = 'Lỗi hệ thống: Không thể kết nối cơ sở dữ liệu';
                        }
                        alertError.innerHTML = errMsg;
                        alertError.classList.remove('d-none');
                    }
                })
                .catch(err => {
                    btnSubmitRegister.disabled = false;
                    btnText.classList.remove('d-none');
                    btnLoading.classList.add('d-none');
                    let errMsg = 'Không thể kết nối máy chủ. Vui lòng thử lại.';
                    if (err && err.errors) {
                        errMsg = Object.values(err.errors).flat().join('<br>');
                    } else if (err && err.message) {
                        errMsg = err.message;
                        if (errMsg.includes('SQLSTATE') || errMsg.includes('SQL') || errMsg.includes('Exception') || errMsg.includes('SQLSTATE[HY000]')) {
                            errMsg = 'Lỗi hệ thống: Không thể kết nối.';
                        }
                    }
                    alertError.innerHTML = errMsg;
                    alertError.classList.remove('d-none');
                });
        });
    }
});
