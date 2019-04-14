// エラーチェック
'use stric';
{
// document.getElementById でid属性を取得
  const btn = document.getElementById('btn');
// click したら次の処理を実行。アロー関数を書く
  btn.addEventListener('click', () => {
    btn.textContent = 'hit!';
  });
}
