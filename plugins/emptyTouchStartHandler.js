if (process.client) {
  // iOS で、タッチした際に CSS の hover が効くようにする
  // 参考 : https://cafe-system.com/system2244.html
  (function () {
    document.body.addEventListener('touchstart', () => {});
  })();
}
