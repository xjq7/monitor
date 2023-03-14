/*
 * @Date: 2023-03-10 13:58:14
 * @LastEditors: 夏洁琼 xiajieqiong@tuzhanai.com
 * @FilePath: \monitor\src\timing.ts
 * @Author: 夏洁琼 xiajieqiong@tuzhanai.com
 * @Description:
 * @LastEditTime: 2023-03-14 11:49:37
 */

interface Timing {
  domainLookupDuration?: number;
  redirectCount?: number;
  redirectDuration?: number;
  //
  FCP?: number;
  //
  FP?: number;
  //
  LCP?: number;
  // 首次可交互时间, domInteractive - fetchStart
  domInteractive?: number;
}

// V2 是相对时间, V1 是时间戳
interface IPerformanceTimingV2 {
  // unload 事件开始时间
  readonly unloadEventStart: number;
  // unload 事件结束时间
  readonly unloadEventEnd: number;

  // unload 上一个文档后的时间, 如无上一个文档, 则等于 fetchStart
  readonly navigationStart: number;

  // 重定向开始时间, 直到 HTTP 响应结束, 如果重定向非同源, 则为 0
  readonly redirectStart: number;
  // 重定向结束时间, 如果重定向非同源, 则为 0
  readonly redirectEnd: number;
  // 重定向次数, 如果重定向非同源, 则为 0
  readonly redirectCount: number;

  // 浏览器发起请求的时间
  readonly fetchStart: number;

  // DNS 解析开始时间, 存在缓存时等于 fetchStart
  readonly domainLookupStart: number;
  // DNS 解析完成时间, 存在缓存时等于 fetchStart
  readonly domainLookupEnd: number;

  // 浏览器与服务器开始连接时间, 持久连接时等于 fetchStart
  readonly connectStart: number;
  // https 连接开始时间
  readonly secureConnectionStart: number;
  // 浏览器与服务器连接建立时间, 持久连接时等于 fetchStart
  readonly connectEnd: number;

  // 发起 HTTP 请求时间
  readonly requestStart: number;
  // 浏览器开始接收响应时间, 无论是从服务端还是缓存接收
  readonly responseStart: number;
  // 浏览器接收响应数据完成时间, 或者连接关闭时间
  readonly responseEnd: number;

  // 浏览器开始解析第一批 HTML 节点
  readonly domLoading: number;
  // 浏览器完成对所有 HTML 的解析并且 DOM 构建完成的时间点, 包含同步的 css js 资源
  readonly domInteractive: number;

  // HTML 加载完成时间, 无需等待样式, 图片, 子资源加载
  readonly domContentLoadedEventEnd: number;
  // HTML 加载开始时间
  readonly domContentLoadedEventStart: number;
 
  // 文档加载完成, 资源加载完成, readyState 切换为 complete
  readonly domComplete: number;

  // load 事件开始时间
  readonly loadEventStart: number;
  // load 事件结束时间
  readonly loadEventEnd: number;
}

export function timing() {
  const performance = window.performance;
  if (!performance) return;

  // v2
  if (!!window.PerformanceObserver) {
    const timing: Timing = {};

    const perfObserver = (
      entries: PerformanceObserverEntryList,
      observer: PerformanceObserver
    ) => {
      entries.getEntries().forEach((entry) => {
        const { entryType, name } = entry;

        if (entryType === 'navigation') {
          const t = entry.toJSON() as IPerformanceTimingV2;
          timing.domainLookupDuration = t.domainLookupEnd - t.domainLookupStart;
          timing.redirectDuration = t.redirectEnd - t.redirectStart;
          timing.redirectCount = t.redirectCount;
          timing.domInteractive = t.domInteractive;
        }

        if (entryType === 'paint') {
          if (name === 'first-paint') {
            timing.FP = entry.startTime;
          }
          if (name === 'first-contentful-paint') {
            timing.FCP = entry.startTime;
          }
        }
        if (entryType === 'largest-contentful-paint') {
          timing.LCP = entry.startTime;
        }
      });
    };

    const observer = new PerformanceObserver(perfObserver);
    observer.observe({
      entryTypes: [
        'navigation',
        'paint',
        'largest-contentful-paint',
        'longtask',
      ],
    });

    const resourceObserverCallback = (
      entries: PerformanceObserverEntryList,
      observer: PerformanceObserver
    ) => {
      entries.getEntries().forEach((entry) => {
        const { entryType, name } = entry;
        console.log(entry, 'entry');
      });
    };

    const resourceObserver = new PerformanceObserver(resourceObserverCallback);
    resourceObserver.observe({ type: 'resource' });

    console.log(performance.getEntries());
  } else {
  }
}
