! function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var i in n)("object" == typeof exports ? exports : t)[i] = n[i]
    }
}(window, (function () {
    return function (t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(i, o, function (e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 10)
    }([function (t, e, n) {
        ! function () {
            "use strict";
            var e = {
                    event: "click",
                    position: "bottom",
                    horizontalOffset: 0,
                    verticalOffset: 0,
                    data: {}
                },
                n = !1,
                i = null,
                o = function (t) {
                    return !!(t && t.constructor && t.call && t.apply)
                },
                r = function (t) {
                    var e = arguments.length;
                    if (e < 2 || null === t) return t;
                    for (var n = 1; n < e; n++) {
                        var i = arguments[n];
                        for (var o in i) t[o] = i[o]
                    }
                    return t
                },
                s = function (t) {
                    var e;
                    return "undefined" != typeof jQuery && t instanceof jQuery ? t : t instanceof HTMLElement ? [t] : "string" == typeof (e = t) || e instanceof String ? document.querySelectorAll(t) : t instanceof NodeList ? t : []
                },
                a = function (t) {
                    if (t.stopPropagation(), t.preventDefault(), i = t.target, h(), i.ctxMenu) {
                        var e = u(i);
                        document.body.appendChild(e), n = !0, setTimeout((function () {
                            window.addEventListener("click", h), window.addEventListener("resize", h), window.addEventListener("scroll", h), e.style.visibility = "visible", c(t, i, e)
                        }), 1)
                    }
                },
                u = function (t) {
                    var e, n = document.createElement("div");
                    for (e in n.className = "context-menu", n.style.visibility = "hidden", n.style.display = "inline-block", t.ctxMenu.menu) {
                        var i = t.ctxMenu.menu[e],
                            r = document.createElement("div");
                        r.ctxMenu = {
                            key: e,
                            enabled: !!i.enabled
                        }, r.ctxMenu.enabled ? r.className = "context-menu-item" : r.className = "context-menu-item-disabled", r.innerHTML = i && i.label ? i.label : e, r.ctxMenu.enabled && (o(i.onSelect) ? r.ctxMenu.onSelect = i.onSelect : r.ctxMenu.onSelect = l, r.addEventListener(t.ctxMenu.event, (function (e) {
                            this.ctxMenu.onSelect(t, this.ctxMenu.key, r, t.ctxMenu.data), h()
                        }))), i.title && (r.title = i.title), n.appendChild(r)
                    }
                    return n
                },
                c = function (t, e, n) {
                    var i = 0,
                        o = 0,
                        r = e.getBoundingClientRect(),
                        s = n.getBoundingClientRect(),
                        a = "click";
                    e.ctxMenu && e.ctxMenu.position && (a = e.ctxMenu.position), "bottom" === a ? (i = r.left + e.ctxMenu.horizontalOffset, o = r.bottom + e.ctxMenu.verticalOffset) : "top" === a ? (i = r.left + e.ctxMenu.horizontalOffset, o = r.top - s.height + e.ctxMenu.verticalOffset) : "right" === a ? (i = r.left + r.width + e.ctxMenu.horizontalOffset, o = r.top + e.ctxMenu.verticalOffset) : "left" === a ? (i = r.left - s.width + e.ctxMenu.horizontalOffset, o = r.top + e.ctxMenu.verticalOffset) : (i = t.clientX + e.ctxMenu.horizontalOffset, o = t.clientY + e.ctxMenu.verticalOffset), i < 0 && (i = e.ctxMenu.horizontalOffset >= 0 ? e.ctxMenu.horizontalOffset : 0), o < 0 && (o = e.ctxMenu.verticalOffset >= 0 ? e.ctxMenu.verticalOffset : 0), i + s.width > document.body.clientWidth && (i = e.ctxMenu.horizontalOffset >= 0 ? document.body.clientWidth - s.width : document.body.clientWidth - s.width + e.ctxMenu.horizontalOffset), o + s.height > document.body.clientHeight && (o = e.ctxMenu.verticalOffset >= 0 ? document.body.clientHeight - s.height : document.body.clientHeight - s.height + e.ctxMenu.verticalOffset), n.style.left = i + "px", n.style.top = o + "px"
                },
                l = function (t, e, n) {},
                h = function () {
                    var t = 0,
                        e = document.getElementsByClassName("context-menu");
                    for (window.removeEventListener("click", h), window.removeEventListener("resize", h), window.removeEventListener("scroll", h), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t]);
                    n = !1
                },
                d = function (t, e, n) {
                    var i = 0,
                        o = s(t);
                    for (i = 0; i < o.length; i++) o[i].ctxMenu.menu.hasOwnProperty(e) && (o[i].ctxMenu.menu[e].enabled = n)
                },
                p = function (t) {
                    var e, n = {
                        type: "item",
                        enabled: !0,
                        label: "",
                        onSelect: function () {},
                        icon: "",
                        title: ""
                    };
                    for (e in t) {
                        var i = r({}, n);
                        t[e] ? o(t[e]) ? t[e] = r(i, {
                            label: e,
                            onSelect: t[e]
                        }) : t[e] = r(i, t[e]) : t[e] = r(i, {
                            label: e
                        })
                    }
                    return t
                },
                f = {
                    attach: function (t, n, i) {
                        var o = 0;
                        n = p(n);
                        var u = r({
                                menu: r({}, n)
                            }, e, i),
                            c = s(t);
                        for (o = 0; o < c.length; o++) c[o].ctxMenu = u, c[o].addEventListener(u.event, a)
                    },
                    display: function (t, n, i) {
                        n = p(r({}, n));
                        var o = r({
                            menu: r({}, n)
                        }, e, i);
                        if (t instanceof Event) t.target.ctxMenu = o, a(t);
                        else if ("undefined" != typeof jQuery && t instanceof jQuery.Event) t.target.ctxMenu = o, a(t);
                        else if (t instanceof HTMLElement) {
                            t.ctxMenu = o;
                            var s = t.getBoundingClientRect(),
                                u = {
                                    target: t,
                                    clientX: s.left,
                                    clientY: s.top,
                                    stopPropagation: function () {},
                                    preventDefault: function () {}
                                };
                            a(u)
                        } else console.log(t)
                    },
                    disable: function (t, e) {
                        d(t, e, !1)
                    },
                    enable: function (t, e) {
                        d(t, e, !0)
                    },
                    close: function () {
                        h()
                    },
                    isOpen: function () {
                        return n
                    }
                };
            "function" == typeof window.define && void 0 !== window.define.amd ? window.define("ContextMenu", [], (function () {
                return f
            })) : void 0 !== t.exports ? t.exports = f : window.ContextMenu = f
        }()
    }, function (t) {
        t.exports = JSON.parse('{"a":"1.1.10"}')
    }, function (t, e, n) {
        var i, o, r;
        o = [], void 0 === (r = "function" == typeof (i = function () {
            return function t(e, n, i) {
                var o, r, s = window,
                    a = "application/octet-stream",
                    u = i || a,
                    c = e,
                    l = !n && !i && c,
                    h = document.createElement("a"),
                    d = function (t) {
                        return String(t)
                    },
                    p = s.Blob || s.MozBlob || s.WebKitBlob || d,
                    f = n || "download";
                if (p = p.call ? p.bind(s) : Blob, "true" === String(this) && (u = (c = [c, u])[0], c = c[1]), l && l.length < 2048 && (f = l.split("/").pop().split("?")[0], h.href = l, -1 !== h.href.indexOf(l))) {
                    var v = new XMLHttpRequest;
                    return v.open("GET", l, !0), v.responseType = "blob", v.onload = function (e) {
                        t(e.target.response, f, a)
                    }, setTimeout((function () {
                        v.send()
                    }), 0), v
                }
                if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)) {
                    if (!(c.length > 2096103.424 && p !== d)) return navigator.msSaveBlob ? navigator.msSaveBlob(y(c), f) : x(c);
                    u = (c = y(c)).type || a
                } else if (/([\x80-\xff])/.test(c)) {
                    for (var b = 0, g = new Uint8Array(c.length), m = g.length; b < m; ++b) g[b] = c.charCodeAt(b);
                    c = new p([g], {
                        type: u
                    })
                }

                function y(t) {
                    for (var e = t.split(/[:;,]/), n = e[1], i = ("base64" == e[2] ? atob : decodeURIComponent)(e.pop()), o = i.length, r = 0, s = new Uint8Array(o); r < o; ++r) s[r] = i.charCodeAt(r);
                    return new p([s], {
                        type: n
                    })
                }

                function x(t, e) {
                    if ("download" in h) return h.href = t, h.setAttribute("download", f), h.className = "download-js-link", h.innerHTML = "downloading...", h.style.display = "none", document.body.appendChild(h), setTimeout((function () {
                        h.click(), document.body.removeChild(h), !0 === e && setTimeout((function () {
                            s.URL.revokeObjectURL(h.href)
                        }), 250)
                    }), 66), !0;
                    if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(t) && (t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, a)), window.open(t) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = t), !0;
                    var n = document.createElement("iframe");
                    document.body.appendChild(n), !e && /^data:/.test(t) && (t = "data:" + t.replace(/^data:([\w\/\-\+]+)/, a)), n.src = t, setTimeout((function () {
                        document.body.removeChild(n)
                    }), 333)
                }
                if (o = c instanceof p ? c : new p([c], {
                        type: u
                    }), navigator.msSaveBlob) return navigator.msSaveBlob(o, f);
                if (s.URL) x(s.URL.createObjectURL(o), !0);
                else {
                    if ("string" == typeof o || o.constructor === d) try {
                        return x("data:" + u + ";base64," + s.btoa(o))
                    } catch (t) {
                        return x("data:" + u + "," + encodeURIComponent(o))
                    }(r = new FileReader).onload = function (t) {
                        x(this.result)
                    }, r.readAsDataURL(o)
                }
                return !0
            }
        }) ? i.apply(e, o) : i) || (t.exports = r)
    }, function (t, e, n) {
        var i;
        ! function () {
            "use strict";
            var o = function () {
                var t, e, n = [],
                    i = -1,
                    o = 0,
                    r = !1;
                return e = function (t, e) {
                    return t && "function" == typeof t[e] ? (r = !0, t[e](), r = !1, this) : this
                }, {
                    add: function (e) {
                        return r || (n.splice(i + 1, n.length - i), n.push(e), o && n.length > o && (a = 0, u = -(o + 1), (s = n).splice(a, !u || 1 + u - a + (!(u < 0 ^ a >= 0) && (u < 0 || -1) * s.length)), s.length), i = n.length - 1, t && t()), this;
                        var s, a, u
                    },
                    setCallback: function (e) {
                        t = e
                    },
                    undo: function () {
                        var o = n[i];
                        return o ? (e(o, "undo"), i -= 1, t && t(), this) : this
                    },
                    redo: function () {
                        var o = n[i + 1];
                        return o ? (e(o, "redo"), i += 1, t && t(), this) : this
                    },
                    clear: function () {
                        var e = n.length;
                        n = [], i = -1, t && e > 0 && t()
                    },
                    hasUndo: function () {
                        return -1 !== i
                    },
                    hasRedo: function () {
                        return i < n.length - 1
                    },
                    getCommands: function () {
                        return n
                    },
                    getIndex: function () {
                        return i
                    },
                    setLimit: function (t) {
                        o = t
                    }
                }
            };
            void 0 === (i = function () {
                return o
            }.call(e, n, e, t)) || (t.exports = i)
        }()
    }, function (t, e, n) {
        ! function () {
            function e(t, e) {
                var n = i("div", null, "qs_label", e);
                return n.innerHTML = t, n
            }

            function n(t, e, n, o) {
                var r = i("input", e, n, o);
                return r.type = t, r
            }

            function i(t, e, n, i) {
                var o = document.createElement(t);
                if (o) return o.id = e, n && (o.className = n), i && i.appendChild(o), o
            }

            function o() {
                return -1 != navigator.userAgent.indexOf("rv:11") || -1 != navigator.userAgent.indexOf("MSIE")
            }
            var r = !1,
                s = ".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:pointer;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer}.qs_range::-ms-track{width:100%;height:15px;cursor:pointer;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:pointer}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:pointer;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:pointer;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
                a = {
                    _version: "2.1",
                    _topZ: 1,
                    _panel: null,
                    _titleBar: null,
                    _content: null,
                    _startX: 0,
                    _startY: 0,
                    _hidden: !1,
                    _collapsed: !1,
                    _controls: null,
                    _keyCode: -1,
                    _draggable: !0,
                    _collapsible: !0,
                    _globalChangeHandler: null,
                    useExtStyleSheet: function () {
                        r = !0
                    },
                    create: function (t, e, n, i) {
                        var o = Object.create(this);
                        return o._init(t, e, n, i), o
                    },
                    destroy: function () {
                        for (var t in this._panel.parentElement && this._panel.parentElement.removeChild(this._panel), this) this[t] = null
                    },
                    _init: function (t, e, n, i) {
                        r || function () {
                            var t = document.createElement("style");
                            t.innerText = s, document.head.appendChild(t), r = !0
                        }(), this._bindHandlers(), this._createPanel(t, e, i), this._createTitleBar(n || "QuickSettings"), this._createContent()
                    },
                    _bindHandlers: function () {
                        this._startDrag = this._startDrag.bind(this), this._drag = this._drag.bind(this), this._endDrag = this._endDrag.bind(this), this._doubleClickTitle = this._doubleClickTitle.bind(this), this._onKeyUp = this._onKeyUp.bind(this)
                    },
                    getValuesAsJSON: function (t) {
                        var e = {};
                        for (var n in this._controls) this._controls[n].getValue && (e[n] = this._controls[n].getValue());
                        return t && (e = JSON.stringify(e)), e
                    },
                    setValuesFromJSON: function (t) {
                        for (var e in "string" == typeof t && (t = JSON.parse(t)), t) this._controls[e].setValue && this._controls[e].setValue(t[e]);
                        return this
                    },
                    saveInLocalStorage: function (t) {
                        return this._localStorageName = t, this._readFromLocalStorage(t), this
                    },
                    clearLocalStorage: function (t) {
                        return localStorage.removeItem(t), this
                    },
                    _saveInLocalStorage: function (t) {
                        localStorage.setItem(t, this.getValuesAsJSON(!0))
                    },
                    _readFromLocalStorage: function (t) {
                        var e = localStorage.getItem(t);
                        e && this.setValuesFromJSON(e)
                    },
                    _createPanel: function (t, e, n) {
                        this._panel = i("div", null, "qs_main", n || document.body), this._panel.style.zIndex = ++a._topZ, this.setPosition(t || 0, e || 0), this._controls = {}
                    },
                    _createTitleBar: function (t) {
                        this._titleBar = i("div", null, "qs_title_bar", this._panel), this._titleBar.textContent = t, this._titleBar.addEventListener("mousedown", this._startDrag), this._titleBar.addEventListener("dblclick", this._doubleClickTitle)
                    },
                    _createContent: function () {
                        this._content = i("div", null, "qs_content", this._panel)
                    },
                    _createContainer: function () {
                        var t = i("div", null, "qs_container");
                        return t.addEventListener("focus", (function () {
                            this.className += " qs_container_selected"
                        }), !0), t.addEventListener("blur", (function () {
                            var t = this.className.indexOf(" qs_container_selected");
                            t > -1 && (this.className = this.className.substr(0, t))
                        }), !0), this._content.appendChild(t), t
                    },
                    setPosition: function (t, e) {
                        return this._panel.style.left = t + "px", this._panel.style.top = Math.max(e, 0) + "px", this
                    },
                    setSize: function (t, e) {
                        return this._panel.style.width = t + "px", this._content.style.width = t + "px", this._content.style.height = e - this._titleBar.offsetHeight + "px", this
                    },
                    setWidth: function (t) {
                        return this._panel.style.width = t + "px", this._content.style.width = t + "px", this
                    },
                    setHeight: function (t) {
                        return this._content.style.height = t - this._titleBar.offsetHeight + "px", this
                    },
                    setDraggable: function (t) {
                        return this._draggable = t, this._draggable || this._collapsible ? this._titleBar.style.cursor = "pointer" : this._titleBar.style.cursor = "default", this
                    },
                    _startDrag: function (t) {
                        this._draggable && (this._panel.style.zIndex = ++a._topZ, document.addEventListener("mousemove", this._drag), document.addEventListener("mouseup", this._endDrag), this._startX = t.clientX, this._startY = t.clientY), t.preventDefault()
                    },
                    _drag: function (t) {
                        var e = parseInt(this._panel.style.left),
                            n = parseInt(this._panel.style.top),
                            i = t.clientX,
                            o = t.clientY;
                        this.setPosition(e + i - this._startX, n + o - this._startY), this._startX = i, this._startY = o, t.preventDefault()
                    },
                    _endDrag: function (t) {
                        document.removeEventListener("mousemove", this._drag), document.removeEventListener("mouseup", this._endDrag), t.preventDefault()
                    },
                    setGlobalChangeHandler: function (t) {
                        return this._globalChangeHandler = t, this
                    },
                    _callGCH: function () {
                        this._localStorageName && this._saveInLocalStorage(this._localStorageName), this._globalChangeHandler && this._globalChangeHandler()
                    },
                    hide: function () {
                        return this._panel.style.visibility = "hidden", this._hidden = !0, this
                    },
                    show: function () {
                        return this._panel.style.visibility = "visible", this._panel.style.zIndex = ++a._topZ, this._hidden = !1, this
                    },
                    toggleVisibility: function () {
                        return this._hidden ? this.show() : this.hide(), this
                    },
                    setCollapsible: function (t) {
                        return this._collapsible = t, this._draggable || this._collapsible ? this._titleBar.style.cursor = "pointer" : this._titleBar.style.cursor = "default", this
                    },
                    collapse: function () {
                        return this._panel.removeChild(this._content), this._collapsed = !0, this
                    },
                    expand: function () {
                        return this._panel.appendChild(this._content), this._collapsed = !1, this
                    },
                    toggleCollapsed: function () {
                        return this._collapsed ? this.expand() : this.collapse(), this
                    },
                    setKey: function (t) {
                        return this._keyCode = t.toUpperCase().charCodeAt(0), document.body.addEventListener("keyup", this.onKeyUp), this
                    },
                    _onKeyUp: function (t) {
                        t.keyCode === this._keyCode && this.toggleVisibility()
                    },
                    _doubleClickTitle: function () {
                        this._collapsible && this.toggleCollapsed()
                    },
                    removeControl: function (t) {
                        if (this._controls[t]) var e = this._controls[t].container;
                        return e && e.parentElement && e.parentElement.removeChild(e), this._controls[t] = null, this
                    },
                    enableControl: function (t) {
                        return this._controls[t] && (this._controls[t].control.disabled = !1), this
                    },
                    disableControl: function (t) {
                        return this._controls[t] && (this._controls[t].control.disabled = !0), this
                    },
                    hideControl: function (t) {
                        return this._controls[t] && (this._controls[t].container.style.display = "none"), this
                    },
                    showControl: function (t) {
                        return this._controls[t] && (this._controls[t].container.style.display = "block"), this
                    },
                    overrideStyle: function (t, e, n) {
                        return this._controls[t] && (this._controls[t].control.style[e] = n), this
                    },
                    hideTitle: function (t) {
                        var e = this._controls[t].label;
                        return e && (e.style.display = "none"), this
                    },
                    showTitle: function (t) {
                        var e = this._controls[t].label;
                        return e && (e.style.display = "block"), this
                    },
                    hideAllTitles: function () {
                        for (var t in this._controls) {
                            var e = this._controls[t].label;
                            e && (e.style.display = "none")
                        }
                        return this
                    },
                    showAllTitles: function () {
                        for (var t in this._controls) {
                            var e = this._controls[t].label;
                            e && (e.style.display = "block")
                        }
                        return this
                    },
                    getValue: function (t) {
                        return this._controls[t].getValue()
                    },
                    setValue: function (t, e) {
                        return this._controls[t].setValue(e), this._callGCH(), this
                    },
                    addBoolean: function (t, e, o) {
                        var r = this._createContainer(),
                            s = i("label", null, "qs_checkbox_label", r);
                        s.textContent = t, s.setAttribute("for", t);
                        var a = i("label", null, "qs_checkbox", r);
                        a.setAttribute("for", t);
                        var u = n("checkbox", t, null, a);
                        u.checked = e, i("span", null, null, a), this._controls[t] = {
                            container: r,
                            control: u,
                            getValue: function () {
                                return this.control.checked
                            },
                            setValue: function (t) {
                                this.control.checked = t, o && o(t)
                            }
                        };
                        var c = this;
                        return u.addEventListener("change", (function () {
                            o && o(u.checked), c._callGCH()
                        })), this
                    },
                    bindBoolean: function (t, e, n) {
                        return this.addBoolean(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addButton: function (t, e) {
                        var i = this._createContainer(),
                            o = n("button", t, "qs_button", i);
                        o.value = t, this._controls[t] = {
                            container: i,
                            control: o
                        };
                        var r = this;
                        return o.addEventListener("click", (function () {
                            e && e(o), r._callGCH()
                        })), this
                    },
                    addColor: function (t, r, s) {
                        if (function () {
                                var t = navigator.userAgent.toLowerCase();
                                return !(t.indexOf("chrome") > -1 || t.indexOf("firefox") > -1 || t.indexOf("epiphany") > -1) && t.indexOf("safari/") > -1
                            }() || navigator.userAgent.toLowerCase().indexOf("edge") > -1 || o()) return this.addText(t, r, s);
                        var a = this._createContainer(),
                            u = e("<b>" + t + ":</b> " + r, a),
                            c = n("color", t, "qs_color", a);
                        c.value = r || "#ff0000";
                        var l = i("label", null, "qs_color_label", a);
                        l.setAttribute("for", t), l.style.backgroundColor = c.value, this._controls[t] = {
                            container: a,
                            control: c,
                            colorLabel: l,
                            label: u,
                            title: t,
                            getValue: function () {
                                return this.control.value
                            },
                            setValue: function (t) {
                                this.control.value = t, this.colorLabel.style.backgroundColor = c.value, this.label.innerHTML = "<b>" + this.title + ":</b> " + this.control.value, s && s(t)
                            }
                        };
                        var h = this;
                        return c.addEventListener("input", (function () {
                            u.innerHTML = "<b>" + t + ":</b> " + c.value, l.style.backgroundColor = c.value, s && s(c.value), h._callGCH()
                        })), this
                    },
                    bindColor: function (t, e, n) {
                        return this.addColor(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addDate: function (t, i, r) {
                        var s;
                        if (i instanceof Date) {
                            var a = i.getFullYear(),
                                u = i.getMonth() + 1;
                            u < 10 && (u = "0" + u), s = a + "-" + u + "-" + i.getDate()
                        } else s = i;
                        if (o()) return this.addText(t, s, r);
                        var c = this._createContainer(),
                            l = e("<b>" + t + "</b>", c),
                            h = n("date", t, "qs_text_input", c);
                        h.value = s || "", this._controls[t] = {
                            container: c,
                            control: h,
                            label: l,
                            getValue: function () {
                                return this.control.value
                            },
                            setValue: function (t) {
                                var e;
                                if (t instanceof Date) {
                                    var n = t.getFullYear(),
                                        i = t.getMonth() + 1;
                                    i < 10 && (i = "0" + i);
                                    var o = t.getDate();
                                    o < 10 && (o = "0" + o), e = n + "-" + i + "-" + o
                                } else e = t;
                                this.control.value = e || "", r && r(e)
                            }
                        };
                        var d = this;
                        return h.addEventListener("input", (function () {
                            r && r(h.value), d._callGCH()
                        })), this
                    },
                    bindDate: function (t, e, n) {
                        return this.addDate(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addDropDown: function (t, n, o) {
                        for (var r = this._createContainer(), s = e("<b>" + t + "</b>", r), a = i("select", null, "qs_select", r), u = 0; u < n.length; u++) {
                            var c = i("option");
                            c.label = n[u], c.innerText = n[u], a.add(c)
                        }
                        var l = this;
                        return a.addEventListener("change", (function () {
                            var t = a.selectedIndex,
                                e = a.options;
                            o && o({
                                index: t,
                                value: e[t].label
                            }), l._callGCH()
                        })), this._controls[t] = {
                            container: r,
                            control: a,
                            label: s,
                            getValue: function () {
                                var t = this.control.selectedIndex;
                                return {
                                    index: t,
                                    value: this.control.options[t].label
                                }
                            },
                            setValue: function (t) {
                                var e;
                                e = null != t.index ? t.index : t;
                                var n = this.control.options;
                                this.control.selectedIndex = e, o && o({
                                    index: e,
                                    value: n[e].label
                                })
                            }
                        }, this
                    },
                    bindDropDown: function (t, e, n) {
                        return this.addDropDown(t, e, (function (e) {
                            n[t] = e.value
                        }))
                    },
                    addElement: function (t, n) {
                        var i = this._createContainer(),
                            o = e("<b>" + t + "</b>", i);
                        return i.appendChild(n), this._controls[t] = {
                            container: i,
                            label: o
                        }, this
                    },
                    addFileChooser: function (t, o, r, s) {
                        var a = this._createContainer(),
                            u = e("<b>" + t + "</b>", a),
                            c = n("file", t, "qs_file_chooser", a);
                        r && (c.accept = r);
                        var l = i("label", null, "qs_file_chooser_label", a);
                        l.setAttribute("for", t), l.textContent = o || "Choose a file...", this._controls[t] = {
                            container: a,
                            control: c,
                            label: u,
                            getValue: function () {
                                return this.control.files[0]
                            }
                        };
                        var h = this;
                        return c.addEventListener("change", (function () {
                            c.files && c.files.length && (l.textContent = c.files[0].name, s && s(c.files[0]), h._callGCH())
                        })), this
                    },
                    addHTML: function (t, n) {
                        var o = this._createContainer(),
                            r = e("<b>" + t + ":</b> ", o),
                            s = i("div", null, null, o);
                        return s.innerHTML = n, this._controls[t] = {
                            label: r,
                            control: s,
                            getValue: function () {
                                return this.control.innerHTML
                            },
                            setValue: function (t) {
                                this.control.innerHTML = t
                            }
                        }, this
                    },
                    addImage: function (t, n) {
                        var o = this._createContainer(),
                            r = e("<b>" + t + "</b>", o);
                        return img = i("img", null, "qs_image", o), img.src = n, this._controls[t] = {
                            container: o,
                            control: img,
                            label: r,
                            getValue: function () {
                                return this.control.src
                            },
                            setValue: function (t) {
                                this.control.src = t
                            }
                        }, this
                    },
                    addRange: function (t, e, n, i, o, r) {
                        return this._addNumber("range", t, e, n, i, o, r)
                    },
                    addNumber: function (t, e, n, i, o, r) {
                        return this._addNumber("number", t, e, n, i, o, r)
                    },
                    _addNumber: function (t, i, r, s, a, u, c) {
                        var l = this._createContainer(),
                            h = e("", l),
                            d = n(t, i, "range" === t ? "qs_range" : "qs_text_input qs_number", l);
                        d.min = r || 0, d.max = s || 100, d.step = u || 1, d.value = a || 0, h.innerHTML = "<b>" + i + ":</b> " + d.value, this._controls[i] = {
                            container: l,
                            control: d,
                            label: h,
                            title: i,
                            callback: c,
                            getValue: function () {
                                return parseFloat(this.control.value)
                            },
                            setValue: function (t) {
                                this.control.value = t, this.label.innerHTML = "<b>" + this.title + ":</b> " + this.control.value, c && c(parseFloat(t))
                            }
                        };
                        var p = "input";
                        "range" === t && o() && (p = "change");
                        var f = this;
                        return d.addEventListener(p, (function () {
                            h.innerHTML = "<b>" + i + ":</b> " + d.value, c && c(parseFloat(d.value)), f._callGCH()
                        })), this
                    },
                    bindRange: function (t, e, n, i, o, r) {
                        return this.addRange(t, e, n, i, o, (function (e) {
                            r[t] = e
                        }))
                    },
                    bindNumber: function (t, e, n, i, o, r) {
                        return this.addNumber(t, e, n, i, o, (function (e) {
                            r[t] = e
                        }))
                    },
                    setRangeParameters: function (t, e, n, i) {
                        return this.setNumberParameters(t, e, n, i)
                    },
                    setNumberParameters: function (t, e, n, i) {
                        var o = this._controls[t],
                            r = o.control.value;
                        return o.control.min = e, o.control.max = n, o.control.step = i, o.control.value !== r && o.callback && o.callback(o.control.value), this
                    },
                    addPassword: function (t, e, n) {
                        return this._addText("password", t, e, n)
                    },
                    bindPassword: function (t, e, n) {
                        return this.addPassword(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addProgressBar: function (t, n, o, r) {
                        var s = this._createContainer(),
                            a = e("", s),
                            u = i("div", null, "qs_progress", s),
                            c = i("div", null, "qs_progress_value", u);
                        return c.style.width = o / n * 100 + "%", a.innerHTML = "numbers" === r ? "<b>" + t + ":</b> " + o + " / " + n : "percent" === r ? "<b>" + t + ":</b> " + Math.round(o / n * 100) + "%" : "<b>" + t + "</b>", this._controls[t] = {
                            container: s,
                            control: u,
                            valueDiv: c,
                            valueDisplay: r,
                            label: a,
                            value: o,
                            max: n,
                            title: t,
                            getValue: function () {
                                return this.value
                            },
                            setValue: function (t) {
                                this.value = Math.max(0, Math.min(t, this.max)), this.valueDiv.style.width = this.value / this.max * 100 + "%", "numbers" === this.valueDisplay ? this.label.innerHTML = "<b>" + this.title + ":</b> " + this.value + " / " + this.max : "percent" === this.valueDisplay && (this.label.innerHTML = "<b>" + this.title + ":</b> " + Math.round(this.value / this.max * 100) + "%")
                            }
                        }, this
                    },
                    setProgressMax: function (t, e) {
                        var n = this._controls[t];
                        return n.max = e, n.value = Math.min(n.value, n.max), n.valueDiv.style.width = n.value / n.max * 100 + "%", "numbers" === n.valueDisplay ? n.label.innerHTML = "<b>" + n.title + ":</b> " + n.value + " / " + n.max : "percent" === n.valueDisplay ? n.label.innerHTML = "<b>" + n.title + ":</b> " + Math.round(n.value / n.max * 100) + "%" : n.label.innerHTML = "<b>" + n.title + "</b>", this
                    },
                    addText: function (t, e, n) {
                        return this._addText("text", t, e, n)
                    },
                    _addText: function (t, o, r, s) {
                        var a, u = this._createContainer(),
                            c = e("<b>" + o + "</b>", u);
                        "textarea" === t ? (a = i("textarea", o, "qs_textarea", u)).rows = 5 : a = n(t, o, "qs_text_input", u), a.value = r || "", this._controls[o] = {
                            container: u,
                            control: a,
                            label: c,
                            getValue: function () {
                                return this.control.value
                            },
                            setValue: function (t) {
                                this.control.value = t, s && s(t)
                            }
                        };
                        var l = this;
                        return a.addEventListener("input", (function () {
                            s && s(a.value), l._callGCH()
                        })), this
                    },
                    bindText: function (t, e, n) {
                        return this.addText(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addTextArea: function (t, e, n) {
                        return this._addText("textarea", t, e, n)
                    },
                    setTextAreaRows: function (t, e) {
                        return this._controls[t].control.rows = e, this
                    },
                    bindTextArea: function (t, e, n) {
                        return this.addTextArea(t, e, (function (e) {
                            n[t] = e
                        }))
                    },
                    addTime: function (t, i, r) {
                        var s;
                        if (i instanceof Date) {
                            var a = i.getHours();
                            a < 10 && (a = "0" + a);
                            var u = i.getMinutes();
                            u < 10 && (u = "0" + u);
                            var c = i.getSeconds();
                            c < 10 && (c = "0" + c), s = a + ":" + u + ":" + c
                        } else s = i;
                        if (o()) return this.addText(t, s, r);
                        var l = this._createContainer(),
                            h = e("<b>" + t + "</b>", l),
                            d = n("time", t, "qs_text_input", l);
                        d.value = s || "", this._controls[t] = {
                            container: l,
                            control: d,
                            label: h,
                            getValue: function () {
                                return this.control.value
                            },
                            setValue: function (t) {
                                var e;
                                if (t instanceof Date) {
                                    var n = t.getHours();
                                    n < 10 && (n = "0" + n);
                                    var i = t.getMinutes();
                                    i < 10 && (i = "0" + i);
                                    var o = t.getSeconds();
                                    o < 10 && (o = "0" + o), e = n + ":" + i + ":" + o
                                } else e = t;
                                this.control.value = e || "", r && r(e)
                            }
                        };
                        var p = this;
                        return d.addEventListener("input", (function () {
                            r && r(d.value), p._callGCH()
                        })), this
                    },
                    bindTime: function (t, e, n) {
                        return this.addTime(t, e, (function (e) {
                            n[t] = e
                        }))
                    }
                };
            t.exports = a
        }()
    }, function (t, e, n) {
        var i = n(6);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(8)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e, n) {
        (t.exports = n(7)(!1)).push([t.i, "div.context-menu {\n\tposition : fixed;\n\tborder: 1px solid #ccc;\n\tbackground-color: #eee;\n\tmin-width : 100px;\n\tpadding: 2px;\n\tbox-shadow : 2px 2px 4px #444;\n\tdisplay : inline-block;\n\tz-index : 10002;\n\tcursor : default;\n}\n\ndiv.context-menu>div {\n\tpadding : 5px 25px;\n\tfont-family: sans-serif;\n\tfont-size: 0.8em;\n}\n\ndiv.context-menu-item:hover {\n\tbackground-color : #c3d6ee;\n}\n\ndiv.context-menu-item-disabled {\n\tcolor : #aaa;\n}\n", ""])
    }, function (t, e) {
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var n = function (t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i) return n;
                        if (e && "function" == typeof btoa) {
                            var o = (s = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                r = i.sources.map((function (t) {
                                    return "/*# sourceURL=" + i.sourceRoot + t + " */"
                                }));
                            return [n].concat(r).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                })).join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    }, function (t, e, n) {
        var i, o, r = {},
            s = (i = function () {
                return window && document && document.all && !window.atob
            }, function () {
                return void 0 === o && (o = i.apply(this, arguments)), o
            }),
            a = function (t, e) {
                return e ? e.querySelector(t) : document.querySelector(t)
            },
            u = function (t) {
                var e = {};
                return function (t, n) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var i = a.call(this, t, n);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        e[t] = i
                    }
                    return e[t]
                }
            }(),
            c = null,
            l = 0,
            h = [],
            d = n(9);

        function p(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = r[i.id];
                if (o) {
                    o.refs++;
                    for (var s = 0; s < o.parts.length; s++) o.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++) o.parts.push(y(i.parts[s], e))
                } else {
                    var a = [];
                    for (s = 0; s < i.parts.length; s++) a.push(y(i.parts[s], e));
                    r[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function f(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o],
                    s = e.base ? r[0] + e.base : r[0],
                    a = {
                        css: r[1],
                        media: r[2],
                        sourceMap: r[3]
                    };
                i[s] ? i[s].parts.push(a) : n.push(i[s] = {
                    id: s,
                    parts: [a]
                })
            }
            return n
        }

        function v(t, e) {
            var n = u(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = h[h.length - 1];
            if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), h.push(e);
            else if ("bottom" === t.insertAt) n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = u(t.insertAt.before, n);
                n.insertBefore(e, o)
            }
        }

        function b(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = h.indexOf(t);
            e >= 0 && h.splice(e, 1)
        }

        function g(t) {
            var e = document.createElement("style");
            if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                var i = function () {
                    0;
                    return n.nc
                }();
                i && (t.attrs.nonce = i)
            }
            return m(e, t.attrs), v(t, e), e
        }

        function m(t, e) {
            Object.keys(e).forEach((function (n) {
                t.setAttribute(n, e[n])
            }))
        }

        function y(t, e) {
            var n, i, o, r;
            if (e.transform && t.css) {
                if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
                t.css = r
            }
            if (e.singleton) {
                var s = l++;
                n = c || (c = g(e)), i = _.bind(null, n, s, !1), o = _.bind(null, n, s, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", m(e, t.attrs), v(t, e), e
            }(e), i = C.bind(null, n, e), o = function () {
                b(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = g(e), i = A.bind(null, n), o = function () {
                b(n)
            });
            return i(t),
                function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i(t = e)
                    } else o()
                }
        }
        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = s()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = f(t, e);
            return p(n, e),
                function (t) {
                    for (var i = [], o = 0; o < n.length; o++) {
                        var s = n[o];
                        (a = r[s.id]).refs--, i.push(a)
                    }
                    t && p(f(t, e), e);
                    for (o = 0; o < i.length; o++) {
                        var a;
                        if (0 === (a = i[o]).refs) {
                            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                            delete r[a.id]
                        }
                    }
                }
        };
        var x, w = (x = [], function (t, e) {
            return x[t] = e, x.filter(Boolean).join("\n")
        });

        function _(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = w(e, o);
            else {
                var r = document.createTextNode(o),
                    s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
            }
        }

        function A(t, e) {
            var n = e.css,
                i = e.media;
            if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        function C(t, e, n) {
            var i = n.css,
                o = n.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || r) && (i = d(i)), o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var s = new Blob([i], {
                    type: "text/css"
                }),
                a = t.href;
            t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (t, e) {
                var o, r = e.trim().replace(/^"(.*)"$/, (function (t, e) {
                    return e
                })).replace(/^'(.*)'$/, (function (t, e) {
                    return e
                }));
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, "Save", (function () {
            return A
        })), n.d(e, "imageMapCreator", (function () {
            return C
        }));
        var i = n(1);

        function o(t, e) {
            return parseFloat(t.toFixed(e))
        }
        var r, s = function () {
                function t(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                }
                return t.prototype.set = function (t, e) {
                    return this.x = t, this.y = e, this
                }, t.fromObject = function (e) {
                    return new t(e.x, e.y)
                }, t.dist = function (t, e) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }, t.swap = function (t, e, n) {
                    var i = t[n];
                    t[n] = e[n], e[n] = i
                }, t.prototype.isEmpty = function () {
                    return !this.x && !this.y
                }, t.prototype.oneIsEmpty = function () {
                    return !this.x || !this.y
                }, t.prototype.sum = function (e) {
                    return new t(this.x + e.x, this.y + e.y)
                }, t.prototype.add = function (t) {
                    return this.x += t.x, this.y += t.y, this
                }, t.prototype.diff = function (e) {
                    return new t(this.x - e.x, this.y - e.y)
                }, t.prototype.sub = function (t) {
                    return this.x -= t.x, this.y -= t.y, this
                }, t.prototype.move = function (t) {
                    this.add(t)
                }, t.prototype.getPosition = function () {
                    return this
                }, t.prototype.setPosition = function (t) {
                    return this.set(t.x, t.y), this
                }, t.prototype.clone = function () {
                    return new t(this.x, this.y)
                }, t.prototype.invert = function () {
                    return new t(-this.x, -this.y)
                }, t.prototype.toStr = function (t, e, n) {
                    return o(this[e] * n, t).toString()
                }, t.prototype.toHtml = function (t, e) {
                    return void 0 === e && (e = 1), this.toStr(t, "x", e) + "," + this.toStr(t, "y", e)
                }, t
            }(),
            a = (r = function (t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function (t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            u = function () {
                function t(t, e, n, i, o) {
                    void 0 === e && (e = []), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === o && (o = 0), this.shape = t, this.coords = e, this.href = n, this.title = i, this.id = o
                }
                return t.fromObject = function (t) {
                    switch (t.shape) {
                        case "rect":
                            var e = t;
                            return new d(e.coords.map(s.fromObject), e.href, e.title, e.id);
                        case "circle":
                            var n = t;
                            return new l(n.coords.map(s.fromObject), n.radius, n.href, n.title, n.id);
                        case "poly":
                            var i = t;
                            return new h(i.coords.map(s.fromObject), i.href, i.title, i.id, i.closed);
                        case "default":
                            var o = t;
                            return new p(o.iMap, o.href, o.title);
                        default:
                            throw "Not an area"
                    }
                }, t.prototype.getId = function () {
                    return this.id
                }, t.prototype.setShape = function (t) {
                    return this.shape = t, this
                }, t.prototype.getShape = function () {
                    return this.shape
                }, t.prototype.addCoord = function (t) {
                    return this.coords.push(t)
                }, t.prototype.setCoords = function (t) {
                    return this.coords = t, this
                }, t.prototype.getCoords = function () {
                    return this.coords
                }, t.prototype.drawingCoords = function () {
                    return this.coords.slice()
                }, t.prototype.getPoints = function () {
                    return this.coords
                }, t.prototype.isEmpty = function () {
                    return 0 == this.coords.length
                }, t.prototype.equals = function (t) {
                    return this.id == t.id
                }, t.prototype.copyCoords = function () {
                    var t = [];
                    return this.coords.forEach((function (e, n) {
                        t[n] = new s(e.x, e.y)
                    })), t
                }, t.prototype.updateLastCoord = function (t) {
                    return this.coords[this.coords.length - 1] = t, this
                }, t.prototype.move = function (t) {
                    var e = this.firstCoord();
                    null != t && e.add(t)
                }, t.prototype.getPosition = function () {
                    return this.firstCoord()
                }, t.prototype.setPosition = function (t) {
                    var e = this.coords[0].diff(t);
                    this.move(e)
                }, t.prototype.isValidShape = function () {
                    return this.isDrawable()
                }, t.prototype.isOverPoint = function (t, e) {
                    var n = this.getPoints().find((function (n) {
                        return s.dist(t, n) < e
                    }));
                    return n || !1
                }, t.prototype.setHref = function (t) {
                    return this.href = t, this
                }, t.prototype.getHref = function () {
                    return this.href
                }, t.prototype.getHrefVerbose = function () {
                    return "" === this.href ? "undefined" : this.href
                }, t.prototype.setTitle = function (t) {
                    return this.title = t, this
                }, t.prototype.getTitle = function () {
                    return this.title
                }, t.prototype.setId = function (t) {
                    return this.id = t, this
                }, t.prototype.firstCoord = function () {
                    return this.coords[0]
                }, t.prototype.htmlCoords = function (t, e) {
                    return this.drawingCoords().map((function (n) {
                        return n.toHtml(t, e)
                    })).join(",")
                }, t.prototype.toHtml = function (t) {
                    void 0 === t && (t = 1);
                    var e = this.htmlCoords(0, t);
                    e = e ? 'coords="' + e + '"' : "";
                    var n = this.href ? 'href="' + this.href + '"' : "nolot",
                        i = this.title ? 'title="' + this.title + '"' : "A lot";
                    return '<area shape="' + this.shape + '" ' + e + " " + n + ' alt="' + this.href + '" ' + i + " />"
                }, t.prototype.toSvg = function (t) {
                    return void 0 === t && (t = 1), '<a xlink:href="' + this.href + '">' + this.svgArea(t) + "</a>"
                }, t
            }(),
            c = function (t) {
                function e() {
                    return t.call(this, "empty") || this
                }
                return a(e, t), e.prototype.isDrawable = function () {
                    return !1
                }, e.prototype.svgArea = function (t) {
                    return ""
                }, e.prototype.isOver = function (t) {
                    return !1
                }, e.prototype.display = function (t) {}, e
            }(u),
            l = function (t) {
                function e(e, n, i, o, r) {
                    void 0 === e && (e = []), void 0 === n && (n = 0), void 0 === i && (i = ""), void 0 === o && (o = ""), void 0 === r && (r = 0);
                    var s = t.call(this, "circle", e, i, o, r) || this;
                    return s.radius = n, s
                }
                return a(e, t), e.prototype.getCenter = function () {
                    return this.firstCoord()
                }, e.prototype.isValidShape = function () {
                    return t.prototype.isValidShape.call(this) && this.radius > 0
                }, e.prototype.isDrawable = function () {
                    return 1 == this.coords.length
                }, e.prototype.isOver = function (t) {
                    var e = this.getCenter();
                    return s.dist(t, e) < this.radius
                }, e.prototype.updateLastCoord = function (t) {
                    var e = this.getCenter();
                    return this.radius = s.dist(e, t), this
                }, e.prototype.display = function (t) {
                    t.ellipse(this.getCenter().x, this.getCenter().y, 2 * this.radius)
                }, e.prototype.htmlCoords = function (t, e) {
                    return this.getCenter().toHtml(t, e) + "," + o(this.radius, t)
                }, e.prototype.svgArea = function (t) {
                    return '<circle cx="' + this.coords[0].toStr(0, "x", t) + '" cy="' + this.coords[0].toStr(0, "y", t) + '" r="' + o(this.radius, 0) + '" />'
                }, e
            }(u),
            h = function (t) {
                function e(e, n, i, o, r) {
                    void 0 === e && (e = []), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === o && (o = 0), void 0 === r && (r = !1);
                    var s = t.call(this, "poly", e, n, i, o) || this;
                    return s.closed = r, s
                }
                return a(e, t), e.prototype.isDrawable = function () {
                    return this.coords.length >= 2
                }, e.prototype.isValidShape = function () {
                    return t.prototype.isValidShape.call(this) && this.closed
                }, e.prototype.isOver = function (t) {
                    var e, n = t.x,
                        i = t.y,
                        o = this.coords.map((function (t) {
                            return t.x
                        })),
                        r = this.coords.map((function (t) {
                            return t.y
                        })),
                        s = o.length - 1,
                        a = 0,
                        u = o,
                        c = r;
                    for (e = 0; e < o.length; e++)(c[e] < i && c[s] >= i || c[s] < i && c[e] >= i) && (u[e] <= n || u[s] <= n) && (a ^= u[e] + (i - c[e]) / (c[s] - c[e]) * (u[s] - u[e]) < n ? 1 : 0), s = e;
                    return Boolean(a)
                }, e.prototype.isClosable = function (t, e) {
                    var n = s.dist(t, this.firstCoord());
                    return this.coords.length >= 4 && n < e
                }, e.prototype.drawingCoords = function () {
                    var e = t.prototype.drawingCoords.call(this);
                    return this.closed && e.push(this.firstCoord()), e
                }, e.prototype.close = function () {
                    return this.closed = !0, this.coords.pop(), this
                }, e.prototype.move = function (t) {
                    this.coords.map((function (e) {
                        return e.add(t)
                    }))
                }, e.prototype.display = function (t) {
                    t.beginShape(), this.drawingCoords().forEach((function (e) {
                        return t.vertex(e.x, e.y)
                    })), t.endShape()
                }, e.prototype.svgArea = function (t) {
                    return '<polygon points="' + this.drawingCoords().map((function (e) {
                        return e.toStr(0, "x", t) + "," + e.toStr(0, "y", t)
                    })).join(" ") + '" />'
                }, e
            }(u),
            d = function (t) {
                function e(e, n, i, o) {
                    void 0 === e && (e = []), void 0 === n && (n = ""), void 0 === i && (i = ""), void 0 === o && (o = 0);
                    var r = t.call(this, e, n, i, o, !0) || this;
                    if (r.coords.length > 0 && r.coords.length < 4) {
                        var s = r.firstCoord();
                        r.coords = [s, s.clone(), s.clone(), s.clone()]
                    }
                    return r
                }
                return a(e, t), e.prototype.isValidShape = function () {
                    return t.prototype.isValidShape.call(this) && !this.isNullArea()
                }, e.prototype.isNullArea = function () {
                    return this.coords[0].x == this.coords[1].x || this.coords[0].y == this.coords[3].y
                }, e.prototype.updateLastCoord = function (t) {
                    return this.coords[1].x = t.x, this.coords[2] = t, this.coords[3].y = t.y, this
                }, e
            }(h),
            p = function (t) {
                function e(e, n, i) {
                    void 0 === n && (n = ""), void 0 === i && (i = "");
                    var o = t.call(this, "default", [], n, i) || this;
                    return o.iMap = e, o.isDefault = !0, o
                }
                return a(e, t), e.prototype.isDrawable = function () {
                    return !0
                }, e.prototype.isOver = function () {
                    return !0
                }, e.prototype.display = function (t) {
                    t.rect(0, 0, this.iMap.width - 1, this.iMap.height - 1)
                }, e.prototype.svgArea = function (t) {
                    return '<rect x="0" y="0" width="100%" height="100%" />'
                }, e
            }(u),
            f = function () {
                function t(t, e, n, i, o) {
                    void 0 === n && (n = []), void 0 === i && (i = ""), void 0 === o && (o = !1), this.width = t, this.height = e, this.areas = n, this.name = i, this.hasDefaultArea = o, this.dArea = new p(this), this.lastId = 0
                }
                return t.prototype.setFromObject = function (t) {
                    var e = t;
                    return e.dArea.iMap = this, this.width = e.width, this.height = e.height, this.areas = e.areas.map(u.fromObject), this.name = e.name, this.hasDefaultArea = e.hasDefaultArea, this.dArea = u.fromObject(e.dArea), this
                }, t.prototype.setName = function (t) {
                    return t && (this.name = t.replace(/\s+/g, "")), this
                }, t.prototype.getName = function () {
                    return this.name
                }, t.prototype.setSize = function (t, e) {
                    return this.width = t, this.height = e, this
                }, t.prototype.setDefaultArea = function (t) {
                    return this.hasDefaultArea = t, this
                }, t.prototype.getAreas = function (t) {
                    void 0 === t && (t = !0);
                    var e = this.areas.slice();
                    return t && this.hasDefaultArea && e.push(this.dArea), e
                }, t.prototype.isEmpty = function () {
                    return 0 == this.getAreas().length
                }, t.prototype.addArea = function (t, e) {
                    return void 0 === e && (e = !0), e && t.setId(this.getNewId()), this.areas.unshift(t), t.id
                }, t.prototype.rmvArea = function (t) {
                    var e = this.areaIndex(t);
                    return this.areas.splice(e, 1), e
                }, t.prototype.moveArea = function (t, e) {
                    var n = this.areaIndex(t),
                        i = this.areas[n],
                        o = n + e;
                    return !(o < 0 || o >= this.areas.length) && (this.rmvArea(t), this.insertArea(i, o), o)
                }, t.prototype.shiftArea = function () {
                    return this.areas.shift()
                }, t.prototype.popArea = function () {
                    return this.areas.pop()
                }, t.prototype.insertArea = function (t, e) {
                    return this.areas.splice(e, 0, t), this.areas.length
                }, t.prototype.areaIndex = function (t) {
                    return this.areas.findIndex((function (e) {
                        return e.id == t
                    }))
                }, t.prototype.isFirstArea = function (t) {
                    return 0 == this.areaIndex(t)
                }, t.prototype.isLastArea = function (t) {
                    return this.areaIndex(t) == this.areas.length - 1
                }, t.prototype.getNewId = function () {
                    return this.lastId++, this.lastId
                }, t.prototype.toHtml = function (t) {
                    void 0 === t && (t = 1);
                    var e = [];
                    return this.getAreas().forEach((function (n) {
                        n.isValidShape() && e.push("\t" + n.toHtml(t))
                    })), '<map name="' + this.name + '" id="' + this.name + '">\n' + e.join("\n") + "\n</map>"
                }, t.prototype.toSvg = function (t) {
                    void 0 === t && (t = 1);
                    var e = [];
                    this.getAreas(!1).forEach((function (n) {
                        n.isValidShape() && e.push("\t" + n.toSvg(t))
                    }));
                    var n = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + this.width + '" height="' + this.height + '">\n';
                    return n += e.join("\n"), n += "\n</svg>"
                }, t.prototype.clearAreas = function () {
                    return this.areas = [], this
                }, t.prototype.setAreas = function (t) {
                    return this.areas = t, this
                }, t
            }(),
            v = function () {
                function t(t, e, n, i) {
                    void 0 === e && (e = 15), void 0 === n && (n = 0), void 0 === i && (i = !1), this.iMap = t, this.speed = e, this.alpha = n, this.over = i
                }
                return t.prototype.appear = function () {
                    this.over = !0
                }, t.prototype.disappear = function () {
                    this.over = !1
                }, t.prototype.display = function () {
                    this.over ? this.alpha < 100 && (this.alpha += this.speed) : this.alpha > 0 && (this.alpha -= this.speed), this.iMap.p5.noStroke(), this.iMap.p5.fill(255, 255, 255, this.alpha), this.iMap.p5.rect(this.iMap.trueX(0), this.iMap.trueY(0), this.iMap.p5.width / this.iMap.view.scale, this.iMap.p5.height / this.iMap.view.scale)
                }, t
            }(),
            b = function () {
                function t() {
                    this.origin = new s, this.position = this.origin.clone(), this.areas = new Map, this.points = new Map
                }
                return t.prototype.resetOrigin = function (t) {
                    void 0 === t && (t = new s), this.origin = t.clone(), this.position = t, this.addPoint(t)
                }, t.prototype.registerArea = function (t) {
                    this.areas.set(t.getId(), t)
                }, t.prototype.addArea = function (t) {
                    var e = this;
                    this.registerArea(t), t.getCoords().forEach((function (t) {
                        return e.addPoint(t)
                    }))
                }, t.prototype.addPoint = function (t) {
                    var e = this.points.get(t) || 0;
                    this.points.set(t, e + 1)
                }, t.prototype.containsArea = function (t) {
                    return this.areas.has(t.getId())
                }, t.prototype.containsPoint = function (t) {
                    return this.points.has(t)
                }, t.prototype.distToOrigin = function () {
                    return this.getPosition().diff(this.origin)
                }, t.prototype.clear = function () {
                    this.areas.clear(), this.points.clear(), this.origin = new s
                }, t.prototype.isEmpty = function () {
                    return 0 == this.points.size
                }, t.prototype.move = function (t) {
                    this.points.forEach((function (e, n) {
                        n.move(t)
                    }))
                }, t.prototype.getPosition = function () {
                    return this.position
                }, t.prototype.setPosition = function (t) {
                    var e = t.diff(this.position);
                    this.move(e)
                }, t
            }(),
            g = n(2),
            m = n(3),
            y = n.n(m),
            x = n(4),
            w = n.n(x),
            _ = n(0),
            A = (n(5), function (t, e) {
                this.version = t, this.map = e
            }),
            C = function () {
                function t(t, e, n) {
                    var i = this;
                    void 0 === e && (e = 600), void 0 === n && (n = 450), this.menu = {
                        SetUrl: {
                            onSelect: function (t, e, n, o) {
                                i.setAreaUrl(o)
                            },
                            label: "Select which lot ID the area will be linked to"
                        },
                        SetTitle: {
                            onSelect: function (t, e, n, o) {
                                i.setAreaTitle(o)
                            },
                            label: "Area title (optional)"
                        },
                        Delete: function (t, e, n, o) {
                            i.deleteArea(o)
                        },
                        MoveFront: {
                            onSelect: function (t, e, n, o) {
                                i.moveArea(o, -1)
                            },
                            enabled: !0,
                            label: "Move Forward"
                        },
                        MoveBack: {
                            onSelect: function (t, e, n, o) {
                                i.moveArea(o, 1)
                            },
                            enabled: !0,
                            label: "Move Backward"
                        }
                    };
                    var o = document.getElementById(t);
                    if (!o) throw new Error("HTMLElement not found");
                    this.width = e, this.height = n, this.tool = "Polygon", this.drawingTools = ["Rectangle", "Circle", "Polygon"], this.settings, this.tempArea = new c, this.selection = new b, this.hoveredArea = null, this.hoveredPoint = null, this.map = new f(e, n), this.undoManager = new y.a, this.img = {
                        data: null,
                        file: null
                    }, this.view = {
                        scale: 1,
                        transX: 0,
                        transY: 0
                    }, this.zoomParams = {
                        min: .03,
                        max: 3,
                        sensativity: .001
                    }, this.magnetism = !0, this.fusion = !1, this.tolerance = 6, this.bgLayer = new v(this), this.p5 = new p5(this.sketch.bind(this), o)
                }
                return t.prototype.sketch = function (t) {
                    this.p5 = t, t.setup = this.setup.bind(this), t.draw = this.draw.bind(this), t.mousePressed = this.mousePressed.bind(this), t.mouseDragged = this.mouseDragged.bind(this), t.mouseReleased = this.mouseReleased.bind(this), t.mouseWheel = this.mouseWheel.bind(this), t.keyPressed = this.keyPressed.bind(this)
                }, t.prototype.setup = function () {
                    var t = this;
                    this.p5.createCanvas(this.width, this.height).drop(this.handeFile.bind(this)).dragLeave(this.onLeave.bind(this)).dragOver(this.onOver.bind(this)), this.settings = w.a.create(this.p5.width + 5, 250, "Interactive Map Generator", this.p5.canvas.parentElement).setDraggable(!1).addText("Map Name", "", (function (e) {
                        t.map.setName(e)
                    })).addDropDown("Tool", ["Polygon", "Rectangle", "Circle", "Select", "Delete", "Test an area"], (function (e) {
                        t.setTool(e.value)
                    })).addButton("Undo", this.undoManager.undo).addButton("Redo", this.undoManager.redo).addButton("Clear", this.clearAreas.bind(this)).addButton("Generate", (function () {
                        t.settings.setValue("Output", t.map.toHtml())
                    })).addTextArea("Output").addButton("Save", this.testFunction.bind(this)), this.p5.canvas.addEventListener("contextmenu", (function (t) {
                        t.preventDefault()
                    })), this.p5.canvas.addEventListener("mousedown", (function (t) {
                        t.preventDefault()
                    })), document.getElementById("Output").setAttribute("onFocus", "this.select();")
                }, t.prototype.draw = function () {
                    this.updateTempArea(), this.updateHovered(), this.setCursor(), this.setOutput(), this.setBackground(), this.setTitle(this.hoveredArea), this.p5.translate(this.view.transX, this.view.transY), this.p5.scale(this.view.scale), this.drawImage(), this.bgLayer.display(), this.drawAreas()
                }, t.prototype.mousePressed = function () {
                    if (this.mouseIsHoverSketch()) {
                        var t = this.drawingCoord();
                        if (this.p5.mouseButton == this.p5.LEFT && !_.isOpen()) switch (this.tool) {
                            case "Circle":
                            case "Rectangle":
                                this.setTempArea(t);
                                break;
                            case "Polygon":
                                var e = this.tempArea;
                                e.isEmpty() ? this.setTempArea(t) : e.isClosable(this.mCoord(), this.tolerance / this.view.scale) ? (e.close(), e.isValidShape() && this.createArea(e), this.tempArea = new c) : this.tempArea.addCoord(this.mCoord());
                                break;
                            case "Select":
                                null !== this.hoveredPoint ? (this.selection.addPoint(this.hoveredPoint), this.selection.registerArea(this.hoveredArea), this.selection.resetOrigin(this.hoveredPoint)) : null !== this.hoveredArea && (this.selection.addArea(this.hoveredArea), this.selection.resetOrigin(this.mCoord()))
                        }
                    }
                }, t.prototype.mouseDragged = function () {
                    if (this.mouseIsHoverSketch() && !_.isOpen())
                        if (this.p5.mouseButton == this.p5.LEFT) switch (this.tool) {
                            case "Select":
                                this.selection.setPosition(this.drawingCoord())
                        } else this.p5.mouseButton == this.p5.CENTER && (this.view.transX += this.p5.mouseX - this.p5.pmouseX, this.view.transY += this.p5.mouseY - this.p5.pmouseY)
                }, t.prototype.mouseReleased = function (t) {
                    switch (this.tool) {
                        case "Rectangle":
                        case "Circle":
                            this.tempArea.isValidShape() && this.createArea(this.tempArea), this.tempArea = new c;
                            break;
                        case "Select":
                            var e = this.selection;
                            if (!e.isEmpty()) {
                                var n = this.selection.distToOrigin();
                                this.undoManager.add({
                                    undo: function () {
                                        return e.move(n.invert())
                                    },
                                    redo: function () {
                                        return e.move(n)
                                    }
                                })
                            }
                            this.selection = new b
                    }
                    this.onClick(t), this.bgLayer.disappear()
                }, t.prototype.mouseWheel = function (t) {
                    if (this.mouseIsHoverSketch()) {
                        var e = this.view.scale * this.zoomParams.sensativity * -t.deltaY;
                        return this.zoom(e), !1
                    }
                    return !0
                }, t.prototype.keyPressed = function (t) {
                    if (t.composed && t.ctrlKey) {
                        switch (t.key) {
                            case "s":
                                this.save();
                                break;
                            case "z":
                                this.undoManager.undo();
                                break;
                            case "y":
                                this.undoManager.redo();
                                break;
                            default:
                                return !0
                        }
                        return !1
                    }
                    return "Polygon" != this.tool || t.keyCode != this.p5.ESCAPE || (this.tempArea = new c, !1)
                }, t.prototype.trueX = function (t) {
                    return (t - this.view.transX) / this.view.scale
                }, t.prototype.trueY = function (t) {
                    return (t - this.view.transY) / this.view.scale
                }, t.prototype.mX = function () {
                    return this.trueX(this.p5.mouseX)
                }, t.prototype.mY = function () {
                    return this.trueY(this.p5.mouseY)
                }, t.prototype.mCoord = function () {
                    return new s(this.mX(), this.mY())
                }, t.prototype.drawingCoord = function () {
                    var t = this.mCoord();
                    return t = this.magnetism && this.hoveredPoint ? this.hoveredPoint : t, this.fusion || (t = t.clone()), t
                }, t.prototype.mouseIsHoverSketch = function () {
                    return this.p5.mouseX <= this.p5.width && this.p5.mouseX >= 0 && this.p5.mouseY <= this.p5.height && this.p5.mouseY >= 0
                }, t.prototype.updateHovered = function () {
                    var t = this;
                    this.hoveredPoint = null;
                    var e = this.map.getAreas().find((function (e) {
                        if (t.selection.containsArea(e)) return !1;
                        if ("Test an area" != t.tool) {
                            var n = e.isOverPoint(t.mCoord(), t.tolerance / t.view.scale);
                            if (n && !t.selection.containsPoint(n)) return t.hoveredPoint = n, !0
                        }
                        return !!e.isOver(t.mCoord())
                    }));
                    this.p5.mouseIsPressed || (this.hoveredArea = e || null)
                }, t.prototype.onClick = function (t) {
                    if (this.mouseIsHoverSketch() && this.hoveredArea)
                        if (this.p5.mouseButton == this.p5.RIGHT) this.selection.addArea(this.hoveredArea), this.menu.MoveFront.enabled = !(this.map.isFirstArea(this.hoveredArea.id) || "default" == this.hoveredArea.getShape()), this.menu.MoveBack.enabled = !(this.map.isLastArea(this.hoveredArea.id) || "default" == this.hoveredArea.getShape()), _.display(t, this.menu, {
                            position: "click",
                            data: this.hoveredArea
                        });
                        else if (this.p5.mouseButton == this.p5.LEFT && !_.isOpen()) switch (this.tool) {
                        case "Test an area":
                            alert("Linked area: " + this.hoveredArea.getHref());
                            break;
                        case "Delete":
                            this.deleteArea(this.hoveredArea)
                    }
                    this.selection.clear()
                }, t.prototype.onOver = function (t) {
                    this.bgLayer.appear(), t.preventDefault()
                }, t.prototype.onLeave = function () {
                    this.bgLayer.disappear()
                }, t.prototype.handeFile = function (t) {
                    var e = this;
                    "image" == t.type ? (this.img.data = this.p5.loadImage(t.data, (function (t) {
                        return e.resetView(t)
                    })), this.img.file = t.file, this.map.getName() || (this.map.setName(t.name), this.settings.setValue("Map Name", this.map.getName()))) : "json" == t.subtype && fetch(t.data).then((function (t) {
                        return t.blob()
                    })).then((function (t) {
                        var n = new FileReader;
                        n.onload = function () {
                            var t = n.result;
                            "string" == typeof t && e.importMap(t)
                        }, n.readAsText(t)
                    })), this.bgLayer.disappear()
                }, t.prototype.resetView = function (t) {
                    this.view.scale = 1, this.view.transX = 0, this.view.transY = 0;
                    var e = this.p5.width / t.width,
                        n = this.p5.height / t.height;
                    e < this.view.scale && (this.view.scale = e), n < this.view.scale && (this.view.scale = n), this.map.setSize(t.width, t.height)
                }, t.prototype.zoom = function (t) {
                    var e = this.view.scale + t;
                    if (e > this.zoomParams.min && e < this.zoomParams.max) {
                        var n = this.mX() * t,
                            i = this.mY() * t;
                        this.view.scale = e, this.view.transX -= n, this.view.transY -= i
                    }
                }, t.prototype.drawImage = function () {
                    this.img.data && this.p5.image(this.img.data, 0, 0, this.img.data.width, this.img.data.height)
                }, t.prototype.drawAreas = function () {
                    for (var t = [this.tempArea].concat(this.map.getAreas()), e = t.length; e--;) {
                        var n = t[e];
                        this.setAreaStyle(n), n.isDrawable() && n.display(this.p5)
                    }
                    if (this.hoveredPoint) {
                        var i = this.hoveredPoint;
                        this.p5.fill(0), this.p5.noStroke(), this.p5.ellipse(i.x, i.y, 6 / this.view.scale)
                    }
                }, t.prototype.setTool = function (t) {
                    this.tool = t, this.tempArea = new c
                }, t.prototype.setCursor = function () {
                    if (this.drawingTools.includes(this.tool)) switch (this.tool) {
                        case "Polygon":
                            var t = this.tempArea;
                            if (!t.isEmpty() && t.isClosable(this.mCoord(), 5 / this.view.scale)) {
                                this.p5.cursor(this.p5.HAND);
                                break
                            }
                            default:
                                this.p5.cursor(this.p5.CROSS)
                    } else if (this.p5.cursor(this.p5.ARROW), this.hoveredArea) switch (this.tool) {
                        case "Test an area":
                        case "Delete":
                            this.p5.cursor(this.p5.HAND);
                            break;
                        case "Select":
                            this.hoveredPoint || this.p5.cursor(this.p5.MOVE)
                    }
                }, t.prototype.setOutput = function () {
                    switch (this.tool) {
                        case "Test an area":
                        case "Select":
                            if (this.mouseIsHoverSketch()) {
                                var t = this.hoveredArea ? this.hoveredArea.getHrefVerbose() : "none";
                                this.settings.setValue("Output", t)
                            }
                    }
                }, t.prototype.setBackground = function () {
                    if (this.p5.background(200), !this.img.data) {
                        this.p5.noStroke(), this.p5.fill(0), this.p5.textAlign(this.p5.CENTER, this.p5.CENTER), this.p5.textSize(15);
                        this.p5.text("Drag and drop the map image here", this.p5.width / 2, this.p5.height / 2)
                    }
                }, t.prototype.setTitle = function (t) {
                    "Test an area" == this.tool && t && t.getTitle() ? this.p5.canvas.setAttribute("title", t.getTitle()) : this.p5.canvas.removeAttribute("title")
                }, t.prototype.setAreaStyle = function (t) {
                    var e = this.p5.color(255, 255, 255, 178);
                    "Test an area" == this.tool && (e = this.p5.color(255, 0)), (("Delete" == this.tool || "Select" == this.tool) && this.mouseIsHoverSketch() && t == this.hoveredArea || this.selection.containsArea(t)) && (e = this.p5.color(255, 200, 200, 178)), this.p5.fill(e), this.p5.strokeWeight(1 / this.view.scale), "Test an area" == this.tool ? this.p5.noStroke() : this.p5.stroke(0)
                }, t.prototype.setTempArea = function (t) {
                    var e = [t];
                    switch (this.tool) {
                        case "Rectangle":
                            this.tempArea = new d(e);
                            break;
                        case "Circle":
                            this.tempArea = new l(e);
                            break;
                        case "Polygon":
                            this.tempArea = new h(e), this.tempArea.addCoord(t)
                    }
                }, t.prototype.updateTempArea = function () {
                    var t = this.drawingCoord();
                    this.tempArea.isEmpty() || this.tempArea.updateLastCoord(t)
                }, t.prototype.exportMap = function () {
                    return JSON.stringify(new A(i.a, this.map), (function (t, e) {
                        return e instanceof f && !(this instanceof A) ? e.getName() : e
                    }))
                }, t.prototype.testFunction = function () {
                    const apiURL = 'http://localhost:3000';
                    const urlParams = new URLSearchParams(window.location.search);
                    var community_id = urlParams.get('community_id');
                    var map = this.map.toHtml();
                    var map_name = this.map.getName();
                    console.log('---------------------------');
                    console.log(community_id, map, this.map.getName());
                    console.log('---------------------------');
                    var formData = new FormData();
                    formData.append('community_id', community_id);
                    formData.append('map', map);
                    formData.append('map_name', map_name);
                    formData.append('apiKey', '123456');
                    fetch(`${apiURL}/api/communities/interactiveMap`, {
                        method: 'put',
                        credentials: 'omit',
                        body: formData
                    })
                    .then(res => {
                        console.log('Response');
                        console.log(res);
                        alert('Map updated');
                    })
                }, t.prototype.save = function () {
                    var t = new Blob([this.exportMap()], {
                        encoding: "UTF-8",
                        type: "text/plain;charset=UTF-8"
                    });
                    g(t, this.map.getName() + ".map.json", "application/json")
                }, t.prototype.importMap = function (t) {
                    var e = JSON.parse(t).map;
                    this.map.setFromObject(e), this.settings.setValue("Map Name", e.name), this.settings.setValue("Default Area", e.hasDefaultArea), this.reset()
                }, t.prototype.createArea = function (t) {
                    var e = this;
                    this.map.addArea(t), this.undoManager.add({
                        undo: function () {
                            return t = e.map.shiftArea()
                        },
                        redo: function () {
                            return e.map.addArea(t, !1)
                        }
                    })
                }, t.prototype.deleteArea = function (t) {
                    var e = this,
                        n = t.id;
                    if (0 === n) this.settings.setValue("Default Area", !1);
                    else {
                        var i = this.map.rmvArea(n);
                        this.undoManager.add({
                            undo: function () {
                                return e.map.insertArea(t, i)
                            },
                            redo: function () {
                                return e.map.rmvArea(n)
                            }
                        })
                    }
                }, t.prototype.moveArea = function (t, e) {
                    var n = this;
                    !1 !== this.map.moveArea(t.id, e) && this.undoManager.add({
                        undo: function () {
                            return n.map.moveArea(t.id, -e)
                        },
                        redo: function () {
                            return n.map.moveArea(t.id, e)
                        }
                    })
                }, t.prototype.setAreaUrl = function (t) {
                    var e = t.getHref(),
                        n = prompt("Type a lot ID to link it to this area", e || "");
                    n && (t.setHref(n), this.undoManager.add({
                        undo: function () {
                            return t.setHref(e)
                        },
                        redo: function () {
                            return t.setHref(n)
                        }
                    }))
                }, t.prototype.setAreaTitle = function (t) {
                    var e = t.getTitle(),
                        n = prompt("Enter the title of this area", e || "");
                    n && (t.setTitle(n), this.undoManager.add({
                        undo: function () {
                            return t.setTitle(e)
                        },
                        redo: function () {
                            return t.setTitle(n)
                        }
                    }))
                }, t.prototype.setDefaultArea = function (t) {
                    var e = this;
                    this.map.setDefaultArea(t), this.undoManager.add({
                        undo: function () {
                            e.map.setDefaultArea(!t), e.settings.setValue("Default Area", !t)
                        },
                        redo: function () {
                            e.map.setDefaultArea(t), e.settings.setValue("Default Area", t)
                        }
                    })
                }, t.prototype.clearAreas = function () {
                    var t = this,
                        e = this.map.getAreas(!1);
                    this.map.clearAreas(), this.undoManager.add({
                        undo: function () {
                            return t.map.setAreas(e)
                        },
                        redo: function () {
                            return t.map.clearAreas()
                        }
                    })
                }, t.prototype.reset = function () {
                    this.undoManager.clear()
                }, t
            }()
    }])
}));
//# sourceMappingURL=image-map-creator.bundle.js.map