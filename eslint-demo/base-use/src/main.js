import store from 'src/store'
const env = {
    get inApp() {
        return store.getters.inApp
    }
}
/* eslint-disable no-alert, no-console */

alert('foo')
console.log('bar')

/* eslint-enable no-alert, no-console */


window.a = var2

// 全局开启本地mock
const GlobalMock = false
let root = ''
export const isPro = () => true
export const mock = true
console.warn('mock model :::', mock)
if (isPro()) {
    root = '/api'
} else {
    // root = '/testapi'
    // root = 'http://fosun-test.zaouter.com/api'
    // root = 'http://uat-ipolicy.fosun-uhi.com/api'
    // root = 'http://pre-ipolicy.fosun-uhi.com/api'
    root = ''
}
let path = (inf = null, n) => {
    let result = ''
    if (isPro()) {
        result = root + inf
    } else {
        switch (mock) {
        case 'local':
            result = root + '/local' + inf
            break
        case 'cross':
            result = root + '/cross' + inf
            break
        case 'mixin':
            if (n || GlobalMock) {
                result = root + '/testapi' + inf
                // result = root + '/local/api' + inf
                // result = root + inf
            } else {
                // result = root + '/cross' + inf  访问线上数据还有些问题
                result = root + '/devapi' + inf
                // result = root + '/cross/api' + inf
            }
            break
        }
    }
    return result
}
const deco = (app, share) => {
    // let url = '/devapi'
    // let url = '/testapi'
    let url = '/devapi'
    if(isPro()){
        url = ''
    }
  
    return root + url + (env.inApp ? app : share || app)
}
/*
corss  请求远端
local  请求本地mock Json 文件

example:
export const ILOGIN = root + login
*/
// 查询投保步骤，steps
export const QUERYPROGRESS = path('/applyProgress/queryProgress')
// 分享建议书
export const SHAREPROPOSAL = path('/noLogin/moreInsureShareProposal')
// 分享pdf
export const SHAREPDF = path('/proposal/share')
// 预约投保
export const SAVEAPPOINTMENT = path('/noLogin/plan/saveAppointment')
//加载多被保人建议书
export const LOADPROLIST = {
    get LOAD() {
        return deco('/plan/moreInsureLoadProList', '/noLogin/moreInsureLoadProList')
    }
}
//加载所有可选主险列表
export const MAININSLIST = path('/chooseMainIns/mainInsList')
//保存所选产品列表
export const SETPRODUCTLIST = path('/plan/moreInsureSetProductList')
//保存所选产品
export const SETPRODUCT = path('/plan/moreInsureSetProduct')
//加载所有被保人
export const LOADALLINSURANT = path('/proposal/loadMoreInsureProposal')
//加载所有可选附险列表
export const SETRIDERINSLIST = path('/plan/moreInsureSetRiderList')
//保存所选产品列表=附加险
export const LOADRIDERINSLIST = path('/chooseRider/moreInsGetRiderList')
//remove所选产品
export const RMVPRODUCT = path('/plan/moreInsureRemoveProduct')
// 检验计划书状态
export const CHECKRULE = path('/plan/moreInsureCheckRule')

export const LOADAPPLY = path('/plan/loadApply')
export const BENEFICIARTYLIST = path('/plan/beneficiaryIist')
// 预览计划书
export const VIEWPLAN = {
    get LOAD() {
        return deco('/plan/moreInsureLoadPlan', '/noLogin/moreInsurePreviewPlan')
    }
}
export const MOREINSURESHOWBENEFITCOVERAGE = path('/plan/moreInsureShowBenefitCoverage')
export const BENEFICIARCUSTUMER = path('/plan/benefictaryCustomer')
/**
 * 续期管理
 */
export const RENEW_LIST = path('/renewal/renewalList') // 列表
export const RENEW_QUERY = path('/renewal/renewalQuery') // 催交记录查询
export const RENEW_REGISTER = path('/renewal/renewalRegister') // 催交记录填写
export const RENEW_SIGN_APPLY = path('/renewal/renewalSignApply') // 续期缴费申请
export const RENEW_SIGN_APPLY_CONFIRM = path('/renewal/renewalSignApplyConfirm') // 续期缴费申请确认
export const RENEW_PAY = path('/renewal/renewalSignPay') // 续期缴费支付
export const RENEW_STATUS = path('/renewal/renewalStatus') // 续期缴费状态
export const RENEW_CACHE = path('/renewal/renewalCache') // 续期缴费数据缓存
export const RENEW_CACHE_QUERY = path('/renewal/renewalCacheQuery') // 续期缴费数据缓存查询
export const RENEW_SIGN_VERIFY = path('/renewal/renewalSignPayVerify') // 续期缴费验证码校验
export const RENEW_SUCCESS = path('/renewal/renewalSuccess') // 续期缴费成功

// 获取客户信息，通过custId
export const GETCUSTM = path('/customer/getDetail')
// 初始化完善信息
export const LOADAPPLYWITHMULTIINSURANTS = path('/apply/multiInsurants/loadApplyWithMultiInsurants')
// 保存投被保人信息
export const SAVEAPPLIANTADDINSURANT = path('/apply/multiInsurants/saveApplicantAndMultiInsurants')
// 查询被保人信息
export const QUERYINSURANT = path('/apply/multiInsurants/query')
// 单个被保人信息保存
export const SAVESINGLEINSURANT = path('/apply/multiInsurants/saveSingleInsurant')
// 单个受益人删除
export const DELETEBENEFICTARY = path('/apply/multiInsurants/deleteSingleBenefictory')
// 修改受益人信息
export const UPDATEBENEFICTARY = path('/benefictary/update')
// 保存受益人信息（指定受益人）
export const SAVEASSIGNBEBEFICTORY = path('/apply/multiInsurants/saveSingleBenefictory')
// 保存受益人信息
export const SAVEBENEFICTARY = path('/benefictary/save')
// 受益人规则校验（指定受益人）
// 投被保人告知初始化
export const INITAPPLICANTANDINSURANTINFORM = path('/apply/multiInsurants/inform/insured/initApplicantAndInsurantInform', true)
// 保存单个被保人告知
export const SAVESINGLEINSURANTIMPART = path('/apply/multiInsurants/saveSingleInsurantImpart')
// 保存投保人告知
export const SAVESINGLEAPPIMPART = path('/apply/multiInsurants/inform/applicant/save')
export const CHECKBENEFICTATY = path('/apply/multiInsurants/checkBenefictary')

//告知接口（新）
export const IMPARTINIT = path('/apply/impart/init', true)
export const IMPARTLOAD = path('/apply/impart/load', true)
export const IMPARTSAVE = path('/apply/impart/save', true)

//删除被保人
export const DELETEINSURER = path('/proposal/deletePlanInsurant')
//预览投保书
export const VIEWINSURERPACT = path('/apply/multiInsurants/loadPreviewWithMultiInsurants')
export const PREUNDERWRITING = path('/apply/multiInsurants/preUnderWriting')  //预投保
//电子签名页-查看税收信息
export const TAX_INFO = path('/apply/loadTaxInfo')
/** 电子签名页-税收信息保存 **/
export const APP_TAX_HOLD = path('/apply/saveSubTaxInfo')

/** 进度处理start **/
export const PROGRESSTAB = path('/applyProgress/queryTabs') // TAB栏
export const INSBENEFICARYINFOR = path('/benefictary/query' )// 受益人信息列表
export const INSBENEFICARYINFORDEL = path('/benefictary/delete' )// 删除受益人
export const INSBENEFICARYINFORUP = path('/benefictary/update' )// 修改受益人
export const INSBENEFICARYINFORSAVE = path('/benefictary/save' )// 保存受益人
export const INSBENEFICARYINFORNEXTSTEP = path('/benefictary/checkBenefictary') // 受益人下一步
export const INPROGRESSLIST = path('/applyProgress/queryList') // 外网数据：progresslist
export const IPROGRESSDETAIL = '/progressdetail' // 投保进度 详情列表
export const IPROGRESS = '/progress' // 投保进度建议书
export const IPROGRESSINSURE = '/progressinsure' // 投保进度投保书
export const IPROGRESSPAY = '/progresspay' // 投保进度已支付
export const IPROGRESSFINISH = '/progressfinish' // 投保进度已完成
export const IPROGRESSDELE = '/progressdele' // 投保进度已作废
export const ISAMULET = '/isamulet'// 护身符
export const PROGRESSDEL = path('/applyProgress/deleteApply' )// 删除建议书
export const PROGRESSCOPY = path('/applyProgress/copyApply' )// 复制建议书
export const QUERYDEATIL = path('/applyProgress/queryDetail') //投保单详情
/** 进度处理end **/

/** 收回空中签名 **/
export const DE_SIGN_AIR = path('/apply/multiInsurants/air/airSignBack')
/** 收回空中支付 **/
export const DE_PAY_AIR = path('/apply/air/airPayBack')
export const PROGRESSLOADAPPLY = path('/api/apply/loadApply')
export const LOADPROPOSAL = path('/proposal/loadMoreInsureProposal')
export const GETNOTIFY = path('/notify/simpleInform')
export const CREATMOREINSUREPROPOSAL = path('/proposal/createMoreInsureProposal')
// 产品列表 产品中心
export const IPRODUCT = path('/productCenter/queryProductList')
// 产品分类
export const IPRODUCT_TYPE = path('/dictionary/loadDictionary')
//产品详情
export const SHARE_I_PRODUCTDETAIL = path('/productCenter/productDetailForShare')
export const IPRODUCTDETAIL = path('/productCenter/productDetailForApp')
// 热门推荐产品详情
export const RECOMMENDPRODUCTDETAIL = path('/noLogin/product/recommendProductDetail') 

// 名片
export const IBUSSINESSCARD = path('/noLogin/getUserInformation')
export const IBUSINESSCARDSHARING = path('/noLogin/share/businessCardSharing')


/** 保单查询start **/
export const IPROGRESQUERY = '/progressquery'
export const ISEARCHLIST = path('/policy/list')
export const ISEARCHDETAIL = path('/policy/detail')
export const CLAIMLIST = path('/rest/claim/list')
export const QUERYSCHEDULE = path('/rest/endorse/querySchedule') // 保全列表
export const ISBANKS = '/banks' // 银行list
/** 保单查询end **/
/** 保单服务 start **/
export const QUERYCTINFO = path('/rest/policy/queryCtInfo')
/** 保单服务 end **/

/*********电子签名接口*************/

/** 电子签名页： 保存保单信息 **/
export const SIGN_E_SAVE = path('/apply/multiInsurants/saveMainInfoWithMultiInsurants')
/** 获取初始化空中签名分享链接的数据 **/
export const INFO_SHARE_SIGNATURE = path('/apply/multiInsurants/air/shareAirSign')
/** 获取重新支付信息 **/
export const LOADPAYINFO = path('/apply/loadPayInfo')
/** 重新支付信息 **/
export const PAYSUBMIT = path('/apply/paySubmit')
/** 作废投保 **/
export const DELETEAPPLY = path('/applyProgress/deleteApply')
/** 发送验证码 **/
export const SMSSEND = path('/sms/send')
/** alias, but more friendly **/
export const SMS_SEND = path('/sms/send')
export const SMS_SEND_SHARE = path('/noLogin/sms/send')
/** 验证验证码 **/
export const SMSVERIFY = path('/sms/verify')
export const SMS_VERIFY_SHARE = path('/noLogin/sms/verify')

/** 获取银行列表 **/
export const DICT = path('/dictionary/loadDictionary')
export const DICT_RELATION = path('/noLogin/apply/air/loadDict?dictName=relation')
/** 国籍列表 **/
export const GET_CITIZENSHIP_LIST = path('/noLogin/apply/air/loadDict?dictName=citizenship')
export const GET_NEWCITIZENSHIP_LIST = path('/dictionary/loadDictionary')
export const APPLYSUBMIT = path('/apply/applySubmit')
export const IRESULTSUCC = path('/resultsucc') // 查看结果 - 成功
/*********电子签名接口*************/

/** 根据planId 拉取对应步骤 **/
export const STEPS = path('/applyProgress/queryAllApplyStep')
/** 获取当前时间 **/
export const CURRENTTIME = path('/getSystemTime')

// 图片上传
export const UPLOAD = path('/base64data/uploadImage')
// 获取文件
export const GETFILEURL = path('/until/getFileUrl')
// 人脸识别新的接口-base64
export const VERIFY_CERT = path('/base64/threed')
// 人脸识别新的接口-tourl
export const VERIFY_CERT_URL = path('/threed')

// 预约回访查询
export const VISIT_SEARCH = path('/rest/queryPolicyCallBack')

export const GETOCCUPATION_DESC = path('/user/getclassify')
//银行网点接口
export const BANK_INFO=path('/apply/bankInfo')
//保存银行网点信息
export const SAVE_BANK_INFO=path('/apply/bankInfo/save')
//查询银行网点信息
export const QUERY_BANK_INFO=path('/apply/bankInfo/queryBankInfo')
//校验短信验证码
export const CONFIRMUNIONPAY=path('/unionPay/confirm')
/**
 * 相关的接口应组织在一起
 */
export default {
    get DICT () {
        return deco('/dictionary/loadDictionary')
    },
    TAX: {
    // 切换是否是中国税收居民(签名页面)
        get TOGGLE() {
            return deco('/apply/changeSignInfo', '/noLogin/apply/air/changeSignInfo')
        }
    },
    // 切换是否是双录保单
    DOUBLE_RECORD: {
        get TOGGLE() {
            return deco('/apply/changeSignInfo', '/noLogin/apply/air/changeSignInfo')
        }
    },
    CA: {
        get RESET() { // 清空CA信息
            return deco('/apply/clearCaInfo')
        }
    },
    SIGN: {
        get LOAD() { // 加载签名信息
            return deco(
                '/apply/multiInsurants/loadMainInfoWithMultiInsurants',
                '/noLogin/apply/multiInsurants/air/loadAirSignInfo'
            )
        },
        get SUBMIT() { // 提交签名
            return deco('/apply/multiInsurants/applySubmit', '/noLogin/apply/multiInsurants/air/submitAirSign')
        },
        CACHE: {
            get CA() { // 缓存签名中的CA信息
                return deco('/apply/saveCaInfoNoSign', '/noLogin/apply/air/saveCaInfoNoSign')
            },
            get UPLOAD() { // 缓存签名中的上传资料
                return deco('/apply/uploadImageInfoNoCheck', '/noLogin/apply/air/uploadImageInfoNoCheck')
            },
            get PAY() { // 缓存签名中的支付信息
                return deco('/apply/saveSubPayInfo', '/noLogin/apply/air/saveSubPayInfo')
            },
            get PAYMONEY() { // 缓存签名中的生存金信息
                return deco('/apply/multiInsurants/saveSurvivalGold')
            }
        }
    },
    CODE_VERIFY: {
        get SENDBANK() {
            return deco('/unionPay/sign')
        },
        get VERIFY() {
            return deco('/sms/verify', '/noLogin/sms/verify')
        },
        get SENDACCEPT() {
            return deco('/sms/multiInsurants/send', '/noLogin/sms/multiInsurants/send')
        },
    },
    APPLY: {
        get STATUS() {
            return deco('/applyProgress/queryApplyStatus')
        },
        get DETAIL () {
            return deco('/applyProgress/queryDetail')
        }
    }
}

