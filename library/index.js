(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LiveEditHTML = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var core = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var LiveEditHTML = function () {
	    var init = function (selector) {
	        document.querySelectorAll(selector).forEach(function (e) {
	            e.classList.add('live-edit-html-target');
	            e.addEventListener('click', function (event) {
	                event.stopPropagation(); // イベントの伝播を停止する
	                event.preventDefault(); // イベントのデフォルトの動作を抑制する
	                changeEditable(e);
	            });
	        });
	    };
	    var changeEditable = function (element) {
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
	    return {
	        init: init,
	    };
	};
	// export default LiveEditHTML;
	exports.default = LiveEditHTML;

	});

	unwrapExports(core);

	var dist = createCommonjsModule(function (module, exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(core, exports);

	});

	var index = unwrapExports(dist);

	return index;

}));
