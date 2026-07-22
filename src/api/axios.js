// axios.js 对 axios 进行二次封装
// 导入 config.js 中的对象
import config from './config.js'
import { showLoadingToast, closeToast } from 'vant'
// 取出 config 对象中的 baseURL 和 appkey 值
const baseURL = config.baseURL
const appkey = config.appkey
// 导入 axios 第三方库（前提是已安装）
import axios from 'axios'

// 全局 axios 默认值
// 设置公共接口路径
axios.defaults.baseURL = baseURL

// params 是与请求一起发送的 URL 参数
// 仅在 appkey 存在时挂载，避免空值污染请求参数
axios.defaults.params = appkey ? { appkey } : {}

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 显示加载提示框
    showLoadingToast({
      message: '数据加载中...', // 文本信息
      forbidClick: true,        // forbidClick 选项可以禁用背景点击
      loadingType: 'spinner',   // 加载图表类型
      duration: 0,              // 展示时长，值为 0 时 toast 不会消失
    })
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 请求响应的时候，关闭加载提示框
    closeToast()
    // 2xx 范围内的状态码都会触发该函数
    if (response.data) {
      return response.data
    }
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围内的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 导出我们封装过的 axios 对象
export default axios
