import axios from 'axios';

/**
 * 查询沪深大盘k线
 * @return {Promise<String[]>}
 */
export async function queryMainKLine() {
  return axios.get('https://push2.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=0&klt=1&fields1=f1%2Cf2%2Cf3%2Cf7&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61%2Cf62%2Cf63%2Cf64%2Cf65&ut=b2884a393a59ad64002292a3e90d46a5&secid=1.000001&secid2=0.399001')
    .then((resp) => {
      return resp.data['klines'];
    }).catch((err) => {
      throw err;
    });
}

/**
 * 查询沪深资金基础流向数据
 * @return {Promise<Object>}
 */
export async function queryRealTimeMainFlow() {
  return axios.get('http://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&secids=1.000001%2C0.399001&fields=f62%2Cf184%2Cf66%2Cf69%2Cf72%2Cf75%2Cf78%2Cf81%2Cf84%2Cf87%2Cf64%2Cf65%2Cf70%2Cf71%2Cf76%2Cf77%2Cf82%2Cf83%2Cf164%2Cf166%2Cf168%2Cf170%2Cf172%2Cf252%2Cf253%2Cf254%2Cf255%2Cf256%2Cf124%2Cf6%2Cf278%2Cf279%2Cf280%2Cf281%2Cf282&ut=b2884a393a59ad64002292a3e90d46a5')
    .then((resp) => {
      const sh = resp.data['data']['diff'][0];
      const sz = resp.data['data']['diff'][1];

      return {
        main: sh['f62'] + sz['f62'],
        mainPct: (sh['f62'] + sz['f62']) / (sh['f6'] + sz['f6']),
        veryBig: sh['f66'] + sz['f66'],
        veryBigPct: (sh['f66'] + sz['f66']) / (sh['f66'] / sh['f69'] + sz['f66'] / sz['f69']) / 100,
        veryBigIn: sh['f64'] + sz['f64'],
        veryBigOut: sh['f65'] + sz['f65'],
        big: sh['f72'] + sz['f72'],
        bigPct: (sh['f72'] + sz['f72']) / (sh['f72'] / sh['f75'] + sz['f72'] / sz['f75']) / 100,
        bigIn: sh['f70'] + sz['f70'],
        bigOut: sh['f71'] + sz['f71'],
        middle: sh['f78'] + sz['f78'],
        middlePct: (sh['f78'] + sz['f78']) / (sh['f78'] / sh['f81'] + sz['f78'] / sz['f81']) / 100,
        middleIn: sh['f76'] + sz['f76'],
        middleOut: sh['f77'] + sz['f77'],
        small: sh['f84'] + sz['f84'],
        smallPct: (sh['f84'] + sz['f84']) / (sh['f84'] / sh['f87'] + sz['f84'] / sz['f87']) / 100,
        smallIn: sh['f82'] + sz['f82'],
        smallOut: sh['f83'] + sz['f83'],
      };
    }).catch((err) => {
      return err;
    });
}

/**
 * 查询创业板今日k线
 * @return {Promise<String[]>}
 */
export async function queryGemKLine() {
  return axios.get('http://push2.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=0&klt=1&fields1=f1%2Cf2%2Cf3%2Cf7&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61%2Cf62%2Cf63%2Cf64%2Cf65&ut=b2884a393a59ad64002292a3e90d46a5&secid=0.399006')
    .then((resp) => {
      return resp.data['data']['klines'];
    }).catch((err) => {
      throw err;
    });
}

/**
 * 查询创业板资金流向
 * @return {Promise<Object>}
 */
export async function queryRealTimeGemFlow() {
  return axios.get('http://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&secids=0.399006&fields=f62%2Cf184%2Cf66%2Cf69%2Cf72%2Cf75%2Cf78%2Cf81%2Cf84%2Cf87%2Cf64%2Cf65%2Cf70%2Cf71%2Cf76%2Cf77%2Cf82%2Cf83%2Cf164%2Cf166%2Cf168%2Cf170%2Cf172%2Cf252%2Cf253%2Cf254%2Cf255%2Cf256%2Cf124%2Cf6%2Cf278%2Cf279%2Cf280%2Cf281%2Cf282&ut=b2884a393a59ad64002292a3e90d46a5')
    .then((resp) => {
      const data = resp.data['data']['diff'][0];
      return {
        main: data['f62'],
        mainPct: data['f184'],
        veryBig: data['f66'],
        veryBigPct: data['f69'],
        veryBigIn: data['f64'],
        veryBigOut: data['f65'],
        big: data['f72'],
        bigPct: data['f75'],
        bigIn: data['f70'],
        bigOut: data['f71'],
        middle: data['f78'],
        middlePct: data['f81'],
        middleIn: data['f76'],
        middleOut: data['f77'],
        small: data['f84'],
        smallPct: data['f87'],
        smallIn: data['f82'],
        smallOut: data['f83'],
      };
    }).catch((err) => {
      throw err;
    });
}

/**
 * 查询南北向资金流入
 * @return {Promise<Object>}
 */
export async function queryNSBound() {
  return axios.get('https://push2.eastmoney.com/api/qt/kamt/get?fields1=f1%2Cf2%2Cf3%2Cf4&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf63&ut=b2884a393a59ad64002292a3e90d46a5')
    .then((resp) => {
      return resp.data['data'];
    }).catch((err) => {
      throw err;
    });
}
