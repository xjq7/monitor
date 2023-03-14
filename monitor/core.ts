import Emittery from 'emittery';

interface Options {
  appId: string;
}

interface Base {
  // 应用 id
  appId: string;
  id: string;
  // 时间戳
  t: number;
  // 设备信息
  ua: string;
  ip: string;
  // 版本
  version: string;

  url: string

  // sdk 信息
  sdk: {
    version: string
  }
}

class Monitor {
  private em: Emittery;

  constructor(options: Options) {
    this.em = new Emittery();
  }
}

const a = {"trace":{"environment":"production","public_key":"12ad6b43bad848d79b524d96a564812c","trace_id":"69a0574910d84df9a76ca65a76573b23",
{"type":"transaction"}
{"contexts":{"trace":{"op":"pageload","span_id":"854506deb982f4a5","tags":{"effectiveConnectionType":"4g","deviceMemory":"8 GB","hardwareConcurrency":"12","lcp.element":"body > div#root > div.App > h1","lcp.size":20475,"cls.source.1":"body > div#root > div.App > h1 > "},"trace_id":"69a0574910d84df9a76ca65a76573b23"}},"spans":[{"description":"Main UI thread blocked","op":"ui.long-task","parent_span_id":"854506deb982f4a5","span_id":"94595b149a2d7814","start_timestamp":1678796161.6315,"timestamp":1678796161.7065,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"unloadEvent","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"89aee46b48e9cc13","start_timestamp":1678796161.5037,"timestamp":1678796161.5037,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"domContentLoadedEvent","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"9c6f076dcb1dd1a4","start_timestamp":1678796161.6478,"timestamp":1678796161.6512,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"loadEvent","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"b6efe4b2f41a7a86","start_timestamp":1678796161.8679,"timestamp":1678796161.8694,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"connect","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"b079e256e549725d","start_timestamp":1678796161.4968,"timestamp":1678796161.497,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"cache","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"ac888c051159632b","start_timestamp":1678796161.4914,"timestamp":1678796161.4966,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"DNS","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"b043ae0cd86d4046","start_timestamp":1678796161.4966,"timestamp":1678796161.4968,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"request","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"899bef09fa289193","start_timestamp":1678796161.497,"timestamp":1678796161.5007,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"response","op":"browser","parent_span_id":"854506deb982f4a5","span_id":"9ea329aa781a6ed9","start_timestamp":1678796161.5002,"timestamp":1678796161.5007,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":80879,"Encoded Body Size":80579,"Decoded Body Size":80579,"resource.render_blocking_status":"non-blocking"},"description":"/@vite/client","op":"resource.script","parent_span_id":"854506deb982f4a5","span_id":"8ec9acd12e403b15","start_timestamp":1678796161.506,"timestamp":1678796161.5214,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":3317,"Encoded Body Size":3017,"Decoded Body Size":3017,"resource.render_blocking_status":"non-blocking"},"description":"/src/main.tsx","op":"resource.script","parent_span_id":"854506deb982f4a5","span_id":"ab6c74e2a88304a3","start_timestamp":1678796161.5061,"timestamp":1678796161.5216,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":13235,"Encoded Body Size":12935,"Decoded Body Size":12935,"resource.render_blocking_status":"non-blocking"},"description":"/@react-refresh","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"9489ee2e64ab316b","start_timestamp":1678796161.5628998,"timestamp":1678796161.5663998,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":36419,"Encoded Body Size":36119,"Decoded Body Size":36119,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7f5395bb","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"8a76a3e669c88ef1","start_timestamp":1678796161.5678,"timestamp":1678796161.5748,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":519,"Encoded Body Size":219,"Decoded Body Size":219,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/react.js?v=7eb482cf","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"93ff5281fce7b2d2","start_timestamp":1678796161.5679998,"timestamp":1678796161.5751998,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":926892,"Encoded Body Size":926592,"Decoded Body Size":926592,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/react-dom_client.js?v=0099df2f","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"a11f3e9453c63419","start_timestamp":1678796161.5681,"timestamp":1678796161.5829,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":8891,"Encoded Body Size":8591,"Decoded Body Size":8591,"resource.render_blocking_status":"non-blocking"},"description":"/src/App.tsx","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"a7f1b6381eabf8ad","start_timestamp":1678796161.5683,"timestamp":1678796161.5804,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":2042,"Encoded Body Size":1742,"Decoded Body Size":1742,"resource.render_blocking_status":"non-blocking"},"description":"/src/index.css","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"a8542deed2758676","start_timestamp":1678796161.5684,"timestamp":1678796161.5812,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":314773,"Encoded Body Size":314473,"Decoded Body Size":314473,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/@sentry_react.js?v=fd452a19","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"b872d1e99886821c","start_timestamp":1678796161.5686,"timestamp":1678796161.5855,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":69429,"Encoded Body Size":69129,"Decoded Body Size":69129,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/@sentry_tracing.js?v=3707e5d6","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"91ebfa9c43824cef","start_timestamp":1678796161.5688,"timestamp":1678796161.5853,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":3494,"Encoded Body Size":3194,"Decoded Body Size":3194,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.pnpm/vite@4.1.4/node_modules/vite/dist/client/env.mjs","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"90a8eff6a56c6310","start_timestamp":1678796161.5692,"timestamp":1678796161.5878,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":78219,"Encoded Body Size":77919,"Decoded Body Size":77919,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/chunk-2LKM7OV2.js?v=ee3155f5","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"936d04ce87049bd8","start_timestamp":1678796161.6039999,"timestamp":1678796161.6109,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":1840,"Encoded Body Size":1540,"Decoded Body Size":1540,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/chunk-4EOJPDL2.js?v=ee3155f5","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"bf488e3376e7d1b8","start_timestamp":1678796161.6042,"timestamp":1678796161.6097999,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":338,"Encoded Body Size":38,"Decoded Body Size":38,"resource.render_blocking_status":"non-blocking"},"description":"/src/assets/react.svg?import","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"aa7526ea49ce8066","start_timestamp":1678796161.6062999,"timestamp":1678796161.6134999,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":1422,"Encoded Body Size":1122,"Decoded Body Size":1122,"resource.render_blocking_status":"non-blocking"},"description":"/src/App.css","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"a1bdcaf3b223afd8","start_timestamp":1678796161.6066,"timestamp":1678796161.6136,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":153625,"Encoded Body Size":153325,"Decoded Body Size":153325,"resource.render_blocking_status":"non-blocking"},"description":"/node_modules/.vite/deps/chunk-MSOZ4BOE.js?v=ee3155f5","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"82b7103744af2c68","start_timestamp":1678796161.6074,"timestamp":1678796161.6146,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"sentry-tracing-init","op":"mark","parent_span_id":"854506deb982f4a5","span_id":"9ed72f77a8d46b26","start_timestamp":1678796161.6397,"timestamp":1678796161.6397,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":1797,"Encoded Body Size":1497,"Decoded Body Size":1497,"resource.render_blocking_status":"non-blocking"},"description":"/vite.svg","op":"resource.img","parent_span_id":"854506deb982f4a5","span_id":"adcc41d1305960c1","start_timestamp":1678796161.7156,"timestamp":1678796161.7408,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":4426,"Encoded Body Size":4126,"Decoded Body Size":4126,"resource.render_blocking_status":"non-blocking"},"description":"/src/assets/react.svg","op":"resource.img","parent_span_id":"854506deb982f4a5","span_id":"b6a09bf2255cbca8","start_timestamp":1678796161.7158,"timestamp":1678796161.7411,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"first-paint","op":"paint","parent_span_id":"854506deb982f4a5","span_id":"93668d3de3029d6f","start_timestamp":1678796161.8088999,"timestamp":1678796161.8088999,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"first-contentful-paint","op":"paint","parent_span_id":"854506deb982f4a5","span_id":"bef52e83828e7263","start_timestamp":1678796161.8088999,"timestamp":1678796161.8088999,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"@grammarly-extension:checkScriptInitStart","op":"mark","parent_span_id":"854506deb982f4a5","span_id":"8637f742ad2ffc91","start_timestamp":1678796161.8356,"timestamp":1678796161.8356,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"description":"@grammarly-extension:checkScriptInitEnd","op":"mark","parent_span_id":"854506deb982f4a5","span_id":"be978ed31e6f5b0c","start_timestamp":1678796161.8421,"timestamp":1678796161.8421,"trace_id":"69a0574910d84df9a76ca65a76573b23"},{"data":{"Transfer Size":1797,"Encoded Body Size":1497,"Decoded Body Size":1497,"resource.render_blocking_status":"non-blocking"},"description":"/vite.svg","op":"resource.other","parent_span_id":"854506deb982f4a5","span_id":"9c2e5eab29da4091","start_timestamp":1678796161.8836,"timestamp":1678796161.8937,"trace_id":"69a0574910d84df9a76ca65a76573b23"}],"start_timestamp":1678796161.4914,"tags":{"effectiveConnectionType":"4g","deviceMemory":"8 GB","hardwareConcurrency":"12","lcp.element":"body > div#root > div.App > h1","lcp.size":20475,"cls.source.1":"body > div#root > div.App > h1 > "},"timestamp":1678796161.8937,"transaction":"/","type":"transaction","transaction_info":{"source":"url"},"measurements":{"cls":{"value":0.0048405988400266504,"unit":""},"lcp":{"value":317.49987602233887,"unit":"millisecond"},"fp":{"value":317.49987602233887,"unit":"millisecond"},"fcp":{"value":317.49987602233887,"unit":"millisecond"},"connection.rtt":{"value":150,"unit":"millisecond"},"ttfb":{"value":8.800029754638672,"unit":"millisecond"},"ttfb.requestTime":{"value":3.200054168701172,"unit":"millisecond"}},"platform":"javascript","event_id":"2e6f9b1d40b5496fb61f5a8f9127d361","environment":"production",