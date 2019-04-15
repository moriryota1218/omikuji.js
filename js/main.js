// エラーチェック
'use stric';
{
  // document.getElementById でid属性を取得
  const btn = document.getElementById('btn');
  // click したら次の処理を実行。アロー関数を書く
  btn.addEventListener('click', () => {
    // 定数results（結果）を指定して配列
    // const results = ['凶', '小凶', '中凶', '大凶','大吉'];
    //  乱数を設定。lengthを指定して配列の要素が増えた時に書き直さなくていい
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    const n = Math.random(); //乱数生成して条件分岐で確率を操る
    if (n < 0.05) {
      btn.textContent = '大吉'; //5%
    } else if (n < 0.2) {
      btn.textContent = '大凶'; //15%
    } else {
      btn.textContent = '凶'; //80%
    }
  });
  // クリックした時のイベントを指定し、btn クラスを操作する
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  // 押し込まれた状態を解除し、ボタンが上った状態にする
  btn.addEventListener('mouseup', () => {
    // ボタンクラスを削除する
    btn.classList.remove('pressed');
  });
}
