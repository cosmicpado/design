/* 이 문서 사이트의 공용 동작 — 윗줄 그리기 · 화면 색(자동/밝게/어둡게) · 예시 안의 고르기 단추 */
(function () {
  var KEY = 'cbDesignTheme';
  function saved() { try { return localStorage.getItem(KEY) || 'auto'; } catch (e) { return 'auto'; } }
  function apply(mode) {
    var dark = mode === 'dark' || (mode === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
  apply(saved());   // 그리기 전에 먼저 — 깜빡임 막기

  var PAGES = [['index.html', '소개'], ['styles.html', '스타일'], ['components.html', '컴포넌트'], ['patterns.html', '패턴']];
  function header() {
    var here = (location.pathname.split('/').pop() || 'index.html');
    var nav = PAGES.map(function (p) {
      return '<a href="' + p[0] + '"' + (p[0] === here ? ' class="on" aria-current="page"' : '') + '>' + p[1] + '</a>';
    }).join('');
    var mode = saved();
    var seg = [['auto', '자동'], ['light', '밝게'], ['dark', '어둡게']].map(function (m) {
      return '<button type="button" data-mode="' + m[0] + '"' + (m[0] === mode ? ' class="on" aria-pressed="true"' : ' aria-pressed="false"') + '>' + m[1] + '</button>';
    }).join('');
    var top = document.createElement('header');
    top.className = 'top';
    top.innerHTML = '<div class="in"><a class="logo" href="index.html"><i aria-hidden="true">🚒</i>cosmicpado 디자인</a>' +
      '<nav aria-label="문서">' + nav + '</nav><div class="seg" role="group" aria-label="화면 색">' + seg + '</div></div>';
    document.body.insertBefore(top, document.body.firstChild);
    top.querySelector('.seg').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var m = b.getAttribute('data-mode');
      try { localStorage.setItem(KEY, m); } catch (err) {}
      apply(m);
      top.querySelectorAll('.seg button').forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
    });
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (saved() === 'auto') apply('auto'); });
  }

  /* 예시 안 고르기 — data-pick 묶음에서 누른 것만 .on */
  function demos() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pick] button'); if (!b) return;
      b.parentNode.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
    });
  }
  function start() { header(); demos(); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
