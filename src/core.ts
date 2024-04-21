const LiveEditHTML = () => {
  const init = (selector: string) => {
    document.querySelectorAll(selector).forEach((e) => {
      e.classList.add('live-edit-html-target');
      e.addEventListener('click', (event) => {
        event.stopPropagation(); // イベントの伝播を停止する
        event.preventDefault(); // イベントのデフォルトの動作を抑制する
        changeEditable(e);
      })
    });
  }

  const changeEditable = (element: Element) => {
    if (!element.classList.contains('editing')) {
      // 編集前のスタイルを取得
      const computedStyle = window.getComputedStyle(element);
      const fontSize = computedStyle.fontSize;
      const fontWeight = computedStyle.fontWeight;
      const width = computedStyle.width;

      // 編集可能なテキストボックスを作成し、元のテキストを挿入
      const input = document.createElement('input');
      input.type = 'text';
      input.value = element.textContent?.trim() ?? '';
      // 元の要素のfontSize, Widthを引き継ぐ
      input.style.fontSize = fontSize;
      input.style.fontWeight = fontWeight;
      input.style.width = width;

      // 元の要素を非表示にし、編集用のテキストボックスを表示
      element.innerHTML = '';
      element.appendChild(input);

      // テキストボックスからフォーカスが外れた時に内容を元の要素に反映
      input.addEventListener('blur', () => {
        element.classList.remove('editing');
        element.textContent = input.value;
      });

      // テキストボックスにフォーカスを設定
      input.focus();

      element.classList.add('editing');
    }
  };

  return {
    init,
  }
}

// export default LiveEditHTML;
export default LiveEditHTML;
