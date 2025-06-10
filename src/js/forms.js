// 表单配置数据
const formConfigs = {
    offlineRefund: {
        title: '线下退款登记反馈（银行卡）',
        description: '处理银行卡线下登记反馈，注意开户行信息要核对到支行，并在访客备注一下，对接群@黄敏。',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'wechatName', label: '微信昵称', type: 'text' },
            { name: 'orderId', label: '订单号', type: 'text' },
            { name: 'courseName', label: '课程名称', type: 'text' },
            { name: 'refundAmount', label: '退款失败金额', type: 'number' },
            { name: 'transactionId', label: '三方流水号', type: 'text' },
            { name: 'bankCardNumber', label: '银行卡卡号', type: 'text' },
            { name: 'cardHolder', label: '持卡人姓名', type: 'text' },
            { name: 'bankInfo', label: '开户行信息', type: 'text', defaultValue: '需要注意要到支行，例如：建设银行合肥高新区支行' }
        ]
    },
    generalFeedback: {
        title: '一般反馈',
        description: '通用反馈模板，对接群内@黄敏',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'wechatName', label: '微信昵称', type: 'text' },
            { name: 'phone', label: '手机号码', type: 'text' },
            { name: 'orderId', label: '订单号码', type: 'text' },
            { name: 'courseName', label: '课程名称及营期', type: 'text' },
            { name: 'feedback', label: '反馈问题', type: 'textarea' }
        ]
    },
    orderRecord: {
        title: '补录订单反馈',
        description: '流水号查询没有的需要补录单，反馈时需要同步带上付款截图。对接群内@黄敏',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'userId', label: '用户ID', type: 'text' },
            { name: 'wechatName', label: '微信昵称', type: 'text' },
            { name: 'phone', label: '手机号码', type: 'text' },
            { name: 'feedback', label: '反馈问题', type: 'text', defaultValue: '未录单，要求录单' }
        ]
    },
    invoice: {
        title: '开发票反馈',
        description: '普票开具时效2个工作日左右，专票开具时效15个工作日。对接群内@黄敏',
        fields: [
            {
                name: 'invoiceType',
                label: '发票类型',
                type: 'radio',
                options: ['个人发票', '公司普通发票', '公司增值税发票'],
                defaultValue: '个人发票'
            }
        ],
        conditionalFields: {
            '个人发票': [
                { name: 'studentId', label: '学员学号', type: 'text' },
                { name: 'amount', label: '开票金额', type: 'number' },
                { name: 'title', label: '开票抬头', type: 'text' },
                { name: 'contact', label: '手机号码或者邮箱', type: 'text' }
            ],
            '公司普通发票': [
                { name: 'studentId', label: '学员学号', type: 'text' },
                { name: 'amount', label: '开票金额', type: 'number' },
                { name: 'title', label: '开票抬头', type: 'text' },
                { name: 'taxNumber', label: '公司税号', type: 'text' },
                { name: 'contact', label: '手机号码或者邮箱', type: 'text' }
            ],
            '公司增值税发票': [
                { name: 'studentId', label: '学员学号', type: 'text' },
                { name: 'amount', label: '开票金额', type: 'number' },
                { name: 'title', label: '开票抬头', type: 'text' },
                { name: 'taxNumber', label: '公司税号', type: 'text' },
                { name: 'bank', label: '开户银行', type: 'text' },
                { name: 'account', label: '开户账号', type: 'text' },
                { name: 'address', label: '公司地址', type: 'text' },
                { name: 'phone', label: '公司电话', type: 'text' },
                { name: 'contact', label: '手机号码或者邮箱', type: 'text' }
            ]
        }
    },
    visitFeedback: {
        title: '学员上门反馈',
        description: '现在只提供北京地址：北京市朝阳区来广营融新科技D座。对接群内@张建军',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'wechatName', label: '微信昵称', type: 'text' },
            { name: 'phone', label: '联系电话', type: 'text' },
            { name: 'sku', label: 'SKU', type: 'text' },
            { name: 'reason', label: '上门原因', type: 'textarea' },
            { name: 'address', label: '上门地点', type: 'text', defaultValue: '北京市朝阳区来广营融新科技D座' }
        ]
    },
    workOrder: {
        title: '工单投诉反馈',
        description: '处理已有七鱼工单反馈。群内@二线对接-姚春',
        fields: [
            { name: 'orderId', label: '工单号', type: 'text' },
            { name: 'handler', label: '处理人', type: 'text' },
            { name: 'demand', label: '诉求', type: 'textarea' }
        ]
    },
    externalComplaint: {
        title: '外部投诉反馈',
        description: '处理已有外部投诉反馈。群内@张建军',
        fields: [
            { name: 'phone', label: '手机号', type: 'text' },
            { name: 'type', label: '投诉类型', type: 'select', options: ['工商投诉', '黑猫投诉', '财付通投诉', '支付宝投诉', '12315', '12345'] },
            { name: 'handler', label: '处理人', type: 'text' },
            { name: 'demand', label: '升级反馈诉求', type: 'textarea' }
        ]
    },
    blockNumber: {
        title: '屏蔽营销号码反馈',
        description: '反馈处理学员进线表示不要再发营销信息或电话。群内@康晶',
        fields: [
            { name: 'phone', label: '手机号码', type: 'text' },
            { name: 'feedback', label: '反馈内容', type: 'text', defaultValue: '用户要求屏蔽营销电话信息' }
        ]
    },
    unbindNumber: {
        title: '解绑手机号码反馈',
        description: '反馈处理学员解绑手机号码，绑定需学员自行绑定，讲真+数字无法解绑，只能注销。群内@康晶',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'phone', label: '手机号码', type: 'text' },
            { name: 'feedback', label: '反馈内容', type: 'text', defaultValue: '学员要求解绑手机号码' }
        ]
    },
    accountCancellation: {
        title: '注销账号反馈',
        description: '反馈处理协助学员注销账号。群内@康晶',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'phone', label: '手机号码', type: 'text' },
            { name: 'wechatName', label: '微信昵称', type: 'text' },
            { name: 'feedback', label: '反馈问题', type: 'text', defaultValue: '注销账号' }
        ]
    },
    fraudFeedback: {
        title: '收到诈骗信息反馈',
        description: '反馈处理学员收到诈骗信息，问清楚是什么类型诈骗，并最好让学员提供凭证。群内@黄敏',
        fields: [
            { name: 'studentId', label: '学员学号', type: 'text' },
            { name: 'phone', label: '手机号码', type: 'text' },
            {
                name: 'fraudType',
                label: '诈骗类型',
                type: 'select',
                options: ['快递公告诈骗', '电话诈骗', '短信诈骗', '社群诈骗']
            },
            { name: 'feedback', label: '反馈问题', type: 'text', computed: true }
        ]
    }
};

// 表单字段渲染函数
function renderField(field) {
    let fieldHtml = `
        <div class="layui-form-item">
            <label class="layui-form-label">${field.label}</label>
            <div class="layui-input-block">
    `;

    switch (field.type) {
        case 'select':
            fieldHtml += `<select name="${field.name}" lay-filter="${field.name}">`;
            field.options.forEach(option => {
                fieldHtml += `<option value="${option}">${option}</option>`;
            });
            fieldHtml += '</select>';
            break;
        case 'radio':
            field.options.forEach((option, index) => {
                fieldHtml += `
                    <input type="radio" name="${field.name}" value="${option}" title="${option}" 
                    ${field.defaultValue === option ? 'checked' : ''} lay-filter="${field.name}">`;
            });
            break;
        case 'textarea':
            fieldHtml += `<textarea name="${field.name}" class="layui-textarea"${field.defaultValue ? ` placeholder="${field.defaultValue}"` : ''}></textarea>`;
            break;
        default:
            fieldHtml += `<input type="${field.type}" name="${field.name}" class="layui-input"${field.defaultValue ? ` value="${field.defaultValue}"` : ''} autocomplete="off">`;
    }

    fieldHtml += '</div></div>';
    return fieldHtml;
}

// 表单渲染函数

function renderForm(formType) {
    const config = formConfigs[formType];
    if (!config) return '';

    let formHtml = `
        <div class="content-header">
            <h1 class="welcome-title">欢迎使用讲真工具箱</h1>
        </div>
        <div class="layui-card">
            <div class="layui-card-header">${config.title}</div>
            ${config.description ? `<div class="layui-card-description">${config.description}</div>` : `<div class="layui-card-description">暂无简介，如有问题请联系管理员</div>`}
            <div class="layui-card-body">
                <form class="layui-form" id="${formType}Form">
    `;
    
    // 渲染基础字段
    config.fields.forEach(field => {
        formHtml += renderField(field);
    });

    // 如果是发票表单，渲染默认的条件字段
    if (formType === 'invoice') {
        const defaultInvoiceType = config.fields.find(f => f.name === 'invoiceType').defaultValue;
        const conditionalFields = config.conditionalFields[defaultInvoiceType];
        if (conditionalFields) {
            conditionalFields.forEach(field => {
                formHtml += renderField(field);
            });
        }
    }

    // 添加按钮
    formHtml += `
                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <button type="button" class="layui-btn" onclick="copyFeedback('${formType}')"><i class="layui-icon layui-icon-file"></i>复制反馈</button>
                        <button type="reset" class="layui-btn layui-btn-primary"><i class="layui-icon layui-icon-refresh"></i>重置</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    `;

    return formHtml;
}

// 初始化表单
function initForms() {
    layui.use(['form', 'layer'], function() {
        const form = layui.form;
        const layer = layui.layer;

        // 监听发票类型选择
        form.on('radio(invoiceType)', function(data) {
            const conditionalFields = formConfigs.invoice.conditionalFields[data.value];
            if (conditionalFields) {
                // 获取表单容器
                const formContainer = document.querySelector('#invoiceForm');
                if (!formContainer) return;

                // 获取所有表单项
                const formItems = formContainer.querySelectorAll('.layui-form-item');
                const invoiceTypeItem = formItems[0]; // 保留发票类型选择
                const submitBtnItem = formItems[formItems.length - 1]; // 保留提交按钮

                // 清除现有的条件字段
                Array.from(formItems).slice(1, -1).forEach(item => item.remove());

                // 添加新的条件字段
                let fieldsHtml = '';
                conditionalFields.forEach(field => {
                    fieldsHtml += renderField(field);
                });

                // 插入新字段
                submitBtnItem.insertAdjacentHTML('beforebegin', fieldsHtml);

                // 重新渲染表单
                form.render();

                // 清空表单数据
                const inputs = formContainer.querySelectorAll('input[type="text"], input[type="number"], textarea');
                inputs.forEach(input => {
                    input.value = '';
                });
            }
        });

        // 监听诈骗类型选择
        form.on('select(fraudType)', function(data) {
            const feedbackField = document.querySelector('#fraudFeedbackForm [name="feedback"]');
            if (feedbackField) {
                feedbackField.value = `学员收到${data.value}`;
            }
        });
    });
}

// 复制反馈内容
function copyFeedback(formType) {
    const form = document.querySelector(`#${formType}Form`);
    if (!form) return;

    const formData = new FormData(form);
    let feedbackText = `${formConfigs[formType].title}\n`;

    for (let [name, value] of formData.entries()) {
        const field = formConfigs[formType].fields.find(f => f.name === name) ||
                     (formConfigs[formType].conditionalFields && 
                      Object.values(formConfigs[formType].conditionalFields)
                            .flat()
                            .find(f => f.name === name));
        
        if (field) {
            feedbackText += `${field.label}：${value}\n`;
        }
    }

    // 创建临时textarea元素用于复制
    const textarea = document.createElement('textarea');
    textarea.value = feedbackText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    try {
        textarea.select();
        document.execCommand('copy');
        layui.layer.msg('复制成功');
    } catch (err) {
        console.error('复制失败:', err);
        layui.layer.msg('复制失败，请手动复制');
    } finally {
        document.body.removeChild(textarea);
    }
}