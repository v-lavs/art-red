(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/nice-select2/dist/js/nice-select2.js
  var require_nice_select2 = __commonJS({
    "node_modules/nice-select2/dist/js/nice-select2.js"(exports2, module2) {
      !(function(e, t) {
        "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports2 ? exports2.NiceSelect = t() : e.NiceSelect = t();
      })(self, () => (() => {
        "use strict";
        var _h_instances, e_fn, o_fn, d_fn, a_fn, l_fn, c_fn, p_fn, u_fn, t_fn, r_fn, S_fn, w_fn, m_fn, y_fn, i_fn, s_fn, L_fn, v_fn, b_fn, E_fn, x_fn, g_fn, f_fn, n_fn, h_fn, C_fn;
        var e = { d: (t2, s2) => {
          for (var i2 in s2) e.o(s2, i2) && !e.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: s2[i2] });
        }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        } }, t = {};
        e.r(t), e.d(t, { bind: () => u, default: () => p });
        const s = (e2, t2, s2 = {}) => {
          let i2;
          i2 = "click" === t2 ? MouseEvent : "change" === t2 ? Event : t2.includes("focus") ? FocusEvent : UIEvent;
          const l2 = new i2(t2, { bubbles: true, cancelable: false, ...s2 });
          e2.dispatchEvent(l2);
        }, i = (e2) => s(e2, "click"), l = (e2) => s(e2, "change"), n = (e2) => s(e2, "modalclose"), o = (e2, t2) => void 0 !== e2[t2] ? e2[t2] : e2.getAttribute(t2), d = (e2, t2) => e2?.classList.contains(t2), a = (e2, t2) => e2?.classList.add(t2), r = (e2, t2) => e2?.classList.remove(t2), c = { data: null, searchable: true, showSelectedItems: true, placeholder: "Select an option", searchtext: "Search", selectedtext: "selected", hideSelect: true };
        class h {
          constructor(e2, t2 = {}) {
            __privateAdd(this, _h_instances);
            if (!e2) throw new Error("No element provided to NiceSelect");
            if (!(e2 instanceof Element)) throw new Error("Invalid element provided to NiceSelect - must be a valid DOM element");
            this.el = e2, this.el._niceSelect = this, this.config = { ...c, ...t2 }, this.data = this.config.data, this.selectedOptions = [], this.placeholder = o(this.el, "placeholder") || this.config.placeholder, this.searchtext = o(this.el, "searchtext") || this.config.searchtext, this.selectedtext = o(this.el, "selectedtext") || this.config.selectedtext, this.dropdown = null, this.selectionList = null, this.multiple = o(this.el, "multiple"), this.disabled = o(this.el, "disabled"), __privateMethod(this, _h_instances, e_fn).call(this), __privateMethod(this, _h_instances, t_fn).call(this);
          }
          update(e2 = "") {
            var _a;
            let t2 = this;
            "" != e2 && (t2 = e2.target._niceSelect), __privateMethod(_a = t2, _h_instances, s_fn).call(_a);
          }
          disable() {
            this.disabled || (this.disabled = true, a(this.dropdown, "disabled"));
          }
          enable() {
            this.disabled && (this.disabled = false, r(this.dropdown, "disabled"));
          }
          clear() {
            __privateMethod(this, _h_instances, i_fn).call(this), this.selectedOptions = [], __privateMethod(this, _h_instances, l_fn).call(this), this.update(), l(this.el);
          }
          destroy() {
            this.selectionList && __privateMethod(this, _h_instances, n_fn).call(this), this.dropdown && (this.dropdown.remove(), this.el.classList.remove("hidden-select"));
          }
          focus(e2 = "") {
            var t2;
            if (d(this.dropdown, "open") ? this.multiple ? e2 === this.dropdown.querySelector(".multiple-options") && (r(this.dropdown, "open"), n(this.el)) : (r(this.dropdown, "open"), n(this.el)) : (a(this.dropdown, "open"), t2 = this.el, s(t2, "modalopen")), d(this.dropdown, "open")) {
              const e3 = this.dropdown.querySelector(".nice-select-search");
              e3 && (e3.value = "", e3.focus());
              const t3 = this.dropdown.querySelector(".focus");
              t3 && r(t3, "focus");
              const s2 = this.dropdown.querySelector(".selected");
              s2 && a(s2, "focus"), this.dropdown.querySelectorAll("ul li").forEach((e4) => e4.style.display = "");
            } else this.dropdown.focus();
          }
        }
        _h_instances = new WeakSet();
        e_fn = function(e2 = true) {
          this.data ? __privateMethod(this, _h_instances, o_fn).call(this, this.data) : __privateMethod(this, _h_instances, d_fn).call(this, e2), this.el.classList.remove("hidden-select"), __privateMethod(this, _h_instances, a_fn).call(this), this.config.hideSelect && this.el.classList.add("hidden-select"), __privateMethod(this, _h_instances, r_fn).call(this);
        };
        o_fn = function(e2) {
          this.options = e2.map((e3) => ({ data: e3, attributes: { selected: !!e3.selected, disabled: !!e3.disabled, optgroup: "optgroup" === e3.value } }));
        };
        d_fn = function(e2) {
          const t2 = Array.from(this.el.querySelectorAll("option,optgroup")), s2 = [], i2 = [];
          this.data = t2.map((t3) => {
            let l2, n2 = t3.selected;
            e2 && t3.selected && !t3.defaultSelected && (n2 = false), l2 = "OPTGROUP" === t3.tagName ? { text: t3.label, value: "optgroup" } : { text: t3.dataset.display ?? t3.innerText, value: t3.value, extra: t3.dataset.extra, selected: n2, disabled: t3.disabled };
            const o2 = { selected: n2, disabled: t3.disabled, optgroup: "OPTGROUP" === t3.tagName }, d2 = { data: l2, attributes: o2, element: null };
            return s2.push(d2), o2.selected && i2.push(d2), l2;
          }), this.options = s2, this.selectedOptions = i2;
        };
        a_fn = function() {
          const e2 = ["nice-select", o(this.el, "class") || "", this.disabled ? "disabled" : "", this.multiple ? "has-multiple" : ""].filter(Boolean), t2 = this.config.searchable ? `
      <div class="nice-select-search-box">
        <input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>
      </div>
    ` : "", s2 = `
      <div class="${e2.join(" ")}" tabindex="${this.disabled ? "" : 0}">
        <span class="${this.multiple ? "multiple-options" : "current"}"></span>
        <div class="nice-select-dropdown">
          ${t2}
          <ul class="list"></ul>
        </div>
      </div>
    `;
          this.el.insertAdjacentHTML("afterend", s2), this.dropdown = this.el.nextElementSibling, __privateMethod(this, _h_instances, l_fn).call(this), __privateMethod(this, _h_instances, c_fn).call(this);
        };
        l_fn = function() {
          if (this.multiple) {
            let e2 = "";
            "auto" === window.getComputedStyle(this.dropdown).width || this.selectedOptions.length < 2 ? (this.selectedOptions.forEach((t2, s2, i2) => {
              let l2 = t2.data.text;
              s2 !== i2.length - 1 && (l2 += ", ");
              let n2 = document.createElement("span");
              n2.classList.add("current"), n2.textContent = l2, e2 += n2.outerHTML;
            }), e2 = e2 || this.placeholder) : e2 = `${this.selectedOptions.length} ${this.selectedtext}`, this.dropdown.querySelector(".multiple-options").innerHTML = e2;
          } else {
            const e2 = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder;
            this.dropdown.querySelector(".current").textContent = e2;
          }
        };
        c_fn = function() {
          const e2 = this.dropdown.querySelector("ul");
          this.options.forEach((t2) => {
            this.multiple && this.config.showSelectedItems && __privateMethod(this, _h_instances, h_fn).call(this, t2), e2.appendChild(__privateMethod(this, _h_instances, p_fn).call(this, t2));
          });
        };
        p_fn = function(e2) {
          const t2 = document.createElement("li");
          if (t2.textContent = e2.data.text, void 0 !== e2.data.extra && t2.appendChild(__privateMethod(this, _h_instances, u_fn).call(this, e2.data.extra)), e2.attributes.optgroup) a(t2, "optgroup");
          else {
            t2.setAttribute("data-value", e2.data.value);
            const s2 = ["option"];
            e2.attributes.selected && s2.push("selected"), e2.attributes.disabled && s2.push("disabled"), t2.classList.add(...s2), t2.addEventListener("click", (t3) => __privateMethod(this, _h_instances, m_fn).call(this, e2, t3));
          }
          return e2.element = t2, t2;
        };
        u_fn = function(e2) {
          const t2 = document.createElement("span");
          return t2.innerHTML = e2, a(t2, "extra"), t2;
        };
        t_fn = function() {
          this.el.addEventListener("invalid", () => __privateMethod(this, _h_instances, f_fn).call(this, "invalid")), window.addEventListener("click", (e2) => __privateMethod(this, _h_instances, v_fn).call(this, e2)), this.el.addEventListener("change", this.update);
        };
        r_fn = function() {
          this.dropdown.addEventListener("click", (e2) => __privateMethod(this, _h_instances, w_fn).call(this, e2)), this.dropdown.addEventListener("keydown", (e2) => __privateMethod(this, _h_instances, b_fn).call(this, e2)), this.dropdown.addEventListener("focusin", () => {
            return e2 = this.el, s(e2, "focusin");
            var e2;
          }), this.dropdown.addEventListener("focusout", () => {
            return e2 = this.el, s(e2, "focusout");
            var e2;
          }), this.config.searchable && __privateMethod(this, _h_instances, S_fn).call(this);
        };
        S_fn = function() {
          const e2 = this.dropdown.querySelector(".nice-select-search");
          e2 && (e2.addEventListener("click", (e3) => e3.stopPropagation()), e2.addEventListener("input", (e3) => __privateMethod(this, _h_instances, g_fn).call(this, e3)));
        };
        w_fn = function(e2) {
          e2.preventDefault(), this.focus(e2.target);
        };
        m_fn = function(e2, t2) {
          const s2 = t2.target;
          if (!d(s2, "disabled")) {
            if (this.multiple) {
              let t3;
              d(s2, "selected") ? (t3 = false, r(s2, "selected"), this.selectedOptions = this.selectedOptions.filter((t4) => t4.data !== e2.data)) : (t3 = true, a(s2, "selected"), this.selectedOptions.push(e2)), e2.data.selected = t3, e2.attributes.selected = t3;
            } else {
              this.dropdown.querySelectorAll("li.selected").forEach((e3) => r(e3, "selected")), a(s2, "selected"), this.selectedOptions = [e2];
              let t3 = this.options.find((e3) => e3.attributes.selected);
              t3 && (t3.data.selected = false, t3.attributes.selected = false), e2.data.selected = true, e2.attributes.selected = true;
            }
            __privateMethod(this, _h_instances, l_fn).call(this), __privateMethod(this, _h_instances, y_fn).call(this), __privateMethod(this, _h_instances, L_fn).call(this);
          }
        };
        y_fn = function() {
          const e2 = this.el;
          this.selectedOptions.length > 0 ? e2.value = this.selectedOptions[0].data.value : (e2.value = "", e2.selectedIndex = -1), this.options.forEach((t2) => {
            let s2 = Array.from(e2.options).find((e3) => String(e3.dataset.display || e3.textContent).trim().toLowerCase() === String(t2.data.text).trim().toLowerCase());
            null == s2 && (s2 = Array.from(e2.options).find((e3) => String(e3.value).trim().toLowerCase() === String(t2.data.value).trim().toLowerCase())), null != s2 ? t2.attributes.selected ? s2.selected = true : s2.selected = false : console.warn(`No matching option found for value: "${t2.data.value}" in select element`, e2);
          }), e2.removeEventListener("change", this.update), l(e2), e2.addEventListener("change", this.update);
        };
        i_fn = function() {
          if (this.multiple) {
            const e2 = this.el;
            this.selectedOptions.forEach((t2) => {
              const s2 = e2.querySelector(`option[value="${t2.data.value}"]`);
              s2 && (s2.selected = false);
            });
          } else this.selectedOptions.length > 0 && (this.el.selectedIndex = -1);
          l(this.el);
        };
        s_fn = function() {
          if (this.dropdown) {
            const e2 = d(this.dropdown, "open");
            __privateMethod(this, _h_instances, n_fn).call(this), this.dropdown.remove(), this.data = null, __privateMethod(this, _h_instances, e_fn).call(this, false), e2 && i(this.dropdown);
          }
          o(this.el, "disabled") ? this.disable() : this.enable();
        };
        L_fn = function() {
          this.config.showSelectedItems && (__privateMethod(this, _h_instances, n_fn).call(this), this.selectedOptions.forEach((e2) => {
            __privateMethod(this, _h_instances, h_fn).call(this, e2);
          }));
        };
        v_fn = function(e2) {
          this.dropdown.contains(e2.target) || (r(this.dropdown, "open"), n(this.el));
        };
        b_fn = function(e2) {
          const t2 = this.dropdown.querySelector(".focus"), s2 = d(this.dropdown, "open");
          if (13 === e2.keyCode) i(s2 ? t2 : this.dropdown);
          else if (40 === e2.keyCode) {
            if (s2) {
              const e3 = __privateMethod(this, _h_instances, E_fn).call(this, t2);
              e3 && (t2 && r(t2, "focus"), a(e3, "focus"));
            } else i(this.dropdown);
            e2.preventDefault();
          } else if (38 === e2.keyCode) {
            if (s2) {
              const e3 = __privateMethod(this, _h_instances, x_fn).call(this, t2);
              e3 && (t2 && r(t2, "focus"), a(e3, "focus"));
            } else i(this.dropdown);
            e2.preventDefault();
          } else if (27 === e2.keyCode && s2) i(this.dropdown);
          else if (32 === e2.keyCode && s2) return false;
          const l2 = this.dropdown.querySelector(".focus");
          return l2 && l2.scrollIntoView({ block: "center" }), false;
        };
        E_fn = function(e2) {
          let t2 = e2 ? e2.nextElementSibling : this.dropdown.querySelector(".list .option");
          for (; t2; ) {
            if (!d(t2, "disabled") && "none" !== t2.style.display) return t2;
            t2 = t2.nextElementSibling;
          }
          return null;
        };
        x_fn = function(e2) {
          let t2 = e2 ? e2.previousElementSibling : this.dropdown.querySelector(".list .option:last-child");
          for (; t2; ) {
            if (!d(t2, "disabled") && "none" !== t2.style.display) return t2;
            t2 = t2.previousElementSibling;
          }
          return null;
        };
        g_fn = function(e2) {
          const t2 = e2.target.value.toLowerCase();
          if ("" === t2) this.options.forEach((e3) => e3.element.style.display = "");
          else if (d(this.dropdown, "open")) {
            const e3 = new RegExp(t2);
            this.options.forEach((t3) => {
              t3.element.style.display = e3.test(t3.data.text.toLowerCase()) ? "" : "none";
            });
          }
          this.dropdown.querySelectorAll(".focus").forEach((e3) => r(e3, "focus"));
          const s2 = __privateMethod(this, _h_instances, E_fn).call(this, null);
          s2 && a(s2, "focus");
        };
        f_fn = function(e2) {
          "invalid" === e2 ? (a(this.dropdown, "invalid"), r(this.dropdown, "valid")) : (a(this.dropdown, "valid"), r(this.dropdown, "invalid"));
        };
        n_fn = function() {
          null != this.selectionList && (this.selectionList.remove(), this.selectionList = null);
        };
        h_fn = function(e2) {
          if (!this.multiple || e2.data.disabled || "" == e2.data.value || !e2.attributes.selected) return;
          if (null == this.selectionList) this.selectionList = document.createElement("ul"), this.selectionList.classList.add("select-selection-list"), this.el.after(this.selectionList);
          else if (null != this.selectionList.querySelector(`[data-value="${e2.data.value}"]`)) return;
          let t2 = document.createElement("li");
          t2.classList.add("select-selection"), t2.dataset.value = e2.data.value;
          let s2 = document.createElement("button");
          s2.classList.add("small", "remove-select-selection");
          let i2 = document.createElement("span");
          i2.classList.add("remove-select-selection"), i2.textContent = "x", s2.appendChild(i2), t2.appendChild(s2), i2 = document.createElement("span"), i2.classList.add("selected-name"), i2.textContent = e2.data.text, t2.appendChild(i2), this.selectionList.appendChild(t2), t2.querySelectorAll(".remove-select-selection").forEach((e3) => e3.addEventListener("click", __privateMethod(this, _h_instances, C_fn).bind(this)));
        };
        C_fn = function(e2) {
          if (null == this.selectionList) return;
          if (null != e2.target && (e2 = e2.target), null == e2.matches || !e2.matches(".remove-select-selection")) return;
          let t2 = e2.closest("li.select-selection"), s2 = this.options.find((e3) => e3.data.value === t2.dataset.value).element;
          s2 && s2.matches(".selected") && s2.click();
        };
        const p = h;
        function u(e2, t2) {
          return new h(e2, t2);
        }
        return t;
      })());
    }
  });

  // src/js/vendors/nouislider.min.js
  !(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).noUiSlider = {});
  })(void 0, function(ut) {
    "use strict";
    function n(t2) {
      return "object" == typeof t2 && "function" == typeof t2.to;
    }
    function ct(t2) {
      t2.parentElement.removeChild(t2);
    }
    function pt(t2) {
      return null != t2;
    }
    function ft(t2) {
      t2.preventDefault();
    }
    function i(t2) {
      return "number" == typeof t2 && !isNaN(t2) && isFinite(t2);
    }
    function dt(t2, e2, r2) {
      0 < r2 && (gt(t2, e2), setTimeout(function() {
        vt(t2, e2);
      }, r2));
    }
    function ht(t2) {
      return Math.max(Math.min(t2, 100), 0);
    }
    function mt(t2) {
      return Array.isArray(t2) ? t2 : [t2];
    }
    function e(t2) {
      t2 = (t2 = String(t2)).split(".");
      return 1 < t2.length ? t2[1].length : 0;
    }
    function gt(t2, e2) {
      t2.classList && !/\s/.test(e2) ? t2.classList.add(e2) : t2.className += " " + e2;
    }
    function vt(t2, e2) {
      t2.classList && !/\s/.test(e2) ? t2.classList.remove(e2) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + e2.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function bt(t2) {
      var e2 = void 0 !== window.pageXOffset, r2 = "CSS1Compat" === (t2.compatMode || "");
      return { x: e2 ? window.pageXOffset : (r2 ? t2.documentElement : t2.body).scrollLeft, y: e2 ? window.pageYOffset : (r2 ? t2.documentElement : t2.body).scrollTop };
    }
    function s(t2, e2) {
      return 100 / (e2 - t2);
    }
    function a(t2, e2, r2) {
      return 100 * e2 / (t2[r2 + 1] - t2[r2]);
    }
    function l(t2, e2) {
      for (var r2 = 1; t2 >= e2[r2]; ) r2 += 1;
      return r2;
    }
    function r(t2, e2, r2) {
      if (r2 >= t2.slice(-1)[0]) return 100;
      var n2 = l(r2, t2), i2 = t2[n2 - 1], o2 = t2[n2], t2 = e2[n2 - 1], n2 = e2[n2];
      return t2 + (r2 = r2, a(o2 = [i2, o2], o2[0] < 0 ? r2 + Math.abs(o2[0]) : r2 - o2[0], 0) / s(t2, n2));
    }
    function o(t2, e2, r2, n2) {
      if (100 === n2) return n2;
      var i2 = l(n2, t2), o2 = t2[i2 - 1], s2 = t2[i2];
      return r2 ? (s2 - o2) / 2 < n2 - o2 ? s2 : o2 : e2[i2 - 1] ? t2[i2 - 1] + (t2 = n2 - t2[i2 - 1], i2 = e2[i2 - 1], Math.round(t2 / i2) * i2) : n2;
    }
    ut.PipsMode = void 0, (z = ut.PipsMode || (ut.PipsMode = {})).Range = "range", z.Steps = "steps", z.Positions = "positions", z.Count = "count", z.Values = "values", ut.PipsType = void 0, (z = ut.PipsType || (ut.PipsType = {}))[z.None = -1] = "None", z[z.NoValue = 0] = "NoValue", z[z.LargeValue = 1] = "LargeValue", z[z.SmallValue = 2] = "SmallValue";
    var u = (t.prototype.getDistance = function(t2) {
      for (var e2 = [], r2 = 0; r2 < this.xNumSteps.length - 1; r2++) e2[r2] = a(this.xVal, t2, r2);
      return e2;
    }, t.prototype.getAbsoluteDistance = function(t2, e2, r2) {
      var n2 = 0;
      if (t2 < this.xPct[this.xPct.length - 1]) for (; t2 > this.xPct[n2 + 1]; ) n2++;
      else t2 === this.xPct[this.xPct.length - 1] && (n2 = this.xPct.length - 2);
      r2 || t2 !== this.xPct[n2 + 1] || n2++;
      for (var i2, o2 = 1, s2 = (e2 = null === e2 ? [] : e2)[n2], a2 = 0, l2 = 0, u2 = 0, c2 = r2 ? (t2 - this.xPct[n2]) / (this.xPct[n2 + 1] - this.xPct[n2]) : (this.xPct[n2 + 1] - t2) / (this.xPct[n2 + 1] - this.xPct[n2]); 0 < s2; ) i2 = this.xPct[n2 + 1 + u2] - this.xPct[n2 + u2], 100 < e2[n2 + u2] * o2 + 100 - 100 * c2 ? (a2 = i2 * c2, o2 = (s2 - 100 * c2) / e2[n2 + u2], c2 = 1) : (a2 = e2[n2 + u2] * i2 / 100 * o2, o2 = 0), r2 ? (l2 -= a2, 1 <= this.xPct.length + u2 && u2--) : (l2 += a2, 1 <= this.xPct.length - u2 && u2++), s2 = e2[n2 + u2] * o2;
      return t2 + l2;
    }, t.prototype.toStepping = function(t2) {
      return t2 = r(this.xVal, this.xPct, t2);
    }, t.prototype.fromStepping = function(t2) {
      return (function(t3, e2, r2) {
        if (100 <= r2) return t3.slice(-1)[0];
        var n2 = l(r2, e2), i2 = t3[n2 - 1], o2 = t3[n2], t3 = e2[n2 - 1], n2 = e2[n2];
        return (r2 - t3) * s(t3, n2) * ((o2 = [i2, o2])[1] - o2[0]) / 100 + o2[0];
      })(this.xVal, this.xPct, t2);
    }, t.prototype.getStep = function(t2) {
      return t2 = o(this.xPct, this.xSteps, this.snap, t2);
    }, t.prototype.getDefaultStep = function(t2, e2, r2) {
      var n2 = l(t2, this.xPct);
      return (100 === t2 || e2 && t2 === this.xPct[n2 - 1]) && (n2 = Math.max(n2 - 1, 1)), (this.xVal[n2] - this.xVal[n2 - 1]) / r2;
    }, t.prototype.getNearbySteps = function(t2) {
      t2 = l(t2, this.xPct);
      return { stepBefore: { startValue: this.xVal[t2 - 2], step: this.xNumSteps[t2 - 2], highestStep: this.xHighestCompleteStep[t2 - 2] }, thisStep: { startValue: this.xVal[t2 - 1], step: this.xNumSteps[t2 - 1], highestStep: this.xHighestCompleteStep[t2 - 1] }, stepAfter: { startValue: this.xVal[t2], step: this.xNumSteps[t2], highestStep: this.xHighestCompleteStep[t2] } };
    }, t.prototype.countStepDecimals = function() {
      var t2 = this.xNumSteps.map(e);
      return Math.max.apply(null, t2);
    }, t.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    }, t.prototype.convert = function(t2) {
      return this.getStep(this.toStepping(t2));
    }, t.prototype.handleEntryPoint = function(t2, e2) {
      t2 = "min" === t2 ? 0 : "max" === t2 ? 100 : parseFloat(t2);
      if (!i(t2) || !i(e2[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
      this.xPct.push(t2), this.xVal.push(e2[0]);
      e2 = Number(e2[1]);
      t2 ? this.xSteps.push(!isNaN(e2) && e2) : isNaN(e2) || (this.xSteps[0] = e2), this.xHighestCompleteStep.push(0);
    }, t.prototype.handleStepPoint = function(t2, e2) {
      e2 && (this.xVal[t2] !== this.xVal[t2 + 1] ? (this.xSteps[t2] = a([this.xVal[t2], this.xVal[t2 + 1]], e2, 0) / s(this.xPct[t2], this.xPct[t2 + 1]), e2 = (this.xVal[t2 + 1] - this.xVal[t2]) / this.xNumSteps[t2], e2 = Math.ceil(Number(e2.toFixed(3)) - 1), e2 = this.xVal[t2] + this.xNumSteps[t2] * e2, this.xHighestCompleteStep[t2] = e2) : this.xSteps[t2] = this.xHighestCompleteStep[t2] = this.xVal[t2]);
    }, t);
    function t(e2, t2, r2) {
      var n2;
      this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [r2 || false], this.xNumSteps = [false], this.snap = t2;
      var i2 = [];
      for (Object.keys(e2).forEach(function(t3) {
        i2.push([mt(e2[t3]), t3]);
      }), i2.sort(function(t3, e3) {
        return t3[0][0] - e3[0][0];
      }), n2 = 0; n2 < i2.length; n2++) this.handleEntryPoint(i2[n2][1], i2[n2][0]);
      for (this.xNumSteps = this.xSteps.slice(0), n2 = 0; n2 < this.xNumSteps.length; n2++) this.handleStepPoint(n2, this.xNumSteps[n2]);
    }
    var c = { to: function(t2) {
      return void 0 === t2 ? "" : t2.toFixed(2);
    }, from: Number }, p = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, St = { tooltips: ".__tooltips", aria: ".__aria" };
    function f(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'step' is not numeric.");
      t2.singleStep = e2;
    }
    function d(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      t2.keyboardPageMultiplier = e2;
    }
    function h(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      t2.keyboardMultiplier = e2;
    }
    function m(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      t2.keyboardDefaultStep = e2;
    }
    function g(t2, e2) {
      if ("object" != typeof e2 || Array.isArray(e2)) throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === e2.min || void 0 === e2.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      t2.spectrum = new u(e2, t2.snap || false, t2.singleStep);
    }
    function v(t2, e2) {
      if (e2 = mt(e2), !Array.isArray(e2) || !e2.length) throw new Error("noUiSlider: 'start' option is incorrect.");
      t2.handles = e2.length, t2.start = e2;
    }
    function b(t2, e2) {
      if ("boolean" != typeof e2) throw new Error("noUiSlider: 'snap' option must be a boolean.");
      t2.snap = e2;
    }
    function S(t2, e2) {
      if ("boolean" != typeof e2) throw new Error("noUiSlider: 'animate' option must be a boolean.");
      t2.animate = e2;
    }
    function x(t2, e2) {
      if ("number" != typeof e2) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      t2.animationDuration = e2;
    }
    function xt(t2, e2) {
      var r2, n2 = [false];
      if ("lower" === e2 ? e2 = [true, false] : "upper" === e2 && (e2 = [false, true]), true === e2 || false === e2) {
        for (r2 = 1; r2 < t2.handles; r2++) n2.push(e2);
        n2.push(false);
      } else {
        if (!Array.isArray(e2) || !e2.length || e2.length !== t2.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        n2 = e2;
      }
      t2.connect = n2;
    }
    function y(t2, e2) {
      switch (e2) {
        case "horizontal":
          t2.ort = 0;
          break;
        case "vertical":
          t2.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function w(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      0 !== e2 && (t2.margin = t2.spectrum.getDistance(e2));
    }
    function E(t2, e2) {
      if (!i(e2)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (t2.limit = t2.spectrum.getDistance(e2), !t2.limit || t2.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function P(t2, e2) {
      var r2;
      if (!i(e2) && !Array.isArray(e2)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(e2) && 2 !== e2.length && !i(e2[0]) && !i(e2[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (0 !== e2) {
        for (Array.isArray(e2) || (e2 = [e2, e2]), t2.padding = [t2.spectrum.getDistance(e2[0]), t2.spectrum.getDistance(e2[1])], r2 = 0; r2 < t2.spectrum.xNumSteps.length - 1; r2++) if (t2.padding[0][r2] < 0 || t2.padding[1][r2] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var n2 = e2[0] + e2[1], e2 = t2.spectrum.xVal[0];
        if (1 < n2 / (t2.spectrum.xVal[t2.spectrum.xVal.length - 1] - e2)) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function C(t2, e2) {
      switch (e2) {
        case "ltr":
          t2.dir = 0;
          break;
        case "rtl":
          t2.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function N(t2, e2) {
      if ("string" != typeof e2) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var r2 = 0 <= e2.indexOf("tap"), n2 = 0 <= e2.indexOf("drag"), i2 = 0 <= e2.indexOf("fixed"), o2 = 0 <= e2.indexOf("snap"), s2 = 0 <= e2.indexOf("hover"), a2 = 0 <= e2.indexOf("unconstrained"), l2 = 0 <= e2.indexOf("invert-connects"), u2 = 0 <= e2.indexOf("drag-all"), e2 = 0 <= e2.indexOf("smooth-steps");
      if (i2) {
        if (2 !== t2.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        w(t2, t2.start[1] - t2.start[0]);
      }
      if (l2 && 2 !== t2.handles) throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
      if (a2 && (t2.margin || t2.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      t2.events = { tap: r2 || o2, drag: n2, dragAll: u2, smoothSteps: e2, fixed: i2, snap: o2, hover: s2, unconstrained: a2, invertConnects: l2 };
    }
    function V(t2, e2) {
      if (false !== e2) if (true === e2 || n(e2)) {
        t2.tooltips = [];
        for (var r2 = 0; r2 < t2.handles; r2++) t2.tooltips.push(e2);
      } else {
        if ((e2 = mt(e2)).length !== t2.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
        e2.forEach(function(t3) {
          if ("boolean" != typeof t3 && !n(t3)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
        }), t2.tooltips = e2;
      }
    }
    function A(t2, e2) {
      if (e2.length !== t2.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
      t2.handleAttributes = e2;
    }
    function k(t2, e2) {
      if (!n(e2)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      t2.ariaFormat = e2;
    }
    function M(t2, e2) {
      if (!n(r2 = e2) || "function" != typeof r2.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      var r2;
      t2.format = e2;
    }
    function U(t2, e2) {
      if ("boolean" != typeof e2) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      t2.keyboardSupport = e2;
    }
    function D(t2, e2) {
      t2.documentElement = e2;
    }
    function O(t2, e2) {
      if ("string" != typeof e2 && false !== e2) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      t2.cssPrefix = e2;
    }
    function L(e2, r2) {
      if ("object" != typeof r2) throw new Error("noUiSlider: 'cssClasses' must be an object.");
      "string" == typeof e2.cssPrefix ? (e2.cssClasses = {}, Object.keys(r2).forEach(function(t2) {
        e2.cssClasses[t2] = e2.cssPrefix + r2[t2];
      })) : e2.cssClasses = r2;
    }
    function yt(e2) {
      var r2 = { margin: null, limit: null, padding: null, animate: true, animationDuration: 300, ariaFormat: c, format: c }, n2 = { step: { r: false, t: f }, keyboardPageMultiplier: { r: false, t: d }, keyboardMultiplier: { r: false, t: h }, keyboardDefaultStep: { r: false, t: m }, start: { r: true, t: v }, connect: { r: true, t: xt }, direction: { r: true, t: C }, snap: { r: false, t: b }, animate: { r: false, t: S }, animationDuration: { r: false, t: x }, range: { r: true, t: g }, orientation: { r: false, t: y }, margin: { r: false, t: w }, limit: { r: false, t: E }, padding: { r: false, t: P }, behaviour: { r: true, t: N }, ariaFormat: { r: false, t: k }, format: { r: false, t: M }, tooltips: { r: false, t: V }, keyboardSupport: { r: true, t: U }, documentElement: { r: false, t: D }, cssPrefix: { r: true, t: O }, cssClasses: { r: true, t: L }, handleAttributes: { r: false, t: A } }, i2 = { connect: false, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: true, cssPrefix: "noUi-", cssClasses: p, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
      e2.format && !e2.ariaFormat && (e2.ariaFormat = e2.format), Object.keys(n2).forEach(function(t3) {
        if (pt(e2[t3]) || void 0 !== i2[t3]) n2[t3].t(r2, (pt(e2[t3]) ? e2 : i2)[t3]);
        else if (n2[t3].r) throw new Error("noUiSlider: '" + t3 + "' is required.");
      }), r2.pips = e2.pips;
      var t2 = document.createElement("div"), o2 = void 0 !== t2.style.msTransform, t2 = void 0 !== t2.style.transform;
      r2.transformRule = t2 ? "transform" : o2 ? "msTransform" : "webkitTransform";
      return r2.style = [["left", "top"], ["right", "bottom"]][r2.dir][r2.ort], r2;
    }
    function T(t2, f2, o2) {
      var i2, n2, l2, u2, s2, a2, c2 = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" }, p2 = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && (function() {
        var t3 = false;
        try {
          var e3 = Object.defineProperty({}, "passive", { get: function() {
            t3 = true;
          } });
          window.addEventListener("test", null, e3);
        } catch (t4) {
        }
        return t3;
      })(), d2 = t2, S2 = f2.spectrum, h2 = [], m2 = [], g2 = [], v2 = 0, b2 = {}, x2 = false, y2 = t2.ownerDocument, w2 = f2.documentElement || y2.documentElement, E2 = y2.body, r2 = "rtl" === y2.dir || 1 === f2.ort ? 0 : 100;
      function P2(t3, e3) {
        var r3 = y2.createElement("div");
        return e3 && gt(r3, e3), t3.appendChild(r3), r3;
      }
      function C2(t3, e3) {
        var r3, t3 = P2(t3, f2.cssClasses.origin), n3 = P2(t3, f2.cssClasses.handle);
        return P2(n3, f2.cssClasses.touchArea), n3.setAttribute("data-handle", String(e3)), f2.keyboardSupport && (n3.setAttribute("tabindex", "0"), n3.addEventListener("keydown", function(t4) {
          return (function(t5, e4) {
            if (V2() || A2(e4)) return false;
            var r4 = ["Left", "Right"], n4 = ["Down", "Up"], i3 = ["PageDown", "PageUp"], o3 = ["Home", "End"];
            f2.dir && !f2.ort ? r4.reverse() : f2.ort && !f2.dir && (n4.reverse(), i3.reverse());
            var s3 = t5.key.replace("Arrow", ""), a3 = s3 === i3[0], l3 = s3 === i3[1], i3 = s3 === n4[0] || s3 === r4[0] || a3, n4 = s3 === n4[1] || s3 === r4[1] || l3, r4 = s3 === o3[0], o3 = s3 === o3[1];
            if (!(i3 || n4 || r4 || o3)) return true;
            if (t5.preventDefault(), n4 || i3) {
              var u3 = i3 ? 0 : 1, u3 = st(e4)[u3];
              if (null === u3) return false;
              false === u3 && (u3 = S2.getDefaultStep(m2[e4], i3, f2.keyboardDefaultStep)), u3 *= l3 || a3 ? f2.keyboardPageMultiplier : f2.keyboardMultiplier, u3 = Math.max(u3, 1e-7), u3 *= i3 ? -1 : 1, u3 = h2[e4] + u3;
            } else u3 = o3 ? f2.spectrum.xVal[f2.spectrum.xVal.length - 1] : f2.spectrum.xVal[0];
            return et(e4, S2.toStepping(u3), true, true), $("slide", e4), $("update", e4), $("change", e4), $("set", e4), false;
          })(t4, e3);
        })), void 0 !== f2.handleAttributes && (r3 = f2.handleAttributes[e3], Object.keys(r3).forEach(function(t4) {
          n3.setAttribute(t4, r3[t4]);
        })), n3.setAttribute("role", "slider"), n3.setAttribute("aria-orientation", f2.ort ? "vertical" : "horizontal"), 0 === e3 ? gt(n3, f2.cssClasses.handleLower) : e3 === f2.handles - 1 && gt(n3, f2.cssClasses.handleUpper), t3.handle = n3, t3;
      }
      function N2(t3, e3) {
        return !!e3 && P2(t3, f2.cssClasses.connect);
      }
      function e2(t3, e3) {
        return !(!f2.tooltips || !f2.tooltips[e3]) && P2(t3.firstChild, f2.cssClasses.tooltip);
      }
      function V2() {
        return d2.hasAttribute("disabled");
      }
      function A2(t3) {
        return l2[t3].hasAttribute("disabled");
      }
      function k2() {
        a2 && (W("update" + St.tooltips), a2.forEach(function(t3) {
          t3 && ct(t3);
        }), a2 = null);
      }
      function M2() {
        k2(), a2 = l2.map(e2), I("update" + St.tooltips, function(t3, e3, r3) {
          a2 && f2.tooltips && false !== a2[e3] && (t3 = t3[e3], true !== f2.tooltips[e3] && (t3 = f2.tooltips[e3].to(r3[e3])), a2[e3].innerHTML = t3);
        });
      }
      function U2(t3, e3) {
        return t3.map(function(t4) {
          return S2.fromStepping(e3 ? S2.getStep(t4) : t4);
        });
      }
      function D2(d3) {
        var h3 = (function(t4) {
          if (t4.mode === ut.PipsMode.Range || t4.mode === ut.PipsMode.Steps) return S2.xVal;
          if (t4.mode !== ut.PipsMode.Count) return t4.mode === ut.PipsMode.Positions ? U2(t4.values, t4.stepped) : t4.mode === ut.PipsMode.Values ? t4.stepped ? t4.values.map(function(t5) {
            return S2.fromStepping(S2.getStep(S2.toStepping(t5)));
          }) : t4.values : [];
          if (t4.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var e4 = t4.values - 1, r3 = 100 / e4, n3 = []; e4--; ) n3[e4] = e4 * r3;
          return n3.push(100), U2(n3, t4.stepped);
        })(d3), m3 = {}, t3 = S2.xVal[0], e3 = S2.xVal[S2.xVal.length - 1], g3 = false, v3 = false, b3 = 0;
        return (h3 = h3.slice().sort(function(t4, e4) {
          return t4 - e4;
        }).filter(function(t4) {
          return !this[t4] && (this[t4] = true);
        }, {}))[0] !== t3 && (h3.unshift(t3), g3 = true), h3[h3.length - 1] !== e3 && (h3.push(e3), v3 = true), h3.forEach(function(t4, e4) {
          var r3, n3, i3, o3, s3, a3, l3, u3, t4 = t4, c3 = h3[e4 + 1], p3 = d3.mode === ut.PipsMode.Steps, f3 = (f3 = p3 ? S2.xNumSteps[e4] : f3) || c3 - t4;
          for (void 0 === c3 && (c3 = t4), f3 = Math.max(f3, 1e-7), r3 = t4; r3 <= c3; r3 = Number((r3 + f3).toFixed(7))) {
            for (a3 = (o3 = (i3 = S2.toStepping(r3)) - b3) / (d3.density || 1), u3 = o3 / (l3 = Math.round(a3)), n3 = 1; n3 <= l3; n3 += 1) m3[(s3 = b3 + n3 * u3).toFixed(5)] = [S2.fromStepping(s3), 0];
            a3 = -1 < h3.indexOf(r3) ? ut.PipsType.LargeValue : p3 ? ut.PipsType.SmallValue : ut.PipsType.NoValue, !e4 && g3 && r3 !== c3 && (a3 = 0), r3 === c3 && v3 || (m3[i3.toFixed(5)] = [r3, a3]), b3 = i3;
          }
        }), m3;
      }
      function O2(i3, o3, s3) {
        var t3, a3 = y2.createElement("div"), n3 = ((t3 = {})[ut.PipsType.None] = "", t3[ut.PipsType.NoValue] = f2.cssClasses.valueNormal, t3[ut.PipsType.LargeValue] = f2.cssClasses.valueLarge, t3[ut.PipsType.SmallValue] = f2.cssClasses.valueSub, t3), l3 = ((t3 = {})[ut.PipsType.None] = "", t3[ut.PipsType.NoValue] = f2.cssClasses.markerNormal, t3[ut.PipsType.LargeValue] = f2.cssClasses.markerLarge, t3[ut.PipsType.SmallValue] = f2.cssClasses.markerSub, t3), u3 = [f2.cssClasses.valueHorizontal, f2.cssClasses.valueVertical], c3 = [f2.cssClasses.markerHorizontal, f2.cssClasses.markerVertical];
        function p3(t4, e3) {
          var r3 = e3 === f2.cssClasses.value;
          return e3 + " " + (r3 ? u3 : c3)[f2.ort] + " " + (r3 ? n3 : l3)[t4];
        }
        return gt(a3, f2.cssClasses.pips), gt(a3, 0 === f2.ort ? f2.cssClasses.pipsHorizontal : f2.cssClasses.pipsVertical), Object.keys(i3).forEach(function(t4) {
          var e3, r3, n4;
          r3 = i3[e3 = t4][0], n4 = i3[t4][1], (n4 = o3 ? o3(r3, n4) : n4) !== ut.PipsType.None && ((t4 = P2(a3, false)).className = p3(n4, f2.cssClasses.marker), t4.style[f2.style] = e3 + "%", n4 > ut.PipsType.NoValue && ((t4 = P2(a3, false)).className = p3(n4, f2.cssClasses.value), t4.setAttribute("data-value", String(r3)), t4.style[f2.style] = e3 + "%", t4.innerHTML = String(s3.to(r3))));
        }), a3;
      }
      function L2() {
        s2 && (ct(s2), s2 = null);
      }
      function T2(t3) {
        L2();
        var e3 = D2(t3), r3 = t3.filter, t3 = t3.format || { to: function(t4) {
          return String(Math.round(t4));
        } };
        return s2 = d2.appendChild(O2(e3, r3, t3));
      }
      function j2() {
        var t3 = i2.getBoundingClientRect(), e3 = "offset" + ["Width", "Height"][f2.ort];
        return 0 === f2.ort ? t3.width || i2[e3] : t3.height || i2[e3];
      }
      function z2(n3, i3, o3, s3) {
        function e3(t3) {
          var e4, r4 = (function(e5, t4, r5) {
            var n4 = 0 === e5.type.indexOf("touch"), i4 = 0 === e5.type.indexOf("mouse"), o4 = 0 === e5.type.indexOf("pointer"), s4 = 0, a3 = 0;
            0 === e5.type.indexOf("MSPointer") && (o4 = true);
            if ("mousedown" === e5.type && !e5.buttons && !e5.touches) return false;
            if (n4) {
              var l3 = function(t5) {
                t5 = t5.target;
                return t5 === r5 || r5.contains(t5) || e5.composed && e5.composedPath().shift() === r5;
              };
              if ("touchstart" === e5.type) {
                n4 = Array.prototype.filter.call(e5.touches, l3);
                if (1 < n4.length) return false;
                s4 = n4[0].pageX, a3 = n4[0].pageY;
              } else {
                l3 = Array.prototype.find.call(e5.changedTouches, l3);
                if (!l3) return false;
                s4 = l3.pageX, a3 = l3.pageY;
              }
            }
            t4 = t4 || bt(y2), (i4 || o4) && (s4 = e5.clientX + t4.x, a3 = e5.clientY + t4.y);
            return e5.pageOffset = t4, e5.points = [s4, a3], e5.cursor = i4 || o4, e5;
          })(t3, s3.pageOffset, s3.target || i3);
          return !!r4 && (!(V2() && !s3.doNotReject) && (e4 = d2, t3 = f2.cssClasses.tap, !((e4.classList ? e4.classList.contains(t3) : new RegExp("\\b" + t3 + "\\b").test(e4.className)) && !s3.doNotReject) && (!(n3 === c2.start && void 0 !== r4.buttons && 1 < r4.buttons) && ((!s3.hover || !r4.buttons) && (p2 || r4.preventDefault(), r4.calcPoint = r4.points[f2.ort], void o3(r4, s3))))));
        }
        var r3 = [];
        return n3.split(" ").forEach(function(t3) {
          i3.addEventListener(t3, e3, !!p2 && { passive: true }), r3.push([t3, e3]);
        }), r3;
      }
      function H(t3) {
        var e3, r3, n3 = ht(n3 = 100 * (t3 - (n3 = i2, e3 = f2.ort, r3 = n3.getBoundingClientRect(), n3 = (t3 = n3.ownerDocument).documentElement, t3 = bt(t3), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t3.x = 0), e3 ? r3.top + t3.y - n3.clientTop : r3.left + t3.x - n3.clientLeft)) / j2());
        return f2.dir ? 100 - n3 : n3;
      }
      function F(t3, e3) {
        "mouseout" === t3.type && "HTML" === t3.target.nodeName && null === t3.relatedTarget && _(t3, e3);
      }
      function R(t3, e3) {
        if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t3.buttons && 0 !== e3.buttonsProperty) return _(t3, e3);
        t3 = (f2.dir ? -1 : 1) * (t3.calcPoint - e3.startCalcPoint);
        K(0 < t3, 100 * t3 / e3.baseSize, e3.locations, e3.handleNumbers, e3.connect);
      }
      function _(t3, e3) {
        e3.handle && (vt(e3.handle, f2.cssClasses.active), --v2), e3.listeners.forEach(function(t4) {
          w2.removeEventListener(t4[0], t4[1]);
        }), 0 === v2 && (vt(d2, f2.cssClasses.drag), tt(), t3.cursor && (E2.style.cursor = "", E2.removeEventListener("selectstart", ft))), f2.events.smoothSteps && (e3.handleNumbers.forEach(function(t4) {
          et(t4, m2[t4], true, true, false, false);
        }), e3.handleNumbers.forEach(function(t4) {
          $("update", t4);
        })), e3.handleNumbers.forEach(function(t4) {
          $("change", t4), $("set", t4), $("end", t4);
        });
      }
      function B(t3, e3) {
        var r3, n3, i3, o3;
        e3.handleNumbers.some(A2) || (1 === e3.handleNumbers.length && (o3 = l2[e3.handleNumbers[0]].children[0], v2 += 1, gt(o3, f2.cssClasses.active)), t3.stopPropagation(), n3 = z2(c2.move, w2, R, { target: t3.target, handle: o3, connect: e3.connect, listeners: r3 = [], startCalcPoint: t3.calcPoint, baseSize: j2(), pageOffset: t3.pageOffset, handleNumbers: e3.handleNumbers, buttonsProperty: t3.buttons, locations: m2.slice() }), i3 = z2(c2.end, w2, _, { target: t3.target, handle: o3, listeners: r3, doNotReject: true, handleNumbers: e3.handleNumbers }), o3 = z2("mouseout", w2, F, { target: t3.target, handle: o3, listeners: r3, doNotReject: true, handleNumbers: e3.handleNumbers }), r3.push.apply(r3, n3.concat(i3, o3)), t3.cursor && (E2.style.cursor = getComputedStyle(t3.target).cursor, 1 < l2.length && gt(d2, f2.cssClasses.drag), E2.addEventListener("selectstart", ft, false)), e3.handleNumbers.forEach(function(t4) {
          $("start", t4);
        }));
      }
      function q(t3) {
        t3.stopPropagation();
        var i3, o3, s3, e3 = H(t3.calcPoint), r3 = (i3 = e3, s3 = !(o3 = 100), l2.forEach(function(t4, e4) {
          var r4, n3;
          A2(e4) || (r4 = m2[e4], ((n3 = Math.abs(r4 - i3)) < o3 || n3 <= o3 && r4 < i3 || 100 === n3 && 100 === o3) && (s3 = e4, o3 = n3));
        }), s3);
        false !== r3 && (f2.events.snap || dt(d2, f2.cssClasses.tap, f2.animationDuration), et(r3, e3, true, true), tt(), $("slide", r3, true), $("update", r3, true), f2.events.snap ? B(t3, { handleNumbers: [r3] }) : ($("change", r3, true), $("set", r3, true)));
      }
      function X(t3) {
        var t3 = H(t3.calcPoint), t3 = S2.getStep(t3), e3 = S2.fromStepping(t3);
        Object.keys(b2).forEach(function(t4) {
          "hover" === t4.split(".")[0] && b2[t4].forEach(function(t5) {
            t5.call(lt, e3);
          });
        });
      }
      function Y(a3) {
        a3.fixed || l2.forEach(function(t3, e3) {
          z2(c2.start, t3.children[0], B, { handleNumbers: [e3] });
        }), a3.tap && z2(c2.start, i2, q, {}), a3.hover && z2(c2.move, i2, X, { hover: true }), a3.drag && u2.forEach(function(e3, t3) {
          var r3, n3, i3, o3, s3;
          false !== e3 && 0 !== t3 && t3 !== u2.length - 1 && (r3 = l2[t3 - 1], n3 = l2[t3], i3 = [e3], o3 = [r3, n3], s3 = [t3 - 1, t3], gt(e3, f2.cssClasses.draggable), a3.fixed && (i3.push(r3.children[0]), i3.push(n3.children[0])), a3.dragAll && (o3 = l2, s3 = g2), i3.forEach(function(t4) {
            z2(c2.start, t4, B, { handles: o3, handleNumbers: s3, connect: e3 });
          }));
        });
      }
      function I(t3, e3) {
        b2[t3] = b2[t3] || [], b2[t3].push(e3), "update" === t3.split(".")[0] && l2.forEach(function(t4, e4) {
          $("update", e4);
        });
      }
      function W(t3) {
        var n3 = t3 && t3.split(".")[0], i3 = n3 ? t3.substring(n3.length) : t3;
        Object.keys(b2).forEach(function(t4) {
          var e3 = t4.split(".")[0], r3 = t4.substring(e3.length);
          n3 && n3 !== e3 || i3 && i3 !== r3 || ((e3 = r3) !== St.aria && e3 !== St.tooltips || i3 === r3) && delete b2[t4];
        });
      }
      function $(r3, n3, i3) {
        Object.keys(b2).forEach(function(t3) {
          var e3 = t3.split(".")[0];
          r3 === e3 && b2[t3].forEach(function(t4) {
            t4.call(lt, h2.map(f2.format.to), n3, h2.slice(), i3 || false, m2.slice(), lt);
          });
        });
      }
      function G(t3, e3, r3, n3, i3, o3, s3) {
        var a3;
        return 1 < l2.length && !f2.events.unconstrained && (n3 && 0 < e3 && (a3 = S2.getAbsoluteDistance(t3[e3 - 1], f2.margin, false), r3 = Math.max(r3, a3)), i3 && e3 < l2.length - 1 && (a3 = S2.getAbsoluteDistance(t3[e3 + 1], f2.margin, true), r3 = Math.min(r3, a3))), 1 < l2.length && f2.limit && (n3 && 0 < e3 && (a3 = S2.getAbsoluteDistance(t3[e3 - 1], f2.limit, false), r3 = Math.min(r3, a3)), i3 && e3 < l2.length - 1 && (a3 = S2.getAbsoluteDistance(t3[e3 + 1], f2.limit, true), r3 = Math.max(r3, a3))), f2.padding && (0 === e3 && (a3 = S2.getAbsoluteDistance(0, f2.padding[0], false), r3 = Math.max(r3, a3)), e3 === l2.length - 1 && (a3 = S2.getAbsoluteDistance(100, f2.padding[1], true), r3 = Math.min(r3, a3))), !((r3 = ht(r3 = !s3 ? S2.getStep(r3) : r3)) === t3[e3] && !o3) && r3;
      }
      function J(t3, e3) {
        var r3 = f2.ort;
        return (r3 ? e3 : t3) + ", " + (r3 ? t3 : e3);
      }
      function K(t3, r3, n3, e3, i3) {
        var o3 = n3.slice(), s3 = e3[0], a3 = f2.events.smoothSteps, l3 = [!t3, t3], u3 = [t3, !t3];
        e3 = e3.slice(), t3 && e3.reverse(), 1 < e3.length ? e3.forEach(function(t4, e4) {
          e4 = G(o3, t4, o3[t4] + r3, l3[e4], u3[e4], false, a3);
          false === e4 ? r3 = 0 : (r3 = e4 - o3[t4], o3[t4] = e4);
        }) : l3 = u3 = [true];
        var c3 = false;
        e3.forEach(function(t4, e4) {
          c3 = et(t4, n3[t4] + r3, l3[e4], u3[e4], false, a3) || c3;
        }), c3 && (e3.forEach(function(t4) {
          $("update", t4), $("slide", t4);
        }), null != i3 && $("drag", s3));
      }
      function Q(t3, e3) {
        return f2.dir ? 100 - t3 - e3 : t3;
      }
      function Z(t3, e3) {
        m2[t3] = e3, h2[t3] = S2.fromStepping(e3);
        e3 = "translate(" + J(Q(e3, 0) - r2 + "%", "0") + ")";
        if (l2[t3].style[f2.transformRule] = e3, f2.events.invertConnects && 1 < m2.length) {
          e3 = m2.every(function(t4, e4, r3) {
            return 0 === e4 || t4 >= r3[e4 - 1];
          });
          if (x2 !== !e3) return x2 = !x2, xt(f2, f2.connect.map(function(t4) {
            return !t4;
          })), void at();
        }
        rt(t3), rt(t3 + 1), x2 && (rt(t3 - 1), rt(t3 + 2));
      }
      function tt() {
        g2.forEach(function(t3) {
          var e3 = 50 < m2[t3] ? -1 : 1, e3 = 3 + (l2.length + e3 * t3);
          l2[t3].style.zIndex = String(e3);
        });
      }
      function et(t3, e3, r3, n3, i3, o3) {
        return false !== (e3 = i3 ? e3 : G(m2, t3, e3, r3, n3, false, o3)) && (Z(t3, e3), true);
      }
      function rt(t3) {
        var e3, r3, n3;
        u2[t3] && (e3 = m2.slice(), x2 && e3.sort(function(t4, e4) {
          return t4 - e4;
        }), n3 = 100, r3 = "translate(" + J(Q(r3 = (r3 = 0) !== t3 ? e3[t3 - 1] : r3, n3 = (n3 = t3 !== u2.length - 1 ? e3[t3] : n3) - r3) + "%", "0") + ")", n3 = "scale(" + J(n3 / 100, "1") + ")", u2[t3].style[f2.transformRule] = r3 + " " + n3);
      }
      function nt(t3, e3) {
        return null === t3 || false === t3 || void 0 === t3 ? m2[e3] : ("number" == typeof t3 && (t3 = String(t3)), false === (t3 = false !== (t3 = f2.format.from(t3)) ? S2.toStepping(t3) : t3) || isNaN(t3) ? m2[e3] : t3);
      }
      function it(t3, e3, r3) {
        var n3 = mt(t3), t3 = void 0 === m2[0];
        e3 = void 0 === e3 || e3, f2.animate && !t3 && dt(d2, f2.cssClasses.tap, f2.animationDuration), g2.forEach(function(t4) {
          et(t4, nt(n3[t4], t4), true, false, r3);
        });
        var i3, o3 = 1 === g2.length ? 0 : 1;
        for (t3 && S2.hasNoSize() && (r3 = true, m2[0] = 0, 1 < g2.length && (i3 = 100 / (g2.length - 1), g2.forEach(function(t4) {
          m2[t4] = t4 * i3;
        }))); o3 < g2.length; ++o3) g2.forEach(function(t4) {
          et(t4, m2[t4], true, true, r3);
        });
        tt(), g2.forEach(function(t4) {
          $("update", t4), null !== n3[t4] && e3 && $("set", t4);
        });
      }
      function ot(t3) {
        if (t3 = void 0 === t3 ? false : t3) return 1 === h2.length ? h2[0] : h2.slice(0);
        t3 = h2.map(f2.format.to);
        return 1 === t3.length ? t3[0] : t3;
      }
      function st(t3) {
        var e3 = m2[t3], r3 = S2.getNearbySteps(e3), n3 = h2[t3], i3 = r3.thisStep.step, t3 = null;
        if (f2.snap) return [n3 - r3.stepBefore.startValue || null, r3.stepAfter.startValue - n3 || null];
        false !== i3 && n3 + i3 > r3.stepAfter.startValue && (i3 = r3.stepAfter.startValue - n3), t3 = n3 > r3.thisStep.startValue ? r3.thisStep.step : false !== r3.stepBefore.step && n3 - r3.stepBefore.highestStep, 100 === e3 ? i3 = null : 0 === e3 && (t3 = null);
        e3 = S2.countStepDecimals();
        return null !== i3 && false !== i3 && (i3 = Number(i3.toFixed(e3))), [t3 = null !== t3 && false !== t3 ? Number(t3.toFixed(e3)) : t3, i3];
      }
      function at() {
        for (; n2.firstChild; ) n2.removeChild(n2.firstChild);
        for (var t3 = 0; t3 <= f2.handles; t3++) u2[t3] = N2(n2, f2.connect[t3]), rt(t3);
        Y({ drag: f2.events.drag, fixed: true });
      }
      gt(t2 = d2, f2.cssClasses.target), 0 === f2.dir ? gt(t2, f2.cssClasses.ltr) : gt(t2, f2.cssClasses.rtl), 0 === f2.ort ? gt(t2, f2.cssClasses.horizontal) : gt(t2, f2.cssClasses.vertical), gt(t2, "rtl" === getComputedStyle(t2).direction ? f2.cssClasses.textDirectionRtl : f2.cssClasses.textDirectionLtr), i2 = P2(t2, f2.cssClasses.base), (function(t3, e3) {
        n2 = P2(e3, f2.cssClasses.connects), l2 = [], (u2 = []).push(N2(n2, t3[0]));
        for (var r3 = 0; r3 < f2.handles; r3++) l2.push(C2(e3, r3)), g2[r3] = r3, u2.push(N2(n2, t3[r3 + 1]));
      })(f2.connect, i2), Y(f2.events), it(f2.start), f2.pips && T2(f2.pips), f2.tooltips && M2(), W("update" + St.aria), I("update" + St.aria, function(t3, e3, o3, r3, s3) {
        g2.forEach(function(t4) {
          var e4 = l2[t4], r4 = G(m2, t4, 0, true, true, true), n3 = G(m2, t4, 100, true, true, true), i3 = s3[t4], t4 = String(f2.ariaFormat.to(o3[t4])), r4 = S2.fromStepping(r4).toFixed(1), n3 = S2.fromStepping(n3).toFixed(1), i3 = S2.fromStepping(i3).toFixed(1);
          e4.children[0].setAttribute("aria-valuemin", r4), e4.children[0].setAttribute("aria-valuemax", n3), e4.children[0].setAttribute("aria-valuenow", i3), e4.children[0].setAttribute("aria-valuetext", t4);
        });
      });
      var lt = { destroy: function() {
        for (W(St.aria), W(St.tooltips), Object.keys(f2.cssClasses).forEach(function(t3) {
          vt(d2, f2.cssClasses[t3]);
        }); d2.firstChild; ) d2.removeChild(d2.firstChild);
        delete d2.noUiSlider;
      }, steps: function() {
        return g2.map(st);
      }, on: I, off: W, get: ot, set: it, setHandle: function(t3, e3, r3, n3) {
        if (!(0 <= (t3 = Number(t3)) && t3 < g2.length)) throw new Error("noUiSlider: invalid handle number, got: " + t3);
        et(t3, nt(e3, t3), true, true, n3), $("update", t3), r3 && $("set", t3);
      }, reset: function(t3) {
        it(f2.start, t3);
      }, disable: function(t3) {
        null != t3 ? (l2[t3].setAttribute("disabled", ""), l2[t3].handle.removeAttribute("tabindex")) : (d2.setAttribute("disabled", ""), l2.forEach(function(t4) {
          t4.handle.removeAttribute("tabindex");
        }));
      }, enable: function(t3) {
        null != t3 ? (l2[t3].removeAttribute("disabled"), l2[t3].handle.setAttribute("tabindex", "0")) : (d2.removeAttribute("disabled"), l2.forEach(function(t4) {
          t4.removeAttribute("disabled"), t4.handle.setAttribute("tabindex", "0");
        }));
      }, __moveHandles: function(t3, e3, r3) {
        K(t3, e3, m2, r3);
      }, options: o2, updateOptions: function(e3, t3) {
        var r3 = ot(), n3 = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips", "connect"];
        n3.forEach(function(t4) {
          void 0 !== e3[t4] && (o2[t4] = e3[t4]);
        });
        var i3 = yt(o2);
        n3.forEach(function(t4) {
          void 0 !== e3[t4] && (f2[t4] = i3[t4]);
        }), S2 = i3.spectrum, f2.margin = i3.margin, f2.limit = i3.limit, f2.padding = i3.padding, f2.pips ? T2(f2.pips) : L2(), (f2.tooltips ? M2 : k2)(), m2 = [], it(pt(e3.start) ? e3.start : r3, t3), e3.connect && at();
      }, target: d2, removePips: L2, removeTooltips: k2, getPositions: function() {
        return m2.slice();
      }, getTooltips: function() {
        return a2;
      }, getOrigins: function() {
        return l2;
      }, pips: T2 };
      return lt;
    }
    function j(t2, e2) {
      if (!t2 || !t2.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + t2);
      if (t2.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
      e2 = T(t2, yt(e2), e2);
      return t2.noUiSlider = e2;
    }
    var z = { __spectrum: u, cssClasses: p, create: j };
    ut.create = j, ut.cssClasses = p, ut.default = z, Object.defineProperty(ut, "__esModule", { value: true });
  });

  // src/js/modules/init.js
  var import_nice_select2 = __toESM(require_nice_select2(), 1);
  function init() {
    const nav = document.querySelector(".header__nav");
    const items = document.querySelectorAll(".menu > .menu__item > a");
    const activeLink = document.querySelector(".menu__item.active a");
    function move(element) {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      nav.style.setProperty("--left", `${rect.left - navRect.left}px`);
      nav.style.setProperty("--width", `${rect.width}px`);
    }
    if (activeLink) move(activeLink);
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => move(item));
      item.addEventListener("focus", () => move(item));
    });
    nav.addEventListener("mouseleave", () => {
      if (activeLink) move(activeLink);
    });
    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget) && activeLink) {
        move(activeLink);
      }
    });
    function initMobMenu() {
      const burger = document.querySelector(".btn_burger");
      const nav2 = document.querySelector(".header__nav");
      const closeNav = document.querySelector(".header__nav .btn_close");
      const overlay = document.querySelector(".overlay");
      function openMenu() {
        nav2.classList.add("is_open");
        overlay.classList.add("is-visible");
        document.body.style.overflow = "hidden";
      }
      function closeMenu() {
        nav2.classList.remove("is_open");
        overlay.classList.remove("is-visible");
        document.body.style.overflow = "";
      }
      burger.addEventListener("click", openMenu);
      closeNav.addEventListener("click", closeMenu);
      overlay.addEventListener("click", closeMenu);
      const navLinks = nav2.querySelectorAll("a");
      navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
      });
    }
    function initPriceSlider() {
      const priceSlider = document.getElementById("price-slider");
      if (!priceSlider) {
        return;
      }
      const priceMin = document.getElementById("price-min");
      const priceMax = document.getElementById("price-max");
      noUiSlider.create(priceSlider, {
        start: [456, 4500],
        connect: true,
        range: {
          min: 0,
          max: 5e3
        },
        step: 1,
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value)
        }
      });
      priceSlider.noUiSlider.on("update", (values, handle) => {
        if (handle === 0) {
          priceMin.textContent = values[0];
        }
        if (handle === 1) {
          priceMax.textContent = values[1];
        }
      });
    }
    function initSidebarCollapse() {
      const toggles = document.querySelectorAll('[data-toggle="collapse"]');
      if (!toggles.length) return;
      toggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = toggle.getAttribute("data-target");
          const targetBlock = document.querySelector(targetId);
          const section = toggle.closest(".catalog-filter");
          if (!targetBlock || !section) return;
          const isOpen = targetBlock.classList.toggle("show");
          section.classList.toggle("is-active", isOpen);
        });
      });
    }
    function initCustomSelect() {
      const selectElement = document.querySelector(".js-custom-select");
      if (selectElement) {
        const NiceSelectConstructor = import_nice_select2.default.default || import_nice_select2.default;
        new NiceSelectConstructor(selectElement, {
          searchable: false
        });
      }
    }
    const counters = document.querySelectorAll(".counter__number");
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function numberCountUp(element, countTo) {
      const numEl = element.querySelector(".num");
      if (!numEl) return;
      const start = parseInt(numEl.textContent, 10) || 0;
      const duration = 3e3;
      const startTime = performance.now();
      function animate(time) {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.floor(start + eased * (countTo - start));
        numEl.textContent = value;
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          numEl.textContent = countTo;
        }
      }
      requestAnimationFrame(animate);
    }
    const observerCount = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animated) return;
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        numberCountUp(el, target);
        el.dataset.animated = "true";
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    counters.forEach((el) => observerCount.observe(el));
    function initSliderBanner() {
      if (!document.querySelector(".banner-slider")) return;
      const sliderBanner = new Splide(".banner-slider", {
        type: "loop",
        perPage: 1,
        pagination: false,
        autoplay: true,
        arrows: false,
        speed: 1200
      });
      sliderBanner.mount();
    }
    function initSliderCategory() {
      if (!document.querySelector(".category-slider")) return;
      const sliderCategory = new Splide(".category-slider", {
        perPage: 3,
        perMove: 1,
        pagination: false,
        speed: 1200,
        gap: 20,
        arrowPath: "M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z",
        breakpoints: {
          991: {
            perPage: 2
          },
          580: {
            perPage: 1
          }
        }
      });
      initProgressBar(sliderCategory);
      sliderCategory.mount();
    }
    function initProgressBar(splide) {
      const bar = splide.root.querySelector(".slider-progress__bar");
      if (!bar) return;
      splide.on("mounted move", function() {
        const end = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min((splide.index + 1) / end, 1);
        bar.style.width = `${100 * rate}%`;
      });
    }
    function initSliderBrands() {
      if (!document.querySelector(".brands-slider")) return;
      const initSliderBrands2 = new Splide(".brands-slider", {
        perPage: 8,
        perMove: 1,
        pagination: false,
        speed: 1200,
        gap: 9,
        arrowPath: "M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z",
        breakpoints: {
          1024: {
            perPage: 7
          },
          991: {
            perPage: 6
          },
          767: {
            perPage: 4,
            gap: 7
          },
          510: {
            perPage: 3
          }
        }
      });
      initProgressBar(initSliderBrands2);
      initSliderBrands2.mount();
    }
    function initSliderPartners(selector, speed, direction = "ltr") {
      const element = document.querySelector(selector);
      if (!element) return;
      new Splide(selector, {
        type: "loop",
        drag: "free",
        focus: "center",
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: "30px",
        clones: 30,
        autoScroll: {
          speed,
          pauseOnHover: false,
          pauseOnFocus: false
        }
      }).mount(window.splide.Extensions);
    }
    function initAccordion() {
      const acItems = document.querySelectorAll(".accordion__item");
      acItems.forEach((item) => {
        const acHeader = item.querySelector(".accordion__header");
        acHeader.addEventListener("click", () => {
          toggleItem(item);
        });
      });
      const toggleItem = (item) => {
        const acDescription = item.querySelector(".accordion-collapse");
        if (item.classList.contains("show")) {
          acDescription.style.height = acDescription.scrollHeight + "px";
          setTimeout(() => {
            acDescription.style.height = "0";
          }, 10);
          item.classList.remove("show");
        } else {
          acDescription.style.height = acDescription.scrollHeight + "px";
          item.classList.add("show");
          acDescription.addEventListener("transitionend", function() {
            if (item.classList.contains("show")) {
              acDescription.style.height = "auto";
            }
          }, { once: true });
        }
      };
    }
    const SLIDER_TABS_OPTIONS = {
      products: {
        perPage: 5,
        perMove: 1,
        autoWidth: true,
        gap: 40,
        speed: 1200,
        snap: false,
        focus: "left",
        arrowPath: "M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z"
      },
      blog: {
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        gap: 20,
        speed: 1200,
        snap: false,
        focus: "left",
        arrowPath: "M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z"
      }
    };
    function initTabsSlider(root, options) {
      const tabs = root.querySelectorAll(".js-tabs__tab");
      const panels = root.querySelectorAll(".js-tabs__panel");
      if (!tabs.length || !panels.length) {
        return;
      }
      function initSlider(panel) {
        if (panel.splideInstance) {
          return panel.splideInstance;
        }
        const sliderElement = panel.querySelector(".js-slider");
        if (!sliderElement) {
          return null;
        }
        const splide = new Splide(sliderElement, {
          ...options,
          pagination: false
        });
        initProgressBarTabs(splide);
        splide.mount();
        panel.splideInstance = splide;
        return splide;
      }
      function activateTab(tab) {
        const tabName = tab.dataset.tab;
        if (!tabName) {
          return;
        }
        tabs.forEach((item) => {
          const isActive = item === tab;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });
        panels.forEach((panel) => {
          const isActive = panel.dataset.slider === tabName;
          panel.classList.toggle("is-active", isActive);
          panel.hidden = !isActive;
          if (!isActive) {
            return;
          }
          const splide = initSlider(panel);
          if (!splide) {
            return;
          }
          splide.refresh();
          splide.go(0);
        });
      }
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          activateTab(tab);
        });
      });
      const activeTab = root.querySelector(".js-tabs__tab.is-active") || tabs[0];
      if (activeTab) {
        activateTab(activeTab);
      }
    }
    function initProgressBarTabs(splide) {
      const panel = splide.root.closest(".js-tabs__panel");
      if (!panel) {
        return;
      }
      const bar = panel.querySelector(".js-slider-progress__bar");
      if (!bar) {
        return;
      }
      const updateProgress = () => {
        const end = splide.Components.Controller.getEnd();
        if (end <= 0) {
          bar.style.width = "100%";
          return;
        }
        const rate = (splide.index + 1) / (end + 1);
        bar.style.width = `${rate * 100}%`;
      };
      splide.on("mounted", updateProgress);
      splide.on("move", updateProgress);
      splide.on("refresh", updateProgress);
    }
    document.querySelectorAll(".js-tabs").forEach((root) => {
      const type = root.dataset.type;
      const options = SLIDER_TABS_OPTIONS[type];
      if (!options) {
        return;
      }
      initTabsSlider(root, options);
    });
    function initSimilarSlider() {
      if (!document.querySelector(".similar-slider")) return;
      const similarSlider = new Splide(".similar-slider", {
        perPage: 4,
        perMove: 1,
        gap: 20,
        pagination: false,
        arrowPath: "M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z",
        speed: 1200
      });
      similarSlider.mount();
    }
    function initProductSliders() {
      const mainSliderEl = document.querySelector("#main-slider");
      const thumbSliderEl = document.querySelector("#thumbnail-slider");
      if (!mainSliderEl || !thumbSliderEl) return;
      var main = new Splide("#main-slider", {
        type: "fade",
        rewind: true,
        pagination: false,
        arrows: false,
        speed: 1200
      });
      var thumbnails = new Splide("#thumbnail-slider", {
        perPage: 5,
        perMove: 1,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        arrows: false,
        speed: 1200,
        breakpoints: {
          600: {
            fixedWidth: 60,
            fixedHeight: 60
          }
        }
      });
      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    }
    function initHiddenContent() {
      const accordionHeaders = document.querySelectorAll(".product-description__header");
      if (accordionHeaders.length === 0) return;
      accordionHeaders.forEach((header) => {
        header.addEventListener("click", function() {
          const accordionWrapper = this.closest(".product-description");
          if (accordionWrapper) {
            accordionWrapper.classList.toggle("is-open");
          }
        });
      });
    }
    function initQuantityPickers() {
      document.querySelectorAll(".quantity-picker").forEach(initQuantityPicker);
    }
    function initQuantityPicker(picker) {
      if (picker.classList.contains("js-initialized")) {
        return;
      }
      const minusBtn = picker.querySelector(".qty-btn_minus");
      const plusBtn = picker.querySelector(".qty-btn_plus");
      const input = picker.querySelector(".qty-input");
      if (!minusBtn || !plusBtn || !input) {
        return;
      }
      const getValue = () => parseInt(input.value, 10) || 1;
      const getStep = () => parseInt(input.getAttribute("step"), 10) || 1;
      const getMin = () => parseInt(input.getAttribute("min"), 10) || 1;
      const getMax = () => parseInt(input.getAttribute("max"), 10);
      const updateValue = (value) => {
        input.value = value;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      };
      minusBtn.addEventListener("click", () => {
        const value = getValue();
        const min = getMin();
        const step = getStep();
        if (value > min) {
          updateValue(value - step);
        }
      });
      plusBtn.addEventListener("click", () => {
        const value = getValue();
        const step = getStep();
        const max = getMax();
        if (!max || value < max) {
          updateValue(value + step);
        }
      });
      picker.classList.add("js-initialized");
    }
    const siteHeader = document.querySelector(".header");
    function initSearch(headerElement) {
      if (!headerElement) return;
      const searchWrapper = headerElement.querySelector(".h-search");
      const searchInput = headerElement.querySelector(".search__input");
      const searchOverlay = headerElement.querySelector(".overlay");
      const closeSearchBtn = headerElement.querySelector(".js-close-search");
      const openSearchBtns = headerElement.querySelectorAll(".js-open-search");
      if (!searchWrapper || !searchInput) return;
      const openSearch = (e) => {
        e.preventDefault();
        searchWrapper.classList.add("is-open");
        searchOverlay.classList.add("is-visible");
        document.body.style.overflow = "hidden";
        setTimeout(() => searchInput.focus(), 300);
      };
      const closeSearch = () => {
        searchWrapper.classList.remove("is-open");
        searchOverlay.classList.remove("is-visible");
        searchInput.value = "";
        document.body.style.overflow = "";
      };
      openSearchBtns.forEach((btn) => btn.addEventListener("click", openSearch));
      if (closeSearchBtn) closeSearchBtn.addEventListener("click", closeSearch);
      if (searchOverlay) searchOverlay.addEventListener("click", closeSearch);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchWrapper.classList.contains("is-open")) {
          closeSearch();
        }
      });
    }
    function initCartDriver() {
      const cart = document.querySelector("#cart-drawer");
      const cartOpen = document.querySelector(".header__cart");
      const cartClose = document.querySelector("#cart-close");
      const overlay = document.querySelector(".overlay");
      function openCart() {
        cart.classList.add("is-visible");
        overlay.classList.add("is-visible");
        document.body.style.overflow = "hidden";
      }
      function closeCart() {
        cart.classList.remove("is-visible");
        overlay.classList.remove("is-visible");
        document.body.style.overflow = "";
      }
      cartOpen.addEventListener("click", openCart);
      cartClose.addEventListener("click", closeCart);
      overlay.addEventListener("click", closeCart);
      document.querySelectorAll(".cart-drawer a[href]").forEach((link) => {
        link.addEventListener("click", (event) => {
          const linkUrl = new URL(link.href, window.location.href);
          const currentPage = window.location.pathname;
          const targetPage = linkUrl.pathname;
          if (currentPage === targetPage) {
            event.preventDefault();
            closeCart();
          }
        });
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeCart();
        }
      });
    }
    initMobMenu();
    initPriceSlider();
    initSidebarCollapse();
    initCustomSelect();
    initSliderCategory();
    initSliderBrands();
    initSliderPartners(".partner-marquee-left", 1, "ltr");
    initSliderPartners(".partner-marquee-right", -1, "rtl");
    initAccordion();
    initSimilarSlider();
    initProductSliders();
    initHiddenContent();
    initQuantityPickers();
    initSearch(siteHeader);
    initCartDriver();
    window.addEventListener("load", () => {
      initSliderBanner();
    });
  }

  // src/js/app.js
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=app.js.map
