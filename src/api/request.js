//request.js专门用于封装项目中用到接口方法
//导入我们二次封装的axios对象
import myaxios from './axios';
//封装banner接口
export function bannerApi() {
  return myaxios({
    //url代表请求的地址
    url: '/banner',
  })
}
//封装根据商品类型获取商品接口
export function typeProductsApi(key, value) {
  return myaxios({
    //url代表请求的地址
    url: '/typeProducts',
    //params代表get请求的url参数
    params: {
      key: key,
      value: value
    }
  })
}

//封装查看最新推荐商品接口
export function hotRecommendApi() {
  return typeProductsApi("isHot", 1)
}
