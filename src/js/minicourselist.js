// 渲染小课列表
function renderMiniCourseList() {
    const miniCourses = getMiniCourses();
    const tbody = document.getElementById('miniCourseList');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    miniCourses.forEach(course => {
        const tr = document.createElement('tr');
        // 添加鼠标悬停事件
        tr.addEventListener('mouseover', function() {
            this.classList.add('table-row-hover');
        });
        tr.addEventListener('mouseout', function() {
            this.classList.remove('table-row-hover');
        });
        tr.innerHTML = `
            <td>${course.name}</td>
            <td>${course.price}元</td>
            <td>${course.refundRule}</td>
            <td>${course.remark}</td>
            <td>
                <button class="layui-btn layui-btn-sm ${course.canRefund ? '' : 'layui-btn-danger'}" 
                    onclick="${course.canRefund ? `handleRefundScript('${course.name}')` : 'layer.msg("该课程不支持退款")'}"
                    style="${course.canRefund ? '' : 'background-color: #ff5722; color: white;'}">
                    <i class="layui-icon ${course.canRefund ? 'layui-icon-file' : 'layui-icon-close'}"></i> ${course.canRefund ? '复制话术' : '不可退款'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 监听导航点击
    const navItems = document.querySelectorAll('.layui-nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text === '小课查询') {
                // 直接调用渲染函数
                renderMiniCourseList();
            }
        });
    });
});

// 导出函数供其他模块使用
window.renderMiniCourseList = renderMiniCourseList;