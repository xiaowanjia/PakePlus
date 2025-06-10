// 课程数据
const courses = {
    calligraphy: [
        {
            name: '书法带练实战班',
            price: 2580,
            chapters: 38,
            unitPrice: 68,
            description: '1、服务期：68天；\n2、回放期：2年；\n3、训练营课程，有实物礼品(新手书写礼包)退款扣费80元'
        },
        {
            name: '书法高效训练营',
            price: 1980,
            chapters: 28,
            unitPrice: 71,
            description: '1、服务期：49天；天；2、回放期：2年；3、训练营课程，《书法带练实战班》的其中28节课，有实物礼品(新手书写礼包)退款扣费80元'
        },
        {
            name: '书法带练系统班',
            price: 980,
            chapters: 20,
            unitPrice: 49,
            description: '1、服务期：35天；2、回放期：2年；3、训练营课程，《书法带练实战班》的其中20节课，无礼品'
        }
    ],
    memory: [
        {
            name: '超强记忆高阶训练营6.0',
            price: 2280,
            chapters: 30,
            unitPrice: 76,
            description: '暂无简介'
        },
        {
            name: '超强记忆高阶训练营4.0-成人',
            price: 1998,
            chapters: 30,
            unitPrice: 67,
            description: '暂无简介'
        },
        {
            name: '超强记忆训练营(1.0)(3.0)(7.0)',
            price: 2880,
            chapters: 82,
            unitPrice: 35.5,
            description: '暂无简介'
        },
        {
            name: '超强记忆特训营(6.0)',
            price: 2280,
            chapters: 10,
            unitPrice: 280,
            description: '暂无简介'
        },
        {
            name: '超强记忆特训营(5.0)(7.0)',
            price: 3280,
            chapters: 82,
            unitPrice: 40,
            description: '暂无简介'
        },
        {
            name: '超强记忆冲刺班2.0',
            price: 2280,
            chapters: 32,
            unitPrice: 90,
            description: '暂无简介'
        },
        {
            name: '超强记忆冲刺班',
            price: 2280,
            chapters: 66,
            unitPrice: 44,
            description: '暂无简介'
        },
        {
            name: '科学记忆高阶训练营',
            price: 1998,
            chapters: 28,
            unitPrice: 71.5,
            description: '暂无简介'
        },
        {
            name: '科学记忆高阶特训营',
            price: 998,
            chapters: 12,
            unitPrice: 84,
            description: '暂无简介'
        },
        {
            name: '超强记忆高阶特训营',
            price: 998,
            chapters: 13,
            unitPrice: 77,
            description: '暂无简介'
        },
        {
            name: '科学记忆系统班',
            price: 2880,
            chapters: 32,
            unitPrice: 90,
            description: '暂无简介'
        },
        {
            name: '攀峰记忆训练营',
            price: 2880,
            chapters: 43,
            unitPrice: 67,
            description: '暂无简介'
        },
        {
            name: '超强专注力训练营',
            price: 3580,
            chapters: 74,
            unitPrice: 48.5,
            description: '暂无简介'
        },
        {
            name: '超强学习技能实战班',
            price: 3380,
            chapters: 40,
            unitPrice: 84.5,
            description: '暂无简介'
        },
        {
            name: '超强记忆高阶训练营2.0',
            price: 1699,
            chapters: 24,
            unitPrice: 71,
            description: '暂无简介'
        }
    ],
    video: [
        {
            name: '视频号变现实战营',
            price: 1280,
            chapters: 15,
            unitPrice: 85.5,
            description:'课程服务期：20天，现（测试阶段）退费流程：讲真—前端对接群反馈，挽单时效一天（无需发起工单和伙伴云）第二天再次进线可办退，发退费通知，礼品：需扣1000精准播放量费用40元，交付时间是开课后1周，开营前不涉及礼品扣费'
        },
        {
            name: '短视频实战训练营(3.0)',
            price: 2580,
            chapters: 35,
            unitPrice: 74,
            description: '暂无简介'
        },
        {
            name: '短视频专项实战班',
            price: 899,
            chapters: 15,
            unitPrice: 60,
            description: '课程 一共15节课（包含3节直播课）  ，每节课有2-3不同小节 一共是37小节，优先按大章节计算退费，单节课程价格：支付费用÷总课时=899元÷15章=60元/课'
        },
        {
            name: '短视频专项实战班(3.0)(4.0)(5.0)',
            price: 980,
            chapters: 10,
            unitPrice: 98,
            description: '课程一共10章节课程，按照大章节计费退款，单节课程价格：支付费用/总课时=980元/10章=98元/课，注意有礼品费'
        },
        {
            name: '短视频高阶训练营',
            price: 1999,
            chapters: 28,
            unitPrice: 71.5,
            description: '暂无简介'
        },
        {
            name: '短视频高阶训练营(2.0)(3.0)(4.0)(5.0)',
            price: 2499,
            chapters: 35,
            unitPrice: 71.5,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货高阶实战营',
            price: 1999,
            chapters: 28,
            unitPrice: 71.5,
            description: '新高阶课课包解锁逻辑为每天解锁一节课、周四开课，1v1服务，不建群'
        },
        {
            name: '短视频高阶专题课',
            price: 1399,
            chapters: 16,
            unitPrice: 87.5,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货训练营',
            price: 1980,
            chapters: 28,
            unitPrice: 71,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货训练营(新)',
            price: 2580,
            chapters: 36,
            unitPrice: 72,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货训练营(2.0)',
            price: 2580,
            chapters: 36,
            unitPrice: 72,
            description: '不受开营时间与课程进度限制，课程学习进度达到18章节需额外扣款1500粉丝费用50元'
        },
        {
            name: '短视频与直播带货训练营6.0',
            price: 2880,
            chapters: 36,
            unitPrice: 80,
            description: '基于原课程福利，额外增加5个电子福利（素材类需学员找老师要进行下载）5个玩法（属于视频课由后端老师进行发放）'
        },
        {
            name: '短视频与直播带货训练营(7.0)(8.0)(9.0)(10.0)',
            price: 2880,
            chapters: 36,
            unitPrice: 80,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货训练营(11.0)(12.0)',
            price: 2880,
            chapters: 35,
            unitPrice: 82.5,
            description: '暂无简介'
        },
        {
            name: '短视频与直播带货训练营13.0',
            price: 2880,
            chapters: 35,
            unitPrice: 82.5,
            description: '协议主体 ；北京书星学海网络科技有限公司，开票主体：北京商君雅量，此课包对外品牌宣传为星海，如有用户进线注意品牌口径问题，讲真、星海是我司集团旗下的两个品牌，品牌之间是独立运营'
        },
        {
            name: '短剧实战训练营',
            price: 1580,
            chapters: 14,
            unitPrice: 113,
            description: '训练营课程，走三个工作日挽单工单流程'
        },
        {
            name: '短剧实战训练营3.0',
            price: 1580,
            chapters: 21,
            unitPrice: 75.5,
            description: '这个要和短剧实战训练营区分开来，那个是14小节的，不要弄错了'
        },
        {
            name: '短剧实战训练营4.0',
            price: 1980,
            chapters: 21,
            unitPrice: 94.5,
            description: '注意不要和3.0弄混了'
        },
        {
            name: '短剧实战训练营5.0',
            price: 1980,
            chapters: 21,
            unitPrice: 94.5,
            description: '服务期：28天'
        },
        {
            name: '短剧实战训练营(6.0)(7.0)',
            price: 2580,
            chapters: 21,
            unitPrice: 123,
            description: '服务期：28天'
        },
		{
            name: '短剧实战训练营8.0',
            price: 2580,
            chapters: 21,
            unitPrice: 123,
            description: '此课包对外品牌宣传为真知，注意品牌口径问题，课程内容为讲真和真知共同研发，看课路径；讲真公众号或讲真APP选期看课（与讲真逻辑一致），训练营课程，走三个工作日挽单工单流程'
        },
        {
            name: '手机摄影全能班',
            price: 1980,
            chapters: 50,
            unitPrice: 40,
            description: '存量后端班主任售卖，用户购买课程后，开营日起解锁1节课，随后每日解锁1节课，20天解锁全部课程。无班级群，一对一指导'
        },
        {
            name: '手机摄影训练营',
            price: 680,
            chapters: 20,
            unitPrice: 34,
            description: '暂无简介'
        },
		{
            name: '风光摄影实战班',
            price: 980,
            chapters: 26,
            unitPrice: 38,
            description: '训练营课退款规则，三个工作日挽单流程，有虚拟商品（美图秀秀粉钻VIP一个月）退款扣款22元，客服系统可查。购课福利：1、赠送《美图秀秀实操宝典》25节课程；2、赠送《旅游推荐指南》文档资料，学员报名后班主任以链接形式即刻进行交付；3、赠送【美图秀秀粉钻VIP资格包月项】，即为期1月虚拟会员资格'
        },
    ],
    health: [
        {
            name: '(新)家庭健康宝典课',
            price: 1980,
            chapters: 14,
            unitPrice: 142,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生高阶课',
            price: 1680,
            chapters: 21,
            unitPrice: 80,
            description: '暂无简介'
        },
        {
            name: '家庭健康宝典课',
            price: 1580,
            chapters: 14,
            unitPrice: 113,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生课',
            price: 980,
            chapters: 6,
            unitPrice: 163.5,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生课2.0',
            price: 980,
            chapters: 46,
            unitPrice: 21.5,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生课4.0',
            price: 1980,
            chapters: 14,
            unitPrice: 141.5,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生课5.0',
            price: 2580,
            chapters: 22,
            unitPrice: 117.5,
            description: '暂无简介'
        },
        {
            name: '全民健康实战营',
            price: 699,
            chapters: 27,
            unitPrice: 26,
            description: '暂无简介'
        },
        {
            name: '家庭健康养生课8.0',
            price: 1980,
            chapters: 20,
            unitPrice: 99,
            description: '暂无简介'
        },
        {
            name: '中医抗衰变美营',
            price: 1880,
            chapters: 28,
            unitPrice: 67.5,
            description: '暂无简介'
        },
        {
            name: '九大体质与中医养生调理',
            price: 699,
            chapters: 10,
            unitPrice: 70,
            description: '暂无简介'
        },
        {
            name: '居家健康调理营',
            price: 1980,
            chapters: 9,
            unitPrice: 220,
            description: '暂无简介'
        },
        {
            name: '面部经络逆龄变美营1',
            price: 1880,
            chapters: 28,
            unitPrice: 68,
            description: '暂无简介'
        },
        {
            name: '面部经络逆龄变美营2',
            price: 2980,
            chapters: 28,
            unitPrice: 106.5,
            description: '暂无简介'
        },
		{
            name: '居家健康专项班',
            price: 1580,
            chapters: 6,
            unitPrice: 263.5,
            description: '1、6个阶段，售价1580，每个阶段263.5元。（无观看的课程）；2、礼品：真空拔罐器+走罐精油+纸质书籍 和参芪四君膏 共扣除80元，两个礼品会分两个快递邮寄，有其中一个物流信息，即扣费80元。慢病选期+看课链接：https://zzb.dgegbj.com/selectDate'
        }
    ]
};

// 计算退款金额
function calculateRefund(course, learnedChapters, giftFee) {
    return course.price - (course.unitPrice * learnedChapters + giftFee);
}

// 重置退款计算表单
function resetRefundForm() {
    document.getElementById('learnedChapters').value = '0';
    document.getElementById('giftFee').value = '0';
    document.getElementById('scriptContent').textContent = '请先选择课程并计算退款';
}

// 生成话术
function generateScript(course, learnedChapters, giftFee, refundAmount) {
    if (learnedChapters === 0 && giftFee === 0) {
        return `您好，您的退款申请现已审批：您购买的课程价格为${course.price}元，课程未学习，退款金额${refundAmount}元，退款后您的课程和社群服务会全部关闭，退款按照原支付路径退回，且只能办理一次双方权利义务终止，再无任何经济纠纷。请仔细阅读上述退款方案，若无异议，请回复【确认】这边给您提交办理哦。`;
    } else if (learnedChapters > 0 && giftFee === 0) {
        return `您好，由于线上课程的特殊性，购买之后不支持退款的呢，考虑您的体验这边帮您特殊申请一下，您购买的课程价格为${course.price}元，共有${course.chapters}章节，每章节的费用${course.unitPrice}元，目前您学习${learnedChapters}课时，扣款金额${course.unitPrice * learnedChapters}元，退款金额${refundAmount}元，退款后课程全部关闭，且退款只能办理一次，双方权利义务终止，再无任何经济纠纷，请您仔细阅读以上文字，确认无异议后回复【确认】即可哦。`;
    } else if (learnedChapters === 0 && giftFee > 0) {
        return `您好，由于线上课程的特殊性，购买之后不支持退款的呢，考虑您的体验这边帮您特殊申请一下，您购买的课程价格为${course.price}元，共有${course.chapters}章节，每章节的费用${course.unitPrice}元，目前您学习${learnedChapters}课时，扣款金额${course.unitPrice * learnedChapters}元+礼包费用需扣除${giftFee}元，退款金额${refundAmount}元，退款后课程全部关闭，且退款只能办理一次，双方权利义务终止，再无任何经济纠纷，请您仔细阅读以上文字，确认无异议后回复【确认】即可哦。`;
    } else if (learnedChapters > 0 && giftFee > 0) {
        return `您好，由于线上课程的特殊性，购买之后不支持退款的呢，考虑您的体验这边帮您特殊申请一下，您购买的课程价格为${course.price}元，共有${course.chapters}章节，每章节的费用${course.unitPrice}元，目前您学习${learnedChapters}课时，扣款金额${course.unitPrice * learnedChapters}元+礼包费用需扣除${giftFee}元，退款金额${refundAmount}元，退款后课程全部关闭，且退款只能办理一次，双方权利义务终止，再无任何经济纠纷，请您仔细阅读以上文字，确认无异议后回复【确认】即可哦。`;
    }
    return '';
}
