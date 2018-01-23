module.exports = {
  /* For now: default to cdn. */
  //从cdn加载，
  //srcPath:cdn路径
  //callback 从cnd获取资源之后，执行函数
  load(srcPath = 'https://cdn.bootcss.com/monaco-editor/0.10.1/min', callback) {
    //查看是否有monaco对象，有的话就不用加载了，没有的话继续执行
    if (window.monaco) {
      callback();
      return;
    }

    //require 路径配置
    const config = {
      paths: {
        vs: srcPath + '/vs'
      }
    };

    //生成全局路径
    const loaderUrl = `${config.paths.vs}/loader.js`;

    //加载AMD规范的文件
    const onGotAmdLoader = () => {

      if (window.LOADER_PENDING) {
        window.require.config(config);
      }

      // Load monaco 加载monaco的editor.main 文件 ，editor.main加载后，monaco对象已经加载完成 
      window.require(['vs/editor/editor.main'], () => {
        callback();
      });

      // Call the delayed callbacks when AMD loader has been loaded
      // 加载AMD加载程序后调用延迟回调
      if (window.LOADER_PENDING) {
        window.LOADER_PENDING = false;
        const loaderCallbacks = window.LOADER_CALLBACKS;
        if (loaderCallbacks && loaderCallbacks.length) {
          let currentCallback = loaderCallbacks.shift();
          while (currentCallback) {
            currentCallback.fn.call(currentCallback.window);
            currentCallback = loaderCallbacks.shift();
          }
        }
      }
    };

    // Load AMD loader if necessary
    // 如有必要，加载AMD加载程序
    if (window.LOADER_PENDING) {
      // We need to avoid loading multiple loader.js when there are multiple editors loading concurrently
      // 当有多个编辑器同时加载时，我们需要避免加载多个loader . js
      //  delay to call callbacks except the first one
      //  调用回调的延迟(第一个回调除外)
      window.LOADER_CALLBACKS = window.LOADER_CALLBACKS || [];
      window.LOADER_CALLBACKS.push({
        window: this,
        fn: onGotAmdLoader
      });
    } else {
      if (typeof window.require === 'undefined') {
        const loaderScript = window.document.createElement('script');
        loaderScript.type = 'text/javascript';
        loaderScript.src = loaderUrl;
        loaderScript.addEventListener('load', onGotAmdLoader);
        window.document.body.appendChild(loaderScript);
        window.LOADER_PENDING = true;
      } else {
        onGotAmdLoader();
      }
    }
  }
}
