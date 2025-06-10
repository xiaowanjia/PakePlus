// 小课程配置
const miniCourses = [
    {
        name: '短视频好物分享福袋4.0',
        price: 698,
        refundRule: '开课<span style="color: red;">前3天</span>可以退款，不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '短视频好物分享福袋包',
        price: 899,
        refundRule: '开课<span style="color: red;">前3天</span>可以退款，不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '短视频小说短剧专项课',
        price: 499,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '短视频小说短剧专项课2.0',
        price: 599,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '1门打包课(真货小课)',
        price: 365,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '短视频图文带货专项课2.0',
        price: 398,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '学生记忆训练营',
        price: 980,
        refundRule: '已全部解锁，不支持退款，不认可升级七鱼',
        remark: '2年回放期，不支持退款',
        canRefund: false
    },
    {
        name: '小红书专项实战课',
        price: 328,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '无班班服务，不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '神图专项课',
        price: 298,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '无班班服务，不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '视频号实战营',
        price: 1280,
        refundRule: '对接群按一般反馈模板反馈，挽单时效一天(访客备注不要发挽单工单)第二天再次进线可办退',
        remark: '按节扣费，总共15节，每节85.5元，礼品费需要额外扣40元',
        canRefund: true
    },
    {
        name: '21天剪辑变现实操营',
        price: 1598,
        refundRule: '不支持退款',
        remark: '可以申请重新学习',
        canRefund: false
    },
    {
        name: '经典养生八段锦',
        price: 159,
        refundRule: '挽留一次，失败直接退款',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '一目十行的阅读课',
        price: 99,
        refundRule: '挽留一次，失败直接退款',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '手机摄影专项课',
        price: 199,
        refundRule: '仅支持购买当天可退，第二天不可退款',
        remark: '不需要建挽单工单，线上挽留一次退款',
        canRefund: true
    },
    {
        name: '短剧-元创岛课包',
        price: 1280,
        refundRule: '一经售卖不支持退款，产品问题引导到元创岛客服',
        remark: '元创岛使用教程，需随正价课退费关闭，赠课有效期一年',
        canRefund: false
    },
    {
        name: '10天养生调理营',
        price: 9.9,
        refundRule: '购买<span style="color: red;">3日内</span>，日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '无班班服务及社群 购买后当天一键解锁，自学观看',
        canRefund: true
    },
    {
        name: '养生调理营',
        price: 1,
        refundRule: '购买<span style="color: red;">3日内</span>可以退款，3日后不可退款。不符合规则退费升级七鱼工单二线处理',
        remark: '无班班服务及社群 购买后当天一键解锁，自学观看',
        canRefund: true
    }
];

// 获取小课程列表
function getMiniCourses() {
    return miniCourses;
}

// 判断课程是否可以退款
function canRefund(courseName) {
    const course = miniCourses.find(c => c.name === courseName);
    return course ? course.canRefund : false;
}

// 生成退款话术
function generateRefundScript(courseName) {
    const course = miniCourses.find(c => c.name === courseName);
    if (!course) return '';
    
    return `您好，由于线上课程的特殊性，购买之后不支持退款，考虑您的体验这边帮您特殊申请一下，您购买的课程价格${course.price}元，为您特殊申请退款${course.price}元，退款后款项原路退回到您的支付账户，课程和服务将全部关闭，双方权利义务终止，再无任何经济纠纷。请您仔细阅读以上文字，确认无异议后回复"确认"为您办理`;
}