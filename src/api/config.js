// config.js 是配置文件，用于配置接口的公共路径以及 appkey 值
// 修复说明：appkey 与 baseURL 改为从 Vite 环境变量读取，避免硬编码泄露

/**
 * 应用配置对象
 * baseURL：后端接口公共路径，来源于 VITE_APP_API_BASE_URL 环境变量
 * appkey：后端接口访问凭证，来源于 VITE_APP_APPKEY 环境变量
 * 若环境变量缺失，则回退为空字符串并在控制台输出警告，便于开发期发现配置遗漏
 */
const baseURL = import.meta.env.VITE_APP_API_BASE_URL || ''
const appkey = import.meta.env.VITE_APP_APPKEY || ''

// 开发期诊断：缺失关键凭证时打印警告，避免请求 401 后排查困难
if (!baseURL || !appkey) {
  console.warn(
    '[config] 检测到 baseURL 或 appkey 为空，请检查项目根目录是否存在 .env 文件，' +
    '并确认已配置 VITE_APP_API_BASE_URL 与 VITE_APP_APPKEY 两个变量。' +
    '可参考 .env.example 文件进行配置。'
  )
}

// ES6 默认导出模块
export default {
  baseURL,
  appkey,
}
