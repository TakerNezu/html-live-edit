"use strict";
var LiveEditHTML = /** @class */ (function () {
    function LiveEditHTML(selector) {
        var _this = this;
        document.querySelectorAll(selector).forEach(function (e) {
            e.classList.add('live-edit-html-target');
            e.addEventListener('click', function (event) {
                event.stopPropagation(); // イベントの伝播を停止する
                event.preventDefault(); // イベントのデフォルトの動作を抑制する
                _this.changeEditable(e);
            });
        });
    }
    LiveEditHTML.prototype.changeEditable = function (element) {
        var _a, _b;
        if (!element.classList.contains('editing')) {
            // 編集前のスタイルを取得
            var computedStyle = window.getComputedStyle(element);
            var fontSize = computedStyle.fontSize;
            var fontWeight = computedStyle.fontWeight;
            var width = computedStyle.width;
            // 編集可能なテキストボックスを作成し、元のテキストを挿入
            var input_1 = document.createElement('input');
            input_1.type = 'text';
            input_1.value = (_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
            // 元の要素のfontSize, Widthを引き継ぐ
            input_1.style.fontSize = fontSize;
            input_1.style.fontWeight = fontWeight;
            input_1.style.width = width;
            // 元の要素を非表示にし、編集用のテキストボックスを表示
            element.innerHTML = '';
            element.appendChild(input_1);
            // テキストボックスからフォーカスが外れた時に内容を元の要素に反映
            input_1.addEventListener('blur', function () {
                element.classList.remove('editing');
                element.textContent = input_1.value;
            });
            // テキストボックスにフォーカスを設定
            input_1.focus();
            element.classList.add('editing');
        }
    };
    return LiveEditHTML;
}());
//# sourceMappingURL=index.js.map