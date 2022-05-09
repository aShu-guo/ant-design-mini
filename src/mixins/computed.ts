import equal from 'fast-deep-equal';

export default function () {
  function computedData(options) {
    const nextData = this.computed(options) || {}
    const changedData = Object.keys(nextData).reduce((prev, item) => {
      // 移除 _ $ 开头的保留 props
      if (item[0] === '_' || item[0] === '$') {
        return prev;
      }
      if (typeof nextData[item] === 'function') {
        return prev;
      }
      if (equal(this.data[item], nextData[item])) {
        return prev;
      }
      // eslint-disable-next-line no-param-reassign
      prev[item] = nextData[item];
      return prev;
    }, {});
    if (Object.keys(changedData).length === 0) {
      return;
    }
    this.setData(changedData)
  }
  return {
    didMount()  {
      computedData.call(this, { lifeCycle: 'didMount'});
    },
    didUpdate()  {
      computedData.call(this, { lifeCycle: 'didUpdate'})
    },
  }
}