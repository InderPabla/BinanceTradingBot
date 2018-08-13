function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
    return "boolean" == typeof e
}

function isDate(e) {
    return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
    return void 0 !== e
}

function isFunction(e) {
    return "function" == typeof e
}

function isNull(e) {
    return null === e
}

function isNumber(e) {
    return "number" == typeof e
}

function isObject(e) {
    return null !== e && "object" == typeof e
}

function isString(e) {
    return "string" == typeof e
}

function isUndefined(e) {
    return void 0 === e
}

function convertToBoolean(e) {
    return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
    return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
    return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
    return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
    return angular.equals(e, t)
}

function min(e, t) {
    return e < t ? e : t
}

function max(e, t) {
    return e > t ? e : t
}

function beginsWith(e, t) {
    return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
    return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
    return angular.copy(e, t)
}

function removeProperty(e, t) {
    delete e[t]
}

function removeProperties(e, t) {
    for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
    return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
    var n = [];
    if (t instanceof Array)
        for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
    return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
    return angular.module(e, t)
}

function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
    return "boolean" == typeof e
}

function isDate(e) {
    return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
    return void 0 !== e
}

function isFunction(e) {
    return "function" == typeof e
}

function isNull(e) {
    return null === e
}

function isNumber(e) {
    return "number" == typeof e
}

function isObject(e) {
    return null !== e && "object" == typeof e
}

function isString(e) {
    return "string" == typeof e
}

function isUndefined(e) {
    return void 0 === e
}

function convertToBoolean(e) {
    return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
    return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
    return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
    return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
    return angular.equals(e, t)
}

function min(e, t) {
    return e < t ? e : t
}

function max(e, t) {
    return e > t ? e : t
}

function beginsWith(e, t) {
    return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
    return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
    return angular.copy(e, t)
}

function removeProperty(e, t) {
    delete e[t]
}

function removeProperties(e, t) {
    for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
    return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
    var n = [];
    if (t instanceof Array)
        for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
    return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
    return angular.module(e, t)
}

function getLang() {
    var e = localStorage.lang || "cn";
    return Langs[e] || Langs.en
}

function log10(e) {
    return Math.log(e) / Math.LN10
}

function millitime() {
    return (new Date).getTime() / 1e3
}

function hms_from_epoch_ms(e, t) {
    var n, r, i, o = "",
        a = null;
    try {
        a = new Date(e), t ? (n = a.getHours(), r = a.getMinutes(), i = a.getSeconds()) : (n = a.getUTCHours(), r = a.getUTCMinutes(), i = a.getUTCSeconds()), o += (n < 10 ? "0" + n : n) + ":", o += (r < 10 ? "0" + r : r) + ":", o += i < 10 ? "0" + i : i
    } catch (e) {
        o = "00:00:00"
    }
    return o
}

function formatted_date(e, t, n) {
    var r = new Date(1e3 * e),
        i = "";
    return !0 === n ? (t && (i = r.getFullYear() + "-"), i += r.getMonth() + 1 < 10 ? "0" : "", i += r.getMonth() + 1 + "-", i += r.getDate() < 10 ? "0" : "", i += r.getDate()) : (t && (i = r.getUTCFullYear() + "-"), i += r.getUTCMonth() + 1 < 10 ? "0" : "", i += r.getUTCMonth() + 1 + "-", i += r.getUTCDate() < 10 ? "0" : "", i += r.getUTCDate()), i
}

function timestamp(e) {
    null != e && void 0 !== e || (e = !0);
    var t, n, r, i = new Date,
        o = "";
    return e ? (t = i.getHours(), n = i.getMinutes(), r = i.getSeconds()) : (t = i.getUTCHours(), n = i.getUTCMinutes(), r = i.getUTCSeconds()), o += (t < 10 ? "0" + t : t) + ":", o += (n < 10 ? "0" + n : n) + ":", o += r < 10 ? "0" + r : r
}

function hms_from_sec(e) {
    var t = "",
        n = e % 60,
        r = (e - n) / 60 % 60,
        i = (e - 60 * r - n) / 3600 % 3600;
    return t += (i < 10 ? "0" + i : i) + ":", t += (r < 10 ? "0" + r : r) + ":", t += n < 10 ? "0" + n : n
}

function dhms_from_sec(e) {
    var t, n, r, i, o = "",
        a = e;
    return t = Math.floor(a / 86400), a -= 86400 * t, n = Math.floor(a / 3600), a -= 3600 * n, r = Math.floor(a / 60), i = a - 60 * r, o += t > 0 ? t + ":" : "", o += (n < 10 ? "0" + n : n) + ":", o += (r < 10 ? "0" + r : r) + ":", o += i < 10 ? "0" + i : i
}

function time_delta_print(e) {
    var t = "",
        n = 0,
        r = 0,
        i = 0,
        o = 0,
        a = e;
    return a |= 0, n = Math.floor(a / 86400), a -= 86400 * n, r = Math.floor(a / 3600), a -= 3600 * r, i = Math.floor(a / 60), o = a - 60 * i, n >= 2 ? t = n + " days" : n >= 1 ? (t = n + " day, " + r + " hour", r > 1 && (t += "s")) : r >= 1 ? (t = r + " hour", r > 1 && (t += "s")) : t = i >= 1 ? i + " min" : o + " sec", t + " ago"
}

function numberWithCommas(e) {
    var t = e.toString().split(".");
    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
}

function delayClass(e, t, n) {
    window.setTimeout(function() {
        $(e).removeClass(t)
    }, n)
}

function deepCopy(e) {
    return $.extend(!0, {}, e)
}

function AssertException(e) {
    this.message = e
}

function assert(e, t) {
    if (!e) throw new AssertException(t)
}

function stopEvent(e) {
    try {
        e.preventDefault(), e.stopPropagation()
    } catch (e) {}
}

function NoBreak(e) {
    return e.replace(/ /g, "&nbsp;")
}

function HTMLEncode(e) {
    return $("<div/>").text(e).html()
}

function HTMLDecode(e) {
    return $("<div/>").html(e).text()
}

function clearingSpan() {
    return $("<span/>").addClass("clear").html("&nbsp;")
}

function clearingSpanHTML() {
    return '<span class="clear">&nbsp;</span>'
}

function uniqueID() {
    return "id" + lastUniqueID++
}

function randInt(e) {
    return Math.floor(Math.random() * e)
}

function randRange(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}

function randomString(e) {
    "number" != typeof e && (e = 10);
    var t = 0,
        n = "";
    for (t = 0; t < e; t++) n += alphabet[randInt(alphalen)];
    return n
}

function storageSupport() {
    try {
        return "localStorage" in window && null !== window.localStorage
    } catch (e) {
        return !1
    }
}

function wsSupport() {
    try {
        return !!window.WebSocket
    } catch (e) {
        return !1
    }
}

function locationOf(e, t, n, r, i) {
    null == n && (n = 0), null == r && (r = t.length - 1), "string" == typeof i && ("gt" == i ? i = function(e, t) {
        return e > t
    } : "lt" == i && (i = function(e, t) {
        return e < t
    }));
    var o = parseInt(n + (r - n) / 2);
    return t[o] == e ? {
        index: o,
        exact: !0
    } : r - n <= 1 ? {
        index: o + 1,
        exact: !1
    } : i(t[o], e) ? locationOf(e, t, o, r, i) : locationOf(e, t, n, o, i)
}

function has_worker() {
    return !!window.Worker
}

function pixel_ratio() {
    return window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1
}

function _(e, t) {
    return e
}

function PtInPolygon(e, t) {
    for (var n = 0, r = 0; r < t.length; r++)
        if (p1 = t[r], p2 = t[(r + 1) % t.length], p1[1] != p2[1] && !(e[1] < Math.min(p1[1], p2[1]) || e[1] >= Math.max(p1[1], p2[1]))) {
            (e[1] - p1[1]) * (p2[0] - p1[0]) / (p2[1] - p1[1]) + p1[0] > e[0] && n++
        }
    return n % 2 == 1
}

function chackRate() {
    var e = 0;
    for (timesList.length >= times && timesList.pop(), timesList.splice(0, 0, (new Date).getTime()), e = 0; e < timesList.length && !(timesList[e] + timeLimit < (new Date).getTime()); e++);
    return !(e >= times) || (console.log("@@@@@@按钮点击频率太快"), !1)
}

function Graph(e) {
    this.vertices = e, this.edges = 0, this.adj = [], this.edgeTo = [];
    for (var t = 0; t < this.vertices; t++);
    this.marked = {}, this.addEdge = function(e, t) {
        this.adj[e] || (this.adj[e] = []), this.adj[t] || (this.adj[t] = []), this.adj[e].push(t), this.adj[t].push(e), this.edges++
    }, this.bfs = function(e) {
        this.source = e;
        for (var t in this.marked) this.marked[t] = !1;
        var n = [];
        for (this.marked[e] = !0, n.push(e); n.length > 0;) {
            var r = n.shift();
            if (this.adj[r])
                for (var i = 0; i < this.adj[r].length; i++)
                    for (var o = this.adj[r], a = 0; a < o.length; a++) this.marked[o[a]] || (this.edgeTo[o[a]] = r, this.marked[o[a]] = !0, n.push(o[a]))
        }
    }, this.pathTo = function(e) {
        var t = this.source,
            n = 0,
            r = [];
        if (!this.edgeTo[e]) return 0;
        for (var i = e; i != t; i = this.edgeTo[i]) {
            if (!this.edgeTo[i]) return 0;
            if (r.push([this.edgeTo[i], i]), ++n > 100) break
        }
        return r
    }
}! function(e) {
    var t = function(e) {
        var t = e.backingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / t
    }(e);
    1 !== t && (! function(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
    }({
        fillRect: "all",
        clearRect: "all",
        strokeRect: "all",
        moveTo: "all",
        lineTo: "all",
        arc: [0, 1, 2],
        arcTo: "all",
        bezierCurveTo: "all",
        isPointinPath: "all",
        isPointinStroke: "all",
        quadraticCurveTo: "all",
        rect: "all",
        translate: "all",
        createRadialGradient: "all",
        createLinearGradient: "all"
    }, function(n, r) {
        e[r] = function(e) {
            return function() {
                var r, i, o = Array.prototype.slice.call(arguments);
                if ("all" === n) o = o.map(function(e) {
                    return e * t
                });
                else if (Array.isArray(n))
                    for (r = 0, i = n.length; r < i; r++) o[n[r]] *= t;
                return e.apply(this, o)
            }
        }(e[r])
    }), e.stroke = function(e) {
        return function() {
            this.lineWidth *= t, e.apply(this, arguments), this.lineWidth /= t
        }
    }(e.stroke), e.fillText = function(e) {
        return function() {
            var n = Array.prototype.slice.call(arguments);
            n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, n, r) {
                return n * t + r
            }), n.length >= 4 && t > 1 && (n[3] *= t), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, n, r) {
                return n / t + r
            })
        }
    }(e.fillText), e.strokeText = function(e) {
        return function() {
            var n = Array.prototype.slice.call(arguments);
            n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, n, r) {
                return n * t + r
            }), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function(e, n, r) {
                return n / t + r
            })
        }
    }(e.strokeText))
}(CanvasRenderingContext2D.prototype),
function(e) {
    e.getContext = function(e) {
        return function(t) {
            var n, r, i = e.call(this, t);
            return "2d" === t && (n = i.backingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1, (r = (window.devicePixelRatio || 1) / n) > 1 && "true" != $(this).attr("val") && !($(this).attr("class") || "").match("geetest_absolute") && ("" != this.style.height && Number(this.style.height.replace("px", "")) * r == this.height || (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= r, this.height *= r, $(this).attr("val", !0)))), i
        }
    }(e.getContext)
}(HTMLCanvasElement.prototype),
function(e, t) {
    function n(e) {
        var t = e.length,
            n = ne.type(e);
        return !ne.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e, n, r, i) {
        if (ne.acceptData(e)) {
            var o, a, s = ne.expando,
                l = e.nodeType,
                c = l ? ne.cache : e,
                u = l ? e[s] : e[s] && s;
            if (u && c[u] && (i || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[s] = G.pop() || ne.guid++ : s), c[u] || (c[u] = l ? {} : {
                toJSON: ne.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? c[u] = ne.extend(c[u], n) : c[u].data = ne.extend(c[u].data, n)), a = c[u], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ne.camelCase(n)] = r), "string" == typeof n ? null == (o = a[n]) && (o = a[ne.camelCase(n)]) : o = a, o
        }
    }

    function i(e, t, n) {
        if (ne.acceptData(e)) {
            var r, i, o = e.nodeType,
                s = o ? ne.cache : e,
                l = o ? e[ne.expando] : ne.expando;
            if (s[l]) {
                if (t && (r = n ? s[l] : s[l].data)) {
                    ne.isArray(t) ? t = t.concat(ne.map(t, ne.camelCase)) : t in r ? t = [t] : (t = ne.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !a(r) : !ne.isEmptyObject(r)) return
                }(n || (delete s[l].data, a(s[l]))) && (o ? ne.cleanData([e], !0) : ne.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function o(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(be, "-$1").toLowerCase();
            if ("string" == typeof(r = e.getAttribute(i))) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ve.test(r) ? ne.parseJSON(r) : r)
                } catch (e) {}
                ne.data(e, n, r)
            } else r = t
        }
        return r
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ne.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function s() {
        return !0
    }

    function l() {
        return !1
    }

    function c() {
        try {
            return U.activeElement
        } catch (e) {}
    }

    function u(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (ne.isFunction(t)) return ne.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ne.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ie.test(t)) return ne.filter(t, e, n);
            t = ne.filter(t, e)
        }
        return ne.grep(e, function(e) {
            return ne.inArray(e, t) >= 0 !== n
        })
    }

    function d(e) {
        var t = Fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        return ne.nodeName(e, "table") && ne.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== ne.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = Xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ne._data(n, "globalEval", !t || ne._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ne.hasData(e)) {
            var n, r, i, o = ne._data(e),
                a = ne._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ne.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ne.extend({}, a.data))
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ne.nodeName(i, n) ? a.push(i) : ne.merge(a, b(i, n));
        return n === t || n && ne.nodeName(e, n) ? ne.merge([e], a) : a
    }

    function y(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ht.length; i--;)
            if ((t = ht[i] + n) in e) return t;
        return r
    }

    function x(e, t) {
        return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
    }

    function w(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (o[a] = ne._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && x(r) && (o[a] = ne._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = x(r), (n && "none" !== n || !i) && ne._data(r, "olddisplay", i ? n : ne.css(r, "display"))));
        for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function $(e, t, n) {
        var r = st.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ne.css(e, n + pt[o], !0, i)), r ? ("content" === n && (a -= ne.css(e, "padding" + pt[o], !0, i)), "margin" !== n && (a -= ne.css(e, "border" + pt[o] + "Width", !0, i))) : (a += ne.css(e, "padding" + pt[o], !0, i), "padding" !== n && (a += ne.css(e, "border" + pt[o] + "Width", !0, i)));
        return a
    }

    function T(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.support.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = tt(e, t, o)) || null == i) && (i = e.style[t]), lt.test(i)) return i;
            r = a && (ne.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e) {
        var t = U,
            n = ut[e];
        return n || ("none" !== (n = C(e, t)) && n || (Ze = (Ze || ne("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), (t = (Ze[0].contentWindow || Ze[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = C(e, t), Ze.detach()), ut[e] = n), n
    }

    function C(e, t) {
        var n = ne(t.createElement(e)).appendTo(t.body),
            r = ne.css(n[0], "display");
        return n.remove(), r
    }

    function E(e, t, n, r) {
        var i;
        if (ne.isArray(t)) ne.each(t, function(t, i) {
            n || mt.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ne.type(t)) r(e, t);
        else
            for (i in t) E(e + "[" + i + "]", t[i], n, r)
    }

    function A(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ie) || [];
            if (ne.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function N(e, n, r, i) {
        function o(l) {
            var c;
            return a[l] = !0, ne.each(e[l] || [], function(e, l) {
                var u = l(n, r, i);
                return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1)
            }), c
        }
        var a = {},
            s = e === Dt;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function P(e, n) {
        var r, i, o = ne.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ne.extend(!0, e, r), e
    }

    function O() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function D() {
        return setTimeout(function() {
            jt = t
        }), jt = ne.now()
    }

    function I(e, t, n) {
        for (var r, i = (Wt[t] || []).concat(Wt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function M(e, t, n) {
        var r, i, o = 0,
            a = zt.length,
            s = ne.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = jt || D(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; a > o; o++) c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && a ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ne.extend({}, t),
                opts: ne.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: jt || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ne.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = ne.camelCase(n), i = t[r], o = e[n], ne.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ne.cssHooks[r]) && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }(u, c.opts.specialEasing); a > o; o++)
            if (r = zt[o].call(c, e, u, c.opts)) return r;
        return ne.map(u, I, c), ne.isFunction(c.opts.start) && c.opts.start.call(e, c), ne.fx.timer(ne.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function L(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = pt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e) {
        return ne.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var B, R, j = typeof t,
        q = e.location,
        U = e.document,
        H = U.documentElement,
        V = e.jQuery,
        z = e.$,
        W = {},
        G = [],
        Y = "1.10.2",
        X = G.concat,
        K = G.push,
        Q = G.slice,
        J = G.indexOf,
        Z = W.toString,
        ee = W.hasOwnProperty,
        te = Y.trim,
        ne = function(e, t) {
            return new ne.fn.init(e, t, R)
        },
        re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = /\S+/g,
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        le = /^[\],:{}\s]*$/,
        ce = /(?:^|:|,)(?:\s*\[)+/g,
        ue = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        fe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        de = /^-ms-/,
        pe = /-([\da-z])/gi,
        he = function(e) {
            (U.addEventListener || "load" === e.type || "complete" === U.readyState) && (ge(), ne.ready())
        },
        ge = function() {
            U.addEventListener ? (U.removeEventListener("DOMContentLoaded", he, !1), e.removeEventListener("load", he, !1)) : (U.detachEvent("onreadystatechange", he), e.detachEvent("onload", he))
        };
    ne.fn = ne.prototype = {
            jquery: Y,
            constructor: ne,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ae.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ne ? n[0] : n, ne.merge(this, ne.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : U, !0)), se.test(i[1]) && ne.isPlainObject(n))
                            for (i in n) ne.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if ((o = U.getElementById(i[2])) && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = U, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ne.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ne.each(this, e, t)
            },
            ready: function(e) {
                return ne.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ne.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: [].sort,
            splice: [].splice
        }, ne.fn.init.prototype = ne.fn, ne.extend = ne.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ne.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
                if (null != (o = arguments[l]))
                    for (i in o) e = s[i], r = o[i], s !== r && (u && r && (ne.isPlainObject(r) || (n = ne.isArray(r))) ? (n ? (n = !1, a = e && ne.isArray(e) ? e : []) : a = e && ne.isPlainObject(e) ? e : {}, s[i] = ne.extend(u, a, r)) : r !== t && (s[i] = r));
            return s
        }, ne.extend({
            expando: "jQuery" + (Y + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === ne && (e.$ = z), t && e.jQuery === ne && (e.jQuery = V), ne
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ne.readyWait++ : ne.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--ne.readyWait : !ne.isReady) {
                    if (!U.body) return setTimeout(ne.ready);
                    ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (B.resolveWith(U, [ne]), ne.fn.trigger && ne(U).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ne.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ne.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[Z.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ee.call(e, "constructor") && !ee.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (ne.support.ownLast)
                    for (n in e) return ee.call(e, n);
                for (n in e);
                return n === t || ee.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || U;
                var r = se.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ne.buildFragment([e], t, i), i && ne(i).remove(), ne.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ne.trim(n)) && le.test(n.replace(ue, "@").replace(fe, "]").replace(ce, "")) ? Function("return " + n)() : (ne.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (e) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ne.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(de, "ms-").replace(pe, function(e, t) {
                    return t.toUpperCase()
                })
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i = 0,
                    o = e.length,
                    a = n(e);
                if (r) {
                    if (a)
                        for (; o > i && !1 !== t.apply(e[i], r); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], r)) break
                } else if (a)
                    for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: te && !te.call("\ufeff ") ? function(e) {
                return null == e ? "" : te.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(oe, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ne.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (J) return J.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = [];
                if (n(e))
                    for (; a > o; o++) null != (i = t(e[o], o, r)) && (s[s.length] = i);
                else
                    for (o in e) null != (i = t(e[o], o, r)) && (s[s.length] = i);
                return X.apply([], s)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o), ne.isFunction(e) ? (r = Q.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(Q.call(arguments)))
                }, i.guid = e.guid = e.guid || ne.guid++, i) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var l = 0,
                    c = e.length,
                    u = null == r;
                if ("object" === ne.type(r)) {
                    o = !0;
                    for (l in r) ne.access(e, n, l, r[l], !0, a, s)
                } else if (i !== t && (o = !0, ne.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) {
                        return u.call(ne(e), n)
                    })), n))
                    for (; c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : u ? n.call(e) : c ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            }
        }), ne.ready.promise = function(t) {
            if (!B)
                if (B = ne.Deferred(), "complete" === U.readyState) setTimeout(ne.ready);
                else if (U.addEventListener) U.addEventListener("DOMContentLoaded", he, !1), e.addEventListener("load", he, !1);
            else {
                U.attachEvent("onreadystatechange", he), e.attachEvent("onload", he);
                var n = !1;
                try {
                    n = null == e.frameElement && U.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!ne.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        ge(), ne.ready()
                    }
                }()
            }
            return B.promise(t)
        }, ne.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            W["[object " + t + "]"] = t.toLowerCase()
        }), R = ne(U),
        function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, l, c, d, p, h, g;
                if ((t ? t.ownerDocument || t : F) !== N && A(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (O && !r) {
                    if (i = me.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (x.qsa && (!D || !D.test(e))) {
                        if (p = d = L, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = u(e), (d = t.getAttribute("id")) ? p = d.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                            h = ue.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try {
                            return Q.apply(n, h.querySelectorAll(g)), n
                        } catch (e) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(se, "$1"), t, n, r)
            }

            function r() {
                function e(n, r) {
                    return t.push(n += " ") > $.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[L] = !0, e
            }

            function o(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) $.attrHandle[n[r]] = t
            }

            function s(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c() {}

            function u(e, t) {
                var r, i, o, a, s, l, c, u = q[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = $.preFilter; s;) {
                    (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(r.length));
                    for (a in $.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return t ? s.length : s ? n.error(e) : q(e, l).slice(0)
            }

            function f(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = R++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c, u = B + " " + o;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (c = t[L] || (t[L] = {}), (l = c[r]) && l[0] === u) {
                                    if (!0 === (s = l[1]) || s === w) return !0 === s
                                } else if (l = c[r] = [u], l[1] = e(t, n, a) || w, !0 === l[1]) return !0
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, t, n, r, i) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
                return a
            }

            function g(e, t, r, o, a, s) {
                return o && !o[L] && (o = g(o)), a && !a[L] && (a = g(a, s)), i(function(i, s, l, c) {
                    var u, f, d, p = [],
                        g = [],
                        m = s.length,
                        v = i || function(e, t, r) {
                            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                            return r
                        }(t || "*", l.nodeType ? [l] : l, []),
                        b = !e || !i && t ? v : h(v, p, e, l, c),
                        y = r ? a || (i ? e : m || o) ? [] : s : b;
                    if (r && r(b, y, l, c), o)
                        for (u = h(y, g), o(u, [], l, c), f = u.length; f--;)(d = u[f]) && (y[g[f]] = !(b[g[f]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (u = [], f = y.length; f--;)(d = y[f]) && u.push(b[f] = d);
                                a(null, y = [], u, c)
                            }
                            for (f = y.length; f--;)(d = y[f]) && (u = a ? Z.call(i, d) : p[f]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else y = h(y === s ? y.splice(m, y.length) : y), a ? a(null, s, y, c) : Q.apply(s, y)
                })
            }

            function m(e) {
                for (var t, n, r, i = e.length, o = $.relative[e[0].type], a = o || $.relative[" "], s = o ? 1 : 0, l = d(function(e) {
                        return e === t
                    }, a, !0), c = d(function(e) {
                        return Z.call(t, e) > -1
                    }, a, !0), u = [function(e, n, r) {
                        return !o && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }]; i > s; s++)
                    if (n = $.relative[e[s].type]) u = [d(p(u), n)];
                    else {
                        if ((n = $.filter[e[s].type].apply(null, e[s].matches))[L]) {
                            for (r = ++s; i > r && !$.relative[e[r].type]; r++);
                            return g(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, r > s && m(e.slice(s, r)), i > r && m(e = e.slice(r)), i > r && f(e))
                        }
                        u.push(n)
                    }
                return p(u)
            }

            function v(e, t) {
                var r = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function(i, s, l, c, u) {
                        var f, d, p, g = [],
                            m = 0,
                            v = "0",
                            b = i && [],
                            y = null != u,
                            x = C,
                            k = i || a && $.find.TAG("*", u && s.parentNode || s),
                            T = B += null == x ? 1 : Math.random() || .1;
                        for (y && (C = s !== N && s, w = r); null != (f = k[v]); v++) {
                            if (a && f) {
                                for (d = 0; p = e[d++];)
                                    if (p(f, s, l)) {
                                        c.push(f);
                                        break
                                    }
                                y && (B = T, w = ++r)
                            }
                            o && ((f = !p && f) && m--, i && b.push(f))
                        }
                        if (m += v, o && v !== m) {
                            for (d = 0; p = t[d++];) p(b, g, s, l);
                            if (i) {
                                if (m > 0)
                                    for (; v--;) b[v] || g[v] || (g[v] = X.call(c));
                                g = h(g)
                            }
                            Q.apply(c, g), y && !i && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                        }
                        return y && (B = T, C = x), b
                    };
                return o ? i(s) : s
            }

            function b(e, t, n, r) {
                var i, o, a, s, l, c = u(e);
                if (!r && 1 === c.length) {
                    if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && O && $.relative[o[1].type]) {
                        if (!(t = ($.find.ID(a.matches[0].replace(xe, we), t) || [])[0])) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !$.relative[s = a.type]);)
                        if ((l = $.find[s]) && (r = l(a.matches[0].replace(xe, we), ue.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                            break
                        }
                }
                return S(e, c)(r, t, !O, n, ue.test(e)), n
            }
            var y, x, w, $, k, T, S, C, E, A, N, P, O, D, I, M, _, L = "sizzle" + -new Date,
                F = e.document,
                B = 0,
                R = 0,
                j = r(),
                q = r(),
                U = r(),
                H = !1,
                V = function(e, t) {
                    return e === t ? (H = !0, 0) : 0
                },
                z = typeof t,
                W = 1 << 31,
                G = {}.hasOwnProperty,
                Y = [],
                X = Y.pop,
                K = Y.push,
                Q = Y.push,
                J = Y.slice,
                Z = Y.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                te = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = re.replace("w", "w#"),
                oe = "\\[" + te + "*(" + re + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                se = RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                le = RegExp("^" + te + "*," + te + "*"),
                ce = RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                ue = RegExp(te + "*[+~]"),
                fe = RegExp("=" + te + "*([^\\]'\"]*)" + te + "*\\]", "g"),
                de = RegExp(ae),
                pe = RegExp("^" + ie + "$"),
                he = {
                    ID: RegExp("^#(" + re + ")"),
                    CLASS: RegExp("^\\.(" + re + ")"),
                    TAG: RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + oe),
                    PSEUDO: RegExp("^" + ae),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ee + ")$", "i"),
                    needsContext: RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /^(?:input|select|textarea|button)$/i,
                be = /^h\d$/i,
                ye = /'|\\/g,
                xe = RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                we = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                Q.apply(Y = J.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
            } catch (e) {
                Q = {
                    apply: Y.length ? function(e, t) {
                        K.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            T = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = n.support = {}, A = n.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : F,
                    r = n.defaultView;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, P = n.documentElement, O = !T(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                    A()
                }), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), x.getById = o(function(e) {
                    return P.appendChild(e).id = L, !n.getElementsByName || !n.getElementsByName(L).length
                }), x.getById ? ($.find.ID = function(e, t) {
                    if (typeof t.getElementById !== z && O) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, $.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete $.find.ID, $.filter.ID = function(e) {
                    var t = e.replace(xe, we);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== z && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), $.find.TAG = x.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== z ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, $.find.CLASS = x.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== z && O ? n.getElementsByClassName(e) : t
                }, I = [], D = [], (x.qsa = ge.test(n.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || D.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || D.push(":checked")
                }), o(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && D.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                })), (x.matchesSelector = ge.test(M = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), I.push("!=", ae)
                }), D = D.length && RegExp(D.join("|")), I = I.length && RegExp(I.join("|")), _ = ge.test(P.contains) || P.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = P.compareDocumentPosition ? function(e, t) {
                    if (e === t) return H = !0, 0;
                    var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return r ? 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || _(F, e) ? -1 : t === n || _(F, t) ? 1 : E ? Z.call(E, e) - Z.call(E, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return H = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : E ? Z.call(E, e) - Z.call(E, t) : 0;
                    if (o === a) return s(e, t);
                    for (r = e; r = r.parentNode;) l.unshift(r);
                    for (r = t; r = r.parentNode;) c.unshift(r);
                    for (; l[i] === c[i];) i++;
                    return i ? s(l[i], c[i]) : l[i] === F ? -1 : c[i] === F ? 1 : 0
                }, n) : N
            }, n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== N && A(e), t = t.replace(fe, "='$1']"), !(!x.matchesSelector || !O || I && I.test(t) || D && D.test(t))) try {
                    var r = M.call(e, t);
                    if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return n(t, N, null, [e]).length > 0
            }, n.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && A(e), _(e, t)
            }, n.attr = function(e, n) {
                (e.ownerDocument || e) !== N && A(e);
                var r = $.attrHandle[n.toLowerCase()],
                    i = r && G.call($.attrHandle, n.toLowerCase()) ? r(e, n, !O) : t;
                return i === t ? x.attributes || !O ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (H = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(V), H) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, k = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += k(t);
                return n
            }, ($ = n.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && de.test(r) && (n = u(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = j[e + " "];
                        return t || (t = RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && j(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                    for (p = (c = (u = m[L] || (m[L] = {}))[e] || [])[0] === B && c[1], d = c[0] === B && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            u[e] = [B, p, d];
                                            break
                                        }
                                } else if (b && (c = (t[L] || (t[L] = {}))[e]) && c[0] === B) d = c[1];
                                else
                                    for (;
                                        (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (b && ((f[L] || (f[L] = {}))[e] = [B, d]), f !== t)););
                                return (d -= i) === r || 0 == d % r && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, o = $.pseudos[e] || $.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return o[L] ? o(t) : o.length > 1 ? (r = [e, e, "", t], $.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--;) r = Z.call(e, i[a]), e[r] = !(n[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(se, "$1"));
                        return r[L] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !$.pseudos.empty(e)
                    },
                    header: function(e) {
                        return be.test(e.nodeName)
                    },
                    input: function(e) {
                        return ve.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = $.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) $.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) $.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
            c.prototype = $.filters = $.pseudos, $.setFilters = new c, S = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = U[e + " "];
                if (!o) {
                    for (t || (t = u(e)), n = t.length; n--;)(o = m(t[n]))[L] ? r.push(o) : i.push(o);
                    o = U(e, v(i, r))
                }
                return o
            }, x.sortStable = L.split("").sort(V).join("") === L, x.detectDuplicates = H, A(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(ee, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : !0 === e[n] ? n.toLowerCase() : null
            }), ne.find = n, ne.expr = n.selectors, ne.expr[":"] = ne.expr.pseudos, ne.unique = n.uniqueSort, ne.text = n.getText, ne.isXMLDoc = n.isXML, ne.contains = n.contains
        }(e);
    var me = {};
    ne.Callbacks = function(e) {
        var n, r, i, o, a, s, l = [],
            c = !(e = "string" == typeof e ? me[e] || function(e) {
                var t = me[e] = {};
                return ne.each(e.match(ie) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : ne.extend({}, e)).once && [],
            u = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (!1 === l[a].apply(t[0], t[1]) && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (c ? c.length && u(c.shift()) : r ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function t(n) {
                            ne.each(n, function(n, r) {
                                var i = ne.type(r);
                                "function" === i ? e.unique && f.has(r) || l.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, u(r))
                    }
                    return this
                },
                remove: function() {
                    return l && ne.each(arguments, function(e, t) {
                        for (var r;
                            (r = ne.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ne.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, r || f.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || i && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    }, ne.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ne.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ne.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ne.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ne.Deferred(function(n) {
                            ne.each(t, function(t, o) {
                                var a = o[0],
                                    s = ne.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ne.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ne.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ne.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Q.call(arguments),
                a = o.length,
                s = 1 !== a || e && ne.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ne.Deferred(),
                c = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ne.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ne.support = function(t) {
        var n, r, i, o, a, s, l, c, u, f = U.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], !(r = f.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
        s = (o = U.createElement("select")).appendChild(U.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!U.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== U.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (e) {
            t.deleteExpando = !1
        }(i = U.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (a = U.createDocumentFragment()).appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === f.attributes[l].expando;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (u in ne(t)) break;
        return t.ownLast = "0" !== u, ne(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = U.getElementsByTagName("body")[0];
            a && (n = U.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ne.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(U.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== j && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var ve = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        be = /([A-Z])/g;
    ne.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? ne.cache[e[ne.expando]] : e[ne.expando]) && !a(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return i(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return i(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ne.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), ne.fn.extend({
        data: function(e, n) {
            var r, i, a = null,
                s = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (a = ne.data(l), 1 === l.nodeType && !ne._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; r.length > s; s++) 0 === (i = r[s].name).indexOf("data-") && (i = ne.camelCase(i.slice(5)), o(l, i, a[i]));
                    ne._data(l, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                ne.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ne.data(this, e, n)
            }) : l ? o(l, e, ne.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ne.removeData(this, e)
            })
        }
    }), ne.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ne._data(e, n), r && (!i || ne.isArray(r) ? i = ne._data(e, n, ne.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ne.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ne._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                ne.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ne._data(e, n) || ne._data(e, n, {
                empty: ne.Callbacks("once memory").add(function() {
                    ne._removeData(e, t + "queue"), ne._removeData(e, n)
                })
            })
        }
    }), ne.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ne.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ne.queue(this, e, n);
                ne._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ne.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ne.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ne.fx ? ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = ne.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = ne._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var ye, xe, we = /[\t\r\n\f]/g,
        $e = /\r/g,
        ke = /^(?:input|select|textarea|button|object)$/i,
        Te = /^(?:a|area)$/i,
        Se = /^(?:checked|selected)$/i,
        Ce = ne.support.getSetAttribute,
        Ee = ne.support.input;
    ne.fn.extend({
        attr: function(e, t) {
            return ne.access(this, ne.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ne.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ne.access(this, ne.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ne.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (ne.isFunction(e)) return this.each(function(t) {
                ne(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ie) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(we, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ne.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ne.isFunction(e)) return this.each(function(t) {
                ne(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(ie) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(we, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ne.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function(n) {
                ne(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ne(this), o = e.match(ie) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === j || "boolean" === n) && (this.className && ne._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ne._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(we, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ne.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, ne(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : ne.isArray(o) && (o = ne.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (r = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ne.valHooks[o.type] || ne.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof(n = o.value) ? n.replace($e, "") : null == n ? "" : n : void 0
        }
    }), ne.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ne.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (!(!(n = r[l]).selected && l !== i || (ne.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ne.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ne(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ne.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ne.inArray(ne(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === j ? ne.prop(e, n, r) : (1 === a && ne.isXMLDoc(e) || (n = n.toLowerCase(), i = ne.attrHooks[n] || (ne.expr.match.bool.test(n) ? xe : ye)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : null == (o = ne.find.attr(e, n)) ? t : o : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ne.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(ie);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ne.propFix[n] || n, ne.expr.match.bool.test(n) ? Ee && Ce || !Se.test(n) ? e[r] = !1 : e[ne.camelCase("default-" + n)] = e[r] = !1 : ne.attr(e, n, ""), e.removeAttribute(Ce ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.support.radioValue && "radio" === t && ne.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !ne.isXMLDoc(e)) && (n = ne.propFix[n] || n, o = ne.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ne.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ke.test(e.nodeName) || Te.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), xe = {
        set: function(e, t, n) {
            return !1 === t ? ne.removeAttr(e, n) : Ee && Ce || !Se.test(n) ? e.setAttribute(!Ce && ne.propFix[n] || n, n) : e[ne.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ne.expr.attrHandle[n] || ne.find.attr;
        ne.expr.attrHandle[n] = Ee && Ce || !Se.test(n) ? function(e, n, i) {
            var o = ne.expr.attrHandle[n],
                a = i ? t : (ne.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ne.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[ne.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Ee && Ce || (ne.attrHooks.value = {
        set: function(e, n, r) {
            return ne.nodeName(e, "input") ? (e.defaultValue = n, t) : ye && ye.set(e, n, r)
        }
    }), Ce || (ye = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ne.expr.attrHandle.id = ne.expr.attrHandle.name = ne.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ne.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: ye.set
    }, ne.attrHooks.contenteditable = {
        set: function(e, t, n) {
            ye.set(e, "" !== t && t, n)
        }
    }, ne.each(["width", "height"], function(e, n) {
        ne.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), ne.support.hrefNormalized || ne.each(["href", "src"], function(e, t) {
        ne.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.support.style || (ne.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), ne.support.optSelected || (ne.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ne.propFix[this.toLowerCase()] = this
    }), ne.support.enctype || (ne.propFix.enctype = "encoding"), ne.each(["radio", "checkbox"], function() {
        ne.valHooks[this] = {
            set: function(e, n) {
                return ne.isArray(n) ? e.checked = ne.inArray(ne(e).val(), n) >= 0 : t
            }
        }, ne.support.checkOn || (ne.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ae = /^(?:input|select|textarea)$/i,
        Ne = /^key/,
        Pe = /^(?:mouse|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    ne.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, l, c, u, f, d, p, h, g, m, v = ne._data(e);
            if (v) {
                for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = ne.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                        return typeof ne === j || e && ne.event.triggered === e.type ? t : ne.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = e), l = (n = (n || "").match(ie) || [""]).length; l--;) a = De.exec(n[l]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), h && (u = ne.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = ne.event.special[h] || {}, d = ne.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ne.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, c), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, g, f) || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ne.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, f, d, p, h, g, m = ne.hasData(e) && ne._data(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(ie) || [""]).length; c--;)
                    if (s = De.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = ne.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || ne.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) ne.event.remove(e, p + t[c], n, r, !0);
                ne.isEmptyObject(u) && (delete m.handle, ne._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, l, c, u, f, d, p = [i || U],
                h = ee.call(n, "type") ? n.type : n,
                g = ee.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || U, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(h + ne.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ne.expando] ? n : new ne.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ne.makeArray(r, [n]), u = ne.event.special[h] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, r))) {
                if (!o && !u.noBubble && !ne.isWindow(i)) {
                    for (c = u.delegateType || h, Oe.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), f = l;
                    f === (i.ownerDocument || U) && p.push(f.defaultView || f.parentWindow || e)
                }
                for (d = 0;
                    (l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : u.bindType || h, (a = (ne._data(l, "events") || {})[n.type] && ne._data(l, "handle")) && a.apply(l, r), (a = s && l[s]) && ne.acceptData(l) && a.apply && !1 === a.apply(l, r) && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), r)) && ne.acceptData(i) && s && i[h] && !ne.isWindow(i)) {
                    (f = i[s]) && (i[s] = null), ne.event.triggered = h;
                    try {
                        i[h]()
                    } catch (e) {}
                    ne.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ne.event.fix(e);
            var n, r, i, o, a, s = [],
                l = Q.call(arguments),
                c = (ne._data(this, "events") || {})[e.type] || [],
                u = ne.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = ne.event.handlers.call(this, e, c), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, (r = ((ne.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ne(r, this).index(c) >= 0 : ne.find(r, this, null, [c]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[ne.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Pe.test(i) ? this.mouseHooks : Ne.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ne.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || U), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || U, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ne.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return ne.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ne.extend(new ne.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ne.event.trigger(i, null, t) : ne.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ne.removeEvent = U.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, ne.Event = function(e, n) {
        return this instanceof ne.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? s : l) : this.type = e, n && ne.extend(this, n), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0, t) : new ne.Event(e, n)
    }, ne.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, ne.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ne.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return (!r || r !== this && !ne.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.support.submitBubbles || (ne.event.special.submit = {
        setup: function() {
            return !ne.nodeName(this, "form") && (ne.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = ne.nodeName(n, "input") || ne.nodeName(n, "button") ? n.form : t;
                r && !ne._data(r, "submitBubbles") && (ne.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ne._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ne.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !ne.nodeName(this, "form") && (ne.event.remove(this, "._submit"), t)
        }
    }), ne.support.changeBubbles || (ne.event.special.change = {
        setup: function() {
            return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ne.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ne.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ne.event.simulate("change", this, e, !0)
            })), !1) : (ne.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ae.test(t.nodeName) && !ne._data(t, "changeBubbles") && (ne.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ne.event.simulate("change", this.parentNode, e, !0)
                }), ne._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ne.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
    }), ne.support.focusinBubbles || ne.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                ne.event.simulate(t, e.target, ne.event.fix(e), !0)
            };
        ne.event.special[t] = {
            setup: function() {
                0 == n++ && U.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 == --n && U.removeEventListener(e, r, !0)
            }
        }
    }), ne.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ne().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ne.guid++)), this.each(function() {
                ne.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ne(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = l), this.each(function() {
                ne.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ne.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ne.event.trigger(e, n, r, !0) : t
        }
    });
    var Ie = /^.[^:#\[\.,]*$/,
        Me = /^(?:parents|prev(?:Until|All))/,
        _e = ne.expr.match.needsContext,
        Le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ne.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ne(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ne.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ne.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ne.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = ne(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ne.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function(e) {
            return !!f(this, "string" == typeof e && _e.test(e) ? ne(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = _e.test(e) || "string" != typeof e ? ne(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ne.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ne.inArray(this[0], ne(e)) : ne.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ne(e, t) : ne.makeArray(e && e.nodeType ? [e] : e),
                r = ne.merge(this.get(), n);
            return this.pushStack(ne.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ne.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ne.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ne.dir(e, "parentNode", n)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return ne.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ne.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ne.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ne.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ne.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ne.sibling(e.firstChild)
        },
        contents: function(e) {
            return ne.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ne.merge([], e.childNodes)
        }
    }, function(e, t) {
        ne.fn[e] = function(n, r) {
            var i = ne.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ne.filter(r, i)), this.length > 1 && (Le[e] || (i = ne.unique(i)), Me.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ne.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ne.find.matchesSelector(r, e) ? [r] : [] : ne.find.matches(e, ne.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ne(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Be = / jQuery\d+="(?:null|\d+)"/g,
        Re = RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        je = /^\s+/,
        qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ue = /<([\w:]+)/,
        He = /<tbody/i,
        Ve = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        We = /^(?:checkbox|radio)$/i,
        Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ye = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Je = d(U).appendChild(U.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, ne.fn.extend({
        text: function(e) {
            return ne.access(this, function(e) {
                return e === t ? ne.text(this) : this.empty().append((this[0] && this[0].ownerDocument || U).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    p(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ne.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ne.cleanData(b(n)), n.parentNode && (t && ne.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ne.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ne.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ne.clone(this, e, t)
            })
        },
        html: function(e) {
            return ne.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Be, "") : t;
                if (!("string" != typeof e || ze.test(e) || !ne.support.htmlSerialize && Re.test(e) || !ne.support.leadingWhitespace && je.test(e) || Qe[(Ue.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(qe, "<$1></$2>");
                    try {
                        for (; i > r; r++) 1 === (n = this[r] || {}).nodeType && (ne.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (e) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ne.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ne(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = X.apply([], e);
            var r, i, o, a, s, l, c = 0,
                u = this.length,
                f = this,
                d = u - 1,
                p = e[0],
                m = ne.isFunction(p);
            if (m || !(1 >= u || "string" != typeof p || ne.support.checkClone) && Ge.test(p)) return this.each(function(r) {
                var i = f.eq(r);
                m && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (u && (l = ne.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (o = (a = ne.map(b(l, "script"), h)).length; u > c; c++) i = l, c !== d && (i = ne.clone(i, !0, !0), o && ne.merge(a, b(i, "script"))), t.call(this[c], i, c);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ne.map(a, g), c = 0; o > c; c++) i = a[c], Ye.test(i.type || "") && !ne._data(i, "globalEval") && ne.contains(s, i) && (i.src ? ne._evalUrl(i.src) : ne.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
                l = r = null
            }
            return this
        }
    }), ne.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ne.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ne(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ne(o[r])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ne.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ne.contains(e.ownerDocument, e);
            if (ne.support.html5Clone || ne.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.support.noCloneEvent && ne.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e)))
                for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && function(e, t) {
                    var n, r, i;
                    if (1 === t.nodeType) {
                        if (n = t.nodeName.toLowerCase(), !ne.support.noCloneEvent && t[ne.expando]) {
                            i = ne._data(t);
                            for (r in i.events) ne.removeEvent(t, r, i.handle);
                            t.removeAttribute(ne.expando)
                        }
                        "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.support.html5Clone && e.innerHTML && !ne.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && We.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                    }
                }(i, r[a]);
            if (t)
                if (n)
                    for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
                else v(e, o);
            return (r = b(o, "script")).length > 0 && m(r, !l && b(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, f = e.length, p = d(t), h = [], g = 0; f > g; g++)
                if ((o = e[g]) || 0 === o)
                    if ("object" === ne.type(o)) ne.merge(h, o.nodeType ? [o] : o);
                    else if (Ve.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Ue.exec(o) || ["", ""])[1].toLowerCase(), u = Qe[l] || Qe._default, s.innerHTML = u[1] + o.replace(qe, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!ne.support.leadingWhitespace && je.test(o) && h.push(t.createTextNode(je.exec(o)[0])), !ne.support.tbody)
                    for (i = (o = "table" !== l || He.test(o) ? "<table>" !== u[1] || He.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) ne.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ne.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), ne.support.appendChecked || ne.grep(b(h, "input"), function(e) {
                    We.test(e.type) && (e.defaultChecked = e.checked)
                }), g = 0; o = h[g++];)
                if ((!r || -1 === ne.inArray(o, r)) && (a = ne.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), a && m(s), n))
                    for (i = 0; o = s[i++];) Ye.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ne.expando, l = ne.cache, c = ne.support.deleteExpando, u = ne.event.special; null != (n = e[a]); a++)
                if ((t || ne.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? ne.event.remove(n, r) : ne.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== j ? n.removeAttribute(s) : n[s] = null, G.push(i))
                }
        },
        _evalUrl: function(e) {
            return ne.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), ne.fn.extend({
        wrapAll: function(e) {
            if (ne.isFunction(e)) return this.each(function(t) {
                ne(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ne(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ne.isFunction(e) ? this.each(function(t) {
                ne(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ne(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ne.isFunction(e);
            return this.each(function(n) {
                ne(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Ze, et, tt, nt = /alpha\([^)]*\)/i,
        rt = /opacity\s*=\s*([^)]*)/,
        it = /^(top|right|bottom|left)$/,
        ot = /^(none|table(?!-c[ea]).+)/,
        at = /^margin/,
        st = RegExp("^(" + re + ")(.*)$", "i"),
        lt = RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        ct = RegExp("^([+-])=(" + re + ")", "i"),
        ut = {
            BODY: "block"
        },
        ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pt = ["Top", "Right", "Bottom", "Left"],
        ht = ["Webkit", "O", "Moz", "ms"];
    ne.fn.extend({
        css: function(e, n) {
            return ne.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (ne.isArray(n)) {
                    for (o = et(e), i = n.length; i > s; s++) a[n[s]] = ne.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ne.style(e, n, r) : ne.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                x(this) ? ne(this).show() : ne(this).hide()
            })
        }
    }), ne.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ne.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ne.camelCase(n),
                    c = e.style;
                if (n = ne.cssProps[l] || (ne.cssProps[l] = y(c, l)), s = ne.cssHooks[n] || ne.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if ("string" === (a = typeof r) && (o = ct.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ne.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ne.cssNumber[l] || (r += "px"), ne.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    c[n] = r
                } catch (e) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = ne.camelCase(n);
            return n = ne.cssProps[l] || (ne.cssProps[l] = y(e.style, l)), (s = ne.cssHooks[n] || ne.cssHooks[l]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = tt(e, n, i)), "normal" === a && n in dt && (a = dt[n]), "" === r || r ? (o = parseFloat(a), !0 === r || ne.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (et = function(t) {
        return e.getComputedStyle(t, null)
    }, tt = function(e, n, r) {
        var i, o, a, s = r || et(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            c = e.style;
        return s && ("" !== l || ne.contains(e.ownerDocument, e) || (l = ne.style(e, n)), lt.test(l) && at.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), l
    }) : U.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, n, r) {
        var i, o, a, s = r || et(e),
            l = s ? s[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), lt.test(l) && !it.test(n) && (i = c.left, o = e.runtimeStyle, (a = o && o.left) && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ne.each(["height", "width"], function(e, n) {
        ne.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && ot.test(ne.css(e, "display")) ? ne.swap(e, ft, function() {
                    return T(e, n, i)
                }) : T(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && et(e);
                return $(0, t, r ? k(e, n, r, ne.support.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.support.opacity || (ne.cssHooks.opacity = {
        get: function(e, t) {
            return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ne.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ne.trim(o.replace(nt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = nt.test(o) ? o.replace(nt, i) : o + " " + i)
        }
    }), ne(function() {
        ne.support.reliableMarginRight || (ne.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ne.swap(e, {
                    display: "inline-block"
                }, tt, [e, "marginRight"]) : t
            }
        }), !ne.support.pixelPosition && ne.fn.position && ne.each(["top", "left"], function(e, n) {
            ne.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = tt(e, n), lt.test(r) ? ne(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ne.expr && ne.expr.filters && (ne.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ne.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ne.css(e, "display"))
    }, ne.expr.filters.visible = function(e) {
        return !ne.expr.filters.hidden(e)
    }), ne.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ne.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + pt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, at.test(e) || (ne.cssHooks[e + t].set = $)
    });
    var gt = /%20/g,
        mt = /\[\]$/,
        vt = /\r?\n/g,
        bt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;
    ne.fn.extend({
        serialize: function() {
            return ne.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ne.prop(this, "elements");
                return e ? ne.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ne(this).is(":disabled") && yt.test(this.nodeName) && !bt.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var n = ne(this).val();
                return null == n ? null : ne.isArray(n) ? ne.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(vt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(vt, "\r\n")
                }
            }).get()
        }
    }), ne.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = ne.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) E(r, e[r], n, o);
        return i.join("&").replace(gt, "+")
    }, ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ne.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ne.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xt, wt, $t = ne.now(),
        kt = /\?/,
        Tt = /#.*$/,
        St = /([?&])_=[^&]*/,
        Ct = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Et = /^(?:GET|HEAD)$/,
        At = /^\/\//,
        Nt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pt = ne.fn.load,
        Ot = {},
        Dt = {},
        It = "*/".concat("*");
    try {
        wt = q.href
    } catch (e) {
        (wt = U.createElement("a")).href = "", wt = wt.href
    }
    xt = Nt.exec(wt.toLowerCase()) || [], ne.fn.load = function(e, n, r) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ne.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ne.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ne("<div>").append(ne.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ne.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ne.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ne.parseJSON,
                "text xml": ne.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? P(P(e, ne.ajaxSettings), t) : P(ne.ajaxSettings, e)
        },
        ajaxPrefilter: A(Ot),
        ajaxTransport: A(Dt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, b, y, w, k = n;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, s = i || "", $.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (y = function(e, n, r) {
                    for (var i, o, a, s, l = e.contents, c = e.dataTypes;
                        "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in l)
                            if (l[s] && l[s].test(o)) {
                                c.unshift(s);
                                break
                            }
                    if (c[0] in r) a = c[0];
                    else {
                        for (s in r) {
                            if (!c[0] || e.converters[s + " " + c[0]]) {
                                a = s;
                                break
                            }
                            i || (i = s)
                        }
                        a = a || i
                    }
                    return a ? (a !== c[0] && c.unshift(a), r[a]) : t
                }(d, $, r)), y = function(e, t, n, r) {
                    var i, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (i in c)
                                if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, y, $, o), o ? (d.ifModified && ((w = $.getResponseHeader("Last-Modified")) && (ne.lastModified[a] = w), (w = $.getResponseHeader("etag")) && (ne.etag[a] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, f = y.data, b = y.error, o = !b)) : (b = k, (e || !k) && (k = "error", 0 > e && (e = 0))), $.status = e, $.statusText = (n || k) + "", o ? g.resolveWith(p, [f, k, $]) : g.rejectWith(p, [$, k, b]), $.statusCode(v), v = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [$, d, o ? f : b]), m.fireWith(p, [$, k]), c && (h.trigger("ajaxComplete", [$, d]), --ne.active || ne.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, c, u, f, d = ne.ajaxSetup({}, n),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? ne(p) : ne.event,
                g = ne.Deferred(),
                m = ne.Callbacks("once memory"),
                v = d.statusCode || {},
                b = {},
                y = {},
                x = 0,
                w = "canceled",
                $ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!f)
                                for (f = {}; t = Ct.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else $.always(e[$.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), r(0, t), this
                    }
                };
            if (g.promise($).complete = m.add, $.success = $.done, $.error = $.fail, d.url = ((e || d.url || wt) + "").replace(Tt, "").replace(At, xt[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ne.trim(d.dataType || "*").toLowerCase().match(ie) || [""], null == d.crossDomain && (i = Nt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === xt[1] && i[2] === xt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (xt[3] || ("http:" === xt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ne.param(d.data, d.traditional)), N(Ot, d, n, $), 2 === x) return $;
            (c = d.global) && 0 == ne.active++ && ne.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Et.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (kt.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = St.test(a) ? a.replace(St, "$1_=" + $t++) : a + (kt.test(a) ? "&" : "?") + "_=" + $t++)), d.ifModified && (ne.lastModified[a] && $.setRequestHeader("If-Modified-Since", ne.lastModified[a]), ne.etag[a] && $.setRequestHeader("If-None-Match", ne.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && $.setRequestHeader("Content-Type", d.contentType), $.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) $.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, $, d) || 2 === x)) return $.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) $[o](d[o]);
            if (u = N(Dt, d, n, $)) {
                $.readyState = 1, c && h.trigger("ajaxSend", [$, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    $.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, u.send(b, r)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return $
        },
        getJSON: function(e, t, n) {
            return ne.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ne.get(e, t, n, "script")
        }
    }), ne.each(["get", "post"], function(e, n) {
        ne[n] = function(e, r, i, o) {
            return ne.isFunction(r) && (o = o || i, i = r, r = t), ne.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ne.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ne.globalEval(e), e
            }
        }
    }), ne.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ne.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = U.head || ne("head")[0] || U.documentElement;
            return {
                send: function(t, i) {
                    (n = U.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Mt = [],
        _t = /(=)\?(?=&|$)|\?\?/;
    ne.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || ne.expando + "_" + $t++;
            return this[e] = !0, e
        }
    }), ne.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = !1 !== n.jsonp && (_t.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ne.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(_t, "$1" + o) : !1 !== n.jsonp && (n.url += (kt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ne.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Mt.push(o)), s && ne.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Lt, Ft, Bt = 0,
        Rt = e.ActiveXObject && function() {
            var e;
            for (e in Lt) Lt[e](t, !0)
        };
    ne.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && O() || function() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : O, Ft = ne.ajaxSettings.xhr(), ne.support.cors = !!Ft && "withCredentials" in Ft, (Ft = ne.support.ajax = !!Ft) && ne.ajaxTransport(function(n) {
        if (!n.crossDomain || ne.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (e) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, c, u, f;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = ne.noop, Rt && delete Lt[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    f = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                        } catch (e) {
                            i || o(-1, e)
                        }
                        f && o(s, u, f, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Bt, Rt && (Lt || (Lt = {}, ne(e).unload(Rt)), Lt[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var jt, qt, Ut = /^(?:toggle|show|hide)$/,
        Ht = RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        Vt = /queueHooks$/,
        zt = [function(e, t, n) {
            var r, i, o, a, s, l, c = this,
                u = {},
                f = e.style,
                d = e.nodeType && x(e),
                p = ne._data(e, "fxshow");
            n.queue || (null == (s = ne._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ne.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ne.css(e, "display") && "none" === ne.css(e, "float") && (ne.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.support.shrinkWrapBlocks || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], Ut.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) continue;
                    u[r] = p && p[r] || ne.style(e, r)
                }
            if (!ne.isEmptyObject(u)) {
                p ? "hidden" in p && (d = p.hidden) : p = ne._data(e, "fxshow", {}), o && (p.hidden = !d), d ? ne(e).show() : c.done(function() {
                    ne(e).hide()
                }), c.done(function() {
                    var t;
                    ne._removeData(e, "fxshow");
                    for (t in u) ne.style(e, t, u[t])
                });
                for (r in u) a = I(d ? p[r] : 0, r, c), r in p || (p[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        Wt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ht.exec(t),
                    o = i && i[3] || (ne.cssNumber[e] ? "" : "px"),
                    a = (ne.cssNumber[e] || "px" !== o && +r) && Ht.exec(ne.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do {
                        s = s || ".5", a /= s, ne.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ne.Animation = ne.extend(M, {
        tweener: function(e, t) {
            ne.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Wt[n] = Wt[n] || [], Wt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? zt.unshift(e) : zt.push(e)
        }
    }), ne.Tween = _, (_.prototype = {
        constructor: _,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ne.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }).init.prototype = _.prototype, (_.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ne.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ne.cssProps[e.prop]] || ne.cssHooks[e.prop]) ? ne.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ne.each(["toggle", "show", "hide"], function(e, t) {
        var n = ne.fn[t];
        ne.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, r, i)
        }
    }), ne.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ne.isEmptyObject(e),
                o = ne.speed(t, n, r),
                a = function() {
                    var t = M(this, ne.extend({}, e), o);
                    (i || ne._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ne.timers,
                    a = ne._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Vt.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ne.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = ne._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ne.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ne.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ne.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ne.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ne.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ne.extend({}, e) : {
            complete: n || !n && t || ne.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ne.isFunction(t) && t
        };
        return r.duration = ne.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ne.fx.speeds ? ne.fx.speeds[r.duration] : ne.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ne.isFunction(r.old) && r.old.call(this), r.queue && ne.dequeue(this, r.queue)
        }, r
    }, ne.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ne.timers = [], ne.fx = _.prototype.init, ne.fx.tick = function() {
        var e, n = ne.timers,
            r = 0;
        for (jt = ne.now(); n.length > r; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
        n.length || ne.fx.stop(), jt = t
    }, ne.fx.timer = function(e) {
        e() && ne.timers.push(e) && ne.fx.start()
    }, ne.fx.interval = 13, ne.fx.start = function() {
        qt || (qt = setInterval(ne.fx.tick, ne.fx.interval))
    }, ne.fx.stop = function() {
        clearInterval(qt), qt = null
    }, ne.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ne.fx.step = {}, ne.expr && ne.expr.filters && (ne.expr.filters.animated = function(e) {
        return ne.grep(ne.timers, function(t) {
            return e === t.elem
        }).length
    }), ne.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ne.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ne.contains(n, o) ? (typeof o.getBoundingClientRect !== j && (i = o.getBoundingClientRect()), r = F(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ne.offset = {
        setOffset: function(e, t, n) {
            var r = ne.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ne(e),
                s = a.offset(),
                l = ne.css(e, "top"),
                c = ne.css(e, "left"),
                u = {},
                f = {};
            ("absolute" === r || "fixed" === r) && ne.inArray("auto", [l, c]) > -1 ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), ne.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + i), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : a.css(u)
        }
    }, ne.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ne.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (n = e.offset()), n.top += ne.css(e[0], "borderTopWidth", !0), n.left += ne.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ne.css(r, "marginTop", !0),
                    left: t.left - n.left - ne.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || H; e && !ne.nodeName(e, "html") && "static" === ne.css(e, "position");) e = e.offsetParent;
                return e || H
            })
        }
    }), ne.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ne.fn[e] = function(i) {
            return ne.access(this, function(e, i, o) {
                var a = F(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ne(a).scrollLeft() : o, r ? o : ne(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ne.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ne.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ne.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (!0 === i || !0 === o ? "margin" : "border");
                return ne.access(this, function(n, r, i) {
                    var o;
                    return ne.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ne.css(n, r, s) : ne.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ne.fn.size = function() {
        return this.length
    }, ne.fn.andSelf = ne.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ne : (e.jQuery = e.$ = ne, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ne
    }))
}(window),
function(e) {
    "use strict";

    function t() {
        function e(n) {
            var r = this;
            return r instanceof e ? (n instanceof e ? (r.s = n.s, r.e = n.e, r.c = n.c.slice()) : function(e, t) {
                var n, r, i;
                if (0 === t && 0 > 1 / t) t = "-0";
                else if (!m.test(t += "")) throw Error(f + "number");
                for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), i = t.length, r = 0; i > r && "0" == t.charAt(r);) ++r;
                if (r == i) e.c = [e.e = 0];
                else {
                    for (; i > 0 && "0" == t.charAt(--i););
                    for (e.e = n - r - 1, e.c = [], n = 0; i >= r;) e.c[n++] = +t.charAt(r++)
                }
            }(r, n), void(r.constructor = e)) : n === g ? t() : new e(n)
        }
        return e.prototype = h, e.DP = o, e.RM = a, e.NE = l, e.PE = c, e.version = "5.0.2", e
    }

    function n(e, t, n, r) {
        var i = e.c,
            o = e.e + t + 1;
        if (1 === n) r = i[o] >= 5;
        else if (2 === n) r = i[o] > 5 || 5 == i[o] && (r || 0 > o || i[o + 1] !== g || 1 & i[o - 1]);
        else if (3 === n) r = r || i[o] !== g || 0 > o;
        else if (r = !1, 0 !== n) throw Error(f + "rounding mode");
        if (1 > o || !i[0]) i.length = 1, r ? (e.e = -t, i[0] = 1) : i[0] = e.e = 0;
        else {
            if (i.length = o--, r)
                for (; ++i[o] > 9;) i[o] = 0, o-- || (++e.e, i.unshift(1));
            for (o = i.length; !i[--o];) i.pop()
        }
        return e
    }

    function r(e, t, r, i) {
        var o, a, l = e.constructor,
            c = !e.c[0];
        if (r !== g) {
            if (r !== ~~r || (3 == t) > r || r > s) throw Error(3 == t ? f + "precision" : d);
            for (r = i - (e = new l(e)).e, e.c.length > ++i && n(e, r, l.RM), 2 == t && (i = e.e + r + 1); e.c.length < i;) e.c.push(0)
        }
        if (o = e.e, a = e.c.join(""), r = a.length, 2 != t && (1 == t || 3 == t && o >= i || o <= l.NE || o >= l.PE)) a = a.charAt(0) + (r > 1 ? "." + a.slice(1) : "") + (0 > o ? "e" : "e+") + o;
        else if (0 > o) {
            for (; ++o;) a = "0" + a;
            a = "0." + a
        } else if (o > 0)
            if (++o > r)
                for (o -= r; o--;) a += "0";
            else r > o && (a = a.slice(0, o) + "." + a.slice(o));
        else r > 1 && (a = a.charAt(0) + "." + a.slice(1));
        return e.s < 0 && (!c || 4 == t) ? "-" + a : a
    }
    var i, o = 20,
        a = 1,
        s = 1e6,
        l = -7,
        c = 21,
        u = "[big.js] ",
        f = u + "Invalid ",
        d = f + "decimal places",
        p = u + "Division by zero",
        h = {},
        g = void 0,
        m = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    h.abs = function() {
        var e = new this.constructor(this);
        return e.s = 1, e
    }, h.cmp = function(e) {
        var t, n = this,
            r = n.c,
            i = (e = new n.constructor(e)).c,
            o = n.s,
            a = e.s,
            s = n.e,
            l = e.e;
        if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -a : 0;
        if (o != a) return o;
        if (t = 0 > o, s != l) return s > l ^ t ? 1 : -1;
        for (a = (s = r.length) < (l = i.length) ? s : l, o = -1; ++o < a;)
            if (r[o] != i[o]) return r[o] > i[o] ^ t ? 1 : -1;
        return s == l ? 0 : s > l ^ t ? 1 : -1
    }, h.div = function(e) {
        var t = this,
            r = t.constructor,
            i = t.c,
            o = (e = new r(e)).c,
            a = t.s == e.s ? 1 : -1,
            l = r.DP;
        if (l !== ~~l || 0 > l || l > s) throw Error(d);
        if (!o[0]) throw Error(p);
        if (!i[0]) return new r(0 * a);
        var c, u, f, h, m, v = o.slice(),
            b = c = o.length,
            y = i.length,
            x = i.slice(0, c),
            w = x.length,
            $ = e,
            k = $.c = [],
            T = 0,
            S = l + ($.e = t.e - e.e) + 1;
        for ($.s = a, a = 0 > S ? 0 : S, v.unshift(0); w++ < c;) x.push(0);
        do {
            for (f = 0; 10 > f; f++) {
                if (c != (w = x.length)) h = c > w ? 1 : -1;
                else
                    for (m = -1, h = 0; ++m < c;)
                        if (o[m] != x[m]) {
                            h = o[m] > x[m] ? 1 : -1;
                            break
                        } if (!(0 > h)) break;
                for (u = w == c ? o : v; w;) {
                    if (x[--w] < u[w]) {
                        for (m = w; m && !x[--m];) x[m] = 9;
                        --x[m], x[w] += 10
                    }
                    x[w] -= u[w]
                }
                for (; !x[0];) x.shift()
            }
            k[T++] = h ? f : ++f, x[0] && h ? x[w] = i[b] || 0 : x = [i[b]]
        } while ((b++ < y || x[0] !== g) && a--);
        return k[0] || 1 == T || (k.shift(), $.e--), T > S && n($, l, r.RM, x[0] !== g), $
    }, h.eq = function(e) {
        return !this.cmp(e)
    }, h.gt = function(e) {
        return this.cmp(e) > 0
    }, h.gte = function(e) {
        return this.cmp(e) > -1
    }, h.lt = function(e) {
        return this.cmp(e) < 0
    }, h.lte = function(e) {
        return this.cmp(e) < 1
    }, h.minus = h.sub = function(e) {
        var t, n, r, i, o = this,
            a = o.constructor,
            s = o.s,
            l = (e = new a(e)).s;
        if (s != l) return e.s = -l, o.plus(e);
        var c = o.c.slice(),
            u = o.e,
            f = e.c,
            d = e.e;
        if (!c[0] || !f[0]) return f[0] ? (e.s = -l, e) : new a(c[0] ? o : 0);
        if (s = u - d) {
            for ((i = 0 > s) ? (s = -s, r = c) : (d = u, r = f), r.reverse(), l = s; l--;) r.push(0);
            r.reverse()
        } else
            for (n = ((i = c.length < f.length) ? c : f).length, s = l = 0; n > l; l++)
                if (c[l] != f[l]) {
                    i = c[l] < f[l];
                    break
                } if (i && (r = c, c = f, f = r, e.s = -e.s), (l = (n = f.length) - (t = c.length)) > 0)
            for (; l--;) c[t++] = 0;
        for (l = t; n > s;) {
            if (c[--n] < f[n]) {
                for (t = n; t && !c[--t];) c[t] = 9;
                --c[t], c[n] += 10
            }
            c[n] -= f[n]
        }
        for (; 0 === c[--l];) c.pop();
        for (; 0 === c[0];) c.shift(), --d;
        return c[0] || (e.s = 1, c = [d = 0]), e.c = c, e.e = d, e
    }, h.mod = function(e) {
        var t, n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
        if (!e.c[0]) throw Error(p);
        return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = i, e.s = o, t ? new r(n) : (i = r.DP, o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = i, r.RM = o, this.minus(n.times(e)))
    }, h.plus = h.add = function(e) {
        var t, n = this,
            r = n.constructor,
            i = n.s,
            o = (e = new r(e)).s;
        if (i != o) return e.s = -o, n.minus(e);
        var a = n.e,
            s = n.c,
            l = e.e,
            c = e.c;
        if (!s[0] || !c[0]) return c[0] ? e : new r(s[0] ? n : 0 * i);
        if (s = s.slice(), i = a - l) {
            for (i > 0 ? (l = a, t = c) : (i = -i, t = s), t.reverse(); i--;) t.push(0);
            t.reverse()
        }
        for (s.length - c.length < 0 && (t = c, c = s, s = t), i = c.length, o = 0; i; s[i] %= 10) o = (s[--i] = s[i] + c[i] + o) / 10 | 0;
        for (o && (s.unshift(o), ++l), i = s.length; 0 === s[--i];) s.pop();
        return e.c = s, e.e = l, e
    }, h.pow = function(e) {
        var t = this,
            n = new t.constructor(1),
            r = n,
            i = 0 > e;
        if (e !== ~~e || -1e6 > e || e > 1e6) throw Error(f + "exponent");
        for (i && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
        return i ? n.div(r) : r
    }, h.round = function(e, t) {
        var r = this.constructor;
        if (e === g) e = 0;
        else if (e !== ~~e || 0 > e || e > s) throw Error(d);
        return n(new r(this), e, t === g ? r.RM : t)
    }, h.sqrt = function() {
        var e, t, r, i = this,
            o = i.constructor,
            a = i.s,
            s = i.e,
            l = new o(.5);
        if (!i.c[0]) return new o(i);
        if (0 > a) throw Error(u + "No square root");
        0 === (a = Math.sqrt(i.toString())) || a === 1 / 0 ? ((t = i.c.join("")).length + s & 1 || (t += "0"), e = new o(Math.sqrt(t).toString()), e.e = ((s + 1) / 2 | 0) - (0 > s || 1 & s)) : e = new o(a.toString()), s = e.e + (o.DP += 4);
        do {
            r = e, e = l.times(r.plus(i.div(r)))
        } while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
        return n(e, o.DP -= 4, o.RM)
    }, h.times = h.mul = function(e) {
        var t, n = this,
            r = n.constructor,
            i = n.c,
            o = (e = new r(e)).c,
            a = i.length,
            s = o.length,
            l = n.e,
            c = e.e;
        if (e.s = n.s == e.s ? 1 : -1, !i[0] || !o[0]) return new r(0 * e.s);
        for (e.e = l + c, s > a && (t = i, i = o, o = t, c = a, a = s, s = c), t = new Array(c = a + s); c--;) t[c] = 0;
        for (l = s; l--;) {
            for (s = 0, c = a + l; c > l;) s = t[c] + o[l] * i[c - l - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
            t[c] = (t[c] + s) % 10
        }
        for (s ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
        return e.c = t, e
    }, h.toExponential = function(e) {
        return r(this, 1, e, e)
    }, h.toFixed = function(e) {
        return r(this, 2, e, this.e + e)
    }, h.toPrecision = function(e) {
        return r(this, 3, e, e - 1)
    }, h.toString = function() {
        return r(this)
    }, h.valueOf = h.toJSON = function() {
        return r(this, 4)
    }, (i = t()).default = i.Big = i, "function" == typeof define && define.amd ? define(function() {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.Big = i
}(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var i, o = t || window.event,
            a = [].slice.call(arguments, 1),
            s = 0,
            l = 0,
            c = 0,
            u = 0,
            f = 0;
        return t = e.event.fix(o), t.type = "mousewheel", o.wheelDelta && (s = o.wheelDelta), o.detail && (s = -1 * o.detail), o.deltaY && (s = c = -1 * o.deltaY), o.deltaX && (s = -1 * (l = o.deltaX)), void 0 !== o.wheelDeltaY && (c = o.wheelDeltaY), void 0 !== o.wheelDeltaX && (l = -1 * o.wheelDeltaX), u = Math.abs(s), (!n || u < n) && (n = u), f = Math.max(Math.abs(c), Math.abs(l)), (!r || f < r) && (r = f), i = s > 0 ? "floor" : "ceil", s = Math[i](s / n), l = Math[i](l / r), c = Math[i](c / r), a.unshift(t, s, l, c), (e.event.dispatch || e.event.handle).apply(this, a)
    }
    var n, r, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (e.event.fixHooks)
        for (var a = i.length; a;) e.event.fixHooks[i[--a]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e;) this.addEventListener(o[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e;) this.removeEventListener(o[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    var t = function() {
        var t = 65,
            n = {
                eventName: "click",
                onShow: function() {},
                onBeforeShow: function() {},
                onHide: function() {},
                onChange: function() {},
                onSubmit: function() {},
                color: "ff0000",
                livePreview: !0,
                flat: !1
            },
            r = function(t, n) {
                var r = C(t);
                e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
            },
            i = function(t, n) {
                e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
            },
            o = function(t, n) {
                e(n).data("colorpicker").fields.eq(0).val(E(t)).end()
            },
            a = function(t, n) {
                e(n).data("colorpicker").selector.css("backgroundColor", "#" + E({
                    h: t.h,
                    s: 100,
                    b: 100
                })), e(n).data("colorpicker").selectorIndic.css({
                    left: parseInt(150 * t.s / 100, 10),
                    top: parseInt(150 * (100 - t.b) / 100, 10)
                })
            },
            s = function(t, n) {
                e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
            },
            l = function(t, n) {
                e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + E(t))
            },
            c = function(t, n) {
                e(n).data("colorpicker").newColor.css("backgroundColor", "#" + E(t))
            },
            u = function(t) {
                var n, l = e(this).parent().parent();
                this.parentNode.className.indexOf("_hex") > 0 ? l.data("colorpicker").color = n = T(k(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? l.data("colorpicker").color = n = w({
                    h: parseInt(l.data("colorpicker").fields.eq(4).val(), 10),
                    s: parseInt(l.data("colorpicker").fields.eq(5).val(), 10),
                    b: parseInt(l.data("colorpicker").fields.eq(6).val(), 10)
                }) : l.data("colorpicker").color = n = S($({
                    r: parseInt(l.data("colorpicker").fields.eq(1).val(), 10),
                    g: parseInt(l.data("colorpicker").fields.eq(2).val(), 10),
                    b: parseInt(l.data("colorpicker").fields.eq(3).val(), 10)
                })), t && (r(n, l.get(0)), o(n, l.get(0)), i(n, l.get(0))), a(n, l.get(0)), s(n, l.get(0)), c(n, l.get(0)), l.data("colorpicker").onChange.apply(l, [n, E(n), C(n)])
            },
            f = function(e) {
                return e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10)))), e.data.preview && u.apply(e.data.field.get(0), [!0]), !1
            },
            d = function(t) {
                return u.apply(t.data.field.get(0), [!0]), t.data.el.removeClass("colorpicker_slider").find("input").focus(), e(document).unbind("mouseup", d), e(document).unbind("mousemove", f), !1
            },
            p = function(e) {
                return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]), !1
            },
            h = function(t) {
                return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), o(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", h), e(document).unbind("mousemove", p), !1
            },
            g = function(e) {
                return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]), !1
            },
            m = function(t) {
                return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), o(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", m), e(document).unbind("mousemove", g), !1
            },
            v = function(t) {
                var n = e("#" + e(this).data("colorpickerId"));
                n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
                var r = e(this).offset(),
                    i = x(),
                    o = r.top + this.offsetHeight,
                    a = r.left;
                return o + 176 > i.t + i.h && (o -= this.offsetHeight + 176), a + 356 > i.l + i.w && (a -= 356), n.css({
                    left: a + "px",
                    top: o + "px"
                }), 0 != n.data("colorpicker").onShow.apply(this, [n.get(0)]) && n.show(), e(document).bind("mousedown", {
                    cal: n
                }, b), !1
            },
            b = function(t) {
                y(t.data.cal.get(0), t.target, t.data.cal.get(0)) || (0 != t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) && t.data.cal.hide(), e(document).unbind("mousedown", b))
            },
            y = function(e, t, n) {
                if (e == t) return !0;
                if (e.contains) return e.contains(t);
                if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
                for (var r = t.parentNode; r && r != n;) {
                    if (r == e) return !0;
                    r = r.parentNode
                }
                return !1
            },
            x = function() {
                var e = "CSS1Compat" == document.compatMode;
                return {
                    l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
                    w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
                    h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
                }
            },
            w = function(e) {
                return {
                    h: Math.min(360, Math.max(0, e.h)),
                    s: Math.min(100, Math.max(0, e.s)),
                    b: Math.min(100, Math.max(0, e.b))
                }
            },
            $ = function(e) {
                return {
                    r: Math.min(255, Math.max(0, e.r)),
                    g: Math.min(255, Math.max(0, e.g)),
                    b: Math.min(255, Math.max(0, e.b))
                }
            },
            k = function(e) {
                var t = 6 - e.length;
                if (t > 0) {
                    for (var n = [], r = 0; r < t; r++) n.push("0");
                    n.push(e), e = n.join("")
                }
                return e
            },
            T = function(e) {
                return S(function(e) {
                    return {
                        r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16,
                        g: (65280 & e) >> 8,
                        b: 255 & e
                    }
                }(e))
            },
            S = function(e) {
                var t = {
                        h: 0,
                        s: 0,
                        b: 0
                    },
                    n = Math.min(e.r, e.g, e.b),
                    r = Math.max(e.r, e.g, e.b),
                    i = r - n;
                return t.b = r, t.s = 0 != r ? 255 * i / r : 0, 0 != t.s ? e.r == r ? t.h = (e.g - e.b) / i : e.g == r ? t.h = 2 + (e.b - e.r) / i : t.h = 4 + (e.r - e.g) / i : t.h = -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
            },
            C = function(e) {
                var t = {},
                    n = Math.round(e.h),
                    r = Math.round(255 * e.s / 100),
                    i = Math.round(255 * e.b / 100);
                if (0 == r) t.r = t.g = t.b = i;
                else {
                    var o = i,
                        a = (255 - r) * i / 255,
                        s = n % 60 * (o - a) / 60;
                    360 == n && (n = 0), n < 60 ? (t.r = o, t.b = a, t.g = a + s) : n < 120 ? (t.g = o, t.b = a, t.r = o - s) : n < 180 ? (t.g = o, t.r = a, t.b = a + s) : n < 240 ? (t.b = o, t.r = a, t.g = o - s) : n < 300 ? (t.b = o, t.g = a, t.r = a + s) : n < 360 ? (t.r = o, t.g = a, t.b = o - s) : (t.r = 0, t.g = 0, t.b = 0)
                }
                return {
                    r: Math.round(t.r),
                    g: Math.round(t.g),
                    b: Math.round(t.b)
                }
            },
            E = function(t) {
                return function(t) {
                    var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
                    return e.each(n, function(e, t) {
                        1 == t.length && (n[e] = "0" + t)
                    }), n.join("")
                }(C(t))
            };
        return {
            init: function(b) {
                if ("string" == typeof(b = e.extend({}, n, b || {})).color) b.color = T(b.color);
                else if (void 0 != b.color.r && void 0 != b.color.g && void 0 != b.color.b) b.color = S(b.color);
                else {
                    if (void 0 == b.color.h || void 0 == b.color.s || void 0 == b.color.b) return this;
                    b.color = w(b.color)
                }
                return this.each(function() {
                    if (!e(this).data("colorpickerId")) {
                        var n = e.extend({}, b);
                        n.origColor = b.color;
                        var y = "collorpicker_" + parseInt(1e3 * Math.random());
                        e(this).data("colorpickerId", y);
                        var x = e('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id", y);
                        n.flat ? x.appendTo(this).show() : x.appendTo(document.body), n.fields = x.find("input").bind("keyup", function(n) {
                            var r = n.charCode || n.keyCode || -1;
                            if (r > t && r <= 90 || 32 == r) return !1;
                            !0 === e(this).parent().parent().data("colorpicker").livePreview && u.apply(this)
                        }).bind("change", u).bind("blur", function(t) {
                            e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")
                        }).bind("focus", function() {
                            t = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), e(this).parent().addClass("colorpicker_focus")
                        }), x.find("span").bind("mousedown", function(t) {
                            var n = e(this).parent().find("input").focus(),
                                r = {
                                    el: e(this).parent().addClass("colorpicker_slider"),
                                    max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                                    y: t.pageY,
                                    field: n,
                                    val: parseInt(n.val(), 10),
                                    preview: e(this).parent().parent().data("colorpicker").livePreview
                                };
                            e(document).bind("mouseup", r, d), e(document).bind("mousemove", r, f)
                        }).end().find(">div.colorpicker_current_color").bind("click", function() {
                            var t = e(this).parent(),
                                n = t.data("colorpicker").origColor;
                            t.data("colorpicker").color = n, r(n, t.get(0)), o(n, t.get(0)), i(n, t.get(0)), a(n, t.get(0)), s(n, t.get(0)), c(n, t.get(0))
                        }), n.selector = x.find("div.colorpicker_color").bind("mousedown", function(t) {
                            var n = {
                                cal: e(this).parent(),
                                pos: e(this).offset()
                            };
                            n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, m), e(document).bind("mousemove", n, g)
                        }), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = x.find("div.colorpicker_hue div"), x.find("div.colorpicker_hue").bind("mousedown", function(t) {
                            var n = {
                                cal: e(this).parent(),
                                y: e(this).offset().top
                            };
                            n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, h), e(document).bind("mousemove", n, p)
                        }), n.newColor = x.find("div.colorpicker_new_color"), n.currentColor = x.find("div.colorpicker_current_color"), x.data("colorpicker", n), x.find("div.colorpicker_submit").bind("mouseenter", function(t) {
                            e(this).addClass("colorpicker_focus")
                        }).bind("mouseleave", function(t) {
                            e(this).removeClass("colorpicker_focus")
                        }).bind("click", function(t) {
                            var n = e(this).parent(),
                                r = n.data("colorpicker").color;
                            n.data("colorpicker").origColor = r, l(r, n.get(0)), n.data("colorpicker").onSubmit(r, E(r), C(r), n.data("colorpicker").el)
                        }), r(n.color, x.get(0)), i(n.color, x.get(0)), o(n.color, x.get(0)), s(n.color, x.get(0)), a(n.color, x.get(0)), l(n.color, x.get(0)), c(n.color, x.get(0)), n.flat ? x.css({
                            position: "relative",
                            display: "block"
                        }) : e(this).bind(n.eventName, v)
                    }
                })
            },
            showPicker: function() {
                return this.each(function() {
                    e(this).data("colorpickerId") && v.apply(this)
                })
            },
            hidePicker: function() {
                return this.each(function() {
                    e(this).data("colorpickerId") && e("#" + e(this).data("colorpickerId")).hide()
                })
            },
            setColor: function(t) {
                if ("string" == typeof t) t = T(t);
                else if (void 0 != t.r && void 0 != t.g && void 0 != t.b) t = S(t);
                else {
                    if (void 0 == t.h || void 0 == t.s || void 0 == t.b) return this;
                    t = w(t)
                }
                return this.each(function() {
                    if (e(this).data("colorpickerId")) {
                        var n = e("#" + e(this).data("colorpickerId"));
                        n.data("colorpicker").color = t, n.data("colorpicker").origColor = t, r(t, n.get(0)), i(t, n.get(0)), o(t, n.get(0)), s(t, n.get(0)), a(t, n.get(0)), l(t, n.get(0)), c(t, n.get(0))
                    }
                })
            }
        }
    }();
    e.fn.extend({
        ColorPicker: t.init,
        ColorPickerHide: t.hidePicker,
        ColorPickerShow: t.showPicker,
        ColorPickerSetColor: t.setColor,
        ColorPicker: t.init,
        ColorPickerHide: t.hidePicker,
        ColorPickerShow: t.showPicker,
        ColorPickerSetColor: t.setColor
    })
}(jQuery),
function(e) {
    var t = function(e, t) {
            return e << t | e >>> 32 - t
        },
        n = function(e, t) {
            var n, r, i, o, a;
            return i = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
        },
        r = function(e, r, i, o, a, s, l) {
            return e = n(e, n(n(function(e, t, n) {
                return e & t | ~e & n
            }(r, i, o), a), l)), n(t(e, s), r)
        },
        i = function(e, r, i, o, a, s, l) {
            return e = n(e, n(n(function(e, t, n) {
                return e & n | t & ~n
            }(r, i, o), a), l)), n(t(e, s), r)
        },
        o = function(e, r, i, o, a, s, l) {
            return e = n(e, n(n(function(e, t, n) {
                return e ^ t ^ n
            }(r, i, o), a), l)), n(t(e, s), r)
        },
        a = function(e, r, i, o, a, s, l) {
            return e = n(e, n(n(function(e, t, n) {
                return t ^ (e | ~n)
            }(r, i, o), a), l)), n(t(e, s), r)
        },
        s = function(e) {
            var t, n = "",
                r = "";
            for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
            return n
        };
    jQuery.extend({
        md5: function(e) {
            var t, l, c, u, f, d, p, h, g, m = Array();
            for (m = function(e) {
                    for (var t, n = e.length, r = n + 8, i = 16 * ((r - r % 64) / 64 + 1), o = Array(i - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, o[t = (s - s % 4) / 4] = o[t] | e.charCodeAt(s) << a, s++;
                    return t = (s - s % 4) / 4, a = s % 4 * 8, o[t] = o[t] | 128 << a, o[i - 2] = n << 3, o[i - 1] = n >>> 29, o
                }(e = function(e) {
                    e = e.replace(/\x0d\x0a/g, "\n");
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                    }
                    return t
                }(e)), d = 1732584193, p = 4023233417, h = 2562383102, g = 271733878, t = 0; t < m.length; t += 16) l = d, c = p, u = h, f = g, d = r(d, p, h, g, m[t + 0], 7, 3614090360), g = r(g, d, p, h, m[t + 1], 12, 3905402710), h = r(h, g, d, p, m[t + 2], 17, 606105819), p = r(p, h, g, d, m[t + 3], 22, 3250441966), d = r(d, p, h, g, m[t + 4], 7, 4118548399), g = r(g, d, p, h, m[t + 5], 12, 1200080426), h = r(h, g, d, p, m[t + 6], 17, 2821735955), p = r(p, h, g, d, m[t + 7], 22, 4249261313), d = r(d, p, h, g, m[t + 8], 7, 1770035416), g = r(g, d, p, h, m[t + 9], 12, 2336552879), h = r(h, g, d, p, m[t + 10], 17, 4294925233), p = r(p, h, g, d, m[t + 11], 22, 2304563134), d = r(d, p, h, g, m[t + 12], 7, 1804603682), g = r(g, d, p, h, m[t + 13], 12, 4254626195), h = r(h, g, d, p, m[t + 14], 17, 2792965006), p = r(p, h, g, d, m[t + 15], 22, 1236535329), d = i(d, p, h, g, m[t + 1], 5, 4129170786), g = i(g, d, p, h, m[t + 6], 9, 3225465664), h = i(h, g, d, p, m[t + 11], 14, 643717713), p = i(p, h, g, d, m[t + 0], 20, 3921069994), d = i(d, p, h, g, m[t + 5], 5, 3593408605), g = i(g, d, p, h, m[t + 10], 9, 38016083), h = i(h, g, d, p, m[t + 15], 14, 3634488961), p = i(p, h, g, d, m[t + 4], 20, 3889429448), d = i(d, p, h, g, m[t + 9], 5, 568446438), g = i(g, d, p, h, m[t + 14], 9, 3275163606), h = i(h, g, d, p, m[t + 3], 14, 4107603335), p = i(p, h, g, d, m[t + 8], 20, 1163531501), d = i(d, p, h, g, m[t + 13], 5, 2850285829), g = i(g, d, p, h, m[t + 2], 9, 4243563512), h = i(h, g, d, p, m[t + 7], 14, 1735328473), p = i(p, h, g, d, m[t + 12], 20, 2368359562), d = o(d, p, h, g, m[t + 5], 4, 4294588738), g = o(g, d, p, h, m[t + 8], 11, 2272392833), h = o(h, g, d, p, m[t + 11], 16, 1839030562), p = o(p, h, g, d, m[t + 14], 23, 4259657740), d = o(d, p, h, g, m[t + 1], 4, 2763975236), g = o(g, d, p, h, m[t + 4], 11, 1272893353), h = o(h, g, d, p, m[t + 7], 16, 4139469664), p = o(p, h, g, d, m[t + 10], 23, 3200236656), d = o(d, p, h, g, m[t + 13], 4, 681279174), g = o(g, d, p, h, m[t + 0], 11, 3936430074), h = o(h, g, d, p, m[t + 3], 16, 3572445317), p = o(p, h, g, d, m[t + 6], 23, 76029189), d = o(d, p, h, g, m[t + 9], 4, 3654602809), g = o(g, d, p, h, m[t + 12], 11, 3873151461), h = o(h, g, d, p, m[t + 15], 16, 530742520), p = o(p, h, g, d, m[t + 2], 23, 3299628645), d = a(d, p, h, g, m[t + 0], 6, 4096336452), g = a(g, d, p, h, m[t + 7], 10, 1126891415), h = a(h, g, d, p, m[t + 14], 15, 2878612391), p = a(p, h, g, d, m[t + 5], 21, 4237533241), d = a(d, p, h, g, m[t + 12], 6, 1700485571), g = a(g, d, p, h, m[t + 3], 10, 2399980690), h = a(h, g, d, p, m[t + 10], 15, 4293915773), p = a(p, h, g, d, m[t + 1], 21, 2240044497), d = a(d, p, h, g, m[t + 8], 6, 1873313359), g = a(g, d, p, h, m[t + 15], 10, 4264355552), h = a(h, g, d, p, m[t + 6], 15, 2734768916), p = a(p, h, g, d, m[t + 13], 21, 1309151649), d = a(d, p, h, g, m[t + 4], 6, 4149444226), g = a(g, d, p, h, m[t + 11], 10, 3174756917), h = a(h, g, d, p, m[t + 2], 15, 718787259), p = a(p, h, g, d, m[t + 9], 21, 3951481745), d = n(d, l), p = n(p, c), h = n(h, u), g = n(g, f);
            return (s(d) + s(p) + s(h) + s(g)).toLowerCase()
        }
    })
}(),
function(e, t, n) {
    "use strict";

    function r(e) {
        return function() {
            var t, n = arguments[0],
                n = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.2.28/" + (e ? e + "/" : "") + n;
            for (t = 1; t < arguments.length; t++) n = n + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
            return Error(n)
        }
    }

    function i(e) {
        if (null == e || T(e)) return !1;
        var t = e.length;
        return !(1 !== e.nodeType || !t) || (y(e) || mt(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function o(e, t, n) {
        var r;
        if (e)
            if ($(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r);
            else if (mt(e) || i(e))
            for (r = 0; r < e.length; r++) t.call(n, e[r], r);
        else if (e.forEach && e.forEach !== o) e.forEach(t, n);
        else
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
        return e
    }

    function a(e) {
        var t, n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return n.sort()
    }

    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function l() {
        for (var e, t = gt.length; t;) {
            if (t--, 57 == (e = gt[t].charCodeAt(0))) return gt[t] = "A", gt.join("");
            if (90 != e) return gt[t] = String.fromCharCode(e + 1), gt.join("");
            gt[t] = "0"
        }
        return gt.unshift("0"), gt.join("")
    }

    function c(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function u(e) {
        var t = e.$$hashKey;
        return o(arguments, function(t) {
            t !== e && o(t, function(t, n) {
                e[n] = t
            })
        }), c(e, t), e
    }

    function f(e) {
        return parseInt(e, 10)
    }

    function d(e, t) {
        return u(new(u(function() {}, {
            prototype: e
        })), t)
    }

    function p() {}

    function h(e) {
        return e
    }

    function g(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return void 0 === e
    }

    function v(e) {
        return void 0 !== e
    }

    function b(e) {
        return null != e && "object" == typeof e
    }

    function y(e) {
        return "string" == typeof e
    }

    function x(e) {
        return "number" == typeof e
    }

    function w(e) {
        return "[object Date]" === dt.call(e)
    }

    function $(e) {
        return "function" == typeof e
    }

    function k(e) {
        return "[object RegExp]" === dt.call(e)
    }

    function T(e) {
        return e && e.document && e.location && e.alert && e.setInterval
    }

    function S(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0; n < e.length; n++)
            if (t === e[n]) return n;
        return -1
    }

    function C(e, t) {
        var n = S(e, t);
        return 0 <= n && e.splice(n, 1), t
    }

    function E(e, t, n, r) {
        if (T(e) || e && e.$evalAsync && e.$watch) throw pt("cpws");
        if (t) {
            if (e === t) throw pt("cpi");
            if (n = n || [], r = r || [], b(e)) {
                var i = S(n, e);
                if (-1 !== i) return r[i];
                n.push(e), r.push(t)
            }
            if (mt(e))
                for (var a = t.length = 0; a < e.length; a++) i = E(e[a], null, n, r), b(e[a]) && (n.push(e[a]), r.push(i)), t.push(i);
            else {
                var s = t.$$hashKey;
                mt(t) ? t.length = 0 : o(t, function(e, n) {
                    delete t[n]
                });
                for (a in e) i = E(e[a], null, n, r), b(e[a]) && (n.push(e[a]), r.push(i)), t[a] = i;
                c(t, s)
            }
        } else(t = e) && (mt(e) ? t = E(e, [], n, r) : w(e) ? t = new Date(e.getTime()) : k(e) ? (t = RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : b(e) && (t = E(e, {}, n, r)));
        return t
    }

    function A(e, t) {
        if (mt(e)) {
            t = t || [];
            for (var n = 0; n < e.length; n++) t[n] = e[n]
        } else if (b(e))
            for (n in t = t || {}, e) !lt.call(e, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = e[n]);
        return t || e
    }

    function N(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e != e && t != t) return !0;
        var r, i = typeof e;
        if (i == typeof t && "object" == i) {
            if (!mt(e)) {
                if (w(e)) return !!w(t) && (isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime());
                if (k(e) && k(t)) return e.toString() == t.toString();
                if (e && e.$evalAsync && e.$watch || t && t.$evalAsync && t.$watch || T(e) || T(t) || mt(t)) return !1;
                i = {};
                for (r in e)
                    if ("$" !== r.charAt(0) && !$(e[r])) {
                        if (!N(e[r], t[r])) return !1;
                        i[r] = !0
                    }
                for (r in t)
                    if (!i.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== n && !$(t[r])) return !1;
                return !0
            }
            if (!mt(t)) return !1;
            if ((i = e.length) == t.length) {
                for (r = 0; r < i; r++)
                    if (!N(e[r], t[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function P(e, t) {
        var n = 2 < arguments.length ? ut.call(arguments, 2) : [];
        return !$(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, n.concat(ut.call(arguments, 0))) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function O(e, r) {
        return void 0 === e ? n : JSON.stringify(e, function(e, r) {
            var i = r;
            return "string" == typeof e && "$" === e.charAt(0) ? i = n : T(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (i = "$SCOPE"), i
        }, r ? "  " : null)
    }

    function D(e) {
        return y(e) ? JSON.parse(e) : e
    }

    function I(e) {
        return "function" == typeof e ? e = !0 : e && 0 !== e.length ? (e = st("" + e), e = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)) : e = !1, e
    }

    function M(e) {
        e = nt(e).clone();
        try {
            e.empty()
        } catch (e) {}
        var t = nt("<div>").append(e).html();
        try {
            return 3 === e[0].nodeType ? st(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + st(t)
            })
        } catch (e) {
            return st(t)
        }
    }

    function _(e) {
        try {
            return decodeURIComponent(e)
        } catch (e) {}
    }

    function L(e) {
        var t, n, r = {};
        return o((e || "").split("&"), function(e) {
            e && (t = e.replace(/\+/g, "%20").split("="), n = _(t[0]), v(n) && (e = !v(t[1]) || _(t[1]), lt.call(r, n) ? mt(r[n]) ? r[n].push(e) : r[n] = [r[n], e] : r[n] = e))
        }), r
    }

    function F(e) {
        var t = [];
        return o(e, function(e, n) {
            mt(e) ? o(e, function(e) {
                t.push(R(n, !0) + (!0 === e ? "" : "=" + R(e, !0)))
            }) : t.push(R(n, !0) + (!0 === e ? "" : "=" + R(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function B(e) {
        return R(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function R(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }

    function j(n, r) {
        var i = function() {
                if ((n = nt(n)).injector()) {
                    var e = n[0] === t ? "document" : M(n);
                    throw pt("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return (r = r || []).unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), r.unshift("ng"), (e = pe(r)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(e, t, n, r, i) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), e
            },
            a = /^NG_DEFER_BOOTSTRAP!/;
        if (e && !a.test(e.name)) return i();
        e.name = e.name.replace(a, ""), ht.resumeBootstrap = function(e) {
            o(e, function(e) {
                r.push(e)
            }), i()
        }
    }

    function q(e, t) {
        return t = t || "_", e.replace(yt, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function U(e, t, n) {
        if (!e) throw pt("areq", t || "?", n || "required");
        return e
    }

    function H(e, t, n) {
        return n && mt(e) && (e = e[e.length - 1]), U($(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function V(e, t) {
        if ("hasOwnProperty" === e) throw pt("badname", t)
    }

    function z(e, t, n) {
        if (!t) return e;
        for (var r, i = e, o = (t = t.split(".")).length, a = 0; a < o; a++) r = t[a], e && (e = (i = e)[r]);
        return !n && $(e) ? P(i, e) : e
    }

    function W(e) {
        var t = e[0];
        if (e = e[e.length - 1], t === e) return nt(t);
        var n = [t];
        do {
            if (!(t = t.nextSibling)) break;
            n.push(t)
        } while (t !== e);
        return nt(n)
    }

    function G(e) {
        return e.replace(St, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Ct, "Moz$1")
    }

    function Y(e, t, n, r) {
        function i(e) {
            var i, a, s, l, c, u, f = n && e ? [this.filter(e)] : [this],
                d = t;
            if (!r || null != e)
                for (; f.length;)
                    for (i = f.shift(), a = 0, s = i.length; a < s; a++)
                        for (l = nt(i[a]), d ? l.triggerHandler("$destroy") : d = !d, c = 0, l = (u = l.children()).length; c < l; c++) f.push(rt(u[c]));
            return o.apply(this, arguments)
        }
        var o = (o = rt.fn[e]).$original || o;
        i.$original = o, rt.fn[e] = i
    }

    function X(e) {
        if (e instanceof X) return e;
        if (y(e) && (e = vt(e)), !(this instanceof X)) {
            if (y(e) && "<" != e.charAt(0)) throw Et("nosel");
            return new X(e)
        }
        if (y(e)) {
            var n = e;
            e = t;
            var r;
            if (r = At.exec(n)) e = [e.createElement(r[1])];
            else {
                var i, o = e;
                if (e = o.createDocumentFragment(), r = [], Nt.test(n)) {
                    for (o = e.appendChild(o.createElement("div")), i = (Pt.exec(n) || ["", ""])[1].toLowerCase(), i = Dt[i] || Dt._default, o.innerHTML = "<div>&#160;</div>" + i[1] + n.replace(Ot, "<$1></$2>") + i[2], o.removeChild(o.firstChild), n = i[0]; n--;) o = o.lastChild;
                    for (n = 0, i = o.childNodes.length; n < i; ++n) r.push(o.childNodes[n]);
                    (o = e.firstChild).textContent = ""
                } else r.push(o.createTextNode(n));
                e.textContent = "", e.innerHTML = "", e = r
            }
            oe(this, e), nt(t.createDocumentFragment()).append(this)
        } else oe(this, e)
    }

    function K(e) {
        return e.cloneNode(!0)
    }

    function Q(e) {
        Z(e);
        var t = 0;
        for (e = e.childNodes || []; t < e.length; t++) Q(e[t])
    }

    function J(e, t, n, r) {
        if (v(r)) throw Et("offargs");
        var i = ee(e, "events");
        ee(e, "handle") && (m(t) ? o(i, function(t, n) {
            Tt(e, n, t), delete i[n]
        }) : o(t.split(" "), function(t) {
            m(n) ? (Tt(e, t, i[t]), delete i[t]) : C(i[t] || [], n)
        }))
    }

    function Z(e, t) {
        var r = e.ng339,
            i = wt[r];
        i && (t ? delete wt[r].data[t] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), J(e)), delete wt[r], e.ng339 = n))
    }

    function ee(e, t, n) {
        var r = e.ng339,
            r = wt[r || -1];
        if (!v(n)) return r && r[t];
        r || (e.ng339 = r = ++$t, r = wt[r] = {}), r[t] = n
    }

    function te(e, t, n) {
        var r = ee(e, "data"),
            i = v(n),
            o = !i && v(t),
            a = o && !b(t);
        if (r || a || ee(e, "data", r = {}), i) r[t] = n;
        else {
            if (!o) return r;
            if (a) return r && r[t];
            u(r, t)
        }
    }

    function ne(e, t) {
        return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
    }

    function re(e, t) {
        t && e.setAttribute && o(t.split(" "), function(t) {
            e.setAttribute("class", vt((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + vt(t) + " ", " ")))
        })
    }

    function ie(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function(e) {
                e = vt(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", vt(n))
        }
    }

    function oe(e, t) {
        if (t) {
            t = t.nodeName || !v(t.length) || T(t) ? [t] : t;
            for (var n = 0; n < t.length; n++) e.push(t[n])
        }
    }

    function ae(e, t) {
        return se(e, "$" + (t || "ngController") + "Controller")
    }

    function se(e, t, r) {
        for (9 == e.nodeType && (e = e.documentElement), t = mt(t) ? t : [t]; e;) {
            for (var i = 0, o = t.length; i < o; i++)
                if ((r = nt.data(e, t[i])) !== n) return r;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }

    function le(e) {
        for (var t = 0, n = e.childNodes; t < n.length; t++) Q(n[t]);
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function ce(e, t) {
        var n = Mt[t.toLowerCase()];
        return n && _t[e.nodeName] && n
    }

    function ue(e, t) {
        var r, i = typeof e;
        return "function" == i || "object" == i && null !== e ? "function" == typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || l)()) : r = e, i + ":" + r
    }

    function fe(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(e, this.put, this)
    }

    function de(e) {
        var t, n;
        return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && (n = e.toString().replace(Rt, ""), n = n.match(Lt), o(n[1].split(Ft), function(e) {
            e.replace(Bt, function(e, n, r) {
                t.push(r)
            })
        })), e.$inject = t) : mt(e) ? (n = e.length - 1, H(e[n], "fn"), t = e.slice(0, n)) : H(e, "fn", !0), t
    }

    function pe(e) {
        function t(e) {
            return function(t, n) {
                if (!b(t)) return e(t, n);
                o(t, s(e))
            }
        }

        function n(e, t) {
            if (V(e, "service"), ($(t) || mt(t)) && (t = h.instantiate(t)), !t.$get) throw jt("pget", e);
            return d[e + c] = t
        }

        function r(e, t) {
            return n(e, {
                $get: t
            })
        }

        function i(e) {
            var t, n, r, a, s = [];
            return o(e, function(e) {
                if (!f.get(e)) {
                    f.put(e, !0);
                    try {
                        if (y(e))
                            for (t = it(e), s = s.concat(i(t.requires)).concat(t._runBlocks), n = t._invokeQueue, r = 0, a = n.length; r < a; r++) {
                                var o = n[r],
                                    l = h.get(o[0]);
                                l[o[1]].apply(l, o[2])
                            } else $(e) ? s.push(h.invoke(e)) : mt(e) ? s.push(h.invoke(e)) : H(e, "module")
                    } catch (t) {
                        throw mt(e) && (e = e[e.length - 1]), t.message && t.stack && -1 == t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), jt("modulerr", e, t.stack || t.message || t)
                    }
                }
            }), s
        }

        function a(e, t) {
            function n(n) {
                if (e.hasOwnProperty(n)) {
                    if (e[n] === l) throw jt("cdep", n + " <- " + u.join(" <- "));
                    return e[n]
                }
                try {
                    return u.unshift(n), e[n] = l, e[n] = t(n)
                } catch (t) {
                    throw e[n] === l && delete e[n], t
                } finally {
                    u.shift()
                }
            }

            function r(e, t, r) {
                var i, o, a, s = [],
                    l = de(e);
                for (o = 0, i = l.length; o < i; o++) {
                    if ("string" != typeof(a = l[o])) throw jt("itkn", a);
                    s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
                }
                return mt(e) && (e = e[i]), e.apply(t, s)
            }
            return {
                invoke: r,
                instantiate: function(e, t) {
                    var n, i = function() {};
                    return i.prototype = (mt(e) ? e[e.length - 1] : e).prototype, i = new i, n = r(e, i, t), b(n) || $(n) ? n : i
                },
                get: n,
                annotate: de,
                has: function(t) {
                    return d.hasOwnProperty(t + c) || e.hasOwnProperty(t)
                }
            }
        }
        var l = {},
            c = "Provider",
            u = [],
            f = new fe([], !0),
            d = {
                $provide: {
                    provider: t(n),
                    factory: t(r),
                    service: t(function(e, t) {
                        return r(e, ["$injector", function(e) {
                            return e.instantiate(t)
                        }])
                    }),
                    value: t(function(e, t) {
                        return r(e, g(t))
                    }),
                    constant: t(function(e, t) {
                        V(e, "constant"), d[e] = t, m[e] = t
                    }),
                    decorator: function(e, t) {
                        var n = h.get(e + c),
                            r = n.$get;
                        n.$get = function() {
                            var e = v.invoke(r, n);
                            return v.invoke(t, null, {
                                $delegate: e
                            })
                        }
                    }
                }
            },
            h = d.$injector = a(d, function() {
                throw jt("unpr", u.join(" <- "))
            }),
            m = {},
            v = m.$injector = a(m, function(e) {
                return e = h.get(e + c), v.invoke(e.$get, e)
            });
        return o(i(e), function(e) {
            v.invoke(e || p)
        }), v
    }

    function he(e, r) {
        var i = {},
            a = "Directive",
            l = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
            c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            f = /^(on[a-z]+|formaction)$/;
        this.directive = function t(n, r) {
            return V(n, "directive"), y(n) ? (U(r, "directiveFactory"), i.hasOwnProperty(n) || (i[n] = [], e.factory(n + a, ["$injector", "$exceptionHandler", function(e, t) {
                var r = [];
                return o(i[n], function(i, o) {
                    try {
                        var a = e.invoke(i);
                        $(a) ? a = {
                            compile: g(a)
                        } : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "A", r.push(a)
                    } catch (e) {
                        t(e)
                    }
                }), r
            }])), i[n].push(r)) : o(n, s(t)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return v(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return v(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, s, p, g, m, v, x, w, k, T, S) {
            function C(e, t, n, r, i) {
                e instanceof nt || (e = nt(e)), o(e, function(t, n) {
                    3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = nt(t).wrap("<span></span>").parent()[0])
                });
                var a = P(e, t, e, n, r, i);
                return E(e, "ng-scope"),
                    function(t, n, r, i) {
                        U(t, "scope");
                        var s = n ? It.clone.call(e) : e;
                        o(r, function(e, t) {
                            s.data("$" + t + "Controller", e)
                        }), r = 0;
                        for (var l = s.length; r < l; r++) {
                            var c = s[r].nodeType;
                            1 !== c && 9 !== c || s.eq(r).data("$scope", t)
                        }
                        return n && n(s, t), a && a(t, s, s, i), s
                    }
            }

            function E(e, t) {
                try {
                    e.addClass(t)
                } catch (e) {}
            }

            function P(e, t, r, i, o, a) {
                for (var s, l, c, u, f = [], d = 0; d < e.length; d++) s = new Y, l = D(e[d], [], s, 0 === d ? i : n, o), (a = l.length ? L(l, e[d], s, t, r, null, [], [], a) : null) && a.scope && E(s.$$element, "ng-scope"), s = a && a.terminal || !(c = e[d].childNodes) || !c.length ? null : P(c, a ? (a.transcludeOnThisElement || !a.templateOnThisElement) && a.transclude : t), f.push(a, s), u = u || a || s, a = null;
                return u ? function(e, r, i, o) {
                    var a, s, l, c, u, d, p;
                    a = r.length;
                    var h = Array(a);
                    for (c = 0; c < a; c++) h[c] = r[c];
                    for (d = c = 0, u = f.length; c < u; d++) s = h[d], r = f[c++], a = f[c++], r ? (r.scope ? (l = e.$new(), nt.data(s, "$scope", l)) : l = e, p = r.transcludeOnThisElement ? O(e, r.transclude, o) : !r.templateOnThisElement && o ? o : !o && t ? O(e, t) : null, r(a, l, s, i, p)) : a && a(e, s.childNodes, n, o)
                } : null
            }

            function O(e, t, n) {
                return function(r, i, o) {
                    var a = !1;
                    return r || (r = e.$new(), a = r.$$transcluded = !0), i = t(r, i, o, n), a && i.on("$destroy", function() {
                        r.$destroy()
                    }), i
                }
            }

            function D(e, t, n, r, i) {
                var o, a = n.$attr;
                switch (e.nodeType) {
                    case 1:
                        B(t, ge(ot(e).toLowerCase()), "E", r, i);
                        for (var s, u, f, d = e.attributes, p = 0, h = d && d.length; p < h; p++) {
                            var g = !1,
                                m = !1;
                            if (s = d[p], !tt || 8 <= tt || s.specified) {
                                o = s.name, u = vt(s.value), s = ge(o), (f = Z.test(s)) && (o = q(s.substr(6), "-"));
                                s === s.replace(/(Start|End)$/, "") + "Start" && (g = o, m = o.substr(0, o.length - 5) + "end", o = o.substr(0, o.length - 6)), a[s = ge(o.toLowerCase())] = o, !f && n.hasOwnProperty(s) || (n[s] = u, ce(e, s) && (n[s] = !0)), z(e, t, u, s), B(t, s, "A", r, i, g, m)
                            }
                        }
                        if (e = e.className, y(e) && "" !== e)
                            for (; o = c.exec(e);) s = ge(o[2]), B(t, s, "C", r, i) && (n[s] = vt(o[3])), e = e.substr(o.index + o[0].length);
                        break;
                    case 3:
                        V(t, e.nodeValue);
                        break;
                    case 8:
                        try {
                            (o = l.exec(e.nodeValue)) && (s = ge(o[1]), B(t, s, "M", r, i) && (n[s] = vt(o[2])))
                        } catch (e) {}
                }
                return t.sort(function(e, t) {
                    var n = t.priority - e.priority;
                    return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                }), t
            }

            function I(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t))
                    do {
                        if (!e) throw Ht("uterdir", t, n);
                        1 == e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (0 < i);
                else r.push(e);
                return nt(r)
            }

            function _(e, t, n) {
                return function(r, i, o, a, s) {
                    return i = I(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function L(e, i, a, l, c, u, f, d, p) {
                function h(e, t, n, r) {
                    e && (n && (e = _(e, n, r)), e.require = k.require, e.directiveName = T, (B === k || k.$$isolateScope) && (e = G(e, {
                        isolateScope: !0
                    })), f.push(e)), t && (n && (t = _(t, n, r)), t.require = k.require, t.directiveName = T, (B === k || k.$$isolateScope) && (t = G(t, {
                        isolateScope: !0
                    })), d.push(t))
                }

                function g(e, t, n, r) {
                    var i, a = "data",
                        s = !1;
                    if (y(t)) {
                        for (;
                            "^" == (i = t.charAt(0)) || "?" == i;) t = t.substr(1), "^" == i && (a = "inheritedData"), s = s || "?" == i;
                        if (i = null, r && "data" === a && (i = r[t]), !(i = i || n[a]("$" + t + "Controller")) && !s) throw Ht("ctreq", t, e)
                    } else mt(t) && (i = [], o(t, function(t) {
                        i.push(g(e, t, n, r))
                    }));
                    return i
                }

                function x(e, t, l, c, u) {
                    var p, h, b, y, x, w, $, k = {};
                    if (p = i === l ? a : A(a, new Y(nt(l), a.$attr)), h = p.$$element, B) {
                        var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        w = t.$new(!0), !q || q !== B && q !== B.$$originalDirective ? h.data("$isolateScopeNoTemplate", w) : h.data("$isolateScope", w), E(h, "ng-isolate-scope"), o(B.scope, function(e, n) {
                            var i, o, a, s, l = (u = e.match(T) || [])[3] || n,
                                c = "?" == u[2],
                                u = u[1];
                            switch (w.$$isolateBindings[n] = u + l, u) {
                                case "@":
                                    p.$observe(l, function(e) {
                                        w[n] = e
                                    }), p.$$observers[l].$$scope = t, p[l] && (w[n] = r(p[l])(t));
                                    break;
                                case "=":
                                    if (c && !p[l]) break;
                                    o = m(p[l]), s = o.literal ? N : function(e, t) {
                                        return e === t || e != e && t != t
                                    }, a = o.assign || function() {
                                        throw i = w[n] = o(t), Ht("nonassign", p[l], B.name)
                                    }, i = w[n] = o(t), w.$watch(function() {
                                        var e = o(t);
                                        return s(e, w[n]) || (s(e, i) ? a(t, e = w[n]) : w[n] = e), i = e
                                    }, null, o.literal);
                                    break;
                                case "&":
                                    o = m(p[l]), w[n] = function(e) {
                                        return o(t, e)
                                    };
                                    break;
                                default:
                                    throw Ht("iscp", B.name, n, e)
                            }
                        })
                    }
                    for ($ = u && function(e, t) {
                            var r;
                            return 2 > arguments.length && (t = e, e = n), X && (r = k), u(e, t, r)
                        }, L && o(L, function(e) {
                            var n, r = {
                                $scope: e === B || e.$$isolateScope ? w : t,
                                $element: h,
                                $attrs: p,
                                $transclude: $
                            };
                            "@" == (x = e.controller) && (x = p[e.name]), n = v(x, r), k[e.name] = n, X || h.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
                        }), c = 0, b = f.length; c < b; c++) try {
                        (y = f[c])(y.isolateScope ? w : t, h, p, y.require && g(y.directiveName, y.require, h, k), $)
                    } catch (e) {
                        s(e, M(h))
                    }
                    for (c = t, B && (B.template || null === B.templateUrl) && (c = w), e && e(c, l.childNodes, n, u), c = d.length - 1; 0 <= c; c--) try {
                        (y = d[c])(y.isolateScope ? w : t, h, p, y.require && g(y.directiveName, y.require, h, k), $)
                    } catch (e) {
                        s(e, M(h))
                    }
                }
                p = p || {};
                for (var w, k, T, S, P, O = -Number.MAX_VALUE, L = p.controllerDirectives, B = p.newIsolateScopeDirective, q = p.templateDirective, U = p.nonTlbTranscludeDirective, V = !1, z = !1, X = p.hasElementTranscludeDirective, Q = a.$$element = nt(i), Z = l, ee = 0, te = e.length; ee < te; ee++) {
                    var ne = (k = e[ee]).$$start,
                        re = k.$$end;
                    if (ne && (Q = I(i, ne, re)), S = n, O > k.priority) break;
                    if ((S = k.scope) && (w = w || k, k.templateUrl || (H("new/isolated scope", B, k, Q), b(S) && (B = k))), T = k.name, !k.templateUrl && k.controller && (S = k.controller, L = L || {}, H("'" + T + "' controller", L[T], k, Q), L[T] = k), (S = k.transclude) && (V = !0, k.$$tlb || (H("transclusion", U, k, Q), U = k), "element" == S ? (X = !0, O = k.priority, S = Q, Q = a.$$element = nt(t.createComment(" " + T + ": " + a[T] + " ")), i = Q[0], W(c, ut.call(S, 0), i), Z = C(S, l, O, u && u.name, {
                            nonTlbTranscludeDirective: U
                        })) : (S = nt(K(i)).contents(), Q.empty(), Z = C(S, l))), k.template)
                        if (z = !0, H("template", q, k, Q), q = k, S = $(k.template) ? k.template(Q, a) : k.template, S = J(S), k.replace) {
                            if (u = k, S = Nt.test(S) ? nt(vt(S)) : [], i = S[0], 1 != S.length || 1 !== i.nodeType) throw Ht("tplrt", T, "");
                            W(c, Q, i), S = D(i, [], te = {
                                $attr: {}
                            });
                            var ie = e.splice(ee + 1, e.length - (ee + 1));
                            B && F(S), e = e.concat(S).concat(ie), R(a, te), te = e.length
                        } else Q.html(S);
                    if (k.templateUrl) z = !0, H("template", q, k, Q), q = k, k.replace && (u = k), x = j(e.splice(ee, e.length - ee), Q, a, c, V && Z, f, d, {
                        controllerDirectives: L,
                        newIsolateScopeDirective: B,
                        templateDirective: q,
                        nonTlbTranscludeDirective: U
                    }), te = e.length;
                    else if (k.compile) try {
                        $(P = k.compile(Q, a, Z)) ? h(null, P, ne, re) : P && h(P.pre, P.post, ne, re)
                    } catch (e) {
                        s(e, M(Q))
                    }
                    k.terminal && (x.terminal = !0, O = Math.max(O, k.priority))
                }
                return x.scope = w && !0 === w.scope, x.transcludeOnThisElement = V, x.templateOnThisElement = z, x.transclude = Z, p.hasElementTranscludeDirective = X, x
            }

            function F(e) {
                for (var t = 0, n = e.length; t < n; t++) e[t] = d(e[t], {
                    $$isolateScope: !0
                })
            }

            function B(t, r, o, l, c, u, f) {
                if (r === c) return null;
                if (c = null, i.hasOwnProperty(r))
                    for (var p, h = 0, g = (r = e.get(r + a)).length; h < g; h++) try {
                        p = r[h], (l === n || l > p.priority) && -1 != p.restrict.indexOf(o) && (u && (p = d(p, {
                            $$start: u,
                            $$end: f
                        })), t.push(p), c = p)
                    } catch (e) {
                        s(e)
                    }
                return c
            }

            function R(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    i = e.$$element;
                o(e, function(r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function(t, o) {
                    "class" == o ? (E(i, t), e.class = (e.class ? e.class + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                })
            }

            function j(e, t, n, r, i, a, s, l) {
                var c, f, d = [],
                    h = t[0],
                    m = e.shift(),
                    v = u({}, m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    y = $(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl;
                return t.empty(), p.get(k.getTrustedResourceUrl(y), {
                        cache: g
                    }).success(function(u) {
                        var p, g;
                        if (u = J(u), m.replace) {
                            if (u = Nt.test(u) ? nt(vt(u)) : [], p = u[0], 1 != u.length || 1 !== p.nodeType) throw Ht("tplrt", m.name, y);
                            u = {
                                $attr: {}
                            }, W(r, t, p);
                            $ = D(p, [], u);
                            b(m.scope) && F($), e = $.concat(e), R(n, u)
                        } else p = h, t.html(u);
                        for (e.unshift(v), c = L(e, p, n, i, t, m, a, s, l), o(r, function(e, n) {
                                e == p && (r[n] = t[0])
                            }), f = P(t[0].childNodes, i); d.length;) {
                            u = d.shift(), g = d.shift();
                            var x = d.shift(),
                                w = d.shift(),
                                $ = t[0];
                            if (g !== h) {
                                var k = g.className;
                                l.hasElementTranscludeDirective && m.replace || ($ = K(p)), W(x, nt(g), $), E(nt($), k)
                            }
                            g = c.transcludeOnThisElement ? O(u, c.transclude, w) : w, c(f, u, $, r, g)
                        }
                        d = null
                    }).error(function(e, t, n, r) {
                        throw Ht("tpload", r.url)
                    }),
                    function(e, t, n, r, i) {
                        e = i, d ? (d.push(t), d.push(n), d.push(r), d.push(e)) : (c.transcludeOnThisElement && (e = O(t, c.transclude, i)), c(f, t, n, r, e))
                    }
            }

            function H(e, t, n, r) {
                if (t) throw Ht("multidir", t.name, n.name, e, M(r))
            }

            function V(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        var t = e.parent().length;
                        return t && E(e.parent(), "ng-binding"),
                            function(e, r) {
                                var i = r.parent(),
                                    o = i.data("$binding") || [];
                                o.push(n), i.data("$binding", o), t || E(i, "ng-binding"), e.$watch(n, function(e) {
                                    r[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function z(e, t, n, i) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "SELECT" === ot(e)) throw Ht("selmulti", M(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, n, a) {
                                    if (n = a.$$observers || (a.$$observers = {}), f.test(i)) throw Ht("nodomevents");
                                    (o = r(a[i], !0, function(e, t) {
                                        if ("srcdoc" == t) return k.HTML;
                                        var n = ot(e);
                                        return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? k.RESOURCE_URL : void 0
                                    }(e, i))) && (a[i] = o(t), (n[i] || (n[i] = [])).$$inter = !0, (a.$$observers && a.$$observers[i].$$scope || t).$watch(o, function(e, t) {
                                        "class" === i && e != t ? a.$updateClass(e, t) : a.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function W(e, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    l = a.parentNode;
                if (e)
                    for (i = 0, o = e.length; i < o; i++)
                        if (e[i] == a) {
                            e[i++] = r, o = i + s - 1;
                            for (var c = e.length; i < c; i++, o++) o < c ? e[i] = e[o] : delete e[i];
                            e.length -= s - 1;
                            break
                        }
                for (l && l.replaceChild(r, a), (e = t.createDocumentFragment()).appendChild(a), r[nt.expando] = a[nt.expando], a = 1, s = n.length; a < s; a++) l = n[a], nt(l).remove(), e.appendChild(l), delete n[a];
                n[0] = r, n.length = 1
            }

            function G(e, t) {
                return u(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }
            var Y = function(e, t) {
                this.$$element = e, this.$attr = t || {}
            };
            Y.prototype = {
                $normalize: ge,
                $addClass: function(e) {
                    e && 0 < e.length && T.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && T.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = me(e, t),
                        r = me(t, e);
                    0 === n.length ? T.removeClass(this.$$element, r) : 0 === r.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, r)
                },
                $set: function(e, t, r, i) {
                    var a = ce(this.$$element[0], e);
                    a && (this.$$element.prop(e, t), i = a), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = q(e, "-")), ("A" === (a = ot(this.$$element)) && "href" === e || "IMG" === a && "src" === e) && (this[e] = t = S(t, "src" === e)), !1 !== r && (null === t || t === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, t)), (r = this.$$observers) && o(r[e], function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            s(e)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = {}),
                        i = r[e] || (r[e] = []);
                    return i.push(t), x.$evalAsync(function() {
                        i.$$inter || t(n[e])
                    }), t
                }
            };
            var X = r.startSymbol(),
                Q = r.endSymbol(),
                J = "{{" == X || "}}" == Q ? h : function(e) {
                    return e.replace(/\{\{/g, X).replace(/}}/g, Q)
                },
                Z = /^ngAttr[A-Z]/;
            return C
        }]
    }

    function ge(e) {
        return G(e.replace(Vt, ""))
    }

    function me(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/),
            o = 0;
        e: for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a == i[s]) continue e;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function ve(e) {
        var t, n, r, i = {};
        return e ? (o(e.split("\n"), function(e) {
            r = e.indexOf(":"), t = st(vt(e.substr(0, r))), n = vt(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
        }), i) : i
    }

    function be(e) {
        var t = b(e) ? e : n;
        return function(n) {
            return t || (t = ve(e)), n ? t[st(n)] || null : t
        }
    }

    function ye(e, t, n) {
        return $(n) ? n(e, t) : (o(n, function(n) {
            e = n(e, t)
        }), e)
    }

    function xe(e) {
        for (var t = (e = e.split("/")).length; t--;) e[t] = B(e[t]);
        return e.join("/")
    }

    function we(e, t, n) {
        e = Be(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = f(e.port) || Gt[e.protocol] || null
    }

    function $e(e, t, n) {
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e), e = Be(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = L(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function ke(e, t) {
        if (0 === t.indexOf(e)) return t.substr(e.length)
    }

    function Te(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Se(e) {
        return e.substr(0, Te(e).lastIndexOf("/") + 1)
    }

    function Ce(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = Se(e);
        we(e, this, e), this.$$parse = function(t) {
            var n = ke(r, t);
            if (!y(n)) throw Yt("ipthprfx", t, r);
            $e(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = F(this.$$search),
                t = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = xe(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(i, o) {
            var a, s;
            return (a = ke(e, i)) !== n ? (s = a, s = (a = ke(t, a)) !== n ? r + (ke("/", a) || a) : e + s) : (a = ke(r, i)) !== n ? s = r + a : r == i + "/" && (s = r), s && this.$$parse(s), !!s
        }
    }

    function Ee(e, t) {
        var n = Se(e);
        we(e, this, e), this.$$parse = function(r) {
            var i = ke(e, r) || ke(n, r);
            if (!y(i = "#" == i.charAt(0) ? ke(t, i) : this.$$html5 ? i : "")) throw Yt("ihshprfx", r, t);
            $e(i, this, e), r = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === i.indexOf(e) && (i = i.replace(e, "")), o.exec(i) || (r = (i = o.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function() {
            var n = F(this.$$search),
                r = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = xe(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }, this.$$parseLinkUrl = function(t, n) {
            return Te(e) == Te(t) && (this.$$parse(t), !0)
        }
    }

    function Ae(e, t) {
        this.$$html5 = !0, Ee.apply(this, arguments);
        var n = Se(e);
        this.$$parseLinkUrl = function(r, i) {
            var o, a;
            return e == Te(r) ? o = r : (a = ke(n, r)) ? o = e + t + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var n = F(this.$$search),
                r = this.$$hash ? "#" + B(this.$$hash) : "";
            this.$$url = xe(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
        }
    }

    function Ne(e) {
        return function() {
            return this[e]
        }
    }

    function Pe(e, t) {
        return function(n) {
            return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Oe(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Kt("isecfld", t);
        return e
    }

    function De(e, t) {
        if (e) {
            if (e.constructor === e) throw Kt("isecfn", t);
            if (e.document && e.location && e.alert && e.setInterval) throw Kt("isecwindow", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Kt("isecdom", t);
            if (e === Object) throw Kt("isecobj", t)
        }
        return e
    }

    function Ie(e, t, r, i, o) {
        De(e, i), o = o || {}, t = t.split(".");
        for (var a, s = 0; 1 < t.length; s++) {
            var l = De(e[a = Oe(t.shift(), i)], i);
            l || (l = {}, e[a] = l), (e = l).then && o.unwrapPromises && (Xt(i), "$$v" in e || function(e) {
                e.then(function(t) {
                    e.$$v = t
                })
            }(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
        }
        return a = Oe(t.shift(), i), De(e[a], i), e[a] = r
    }

    function Me(e) {
        return "constructor" == e
    }

    function _e(e, t, r, i, o, a, s) {
        Oe(e, a), Oe(t, a), Oe(r, a), Oe(i, a), Oe(o, a);
        var l = function(e) {
                return De(e, a)
            },
            c = s.expensiveChecks,
            u = c || Me(e) ? l : h,
            f = c || Me(t) ? l : h,
            d = c || Me(r) ? l : h,
            p = c || Me(i) ? l : h,
            g = c || Me(o) ? l : h;
        return s.unwrapPromises ? function(s, l) {
            var c, h = l && l.hasOwnProperty(e) ? l : s;
            return null == h ? h : ((h = u(h[e])) && h.then && (Xt(a), "$$v" in h || (c = h, c.$$v = n, c.then(function(e) {
                c.$$v = u(e)
            })), h = u(h.$$v)), t ? null == h ? n : ((h = f(h[t])) && h.then && (Xt(a), "$$v" in h || (c = h, c.$$v = n, c.then(function(e) {
                c.$$v = f(e)
            })), h = f(h.$$v)), r ? null == h ? n : ((h = d(h[r])) && h.then && (Xt(a), "$$v" in h || (c = h, c.$$v = n, c.then(function(e) {
                c.$$v = d(e)
            })), h = d(h.$$v)), i ? null == h ? n : ((h = p(h[i])) && h.then && (Xt(a), "$$v" in h || (c = h, c.$$v = n, c.then(function(e) {
                c.$$v = p(e)
            })), h = p(h.$$v)), o ? null == h ? n : ((h = g(h[o])) && h.then && (Xt(a), "$$v" in h || (c = h, c.$$v = n, c.then(function(e) {
                c.$$v = g(e)
            })), h = g(h.$$v)), h) : h) : h) : h) : h)
        } : function(a, s) {
            var l = s && s.hasOwnProperty(e) ? s : a;
            return null == l ? l : (l = u(l[e]), t ? null == l ? n : (l = f(l[t]), r ? null == l ? n : (l = d(l[r]), i ? null == l ? n : (l = p(l[i]), o ? null == l ? n : l = g(l[o]) : l) : l) : l) : l)
        }
    }

    function Le(e, t, r) {
        var i = t.expensiveChecks,
            a = i ? sn : an;
        if (a.hasOwnProperty(e)) return a[e];
        var s, l = e.split("."),
            c = l.length;
        if (t.csp) s = 6 > c ? _e(l[0], l[1], l[2], l[3], l[4], r, t) : function(e, i) {
            var o, a = 0;
            do {
                o = _e(l[a++], l[a++], l[a++], l[a++], l[a++], r, t)(e, i), i = n, e = o
            } while (a < c);
            return o
        };
        else {
            var u = "var p;\n";
            i && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(l, function(e, n) {
                Oe(e, r);
                var o = (n ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]',
                    a = i || Me(e);
                a && (o = "eso(" + o + ", fe)", f = !0), u += "if(s == null) return undefined;\ns=" + o + ";\n", t.unwrapPromises && (u += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (a ? "eso(v)" : "v") + ";});\n}\n s=" + (a ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            }), u += "return s;", (s = new Function("s", "l", "pw", "eso", "fe", u)).toString = g(u), (f || t.unwrapPromises) && (s = function(e, t) {
                return function(n, r) {
                    return e(n, r, Xt, De, t)
                }
            }(s, r))
        }
        return "hasOwnProperty" !== e && (a[e] = s), s
    }

    function Fe(e) {
        var t = [];
        return v(e) && o(e, function(e) {
            t.push(function(e) {
                if ("self" === e) return e;
                if (y(e)) {
                    if (-1 < e.indexOf("***")) throw ln("iwcard", e);
                    return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + e + "$")
                }
                if (k(e)) return RegExp("^" + e.source + "$");
                throw ln("imatcher")
            }(e))
        }), t
    }

    function Be(e, t) {
        var n = e;
        return tt && (un.setAttribute("href", n), n = un.href), un.setAttribute("href", n), {
            href: un.href,
            protocol: un.protocol ? un.protocol.replace(/:$/, "") : "",
            host: un.host,
            search: un.search ? un.search.replace(/^\?/, "") : "",
            hash: un.hash ? un.hash.replace(/^#/, "") : "",
            hostname: un.hostname,
            port: un.port,
            pathname: "/" === un.pathname.charAt(0) ? un.pathname : "/" + un.pathname
        }
    }

    function Re(e) {
        return (e = y(e) ? Be(e) : e).protocol === fn.protocol && e.host === fn.host
    }

    function je(e) {
        function t(r, i) {
            if (b(r)) {
                var a = {};
                return o(r, function(e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", qe), t("date", Ge), t("filter", function() {
            return function(e, t, n) {
                if (!mt(e)) return e;
                var r = typeof n,
                    i = [];
                i.check = function(e) {
                    for (var t = 0; t < i.length; t++)
                        if (!i[t](e)) return !1;
                    return !0
                }, "function" !== r && (n = "boolean" === r && n ? function(e, t) {
                    return ht.equals(e, t)
                } : function(e, t) {
                    if (e && t && "object" == typeof e && "object" == typeof t) {
                        for (var r in e)
                            if ("$" !== r.charAt(0) && lt.call(e, r) && n(e[r], t[r])) return !0;
                        return !1
                    }
                    return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
                });
                var o = function(e, t) {
                    if ("string" == typeof t && "!" === t.charAt(0)) return !o(e, t.substr(1));
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                            return n(e, t);
                        case "object":
                            switch (typeof t) {
                                case "object":
                                    return n(e, t);
                                default:
                                    for (var r in e)
                                        if ("$" !== r.charAt(0) && o(e[r], t)) return !0
                            }
                            return !1;
                        case "array":
                            for (r = 0; r < e.length; r++)
                                if (o(e[r], t)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "string":
                        t = {
                            $: t
                        };
                    case "object":
                        for (var a in t) ! function(e) {
                            void 0 !== t[e] && i.push(function(n) {
                                return o("$" == e ? n : n && n[e], t[e])
                            })
                        }(a);
                        break;
                    case "function":
                        i.push(t);
                        break;
                    default:
                        return e
                }
                for (r = [], a = 0; a < e.length; a++) {
                    var s = e[a];
                    i.check(s) && r.push(s)
                }
                return r
            }
        }), t("json", function() {
            return function(e) {
                return O(e, !0)
            }
        }), t("limitTo", function() {
            return function(e, t) {
                if (!mt(e) && !y(e)) return e;
                if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : f(t), y(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
                var n, r, i = [];
                for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (n = 0, r = t) : (n = e.length + t, r = e.length); n < r; n++) i.push(e[n]);
                return i
            }
        }), t("lowercase", mn), t("number", Ue), t("orderBy", Ye), t("uppercase", vn)
    }

    function qe(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return m(n) && (n = t.CURRENCY_SYM), He(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }

    function Ue(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return He(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function He(e, t, n, r, i) {
        if (null == e || !isFinite(e) || b(e)) return "";
        var o = 0 > e,
            a = (e = Math.abs(e)) + "",
            s = "",
            l = [],
            c = !1;
        if (-1 !== a.indexOf("e")) {
            (u = a.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == u[2] && u[3] > i + 1 ? (a = "0", e = 0) : (s = a, c = !0)
        }
        if (c) 0 < i && -1 < e && 1 > e && (s = e.toFixed(i));
        else {
            a = (a.split(dn)[1] || "").length, m(i) && (i = Math.min(Math.max(t.minFrac, a), t.maxFrac)), 0 === (e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i)) && (o = !1), a = (e = ("" + e).split(dn))[0], e = e[1] || "";
            var u = 0,
                f = t.lgSize,
                d = t.gSize;
            if (a.length >= f + d)
                for (u = a.length - f, c = 0; c < u; c++) 0 == (u - c) % d && 0 !== c && (s += n), s += a.charAt(c);
            for (c = u; c < a.length; c++) 0 == (a.length - c) % f && 0 !== c && (s += n), s += a.charAt(c);
            for (; e.length < i;) e += "0";
            i && "0" !== i && (s += r + e.substr(0, i))
        }
        return l.push(o ? t.negPre : t.posPre), l.push(s), l.push(o ? t.negSuf : t.posSuf), l.join("")
    }

    function Ve(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function ze(e, t, n, r) {
        return n = n || 0,
            function(i) {
                return i = i["get" + e](), (0 < n || i > -n) && (i += n), 0 === i && -12 == n && (i = 12), Ve(i, t, r)
            }
    }

    function We(e, t) {
        return function(n, r) {
            var i = n["get" + e]();
            return r[ct(t ? "SHORT" + e : e)][i]
        }
    }

    function Ge(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                e = new Date(0);
                var r = 0,
                    i = 0,
                    o = t[8] ? e.setUTCFullYear : e.setFullYear,
                    a = t[8] ? e.setUTCHours : e.setHours;
                t[9] && (r = f(t[9] + t[10]), i = f(t[9] + t[11])), o.call(e, f(t[1]), f(t[2]) - 1, f(t[3])), r = f(t[4] || 0) - r, i = f(t[5] || 0) - i, o = f(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), a.call(e, r, i, o, t)
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r) {
            var i, a, s = "",
                l = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, y(n) && (n = gn.test(n) ? f(n) : t(n)), x(n) && (n = new Date(n)), !w(n)) return n;
            for (; r;)(a = hn.exec(r)) ? (l = l.concat(ut.call(a, 1)), r = l.pop()) : (l.push(r), r = null);
            return o(l, function(t) {
                i = pn[t], s += i ? i(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), s
        }
    }

    function Ye(e) {
        return function(t, n, r) {
            function a(e, t) {
                return I(t) ? function(t, n) {
                    return e(n, t)
                } : e
            }

            function s(e, t) {
                var n = typeof e,
                    r = typeof t;
                return n == r ? (w(e) && w(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
            }
            return i(t) ? (0 === (n = mt(n) ? n : [n]).length && (n = ["+"]), n = function(e, t, n) {
                var r = [];
                return o(e, function(e, i, o) {
                    r.push(t.call(n, e, i, o))
                }), r
            }(n, function(t) {
                var n = !1,
                    r = t || h;
                if (y(t)) {
                    if ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return a(function(e, t) {
                        return s(e, t)
                    }, n);
                    if ((r = e(t)).constant) {
                        var i = r();
                        return a(function(e, t) {
                            return s(e[i], t[i])
                        }, n)
                    }
                }
                return a(function(e, t) {
                    return s(r(e), r(t))
                }, n)
            }), ut.call(t).sort(a(function(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](e, t);
                    if (0 !== i) return i
                }
                return 0
            }, r))) : t
        }
    }

    function Xe(e) {
        return $(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", g(e)
    }

    function Ke(e, t, n, r) {
        function i(t, n) {
            n = n ? "-" + q(n, "-") : "", r.setClass(e, (t ? Pn : On) + n, (t ? On : Pn) + n)
        }
        var a = this,
            s = e.parent().controller("form") || xn,
            l = 0,
            c = a.$error = {},
            u = [];
        a.$name = t.name || t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(a), e.addClass(Dn), i(!0), a.$addControl = function(e) {
            V(e.$name, "input"), u.push(e), e.$name && (a[e.$name] = e)
        }, a.$removeControl = function(e) {
            e.$name && a[e.$name] === e && delete a[e.$name], o(c, function(t, n) {
                a.$setValidity(n, !0, e)
            }), C(u, e)
        }, a.$setValidity = function(e, t, n) {
            var r = c[e];
            if (t) r && (C(r, n), r.length || (--l || (i(t), a.$valid = !0, a.$invalid = !1), c[e] = !1, i(!0, e), s.$setValidity(e, !0, a)));
            else {
                if (l || i(t), r) {
                    if (-1 != S(r, n)) return
                } else c[e] = r = [], l++, i(!1, e), s.$setValidity(e, !1, a);
                r.push(n), a.$valid = !1, a.$invalid = !0
            }
        }, a.$setDirty = function() {
            r.removeClass(e, Dn), r.addClass(e, In), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
        }, a.$setPristine = function() {
            r.removeClass(e, In), r.addClass(e, Dn), a.$dirty = !1, a.$pristine = !0, o(u, function(e) {
                e.$setPristine()
            })
        }
    }

    function Qe(e, t, r, i) {
        return e.$setValidity(t, r), r ? i : n
    }

    function Je(e, t) {
        var n, r;
        if (t)
            for (n = 0; n < t.length; ++n)
                if (r = t[n], e[r]) return !0;
        return !1
    }

    function Ze(e, t, n, i, o, a) {
        var s = t.prop(at),
            l = t[0].placeholder,
            c = {},
            u = st(t[0].type);
        if (i.$$validityState = s, !o.android) {
            var d = !1;
            t.on("compositionstart", function(e) {
                d = !0
            }), t.on("compositionend", function() {
                d = !1, p()
            })
        }
        var p = function(r) {
            if (!d) {
                var o = t.val();
                tt && "input" === (r || c).type && t[0].placeholder !== l ? l = t[0].placeholder : ("password" !== u && I(n.ngTrim || "T") && (o = vt(o)), r = s && i.$$hasNativeValidators, (i.$viewValue !== o || "" === o && r) && (e.$root.$$phase ? i.$setViewValue(o) : e.$apply(function() {
                    i.$setViewValue(o)
                })))
            }
        };
        if (o.hasEvent("input")) t.on("input", p);
        else {
            var h, g = function() {
                h || (h = a.defer(function() {
                    p(), h = null
                }))
            };
            t.on("keydown", function(e) {
                91 === (e = e.keyCode) || 15 < e && 19 > e || 37 <= e && 40 >= e || g()
            }), o.hasEvent("paste") && t.on("paste cut", g)
        }
        t.on("change", p), i.$render = function() {
            t.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
        };
        var m = n.ngPattern;
        if (m && ((o = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(o[1], o[2]), o = function(e) {
                return Qe(i, "pattern", i.$isEmpty(e) || m.test(e), e)
            }) : o = function(n) {
                var o = e.$eval(m);
                if (!o || !o.test) throw r("ngPattern")("noregexp", m, o, M(t));
                return Qe(i, "pattern", i.$isEmpty(n) || o.test(n), n)
            }, i.$formatters.push(o), i.$parsers.push(o)), n.ngMinlength) {
            var v = f(n.ngMinlength);
            o = function(e) {
                return Qe(i, "minlength", i.$isEmpty(e) || e.length >= v, e)
            }, i.$parsers.push(o), i.$formatters.push(o)
        }
        if (n.ngMaxlength) {
            var b = f(n.ngMaxlength);
            o = function(e) {
                return Qe(i, "maxlength", i.$isEmpty(e) || e.length <= b, e)
            }, i.$parsers.push(o), i.$formatters.push(o)
        }
    }

    function et(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [],
                    r = 0;
                e: for (; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)
                        if (i == t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                if (!mt(e)) {
                    if (y(e)) return e.split(" ");
                    if (b(e)) {
                        var t = [];
                        return o(e, function(e, n) {
                            e && (t = t.concat(n.split(" ")))
                        }), t
                    }
                }
                return e
            }
            return {
                restrict: "AC",
                link: function(a, s, l) {
                    function c(e, t) {
                        var n = s.data("$classCounts") || {},
                            r = [];
                        return o(e, function(e) {
                            (0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && r.push(e))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function u(e) {
                        if (!0 === t || a.$index % 2 === t) {
                            d = i(e || []);
                            if (f) {
                                if (!N(e, f)) {
                                    var o = i(f),
                                        u = r(d, o),
                                        d = c(d = r(o, d), -1);
                                    0 === (u = c(u, 1)).length ? n.removeClass(s, d) : 0 === d.length ? n.addClass(s, u) : n.setClass(s, u, d)
                                }
                            } else {
                                u = c(d, 1);
                                l.$addClass(u)
                            }
                        }
                        f = A(e)
                    }
                    var f;
                    a.$watch(l[e], u, !0), l.$observe("class", function(t) {
                        u(a.$eval(l[e]))
                    }), "ngClass" !== e && a.$watch("$index", function(n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(l[e]));
                            o === t ? (o = c(s, 1), l.$addClass(o)) : (o = c(s, -1), l.$removeClass(o))
                        }
                    })
                }
            }
        }]
    }
    var tt, nt, rt, it, ot, at = "validity",
        st = function(e) {
            return y(e) ? e.toLowerCase() : e
        },
        lt = Object.prototype.hasOwnProperty,
        ct = function(e) {
            return y(e) ? e.toUpperCase() : e
        },
        ut = [].slice,
        ft = [].push,
        dt = Object.prototype.toString,
        pt = r("ng"),
        ht = e.angular || (e.angular = {}),
        gt = ["0", "0", "0"];
    tt = f((/msie (\d+)/.exec(st(navigator.userAgent)) || [])[1]), isNaN(tt) && (tt = f((/trident\/.*; rv:(\d+)/.exec(st(navigator.userAgent)) || [])[1])), p.$inject = [], h.$inject = [];
    var mt = $(Array.isArray) ? Array.isArray : function(e) {
            return "[object Array]" === dt.call(e)
        },
        vt = String.prototype.trim ? function(e) {
            return y(e) ? e.trim() : e
        } : function(e) {
            return y(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
        };
    ot = 9 > tt ? function(e) {
        return (e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? ct(e.scopeName + ":" + e.nodeName) : e.nodeName
    } : function(e) {
        return e.nodeName ? e.nodeName : e[0].nodeName
    };
    var bt = function() {
            if (v(bt.isActive_)) return bt.isActive_;
            var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
            if (!e) try {
                new Function("")
            } catch (t) {
                e = !0
            }
            return bt.isActive_ = e
        },
        yt = /[A-Z]/g,
        xt = {
            full: "1.2.28",
            major: 1,
            minor: 2,
            dot: 28,
            codeName: "finnish-disembarkation"
        };
    X.expando = "ng339";
    var wt = X.cache = {},
        $t = 1,
        kt = e.document.addEventListener ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : function(e, t, n) {
            e.attachEvent("on" + t, n)
        },
        Tt = e.document.removeEventListener ? function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent("on" + t, n)
        };
    X._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var St = /([\:\-\_]+(.))/g,
        Ct = /^moz([A-Z])/,
        Et = r("jqLite"),
        At = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Nt = /<|&#?\w+;/,
        Pt = /<([\w:]+)/,
        Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Dt = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Dt.optgroup = Dt.option, Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead, Dt.th = Dt.td;
    var It = X.prototype = {
            ready: function(n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), X(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return o(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return nt(0 <= e ? this[e] : this[this.length + e])
            },
            length: 0,
            push: ft,
            sort: [].sort,
            splice: [].splice
        },
        Mt = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        Mt[st(e)] = e
    });
    var _t = {};
    o("input select option textarea button form details".split(" "), function(e) {
        _t[ct(e)] = !0
    }), o({
        data: te,
        removeData: Z
    }, function(e, t) {
        X[t] = e
    }), o({
        data: te,
        inheritedData: se,
        scope: function(e) {
            return nt.data(e, "$scope") || se(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return nt.data(e, "$isolateScope") || nt.data(e, "$isolateScopeNoTemplate")
        },
        controller: ae,
        injector: function(e) {
            return se(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: ne,
        css: function(e, t, r) {
            if (t = G(t), !v(r)) {
                var i;
                return 8 >= tt && "" === (i = e.currentStyle && e.currentStyle[t]) && (i = "auto"), i = i || e.style[t], 8 >= tt && (i = "" === i ? n : i), i
            }
            e.style[t] = r
        },
        attr: function(e, t, r) {
            var i = st(t);
            if (Mt[i]) {
                if (!v(r)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? i : n;
                r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
            } else if (v(r)) e.setAttribute(t, r);
            else if (e.getAttribute) return null === (e = e.getAttribute(t, 2)) ? n : e
        },
        prop: function(e, t, n) {
            if (!v(n)) return e[t];
            e[t] = n
        },
        text: function() {
            function e(e, n) {
                var r = t[e.nodeType];
                if (m(n)) return r ? e[r] : "";
                e[r] = n
            }
            var t = [];
            return 9 > tt ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
        }(),
        val: function(e, t) {
            if (m(t)) {
                if ("SELECT" === ot(e) && e.multiple) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            if (m(t)) return e.innerHTML;
            for (var n = 0, r = e.childNodes; n < r.length; n++) Q(r[n]);
            e.innerHTML = t
        },
        empty: le
    }, function(e, t) {
        X.prototype[t] = function(t, r) {
            var i, o, a = this.length;
            if (e !== le && (2 == e.length && e !== ne && e !== ae ? t : r) === n) {
                if (b(t)) {
                    for (i = 0; i < a; i++)
                        if (e === te) e(this[i], t);
                        else
                            for (o in t) e(this[i], o, t[o]);
                    return this
                }
                for (a = (i = e.$dv) === n ? Math.min(a, 1) : a, o = 0; o < a; o++) {
                    var s = e(this[o], t, r);
                    i = i ? i + s : s
                }
                return i
            }
            for (i = 0; i < a; i++) e(this[i], t, r);
            return this
        }
    }), o({
        removeData: Z,
        dealoc: Q,
        on: function e(n, r, i, a) {
            if (v(a)) throw Et("onargs");
            var s = ee(n, "events"),
                l = ee(n, "handle");
            s || ee(n, "events", s = {}), l || ee(n, "handle", l = function(e, n) {
                var r = function(r, i) {
                    if (r.preventDefault || (r.preventDefault = function() {
                            r.returnValue = !1
                        }), r.stopPropagation || (r.stopPropagation = function() {
                            r.cancelBubble = !0
                        }), r.target || (r.target = r.srcElement || t), m(r.defaultPrevented)) {
                        var a = r.preventDefault;
                        r.preventDefault = function() {
                            r.defaultPrevented = !0, a.call(r)
                        }, r.defaultPrevented = !1
                    }
                    r.isDefaultPrevented = function() {
                        return r.defaultPrevented || !1 === r.returnValue
                    }, o(A(n[i || r.type] || []), function(t) {
                        t.call(e, r)
                    }), 8 >= tt ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
                };
                return r.elem = e, r
            }(n, s)), o(r.split(" "), function(r) {
                var o = s[r];
                if (!o) {
                    if ("mouseenter" == r || "mouseleave" == r) {
                        var a = t.body.contains || t.body.compareDocumentPosition ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        };
                        s[r] = [], e(n, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[r], function(e) {
                            var t = e.relatedTarget;
                            t && (t === this || a(this, t)) || l(e, r)
                        })
                    } else kt(n, r, l), s[r] = [];
                    o = s[r]
                }
                o.push(i)
            })
        },
        off: J,
        one: function(e, t, n) {
            (e = nt(e)).on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            Q(e), o(new X(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                1 === e.nodeType && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            o(new X(t), function(t) {
                1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
            })
        },
        prepend: function(e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                o(new X(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            t = nt(t)[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: function(e) {
            Q(e);
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            o(new X(t), function(e) {
                r.insertBefore(e, n.nextSibling), n = e
            })
        },
        addClass: ie,
        removeClass: re,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var r = n;
                m(r) && (r = !ne(e, t)), (r ? ie : re)(e, t)
            })
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        next: function(e) {
            if (e.nextElementSibling) return e.nextElementSibling;
            for (e = e.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
            return e
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: K,
        triggerHandler: function(e, t, n) {
            var r, i;
            r = t.type || t;
            var a = (ee(e, "events") || {})[r];
            a && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopPropagation: p,
                type: r,
                target: e
            }, t.type && (r = u(r, t)), t = A(a), i = n ? [r].concat(n) : [r], o(t, function(t) {
                t.apply(e, i)
            }))
        }
    }, function(e, t) {
        X.prototype[t] = function(t, n, r) {
            for (var i, o = 0; o < this.length; o++) m(i) ? (i = e(this[o], t, n, r), v(i) && (i = nt(i))) : oe(i, e(this[o], t, n, r));
            return v(i) ? i : this
        }, X.prototype.bind = X.prototype.on, X.prototype.unbind = X.prototype.off
    }), fe.prototype = {
        put: function(e, t) {
            this[ue(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[ue(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = ue(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var Lt = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Ft = /,/,
        Bt = /^\s*(_?)(\S+?)\1\s*$/,
        Rt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        jt = r("$injector"),
        qt = r("$animate"),
        Ut = ["$provide", function(e) {
            this.$$selectors = {}, this.register = function(t, n) {
                var r = t + "-animation";
                if (t && "." != t.charAt(0)) throw qt("notcsel", t);
                this.$$selectors[t.substr(1)] = r, e.factory(r, n)
            }, this.classNameFilter = function(e) {
                return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
            }, this.$get = ["$timeout", "$$asyncCallback", function(e, t) {
                return {
                    enter: function(e, n, r, i) {
                        r ? r.after(e) : (n && n[0] || (n = r.parent()), n.append(e)), i && t(i)
                    },
                    leave: function(e, n) {
                        e.remove(), n && t(n)
                    },
                    move: function(e, t, n, r) {
                        this.enter(e, t, n, r)
                    },
                    addClass: function(e, n, r) {
                        n = y(n) ? n : mt(n) ? n.join(" ") : "", o(e, function(e) {
                            ie(e, n)
                        }), r && t(r)
                    },
                    removeClass: function(e, n, r) {
                        n = y(n) ? n : mt(n) ? n.join(" ") : "", o(e, function(e) {
                            re(e, n)
                        }), r && t(r)
                    },
                    setClass: function(e, n, r, i) {
                        o(e, function(e) {
                            ie(e, n), re(e, r)
                        }), i && t(i)
                    },
                    enabled: p
                }
            }]
        }],
        Ht = r("$compile");
    he.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Vt = /^(x[\:\-_]|data[\:\-_])/i,
        zt = r("$interpolate"),
        Wt = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Gt = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Yt = r("$location");
    Ae.prototype = Ee.prototype = Ce.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Ne("$$absUrl"),
        url: function(e) {
            return m(e) ? this.$$url : ((e = Wt.exec(e))[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this)
        },
        protocol: Ne("$$protocol"),
        host: Ne("$$host"),
        port: Ne("$$port"),
        path: Pe("$$path", function(e) {
            return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
        }),
        search: function(e, t) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (y(e) || x(e)) e = e.toString(), this.$$search = L(e);
                    else {
                        if (!b(e)) throw Yt("isrcharg");
                        o(e, function(t, n) {
                            null == t && delete e[n]
                        }), this.$$search = e
                    }
                    break;
                default:
                    m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
            }
            return this.$$compose(), this
        },
        hash: Pe("$$hash", function(e) {
            return null !== e ? e.toString() : ""
        }),
        replace: function() {
            return this.$$replace = !0, this
        }
    };
    var Xt, Kt = r("$parse"),
        Qt = {},
        Jt = Function.prototype.call,
        Zt = Function.prototype.apply,
        en = Function.prototype.bind,
        tn = {
            null: function() {
                return null
            },
            true: function() {
                return !0
            },
            false: function() {
                return !1
            },
            undefined: p,
            "+": function(e, t, r, i) {
                return r = r(e, t), i = i(e, t), v(r) ? v(i) ? r + i : r : v(i) ? i : n
            },
            "-": function(e, t, n, r) {
                return n = n(e, t), r = r(e, t), (v(n) ? n : 0) - (v(r) ? r : 0)
            },
            "*": function(e, t, n, r) {
                return n(e, t) * r(e, t)
            },
            "/": function(e, t, n, r) {
                return n(e, t) / r(e, t)
            },
            "%": function(e, t, n, r) {
                return n(e, t) % r(e, t)
            },
            "^": function(e, t, n, r) {
                return n(e, t) ^ r(e, t)
            },
            "=": p,
            "===": function(e, t, n, r) {
                return n(e, t) === r(e, t)
            },
            "!==": function(e, t, n, r) {
                return n(e, t) !== r(e, t)
            },
            "==": function(e, t, n, r) {
                return n(e, t) == r(e, t)
            },
            "!=": function(e, t, n, r) {
                return n(e, t) != r(e, t)
            },
            "<": function(e, t, n, r) {
                return n(e, t) < r(e, t)
            },
            ">": function(e, t, n, r) {
                return n(e, t) > r(e, t)
            },
            "<=": function(e, t, n, r) {
                return n(e, t) <= r(e, t)
            },
            ">=": function(e, t, n, r) {
                return n(e, t) >= r(e, t)
            },
            "&&": function(e, t, n, r) {
                return n(e, t) && r(e, t)
            },
            "||": function(e, t, n, r) {
                return n(e, t) || r(e, t)
            },
            "&": function(e, t, n, r) {
                return n(e, t) & r(e, t)
            },
            "|": function(e, t, n, r) {
                return r(e, t)(e, t, n(e, t))
            },
            "!": function(e, t, n) {
                return !n(e, t)
            }
        },
        nn = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        rn = function(e) {
            this.options = e
        };
    rn.prototype = {
        constructor: rn,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var t = (e = this.ch + this.peek()) + this.peek(2),
                        r = tn[this.ch],
                        i = tn[e],
                        o = tn[t];
                    o ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: o
                    }), this.index += 3) : i ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: i
                    }), this.index += 2) : r ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: r
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(e) {
            return -1 !== e.indexOf(this.ch)
        },
        was: function(e) {
            return -1 !== e.indexOf(this.lastCh)
        },
        peek: function(e) {
            return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
        },
        isNumber: function(e) {
            return "0" <= e && "9" >= e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
        },
        isIdent: function(e) {
            return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            throw n = n || this.index, t = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, Kt("lexerr", e, t, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = st(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            e *= 1, this.tokens.push({
                index: t,
                text: e,
                literal: !0,
                constant: !0,
                fn: function() {
                    return e
                }
            })
        },
        readIdent: function() {
            for (var e, t, n, r, i = this, o = "", a = this.index; this.index < this.text.length && ("." === (r = this.text.charAt(this.index)) || this.isIdent(r) || this.isNumber(r));) "." === r && (e = this.index), o += r, this.index++;
            if (e)
                for (t = this.index; t < this.text.length;) {
                    if ("(" === (r = this.text.charAt(t))) {
                        n = o.substr(e - a + 1), o = o.substr(0, e - a), this.index = t;
                        break
                    }
                    if (!this.isWhitespace(r)) break;
                    t++
                }
            if (a = {
                    index: a,
                    text: o
                }, tn.hasOwnProperty(o)) a.fn = tn[o], a.literal = !0, a.constant = !0;
            else {
                var s = Le(o, this.options, this.text);
                a.fn = u(function(e, t) {
                    return s(e, t)
                }, {
                    assign: function(e, t) {
                        return Ie(e, o, t, i.text, i.options)
                    }
                })
            }
            this.tokens.push(a), n && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: n
            }))
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index),
                    r = r + o;
                if (i) "u" === o ? ((i = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += nn[o] || o, i = !1;
                else if ("\\" === o) i = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var on = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };
    on.ZERO = u(function() {
        return 0
    }, {
        constant: !0
    }), on.prototype = {
        constructor: on,
        parse: function(e) {
            return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        },
        primary: function() {
            var e;
            if (this.expect("(")) e = this.filterChain(), this.consume(")");
            else if (this.expect("[")) e = this.arrayDeclaration();
            else if (this.expect("{")) e = this.object();
            else {
                var t = this.expect();
                (e = t.fn) || this.throwError("not a primary expression", t), e.literal = !!t.literal, e.constant = !!t.constant
            }
            for (var n; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        },
        throwError: function(e, t) {
            throw Kt("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Kt("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            if (0 < this.tokens.length) {
                var i = this.tokens[0],
                    o = i.text;
                if (o === e || o === t || o === n || o === r || !(e || t || n || r)) return i
            }
            return !1
        },
        expect: function(e, t, n, r) {
            return !!(e = this.peek(e, t, n, r)) && (this.tokens.shift(), e)
        },
        consume: function(e) {
            this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
        },
        unaryFn: function(e, t) {
            return u(function(n, r) {
                return e(n, r, t)
            }, {
                constant: t.constant
            })
        },
        ternaryFn: function(e, t, n) {
            return u(function(r, i) {
                return e(r, i) ? t(r, i) : n(r, i)
            }, {
                constant: e.constant && t.constant && n.constant
            })
        },
        binaryFn: function(e, t, n) {
            return u(function(r, i) {
                return t(r, i, e, n)
            }, {
                constant: e.constant && n.constant
            })
        },
        statements: function() {
            for (var e = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
                    for (var r, i = 0; i < e.length; i++) {
                        var o = e[i];
                        o && (r = o(t, n))
                    }
                    return r
                }
        },
        filterChain: function() {
            for (var e, t = this.expression();;) {
                if (!(e = this.expect("|"))) return t;
                t = this.binaryFn(t, e.fn, this.filter())
            }
        },
        filter: function() {
            for (var e = this.expect(), t = this.$filter(e.text), n = [];;) {
                if (!(e = this.expect(":"))) {
                    return function() {
                        return function(e, r, i) {
                            i = [i];
                            for (var o = 0; o < n.length; o++) i.push(n[o](e, r));
                            return t.apply(e, i)
                        }
                    }
                }
                n.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function(t, r) {
                return n.assign(t, e(t, r), r)
            }) : n
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
        },
        logicalOR: function() {
            for (var e, t = this.logicalAND();;) {
                if (!(e = this.expect("||"))) return t;
                t = this.binaryFn(t, e.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var e, t = this.equality();
            return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
        },
        equality: function() {
            var e, t = this.relational();
            return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
        },
        relational: function() {
            var e, t = this.additive();
            return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
            return t
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(on.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(e) {
            var t = this,
                n = this.expect().text,
                r = Le(n, this.options, this.text);
            return u(function(t, n, i) {
                return r(i || e(t, n))
            }, {
                assign: function(r, i, o) {
                    return (o = e(r, o)) || e.assign(r, o = {}), Ie(o, n, i, t.text, t.options)
                }
            })
        },
        objectIndex: function(e) {
            var t = this,
                r = this.expression();
            return this.consume("]"), u(function(i, o) {
                var a, s = e(i, o),
                    l = r(i, o);
                return Oe(l, t.text), s ? ((s = De(s[l], t.text)) && s.then && t.options.unwrapPromises && (a = s, "$$v" in s || (a.$$v = n, a.then(function(e) {
                    a.$$v = e
                })), s = s.$$v), s) : n
            }, {
                assign: function(n, i, o) {
                    var a = Oe(r(n, o), t.text);
                    return (o = De(e(n, o), t.text)) || e.assign(n, o = {}), o[a] = i
                }
            })
        },
        functionCall: function(e, t) {
            var n = [];
            if (")" !== this.peekToken().text)
                do {
                    n.push(this.expression())
                } while (this.expect(","));
            this.consume(")");
            var r = this;
            return function(i, o) {
                for (var a = [], s = t ? t(i, o) : i, l = 0; l < n.length; l++) a.push(De(n[l](i, o), r.text));
                l = e(i, o, s) || p, De(s, r.text);
                var c = r.text;
                if (l) {
                    if (l.constructor === l) throw Kt("isecfn", c);
                    if (l === Jt || l === Zt || en && l === en) throw Kt("isecff", c)
                }
                return a = l.apply ? l.apply(s, a) : l(a[0], a[1], a[2], a[3], a[4]), De(a, r.text)
            }
        },
        arrayDeclaration: function() {
            var e = [],
                t = !0;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    var n = this.expression();
                    e.push(n), n.constant || (t = !1)
                } while (this.expect(","));
            return this.consume("]"), u(function(t, n) {
                for (var r = [], i = 0; i < e.length; i++) r.push(e[i](t, n));
                return r
            }, {
                literal: !0,
                constant: t
            })
        },
        object: function() {
            var e = [],
                t = !0;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = (n = this.expect()).string || n.text;
                    this.consume(":");
                    var r = this.expression();
                    e.push({
                        key: n,
                        value: r
                    }), r.constant || (t = !1)
                } while (this.expect(","));
            return this.consume("}"), u(function(t, n) {
                for (var r = {}, i = 0; i < e.length; i++) {
                    var o = e[i];
                    r[o.key] = o.value(t, n)
                }
                return r
            }, {
                literal: !0,
                constant: t
            })
        }
    };
    var an = {},
        sn = {},
        ln = r("$sce"),
        cn = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        un = t.createElement("a"),
        fn = Be(e.location.href);
    je.$inject = ["$provide"], qe.$inject = ["$locale"], Ue.$inject = ["$locale"];
    var dn = ".",
        pn = {
            yyyy: ze("FullYear", 4),
            yy: ze("FullYear", 2, 0, !0),
            y: ze("FullYear", 1),
            MMMM: We("Month"),
            MMM: We("Month", !0),
            MM: ze("Month", 2, 1),
            M: ze("Month", 1, 1),
            dd: ze("Date", 2),
            d: ze("Date", 1),
            HH: ze("Hours", 2),
            H: ze("Hours", 1),
            hh: ze("Hours", 2, -12),
            h: ze("Hours", 1, -12),
            mm: ze("Minutes", 2),
            m: ze("Minutes", 1),
            ss: ze("Seconds", 2),
            s: ze("Seconds", 1),
            sss: ze("Milliseconds", 3),
            EEEE: We("Day"),
            EEE: We("Day", !0),
            a: function(e, t) {
                return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
            },
            Z: function(e) {
                return e = -1 * e.getTimezoneOffset(), e = (0 <= e ? "+" : "") + (Ve(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + Ve(Math.abs(e % 60), 2))
            }
        },
        hn = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        gn = /^\-?\d+$/;
    Ge.$inject = ["$locale"];
    var mn = g(st),
        vn = g(ct);
    Ye.$inject = ["$parse"];
    var bn = g({
            restrict: "E",
            compile: function(e, n) {
                if (8 >= tt && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function(e, t) {
                    var n = "[object SVGAnimatedString]" === dt.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function(e) {
                        t.attr(n) || e.preventDefault()
                    })
                }
            }
        }),
        yn = {};
    o(Mt, function(e, t) {
        if ("multiple" != e) {
            var n = ge("ng-" + t);
            yn[n] = function() {
                return {
                    priority: 100,
                    link: function(e, r, i) {
                        e.$watch(i[n], function(e) {
                            i.$set(t, !!e)
                        })
                    }
                }
            }
        }
    }), o(["src", "srcset", "href"], function(e) {
        var t = ge("ng-" + e);
        yn[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === dt.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                        t ? (i.$set(a, t), tt && o && r.prop(o, i[a])) : "href" === e && i.$set(a, null)
                    })
                }
            }
        }
    });
    var xn = {
        $addControl: p,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p
    };
    Ke.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var wn = function(e) {
            return ["$timeout", function(t) {
                return {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    controller: Ke,
                    compile: function() {
                        return {
                            pre: function(e, r, i, o) {
                                if (!i.action) {
                                    var a = function(e) {
                                        e.preventDefault ? e.preventDefault() : e.returnValue = !1
                                    };
                                    kt(r[0], "submit", a), r.on("$destroy", function() {
                                        t(function() {
                                            Tt(r[0], "submit", a)
                                        }, 0, !1)
                                    })
                                }
                                var s = r.parent().controller("form"),
                                    l = i.name || i.ngForm;
                                l && Ie(e, l, o, l), s && r.on("$destroy", function() {
                                    s.$removeControl(o), l && Ie(e, l, n, l), u(o, xn)
                                })
                            }
                        }
                    }
                }
            }]
        },
        $n = wn(),
        kn = wn(!0),
        Tn = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Sn = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Cn = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        En = {
            text: Ze,
            number: function(e, t, r, i, o, a) {
                Ze(e, t, r, i, o, a), i.$parsers.push(function(e) {
                        var t = i.$isEmpty(e);
                        return t || Cn.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), n)
                    }),
                    function(e, t, n, r, i) {
                        b(i) && (e.$$hasNativeValidators = !0, e.$parsers.push(function(o) {
                            if (e.$error[t] || Je(i, r) || !Je(i, n)) return o;
                            e.$setValidity(t, !1)
                        }))
                    }(i, "number", An, null, i.$$validityState), i.$formatters.push(function(e) {
                        return i.$isEmpty(e) ? "" : "" + e
                    }), r.min && (e = function(e) {
                        var t = parseFloat(r.min);
                        return Qe(i, "min", i.$isEmpty(e) || e >= t, e)
                    }, i.$parsers.push(e), i.$formatters.push(e)), r.max && (e = function(e) {
                        var t = parseFloat(r.max);
                        return Qe(i, "max", i.$isEmpty(e) || e <= t, e)
                    }, i.$parsers.push(e), i.$formatters.push(e)), i.$formatters.push(function(e) {
                        return Qe(i, "number", i.$isEmpty(e) || x(e), e)
                    })
            },
            url: function(e, t, n, r, i, o) {
                Ze(e, t, n, r, i, o), e = function(e) {
                    return Qe(r, "url", r.$isEmpty(e) || Tn.test(e), e)
                }, r.$formatters.push(e), r.$parsers.push(e)
            },
            email: function(e, t, n, r, i, o) {
                Ze(e, t, n, r, i, o), e = function(e) {
                    return Qe(r, "email", r.$isEmpty(e) || Sn.test(e), e)
                }, r.$formatters.push(e), r.$parsers.push(e)
            },
            radio: function(e, t, n, r) {
                m(n.name) && t.attr("name", l()), t.on("click", function() {
                    t[0].checked && e.$apply(function() {
                        r.$setViewValue(n.value)
                    })
                }), r.$render = function() {
                    t[0].checked = n.value == r.$viewValue
                }, n.$observe("value", r.$render)
            },
            checkbox: function(e, t, n, r) {
                var i = n.ngTrueValue,
                    o = n.ngFalseValue;
                y(i) || (i = !0), y(o) || (o = !1), t.on("click", function() {
                    e.$apply(function() {
                        r.$setViewValue(t[0].checked)
                    })
                }), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return e !== i
                }, r.$formatters.push(function(e) {
                    return e === i
                }), r.$parsers.push(function(e) {
                    return e ? i : o
                })
            },
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        An = ["badInput"],
        Nn = ["$browser", "$sniffer", function(e, t) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function(n, r, i, o) {
                    o && (En[st(i.type)] || En.text)(n, r, i, o, t, e)
                }
            }
        }],
        Pn = "ng-valid",
        On = "ng-invalid",
        Dn = "ng-pristine",
        In = "ng-dirty",
        Mn = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(e, t, n, i, a, s) {
            function l(e, t) {
                t = t ? "-" + q(t, "-") : "", s.removeClass(i, (e ? On : Pn) + t), s.addClass(i, (e ? Pn : On) + t)
            }
            this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
            var c = a(n.ngModel),
                u = c.assign;
            if (!u) throw r("ngModel")("nonassign", n.ngModel, M(i));
            this.$render = p, this.$isEmpty = function(e) {
                return m(e) || "" === e || null === e || e != e
            };
            var f = i.inheritedData("$formController") || xn,
                d = 0,
                h = this.$error = {};
            i.addClass(Dn), l(!0), this.$setValidity = function(e, t) {
                h[e] !== !t && (t ? (h[e] && d--, d || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, d++), h[e] = !t, l(t, e), f.$setValidity(e, t, this))
            }, this.$setPristine = function() {
                this.$dirty = !1, this.$pristine = !0, s.removeClass(i, In), s.addClass(i, Dn)
            }, this.$setViewValue = function(n) {
                this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, s.removeClass(i, Dn), s.addClass(i, In), f.$setDirty()), o(this.$parsers, function(e) {
                    n = e(n)
                }), this.$modelValue !== n && (this.$modelValue = n, u(e, n), o(this.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (e) {
                        t(e)
                    }
                }))
            };
            var g = this;
            e.$watch(function() {
                var t = c(e);
                if (g.$modelValue !== t) {
                    var n = g.$formatters,
                        r = n.length;
                    for (g.$modelValue = t; r--;) t = n[r](t);
                    g.$viewValue !== t && (g.$viewValue = t, g.$render())
                }
                return t
            })
        }],
        _n = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: Mn,
                link: function(e, t, n, r) {
                    var i = r[0],
                        o = r[1] || xn;
                    o.$addControl(i), e.$on("$destroy", function() {
                        o.$removeControl(i)
                    })
                }
            }
        },
        Ln = g({
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        Fn = function() {
            return {
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        n.required = !0;
                        var i = function(e) {
                            if (!n.required || !r.$isEmpty(e)) return r.$setValidity("required", !0), e;
                            r.$setValidity("required", !1)
                        };
                        r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function() {
                            i(r.$viewValue)
                        })
                    }
                }
            }
        },
        Bn = function() {
            return {
                require: "ngModel",
                link: function(e, t, r, i) {
                    var a = (e = /\/(.*)\//.exec(r.ngList)) && RegExp(e[1]) || r.ngList || ",";
                    i.$parsers.push(function(e) {
                        if (!m(e)) {
                            var t = [];
                            return e && o(e.split(a), function(e) {
                                e && t.push(vt(e))
                            }), t
                        }
                    }), i.$formatters.push(function(e) {
                        return mt(e) ? e.join(", ") : n
                    }), i.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        Rn = /^(true|false|\d+)$/,
        jn = function() {
            return {
                priority: 100,
                compile: function(e, t) {
                    return Rn.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        qn = Xe({
            compile: function(e) {
                return e.addClass("ng-binding"),
                    function(e, t, r) {
                        t.data("$binding", r.ngBind), e.$watch(r.ngBind, function(e) {
                            t.text(e == n ? "" : e)
                        })
                    }
            }
        }),
        Un = ["$interpolate", function(e) {
            return function(t, n, r) {
                t = e(n.attr(r.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", t), r.$observe("ngBindTemplate", function(e) {
                    n.text(e)
                })
            }
        }],
        Hn = ["$sce", "$parse", function(e, t) {
            return {
                compile: function(n) {
                    return n.addClass("ng-binding"),
                        function(n, r, i) {
                            r.data("$binding", i.ngBindHtml);
                            var o = t(i.ngBindHtml);
                            n.$watch(function() {
                                return (o(n) || "").toString()
                            }, function(t) {
                                r.html(e.getTrustedHtml(o(n)) || "")
                            })
                        }
                }
            }
        }],
        Vn = et("", !0),
        zn = et("Odd", 0),
        Wn = et("Even", 1),
        Gn = Xe({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        Yn = [function() {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Xn = {},
        Kn = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = ge("ng-" + e);
        Xn[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                compile: function(i, o) {
                    var a = n(o[t], !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                a(t, {
                                    $event: n
                                })
                            };
                            Kn[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var Qn = ["$animate", function(e) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, l, c;
                    n.$watch(i.ngIf, function(o) {
                        I(o) ? l || (l = n.$new(), a(l, function(n) {
                            n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        })) : (c && (c.remove(), c = null), l && (l.$destroy(), l = null), s && (c = W(s.clone), e.leave(c, function() {
                            c = null
                        }), s = null))
                    })
                }
            }
        }],
        Jn = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(e, t, n, r, i) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ht.noop,
                compile: function(o, a) {
                    var s = a.ngInclude || a.src,
                        l = a.onload || "",
                        c = a.autoscroll;
                    return function(o, a, u, f, d) {
                        var p, h, g, m = 0,
                            b = function() {
                                h && (h.remove(), h = null), p && (p.$destroy(), p = null), g && (r.leave(g, function() {
                                    h = null
                                }), h = g, g = null)
                            };
                        o.$watch(i.parseAsResourceUrl(s), function(i) {
                            var s = ++m;
                            i ? (e.get(i, {
                                cache: t
                            }).success(function(e) {
                                if (s === m) {
                                    var t = o.$new();
                                    f.template = e, e = d(t, function(e) {
                                        b(), r.enter(e, null, a, function() {
                                            !v(c) || c && !o.$eval(c) || n()
                                        })
                                    }), g = e, (p = t).$emit("$includeContentLoaded"), o.$eval(l)
                                }
                            }).error(function() {
                                s === m && b()
                            }), o.$emit("$includeContentRequested")) : (b(), f.template = null)
                        })
                    }
                }
            }
        }],
        Zn = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(t, n, r, i) {
                    n.html(i.template), e(n.contents())(t)
                }
            }
        }],
        er = Xe({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        tr = Xe({
            terminal: !0,
            priority: 1e3
        }),
        nr = ["$locale", "$interpolate", function(e, t) {
            var n = /{}/g;
            return {
                restrict: "EA",
                link: function(r, i, a) {
                    var s = a.count,
                        l = a.$attr.when && i.attr(a.$attr.when),
                        c = a.offset || 0,
                        u = r.$eval(l) || {},
                        f = {},
                        d = t.startSymbol(),
                        p = t.endSymbol(),
                        h = /^when(Minus)?(.+)$/;
                    o(a, function(e, t) {
                        h.test(t) && (u[st(t.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[t]))
                    }), o(u, function(e, r) {
                        f[r] = t(e.replace(n, d + s + "-" + c + p))
                    }), r.$watch(function() {
                        var t = parseFloat(r.$eval(s));
                        return isNaN(t) ? "" : (t in u || (t = e.pluralCat(t - c)), f[t](r, i, !0))
                    }, function(e) {
                        i.text(e)
                    })
                }
            }
        }],
        rr = ["$parse", "$animate", function(e, n) {
            var a = r("ngRepeat");
            return {
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                link: function(r, s, l, c, u) {
                    var f, d, p, h, g, m, v = l.ngRepeat,
                        b = v.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                        y = {
                            $id: ue
                        };
                    if (!b) throw a("iexp", v);
                    if (l = b[1], c = b[2], (b = b[3]) ? (f = e(b), d = function(e, t, n) {
                            return m && (y[m] = e), y[g] = t, y.$index = n, f(r, y)
                        }) : (p = function(e, t) {
                            return ue(t)
                        }, h = function(e) {
                            return e
                        }), !(b = l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw a("iidexp", l);
                    g = b[3] || b[1], m = b[2];
                    var x = {};
                    r.$watchCollection(c, function(e) {
                        var l, c, f, b, y, w, $, k, T, S, C = s[0],
                            E = {},
                            A = [];
                        if (i(e)) T = e, k = d || p;
                        else {
                            k = d || h, T = [];
                            for (w in e) e.hasOwnProperty(w) && "$" != w.charAt(0) && T.push(w);
                            T.sort()
                        }
                        for (b = T.length, c = A.length = T.length, l = 0; l < c; l++)
                            if (w = e === T ? l : T[l], $ = e[w], f = k(w, $, l), V(f, "`track by` id"), x.hasOwnProperty(f)) S = x[f], delete x[f], E[f] = S, A[l] = S;
                            else {
                                if (E.hasOwnProperty(f)) throw o(A, function(e) {
                                    e && e.scope && (x[e.id] = e)
                                }), a("dupes", v, f, O($));
                                A[l] = {
                                    id: f
                                }, E[f] = !1
                            }
                        for (w in x) x.hasOwnProperty(w) && (S = x[w], l = W(S.clone), n.leave(l), o(l, function(e) {
                            e.$$NG_REMOVED = !0
                        }), S.scope.$destroy());
                        for (l = 0, c = T.length; l < c; l++) {
                            if (w = e === T ? l : T[l], $ = e[w], S = A[l], A[l - 1] && (C = A[l - 1].clone[A[l - 1].clone.length - 1]), S.scope) {
                                y = S.scope, f = C;
                                do {
                                    f = f.nextSibling
                                } while (f && f.$$NG_REMOVED);
                                S.clone[0] != f && n.move(W(S.clone), null, nt(C)), C = S.clone[S.clone.length - 1]
                            } else y = r.$new();
                            y[g] = $, m && (y[m] = w), y.$index = l, y.$first = 0 === l, y.$last = l === b - 1, y.$middle = !(y.$first || y.$last), y.$odd = !(y.$even = 0 == (1 & l)), S.scope || u(y, function(e) {
                                e[e.length++] = t.createComment(" end ngRepeat: " + v + " "), n.enter(e, null, nt(C)), C = e, S.scope = y, S.clone = e, E[S.id] = S
                            })
                        }
                        x = E
                    })
                }
            }
        }],
        ir = ["$animate", function(e) {
            return function(t, n, r) {
                t.$watch(r.ngShow, function(t) {
                    e[I(t) ? "removeClass" : "addClass"](n, "ng-hide")
                })
            }
        }],
        or = ["$animate", function(e) {
            return function(t, n, r) {
                t.$watch(r.ngHide, function(t) {
                    e[I(t) ? "addClass" : "removeClass"](n, "ng-hide")
                })
            }
        }],
        ar = Xe(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && o(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        sr = ["$animate", function(e) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(t, n, r, i) {
                    var a = [],
                        s = [],
                        l = [],
                        c = [];
                    t.$watch(r.ngSwitch || r.on, function(n) {
                        var u, f;
                        for (u = 0, f = l.length; u < f; ++u) l[u].remove();
                        for (u = l.length = 0, f = c.length; u < f; ++u) {
                            var d = s[u];
                            c[u].$destroy(), l[u] = d, e.leave(d, function() {
                                l.splice(u, 1)
                            })
                        }
                        s.length = 0, c.length = 0, (a = i.cases["!" + n] || i.cases["?"]) && (t.$eval(r.change), o(a, function(n) {
                            var r = t.$new();
                            c.push(r), n.transclude(r, function(t) {
                                var r = n.element;
                                s.push(t), e.enter(t, r.parent(), r)
                            })
                        }))
                    })
                }
            }
        }],
        lr = Xe({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        cr = Xe({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        ur = Xe({
            link: function(e, t, n, i, o) {
                if (!o) throw r("ngTransclude")("orphan", M(t));
                o(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        fr = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    "text/ng-template" == n.type && e.put(n.id, t[0].text)
                }
            }
        }],
        dr = r("ngOptions"),
        pr = g({
            terminal: !0
        }),
        hr = ["$compile", "$parse", function(e, r) {
            var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                s = {
                    $setViewValue: p
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(e, t, n) {
                    var r, i = this,
                        o = {},
                        a = s;
                    i.databound = n.ngModel, i.init = function(e, t, n) {
                        a = e, r = n
                    }, i.addOption = function(t) {
                        V(t, '"option value"'), o[t] = !0, a.$viewValue == t && (e.val(t), r.parent() && r.remove())
                    }, i.removeOption = function(e) {
                        this.hasOption(e) && (delete o[e], a.$viewValue == e && this.renderUnknownOption(e))
                    }, i.renderUnknownOption = function(t) {
                        t = "? " + ue(t) + " ?", r.val(t), e.prepend(r), e.val(t), r.prop("selected", !0)
                    }, i.hasOption = function(e) {
                        return o.hasOwnProperty(e)
                    }, t.$on("$destroy", function() {
                        i.renderUnknownOption = p
                    })
                }],
                link: function(s, l, c, u) {
                    if (u[1]) {
                        var f = u[0];
                        u = u[1];
                        var d, p = c.multiple,
                            h = c.ngOptions,
                            g = !1,
                            b = nt(t.createElement("option")),
                            y = nt(t.createElement("optgroup")),
                            x = b.clone();
                        c = 0;
                        for (var w = l.children(), $ = w.length; c < $; c++)
                            if ("" === w[c].value) {
                                d = g = w.eq(c);
                                break
                            }
                        f.init(u, g, x), p && (u.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }), h ? function(t, o, s) {
                            function l() {
                                var e, n, r, i, l, c = {
                                        "": []
                                    },
                                    h = [""];
                                r = s.$modelValue, i = $(t) || [];
                                var S, C, E, A = m ? a(i) : i;
                                if (C = {}, E = !1, p)
                                    if (n = s.$modelValue, k && mt(n))
                                        for (E = new fe([]), e = {}, l = 0; l < n.length; l++) e[d] = n[l], E.put(k(t, e), n[l]);
                                    else E = new fe(n);
                                l = E;
                                var N, P;
                                for (E = 0; S = A.length, E < S; E++) {
                                    if (n = E, m) {
                                        if ("$" === (n = A[E]).charAt(0)) continue;
                                        C[m] = n
                                    }
                                    C[d] = i[n], (n = c[e = x(t, C) || ""]) || (n = c[e] = [], h.push(e)), p ? e = v(l.remove(k ? k(t, C) : w(t, C))) : (k ? (e = {}, e[d] = r, e = k(t, e) === k(t, C)) : e = r === w(t, C), l = l || e), N = v(N = u(t, C)) ? N : "", n.push({
                                        id: k ? k(t, C) : m ? A[E] : E,
                                        label: N,
                                        selected: e
                                    })
                                }
                                for (p || (g || null === r ? c[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !l
                                    }) : l || c[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), C = 0, A = h.length; C < A; C++) {
                                    for (n = c[e = h[C]], T.length <= C ? (r = {
                                            element: y.clone().attr("label", e),
                                            label: n.label
                                        }, i = [r], T.push(i), o.append(r.element)) : (i = T[C], (r = i[0]).label != e && r.element.attr("label", r.label = e)), N = null, E = 0, S = n.length; E < S; E++) e = n[E], (l = i[E + 1]) ? (N = l.element, l.label !== e.label && (N.text(l.label = e.label), N.prop("label", l.label)), l.id !== e.id && N.val(l.id = e.id), N[0].selected !== e.selected && (N.prop("selected", l.selected = e.selected), tt && N.prop("selected", l.selected))) : ("" === e.id && g ? P = g : (P = b.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).prop("label", e.label).text(e.label), i.push({
                                        element: P,
                                        label: e.label,
                                        id: e.id,
                                        selected: e.selected
                                    }), f.addOption(e.label, P), N ? N.after(P) : r.element.append(P), N = P);
                                    for (E++; i.length > E;) e = i.pop(), f.removeOption(e.label), e.element.remove()
                                }
                                for (; T.length > C;) T.pop()[0].element.remove()
                            }
                            var c;
                            if (!(c = h.match(i))) throw dr("iexp", h, M(o));
                            var u = r(c[2] || c[1]),
                                d = c[4] || c[6],
                                m = c[5],
                                x = r(c[3] || ""),
                                w = r(c[2] ? c[1] : d),
                                $ = r(c[7]),
                                k = c[8] ? r(c[8]) : null,
                                T = [
                                    [{
                                        element: o,
                                        label: ""
                                    }]
                                ];
                            g && (e(g)(t), g.removeClass("ng-scope"), g.remove()), o.empty(), o.on("change", function() {
                                t.$apply(function() {
                                    var e, r, i, a, c, u, f, h, g = $(t) || [],
                                        v = {};
                                    if (p) {
                                        for (i = [], c = 0, f = T.length; c < f; c++)
                                            for (e = T[c], a = 1, u = e.length; a < u; a++)
                                                if ((r = e[a].element)[0].selected) {
                                                    if (r = r.val(), m && (v[m] = r), k)
                                                        for (h = 0; h < g.length && (v[d] = g[h], k(t, v) != r); h++);
                                                    else v[d] = g[r];
                                                    i.push(w(t, v))
                                                }
                                    } else if ("?" == (r = o.val())) i = n;
                                    else if ("" === r) i = null;
                                    else if (k) {
                                        for (h = 0; h < g.length; h++)
                                            if (v[d] = g[h], k(t, v) == r) {
                                                i = w(t, v);
                                                break
                                            }
                                    } else v[d] = g[r], m && (v[m] = r), i = w(t, v);
                                    s.$setViewValue(i), l()
                                })
                            }), s.$render = l, t.$watchCollection($, l), t.$watchCollection(function() {
                                var e = {},
                                    n = $(t);
                                if (n) {
                                    for (var r = Array(n.length), i = 0, o = n.length; i < o; i++) e[d] = n[i], r[i] = u(t, e);
                                    return r
                                }
                            }, l), p && t.$watchCollection(function() {
                                return s.$modelValue
                            }, l)
                        }(s, l, u) : p ? function(e, t, n) {
                            var r;
                            n.$render = function() {
                                var e = new fe(n.$viewValue);
                                o(t.find("option"), function(t) {
                                    t.selected = v(e.get(t.value))
                                })
                            }, e.$watch(function() {
                                N(r, n.$viewValue) || (r = A(n.$viewValue), n.$render())
                            }), t.on("change", function() {
                                e.$apply(function() {
                                    var e = [];
                                    o(t.find("option"), function(t) {
                                        t.selected && e.push(t.value)
                                    }), n.$setViewValue(e)
                                })
                            })
                        }(s, l, u) : function(e, t, n, r) {
                            n.$render = function() {
                                var e = n.$viewValue;
                                r.hasOption(e) ? (x.parent() && x.remove(), t.val(e), "" === e && d.prop("selected", !0)) : m(e) && d ? t.val("") : r.renderUnknownOption(e)
                            }, t.on("change", function() {
                                e.$apply(function() {
                                    x.parent() && x.remove(), n.$setViewValue(t.val())
                                })
                            })
                        }(s, l, u, f)
                    }
                }
            }
        }],
        gr = ["$interpolate", function(e) {
            var t = {
                addOption: p,
                removeOption: p
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, r) {
                    if (m(r.value)) {
                        var i = e(n.text(), !0);
                        i || r.$set("value", n.text())
                    }
                    return function(e, n, r) {
                        var o = n.parent(),
                            a = o.data("$selectController") || o.parent().data("$selectController");
                        a && a.databound ? n.prop("selected", !1) : a = t, i ? e.$watch(i, function(e, t) {
                            r.$set("value", e), e !== t && a.removeOption(t), a.addOption(e)
                        }) : a.addOption(r.value), n.on("$destroy", function() {
                            a.removeOption(r.value)
                        })
                    }
                }
            }
        }],
        mr = g({
            restrict: "E",
            terminal: !0
        });
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((rt = e.jQuery) && rt.fn.on ? (nt = rt, u(rt.fn, {
        scope: It.scope,
        isolateScope: It.isolateScope,
        controller: It.controller,
        injector: It.injector,
        inheritedData: It.inheritedData
    }), Y("remove", !0, !0, !1), Y("empty", !1, !1, !1), Y("html", !1, !1, !0)) : nt = X, ht.element = nt, function(t) {
        u(t, {
            bootstrap: j,
            copy: E,
            extend: u,
            equals: N,
            element: nt,
            forEach: o,
            injector: pe,
            noop: p,
            bind: P,
            toJson: O,
            fromJson: D,
            identity: h,
            isUndefined: m,
            isDefined: v,
            isString: y,
            isFunction: $,
            isObject: b,
            isNumber: x,
            isElement: function(e) {
                return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
            },
            isArray: mt,
            version: xt,
            isDate: w,
            lowercase: st,
            uppercase: ct,
            callbacks: {
                counter: 0
            },
            $$minErr: r,
            $$csp: bt
        }), it = function(e) {
            var t = r("$injector"),
                n = r("ng");
            return e = e.angular || (e.angular = {}), e.$$minErr = e.$$minErr || r, e.module || (e.module = function() {
                var e = {};
                return function(r, i, o) {
                    if ("hasOwnProperty" === r) throw n("badname", "module");
                    return i && e.hasOwnProperty(r) && (e[r] = null), e[r] || (e[r] = function() {
                        function e(e, t, r) {
                            return function() {
                                return n[r || "push"]([e, t, arguments]), l
                            }
                        }
                        if (!i) throw t("nomod", r);
                        var n = [],
                            a = [],
                            s = e("$injector", "invoke"),
                            l = {
                                _invokeQueue: n,
                                _runBlocks: a,
                                requires: i,
                                name: r,
                                provider: e("$provide", "provider"),
                                factory: e("$provide", "factory"),
                                service: e("$provide", "service"),
                                value: e("$provide", "value"),
                                constant: e("$provide", "constant", "unshift"),
                                animation: e("$animateProvider", "register"),
                                filter: e("$filterProvider", "register"),
                                controller: e("$controllerProvider", "register"),
                                directive: e("$compileProvider", "directive"),
                                config: s,
                                run: function(e) {
                                    return a.push(e), this
                                }
                            };
                        return o && s(o), l
                    }())
                }
            }())
        }(e);
        try {
            it("ngLocale")
        } catch (e) {
            it("ngLocale", []).provider("$locale", function() {
                this.$get = function() {
                    return {
                        id: "en-us",
                        NUMBER_FORMATS: {
                            DECIMAL_SEP: ".",
                            GROUP_SEP: ",",
                            PATTERNS: [{
                                minInt: 1,
                                minFrac: 0,
                                maxFrac: 3,
                                posPre: "",
                                posSuf: "",
                                negPre: "-",
                                negSuf: "",
                                gSize: 3,
                                lgSize: 3
                            }, {
                                minInt: 1,
                                minFrac: 2,
                                maxFrac: 2,
                                posPre: "¤",
                                posSuf: "",
                                negPre: "(¤",
                                negSuf: ")",
                                gSize: 3,
                                lgSize: 3
                            }],
                            CURRENCY_SYM: "$"
                        },
                        DATETIME_FORMATS: {
                            MONTH: "January February March April May June July August September October November December".split(" "),
                            SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                            DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                            SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                            AMPMS: ["AM", "PM"],
                            medium: "MMM d, y h:mm:ss a",
                            short: "M/d/yy h:mm a",
                            fullDate: "EEEE, MMMM d, y",
                            longDate: "MMMM d, y",
                            mediumDate: "MMM d, y",
                            shortDate: "M/d/yy",
                            mediumTime: "h:mm:ss a",
                            shortTime: "h:mm a"
                        },
                        pluralCat: function(e) {
                            return 1 === e ? "one" : "other"
                        }
                    }
                }
            })
        }
        it("ng", ["ngLocale"], ["$provide", function(t) {
            t.provider({
                $$sanitizeUri: function() {
                    var e = /^\s*(https?|ftp|mailto|tel|file):/,
                        t = /^\s*((https?|ftp|file):|data:image\/)/;
                    this.aHrefSanitizationWhitelist = function(t) {
                        return v(t) ? (e = t, this) : e
                    }, this.imgSrcSanitizationWhitelist = function(e) {
                        return v(e) ? (t = e, this) : t
                    }, this.$get = function() {
                        return function(n, r) {
                            var i, o = r ? t : e;
                            return tt && !(8 <= tt) || "" === (i = Be(n).href) || i.match(o) ? n : "unsafe:" + i
                        }
                    }
                }
            }), t.provider("$compile", he).directive({
                a: bn,
                input: Nn,
                textarea: Nn,
                form: $n,
                script: fr,
                select: hr,
                style: mr,
                option: gr,
                ngBind: qn,
                ngBindHtml: Hn,
                ngBindTemplate: Un,
                ngClass: Vn,
                ngClassEven: Wn,
                ngClassOdd: zn,
                ngCloak: Gn,
                ngController: Yn,
                ngForm: kn,
                ngHide: or,
                ngIf: Qn,
                ngInclude: Jn,
                ngInit: er,
                ngNonBindable: tr,
                ngPluralize: nr,
                ngRepeat: rr,
                ngShow: ir,
                ngStyle: ar,
                ngSwitch: sr,
                ngSwitchWhen: lr,
                ngSwitchDefault: cr,
                ngOptions: pr,
                ngTransclude: ur,
                ngModel: _n,
                ngList: Bn,
                ngChange: Ln,
                required: Fn,
                ngRequired: Fn,
                ngValue: jn
            }).directive({
                ngInclude: Zn
            }).directive(yn).directive(Xn), t.provider({
                $anchorScroll: function() {
                    var e = !0;
                    this.disableAutoScrolling = function() {
                        e = !1
                    }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
                        function i() {
                            var e, r = n.hash();
                            r ? (e = a.getElementById(r)) ? e.scrollIntoView() : (e = function(e) {
                                var t = null;
                                return o(e, function(e) {
                                    t || "a" !== st(e.nodeName) || (t = e)
                                }), t
                            }(a.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
                        }
                        var a = t.document;
                        return e && r.$watch(function() {
                            return n.hash()
                        }, function() {
                            r.$evalAsync(i)
                        }), i
                    }]
                },
                $animate: Ut,
                $browser: function() {
                    this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, r, i) {
                        return new function(e, t, r, i) {
                            function a(e) {
                                try {
                                    e.apply(null, ut.call(arguments, 1))
                                } finally {
                                    if (0 == --v)
                                        for (; b.length;) try {
                                            b.pop()()
                                        } catch (e) {
                                            r.error(e)
                                        }
                                }
                            }

                            function s() {
                                $ != l.url() && ($ = l.url(), o(S, function(e) {
                                    e(l.url())
                                }))
                            }
                            var l = this,
                                c = t[0],
                                u = e.location,
                                f = e.history,
                                d = e.setTimeout,
                                h = e.clearTimeout,
                                g = {};
                            l.isMock = !1;
                            var v = 0,
                                b = [];
                            l.$$completeOutstandingRequest = a, l.$$incOutstandingRequestCount = function() {
                                v++
                            }, l.notifyWhenNoOutstandingRequests = function(e) {
                                o(w, function(e) {
                                    e()
                                }), 0 === v ? e() : b.push(e)
                            };
                            var x, w = [];
                            l.addPollFn = function(e) {
                                return m(x) && function(e, t) {
                                    ! function n() {
                                        o(w, function(e) {
                                            e()
                                        }), x = t(n, e)
                                    }()
                                }(100, d), w.push(e), e
                            };
                            var $ = u.href,
                                k = t.find("base"),
                                T = null;
                            l.url = function(t, n) {
                                if (u !== e.location && (u = e.location), f !== e.history && (f = e.history), !t) return T || u.href.replace(/%27/g, "'");
                                if ($ != t) {
                                    var r = $ && Te($) === Te(t);
                                    return $ = t, !r && i.history ? n ? f.replaceState(null, "", t) : (f.pushState(null, "", t), k.attr("href", k.attr("href"))) : (r || (T = t), n ? u.replace(t) : u.href = t), l
                                }
                            };
                            var S = [],
                                C = !1;
                            l.onUrlChange = function(t) {
                                return C || (i.history && nt(e).on("popstate", s), i.hashchange ? nt(e).on("hashchange", s) : l.addPollFn(s), C = !0), S.push(t), t
                            }, l.$$checkUrlChange = s, l.baseHref = function() {
                                var e = k.attr("href");
                                return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
                            };
                            var E = {},
                                A = "",
                                N = l.baseHref();
                            l.cookies = function(e, t) {
                                var i, o, a, s;
                                if (!e) {
                                    if (c.cookie !== A)
                                        for (A = c.cookie, i = A.split("; "), E = {}, a = 0; a < i.length; a++) o = i[a], 0 < (s = o.indexOf("=")) && (e = unescape(o.substring(0, s)), E[e] === n && (E[e] = unescape(o.substring(s + 1))));
                                    return E
                                }
                                t === n ? c.cookie = escape(e) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : y(t) && 4096 < (i = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + N).length + 1) && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!")
                            }, l.defer = function(e, t) {
                                var n;
                                return v++, n = d(function() {
                                    delete g[n], a(e)
                                }, t || 0), g[n] = !0, n
                            }, l.defer.cancel = function(e) {
                                return !!g[e] && (delete g[e], h(e), a(p), !0)
                            }
                        }(e, i, t, r)
                    }]
                },
                $cacheFactory: function() {
                    this.$get = function() {
                        function e(e, n) {
                            function i(e) {
                                e != d && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, d), d = e, d.n = null)
                            }

                            function o(e, t) {
                                e != t && (e && (e.p = t), t && (t.n = e))
                            }
                            if (e in t) throw r("$cacheFactory")("iid", e);
                            var a = 0,
                                s = u({}, n, {
                                    id: e
                                }),
                                l = {},
                                c = n && n.capacity || Number.MAX_VALUE,
                                f = {},
                                d = null,
                                p = null;
                            return t[e] = {
                                put: function(e, t) {
                                    if (c < Number.MAX_VALUE && i(f[e] || (f[e] = {
                                            key: e
                                        })), !m(t)) return e in l || a++, l[e] = t, a > c && this.remove(p.key), t
                                },
                                get: function(e) {
                                    if (c < Number.MAX_VALUE) {
                                        var t = f[e];
                                        if (!t) return;
                                        i(t)
                                    }
                                    return l[e]
                                },
                                remove: function(e) {
                                    if (c < Number.MAX_VALUE) {
                                        var t = f[e];
                                        if (!t) return;
                                        t == d && (d = t.p), t == p && (p = t.n), o(t.n, t.p), delete f[e]
                                    }
                                    delete l[e], a--
                                },
                                removeAll: function() {
                                    l = {}, a = 0, f = {}, d = p = null
                                },
                                destroy: function() {
                                    f = s = l = null, delete t[e]
                                },
                                info: function() {
                                    return u({}, s, {
                                        size: a
                                    })
                                }
                            }
                        }
                        var t = {};
                        return e.info = function() {
                            var e = {};
                            return o(t, function(t, n) {
                                e[n] = t.info()
                            }), e
                        }, e.get = function(e) {
                            return t[e]
                        }, e
                    }
                },
                $controller: function() {
                    var e = {},
                        t = /^(\S+)(\s+as\s+(\w+))?$/;
                    this.register = function(t, n) {
                        V(t, "controller"), b(t) ? u(e, t) : e[t] = n
                    }, this.$get = ["$injector", "$window", function(n, i) {
                        return function(o, a) {
                            var s, l, c;
                            if (y(o) && (s = o.match(t), l = s[1], c = s[3], o = e.hasOwnProperty(l) ? e[l] : z(a.$scope, l, !0) || z(i, l, !0), H(o, l, !0)), s = n.instantiate(o, a), c) {
                                if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", l || o.name, c);
                                a.$scope[c] = s
                            }
                            return s
                        }
                    }]
                },
                $document: function() {
                    this.$get = ["$window", function(e) {
                        return nt(e.document)
                    }]
                },
                $exceptionHandler: function() {
                    this.$get = ["$log", function(e) {
                        return function(t, n) {
                            e.error.apply(e, arguments)
                        }
                    }]
                },
                $filter: je,
                $interpolate: function() {
                    var e = "{{",
                        t = "}}";
                    this.startSymbol = function(t) {
                        return t ? (e = t, this) : e
                    }, this.endSymbol = function(e) {
                        return e ? (t = e, this) : t
                    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                        function o(o, l, c) {
                            for (var u, f, d = 0, p = [], h = o.length, g = !1, m = []; d < h;) - 1 != (u = o.indexOf(e, d)) && -1 != (f = o.indexOf(t, u + a)) ? (d != u && p.push(o.substring(d, u)), p.push(d = n(g = o.substring(u + a, f))), d.exp = g, d = f + s, g = !0) : (d != h && p.push(o.substring(d)), d = h);
                            if ((h = p.length) || (p.push(""), h = 1), c && 1 < p.length) throw zt("noconcat", o);
                            if (!l || g) return m.length = h, d = function(e) {
                                try {
                                    for (var t, n = 0, a = h; n < a; n++) {
                                        if ("function" == typeof(t = p[n]))
                                            if (t = t(e), null == (t = c ? i.getTrusted(c, t) : i.valueOf(t))) t = "";
                                            else switch (typeof t) {
                                                case "string":
                                                    break;
                                                case "number":
                                                    t = "" + t;
                                                    break;
                                                default:
                                                    t = O(t)
                                            }
                                        m[n] = t
                                    }
                                    return m.join("")
                                } catch (t) {
                                    e = zt("interr", o, t.toString()), r(e)
                                }
                            }, d.exp = o, d.parts = p, d
                        }
                        var a = e.length,
                            s = t.length;
                        return o.startSymbol = function() {
                            return e
                        }, o.endSymbol = function() {
                            return t
                        }, o
                    }]
                },
                $interval: function() {
                    this.$get = ["$rootScope", "$window", "$q", function(e, t, n) {
                        function r(r, o, a, s) {
                            var l = t.setInterval,
                                c = t.clearInterval,
                                u = n.defer(),
                                f = u.promise,
                                d = 0,
                                p = v(s) && !s;
                            return a = v(a) ? a : 0, f.then(null, null, r), f.$$intervalId = l(function() {
                                u.notify(d++), 0 < a && d >= a && (u.resolve(d), c(f.$$intervalId), delete i[f.$$intervalId]), p || e.$apply()
                            }, o), i[f.$$intervalId] = u, f
                        }
                        var i = {};
                        return r.cancel = function(e) {
                            return !!(e && e.$$intervalId in i) && (i[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete i[e.$$intervalId], !0)
                        }, r
                    }]
                },
                $http: function() {
                    var e = /^\s*(\[|\{[^\{])/,
                        t = /[\}\]]\s*$/,
                        r = /^\)\]\}',?\n/,
                        i = {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        s = this.defaults = {
                            transformResponse: [function(n) {
                                return y(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = D(n))), n
                            }],
                            transformRequest: [function(e) {
                                return b(e) && "[object File]" !== dt.call(e) && "[object Blob]" !== dt.call(e) ? O(e) : e
                            }],
                            headers: {
                                common: {
                                    Accept: "application/json, text/plain, */*"
                                },
                                post: A(i),
                                put: A(i),
                                patch: A(i)
                            },
                            xsrfCookieName: "XSRF-TOKEN",
                            xsrfHeaderName: "X-XSRF-TOKEN"
                        },
                        l = this.interceptors = [],
                        c = this.responseInterceptors = [];
                    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, t, r, i, f, d) {
                        function p(e) {
                            function t(e) {
                                var t = u({}, e, {
                                    data: ye(e.data, e.headers, r.transformResponse)
                                });
                                return 200 <= e.status && 300 > e.status ? t : f.reject(t)
                            }
                            var r = {
                                    method: "get",
                                    transformRequest: s.transformRequest,
                                    transformResponse: s.transformResponse
                                },
                                i = function(e) {
                                    var t, n, r = s.headers,
                                        i = u({}, e.headers),
                                        r = u({}, r.common, r[st(e.method)]);
                                    e: for (t in r) {
                                        e = st(t);
                                        for (n in i)
                                            if (st(n) === e) continue e;
                                        i[t] = r[t]
                                    }
                                    return function(e) {
                                        var t;
                                        o(e, function(n, r) {
                                            $(n) && (null != (t = n()) ? e[r] = t : delete e[r])
                                        })
                                    }(i), i
                                }(e);
                            u(r, e), r.headers = i, r.method = ct(r.method);
                            var a = [function(e) {
                                    i = e.headers;
                                    var n = ye(e.data, be(i), e.transformRequest);
                                    return m(n) && o(i, function(e, t) {
                                        "content-type" === st(t) && delete i[t]
                                    }), m(e.withCredentials) && !m(s.withCredentials) && (e.withCredentials = s.withCredentials), h(e, n, i).then(t, t)
                                }, n],
                                l = f.when(r);
                            for (o(k, function(e) {
                                    (e.request || e.requestError) && a.unshift(e.request, e.requestError), (e.response || e.responseError) && a.push(e.response, e.responseError)
                                }); a.length;) {
                                e = a.shift();
                                var c = a.shift(),
                                    l = l.then(e, c)
                            }
                            return l.success = function(e) {
                                return l.then(function(t) {
                                    e(t.data, t.status, t.headers, r)
                                }), l
                            }, l.error = function(e) {
                                return l.then(null, function(t) {
                                    e(t.data, t.status, t.headers, r)
                                }), l
                            }, l
                        }

                        function h(r, o, a) {
                            function l(e, t, n, i) {
                                (200 <= (t = Math.max(t, 0)) && 300 > t ? h.resolve : h.reject)({
                                    data: e,
                                    status: t,
                                    headers: be(n),
                                    config: r,
                                    statusText: i
                                })
                            }

                            function c() {
                                var e = S(p.pendingRequests, r); - 1 !== e && p.pendingRequests.splice(e, 1)
                            }
                            var u, d, h = f.defer(),
                                y = h.promise,
                                w = g(r.url, r.params);
                            if (p.pendingRequests.push(r), y.then(c, c), !r.cache && !s.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (u = b(r.cache) ? r.cache : b(s.cache) ? s.cache : x), u)
                                if (d = u.get(w), v(d)) {
                                    if (d && $(d.then)) return d.then(c, c), d;
                                    mt(d) ? l(d[1], d[0], A(d[2]), d[3]) : l(d, 200, {}, "OK")
                                } else u.put(w, y);
                            return m(d) && ((d = Re(r.url) ? t.cookies()[r.xsrfCookieName || s.xsrfCookieName] : n) && (a[r.xsrfHeaderName || s.xsrfHeaderName] = d), e(r.method, w, o, function(e, t, n, r) {
                                u && (200 <= e && 300 > e ? u.put(w, [e, t, ve(n), r]) : u.remove(w)), l(t, e, n, r), i.$$phase || i.$apply()
                            }, a, r.timeout, r.withCredentials, r.responseType)), y
                        }

                        function g(e, t) {
                            if (!t) return e;
                            var n = [];
                            return function(e, t, n) {
                                for (var r = a(e), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i])
                            }(t, function(e, t) {
                                null === e || m(e) || (mt(e) || (e = [e]), o(e, function(e) {
                                    b(e) && (e = w(e) ? e.toISOString() : O(e)), n.push(R(t) + "=" + R(e))
                                }))
                            }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
                        }
                        var x = r("$http"),
                            k = [];
                        return o(l, function(e) {
                                k.unshift(y(e) ? d.get(e) : d.invoke(e))
                            }), o(c, function(e, t) {
                                var n = y(e) ? d.get(e) : d.invoke(e);
                                k.splice(t, 0, {
                                    response: function(e) {
                                        return n(f.when(e))
                                    },
                                    responseError: function(e) {
                                        return n(f.reject(e))
                                    }
                                })
                            }), p.pendingRequests = [],
                            function(e) {
                                o(arguments, function(e) {
                                    p[e] = function(t, n) {
                                        return p(u(n || {}, {
                                            method: e,
                                            url: t
                                        }))
                                    }
                                })
                            }("get", "delete", "head", "jsonp"),
                            function(e) {
                                o(arguments, function(e) {
                                    p[e] = function(t, n, r) {
                                        return p(u(r || {}, {
                                            method: e,
                                            url: t,
                                            data: n
                                        }))
                                    }
                                })
                            }("post", "put", "patch"), p.defaults = s, p
                    }]
                },
                $httpBackend: function() {
                    this.$get = ["$browser", "$window", "$document", function(t, n, i) {
                        return function(e, t, n, r, i) {
                            function a(e, t, n) {
                                var o = i.createElement("script"),
                                    a = null;
                                return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                                    Tt(o, "load", a), Tt(o, "error", a), i.body.removeChild(o), o = null;
                                    var s = -1,
                                        l = "unknown";
                                    e && ("load" !== e.type || r[t].called || (e = {
                                        type: "error"
                                    }), l = e.type, s = "error" === e.type ? 404 : 200), n && n(s, l)
                                }, kt(o, "load", a), kt(o, "error", a), 8 >= tt && (o.onreadystatechange = function() {
                                    y(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, a({
                                        type: "load"
                                    }))
                                }), i.body.appendChild(o), a
                            }
                            var s = -1;
                            return function(i, l, c, u, f, d, h, g) {
                                function m() {
                                    y = s, w && w(), k && k.abort()
                                }

                                function b(t, r, i, o, a) {
                                    T && n.cancel(T), w = k = null, 0 === r && (r = i ? 200 : "file" == Be(l).protocol ? 404 : 0), t(1223 === r ? 204 : r, i, o, a || ""), e.$$completeOutstandingRequest(p)
                                }
                                var y;
                                if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == st(i)) {
                                    var x = "_" + (r.counter++).toString(36);
                                    r[x] = function(e) {
                                        r[x].data = e, r[x].called = !0
                                    };
                                    var w = a(l.replace("JSON_CALLBACK", "angular.callbacks." + x), x, function(e, t) {
                                        b(u, e, r[x].data, "", t), r[x] = p
                                    })
                                } else {
                                    var k = t(i);
                                    if (k.open(i, l, !0), o(f, function(e, t) {
                                            v(e) && k.setRequestHeader(t, e)
                                        }), k.onreadystatechange = function() {
                                            if (k && 4 == k.readyState) {
                                                var e = null,
                                                    t = null,
                                                    n = "";
                                                y !== s && (e = k.getAllResponseHeaders(), t = "response" in k ? k.response : k.responseText), y === s && 10 > tt || (n = k.statusText), b(u, y || k.status, t, e, n)
                                            }
                                        }, h && (k.withCredentials = !0), g) try {
                                        k.responseType = g
                                    } catch (e) {
                                        if ("json" !== g) throw e
                                    }
                                    k.send(c || null)
                                }
                                if (0 < d) var T = n(m, d);
                                else d && $(d.then) && d.then(m)
                            }
                        }(t, function(t) {
                            if (8 >= tt && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
                            if (e.XMLHttpRequest) return new e.XMLHttpRequest;
                            throw r("$httpBackend")("noxhr")
                        }, t.defer, n.angular.callbacks, i[0])
                    }]
                },
                $location: function() {
                    var t = "",
                        n = !1;
                    this.hashPrefix = function(e) {
                        return v(e) ? (t = e, this) : t
                    }, this.html5Mode = function(e) {
                        return v(e) ? (n = e, this) : n
                    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, i, o, a) {
                        function s(e) {
                            r.$broadcast("$locationChangeSuccess", l.absUrl(), e)
                        }
                        var l, c = i.baseHref(),
                            u = i.url();
                        n ? (c = u.substring(0, u.indexOf("/", u.indexOf("//") + 2)) + (c || "/"), o = o.history ? Ce : Ae) : (c = Te(u), o = Ee), (l = new o(c, "#" + t)).$$parseLinkUrl(u, u);
                        var f = /^\s*(javascript|mailto):/i;
                        a.on("click", function(t) {
                            if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
                                for (var n = nt(t.target);
                                    "a" !== st(n[0].nodeName);)
                                    if (n[0] === a[0] || !(n = n.parent())[0]) return;
                                var o = n.prop("href"),
                                    s = n.attr("href") || n.attr("xlink:href");
                                b(o) && "[object SVGAnimatedString]" === o.toString() && (o = Be(o.animVal).href), f.test(o) || !o || n.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(o, s) || (t.preventDefault(), l.absUrl() != i.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
                            }
                        }), l.absUrl() != u && i.url(l.absUrl(), !0), i.onUrlChange(function(e) {
                            l.absUrl() != e && (r.$evalAsync(function() {
                                var t = l.absUrl();
                                l.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (l.$$parse(t), i.url(t)) : s(t)
                            }), r.$$phase || r.$digest())
                        });
                        var d = 0;
                        return r.$watch(function() {
                            var e = i.url(),
                                t = l.$$replace;
                            return d && e == l.absUrl() || (d++, r.$evalAsync(function() {
                                r.$broadcast("$locationChangeStart", l.absUrl(), e).defaultPrevented ? l.$$parse(e) : (i.url(l.absUrl(), t), s(e))
                            })), l.$$replace = !1, d
                        }), l
                    }]
                },
                $log: function() {
                    var e = !0,
                        t = this;
                    this.debugEnabled = function(t) {
                        return v(t) ? (e = t, this) : e
                    }, this.$get = ["$window", function(n) {
                        function r(e) {
                            var t = n.console || {},
                                r = t[e] || t.log || p;
                            e = !1;
                            try {
                                e = !!r.apply
                            } catch (e) {}
                            return e ? function() {
                                var e = [];
                                return o(arguments, function(t) {
                                    e.push(function(e) {
                                        return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                                    }(t))
                                }), r.apply(t, e)
                            } : function(e, t) {
                                r(e, null == t ? "" : t)
                            }
                        }
                        return {
                            log: r("log"),
                            info: r("info"),
                            warn: r("warn"),
                            error: r("error"),
                            debug: function() {
                                var n = r("debug");
                                return function() {
                                    e && n.apply(t, arguments)
                                }
                            }()
                        }
                    }]
                },
                $parse: function() {
                    var e = {},
                        t = {},
                        n = {
                            csp: !1,
                            unwrapPromises: !1,
                            logPromiseWarnings: !0,
                            expensiveChecks: !1
                        };
                    this.unwrapPromises = function(e) {
                        return v(e) ? (n.unwrapPromises = !!e, this) : n.unwrapPromises
                    }, this.logPromiseWarnings = function(e) {
                        return v(e) ? (n.logPromiseWarnings = e, this) : n.logPromiseWarnings
                    }, this.$get = ["$filter", "$sniffer", "$log", function(r, i, o) {
                        n.csp = i.csp;
                        var a = {
                            csp: n.csp,
                            unwrapPromises: n.unwrapPromises,
                            logPromiseWarnings: n.logPromiseWarnings,
                            expensiveChecks: !0
                        };
                        return Xt = function(e) {
                                n.logPromiseWarnings && !Qt.hasOwnProperty(e) && (Qt[e] = !0, o.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                            },
                            function(i, o) {
                                var s;
                                switch (typeof i) {
                                    case "string":
                                        var l = o ? t : e;
                                        if (l.hasOwnProperty(i)) return l[i];
                                        var c = new rn(s = o ? a : n);
                                        return s = new on(c, r, s).parse(i), "hasOwnProperty" !== i && (l[i] = s), s;
                                    case "function":
                                        return i;
                                    default:
                                        return p
                                }
                            }
                    }]
                },
                $rootScope: function() {
                    var e = 10,
                        t = r("$rootScope"),
                        n = null;
                    this.digestTtl = function(t) {
                        return arguments.length && (e = t), e
                    }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, a, s, c) {
                        function u() {
                            this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
                        }

                        function f(e) {
                            if (m.$$phase) throw t("inprog", m.$$phase);
                            m.$$phase = e
                        }

                        function d(e, t) {
                            var n = s(e);
                            return H(n, t), n
                        }

                        function h(e, t, n) {
                            do {
                                e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                            } while (e = e.$parent)
                        }

                        function g() {}
                        u.prototype = {
                            constructor: u,
                            $new: function(e) {
                                return e ? (e = new u, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$childScopeClass = null
                                }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass), e.this = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
                            },
                            $watch: function(e, t, r) {
                                var i = d(e, "watch"),
                                    o = this.$$watchers,
                                    a = {
                                        fn: t,
                                        last: g,
                                        get: i,
                                        exp: e,
                                        eq: !!r
                                    };
                                if (n = null, !$(t)) {
                                    var s = d(t || p, "listener");
                                    a.fn = function(e, t, n) {
                                        s(n)
                                    }
                                }
                                if ("string" == typeof e && i.constant) {
                                    var l = a.fn;
                                    a.fn = function(e, t, n) {
                                        l.call(this, e, t, n), C(o, a)
                                    }
                                }
                                return o || (o = this.$$watchers = []), o.unshift(a),
                                    function() {
                                        C(o, a), n = null
                                    }
                            },
                            $watchCollection: function(e, t) {
                                var n, r, o, a = this,
                                    l = 1 < t.length,
                                    c = 0,
                                    u = s(e),
                                    f = [],
                                    d = {},
                                    p = !0,
                                    h = 0;
                                return this.$watch(function() {
                                    var e, t;
                                    if (b(n = u(a)))
                                        if (i(n))
                                            for (r !== f && (r = f, h = r.length = 0, c++), e = n.length, h !== e && (c++, r.length = h = e), t = 0; t < e; t++) r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]);
                                        else {
                                            r !== d && (r = d = {}, h = 0, c++), e = 0;
                                            for (t in n) n.hasOwnProperty(t) && (e++, r.hasOwnProperty(t) ? r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]) : (h++, r[t] = n[t], c++));
                                            if (h > e)
                                                for (t in c++, r) r.hasOwnProperty(t) && !n.hasOwnProperty(t) && (h--, delete r[t])
                                        }
                                    else r !== n && (r = n, c++);
                                    return c
                                }, function() {
                                    if (p ? (p = !1, t(n, n, a)) : t(n, o, a), l)
                                        if (b(n))
                                            if (i(n)) {
                                                o = Array(n.length);
                                                for (var e = 0; e < n.length; e++) o[e] = n[e]
                                            } else
                                                for (e in o = {}, n) lt.call(n, e) && (o[e] = n[e]);
                                    else o = n
                                })
                            },
                            $digest: function() {
                                var r, i, o, s, l, u, d, p, h, v, b = this.$$asyncQueue,
                                    y = this.$$postDigestQueue,
                                    x = e,
                                    w = [];
                                f("$digest"), c.$$checkUrlChange(), n = null;
                                do {
                                    for (u = !1, d = this; b.length;) {
                                        try {
                                            (v = b.shift()).scope.$eval(v.expression)
                                        } catch (e) {
                                            m.$$phase = null, a(e)
                                        }
                                        n = null
                                    }
                                    e: do {
                                        if (s = d.$$watchers)
                                            for (l = s.length; l--;) try {
                                                if (r = s[l])
                                                    if ((i = r.get(d)) === (o = r.last) || (r.eq ? N(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                                        if (r === n) {
                                                            u = !1;
                                                            break e
                                                        }
                                                    } else u = !0, n = r, r.last = r.eq ? E(i, null) : i, r.fn(i, o === g ? i : o, d), 5 > x && (p = 4 - x, w[p] || (w[p] = []), h = $(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, h += "; newVal: " + O(i) + "; oldVal: " + O(o), w[p].push(h))
                                            } catch (e) {
                                                m.$$phase = null, a(e)
                                            }
                                        if (!(s = d.$$childHead || d !== this && d.$$nextSibling))
                                            for (; d !== this && !(s = d.$$nextSibling);) d = d.$parent
                                    } while (d = s);
                                    if ((u || b.length) && !x--) throw m.$$phase = null, t("infdig", e, O(w))
                                } while (u || b.length);
                                for (m.$$phase = null; y.length;) try {
                                    y.shift()()
                                } catch (e) {
                                    a(e)
                                }
                            },
                            $destroy: function() {
                                if (!this.$$destroyed) {
                                    var e = this.$parent;
                                    this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (o(this.$$listenerCount, P(null, h, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = p, this.$on = this.$watch = function() {
                                        return p
                                    })
                                }
                            },
                            $eval: function(e, t) {
                                return s(e)(this, t)
                            },
                            $evalAsync: function(e) {
                                m.$$phase || m.$$asyncQueue.length || c.defer(function() {
                                    m.$$asyncQueue.length && m.$digest()
                                }), this.$$asyncQueue.push({
                                    scope: this,
                                    expression: e
                                })
                            },
                            $$postDigest: function(e) {
                                this.$$postDigestQueue.push(e)
                            },
                            $apply: function(e) {
                                try {
                                    return f("$apply"), this.$eval(e)
                                } catch (e) {
                                    a(e)
                                } finally {
                                    m.$$phase = null;
                                    try {
                                        m.$digest()
                                    } catch (e) {
                                        throw a(e), e
                                    }
                                }
                            },
                            $on: function(e, t) {
                                var n = this.$$listeners[e];
                                n || (this.$$listeners[e] = n = []), n.push(t);
                                var r = this;
                                do {
                                    r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                                } while (r = r.$parent);
                                var i = this;
                                return function() {
                                    var r = S(n, t); - 1 !== r && (n[r] = null, h(i, 1, e))
                                }
                            },
                            $emit: function(e, t) {
                                var n, r, i, o = [],
                                    s = this,
                                    l = !1,
                                    c = {
                                        name: e,
                                        targetScope: s,
                                        stopPropagation: function() {
                                            l = !0
                                        },
                                        preventDefault: function() {
                                            c.defaultPrevented = !0
                                        },
                                        defaultPrevented: !1
                                    },
                                    u = [c].concat(ut.call(arguments, 1));
                                do {
                                    for (n = s.$$listeners[e] || o, c.currentScope = s, r = 0, i = n.length; r < i; r++)
                                        if (n[r]) try {
                                            n[r].apply(null, u)
                                        } catch (e) {
                                            a(e)
                                        } else n.splice(r, 1), r--, i--;
                                    if (l) break;
                                    s = s.$parent
                                } while (s);
                                return c
                            },
                            $broadcast: function(e, t) {
                                for (var n, r, i = this, o = this, s = {
                                        name: e,
                                        targetScope: this,
                                        preventDefault: function() {
                                            s.defaultPrevented = !0
                                        },
                                        defaultPrevented: !1
                                    }, l = [s].concat(ut.call(arguments, 1)); i = o;) {
                                    for (s.currentScope = i, o = i.$$listeners[e] || [], n = 0, r = o.length; n < r; n++)
                                        if (o[n]) try {
                                            o[n].apply(null, l)
                                        } catch (e) {
                                            a(e)
                                        } else o.splice(n, 1), n--, r--;
                                    if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== this && i.$$nextSibling))
                                        for (; i !== this && !(o = i.$$nextSibling);) i = i.$parent
                                }
                                return s
                            }
                        };
                        var m = new u;
                        return m
                    }]
                },
                $q: function() {
                    this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
                        return function(e, t) {
                            function r(e) {
                                return e
                            }

                            function i(e) {
                                return l(e)
                            }
                            var a = function() {
                                    var o, l, u = [];
                                    return l = {
                                        resolve: function(t) {
                                            if (u) {
                                                var r = u;
                                                u = n, o = s(t), r.length && e(function() {
                                                    for (var e, t = 0, n = r.length; t < n; t++) e = r[t], o.then(e[0], e[1], e[2])
                                                })
                                            }
                                        },
                                        reject: function(e) {
                                            l.resolve(c(e))
                                        },
                                        notify: function(t) {
                                            if (u) {
                                                var n = u;
                                                u.length && e(function() {
                                                    for (var e = 0, r = n.length; e < r; e++) n[e][2](t)
                                                })
                                            }
                                        },
                                        promise: {
                                            then: function(e, n, s) {
                                                var l = a(),
                                                    c = function(n) {
                                                        try {
                                                            l.resolve(($(e) ? e : r)(n))
                                                        } catch (e) {
                                                            l.reject(e), t(e)
                                                        }
                                                    },
                                                    f = function(e) {
                                                        try {
                                                            l.resolve(($(n) ? n : i)(e))
                                                        } catch (e) {
                                                            l.reject(e), t(e)
                                                        }
                                                    },
                                                    d = function(e) {
                                                        try {
                                                            l.notify(($(s) ? s : r)(e))
                                                        } catch (e) {
                                                            t(e)
                                                        }
                                                    };
                                                return u ? u.push([c, f, d]) : o.then(c, f, d), l.promise
                                            },
                                            catch: function(e) {
                                                return this.then(null, e)
                                            },
                                            finally: function(e) {
                                                function t(e, t) {
                                                    var n = a();
                                                    return t ? n.resolve(e) : n.reject(e), n.promise
                                                }

                                                function n(n, i) {
                                                    var o = null;
                                                    try {
                                                        o = (e || r)()
                                                    } catch (e) {
                                                        return t(e, !1)
                                                    }
                                                    return o && $(o.then) ? o.then(function() {
                                                        return t(n, i)
                                                    }, function(e) {
                                                        return t(e, !1)
                                                    }) : t(n, i)
                                                }
                                                return this.then(function(e) {
                                                    return n(e, !0)
                                                }, function(e) {
                                                    return n(e, !1)
                                                })
                                            }
                                        }
                                    }
                                },
                                s = function(t) {
                                    return t && $(t.then) ? t : {
                                        then: function(n) {
                                            var r = a();
                                            return e(function() {
                                                r.resolve(n(t))
                                            }), r.promise
                                        }
                                    }
                                },
                                l = function(e) {
                                    var t = a();
                                    return t.reject(e), t.promise
                                },
                                c = function(n) {
                                    return {
                                        then: function(r, o) {
                                            var s = a();
                                            return e(function() {
                                                try {
                                                    s.resolve(($(o) ? o : i)(n))
                                                } catch (e) {
                                                    s.reject(e), t(e)
                                                }
                                            }), s.promise
                                        }
                                    }
                                };
                            return {
                                defer: a,
                                reject: l,
                                when: function(n, o, c, u) {
                                    var f, d = a(),
                                        p = function(e) {
                                            try {
                                                return ($(o) ? o : r)(e)
                                            } catch (e) {
                                                return t(e), l(e)
                                            }
                                        },
                                        h = function(e) {
                                            try {
                                                return ($(c) ? c : i)(e)
                                            } catch (e) {
                                                return t(e), l(e)
                                            }
                                        },
                                        g = function(e) {
                                            try {
                                                return ($(u) ? u : r)(e)
                                            } catch (e) {
                                                t(e)
                                            }
                                        };
                                    return e(function() {
                                        s(n).then(function(e) {
                                            f || (f = !0, d.resolve(s(e).then(p, h, g)))
                                        }, function(e) {
                                            f || (f = !0, d.resolve(h(e)))
                                        }, function(e) {
                                            f || d.notify(g(e))
                                        })
                                    }), d.promise
                                },
                                all: function(e) {
                                    var t = a(),
                                        n = 0,
                                        r = mt(e) ? [] : {};
                                    return o(e, function(e, i) {
                                        n++, s(e).then(function(e) {
                                            r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                                        }, function(e) {
                                            r.hasOwnProperty(i) || t.reject(e)
                                        })
                                    }), 0 === n && t.resolve(r), t.promise
                                }
                            }
                        }(function(t) {
                            e.$evalAsync(t)
                        }, t)
                    }]
                },
                $sce: function() {
                    var e = !0;
                    this.enabled = function(t) {
                        return arguments.length && (e = !!t), e
                    }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, n, r) {
                        if (e && n.msie && 8 > n.msieDocumentMode) throw ln("iequirks");
                        var i = A(cn);
                        i.isEnabled = function() {
                            return e
                        }, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, e || (i.trustAs = i.getTrusted = function(e, t) {
                            return t
                        }, i.valueOf = h), i.parseAs = function(e, n) {
                            var r = t(n);
                            return r.literal && r.constant ? r : function(t, n) {
                                return i.getTrusted(e, r(t, n))
                            }
                        };
                        var a = i.parseAs,
                            s = i.getTrusted,
                            l = i.trustAs;
                        return o(cn, function(e, t) {
                            var n = st(t);
                            i[G("parse_as_" + n)] = function(t) {
                                return a(e, t)
                            }, i[G("get_trusted_" + n)] = function(t) {
                                return s(e, t)
                            }, i[G("trust_as_" + n)] = function(t) {
                                return l(e, t)
                            }
                        }), i
                    }]
                },
                $sceDelegate: function() {
                    this.SCE_CONTEXTS = cn;
                    var e = ["self"],
                        t = [];
                    this.resourceUrlWhitelist = function(t) {
                        return arguments.length && (e = Fe(t)), e
                    }, this.resourceUrlBlacklist = function(e) {
                        return arguments.length && (t = Fe(e)), t
                    }, this.$get = ["$injector", function(r) {
                        function i(e) {
                            var t = function(e) {
                                this.$$unwrapTrustedValue = function() {
                                    return e
                                }
                            };
                            return e && (t.prototype = new e), t.prototype.valueOf = function() {
                                return this.$$unwrapTrustedValue()
                            }, t.prototype.toString = function() {
                                return this.$$unwrapTrustedValue().toString()
                            }, t
                        }
                        var o = function(e) {
                            throw ln("unsafe")
                        };
                        r.has("$sanitize") && (o = r.get("$sanitize"));
                        var a = i(),
                            s = {};
                        return s[cn.HTML] = i(a), s[cn.CSS] = i(a), s[cn.URL] = i(a), s[cn.JS] = i(a), s[cn.RESOURCE_URL] = i(s[cn.URL]), {
                            trustAs: function(e, t) {
                                var r = s.hasOwnProperty(e) ? s[e] : null;
                                if (!r) throw ln("icontext", e, t);
                                if (null === t || t === n || "" === t) return t;
                                if ("string" != typeof t) throw ln("itype", e);
                                return new r(t)
                            },
                            getTrusted: function(r, i) {
                                if (null === i || i === n || "" === i) return i;
                                if ((c = s.hasOwnProperty(r) ? s[r] : null) && i instanceof c) return i.$$unwrapTrustedValue();
                                if (r === cn.RESOURCE_URL) {
                                    var a, l, c = Be(i.toString()),
                                        u = !1;
                                    for (a = 0, l = e.length; a < l; a++)
                                        if ("self" === e[a] ? Re(c) : e[a].exec(c.href)) {
                                            u = !0;
                                            break
                                        }
                                    if (u)
                                        for (a = 0, l = t.length; a < l; a++)
                                            if ("self" === t[a] ? Re(c) : t[a].exec(c.href)) {
                                                u = !1;
                                                break
                                            }
                                    if (u) return i;
                                    throw ln("insecurl", i.toString())
                                }
                                if (r === cn.HTML) return o(i);
                                throw ln("unsafe")
                            },
                            valueOf: function(e) {
                                return e instanceof a ? e.$$unwrapTrustedValue() : e
                            }
                        }
                    }]
                },
                $sniffer: function() {
                    this.$get = ["$window", "$document", function(e, t) {
                        var n, r = {},
                            i = f((/android (\d+)/.exec(st((e.navigator || {}).userAgent)) || [])[1]),
                            o = /Boxee/i.test((e.navigator || {}).userAgent),
                            a = t[0] || {},
                            s = a.documentMode,
                            l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                            c = a.body && a.body.style,
                            u = !1,
                            d = !1;
                        if (c) {
                            for (var p in c)
                                if (u = l.exec(p)) {
                                    n = u[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                                    break
                                }
                            n || (n = "WebkitOpacity" in c && "webkit"), u = !!("transition" in c || n + "Transition" in c), d = !!("animation" in c || n + "Animation" in c), !i || u && d || (u = y(a.body.style.webkitTransition), d = y(a.body.style.webkitAnimation))
                        }
                        return {
                            history: !(!e.history || !e.history.pushState || 4 > i || o),
                            hashchange: "onhashchange" in e && (!s || 7 < s),
                            hasEvent: function(e) {
                                if ("input" == e && 9 == tt) return !1;
                                if (m(r[e])) {
                                    var t = a.createElement("div");
                                    r[e] = "on" + e in t
                                }
                                return r[e]
                            },
                            csp: bt(),
                            vendorPrefix: n,
                            transitions: u,
                            animations: d,
                            android: i,
                            msie: tt,
                            msieDocumentMode: s
                        }
                    }]
                },
                $templateCache: function() {
                    this.$get = ["$cacheFactory", function(e) {
                        return e("templates")
                    }]
                },
                $timeout: function() {
                    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(e, t, n, r) {
                        function i(i, a, s) {
                            var l = n.defer(),
                                c = l.promise,
                                u = v(s) && !s;
                            return a = t.defer(function() {
                                try {
                                    l.resolve(i())
                                } catch (e) {
                                    l.reject(e), r(e)
                                } finally {
                                    delete o[c.$$timeoutId]
                                }
                                u || e.$apply()
                            }, a), c.$$timeoutId = a, o[a] = l, c
                        }
                        var o = {};
                        return i.cancel = function(e) {
                            return !!(e && e.$$timeoutId in o) && (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
                        }, i
                    }]
                },
                $window: function() {
                    this.$get = g(e)
                },
                $$rAF: function() {
                    this.$get = ["$window", "$timeout", function(e, t) {
                        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
                            r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                            i = !!n,
                            o = i ? function(e) {
                                var t = n(e);
                                return function() {
                                    r(t)
                                }
                            } : function(e) {
                                var n = t(e, 16.66, !1);
                                return function() {
                                    t.cancel(n)
                                }
                            };
                        return o.supported = i, o
                    }]
                },
                $$asyncCallback: function() {
                    this.$get = ["$$rAF", "$timeout", function(e, t) {
                        return e.supported ? function(t) {
                            return e(t)
                        } : function(e) {
                            return t(e, 0, !1)
                        }
                    }]
                }
            })
        }])
    }(ht), nt(t).ready(function() {
        ! function(e, n) {
            function r(e) {
                e && s.push(e)
            }
            var i, a, s = [e],
                l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            o(l, function(n) {
                l[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (o(e.querySelectorAll("." + n), r), o(e.querySelectorAll("." + n + "\\:"), r), o(e.querySelectorAll("[" + n + "]"), r))
            }), o(s, function(e) {
                if (!i) {
                    var t = c.exec(" " + e.className + " ");
                    t ? (i = e, a = (t[2] || "").replace(/\s+/g, ",")) : o(e.attributes, function(t) {
                        !i && l[t.name] && (i = e, a = t.value)
                    })
                }
            }), i && n(i, a ? [a] : [])
        }(t, j)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("sly", ["slyEvaluate", "slyRepeat"]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function(e) {
        return {
            scope: !0,
            restrict: "A",
            compile: function(t, n) {
                return {
                    pre: function(t, n, r) {
                        var i = null,
                            o = !1,
                            a = e(r.slyEvaluateOnlyWhen),
                            s = null;
                        if (hasProperty(r, "slyAlwaysEvaluate") && (s = r.slyAlwaysEvaluate, isStringEmpty(s))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
                        t.$addWatcherGate(function() {
                            var e = a(t);
                            if (!o) return o = !0, i = e, !0;
                            var n = i !== e;
                            return i = e, n
                        }, function(e) {
                            return isNull(s) || !(isStringNonempty(e) && e.indexOf(s) >= 0)
                        }, !0)
                    }
                }
            }
        }
    }]).directive("slyAlwaysEvaluate", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {}
        }
    }).directive("slyShow", ["$animate", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                t.$watch(r.slyShow, function(t) {
                    e[function(e) {
                        if (e && 0 !== e.length) {
                            var t = "" + e;
                            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
                        } else e = !1;
                        return e
                    }(t) ? "removeClass" : "addClass"](n, "ng-hide")
                }, !1, "slyShow")
            }
        }
    }]).directive("slyPreventEvaluationWhenHidden", function() {
        return {
            restrict: "A",
            scope: !0,
            compile: function(e, t) {
                return {
                    pre: function(e, t, n) {
                        e.$addWatcherGate(function() {
                            return !t.hasClass("ng-hide")
                        }, function(e, t, n, r) {
                            return !isDefined(r) || "slyShow" != r
                        })
                    }
                }
            }
        }
    }), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function(e, t) {
        return {
            restrict: "A",
            scope: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(t, n, r) {
                return function(t, n, i) {
                    var o = i.slyRepeat,
                        a = o.match(/^\s*(.+)\s+in\s+(.*?)$/);
                    if (!a) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + o + "'.");
                    var s = a[1],
                        l = a[2];
                    if (!(a = s.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
                    var c = [],
                        u = [],
                        f = t.$watchCollection(l, function(i) {
                            if (i) {
                                if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + l);
                                var o = c.length;
                                if (c.length < i.length && u.length > 0) {
                                    var a = c.length + u.length;
                                    a > i.length && (a = i.length), c = c.concat(u.splice(0, a - c.length))
                                }
                                var f = null,
                                    d = [],
                                    p = [];
                                if (i.length > c.length) {
                                    for (b = c.length; b < i.length; ++b) {
                                        var h = {
                                            scope: t.$new(),
                                            isActiveForRepeat: !0
                                        };
                                        ! function(e) {
                                            e.scope.$addWatcherGate(function() {
                                                return e.isActiveForRepeat
                                            })
                                        }(h), h.scope.$index = b, h.scope.$first = 0 == b, p.push(h)
                                    }
                                    f = c.concat(p), d = u
                                } else if (i.length < c.length) {
                                    for (b = i.length; b < c.length; ++b) c[b].isActiveForRepeat = !1;
                                    d = c.splice(i.length, c.length - i.length).concat(u), f = c
                                } else f = c, d = u;
                                if (f.length > 0) {
                                    var g = f.length - 1,
                                        m = f.length - 1;
                                    o < f.length && (g = o), g > 0 && (g -= 1);
                                    for (b = g; b <= m; ++b) f[b].scope.$last = b == f.length - 1, f[b].scope.$middle = 0 != b && b != f.length - 1, f[b].isActiveForRepeat || (f[b].isActiveForRepeat = !0, f[b].element.css("display", ""))
                                }
                                for (b = 0; b < d.length && !d[b].isActiveForRepeat; ++b) d[b].element.css("display", "none");
                                for (b = 0; b < f.length; ++b) f[b].scope[s] = i[b];
                                var v = n;
                                c.length > 0 && (v = c[c.length - 1].element);
                                for (var b = 0; b < p.length; ++b) r(p[b].scope, function(t) {
                                    e.enter(t, null, v), v = t, p[b].element = t
                                });
                                c = f, u = d
                            }
                        });
                    t.$on("$destroy", function() {
                        f()
                    })
                }
            }
        }
    }]), defineScalyrAngularModule("gatedScope", []).config(["$provide", function(e) {
        e.decorator("$rootScope", ["$delegate", "$exceptionHandler", function(e, t) {
            var n = {};
            for (var r in e) isFunction(e[r]) && (n[r] = e[r]);
            var i, o = e.constructor,
                a = {};
            return a.$new = function(e) {
                var t = n.$new.call(this, e);
                return t.$$gatingFunction = this.$$gatingFunction, t.$$parentGatingFunction = this.$$gatingFunction, t.$$shouldGateFunction = this.$$shouldGateFunction, t.$$gatedWatchers = [], t.$$cleanUpQueue = this.$$cleanUpQueue, t
            }, a.$digestGated = function(e) {
                var n, r, o, a, s, l, c = this,
                    u = !1;
                do {
                    if (o = c.$$gatedWatchers)
                        for (a = o.length; a--;) try {
                            if ((n = o[a]).gatingFunction !== e) continue;
                            n && !isNull(n.cleanUp) && (n.cleanUp(), n.cleanUp = null), n && (r = n.get(c)) !== (l = n.last) && !(n.eq ? areEqual(r, l) : "number" == typeof r && "number" == typeof l && isNaN(r) && isNaN(l)) && (u = !0, n.last = n.eq ? copy(r) : r, n.fn(r, l === i ? r : l, c))
                        } catch (e) {
                            t(e)
                        }
                    if (!(s = c.$$gatingFunction === e && c.$$childHead || c !== this && c.$$nextSibling))
                        for (; c !== this && !(s = c.$$nextSibling);) c = c.$parent
                } while (c = s);
                return e.hasDigested = !0, u
            }, a.$watch = function(e, t, r, o) {
                if (isNull(this.$$gatingFunction) || !isNull(this.$$shouldGateFunction) && !this.$$shouldGateFunction(e, t, r, o)) return n.$watch.call(this, e, t, r);
                var a = this.$$watchers;
                this.$$watchers = this.$$gatedWatchers;
                var s = n.$watch.call(this, e, t, r);
                this.$$watchers = a, this.$$gatedWatchers[0].gatingFunction = this.$$gatingFunction, this.$$gatedWatchers[0].cleanUp = null, i = this.$$gatedWatchers[0].last;
                var l = this.$$gatedWatchers[0];
                if (this.$$gatingFunction.shouldEvalNewWatchers && this.$$gatingFunction.hasDigested) {
                    var c = this;
                    l.cleanUp = n.$watch.call(c, function() {
                        isNull(l.cleanUp) || (c.$$cleanUpQueue.unshift(l.cleanUp), l.cleanUp = null);
                        var e, t = i;
                        return l && (e = l.get(c)) !== (t = l.last) && !(l.eq ? areEqual(e, t) : "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)) && (l.last = l.eq ? copy(e) : e, l.fn(e, t === i ? e : t, c)), l.last
                    })
                }
                return s
            }, a.$digest = function() {
                var e = !1;
                if (!isNull(this.$$parentGatingFunction) && this.$$parentGatingFunction()) {
                    var r = 5;
                    do {
                        if (e = this.$digestGated(this.$$parentGatingFunction), r--, e && !r--) throw Error(TTL + " $digest() iterations reached for gated watcher. Aborting!\nWatchers fired in the last 5 iterations.")
                    } while (e)
                }
                e = n.$digest.call(this) || e;
                for (var i = this.$$cleanUpQueue; i.length;) try {
                    i.shift()()
                } catch (e) {
                    t(e)
                }
                return e
            }, a.$addWatcherGate = function(e, t, r) {
                var i = 0,
                    o = this,
                    a = !isNull(this.$$gatingFunction);
                ! function() {
                    var t = null;
                    o.$watch(function() {
                        return e() ? o.$digestGated(e) && ++i : a && isNull(t) && (t = n.$watch.call(o, function() {
                            return e() && (t(), t = null, o.$digestGated(e) && ++i), i
                        })), i
                    })
                }(), isUndefined(t) && (t = null), isUndefined(r) && (r = !1), this.$$gatingFunction = e, this.$$gatingFunction.shouldEvalNewWatchers = r, this.$$shouldGateFunction = t
            }, angular.extend(o.prototype, a), angular.extend(e, a), e.$$gatingFunction = null, e.$$parentGatingFunction = null, e.$$shouldGateFunction = null, e.$$gatedWatchers = [], e.$$cleanUpQueue = [], e
        }])
    }]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function(e) {
        return {
            scope: !0,
            restrict: "A",
            compile: function(t, n) {
                return {
                    pre: function(t, n, r) {
                        var i = null,
                            o = !1,
                            a = e(r.slyEvaluateOnlyWhen),
                            s = null;
                        if (hasProperty(r, "slyAlwaysEvaluate") && (s = r.slyAlwaysEvaluate, isStringEmpty(s))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
                        t.$addWatcherGate(function() {
                            var e = a(t);
                            if (!o) return o = !0, i = e, !0;
                            var n = i !== e;
                            return i = e, n
                        }, function(e) {
                            return isNull(s) || !(isStringNonempty(e) && e.indexOf(s) >= 0)
                        }, !0)
                    }
                }
            }
        }
    }]).directive("slyAlwaysEvaluate", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {}
        }
    }).directive("slyShow", ["$animate", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                t.$watch(r.slyShow, function(t) {
                    e[function(e) {
                        if (e && 0 !== e.length) {
                            var t = "" + e;
                            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
                        } else e = !1;
                        return e
                    }(t) ? "removeClass" : "addClass"](n, "ng-hide")
                }, !1, "slyShow")
            }
        }
    }]).directive("slyPreventEvaluationWhenHidden", function() {
        return {
            restrict: "A",
            scope: !0,
            compile: function(e, t) {
                return {
                    pre: function(e, t, n) {
                        e.$addWatcherGate(function() {
                            return !t.hasClass("ng-hide")
                        }, function(e, t, n, r) {
                            return !isDefined(r) || "slyShow" != r
                        })
                    }
                }
            }
        }
    }), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function(e, t) {
        return {
            restrict: "A",
            scope: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(t, n, r) {
                return function(t, n, i) {
                    var o = i.slyRepeat,
                        a = o.match(/^\s*(.+)\s+in\s+(.*?)$/);
                    if (!a) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + o + "'.");
                    var s = a[1],
                        l = a[2];
                    if (!(a = s.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
                    var c = [],
                        u = [],
                        f = t.$watchCollection(l, function(i) {
                            if (i) {
                                if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + l);
                                var o = c.length;
                                if (c.length < i.length && u.length > 0) {
                                    var a = c.length + u.length;
                                    a > i.length && (a = i.length), c = c.concat(u.splice(0, a - c.length))
                                }
                                var f = null,
                                    d = [],
                                    p = [];
                                if (i.length > c.length) {
                                    for (b = c.length; b < i.length; ++b) {
                                        var h = {
                                            scope: t.$new(),
                                            isActiveForRepeat: !0
                                        };
                                        ! function(e) {
                                            e.scope.$addWatcherGate(function() {
                                                return e.isActiveForRepeat
                                            })
                                        }(h), h.scope.$index = b, h.scope.$first = 0 == b, p.push(h)
                                    }
                                    f = c.concat(p), d = u
                                } else if (i.length < c.length) {
                                    for (b = i.length; b < c.length; ++b) c[b].isActiveForRepeat = !1;
                                    d = c.splice(i.length, c.length - i.length).concat(u), f = c
                                } else f = c, d = u;
                                if (f.length > 0) {
                                    var g = f.length - 1,
                                        m = f.length - 1;
                                    o < f.length && (g = o), g > 0 && (g -= 1);
                                    for (b = g; b <= m; ++b) f[b].scope.$last = b == f.length - 1, f[b].scope.$middle = 0 != b && b != f.length - 1, f[b].isActiveForRepeat || (f[b].isActiveForRepeat = !0, f[b].element.css("display", ""))
                                }
                                for (b = 0; b < d.length && !d[b].isActiveForRepeat; ++b) d[b].element.css("display", "none");
                                for (b = 0; b < f.length; ++b) f[b].scope[s] = i[b];
                                var v = n;
                                c.length > 0 && (v = c[c.length - 1].element);
                                for (var b = 0; b < p.length; ++b) r(p[b].scope, function(t) {
                                    e.enter(t, null, v), v = t, p[b].element = t
                                });
                                c = f, u = d
                            }
                        });
                    t.$on("$destroy", function() {
                        f()
                    })
                }
            }
        }
    }]),
    function(e, t) {
        "use strict";

        function n() {
            return ["$animate", function(e) {
                return {
                    restrict: "AE",
                    transclude: "element",
                    priority: 1,
                    terminal: !0,
                    require: "^^ngMessages",
                    link: function(t, n, r, o, a) {
                        var s, l = n[0],
                            c = r.ngMessage || r.when,
                            u = r.ngMessageExp || r.whenExp,
                            f = function(e) {
                                s = e ? i(e) ? e : e.split(/[\s,]+/) : null, o.reRender()
                            };
                        u ? (f(t.$eval(u)), t.$watchCollection(u, f)) : f(c);
                        var d, p;
                        o.register(l, p = {
                            test: function(e) {
                                return function(e, t) {
                                    if (e) return i(e) ? e.indexOf(t) >= 0 : e.hasOwnProperty(t)
                                }(s, e)
                            },
                            attach: function() {
                                d || a(function(t, r) {
                                    e.enter(t, null, n);
                                    var i = (d = t).$$attachId = o.getAttachId();
                                    d.on("$destroy", function() {
                                        d && d.$$attachId === i && (o.deregister(l), p.detach()), r.$destroy()
                                    })
                                })
                            },
                            detach: function() {
                                if (d) {
                                    var t = d;
                                    d = null, e.leave(t)
                                }
                            }
                        })
                    }
                }
            }]
        }
        var r, i, o, a;
        t.module("ngMessages", [], function() {
            r = t.forEach, i = t.isArray, o = t.isString, a = t.element
        }).directive("ngMessages", ["$animate", function(e) {
            function t(e, t) {
                return o(t) && 0 === t.length || n(e.$eval(t))
            }

            function n(e) {
                return o(e) ? e.length : !!e
            }
            return {
                require: "ngMessages",
                restrict: "AE",
                controller: ["$element", "$scope", "$attrs", function(i, o, a) {
                    function s(e, t) {
                        for (var n = t, r = []; n && n !== e;) {
                            var i = n.$$ngMessageNode;
                            if (i && i.length) return p[i];
                            n.childNodes.length && -1 === r.indexOf(n) ? (r.push(n), n = n.childNodes[n.childNodes.length - 1]) : n.previousSibling ? n = n.previousSibling : (n = n.parentNode, r.push(n))
                        }
                    }
                    var l = this,
                        c = 0,
                        u = 0;
                    this.getAttachId = function() {
                        return u++
                    };
                    var f, d, p = this.messages = {};
                    this.render = function(s) {
                        f = !1, d = s = s || {};
                        for (var c = t(o, a.ngMessagesMultiple) || t(o, a.multiple), u = [], p = {}, h = l.head, g = !1, m = 0; null != h;) {
                            m++;
                            var v = h.message,
                                b = !1;
                            g || r(s, function(e, t) {
                                if (!b && n(e) && v.test(t)) {
                                    if (p[t]) return;
                                    p[t] = !0, b = !0, v.attach()
                                }
                            }), b ? g = !c : u.push(v), h = h.next
                        }
                        r(u, function(e) {
                            e.detach()
                        }), u.length !== m ? e.setClass(i, "ng-active", "ng-inactive") : e.setClass(i, "ng-inactive", "ng-active")
                    }, o.$watchCollection(a.ngMessages || a.for, l.render), i.on("$destroy", function() {
                        r(p, function(e) {
                            e.message.detach()
                        })
                    }), this.reRender = function() {
                        f || (f = !0, o.$evalAsync(function() {
                            f && d && l.render(d)
                        }))
                    }, this.register = function(e, t) {
                        var n = c.toString();
                        p[n] = {
                                message: t
                            },
                            function(e, t, n) {
                                var r = p[n];
                                if (l.head) {
                                    var i = s(e, t);
                                    i ? (r.next = i.next, i.next = r) : (r.next = l.head, l.head = r)
                                } else l.head = r
                            }(i[0], e, n), e.$$ngMessageNode = n, c++, l.reRender()
                    }, this.deregister = function(e) {
                        var t = e.$$ngMessageNode;
                        delete e.$$ngMessageNode,
                            function(e, t, n) {
                                var r = p[n],
                                    i = s(e, t);
                                i ? i.next = r.next : l.head = r.next
                            }(i[0], e, t), delete p[t], l.reRender()
                    }
                }]
            }
        }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(e, t, n) {
            function r(e, r) {
                var i = n.$$createComment ? n.$$createComment("ngMessagesInclude", r) : t[0].createComment(" ngMessagesInclude: " + r + " "),
                    o = a(i);
                e.after(o), e.remove()
            }
            return {
                restrict: "AE",
                require: "^^ngMessages",
                link: function(t, i, a) {
                    var s = a.ngMessagesInclude || a.src;
                    e(s).then(function(e) {
                        t.$$destroyed || (o(e) && !e.trim() ? r(i, s) : n(e)(t, function(e) {
                            i.after(e), r(i, s)
                        }))
                    })
                }
            }
        }]).directive("ngMessage", n()).directive("ngMessageExp", n())
    }(window, window.angular),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t()
        }) : "object" == typeof exports ? module.exports = t() : t()
    }(0, function() {
        function e(e) {
            "use strict";
            var t = e.storageKey(),
                n = e.storage(),
                r = function() {
                    var r = e.preferredLanguage();
                    angular.isString(r) ? e.use(r) : n.put(t, e.use())
                };
            r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(t) ? e.use(n.get(t)).catch(r) : r() : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
        }

        function t(e, t, n, r) {
            "use strict";
            var i, o, a, s, l, c, u, f, d, p, h, g, m, v, b, y = {},
                x = [],
                w = e,
                $ = [],
                k = "translate-cloak",
                T = !1,
                S = !1,
                C = ".",
                E = 0,
                A = !0,
                N = "default",
                P = {
                    default: function(e) {
                        return (e || "").split("-").join("_")
                    },
                    java: function(e) {
                        var t = (e || "").split("-").join("_"),
                            n = t.split("_");
                        return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : t
                    },
                    bcp47: function(e) {
                        var t = (e || "").split("_").join("-"),
                            n = t.split("-");
                        return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : t
                    }
                },
                O = function() {
                    if (angular.isFunction(r.getLocale)) return r.getLocale();
                    var e, n, i = t.$get().navigator,
                        o = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                    if (angular.isArray(i.languages))
                        for (e = 0; e < i.languages.length; e++)
                            if ((n = i.languages[e]) && n.length) return n;
                    for (e = 0; e < o.length; e++)
                        if ((n = i[o[e]]) && n.length) return n;
                    return null
                };
            O.displayName = "angular-translate/service: getFirstBrowserLanguage";
            var D = function() {
                var e = O() || "";
                return P[N] && (e = P[N](e)), e
            };
            D.displayName = "angular-translate/service: getLocale";
            var I = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                M = function() {
                    return this.toString().replace(/^\s+|\s+$/g, "")
                },
                _ = function(e) {
                    for (var t = [], n = angular.lowercase(e), r = 0, i = x.length; i > r; r++) t.push(angular.lowercase(x[r]));
                    if (I(t, n) > -1) return e;
                    if (o) {
                        var a;
                        for (var s in o) {
                            var l = !1,
                                c = Object.prototype.hasOwnProperty.call(o, s) && angular.lowercase(s) === angular.lowercase(e);
                            if ("*" === s.slice(-1) && (l = s.slice(0, -1) === e.slice(0, s.length - 1)), (c || l) && (a = o[s], I(t, angular.lowercase(a)) > -1)) return a
                        }
                    }
                    if (e) {
                        var u = e.split("_");
                        if (u.length > 1 && I(t, angular.lowercase(u[0])) > -1) return u[0]
                    }
                    return e
                },
                L = function(e, t) {
                    if (!e && !t) return y;
                    if (e && !t) {
                        if (angular.isString(e)) return y[e]
                    } else angular.isObject(y[e]) || (y[e] = {}), angular.extend(y[e], F(t));
                    return this
                };
            this.translations = L, this.cloakClassName = function(e) {
                return e ? (k = e, this) : k
            }, this.nestedObjectDelimeter = function(e) {
                return e ? (C = e, this) : C
            };
            var F = function(e, t, n, r) {
                var i, o, a, s;
                t || (t = []), n || (n = {});
                for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (s = e[i], angular.isObject(s) ? F(s, t.concat(i), n, i) : (o = t.length ? "" + t.join(C) + C + i : i, t.length && i === r && (a = "" + t.join(C), n[a] = "@:" + o), n[o] = s));
                return n
            };
            F.displayName = "flatObject", this.addInterpolation = function(e) {
                return $.push(e), this
            }, this.useMessageFormatInterpolation = function() {
                return this.useInterpolation("$translateMessageFormatInterpolation")
            }, this.useInterpolation = function(e) {
                return p = e, this
            }, this.useSanitizeValueStrategy = function(e) {
                return n.useStrategy(e), this
            }, this.preferredLanguage = function(e) {
                return e ? (B(e), this) : i
            };
            var B = function(e) {
                return e && (i = e), i
            };
            this.translationNotFoundIndicator = function(e) {
                return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
            }, this.translationNotFoundIndicatorLeft = function(e) {
                return e ? (m = e, this) : m
            }, this.translationNotFoundIndicatorRight = function(e) {
                return e ? (v = e, this) : v
            }, this.fallbackLanguage = function(e) {
                return R(e), this
            };
            var R = function(e) {
                return e ? (angular.isString(e) ? (s = !0, a = [e]) : angular.isArray(e) && (s = !1, a = e), angular.isString(i) && I(a, i) < 0 && a.push(i), this) : s ? a[0] : a
            };
            this.use = function(e) {
                if (e) {
                    if (!y[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
                    return l = e, this
                }
                return l
            };
            var j = function(e) {
                return e ? (w = e, this) : f ? f + w : w
            };
            this.storageKey = j, this.useUrlLoader = function(e, t) {
                return this.useLoader("$translateUrlLoader", angular.extend({
                    url: e
                }, t))
            }, this.useStaticFilesLoader = function(e) {
                return this.useLoader("$translateStaticFilesLoader", e)
            }, this.useLoader = function(e, t) {
                return h = e, g = t || {}, this
            }, this.useLocalStorage = function() {
                return this.useStorage("$translateLocalStorage")
            }, this.useCookieStorage = function() {
                return this.useStorage("$translateCookieStorage")
            }, this.useStorage = function(e) {
                return u = e, this
            }, this.storagePrefix = function(e) {
                return e ? (f = e, this) : e
            }, this.useMissingTranslationHandlerLog = function() {
                return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
            }, this.useMissingTranslationHandler = function(e) {
                return d = e, this
            }, this.usePostCompiling = function(e) {
                return T = !!e, this
            }, this.forceAsyncReload = function(e) {
                return S = !!e, this
            }, this.uniformLanguageTag = function(e) {
                return e ? angular.isString(e) && (e = {
                    standard: e
                }) : e = {}, N = e.standard, this
            }, this.determinePreferredLanguage = function(e) {
                var t = e && angular.isFunction(e) ? e() : D();
                return i = x.length ? _(t) : t, this
            }, this.registerAvailableLanguageKeys = function(e, t) {
                return e ? (x = e, t && (o = t), this) : x
            }, this.useLoaderCache = function(e) {
                return !1 === e ? b = void 0 : !0 === e ? b = !0 : void 0 === e ? b = "$translationCache" : e && (b = e), this
            }, this.directivePriority = function(e) {
                return void 0 === e ? E : (E = e, this)
            }, this.statefulFilter = function(e) {
                return void 0 === e ? A : (A = e, this)
            }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(e, t, n, r) {
                var o, f, x, N, P = t.get(p || "$translateDefaultInterpolation"),
                    O = !1,
                    D = {},
                    q = {},
                    U = function(e, t, n, s) {
                        if (angular.isArray(e)) {
                            return function(e) {
                                for (var i = {}, o = [], a = 0, l = e.length; l > a; a++) o.push(function(e) {
                                    var o = r.defer(),
                                        a = function(t) {
                                            i[e] = t, o.resolve([e, t])
                                        };
                                    return U(e, t, n, s).then(a, a), o.promise
                                }(e[a]));
                                return r.all(o).then(function() {
                                    return i
                                })
                            }(e)
                        }
                        var c = r.defer();
                        e && (e = M.apply(e));
                        var d = function() {
                            var e = i ? q[i] : q[l];
                            if (f = 0, u && !e) {
                                var t = o.get(w);
                                if (e = q[t], a && a.length) {
                                    var n = I(a, t);
                                    f = 0 === n ? 1 : 0, I(a, i) < 0 && a.push(i)
                                }
                            }
                            return e
                        }();
                        if (d) {
                            var p = function() {
                                Z(e, t, n, s).then(c.resolve, c.reject)
                            };
                            p.displayName = "promiseResolved", d.finally(p, c.reject)
                        } else Z(e, t, n, s).then(c.resolve, c.reject);
                        return c.promise
                    },
                    H = function(e) {
                        return m && (e = [m, e].join(" ")), v && (e = [e, v].join(" ")), e
                    },
                    V = function(e) {
                        l = e, u && o.put(U.storageKey(), l), n.$emit("$translateChangeSuccess", {
                            language: e
                        }), P.setLocale(l);
                        var t = function(e, t) {
                            D[t].setLocale(l)
                        };
                        t.displayName = "eachInterpolatorLocaleSetter", angular.forEach(D, t), n.$emit("$translateChangeEnd", {
                            language: e
                        })
                    },
                    z = function(e) {
                        if (!e) throw "No language key specified for loading.";
                        var i = r.defer();
                        n.$emit("$translateLoadingStart", {
                            language: e
                        }), O = !0;
                        var o = b;
                        "string" == typeof o && (o = t.get(o)), O && N && N.resolve(), N = r.defer();
                        var a = angular.extend({}, g, {
                                key: e,
                                $http: angular.extend({}, {
                                    cache: o,
                                    timeout: N.promise
                                }, g.$http)
                            }),
                            s = function(t) {
                                var r = {};
                                n.$emit("$translateLoadingSuccess", {
                                    language: e
                                }), angular.isArray(t) ? angular.forEach(t, function(e) {
                                    angular.extend(r, F(e))
                                }) : angular.extend(r, F(t)), O = !1, i.resolve({
                                    key: e,
                                    table: r
                                }), n.$emit("$translateLoadingEnd", {
                                    language: e
                                })
                            };
                        s.displayName = "onLoaderSuccess";
                        var l = function(e) {
                            n.$emit("$translateLoadingError", {
                                language: e
                            }), i.reject(e), n.$emit("$translateLoadingEnd", {
                                language: e
                            })
                        };
                        return l.displayName = "onLoaderError", t.get(h)(a).then(s, l), i.promise
                    };
                if (u && (!(o = t.get(u)).get || !o.put)) throw new Error("Couldn't use storage '" + u + "', missing get() or put() method!");
                if ($.length) {
                    var W = function(e) {
                        var n = t.get(e);
                        n.setLocale(i || l), D[n.getInterpolationIdentifier()] = n
                    };
                    W.displayName = "interpolationFactoryAdder", angular.forEach($, W)
                }
                var G = function(e, t, n, i) {
                        var o = r.defer(),
                            a = function(r) {
                                if (Object.prototype.hasOwnProperty.call(r, t)) {
                                    i.setLocale(e);
                                    var a = r[t];
                                    "@:" === a.substr(0, 2) ? G(e, a.substr(2), n, i).then(o.resolve, o.reject) : o.resolve(i.interpolate(r[t], n)), i.setLocale(l)
                                } else o.reject()
                            };
                        return a.displayName = "fallbackTranslationResolver",
                            function(e) {
                                var t = r.defer();
                                if (Object.prototype.hasOwnProperty.call(y, e)) t.resolve(y[e]);
                                else if (q[e]) {
                                    var n = function(e) {
                                        L(e.key, e.table), t.resolve(e.table)
                                    };
                                    n.displayName = "translationTableResolver", q[e].then(n, t.reject)
                                } else t.reject();
                                return t.promise
                            }(e).then(a, o.reject), o.promise
                    },
                    Y = function(e, t, n, r) {
                        var i, o = y[e];
                        if (o && Object.prototype.hasOwnProperty.call(o, t)) {
                            if (r.setLocale(e), "@:" === (i = r.interpolate(o[t], n)).substr(0, 2)) return Y(e, i.substr(2), n, r);
                            r.setLocale(l)
                        }
                        return i
                    },
                    X = function(e, n) {
                        if (d) {
                            var r = t.get(d)(e, l, n);
                            return void 0 !== r ? r : e
                        }
                        return e
                    },
                    K = function(e, t, n, i, o) {
                        var s = r.defer();
                        if (e < a.length) {
                            var l = a[e];
                            G(l, t, n, i).then(s.resolve, function() {
                                K(e + 1, t, n, i, o).then(s.resolve)
                            })
                        } else s.resolve(o || X(t, n));
                        return s.promise
                    },
                    Q = function(e, t, n, r) {
                        var i;
                        if (e < a.length) {
                            var o = a[e];
                            (i = Y(o, t, n, r)) || (i = Q(e + 1, t, n, r))
                        }
                        return i
                    },
                    J = function(e, t, n, r) {
                        return K(x > 0 ? x : f, e, t, n, r)
                    },
                    Z = function(e, t, n, i) {
                        var o = r.defer(),
                            s = l ? y[l] : y,
                            c = n ? D[n] : P;
                        if (s && Object.prototype.hasOwnProperty.call(s, e)) {
                            var u = s[e];
                            "@:" === u.substr(0, 2) ? U(u.substr(2), t, n, i).then(o.resolve, o.reject) : o.resolve(c.interpolate(u, t))
                        } else {
                            var f;
                            d && !O && (f = X(e, t)), l && a && a.length ? J(e, t, c, i).then(function(e) {
                                o.resolve(e)
                            }, function(e) {
                                o.reject(H(e))
                            }) : d && !O && f ? o.resolve(i || f) : i ? o.resolve(i) : o.reject(H(e))
                        }
                        return o.promise
                    },
                    ee = function(e, t, n) {
                        var r, i = l ? y[l] : y,
                            o = P;
                        if (D && Object.prototype.hasOwnProperty.call(D, n) && (o = D[n]), i && Object.prototype.hasOwnProperty.call(i, e)) {
                            var s = i[e];
                            r = "@:" === s.substr(0, 2) ? ee(s.substr(2), t, n) : o.interpolate(s, t)
                        } else {
                            var c;
                            d && !O && (c = X(e, t)), l && a && a.length ? (f = 0, r = function(e, t, n) {
                                return Q(x > 0 ? x : f, e, t, n)
                            }(e, t, o)) : r = d && !O && c ? c : H(e)
                        }
                        return r
                    };
                U.preferredLanguage = function(e) {
                    return e && B(e), i
                }, U.cloakClassName = function() {
                    return k
                }, U.nestedObjectDelimeter = function() {
                    return C
                }, U.fallbackLanguage = function(e) {
                    if (void 0 !== e && null !== e) {
                        if (R(e), h && a && a.length)
                            for (var t = 0, n = a.length; n > t; t++) q[a[t]] || (q[a[t]] = z(a[t]));
                        U.use(U.use())
                    }
                    return s ? a[0] : a
                }, U.useFallbackLanguage = function(e) {
                    if (void 0 !== e && null !== e)
                        if (e) {
                            var t = I(a, e);
                            t > -1 && (x = t)
                        } else x = 0
                }, U.proposedLanguage = function() {
                    return c
                }, U.storage = function() {
                    return o
                }, U.use = function(e) {
                    if (!e) return l;
                    var t = r.defer();
                    n.$emit("$translateChangeStart", {
                        language: e
                    });
                    var i = _(e);
                    return i && (e = i), !S && y[e] || !h || q[e] ? c === e && q[e] ? q[e].then(function(e) {
                        return t.resolve(e.key), e
                    }, function(e) {
                        return t.reject(e), r.reject(e)
                    }) : (t.resolve(e), V(e)) : (c = e, q[e] = z(e).then(function(e) {
                        return L(e.key, e.table), t.resolve(e.key), V(e.key), e
                    }, function(e) {
                        return n.$emit("$translateChangeError", {
                            language: e
                        }), t.reject(e), n.$emit("$translateChangeEnd", {
                            language: e
                        }), r.reject(e)
                    }), q[e].finally(function() {
                        ! function(e) {
                            c === e && (c = void 0), q[e] = void 0
                        }(e)
                    })), t.promise
                }, U.storageKey = function() {
                    return j()
                }, U.isPostCompilingEnabled = function() {
                    return T
                }, U.isForceAsyncReloadEnabled = function() {
                    return S
                }, U.refresh = function(e) {
                    function t() {
                        o.resolve(), n.$emit("$translateRefreshEnd", {
                            language: e
                        })
                    }

                    function i() {
                        o.reject(), n.$emit("$translateRefreshEnd", {
                            language: e
                        })
                    }
                    if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
                    var o = r.defer();
                    if (n.$emit("$translateRefreshStart", {
                            language: e
                        }), e)
                        if (y[e]) {
                            var s = function(n) {
                                L(n.key, n.table), e === l && V(l), t()
                            };
                            s.displayName = "refreshPostProcessor", z(e).then(s, i)
                        } else i();
                    else {
                        var c = [],
                            u = {};
                        if (a && a.length)
                            for (var f = 0, d = a.length; d > f; f++) c.push(z(a[f])), u[a[f]] = !0;
                        l && !u[l] && c.push(z(l));
                        var p = function(e) {
                            y = {}, angular.forEach(e, function(e) {
                                L(e.key, e.table)
                            }), l && V(l), t()
                        };
                        p.displayName = "refreshPostProcessor", r.all(c).then(p, i)
                    }
                    return o.promise
                }, U.instant = function(e, t, n) {
                    if (null === e || angular.isUndefined(e)) return e;
                    if (angular.isArray(e)) {
                        for (var r = {}, o = 0, s = e.length; s > o; o++) r[e[o]] = U.instant(e[o], t, n);
                        return r
                    }
                    if (angular.isString(e) && e.length < 1) return e;
                    e && (e = M.apply(e));
                    var c, u = [];
                    i && u.push(i), l && u.push(l), a && a.length && (u = u.concat(a));
                    for (var f = 0, p = u.length; p > f; f++) {
                        var h = u[f];
                        if (y[h] && (void 0 !== y[h][e] ? c = ee(e, t, n) : (m || v) && (c = H(e))), void 0 !== c) break
                    }
                    return c || "" === c || (c = P.interpolate(e, t), d && !O && (c = X(e, t))), c
                }, U.versionInfo = function() {
                    return "2.8.0"
                }, U.loaderCache = function() {
                    return b
                }, U.directivePriority = function() {
                    return E
                }, U.statefulFilter = function() {
                    return A
                }, U.isReady = function() {
                    return !1
                };
                var te = r.defer();
                U.onReady = function(e) {
                    var t = r.defer();
                    return angular.isFunction(e) && t.promise.then(e), te.promise.then(function() {
                        t.resolve()
                    }), t.promise
                };
                var ne = n.$on("$translateReady", function() {
                        te.resolve(), ne(), ne = null
                    }),
                    re = n.$on("$translateChangeEnd", function() {
                        te.resolve(), re(), re = null
                    });
                if (h) {
                    if (angular.equals(y, {}) && U.use() && U.use(U.use()), a && a.length)
                        for (var ie = 0, oe = a.length; oe > ie; ie++) {
                            var ae = a[ie];
                            (S || !y[ae]) && (q[ae] = z(ae).then(function(e) {
                                return L(e.key, e.table), n.$emit("$translateChangeEnd", {
                                    language: e.key
                                }), e
                            }))
                        }
                } else n.$emit("$translateReady", {
                    language: U.use()
                });
                return U
            }]
        }

        function n(e, t) {
            "use strict";
            var n, r = {};
            return r.setLocale = function(e) {
                n = e
            }, r.getInterpolationIdentifier = function() {
                return "default"
            }, r.useSanitizeValueStrategy = function(e) {
                return t.useStrategy(e), this
            }, r.interpolate = function(n, r) {
                r = r || {}, r = t.sanitize(r, "params");
                var i = e(n)(r);
                return i = t.sanitize(i, "text")
            }, r
        }

        function r(e, t, n, r, o, a) {
            "use strict";
            return {
                restrict: "AE",
                scope: !0,
                priority: e.directivePriority(),
                compile: function(t, s) {
                    var l = s.translateValues ? s.translateValues : void 0,
                        c = s.translateInterpolation ? s.translateInterpolation : void 0,
                        u = t[0].outerHTML.match(/translate-value-+/i),
                        f = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
                        d = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
                    return function(t, p, h) {
                        t.interpolateParams = {}, t.preText = "", t.postText = "", t.translateNamespace = i(t);
                        var g = {},
                            m = function(e) {
                                if (angular.isFunction(m._unwatchOld) && (m._unwatchOld(), m._unwatchOld = void 0), angular.equals(e, "") || !angular.isDefined(e)) {
                                    var r = function() {
                                            return this.toString().replace(/^\s+|\s+$/g, "")
                                        }.apply(p.text()),
                                        i = r.match(f);
                                    if (angular.isArray(i)) {
                                        t.preText = i[1], t.postText = i[3], g.translate = n(i[2])(t.$parent);
                                        var o = r.match(d);
                                        angular.isArray(o) && o[2] && o[2].length && (m._unwatchOld = t.$watch(o[2], function(e) {
                                            g.translate = e, x()
                                        }))
                                    } else g.translate = r
                                } else g.translate = e;
                                x()
                            };
                        ! function(e, n, r) {
                            if (n.translateValues && angular.extend(e, o(n.translateValues)(t.$parent)), u)
                                for (var i in r) Object.prototype.hasOwnProperty.call(n, i) && "translateValue" === i.substr(0, 14) && "translateValues" !== i && (e[angular.lowercase(i.substr(14, 1)) + i.substr(15)] = r[i])
                        }(t.interpolateParams, h, s);
                        var v = !0;
                        h.$observe("translate", function(e) {
                            void 0 === e ? m("") : "" === e && v || (g.translate = e, x()), v = !1
                        });
                        for (var b in h) h.hasOwnProperty(b) && "translateAttr" === b.substr(0, 13) && function(e) {
                            h.$observe(e, function(t) {
                                g[e] = t, x()
                            })
                        }(b);
                        if (h.$observe("translateDefault", function(e) {
                                t.defaultText = e
                            }), l && h.$observe("translateValues", function(e) {
                                e && t.$parent.$watch(function() {
                                    angular.extend(t.interpolateParams, o(e)(t.$parent))
                                })
                            }), u) {
                            for (var y in h) Object.prototype.hasOwnProperty.call(h, y) && "translateValue" === y.substr(0, 14) && "translateValues" !== y && function(e) {
                                h.$observe(e, function(n) {
                                    var r = angular.lowercase(e.substr(14, 1)) + e.substr(15);
                                    t.interpolateParams[r] = n
                                })
                            }(y)
                        }
                        var x = function() {
                                for (var e in g) g.hasOwnProperty(e) && void 0 !== g[e] && w(e, g[e], t, t.interpolateParams, t.defaultText, t.translateNamespace)
                            },
                            w = function(t, n, r, i, o, a) {
                                n ? (a && "." === n.charAt(0) && (n = a + n), e(n, i, c, o).then(function(e) {
                                    $(e, r, !0, t)
                                }, function(e) {
                                    $(e, r, !1, t)
                                })) : $(n, r, !1, t)
                            },
                            $ = function(t, n, i, o) {
                                if ("translate" === o) {
                                    i || void 0 === n.defaultText || (t = n.defaultText), p.empty().append(n.preText + t + n.postText);
                                    var a = e.isPostCompilingEnabled(),
                                        l = void 0 !== s.translateCompile,
                                        c = l && "false" !== s.translateCompile;
                                    (a && !l || c) && r(p.contents())(n)
                                } else {
                                    i || void 0 === n.defaultText || (t = n.defaultText);
                                    var u = h.$attr[o];
                                    "data-" === u.substr(0, 5) && (u = u.substr(5)), u = u.substr(15), p.attr(u, t)
                                }
                            };
                        (l || u || h.translateDefault) && t.$watch("interpolateParams", x, !0);
                        var k = a.$on("$translateChangeSuccess", x);
                        p.text().length ? m(h.translate ? h.translate : "") : h.translate && m(h.translate), x(), t.$on("$destroy", k)
                    }
                }
            }
        }

        function i(e) {
            "use strict";
            return e.translateNamespace ? e.translateNamespace : e.$parent ? i(e.$parent) : void 0
        }

        function o(e) {
            "use strict";
            return {
                compile: function(t) {
                    var n = function() {
                            t.addClass(e.cloakClassName())
                        },
                        r = function() {
                            t.removeClass(e.cloakClassName())
                        };
                    return e.onReady(function() {
                            r()
                        }), n(),
                        function(t, i, o) {
                            o.translateCloak && o.translateCloak.length && o.$observe("translateCloak", function(t) {
                                e(t).then(r, n)
                            })
                        }
                }
            }
        }

        function a() {
            "use strict";
            return {
                restrict: "A",
                scope: !0,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.translateNamespace = i(e), e.translateNamespace && "." === n.translateNamespace.charAt(0) ? e.translateNamespace += n.translateNamespace : e.translateNamespace = n.translateNamespace
                        }
                    }
                }
            }
        }

        function i(e) {
            "use strict";
            return e.translateNamespace ? e.translateNamespace : e.$parent ? i(e.$parent) : void 0
        }

        function s(e, t) {
            "use strict";
            var n = function(n, r, i) {
                return angular.isObject(r) || (r = e(r)(this)), t.instant(n, r, i)
            };
            return t.statefulFilter() && (n.$stateful = !0), n
        }

        function l(e) {
            "use strict";
            return e("translations")
        }
        return angular.module("pascalprecht.translate", ["ng"]).run(e), e.$inject = ["$translate"], e.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", function() {
            "use strict";
            var e, t, n = null,
                r = !1,
                i = !1;
            (t = {
                sanitize: function(e, t) {
                    return "text" === t && (e = a(e)), e
                },
                escape: function(e, t) {
                    return "text" === t && (e = o(e)), e
                },
                sanitizeParameters: function(e, t) {
                    return "params" === t && (e = s(e, a)), e
                },
                escapeParameters: function(e, t) {
                    return "params" === t && (e = s(e, o)), e
                }
            }).escaped = t.escapeParameters, this.addStrategy = function(e, n) {
                return t[e] = n, this
            }, this.removeStrategy = function(e) {
                return delete t[e], this
            }, this.useStrategy = function(e) {
                return r = !0, n = e, this
            }, this.$get = ["$injector", "$log", function(o, a) {
                var s = {},
                    l = function(e, n, r) {
                        return angular.forEach(r, function(r) {
                            if (angular.isFunction(r)) e = r(e, n);
                            else if (angular.isFunction(t[r])) e = t[r](e, n);
                            else {
                                if (!angular.isString(t[r])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'");
                                if (!s[t[r]]) try {
                                    s[t[r]] = o.get(t[r])
                                } catch (e) {
                                    throw s[t[r]] = function() {}, new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'")
                                }
                                e = s[t[r]](e, n)
                            }
                        }), e
                    },
                    c = function() {
                        r || i || (a.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), i = !0)
                    };
                return o.has("$sanitize") && (e = o.get("$sanitize")), {
                    useStrategy: function(e) {
                        return function(t) {
                            e.useStrategy(t)
                        }
                    }(this),
                    sanitize: function(e, t, r) {
                        if (n || c(), arguments.length < 3 && (r = n), !r) return e;
                        var i = angular.isArray(r) ? r : [r];
                        return l(e, t, i)
                    }
                }
            }];
            var o = function(e) {
                    var t = angular.element("<div></div>");
                    return t.text(e), t.html()
                },
                a = function(t) {
                    if (!e) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
                    return e(t)
                },
                s = function(e, t) {
                    if (angular.isObject(e)) {
                        var n = angular.isArray(e) ? [] : {};
                        return angular.forEach(e, function(e, r) {
                            n[r] = s(e, t)
                        }), n
                    }
                    return angular.isNumber(e) ? e : t(e)
                }
        }), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", t), t.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], t.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", n), n.$inject = ["$interpolate", "$translateSanitization"], n.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", r), r.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], r.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", o), o.$inject = ["$translate"], o.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").directive("translateNamespace", a), a.displayName = "translateNamespaceDirective", angular.module("pascalprecht.translate").filter("translate", s), s.$inject = ["$parse", "$translate"], s.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", l), l.$inject = ["$cacheFactory"], l.displayName = "$translationCache", "pascalprecht.translate"
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], function() {
            return t()
        }) : "object" == typeof exports ? module.exports = t() : t()
    }(0, function() {
        function e(e, t) {
            "use strict";
            return function(n) {
                if (!n || !(angular.isArray(n.files) || angular.isString(n.prefix) && angular.isString(n.suffix))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
                n.files || (n.files = [{
                    prefix: n.prefix,
                    suffix: n.suffix
                }]);
                for (var r = [], i = n.files.length, o = 0; i > o; o++) r.push(function(r) {
                    if (!r || !angular.isString(r.prefix) || !angular.isString(r.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
                    return t(angular.extend({
                        url: [r.prefix, n.key, r.suffix].join(""),
                        method: "GET",
                        params: ""
                    }, n.$http)).then(function(e) {
                        return e.data
                    }, function() {
                        return e.reject(n.key)
                    })
                }({
                    prefix: n.files[o].prefix,
                    key: n.key,
                    suffix: n.files[o].suffix
                }));
                return e.all(r).then(function(e) {
                    for (var t = e.length, n = {}, r = 0; t > r; r++)
                        for (var i in e[r]) n[i] = e[r][i];
                    return n
                })
            }
        }
        return e.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", e), e.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
    }),
    function(e, t, n) {
        "use strict";
        t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(e, n) {
            var r, i = {},
                o = {},
                a = !1,
                s = t.copy,
                l = t.isUndefined;
            return n.addPollFn(function() {
                var t = n.cookies();
                r != t && (r = t, s(t, o), s(t, i), a && e.$apply())
            })(), a = !0, e.$watch(function() {
                var e, r, a;
                for (e in o) l(i[e]) && n.cookies(e, void 0);
                for (e in i) r = i[e], t.isString(r) || (r = "" + r, i[e] = r), r !== o[e] && (n.cookies(e, r), a = !0);
                if (a)
                    for (e in r = n.cookies(), i) i[e] !== r[e] && (l(r[e]) ? delete i[e] : i[e] = r[e])
            }), i
        }]).factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(n) {
                    return (n = e[n]) ? t.fromJson(n) : n
                },
                put: function(n, r) {
                    e[n] = t.toJson(r)
                },
                remove: function(t) {
                    delete e[t]
                }
            }
        }])
    }(window, window.angular);
var Langs = {};
Langs.en = {
        time: "时间",
        open: "开盘",
        high: "最高",
        low: "最低",
        close: "收盘",
        increase: "涨幅",
        swing: "振幅",
        volume: "VOL",
        quoteVolume: "转让额",
        hand: "换手率",
        o: "开",
        h: "高",
        l: "低",
        c: "收",
        price: "价格",
        updown: "涨跌",
        rang: "幅度"
    }, Langs.cn = {
        time: "时间",
        open: "开盘",
        high: "最高",
        low: "最低",
        close: "收盘",
        increase: "涨幅",
        swing: "振幅",
        volume: "成交量",
        quoteVolume: "成交额",
        hand: "换手率",
        o: "开",
        h: "高",
        l: "低",
        c: "收",
        price: "价格",
        updown: "涨跌",
        rang: "幅度"
    },
    function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function(t, n, r) {
                var i, o;
                this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, "manual" != this.options.trigger && (i = "hover" == this.options.trigger ? "mouseenter" : "focus", o = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(i, this.options.selector, e.proxy(this.enter, this)), this.$element.on(o, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(t) {
                return (t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data())).delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                n.options.delay && n.options.delay.show ? (n.hoverState = "in", setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show()
            },
            leave: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                n.options.delay && n.options.delay.hide ? (n.hoverState = "out", setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
            },
            show: function() {
                var e, t, n, r, i, o, a;
                if (this.hasContent() && this.enabled) {
                    switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(o), e.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight, t ? o.split(" ")[1] : o) {
                        case "bottom":
                            a = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "top":
                            a = {
                                top: n.top - i,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "left":
                            a = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left - r
                            };
                            break;
                        case "right":
                            a = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left + n.width
                            }
                    }
                    e.css(a).addClass(o).addClass("in")
                }
            },
            setContent: function() {
                var e = this.tip();
                e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                var t = this.tip();
                t.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? function() {
                    var n = setTimeout(function() {
                        t.off(e.support.transition.end).remove()
                    }, 500);
                    t.one(e.support.transition.end, function() {
                        clearTimeout(n), t.remove()
                    })
                }() : t.remove()
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(t) {
                return e.extend({}, t ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title), e = e.toString().replace(/(^\s*|\s*$)/, "")
            },
            tip: function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide" : "show"]()
            }
        }, e.fn.tooltip = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("tooltip"),
                    o = "object" == typeof n && n;
                i || r.data("tooltip", i = new t(this, o)), "string" == typeof n && i[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            delay: 0,
            selector: !1,
            placement: "top",
            trigger: "hover",
            title: "",
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        }
    }(window.jQuery);
var BASE_URL = "http://localhost/rtbtc-dev/",
    DATA_URL = "http://localhost/rtbtc-dev/",
    DEBUG = !0,
    OFFLINE = !1,
    RTBTC_Class = function(e, t, n) {
        var r = null;
        return new function() {
            this.Build = function() {
                return null == r && ((r = new function() {
                    function r(e, t) {
                        if (i.handlers.hasOwnProperty(e))
                            for (var n = 0; n < i.handlers[e].length; n++) i.handlers[e][n][1](t)
                    }
                    var i = {
                            url: "" + e,
                            debug: !!t,
                            offline: !!n,
                            lang: "en",
                            accounts: {},
                            has_api: !1,
                            prefsAccount: "",
                            expires: millitime() + 60,
                            expires_id: -1,
                            base: "",
                            base_int: 1,
                            base_prec: 8,
                            quote: "CNY",
                            quote_int: 1,
                            quote_prec: 4,
                            exch_fee: {
                                mtgox: .0065,
                                bitstamp: .005,
                                btce: .002
                            },
                            token: "",
                            version: "0.0.0",
                            startTime: millitime(),
                            offset: 0,
                            exchange: "bitstamp",
                            exch_list: ["bitstamp", "btce"],
                            handlers: {},
                            title: "" + window.document.title,
                            ERROR: 1,
                            WARNING: 2,
                            MESSAGE: 3,
                            windows: []
                        },
                        o = function(e, t) {
                            switch (t) {
                                case i.ERROR:
                                    console.error(e);
                                    break;
                                case i.WARNING:
                                    console.warn(e);
                                    break;
                                case i.MESSAGE:
                                default:
                                    console.log(e)
                            }
                            if (!DEBUG) throw {}
                        };
                    $.ajaxSetup({
                        async: !0,
                        type: "POST",
                        dataType: "json",
                        crossDomain: !1
                    });
                    for (var a = function(e) {
                            void 0 !== e.t0 && void 0 !== e.t1 && void 0 !== e.t2 && void 0 !== e.t3 && r("timing", {
                                latency: (-e.t0 + e.t1 - e.t2 + e.t3) / 2,
                                processing: e.t2 - e.t1
                            })
                        }, s = [""], l = [""], c = 1; c <= 30; c++) l.push(l[c - 1] + "&nbsp;"), s.push(s[c - 1] + "0");
                    return {
                        token: function(e) {
                            return null == e ? i.token : (i.token = e, DEBUG && o('Set RTBTC token to "' + e + '"'), this)
                        },
                        account: function() {
                            return i.accounts[i.exchange]
                        },
                        accounts: function(e) {
                            i.accounts = {};
                            for (var t in e) i.exch_list.indexOf(t) < 0 || (i.accounts[t] = e[t], DEBUG && o("Set user account string for " + t + ' to "' + e[t] + '"'));
                            return this
                        },
                        prefsAccount: function(e) {
                            return null == e ? i.prefsAccount : (i.prefsAccount = e, DEBUG && o('Set user preferences account string to "' + e + '"'), this)
                        },
                        hasApi: function() {
                            return i.accounts.hasOwnProperty(i.exchange)
                        },
                        startTime: function() {
                            return i.startTime
                        },
                        offset: function(e) {
                            return null == e ? i.offset : (i.offset = e.client - e.server, DEBUG && o("Got server time offset of " + i.offset + "s"), this)
                        },
                        expires: function(e) {
                            return null == e ? i.expires : (i.expires = +e + i.offset, function() {
                                var e = i.expires - millitime();
                                1e3 * e > 2147483647 || (DEBUG && o("Expire in " + (i.expires - millitime()) + "s"), window.clearTimeout(i.expires_id), i.expires_id = window.setTimeout(function() {
                                    DEBUG && o("Subscription expired. Reloading."), window.location.reload()
                                }, 1e3 * e))
                            }(), DEBUG && o("Set expiration time to " + new Date(1e3 * i.expires)), this)
                        },
                        ajax: function(e, t, n, s, l) {
                            return void 0 !== e && function(e, t, n, s, l) {
                                DEBUG && o("AJAX Call for " + e + ", data:"), DEBUG && null != t && o(t), $.ajax({
                                    url: i.url + "api/" + e,
                                    data: {
                                        payload: t,
                                        token: i.token,
                                        aid: i.accounts[i.exchange],
                                        t0: millitime()
                                    },
                                    success: function(t, c, u) {
                                        var f = millitime();
                                        if (void 0 !== t.result) {
                                            if (void 0 !== t.timing && a({
                                                    t0: parseFloat(t.timing.t0),
                                                    t1: parseFloat(t.timing.t1),
                                                    t2: parseFloat(t.timing.t2),
                                                    t3: f
                                                }), void 0 !== t.token && (i.token = $.trim(t.token)), void 0 !== t.version) {
                                                var d = $.trim(t.version);
                                                d != i.version && window.setTimeout(function() {
                                                    r("version", d)
                                                }, 5e3)
                                            }
                                            if ("success" == t.result) DEBUG && o("Success data [" + e + "]:"), DEBUG && o(t.data), "function" == typeof n && n(t.data);
                                            else if (void 0 !== t.reason) switch (t.reason) {
                                                case "session":
                                                case "auth":
                                                    DEBUG && o("Save failure: " + t.reason), !OFFLINE && window.location.reload();
                                                    break;
                                                default:
                                                    "function" == typeof s && (DEBUG && o("Calling failure fn with:"), DEBUG && o(t.reason), s(t.reason))
                                            } else "function" == typeof s && s()
                                        } else "function" == typeof l && l()
                                    },
                                    error: function(e, t, n) {
                                        "function" == typeof l && l()
                                    }
                                })
                            }(e, t, n, s, l), this
                        },
                        json: function(e, t, n) {
                            return void 0 !== e && function(e, t, n) {
                                DEBUG && o("JSON Call for " + e), $.ajax({
                                    url: e,
                                    type: "GET",
                                    dataType: "json",
                                    success: function(e, n, r) {
                                        "function" == typeof t && t(e)
                                    },
                                    error: function(e, t, r) {
                                        "function" == typeof n && n()
                                    }
                                })
                            }(e, t, n), this
                        },
                        base: function() {
                            return i.base
                        },
                        quote: function() {
                            return i.quote
                        },
                        symbol: function() {
                            return i.base + "/" + i.quote
                        },
                        baseInt: function() {
                            return i.base_int
                        },
                        quoteInt: function() {
                            return i.quote_int
                        },
                        basePrec: function() {
                            return i.base_prec
                        },
                        quotePrec: function() {
                            return i.quote_prec
                        },
                        instrument: function(e, t, n) {
                            try {
                                e = e.toLowerCase(), t = t.toUpperCase(), n = n.toUpperCase()
                            } catch (r) {
                                return DEBUG && o("RTBTC.instrument 1: " + e + ", " + t + ", " + n, i.ERROR), this
                            }
                            var a = {
                                exch: "" + i.exchange,
                                base: "" + i.base,
                                quote: "" + i.quote
                            };
                            return i.exchange = e, i.base = t, i.quote = n, DEBUG && o("RTBTC:instrument(" + i.exchange + ", " + i.base + ", " + i.quote + ")"), DEBUG && o(" " + i.base + " precision : " + i.base_prec + ", int: " + i.base_int), DEBUG && o(" " + i.quote + " precision: " + i.quote_prec + ", int: " + i.quote_int), r("instrument", {
                                old_instr: a,
                                new_instr: {
                                    exch: i.exchange,
                                    base: i.base,
                                    quote: i.quote
                                }
                            }), this
                        },
                        version: function(e) {
                            if (null == e) return i.version;
                            i.version = e;
                            for (var t = "", n = 0; n < 75; n++) t += "=";
                            return DEBUG && o(t), DEBUG && o("RTBTC Version " + i.version), DEBUG && o(t), DEBUG && o(" "), this
                        },
                        url: function() {
                            return i.url
                        },
                        language: function(e) {
                            return null == e ? i.lang : (i.lang = e, r("language", i.lang), this)
                        },
                        handler: function(e, t, n) {
                            return i.handlers.hasOwnProperty(e) || (i.handlers[e] = []), i.handlers[e].push([t, n]), this
                        },
                        unregister: function(e, t, n) {
                            if (i.handlers.hasOwnProperty(e)) {
                                var r, o = void 0 === n;
                                for (r = i.handlers[e].length - 1; r >= 0; r--) i.handlers[e][r][0] == t && (o || i.handlers[e][r][1] == n) && i.handlers[e].splice(r, 1);
                                return this
                            }
                        },
                        unregisterAll: function(e) {
                            var t, n;
                            for (n in i.handlers)
                                if (i.handlers.hasOwnProperty(n))
                                    for (t = i.handlers[n].length - 1; t >= 0; t--) i.handlers[n][t][0] == e && i.handlers[n].splice(t, 1)
                        },
                        trigger: function(e, t) {
                            r(e, t)
                        },
                        countdown: function(e, t) {
                            $(e).each(function(e, t) {
                                $(t).data("time", parseInt($(this).attr("name"))).removeAttr("name")
                            });
                            var n = function(e, t) {
                                $(e).each(function(e, n) {
                                    var r = Math.max($(n).data("time"), 0),
                                        i = t ? dhms_from_sec(r) : hms_from_sec(r);
                                    return $(n).text(i), $(n).data("time", r - 1), !0
                                })
                            };
                            window.setInterval(function() {
                                n(e, t)
                            }, 1e3), n(e, t)
                        },
                        toggle: function(e, t, n, r) {
                            return $("<span/>").addClass("control-toggle").addClass(function() {
                                return e ? "yes" : "no"
                            }).append(function() {
                                return '<i class="icon-' + (e ? "ok" : "remove") + '"></i>'
                            }).data("state", e).click(function(e) {
                                var i = $(e.currentTarget);
                                i.data("state") ? (i.data("state", !1).removeClass("yes").addClass("no").html('<i class="icon-remove"></i>'), "function" == typeof n && n()) : (i.data("state", !0).removeClass("no").addClass("yes").html('<i class="icon-ok"></i>'), "function" == typeof t && t()), "function" == typeof r && r(), stopEvent(e)
                            })
                        },
                        select: function(e, t, n, r) {
                            var i, o, a = $("<select/>").on("change", function(t) {
                                n(t.currentTarget.value), r && (t.currentTarget.value = e)
                            });
                            for (i = 0; i < t.length; i++) o = $("<option/>").html(t[i].text).attr("value", t[i].val), t[i].val == e && o.attr("selected", "selected"), a.append(o);
                            return a
                        },
                        numFormat: function(e, t) {
                            if (void 0 === e) return "";
                            var n = null == t ? Settings.display.precision.price : t,
                                r = e.toFixed(n),
                                i = r.length,
                                o = 1;
                            for (isNaN(r) && (r = "0.0"); o < t;) {
                                if ("0" != r.charAt(i - o)) {
                                    if (1 == o) return r;
                                    break
                                }
                                o++
                            }
                            return Settings.display.zeros ? r.slice(0, i - o + 1) + '<span class="insig">' + s[o - 1] + "</span>" : r.slice(0, i - o + 1) + l[o - 1]
                        },
                        numFormatShort: function(e, t) {
                            if (void 0 === e) return "";
                            var n = null == t ? Settings.display.precision.price : t,
                                r = e.toFixed(n),
                                i = r.length,
                                o = 1;
                            for (isNaN(r) && (r = "0.0"); o < t;) {
                                if ("0" != r.charAt(i - o)) {
                                    if (1 == o) return r;
                                    break
                                }
                                o++
                            }
                            return r.slice(0, i - o + 1)
                        },
                        siteTitle: function(e) {
                            window.document.title = e + i.title
                        },
                        newWindow: function() {
                            return i.windows.append(window.open(i.url + "s/platform/window", uniqueID())), this
                        },
                        regUnsignedNum: new RegExp(/^\d*\.?\d*$/),
                        internals: DEBUG ? function() {
                            return i
                        } : function() {
                            return null
                        },
                        debug: i.debug ? o : function(e, t) {},
                        isDebug: function() {
                            return i.debug
                        },
                        offline: function() {
                            return i.offline
                        },
                        ERROR: i.ERROR,
                        WARNING: i.WARNING,
                        MESSAGE: i.MESSAGE,
                        ZEROS: s,
                        SPACES: l
                    }
                }).constructor = null), r
            }
        }
    }(BASE_URL, DEBUG, OFFLINE),
    RTBTC = RTBTC_Class.Build(),
    BTC = "&#3647;",
    BTC_U = "฿",
    BTC_INT = 1;
AssertException.prototype.toString = function() {
    return "AssertException: " + this.message
};
var lastUniqueID = 0,
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
    alphalen = alphabet.length;
Object.size = function(e) {
    var t, n = 0;
    for (t in e) e.hasOwnProperty(t) && n++;
    return n
}, Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length,
        n = Number(arguments[1]) || 0;
    for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
        if (n in this && this[n] === e) return n;
    return -1
});
var has_dataURI = function() {
    return !1
};
! function() {
    var e = new Image;
    e.onload = function() {
        1 == this.width && 1 == this.height && (has_dataURI = function() {
            return !0
        })
    }, e.onerror = function() {}, e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}(),
function() {
    var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.reqAnimFrame = void 0 !== e ? e : function(e) {
        e()
    }
}(), jQuery.cookie = function(e, t, n) {
    if (arguments.length > 1 && "[object Object]" !== String(t)) {
        if (n = jQuery.extend({}, n), null !== t && void 0 !== t || (n.expires = -1), "number" == typeof n.expires) {
            var r = n.expires,
                i = n.expires = new Date;
            i.setDate(i.getDate() + r)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
    }
    var o, a = (n = t || {}).raw ? function(e) {
        return e
    } : decodeURIComponent;
    return (o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null
};
var mobile, Colors = {
        c: {
            stroke: {
                fenshi: "#ffffff",
                up: "#ff0000",
                down: "#3AA60C",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#ff0000",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        c1: {
            stroke: {
                fenshi: "#ffffff",
                up: "#d00017",
                down: "#4dd710",
                bid: "#d00017",
                ask: "#4dd710",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#A10013",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        f: {
            stroke: {
                up: "#00a1d9",
                down: "#ed111a",
                bid: "#ed111a",
                ask: "#00a1d9",
                grid: "#d5e4eb",
                border: "#014d65",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#040f12",
                i: ["#00a1d9", "#ed111a", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#d5e4eb",
                up: "#00ACE5",
                down: "#FF121A",
                label: "#09232B",
                flags: "#F2F8FA",
                crosshair: "#fff",
                blankBG: "#fff",
                flagtext: "#040f12",
                ordertext: "#014d65",
                slottext: "#040f12"
            }
        },
        m: {
            stroke: {
                up: "#9C6",
                down: "#B40000",
                bid: "#7A1631",
                ask: "#89D12A",
                grid: "#454545",
                border: "#616161",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#ffc200",
                i: ["#ffc200", "#0099cc", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#0f0f0f",
                up: "#658744",
                down: "#750000",
                label: "#F4FFE4",
                flags: "#0f0f0f",
                crosshair: "#0f0f0f",
                blankBG: "#0f0f0f",
                flagtext: "#F4FFE4",
                ordertext: "#014d65",
                slottext: "#F4FFE4"
            }
        },
        t: {
            stroke: {
                up: "#498192",
                down: "#daa102",
                bid: "#daa102",
                ask: "#498192",
                grid: "#0d1e29",
                border: "#014d65",
                order: "#014d65",
                majorlevel: "#014d65",
                minorlevel: "#014d65",
                crosshair: "#040f12",
                i: ["#498192", "#daa102", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
            },
            fill: {
                bg: "#05232c",
                up: "#d6f7fb",
                down: "#f9f15f",
                label: "#daa102",
                flags: "#F2F8FA",
                crosshair: "#fff",
                blankBG: "#050b0f",
                flagtext: "#040f12",
                ordertext: "#014d65",
                slottext: "#040f12"
            }
        },
        s: {
            stroke: {
                up: "#999",
                down: "#000",
                bid: "#333",
                ask: "#999",
                grid: "#ddd",
                border: "#000",
                order: "#014d65",
                majorlevel: "#ccc",
                minorlevel: "#ddd",
                crosshair: "#000",
                i: ["#aaa", "#999", "#ccc", "#777"]
            },
            fill: {
                bg: "#fff",
                up: "#bbb",
                down: "#333",
                label: "#333",
                flags: "#fff",
                crosshair: "#fff",
                blankBG: "#fff",
                flagtext: "#000",
                ordertext: "#014d65",
                slottext: "#000"
            }
        },
        a: {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                order: "red",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#A10013",
                down: "#3AA60C",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        a1: {
            stroke: {
                fenshi: "#267cd1",
                up: "#f24957",
                down: "#1dbf60",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                arrow: "#008fbd",
                order: "red",
                opacity: !0,
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#f24957",
                down: "#1dbf60",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        a2: {
            stroke: {
                fenshi: "#267cd1",
                up: "#f24957",
                down: "#1dbf60",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#d3d3d3",
                border: "#999999",
                arrow: "#008fbd",
                order: "red",
                priceShow: !0,
                opacity: !0,
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#f24957",
                down: "#1dbf60",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        "depth-white": {
            stroke: {
                up: "#d00017",
                down: "#ff6c78",
                bid: "#4dd710",
                ask: "#ff6c78",
                grid: "#dedede",
                border: "#dedede",
                order: "#1ad1af",
                majorlevel: "blue",
                minorlevel: "blue",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#ff6c78",
                down: "#9ed577",
                label: "#999999",
                flags: "#191919",
                crosshair: "#fff",
                blankBG: "#ffffff",
                flagtext: "#666666",
                ordertext: "#1ad1af",
                slottext: "blue"
            }
        },
        "chart-white2": {
            stroke: {
                fenshi: "#267cd1",
                up: "#73c921",
                fillUp: "#73c921",
                down: "#ca2c78",
                bid: "#79b48a",
                ask: "#f32f3f",
                grid: "#f1f1f1",
                border: "#f1f1f1",
                arrow: "#444",
                order: "red",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#008fdb",
                i: ["#ffc200", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                label: "#999999",
                flags: "#ffffff",
                crosshair: "#ffffff",
                blankBG: "#ffffff",
                flagtext: "#999999",
                ordertext: "#ffc200",
                slottext: "#165d82"
            }
        },
        "depth-black-bnb": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-bnb": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-bnb": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-bnb": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-ico": {
            stroke: {
                fenshi: "#ffffff",
                up: "#4dd710",
                down: "#d00017",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#A10013",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-ico": {
            stroke: {
                fenshi: "#ffffff",
                up: "#3AA60C",
                down: "#ff0000",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#ff0000",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#262d33",
                blankBG: "#191919",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#3AA60C",
                down: "#ff0000",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#3AA60C",
                down: "#ff0000",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#262d33",
                blankBG: "#191919",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-zql": {
            stroke: {
                fenshi: "#ffffff",
                up: "#4dd710",
                down: "#d00017",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#252522",
                border: "#333",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#A10013",
                down: "#3AA60C",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-zql": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-dae": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191919",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "chart-black-mobile-dae": {
            stroke: {
                fenshi: "#ffffff",
                up: "#73c921",
                down: "#ca2c78",
                bid: "#4dd710",
                ask: "#d00017",
                grid: "#323c45",
                border: "#323c45",
                arrow: "#fff",
                order: "#ffc200",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#fff",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#73c921",
                down: "#ca2c78",
                label: "#9EA694",
                flags: "#262d33",
                crosshair: "#262d33",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffc200",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-dae": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#262d33",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        },
        "depth-black-mobile-dae": {
            stroke: {
                up: "#d00017",
                down: "#4dd710",
                bid: "#a3ff61",
                ask: "#ff3394",
                grid: "#323c45",
                border: "#333",
                order: "#ffffff",
                majorlevel: "#666",
                minorlevel: "#666",
                crosshair: "#deac37",
                i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
            },
            fill: {
                bg: "#191d21",
                up: "#ff3394",
                down: "#a3ff61",
                label: "#9EA694",
                flags: "#191919",
                crosshair: "#191919",
                blankBG: "#0A0A09",
                flagtext: "#f4ffe4",
                ordertext: "#ffffff",
                slottext: "#f4ffe4"
            }
        }
    },
    Validator = function() {
        var e = null,
            t = null,
            n = {
                BOOL: 1,
                INT: 2,
                FLOAT: 3,
                STRING: 4
            },
            r = RTBTC.debug;
        return {
            create: function(i) {
                if (i === n.BOOL && (t = i), i === n.INT && (t = i), i === n.FLOAT && (t = i), i === n.STRING && (t = i), null == t) throw "Invalid type.";
                return {
                    get: function() {
                        return e
                    },
                    set: function(i) {
                        return function(i) {
                            switch (t) {
                                case n.BOOL:
                                    if ("boolean" == typeof i) return e = i, !0;
                                    break;
                                case n.INT:
                                    if ("number" == typeof i) return e = parseInt(i), !0;
                                    break;
                                case n.FLOAT:
                                    if ("number" == typeof i) return e = parseFloat(i), !0;
                                    break;
                                case n.STRING:
                                    if ("string" == typeof i) return e = "" + i, !0
                            }
                            DEBUG && r("Unable to validate " + i + ' as type "' + function(e) {
                                switch (t) {
                                    case n.BOOL:
                                        return "boolean";
                                    case n.INT:
                                        return "integer";
                                    case n.FLOAT:
                                        return "float";
                                    case n.STRING:
                                        return "string";
                                    default:
                                        return "unknown"
                                }
                            }() + '". Detected type: ' + typeof i, RTBTC.ERROR)
                        }(i), this
                    },
                    toString: function() {
                        return "" + e
                    }
                }
            },
            BOOL: n.BOOL,
            INT: n.INT,
            FLOAT: n.FLOAT,
            STRING: n.STRING
        }
    },
    V = new Validator,
    Settings = {
        base: "BTC",
        quote: "USD",
        exchange: "mtgox",
        display: {
            precision: {
                price: 5,
                volume: 4
            },
            zeros: !0,
            grid: 5
        },
        sounds: {},
        localTime: !0,
        theme: "c",
        version: "0.0.0",
        layouts: [{
            name: "Market Overview",
            modules: [{
                m: {
                    t: "order-book",
                    w: 478,
                    h: 478,
                    x: 510,
                    y: 100,
                    l: !0
                },
                c: {
                    g: !0,
                    i: .01,
                    s: !0,
                    d: 50
                }
            }, {
                m: {
                    t: "time-sales",
                    w: 488,
                    h: 178,
                    x: 10,
                    y: 400,
                    l: !0
                },
                c: {
                    f: !0,
                    s: !0
                }
            }, {
                m: {
                    t: "ticker",
                    w: 478,
                    h: 78,
                    x: 510,
                    y: 10,
                    l: !0
                },
                c: {
                    a: !0,
                    h: !0,
                    l: !0,
                    v: !0
                }
            }, {
                m: {
                    t: "orders",
                    w: 488,
                    h: 108,
                    x: 10,
                    y: 280,
                    l: !0
                },
                c: {}
            }, {
                m: {
                    t: "order-entry",
                    w: 238,
                    h: 258,
                    x: 10,
                    y: 10,
                    l: !0
                },
                c: {
                    b: !0,
                    c: !0,
                    l: !1
                }
            }, {
                m: {
                    t: "order-entry",
                    w: 238,
                    h: 258,
                    x: 260,
                    y: 10,
                    l: !0
                },
                c: {
                    b: !1,
                    c: !0,
                    l: !1
                }
            }]
        }]
    },
    Settings_Helper = function() {
        var e = (new Validator).create(V.BOOL),
            t = (new Validator).create(V.INT),
            n = ((new Validator).create(V.FLOAT), (new Validator).create(V.STRING)),
            r = {},
            i = {
                dpp: Settings.display.precision.price,
                dpv: Settings.display.precision.volume,
                dz: Settings.display.zeros,
                dg: Settings.display.grid,
                b: Settings.base,
                q: Settings.quote,
                ex: Settings.exchange,
                lt: Settings.localTime,
                thm: Settings.theme,
                snd: Settings.sounds,
                version: Settings.version
            },
            o = (RTBTC.debug, function(e, t, n) {
                return void 0 === r[e] ? t : n.set(t).set(r[e]).get()
            });
        return {
            process: function(a) {
                return function(a) {
                    r = a, Settings.display.precision.price = o("dpp", i.dpp, t), Settings.display.precision.volume = o("dpv", i.dpv, t), Settings.display.zeros = o("dz", i.dz, e), Settings.display.grid = o("dg", i.dg, t), Settings.display.grid = 5, Settings.localTime = o("lt", i.lt, e), Settings.theme = o("thm", i.thm, n), Settings.version = o("version", i.version, n);
                    var s = o("b", i.b, n);
                    Currency.valid(s) && (Settings.base = s);
                    var l = o("q", i.q, n);
                    Currency.valid(l) && (Settings.quote = l);
                    var c = o("ex", i.ex, n);
                    if (Exchanges.valid(c) && (Settings.exchange = c), Settings.sounds = a.hasOwnProperty("snd") ? a.snd : {}, void 0 !== a.layouts && a.layouts.length > 0) {
                        Settings.layouts = [];
                        for (var u, f, d = 0; d < a.layouts.length; d++) {
                            if (u = {}, void 0 !== a.layouts[d].name && a.layouts[d].name.length > 0 && (u.name = "" + a.layouts[d].name), void 0 !== a.layouts[d].modules) {
                                u.modules = [];
                                for (var p = 0; p < a.layouts[d].modules.length; p++) f = {
                                    m: {},
                                    c: {}
                                }, void 0 !== a.layouts[d].modules[p].m && (f.m = a.layouts[d].modules[p].m), void 0 !== a.layouts[d].modules[p].c && (f.c = a.layouts[d].modules[p].c), u.modules.push(deepCopy(f))
                            }
                            Settings.layouts.push(deepCopy(u))
                        }
                    }
                }(a), this
            },
            save: function() {
                var e = {};
                for (var t in i) i.hasOwnProperty(t) && (e[t] = i[t]);
                return e.layouts = Settings.layouts, JSON.stringify(e)
            },
            saveToStructure: function(e, t) {
                i[e] = t
            }
        }
    }(),
    i18n = {
        Account: {
            ru: "счет",
            de: "Konto",
            cn: "帐户",
            pl: "konto",
            vi: "T�i kho?n",
            da: "konto",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Close: {
            ru: "?????????",
            de: "schlie�en",
            cn: "??",
            pl: "zamkn??",
            vi: "?�ng",
            da: "Luk",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Settings: {
            ru: "?????????",
            de: "Einstellungen",
            cn: "??",
            pl: "Ustawienia",
            vi: "C�i ??t",
            da: "Indstillinger",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Layout: {
            ru: "????????????",
            de: "Layout",
            cn: "??",
            pl: "uk?ad",
            vi: "Giao di?n",
            da: "Layout",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Locking: {
            ru: "??????????",
            de: "Sperren",
            cn: "??",
            pl: "Blokowanie",
            vi: "kh�a",
            da: "L�sning",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        "Place Order": {
            ru: "?????????? ?????",
            de: "Bestellung aufgeben",
            cn: "???",
            pl: "Z?�? zam�wienie",
            vi: "??t th? t?",
            da: "Afgiv ordre",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Sending: {
            ru: "??????????",
            de: "Senden",
            cn: "??",
            pl: "wysy?anie",
            vi: "g?i",
            da: "Sende",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Bid: {
            ru: "???",
            de: "Geld",
            cn: "??",
            pl: "oferta",
            vi: "Gi� th?u",
            da: "Bud",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Ask: {
            ru: "???",
            de: "Brief",
            "en-gb": "Offer",
            cn: "?",
            pl: "zapyta?",
            vi: "xin",
            da: "Sp�rg",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Sum: {
            ru: "?????",
            de: "Summe",
            cn: "??",
            pl: "suma",
            vi: "Sum",
            da: "Sum",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        },
        Size: {
            ru: "??????",
            de: "Gr��e",
            cn: "??",
            pl: "rozmiar",
            vi: "K�ch th??c",
            da: "St�rrelse",
            es: "",
            sv: "",
            fi: "",
            bg: "",
            it: ""
        }
    },
    Data_Class = function() {
        var e = null;
        return new function() {
            this.Build = function() {
                return null == e && ((e = new function() {
                    function e() {
                        DEBUG && i("Data Setup. " + (r.hasStorage ? "Has" : "Does not have") + " localStorage"), r.hasStorage && (r.storage = window.localStorage),
                            function() {
                                var e, n, i = RTBTC.base(),
                                    o = RTBTC.quote();
                                for (r.cache.ticks = [], r.cache.ticker = {}, n = 0; n < r.offline.length; n++) e = r.offline[n], r.cache.bars[e] = [];
                                for (n = 0; n < r.online.length; n++) e = r.online[n], r.links[e] = {
                                    prev: null,
                                    next: null,
                                    last: null
                                }, r.lock[e] = !1;
                                if (t(r.currentPeriod, !0), r.hasStorage) {
                                    var a = i + o + "_ticks";
                                    if (void 0 !== r.storage[a]) {
                                        var s = JSON.parse(r.storage[a]);
                                        s.hasOwnProperty("stamp") && s.stamp + r.config.ticksMaxAge > millitime() && (r.cache.ticks = s.ticks)
                                    }
                                }
                            }()
                    }

                    function t(e, t) {
                        if (r.lock[e]) DEBUG && i("data: _load: LOCK on period " + e);
                        else {
                            r.lock[e] = !0;
                            var n = RTBTC.base(),
                                a = o + "/klines?symbol=" + RTBTC.base() + "&interval=" + function(t) {
                                    switch (e) {
                                        case 0:
                                        case 60:
                                            return "1m";
                                        case 180:
                                            return "3m";
                                        case 300:
                                            return "5m";
                                        case 900:
                                            return "15m";
                                        case 1800:
                                            return "30m";
                                        case 3600:
                                            return "1h";
                                        case 7200:
                                            return "2h";
                                        case 14400:
                                            return "4h";
                                        case 21600:
                                            return "6h";
                                        case 43200:
                                            return "12h";
                                        case 86400:
                                            return "1d";
                                        case 259200:
                                            return "3d";
                                        case 604800:
                                            return "1w"
                                    }
                                }();
                            if (null != r.links[e].prev) a += "&endTime=" + r.links[e].prev;
                            else if (!t) return void(r.lock[e] = !1);
                            RTBTC.json(a, function(e) {
                                return function(t) {
                                    n == RTBTC.base() && function(e, t, n) {
                                        r.lock[t] = !1, e.length >= 0 && r._onLoaded && r._onLoaded(), e[e.length - 1];
                                        var i;
                                        if (e.length > 0 && (r.links[t].prev = e[0][0] - 1e3 * t), RTBTC.trigger("console", "Loaded " + e.length + " chart bars."), 0 != e.length) {
                                            for (r.cache.bars[t] = [], i = e.length - 1; i >= 0; i--) r.cache.bars[t].push([e[i][0], Number(e[i][1]), Number(e[i][2]), Number(e[i][3]), Number(e[i][4]), Number(e[i][5]), Number(e[i][7])]);
                                            RTBTC.trigger("barclose", t)
                                        }
                                    }(t, e)
                                }
                            }(e), function(e) {
                                return function(t) {
                                    ! function(e) {
                                        r.lock[e] = !1, DEBUG && i("Data: load failure for period " + e + "!")
                                    }(e)
                                }
                            }(e))
                        }
                    }

                    function n() {
                        if (r.hasStorage) {
                            millitime();
                            var e = RTBTC.exchange() + "_" + RTBTC.base() + RTBTC.quote() + "_ticks",
                                t = r.cache.ticks.slice(0, r.config.tradeBuffer),
                                n = {};
                            if (0 != t.length) {
                                n.stamp = millitime(), n.ticks = t;
                                try {
                                    r.storage[e] = JSON.stringify(n)
                                } catch (e) {
                                    DEBUG && i("LocalStorage quota exceeded.")
                                }
                                window.clearTimeout(r.config.saveID), r.config.saveID = -1
                            }
                        }
                    }
                    var r = {
                            cache: {
                                bars: {},
                                ticks: [],
                                ticker: {}
                            },
                            links: {},
                            currentPeriod: 60,
                            online: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
                            offline: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
                            lock: {},
                            storage: null,
                            hasStorage: storageSupport(),
                            config: {
                                saveTimeout: 3e4,
                                saveID: -1,
                                tradeCount: 0,
                                tradeSave: 100,
                                tradeBuffer: 1500,
                                ticksMaxAge: 300
                            },
                            self: null,
                            debug: RTBTC.isDebug()
                        },
                        i = RTBTC.debug,
                        o = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1";
                    return {
                        setup: function(t) {
                            return "undifined" != t && r.online.indexOf(t) >= 0 && (r.currentPeriod = t), e(), this
                        },
                        self: function(t) {
                            return r.self = t, RTBTC.handler("trade", "data", r.self.onTrade), RTBTC.handler("ticker", "data", r.self.onTicker), RTBTC.handler("instrument", "data", e), this
                        },
                        onTrade: function(e) {
                            ! function(e) {
                                var t, i = [e.time, e.price, e.amount];
                                r.cache.ticks.splice(0, 0, i);
                                var o, a, s = r.cache.ticks.length,
                                    l = r.config.tradeBuffer;
                                s > l && r.cache.ticks.splice(l - 1, l - s);
                                for (a in r.cache.bars) r.cache.bars.hasOwnProperty(a) && (o = +a, t = function(e, t) {
                                    return (e = +e) - e % o
                                }(e.time), 0 == r.cache.bars[a].length || t >= r.cache.bars[a][0][0] + o ? (r.cache.bars[a].splice(0, 0, [t, i[1], i[1], i[1], i[1], i[2]]), RTBTC.trigger("barclose", a)) : t == r.cache.bars[a][0][0] && (i[1] > r.cache.bars[a][0][2] && (r.cache.bars[a][0][2] = i[1]), i[1] < r.cache.bars[a][0][3] && (r.cache.bars[a][0][3] = i[1]), r.cache.bars[a][0][4] = i[1], r.cache.bars[a][0][5] += i[2]));
                                ++r.config.tradeCount % r.config.tradeSave == 0 ? n() : -1 == r.config.saveID && (r.config.saveID = window.setTimeout(n, r.config.saveTimeout))
                            }(e)
                        },
                        onTicker: function(e) {
                            ! function(e) {
                                r.cache.ticker = e
                            }(e)
                        },
                        onBar: function(e, t) {
                            ! function(e, t) {
                                if (void 0 != r.cache.bars[t])
                                    if (r.cache.bars[t].length > 0) {
                                        if (e[0] < r.cache.bars[t][0][0]) return;
                                        if (e[0] == r.cache.bars[t][0][0] && e[5] <= r.cache.bars[t][0][5]) return;
                                        e[0] == r.cache.bars[t][0][0] ? r.cache.bars[t][0] = e : r.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
                                    } else r.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
                            }(e, t)
                        },
                        onLoaded: function(e) {
                            r._onLoaded = e
                        },
                        data: r.cache,
                        loadPrev: function(e) {
                            var n = e;
                            if (-1 == r.online.indexOf(e))
                                for (var i = 0; i < r.online.length; i++)
                                    if (r.online[i] <= e) {
                                        n = r.online[i];
                                        break
                                    }
                            t(n, !1)
                        },
                        internals: r.debug ? function() {
                            return r
                        } : function() {
                            return {}
                        },
                        debug: r.debug ? i : function(e, t) {}
                    }
                }).constructor = null), e
            }
        }
    }(),
    Data = Data_Class.Build(),
    digit = 6,
    Indicator = function() {
        var e = {
                type: "",
                shortName: "IND",
                color: null,
                min: 0,
                max: 1,
                p: [],
                ps: [],
                V: new Validator,
                input: null,
                output: [],
                cache: {
                    i0: -1,
                    i1: -1,
                    t0: -1,
                    values: []
                },
                CANDLE: 0,
                OHLC: 1,
                HLC: 2,
                LINE: 3,
                MOUNTAIN: 4,
                BANDS: 5,
                PSAR: 6,
                HIST: 7,
                LBLHIST: 8,
                HISTLINE: 9,
                draw: function() {
                    return []
                },
                statics: function() {
                    return {}
                },
                update: function(e, t, n) {},
                label: function(e) {
                    return ""
                },
                debug: RTBTC.isDebug()
            },
            t = RTBTC.debug;
        return {
            build: function(n, r) {
                return function(n) {
                        switch (DEBUG && t("Indicator: building " + n), n) {
                            case "dmi":
                                e.shortName = "DMI", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = function(t) {
                                    var n = _("DMI");
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(1), n += ", +DI: ", n += e.output[1][t].toFixed(1), n += ", -DI: ", n += e.output[0][t].toFixed(1)), n
                                }, e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[2]
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l, c, u = 0,
                                        f = 0,
                                        d = 0,
                                        p = 0,
                                        h = 0,
                                        g = 0;
                                    for (e.output = [
                                            [0],
                                            [0],
                                            [0]
                                        ], e.min = 1 / 0, e.max = -1 / 0, i = Math.min(t.length - 2, r + 150 - 1); i >= n; i--) f = Math.max(t[i][2] - t[i][3], Math.abs(t[i][2] - t[i + 1][4]), Math.abs(t[i][3] - t[i + 1][4])), o = t[i][2] - t[i + 1][2] > t[i + 1][3] - t[i][3] ? Math.max(t[i][2] - t[i + 1][2], 0) : 0, a = t[i + 1][3] - t[i][3] > t[i][2] - t[i + 1][2] ? Math.max(t[i + 1][3] - t[i][3], 0) : 0, u < e.p[0] ? (d += f, p += o, h += a) : (d = d - d / e.p[0] + f, p = p - p / e.p[0] + o, h = h - h / e.p[0] + a), s = 100 * p / d, l = 100 * h / d, c = 100 * Math.abs(s - l) / (s + l + 1e-6), u < e.p[0] ? g = 0 : u < 2 * e.p[0] ? g += c / e.p[0] : g = (g * (e.p[0] - 1) + c) / e.p[0], e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, s), e.output[2].splice(0, 0, g), i < r && (l < e.min && (e.min = l), s < e.min && (e.min = s), g < e.min && (e.min = g), l > e.max && (e.max = l), s > e.max && (e.max = s), g > e.max && (e.max = g)), u++
                                };
                                break;
                            case "arn":
                                e.shortName = "Aroon", e.min = 0, e.max = 100, e.p = [25], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.statics = function() {
                                    return {
                                        major: [50],
                                        minor: [30, 70]
                                    }
                                };
                                break;
                            case "atr":
                                e.shortName = "ATR", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }];
                                break;
                            case "bnd":
                                e.shortName = "Bands", e.p = [21, 2], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: _("z Score"),
                                    type: e.V.FLOAT,
                                    bounds: [.1, 1 / 0],
                                    inc: .1,
                                    places: 1
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[2]
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a = e.p[0],
                                        s = e.p[1],
                                        l = 0,
                                        c = 0,
                                        u = 0,
                                        f = .05,
                                        d = [],
                                        p = 0,
                                        h = [];
                                    for (e.output = [
                                            [],
                                            [],
                                            []
                                        ], i = Math.min(t.length - 1, r + a); i >= n; i--) o = t[i][4], d.splice(0, 0, o), h.splice(0, 0, o * o), c += o, u += h[0], d.length > a && (c -= d.pop(), u -= h.pop()), l = c / d.length, d.length > 1 ? (p = d.length, f = Math.sqrt((p * u - c * c) / (p * (p - 1)))) : f = 0, e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, l + s * f), e.output[2].splice(0, 0, l - s * f)
                                }, e.label = function(t) {
                                    var n = _("Bands");
                                    return n += "(" + ~~e.p[0] + ", " + e.p[1].toFixed(1) + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
                                };
                                break;
                            case "cci":
                                e.shortName = "CCI", e.min = -250, e.max = 250, e.p = [20], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [-200, -100, 100, 200],
                                        minor: [0]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l, c = e.p[0],
                                        u = [],
                                        f = Math.min(t.length - 1, r + e.p[0]);
                                    for (e.output = [
                                            []
                                        ], i = f; i >= n; i--) {
                                        s = (t[i][2] + t[i][3] + t[i][4]) / 3;
                                        var d = 0;
                                        for (o = i; o <= Math.min(i + c - 1, f); o++) d += t[o][4];
                                        var p = d / (Math.min(i + c - 1, f) - i + 1);
                                        u.splice(0, 0, p), u.length > c && u.pop();
                                        var h = 0;
                                        for (a = 0; a <= u.length - 1; a++) h += Math.abs(u[a] - t[i + a][4]);
                                        var g = h / u.length;
                                        l = 0 == g ? 0 : (s - p) / g / .015, e.output[0].splice(0, 0, l)
                                    }
                                }, e.label = function(t) {
                                    var n = "CCI";
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " " + e.output[0][t].toFixed(digit)), n
                                };
                                break;
                            case "dcn":
                                e.shortName = "Channels", e.p = [21], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[2]
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s = e.p[0],
                                        l = Math.min(t.length - 1, r + s),
                                        c = [],
                                        u = t[l][2],
                                        f = t[l][3];
                                    for (e.output = [
                                            [],
                                            [],
                                            []
                                        ], i = l; i >= n; i--) {
                                        if (a = t[i][4], c.splice(0, 0, a), a > u && (u = a), a < f && (f = a), c.length > s)
                                            for (c.pop(), f = 1e15, u = -1e15, o = 0; o < c.length; o++) c[o] > u && (u = c[o]), c[o] < f && (f = c[o]);
                                        e.output[0].splice(0, 0, (u + f) / 2), e.output[1].splice(0, 0, u), e.output[2].splice(0, 0, f)
                                    }
                                }, e.label = function(t) {
                                    var n = _("Channel");
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
                                };
                                break;
                            case "ema":
                                e.shortName = "EMA", e.p = [5], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a = 2 / (e.p[0] + 1),
                                        s = Math.ceil(Math.log(.01) / Math.log(1 - a));
                                    for (e.output = [t[Math.min(t.length - 1, r + s + 1)][4]], i = Math.min(t.length - 2, r + s); i >= n; i--) o = a * t[i][4] + (1 - a) * e.output[0], e.output.splice(0, 0, o)
                                }, e.label = function(t) {
                                    var n = "";
                                    return t >= 0 && t < e.output.length && (n = _("EMA"), n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "ma":
                                e.shortName = "MA", e.p = [5], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o = e.p[0],
                                        a = 0,
                                        s = 0;
                                    for (e.output = [], i = Math.min(t.length - 1, r + o); i >= n; i--) {
                                        if (a == o - 1) {
                                            s = 0;
                                            for (var l = 0; l <= o - 1; l++) s += t[i + l][4];
                                            e.output.splice(0, 0, s / o)
                                        } else a > o - 1 ? (s = e.output[0] * o, s -= t[i + o][4], s += t[i][4], e.output.splice(0, 0, s / o)) : e.output.splice(0, 0, void 0);
                                        a++
                                    }
                                }, e.label = function(t) {
                                    var n = "";
                                    return t >= 0 && t < e.output.length && (n = _("MA"), n += "(" + ~~e.p[0] + "): ", n += (e.output[t] || 0).toFixed(digit)), n
                                };
                                break;
                            case "trix":
                                e.shortName = "TRIX", e.p = [9], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l = 2 / (e.p[0] + 1),
                                        c = Math.ceil(Math.log(.01) / Math.log(1 - l));
                                    for (s = a = o = t[Math.min(t.length - 1, r + c + 1)][4], i = Math.min(t.length - 2, r + c); i >= n; i--) s = l * (a = l * (o = l * t[i][4] + (1 - l) * o) + (1 - l) * a) + (1 - l) * s, e.output.splice(0, 0, s)
                                }, e.label = function(t) {
                                    var n = _("TRIX");
                                    return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "macd":
                                e.shortName = "MACD", e.p = [12, 26, 9], e.ps = [{
                                    label: "Short EMA",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "Long EMA",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "Signal",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = function(t) {
                                    var n = _("MACD");
                                    return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit) + ", ", n += e.output[2][t].toFixed(digit)), n
                                }, e.draw = function() {
                                    return [{
                                        type: e.HIST,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[2]
                                    }]
                                }, e.statics = function() {
                                    return {
                                        minor: [0]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s = 0,
                                        l = 0,
                                        c = 0,
                                        u = 2 / (1 + e.p[0]),
                                        f = 2 / (1 + e.p[1]),
                                        d = 2 / (1 + e.p[2]),
                                        p = Math.ceil(Math.log(.01) / Math.log(1 - Math.min(u, f))),
                                        h = t[Math.min(t.length - 1, r + p + 1)][4];
                                    for (e.output = [
                                            [0],
                                            [0],
                                            [0]
                                        ], s = h, l = h, c = 0, e.min = 0, e.max = 0, i = Math.min(t.length - 2, r + p); i >= n; i--) a = (o = (s = u * (h = t[i][4]) + (1 - u) * s) - (l = f * h + (1 - f) * l)) - (c = d * o + (1 - d) * c), e.output[0].splice(0, 0, a), e.output[1].splice(0, 0, c), e.output[2].splice(0, 0, o), i < r && (o > e.max && (e.max = o), o < e.min && (e.min = o), a > e.max && (e.max = a), a < e.min && (e.min = a));
                                    e.max = e.max + .05 * (e.max - e.min), 0 == e.max && 0 == e.min && (e.max = 10, e.min = -10)
                                };
                                break;
                            case "mfi":
                                e.shortName = "MFI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.statics = function() {
                                    return {
                                        major: [20, 80]
                                    }
                                };
                                break;
                            case "obv":
                                e.shortName = "OBV", e.p = [], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.statics = function() {
                                    return {
                                        minor: [0]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i;
                                    if (!(t.length <= 1))
                                        for (e.output = [t[Math.min(t.length - 2, r - 1)][5] / BTC_INT], e.min = e.output[0], e.max = e.min, i = Math.min(t.length - 2, r - 1); i >= n; i--) t[i][4] > t[i + 1][4] ? e.output.splice(0, 0, e.output[0] + t[i][5] / BTC_INT) : e.output.splice(0, 0, e.output[0] - t[i][5] / BTC_INT), e.output[0] < e.min && (e.min = e.output[0]), e.output[0] > e.max && (e.max = e.output[0])
                                }, e.label = function(t) {
                                    var n = _("On Balance Volume");
                                    return t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
                                };
                                break;
                            case "emv":
                                e.shortName = "EMV", e.p = [1e4, 14], e.ps = [{
                                    label: "除数",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }, {
                                    label: "长度",
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [-500, 500],
                                        minor: [0]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a = 2 / (e.p[1] + 1),
                                        s = Math.ceil(Math.log(.01) / Math.log(1 - a));
                                    if (e.min = 1 / 0, e.max = -1 / 0, e.output = [], i = Math.min(t.length - 1, r + s + 1), !(--i < 0)) {
                                        for (o = 0 == t[i][5] ? 0 : e.p[0] * (t[i][2] - t[i][3]) / t[i][5] * (t[i][2] + t[i][3] - t[i + 1][2] - t[i + 1][3]) * .5, e.output.splice(0, 0, o), --i; i >= n; i--)(o = a * (0 == t[i][5] ? 0 : e.p[0] * (t[i][2] - t[i][3]) / t[i][5] * (t[i][2] + t[i][3] - t[i + 1][2] - t[i + 1][3]) * .5) + (1 - a) * o) > e.max && (e.max = o), o < e.min && (e.min = o), e.output.splice(0, 0, o);
                                        e.max = e.max + .05 * (e.max - e.min)
                                    }
                                }, e.label = function(t) {
                                    var n = _("EMV");
                                    return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "psar":
                                e.shortName = "PSAR", e.p = [.02, .2], e.ps = [{
                                    label: "AF",
                                    type: e.V.FLOAT,
                                    bounds: [0, 1],
                                    inc: .01,
                                    places: 3
                                }, {
                                    label: "Max AF",
                                    type: e.V.FLOAT,
                                    bounds: [0, 1],
                                    inc: .01,
                                    places: 3
                                }], e.draw = function() {
                                    return [{
                                        type: e.PSAR,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s = !0,
                                        l = e.p[0],
                                        c = (e.p[1], Math.min(t.length - 1, r + 100)),
                                        u = t[c][2],
                                        f = t[c][3],
                                        d = u,
                                        p = f;
                                    for (e.output = [p], a = c - 1; a >= n; a--) i = t[a][2], o = t[a][3], p = e.output[0] + l * (d - e.output[0]), s ? (i > d && (d = i, (l += e.p[0]) > e.p[1] && (l = e.p[1])), p > o && (s = !1, p = d, l = e.p[0], d = o)) : (o < d && (d = o, (l += e.p[0]) > e.p[1] && (l = e.p[1])), p < i && (s = !0, p = d, l = e.p[0], d = i)), u = i, f = o, e.output.splice(0, 0, p)
                                }, e.label = function(t) {
                                    var n = "PSAR";
                                    return n += "(" + e.p[0].toFixed(3) + ", " + e.p[1].toFixed(digit) + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "rsi":
                                e.shortName = "RSI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [30, 70],
                                        minor: [50]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a = 0,
                                        s = [],
                                        l = [],
                                        c = 0,
                                        u = 0,
                                        f = 0,
                                        d = !1,
                                        p = 0;
                                    for (e.output = [50], i = Math.min(t.length - 2, r + 250); i >= n; i--) {
                                        if (d = t[i][4] > t[i + 1][4], p = t[i][4] - t[i + 1][4], d ? s.push(p) : l.push(-p), a < e.p[0]) e.output.splice(0, 0, 50);
                                        else if (a == e.p[0]) {
                                            for (o = 0; o < s.length; o++) c += s[o];
                                            for (0 == s.length ? c = 0 : c /= s.length, o = 0; o < l.length; o++) u += l[o];
                                            0 == l.length ? u = 0 : u /= l.length, f = c / (u + 1e-8), e.output.splice(0, 0, 100 - 100 / (1 + f))
                                        } else f = (c = (c * (e.p[0] - 1) + (d ? p : 0)) / e.p[0]) / (1e-8 + (u = (u * (e.p[0] - 1) + (d ? 0 : -p)) / e.p[0])), e.output.splice(0, 0, 100 - 100 / (1 + f));
                                        a++
                                    }
                                }, e.label = function(t) {
                                    var n = _("RSI");
                                    return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(1)), n
                                };
                                break;
                            case "storsi":
                                e.shortName = "STORSI", e.min = 0, e.max = 100, e.p = [14, 9, 3, 3], e.ps = [{
                                    label: "RSI长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "Stoch长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [20, 80],
                                        minor: [50]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a = [],
                                        s = 1e15,
                                        l = -1e15,
                                        c = 0,
                                        u = 0,
                                        f = 2 / (e.p[2] + 1),
                                        d = 2 / (e.p[3] + 1);
                                    e.output = [
                                        [],
                                        []
                                    ];
                                    var p, h, g = 0,
                                        m = [],
                                        v = [],
                                        b = 0,
                                        y = 0,
                                        x = 0,
                                        w = !1,
                                        $ = 0;
                                    for (p = Math.min(t.length - 2, r + 250); p >= n; p--) {
                                        if (w = t[p][4] > t[p + 1][4], $ = t[p][4] - t[p + 1][4], w ? m.push($) : v.push(-$), g < e.p[0]) x = 50;
                                        else if (g == e.p[0]) {
                                            for (h = 0; h < m.length; h++) b += m[h];
                                            for (0 == m.length ? b = 0 : b /= m.length, h = 0; h < v.length; h++) y += v[h];
                                            0 == v.length ? y = 0 : y /= v.length, x = 100 - 100 / (1 + b / (y + 1e-8))
                                        } else x = 100 - 100 / (1 + (b = (b * (e.p[0] - 1) + (w ? $ : 0)) / e.p[0]) / (1e-8 + (y = (y * (e.p[0] - 1) + (w ? 0 : -$)) / e.p[0])));
                                        if (g++, a.splice(0, 0, x), x > l && (l = x), x < s && (s = x), a.length > e.p[1] && ((o = a.pop()) >= l || o <= s))
                                            for (s = 1e15, l = -1e15, i = 0; i < a.length; i++) a[i] > l && (l = a[i]), a[i] < s && (s = a[i]);
                                        u = d * (c = f * (l == s ? 100 : 100 * (x - s) / (l - s)) + (1 - f) * c) + (1 - d) * u, e.output[0].splice(0, 0, c), e.output[1].splice(0, 0, u)
                                    }
                                }, e.label = function(t) {
                                    var n = "STORSI";
                                    return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ", " + ~~e.p[3] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit)), n
                                };
                                break;
                            case "sma":
                                e.shortName = "SMA", e.p = [21], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o, a = [],
                                        s = 0,
                                        l = e.p[0];
                                    for (e.output = [], i = Math.min(t.length - 1, r + l); i >= n; i--) o = t[i][4], a.length < l ? (a.push(o), s = (s * (a.length - 1) + o) / a.length) : (s -= a[0] / l, s += o / l, a.splice(0, 1), a.push(o)), e.output.splice(0, 0, s)
                                }, e.label = function(t) {
                                    var n = _("SMA");
                                    return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "sto":
                                e.shortName = "STO", e.min = 0, e.max = 100, e.p = [14, 3, 3], e.ps = [{
                                    label: "长度",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "平滑%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [20, 80],
                                        minor: [50]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l = [],
                                        c = 1e15,
                                        u = -1e15,
                                        f = 0,
                                        d = 0,
                                        p = 2 / (e.p[1] + 1),
                                        h = 2 / (e.p[2] + 1);
                                    for (e.output = [
                                            [],
                                            []
                                        ], i = Math.min(t.length - 1, r + e.p[0]); i >= n; i--) {
                                        if (a = t[i][4], l.splice(0, 0, a), a > u && (u = a), a < c && (c = a), l.length > e.p[0] && ((s = l.pop()) >= u || s <= c))
                                            for (c = 1e15, u = -1e15, o = 0; o < l.length; o++) l[o] > u && (u = l[o]), l[o] < c && (c = l[o]);
                                        d = h * (f = p * (u == c ? 100 : 100 * (a - c) / (u - c)) + (1 - p) * f) + (1 - h) * d, e.output[0].splice(0, 0, f), e.output[1].splice(0, 0, d)
                                    }
                                }, e.label = function(t) {
                                    var n = "STO";
                                    return t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " %K(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[0][t].toFixed(1), n += " %D(" + ~~e.p[2] + "): ", n += e.output[1][t].toFixed(1)), n
                                };
                                break;
                            case "kdj":
                                e.shortName = "KDJ", e.min = -50, e.max = 150, e.p = [9, 3, 3], e.ps = [{
                                    label: "%K",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "%D",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }, {
                                    label: "%J",
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output[0]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[1]
                                    }, {
                                        type: e.LINE,
                                        data: e.output[2]
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [0, 100],
                                        minor: [50]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l = [],
                                        c = 1e15,
                                        u = -1e15,
                                        f = 0,
                                        d = 0,
                                        p = 0,
                                        h = 1 / e.p[1],
                                        g = 1 / e.p[2];
                                    for (e.output = [
                                            [],
                                            [],
                                            []
                                        ], i = Math.min(t.length - 1, r + e.p[0]); i >= n; i--) {
                                        if (a = t[i][4], l.splice(0, 0, a), a > u && (u = a), a < c && (c = a), l.length > e.p[0] && ((s = l.pop()) >= u || s <= c))
                                            for (c = 1e15, u = -1e15, o = 0; o < l.length; o++) l[o] > u && (u = l[o]), l[o] < c && (c = l[o]);
                                        p = 3 * (f = h * (u == c ? 100 : 100 * (a - c) / (u - c)) + (1 - h) * f) - 2 * (d = g * f + (1 - g) * d), e.output[0].splice(0, 0, f), e.output[1].splice(0, 0, d), e.output[2].splice(0, 0, p)
                                    }
                                }, e.label = function(t) {
                                    var n = "KDJ";
                                    return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit) + ", ", n += " J:" + e.output[2][t].toFixed(digit)), n
                                };
                                break;
                            case "vol":
                                e.shortName = "VOL", e.min = 0, e.update = function(t, n, r) {
                                    var i, o;
                                    if (!(void 0 === t || t.length <= n)) {
                                        for (e.max = -1 / 0, i = 0; i <= r - n; i++) {
                                            (o = t[i + n][5] / BTC_INT) > e.max && (e.max = o);
                                            var a = !0;
                                            a = t[i + n][4] >= t[i + n][1] && !(t[i + n][1] == t[i + n][4] && t[i + n + 1] && t[i + n + 1][4] > t[i + n][4]), e.output.push([o, a])
                                        }
                                        0 == e.max ? e.max = 10 : e.max = e.max
                                    }
                                }, e.draw = function() {
                                    return [{
                                        type: e.LBLHIST,
                                        data: e.output
                                    }]
                                }, e.label = function(t) {
                                    var n = "";
                                    return t >= 0 && t < e.output.length && (n = _(getLang().volume), n += " " + e.output[t][0].toFixed(4)), n
                                };
                                break;
                            case "vwap":
                                e.shortName = "VWAP", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i, o = 0,
                                        a = 0,
                                        s = 0;
                                    for (e.output = [], i = Math.min(t.length - 1, r + e.p[0]); i >= n; i--) o += t[i][4] * (t[i][5] / BTC_INT), a += t[i][5] / BTC_INT, s >= e.p[0] && (o -= t[i + e.p[0]][4] * (t[i + e.p[0]][5] / BTC_INT), a -= t[i + e.p[0]][5] / BTC_INT), e.output.splice(0, 0, o / a), s++
                                }, e.label = function(t) {
                                    var n = "VWAP";
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "wpr":
                                e.shortName = "Wm %R", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [1, 1 / 0]
                                }], e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [20, 80],
                                        minor: [50]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i, o, a, s, l = [],
                                        c = 1e15,
                                        u = -1e15,
                                        f = 0;
                                    for (e.output = [], i = Math.min(t.length - 1, r + e.p[0]); i >= n; i--) {
                                        if (a = t[i][4], l.splice(0, 0, a), a > u && (u = a), a < c && (c = a), l.length > e.p[0] && ((s = l.pop()) >= u || s <= c))
                                            for (c = 1e15, u = -1e15, o = 0; o < l.length; o++) l[o] > u && (u = l[o]), l[o] < c && (c = l[o]);
                                        f = u == c ? 100 : 100 * (a - c) / (u - c), e.output.splice(0, 0, f)
                                    }
                                }, e.label = function(t) {
                                    var n = "Wm %R";
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
                                };
                                break;
                            case "mtm":
                                e.shortName = "MTM", e.p = [14], e.ps = [{
                                    label: _("Period"),
                                    type: e.V.INT,
                                    bounds: [2, 1 / 0]
                                }], e.label = function(t) {
                                    var n = _("MTM");
                                    return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
                                }, e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.statics = function() {
                                    return {
                                        major: [-5, 5],
                                        minor: [0]
                                    }
                                }, e.update = function(t, n, r) {
                                    var i;
                                    for (e.min = 1 / 0, e.max = -1 / 0, e.output = [], i = Math.min(t.length - 1 - e.p[0], r); i >= n; i--) {
                                        var o = t[i][4] - t[i + e.p[0]][4];
                                        o > e.max && (e.max = o), o < e.min && (e.min = o), e.output.splice(0, 0, o)
                                    }
                                    e.max = e.max + .05 * (e.max - e.min)
                                };
                                break;
                            case "avl":
                                e.shortName = "AVL", e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i = 0,
                                        o = 0;
                                    e.output = [];
                                    for (var a = Math.min(t.length - 1, r); a >= n; a--) i += t[a][6], 0 == (o += t[a][5]) ? e.output.splice(0, 0, t[a][4]) : e.output.splice(0, 0, i / o)
                                }, e.label = function(t) {
                                    var n = "";
                                    return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
                                };
                                break;
                            case "avlIndex":
                                e.shortName = "AVL", e.draw = function() {
                                    return [{
                                        type: e.LINE,
                                        data: e.output
                                    }]
                                }, e.update = function(t, n, r) {
                                    var i = 0,
                                        o = 0;
                                    e.output = [];
                                    for (var a = Math.min(t.length - 1, r); a >= n; a--) i += (t[a][1] + t[a][2] + t[a][3] + t[a][4]) / 4 * t[a][5], 0 == (o += t[a][5]) ? e.output.splice(0, 0, t[a][4]) : e.output.splice(0, 0, i / o)
                                }, e.label = function(t) {
                                    var n = "";
                                    return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
                                }
                        }
                        e.type = n
                    }(n),
                    function(t) {
                        if (void 0 !== t && t.hasOwnProperty("length")) {
                            var n;
                            for (n = 0; n < e.ps.length; n++) t.length <= n || t[n] < e.ps[n].bounds[0] || t[n] > e.ps[n].bounds[1] || (e.p[n] = t[n])
                        }
                    }(r), this
            },
            reset: function() {
                return e.output = [], this
            },
            bounds: function() {
                return [e.min, e.max]
            },
            update: function(t, n, r) {
                if (e.output = [], void 0 !== t && t.hasOwnProperty("length") && 0 != t.length) return e.update(t, n, r), this
            },
            draw: function() {
                return e.draw()
            },
            statics: function() {
                return e.statics()
            },
            label: function(t) {
                return e.label(t)
            },
            color: function(t) {
                return void 0 === t ? e.color : (e.color = t, this)
            },
            shortName: function() {
                return e.shortName
            },
            settings: function() {
                return e.p
            },
            paramSettings: function() {
                return e.ps
            },
            params: function(e) {},
            paramUpdate: function(t, n) {
                return e.p[t] = n, this
            },
            internals: e.debug ? function() {
                return e
            } : function() {
                return null
            }
        }
    },
    Chart = function() {
        function e() {
            var e, t = (Ee.slots.length - 1) * (2 + Ee.px.pad) + 1 + Ee.px.lbl.h,
                n = Ee.h - t,
                r = -1;
            for (e = 0; e < Ee.slots.length; e++) Ee.slots[e].hasOwnProperty("main") ? Ee.slots[e].h = (Ee.mainSlotHeightPercent || .67) * n | 0 : Ee.slots[e].h = (1 - Ee.mainSlotHeightPercent || .33) * n / (Ee.slots.length - 1) | 0, Ee.slots[e].px = r, r += Ee.slots[e].h + 2 + Ee.px.pad + 1, DEBUG && Ae("Slot " + e + " height: " + Ee.slots[e].h + ", px: " + Ee.slots[e].px)
        }

        function t(t) {
            if (e(), void 0 !== t) {
                var n = new Validator,
                    r = (new Validator).create(n.INT),
                    i = (new Validator).create(n.BOOL);
                t.hasOwnProperty("r") && (Ee.settings.repaint = i.set(Ee.settings.repaint).set(t.r).get()), t.hasOwnProperty("g") && (Ee.settings.grid = i.set(Ee.settings.grid).set(t.g).get()), t.hasOwnProperty("c") && (Ee.settings.crosshairs = i.set(Ee.settings.crosshairs).set(t.c).get()), t.hasOwnProperty("k") && (Ee.settings.icontrols = i.set(Ee.settings.icontrols).set(t.k).get()), t.hasOwnProperty("b") && (Ee.settings.bidask = i.set(Ee.settings.bidask).set(t.b).get()), t.hasOwnProperty("l") && (Ee.settings.logscale = i.set(Ee.settings.logscale).set(t.l).get()), t.hasOwnProperty("o") && (Ee.settings.userorders = i.set(Ee.settings.userorders).set(t.o).get()), t.hasOwnProperty("time") && (Ee.settings.time = i.set(Ee.settings.userorders).set(t.time).get()), t.hasOwnProperty("m") && (Ee.mode.current = r.set(Ee.mode.current).set(t.m).get()), t.hasOwnProperty("d") && (Ee.mode.display = r.set(Ee.mode.display).set(t.d).get()), t.hasOwnProperty("w") && (Ee.px.bar.width = r.set(Ee.px.bar.width).set(t.w).get()), t.hasOwnProperty("s") && (Ee.px.bar.spacing = r.set(Ee.px.bar.spacing).set(t.s).get());
                for (var o = r.set(Ee.period.avail[Ee.period.current]).set(t.t).get(), a = 0; a < Ee.period.avail.length; a++) Ee.period.avail[a] == o && (Ee.period.current = a);
                if (t.hasOwnProperty("i")) {
                    var s, l, c, u, f = [],
                        d = ["m", "p", "h"],
                        p = [],
                        h = [];
                    for (a in Ee.indicators) Ee.indicators.hasOwnProperty(a) && p.push(a);
                    for (a in Ee.overlays) Ee.overlays.hasOwnProperty(a) && h.push(a);
                    for (a = 0; a < t.i.length; a++) {
                        for (l = !0, s = 0; s < d.length; s++) l = l && t.i[a].hasOwnProperty(d[s]);
                        if (l) {
                            if (c = {
                                    px: ~~+t.i[a].p,
                                    h: ~~+t.i[a].h
                                }, t.i[a].m) {
                                if (c.main = !0, c.o = [], c.u = [], t.i[a].hasOwnProperty("o"))
                                    for (s = 0; s < t.i[a].o.length; s++) u = null, t.i[a].o[s].hasOwnProperty("t") && h.indexOf(t.i[a].o[s].t) >= 0 && t.i[a].o[s].hasOwnProperty("s") && (t.i[a].o[s].hasOwnProperty("c") && (u = t.i[a].o[s].c), c.o.push({
                                        t: t.i[a].o[s].t,
                                        i: null,
                                        s: t.i[a].o[s].s,
                                        c: u
                                    }));
                                if (t.i[a].hasOwnProperty("u"))
                                    for (s = 0; s < t.i[a].u.length; s++) t.i[a].u[s].hasOwnProperty("t") && h.indexOf(t.i[a].u[s].t) >= 0 && t.i[a].u[s].hasOwnProperty("s") && (t.i[a].u[s].hasOwnProperty("c") && (u = t.i[a].u[s].c), c.u.push({
                                        t: t.i[a].u[s].t,
                                        i: null,
                                        s: t.i[a].u[s].s,
                                        c: u
                                    }))
                            } else {
                                if (!(p.indexOf(t.i[a].t) >= 0 && t.i[a].hasOwnProperty("r"))) continue;
                                c.t = t.i[a].t, c.i = null, c.s = t.i[a].r
                            }
                            f.push(c)
                        }
                    }
                    f.length > 0 && (Ee.slots = f, e())
                }
            }
        }

        function n(e) {
            var t = e[0],
                n = $e();
            0 == Ee.bars.data.length || 0 == n || t >= Ee.bars.data[0][0] + 1e3 * n ? (Ee.bars.data.splice(0, 0, [t, e[1], e[1], e[1], e[1], e[2]]), Ee.flags.recompute = !0) : (e[1] > Ee.bars.data[0][2] && (Ee.bars.data[0][2] = e[1]), e[1] < Ee.bars.data[0][3] && (Ee.bars.data[0][3] = e[1]), Ee.bars.data[0][4] = e[1], Ee.bars.data[0][5] += e[2], Ee.flags.recompute = !0), (e[1] > Ee.highPrice || e[1] < Ee.lowPrice || Ee.bars.data[0][5] > Ee.maxVol) && (Ee.flags.recompute = !0)
        }

        function r(e) {
            var t = parseFloat(e[0]),
                n = parseFloat(e[1]),
                r = parseFloat(e[2]);
            return !(isNaN(t) || isNaN(n) || isNaN(r))
        }

        function i() {
            $(Ee.element).append($('<div id="chartCtrlFixed" class="chartCtrl" hidden><div class="content"><div>时间:<span id="date"></span></div><div>开盘:<span id="open"></span></div><div>最高:<span id="high"></span></div><div>最低:<span id="low"></span></div><div>收盘:<span  id="close"></span></div><div>涨幅:<span id="updownPercent" ></span></div><div>振幅:<span  id="updown1"></span></div><div>成交量:<span  id="volume"></span></div><div>成交额:<span  id="quoteVolume"></span></div><div>换手率:<span  id="hand"></span></div></div></div>'));
            $(Ee.element).mouseover(function() {
                Ee.mode.display, Ee.CANDLE
            }), $(Ee.element).mouseout(function() {
                Ee.mode.display == Ee.CANDLE && $("#chartCtrlFixed").hide()
            }), Ee.updateXFK = function(e) {
                if (e) r = t = [(new Date).getTime(), 0, 0, 0, 0, 0];
                else var t = Ee.bars.data[Ee.curIndex],
                    n = Ee.curIndex + 1 >= Ee.bars.data.length ? Ee.curIndex : Ee.curIndex + 1,
                    r = Ee.bars.data[n];
                var i, o = Ee.period.avail[Ee.period.current];
                o > 0 && o <= 3600 ? i = new Date(t[0]).Format("MM-dd hh:mm") : 86400 == o ? i = new Date(t[0]).Format("yyyy/MM/dd/") + function(e) {
                    var t = "";
                    switch (e) {
                        case 0:
                            t = "日";
                            break;
                        case 1:
                            t = "一";
                            break;
                        case 2:
                            t = "二";
                            break;
                        case 3:
                            t = "三";
                            break;
                        case 4:
                            t = "四";
                            break;
                        case 5:
                            t = "五";
                            break;
                        case 6:
                            t = "六"
                    }
                    return t
                }(new Date(t[0]).getDay()) : 604800 == o && (i = new Date(t[0]).Format("yyyy-MM-dd")), e && (i = "--"), $("#chartCtrlFixed #date").text(i), $("#chartCtrlFixed #open").text(e ? "--" : Y(t[1])), $("#chartCtrlFixed #open").css("color", t[1] < r[4] ? "#ff4056" : t[1] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #high").text(e ? "--" : Y(t[2])), $("#chartCtrlFixed #high").css("color", t[2] < r[4] ? "#ff4056" : t[2] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #low").text(e ? "--" : Y(t[3])), $("#chartCtrlFixed #low").css("color", t[3] < r[4] ? "#ff4056" : t[3] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #close").text(e ? "--" : Y(t[4])), $("#chartCtrlFixed #close").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updownPercent").text(e ? "--" : (100 * (t[4] - r[4]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #updownPercent").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updown1").text(e ? "--" : (100 * (t[2] - t[3]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #volume").text(e ? "--" : t[5].toFixed(0)), $("#chartCtrlFixed #hand").text(e ? "--" : (100 * (Ee.data.circulation ? t[5] / Ee.data.circulation : 0)).toFixed(6) + "%")
            }
        }

        function o(e) {
            var t = [],
                n = 0,
                r = $("<div/>").addClass("control-" + e);
            return t[n++] = '<span class="settings-popout">', t[n++] = '<span class="icon settings">', t[n++] = '<i class="icon-wrench"></i></span>', t[n++] = "</span>", r.addClass("icontrol").html(t.join("")).css("top", Ee.slots[e].px + 3 + "px"), r.hide(), 0 == e ? $("span.move-up i", r).addClass("disable") : $("span.move-up", r).tooltip({
                placement: "right",
                title: _("Move Up")
            }).click(function(e) {
                return function() {
                    ! function(e, t) {
                        if (Ee.slots.length <= 1) return;
                        if (0 == e && t) return;
                        if (e == Ee.slots.length - 1 && !t) return;
                        DEBUG && Ae("Moving indicator in slot " + e + " " + (t ? "up" : "down")), $(".icontrol", Ee.element).each(function(e, t) {
                            $(t).data("popped") && a(e)
                        });
                        var n, r, i = t ? e - 1 : e + 1;
                        r = Ee.slots[i].px, Ee.slots[i].px = Ee.slots[e].px, Ee.slots[e].px = r, n = Ee.slots.splice(e, 1)[0], Ee.slots.splice(i, 0, n), ye(), we()
                    }(e, !0)
                }
            }(e)), $("span.settings", r).tooltip({
                placement: "right",
                title: _("Settings")
            }).click(function(e) {
                return function() {
                    a(e)
                }
            }(e)), e == Ee.slots.length - 1 && $("span.move-down i", r).addClass("disable"), r
        }

        function a(e) {
            if (!(Ee.slots.length <= e || e < 0 || $(".popout .extra-settings").length > 0)) {
                var t = $(".control-" + e, Ee.element);
                if (t.click(function(e) {
                        e.stopPropagation()
                    }), $(document).click(function() {
                        $(".extra-settings", t).remove(), $(".colorpicker").hide(), t.data("popped", !1)
                    }), t.data("popped")) return $(".extra-settings", t).remove(), t.removeClass("popout"), t.data("popped", !1), void $(".settings", t).tooltip("enable");
                var n = $("<span/>").addClass("extra-settings"),
                    r = [];
                if (Ee.slots[e].hasOwnProperty("main")) {
                    var i, o, s, c = $("<div/>").addClass("underlays sortable"),
                        u = $("<div/>").addClass("overlays sortable"),
                        p = $("<div/>").addClass("rows");
                    for (p.append($("<div/>").addClass("title").html(_("Behind Price"))), w = 0; w < Ee.slots[e].u.length; w++) {
                        for (o = b(e, w, "u"), "bidask" == Ee.slots[e].u[w].t && (o = null), s = uniqueID(), i = $("<div/>").addClass("row").addClass("row1").addClass("u" + w).data({
                                j: w,
                                place: "u"
                            }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", o).attr("id", s))).append($("<u/>").html(Ee.slots[e].u[w].i.shortName() + ": ")), g = Ee.slots[e].u[w].i.settings(), m = Ee.slots[e].u[w].i.paramSettings(), v = "", 0 == g.length && i.append($("<u/>").text(" --- ")), x = 0; x < g.length; x++) v = uniqueID(), i.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
                            val: g[x],
                            sel: "#" + v,
                            set: m[x],
                            fn: function(t, n, r) {
                                return function(i) {
                                    "function" == typeof t && t(n, i), Ee.slots[e].u[r].s = [i], h()
                                }
                            }(Ee.slots[e].u[w].i.paramUpdate, x, w)
                        });
                        v = uniqueID(), i.append($("<span/>").addClass("icon remove-icon").attr("id", v).append($("<i/>").addClass("icon-trash")).click(function(e, t, n, r) {
                            return function() {
                                $("#" + e).tooltip("hide"), f(t, "u", r), a(r), a(r)
                            }
                        }(v, w, 0, e)).tooltip({
                            placement: "right",
                            title: _("Remove")
                        })), y = uniqueID(), i.append($("<span/>").addClass("icon edit-icon").attr("id", y).append($("<i/>").addClass("icon-edit")).click(l(y, e, "u", w, s)).tooltip({
                            placement: "right",
                            title: _("Pick Color")
                        })), i.append(clearingSpan()), c.append(i)
                    }
                    for (p.append(c), p.append($("<div/>").addClass("title").html(_("In Front of Price"))), w = 0; w < Ee.slots[e].o.length; w++) {
                        for (o = b(e, w, "o"), "bidask" == Ee.slots[e].o[w].t && (o = null), s = uniqueID(), i = $("<div/>").addClass("row").addClass("o" + w).data({
                                j: w,
                                place: "o"
                            }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", o).attr("id", s))).append($("<u/>").html(Ee.slots[e].o[w].i.shortName() + ": ")), g = Ee.slots[e].o[w].i.settings(), m = Ee.slots[e].o[w].i.paramSettings(), v = "", 0 == g.length && i.append($("<u/>").text(" --- ")), x = 0; x < g.length; x++) v = uniqueID(), i.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
                            val: g[x],
                            sel: "#" + v,
                            set: m[x],
                            fn: function(t, n, r) {
                                return function(i) {
                                    "function" == typeof t && t(n, i), Ee.slots[e].o[r].s = [i], h()
                                }
                            }(Ee.slots[e].o[w].i.paramUpdate, x, w)
                        });
                        v = uniqueID(), i.append($("<span/>").addClass("icon remove-icon").attr("id", v).append($("<i/>").addClass("icon-trash")).click(function(e, t, n, r) {
                            return function() {
                                $("#" + e).tooltip("hide"), f(t, "o", r), a(r), a(r)
                            }
                        }(v, w, 0, e)).tooltip({
                            placement: "right",
                            title: _("Remove")
                        })), y = uniqueID(), i.append($("<span/>").addClass("icon edit-icon").attr("id", y).append($("<i/>").addClass("icon-edit")).click(l(y, e, "o", w, s)).tooltip({
                            placement: "right",
                            title: _("Pick Color")
                        })), i.append(clearingSpan()), u.append(i)
                    }
                    p.append(u), n.append(p);
                    $(".rows", n), $(".reorder-icon", n),
                        function(e) {}($(".rows", n));
                    $(".overlays", n).append("<div class='row' style='height:0'></div>"), $(".underlays", n).append("<div class='row' style='height:0'></div>")
                } else {
                    n.append($("<span/>").addClass("icon remove-icon").append($("<i/>").addClass("icon-trash")).click(function(e) {
                        return function() {
                            $(".control-" + e + " .remove-icon", Ee.element).tooltip("hide"), d(e)
                        }
                    }(e)).tooltip({
                        placement: "bottom",
                        title: _("Remove")
                    }));
                    for (var g = Ee.slots[e].i.settings(), m = Ee.slots[e].i.paramSettings(), v = "", y = "", x = 0; x < g.length; x++) v = uniqueID(), n.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
                        val: g[x],
                        sel: "#" + v,
                        set: m[x],
                        fn: function(e, t) {
                            return function(n) {
                                "function" == typeof e && e(t, n), h()
                            }
                        }(Ee.slots[e].i.paramUpdate, x)
                    })
                }
                n.append(clearingSpan()), $(".settings-popout", t).append(n);
                for (var w = 0; w < r.length; w++) $(r[w].sel).data("value", r[w].val),
                    function(e, t, n, r, i, o) {
                        new Validator;
                        var s = (new Validator).create(n.type),
                            l = n.hasOwnProperty("inc") ? n.inc : 1,
                            c = n.hasOwnProperty("places") ? n.places : 0;
                        $(t).on({
                            keyup: function(i) {
                                var o = $(t),
                                    u = i.keyCode || i.which,
                                    f = {
                                        left: 37,
                                        up: 38,
                                        right: 39,
                                        down: 40
                                    },
                                    d = {
                                        enter: 13,
                                        esc: 27
                                    },
                                    p = !1,
                                    h = o.data("value");
                                switch (u) {
                                    case f.up:
                                        h + l <= n.bounds[1] && (o.data("value", h + l), o.val((h + l).toFixed(c)), "function" == typeof r && r(h + l));
                                        break;
                                    case f.down:
                                        h - l >= n.bounds[0] && (o.data("value", h - l), o.val((h - l).toFixed(c)), "function" == typeof r && r(h - l));
                                        break;
                                    case d.enter:
                                    case d.esc:
                                        i.preventDefault(), i.stopPropagation(), a(e);
                                        break;
                                    default:
                                        p = !0
                                }
                                if (p) {
                                    var g = +o.val(),
                                        m = s.set(h).set(g).get();
                                    m != h && (m >= n.bounds[0] && m <= n.bounds[1] ? (o.data("value", m), "function" == typeof r && r(m)) : o.val().length > 0 && o.val(h))
                                }
                            },
                            blur: function() {
                                0 == $(t).val().length && $(t).val($(t).data("value")), "function" == typeof i && i()
                            }
                        })
                    }(e, r[w].sel, r[w].set, r[w].fn, h);
                t.addClass("popout"), $(".settings", t).tooltip("disable"), t.data("popped", !0)
            }
        }

        function s() {
            var e;
            for (e = 0; e < Ee.slots.length; e++) $(".control-" + e, Ee.element).data("popped") && a(e)
        }

        function l(e, t, n, r, i) {
            return function() {
                $("#" + e).ColorPicker({
                    color: b(t, r, n),
                    onChange: function(e, o, a) {
                        ! function(e, t, n, r) {
                            var i = null;
                            i = Ee.slots[e].hasOwnProperty("main") && void 0 !== n ? Ee.slots[e][n][t].i : Ee.slots[e].i;
                            null != i && i.color(r)
                        }(t, r, n, "#" + o), "o" == n ? Ee.flags.redraw.overlay = !0 : "u" == n && (Ee.flags.redraw.underlay = !0), window.reqAnimFrame(p), $("#" + i).css("color", "#" + o)
                    },
                    onHide: function() {}
                }).ColorPickerShow(), $(".colorpicker").click(function(e) {
                    e.stopPropagation()
                })
            }
        }

        function c(e, t) {
            DEBUG && Ae("Adding overlay " + e + " to chart.");
            var n = {
                t: e,
                i: (new Indicator).build(e),
                s: []
            };
            n.s = n.i.settings(), t && n.i.paramUpdate(0, t), n.i.color(Ee.colors.stroke.i[Ee.lastColorIndex % Ee.colors.stroke.i.length]), Ee.lastColorIndex++;
            var r, i = -1;
            for (r = 0; r < Ee.slots.length; r++)
                if (Ee.slots[r].hasOwnProperty("main")) {
                    i = r;
                    break
                }
            if (-1 != i) {
                Ee.slots[i].u.push(n);
                $(".control-" + i, Ee.element).data("popped") && (a(i), a(i)), h()
            }
        }

        function u(t) {
            DEBUG && Ae("Adding indicator " + t + " to chart.");
            var n, r = (Ee.slots.length - 1) * (2 + Ee.px.pad) + 1 + Ee.px.lbl.h,
                i = (Ee.h, Math.max(Ee.slots[Ee.slots.length - 1].h * Ee.slots.length / (Ee.slots.length + 1), Ee.px.slotmin)),
                a = 0,
                s = 0,
                l = 0,
                c = !1,
                u = 0,
                f = {
                    t: t,
                    h: i,
                    px: 0,
                    i: (new Indicator).build(t),
                    s: []
                };
            for (f.s = f.i.settings(); a < i;)
                if (!c && Ee.slots[s % Ee.slots.length].h <= Ee.px.slotmin) ++l == Ee.slots.length && (c = !0), s++;
                else {
                    for (l = 0, Ee.slots[s % Ee.slots.length].h -= 1, a += 1, n = 1 + s % Ee.slots.length; n < Ee.slots.length; n++) Ee.slots[n].px -= 1;
                    if (s++, ++u > 1500) {
                        DEBUG && Ae("Emergency break. nc = " + l + " shrink: " + (c ? "true" : "false")), DEBUG && Ae(Ee.slots);
                        break
                    }
                }
            f.px = Ee.slots[Ee.slots.length - 1].h + 2 + Ee.px.pad + 1, Ee.slots.push(f);
            for (var d = 1; d <= Ee.slots.length - 2; d++) $(".control-" + d, Ee.element).remove(), Ee.slots[d].control = o(d), $(Ee.element).append(Ee.slots[d].control);
            Ee.slots[Ee.slots.length - 1].control = o(Ee.slots.length - 1), $(Ee.element).append(Ee.slots[Ee.slots.length - 1].control), e(), ye(), we()
        }

        function f(e, t, n) {
            Ee.slots[n].hasOwnProperty(t) && (Ee.slots[n][t].splice(e, 1), $(".control-" + n + " ." + t + e, Ee.element).remove(), h())
        }

        function d(e) {
            if (!Ee.slots[e].hasOwnProperty("main")) {
                var t, n = +Ee.slots[e].h + Ee.px.pad + 3,
                    r = -1;
                for ($(".control-" + (Ee.slots.length - 1), Ee.element).remove(), $(".icontrol", Ee.element).each(function(e, t) {
                        $(t).data("popped") && a(e)
                    }), t = 0; t < Ee.slots.length; t++)
                    if (t != e && (r < 0 && t > e && (Ee.slots[t].px -= Ee.slots[e].h), Ee.slots[t].hasOwnProperty("main"))) {
                        r = t, Ee.slots[t].h += n;
                        break
                    }
                for (t = 0; t < Ee.slots.length; t++) DEBUG && Ae("Slot " + t + " h: " + Ee.slots[t].h + ", px: " + Ee.slots[t].px);
                Ee.slots.splice(e, 1), ye(), we()
            }
        }

        function p() {
            var e = Ee.canvas.base[0].getContext("2d"),
                t = Ee.canvas.orders[0].getContext("2d"),
                n = Ee.canvas.bg[0].getContext("2d"),
                r = Ee.canvas.main[0].getContext("2d"),
                i = Ee.canvas.fg[0].getContext("2d");
            Ee.flags.recompute && function(e) {
                if (Ee.bars.fixTime) {
                    var t, n = new Date(Ee.bars.data && Ee.bars.data.length > 0 ? Ee.bars.data[0][0] : new Date),
                        r = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + Ee.bars.startTime1),
                        i = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + Ee.bars.endTime1),
                        o = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + Ee.bars.startTime2),
                        a = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + Ee.bars.endTime2);
                    t = n <= i && n >= r ? (i.getTime() - n.getTime() + (a - o)) / 6e4 + 1 : n < o && n > i ? (a - o) / 6e4 : n <= a && n >= o ? (a.getTime() - n.getTime()) / 6e4 : n > a ? 0 : (i.getTime() - r.getTime() + a.getTime() - o.getTime()) / 6e4, t = Math.floor(t), Ee.bars.blank = t < 0 ? 0 : t, Ee.bars.visible = (i.getTime() - r.getTime() + a.getTime() - o.getTime()) / 6e4 + 1, Ee.px.bar.spacing = 1
                } else Ee.px.bar.spacing = Ee.px.bar.width / 3 > 2 ? Ee.px.bar.width / 3 : 2, Ee.bars.visible = 0 | parseInt((Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w - 1) / (Ee.px.bar.width + Ee.px.bar.spacing));
                var s, l, c = ie();
                c[1] > -1 && (Ee.price.high = 0, Ee.price.low = 1e15);
                if (Ee.mode.display == Ee.CANDLE)
                    for (s = c[0]; s <= c[1]; s++) Ee.bars.data[s][2] > Ee.price.high && (Ee.price.high = Ee.bars.data[s][2]), Ee.bars.data[s][3] < Ee.price.low && (Ee.price.low = Ee.bars.data[s][3]);
                else
                    for (s = c[0]; s <= c[1]; s++) Ee.bars.data[s][4] > Ee.price.high && (Ee.price.high = Ee.bars.data[s][4]), Ee.bars.data[s][4] < Ee.price.low && (Ee.price.low = Ee.bars.data[s][4]);
                var u = Ee.canvas.base[0].getContext("2d");
                u.font = Ee.font.labels, Ee.px.lbl.w = u.measureText(Y(10)).width + 8, Ee.LblWidthChange && Ee.LblWidthChange(Ee.px.lbl.w);
                var f = Ee.price.high - Ee.price.low;
                Ee.settings.logscale && (Ee.price.high = Math.min(1.1 * Ee.price.high, Ee.price.high + .1 * f), Ee.price.low = Math.max(Ee.price.low / 1.1, Ee.price.low - .1 * f));
                Ee.price.low < 0 && (Ee.price.low = 0);
                for (Ee.px.bar.dx = (Ee.px.bar.width - 1) / 2 | 0, Ee.period.string = ke(), s = 0; s < Ee.slots.length; s++)
                    if (Ee.slots[s].hasOwnProperty("main")) {
                        if (Ee.settings.logscale) {
                            var d = Ee.slots[s].px,
                                p = d + Ee.slots[s].h;
                            try {
                                Ee.log.m = (d - p) / log10(p1 / p0), Ee.log.b = (d * log10(p0) - p * log10(p1)) / log10(p0 / p1)
                            } catch (e) {
                                Ee.log.m = 0, Ee.log.b = 0
                            }
                        }
                        Ee.price.high, Ee.price.low;
                        for (l = 0; l < Ee.slots[s].o.length; l++)
                            if (Ee.slots[s].o[l].hasOwnProperty("i")) {
                                Ee.slots[s].o[l].i.update(Ee.bars.data, c[0], c[1]);
                                if (m = Ee.slots[s].o[l].i.draw())
                                    for (v = 0; v < m.length; v++)
                                        for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) {
                                            (b = h[g]) > Ee.price.high && (Ee.price.high = b), b < Ee.price.low && (Ee.price.low = b)
                                        }
                            }
                        for (l = 0; l < Ee.slots[s].u.length; l++)
                            if (Ee.slots[s].u[l].hasOwnProperty("i")) {
                                "ema" == Ee.slots[s].u[l].t && Ee.slots[s].u[l].s && Ee.slots[s].u[l].i.paramUpdate(0, Ee.slots[s].u[l].s[0]), Ee.slots[s].u[l].i.update(Ee.bars.data, c[0], c[1]);
                                var m = Ee.slots[s].u[l].i.draw();
                                if (m)
                                    for (var v = 0; v < m.length; v++)
                                        for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) {
                                            var b = h[g];
                                            b > Ee.price.high && (Ee.price.high = b), b < Ee.price.low && (Ee.price.low = b)
                                        }
                            }
                    } else Ee.slots[s].i.update(Ee.bars.data, c[0], c[1]);
                var y = Ee.slots[0].h,
                    x = 40 * (Ee.price.high - Ee.price.low) / (y - 40),
                    w = void 0 === Data.qouteFixed ? 1e-5 : Math.pow(.1, Data.qouteFixed - 2);
                x > w ? (Ee.price.high += 3 * x / 4, Ee.price.low -= x / 4) : (Ee.price.high = 1.01 * Ee.price.high, Ee.price.low = Ee.price.low / 1.01);
                Ee.price.low < 0 && (Ee.price.low = 0);
                Ee.price.range = Ee.price.high - Ee.price.low, Ee.flags.recompute = !1, Ee.flags.redraw.base = !0, Ee.flags.redraw.main = !0, Ee.flags.redraw.underlay = !0, Ee.flags.redraw.overlay = !0, Ee.flags.redraw.inds = !0
            }(), Ee.flags.redraw.base && (e.clearRect(0, 0, Ee.w, Ee.h), function(e, t) {
                void 0 === t && (t = !1);
                var n, r;
                for (e.fillStyle = Ee.colors.fill.bg, r = Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick, Q(e, r, 0, Ee.px.lbl.w + Ee.px.lbl.tick, Ee.h), Q(e, 0, 0, Ee.offset, Ee.h), n = 0; n < Ee.slots.length; n++) n < Ee.slots.length - 1 ? Q(e, 0, Ee.slots[n].px + Ee.slots[n].h + 2, r, Ee.px.pad) : Q(e, 0, Ee.slots[n].px + Ee.slots[n].h + 2, r, Ee.px.lbl.h);
                for (function(e) {
                        Ee.w;
                        var t, n, r, i, o, a, s, l, c, u = $e(),
                            f = Settings.localTime,
                            d = [];
                        if (q(e, !0), e.strokeStyle = Ee.colors.stroke.grid, e.lineWidth = 1, a = e.measureText("00:00").width, s = e.measureText("12/30").width, e.measureText("Jan").width, l = 1.25 * a, (c = 2 * Math.ceil(l / (Ee.px.bar.width + Ee.px.bar.spacing))) <= 0 && (c = 1), e.beginPath(), u < 14400) {
                            for (r = 0;; r++)
                                if (!((o = oe(r)) < 0)) {
                                    if (o >= Ee.bars.data.length) break;
                                    if (w = Ee.bars.data[o][0], j(w, f)) {
                                        if (d.push(r), 1 == B(w, f) ? 1 == M(w, f) ? U(e, I(w, f), r) : U(e, L(w, f), r) : U(e, F(w, !1, f), r), Ee.settings.grid)
                                            for (i = 0; i < Ee.slots.length; i++);
                                        if (r > Ee.bars.visible) break;
                                        r += c - 1
                                    }
                                }
                            if (0 == d.length && d.push(ae(Ee.bars.data.length - 1)), e.stroke(), e.beginPath(), q(e, !1), e.strokeStyle = Ee.colors.stroke.grid, Ee.bars.fixTime) {
                                var p = new Date,
                                    h = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + Ee.bars.startTime1),
                                    g = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + Ee.bars.endTime1),
                                    m = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + Ee.bars.startTime2),
                                    v = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + Ee.bars.endTime2),
                                    b = g.getTime() - h.getTime();
                                b /= 6e4;
                                var y = g.getTime() - h.getTime() + v.getTime() - m.getTime();
                                y /= 6e4;
                                var x = Math.ceil(y / Ee.w * 17),
                                    w = (Math.ceil(y / Ee.w * Ee.offset), v.getTime());
                                for (t = R(w, !1, f), U(e, t, x + Math.ceil(y / Ee.w * 2)), w = (v.getTime() + m.getTime()) / 2, t = R(w, !1, f), U(e, t, 60), w = g.getTime(), t = R(w, !1, f), U(e, t, 120), w = (g.getTime() + h.getTime()) / 2, t = R(w, !1, f), U(e, t, 180), w = h.getTime(), t = R(w, !1, f), U(e, t, 240 - x), Ee.mode.display != Ee.CANDLE && function(e) {
                                        for (var t = 1; t <= 5; t++) N(e, Z(t * (Ee.price.high - Ee.price.low) / 6 + Ee.price.low, 0), Ee.DOTTED)
                                    }(e), i = 0; i < Ee.slots.length; i++) C(e, i, 0, Ee.DOTTED);
                                for (i = 0; i < Ee.slots.length; i++) C(e, i, y / 4, Ee.DOTTED);
                                for (i = 0; i < Ee.slots.length; i++) C(e, i, b + 1, Ee.DOTTED);
                                for (i = 0; i < Ee.slots.length; i++) C(e, i, y + 1, Ee.DOTTED);
                                for (i = 0; i < Ee.slots.length; i++) C(e, i, 3 * y / 4 + 1, Ee.DOTTED)
                            } else
                                for (n = d.length - 1; n >= 0; n--)
                                    for (r = d[n] - c;; r -= c)
                                        if (!(r > Ee.bars.visible)) {
                                            if (0 == n && r < 0) break;
                                            if ((o = oe(r)) < 0) break;
                                            if (!(o >= Ee.bars.data.length)) {
                                                if (Ee.settings.grid)
                                                    for (i = 0; i < Ee.slots.length; i++);
                                                if (r <= d[n - 1]) break;
                                                if (n > 0 && ee(r) + a / 2 >= ee(d[n - 1]) - s / 2) break;
                                                w = Ee.bars.data[o][0], t = R(w, !1, f), U(e, t, r)
                                            }
                                        }
                            e.stroke()
                        } else if (u < 86400) {
                            var $ = -1,
                                k = -1;
                            for (r = 0;; r++)
                                if (!((o = oe(r)) < 0)) {
                                    if (o >= Ee.bars.data.length - 1) break;
                                    if (w = Ee.bars.data[o][0], k = B(w, f), $ = B(Ee.bars.data[o + 1][0], f), u > 86400 && M(w, f) != M(Ee.bars.data[o + 1][0], f) || $ > 1 && 1 == k) {
                                        if (d.push(r), 1 == M(w, f) ? U(e, I(w, f), r) : U(e, L(w, f), r), Ee.settings.grid)
                                            for (i = 0; i < Ee.slots.length; i++);
                                        if (d[d.length - 1] > Ee.bars.visible) break;
                                        r += c - 1
                                    }
                                }
                            for (d.push(ae(Ee.bars.data.length - 1)), e.stroke(), e.beginPath(), q(e, !1), e.strokeStyle = Ee.colors.stroke.grid, n = d.length - 1; n >= 0; n--)
                                for (r = d[n] - c;; r -= c)
                                    if (!(r > Ee.bars.visible)) {
                                        if (0 == n && r < 0) break;
                                        if ((o = oe(r)) < 0) break;
                                        if (!(o >= Ee.bars.data.length)) {
                                            if (Ee.settings.grid)
                                                for (i = 0; i < Ee.slots.length; i++);
                                            if (r <= d[n - 1]) break;
                                            if (n > 0 && ee(r) + a / 2 >= ee(d[n - 1]) - s / 2) break;
                                            w = Ee.bars.data[o][0], t = j(w, f) ? u < 86400 ? B(w, f) : F(w, !1, f) : R(w, !1, f), U(e, t, r)
                                        }
                                    }
                            e.stroke()
                        } else if (u < 2592e3) {
                            var $ = -1,
                                k = -1;
                            for (r = 0;; r++)
                                if (!((o = oe(r)) < 0)) {
                                    if (o >= Ee.bars.data.length - 1) break;
                                    if (w = Ee.bars.data[o][0], k = B(w, f), $ = B(Ee.bars.data[o + 1][0], f), u > 86400 && M(w, f) != M(Ee.bars.data[o + 1][0], f) || $ > 1 && 1 == k) {
                                        if (d.push(r), 1 == M(w, f) ? U(e, I(w, f), r) : U(e, L(w, f), r), Ee.settings.grid)
                                            for (i = 0; i < Ee.slots.length; i++);
                                        if (d[d.length - 1] > Ee.bars.visible) break;
                                        r += c - 1
                                    }
                                }
                            for (d.push(ae(Ee.bars.data.length - 1)), e.stroke(), e.beginPath(), q(e, !1), e.strokeStyle = Ee.colors.stroke.grid, n = d.length - 1; n >= 0; n--)
                                for (r = d[n] - c;; r -= c)
                                    if (!(r > Ee.bars.visible)) {
                                        if (0 == n && r < 0) break;
                                        if ((o = oe(r)) < 0) break;
                                        if (!(o >= Ee.bars.data.length)) {
                                            if (Ee.settings.grid)
                                                for (i = 0; i < Ee.slots.length; i++);
                                            if (r <= d[n - 1]) break;
                                            if (n > 0 && ee(r) + a / 2 >= ee(d[n - 1]) - s / 2) break;
                                            w = Ee.bars.data[o][0], t = u < 86400 ? B(w, f) : F(w, !1, f), U(e, t, r)
                                        }
                                    }
                            e.stroke()
                        }
                    }(e), e.textAlign = "left", e.textBaseline = "middle", e.font = Ee.font.labels, e.fillStyle = Ee.colors.fill.label, n = 0; n < Ee.slots.length; n++) Ee.slots[n].hasOwnProperty("main") ? (e.strokeStyle = Ee.colors.stroke.border, e.beginPath(), x(e, n), e.stroke()) : function(e, t) {
                        var n, r, i = Ee.slots[t].i.statics(),
                            o = !0,
                            a = Ee.slots[t].i.bounds();
                        if (e.lineWidth = 1, i.hasOwnProperty("minor")) {
                            for (e.strokeStyle = Ee.colors.stroke.minorlevel, e.fillStyle = Ee.colors.fill.label, e.beginPath(), n = 0; n < i.minor.length; n++)(r = i.minor[n]) < a[0] || r > a[1] || (A(e, t, r, Ee.DASHDOT), V(e, t, r, Y(r)));
                            for (e.stroke(), e.strokeStyle = Ee.colors.stroke.border, e.beginPath(), n = 0; n < i.minor.length; n++)(r = i.minor[n]) < a[0] || r > a[1] || V(e, t, r, Y(r));
                            e.stroke(), o = !1
                        }
                        if (i.hasOwnProperty("major")) {
                            for (e.strokeStyle = Ee.colors.stroke.majorlevel, e.fillStyle = Ee.colors.fill.label, e.beginPath(), n = 0; n < i.major.length; n++)(r = i.major[n]) < a[0] || r > a[1] || (A(e, t, r, Ee.SOLID), V(e, t, r, Y(r)));
                            for (e.stroke(), e.strokeStyle = Ee.colors.stroke.border, e.beginPath(), n = 0; n < i.major.length; n++)(r = i.major[n]) < a[0] || r > a[1] || V(e, t, r, Y(r));
                            e.stroke(), o = !1
                        }
                        o && (e.strokeStyle = Ee.colors.stroke.border, e.beginPath(), x(e, t), e.stroke())
                    }(e, n),
                    function(e, t) {
                        e.lineWidth = mobile ? 2 : 1, e.strokeStyle = Ee.colors.stroke.border;
                        var n = Ee.offset - 1,
                            r = Ee.slots[t].px - 1,
                            i = Ee.w - Ee.px.lbl.w - Ee.offset - Ee.px.lbl.tick,
                            o = Ee.slots[t].h + 2;
                        J(e, n <= 0 ? 0 : n, r <= 0 ? 0 : r, i - (n <= 0 ? -n : 0), o - (r <= 0 ? -r : 0))
                    }(e, n)
            }(e), Ee.flags.redraw.base = !1, Ee.settings.userorders ? m(t) : t.clearRect(0, 0, Ee.w, Ee.h));
            var o, a;
            for ((Ee.flags.redraw.inds || Ee.flags.redraw.overlay) && (i.clearRect(0, 0, Ee.w, Ee.h), Ee.flags.redraw.inds = !0, Ee.flags.redraw.overlay = !0), Ee.flags.redraw.underlay && n.clearRect(0, 0, Ee.w, Ee.h), o = 0; o < Ee.slots.length; o++)
                if (Ee.slots[o].hasOwnProperty("main")) {
                    if (Ee.flags.redraw.main && (r.clearRect(0, 0, Ee.w, Ee.h), function(e, t) {
                            if (void 0 === Ee.bars.data || 0 == Ee.bars.data.length) return;
                            Ee.settings.bidask && function(e, t) {
                                if (isNaN(Ee.price.bid) && isNaN(Ee.price.ask)) return;
                                var n = Ee.price.bid,
                                    r = Ee.price.ask;
                                e.textBaseline = "middle", e.textAlign = "left", e.font = Ee.font.labels, e.fillStyle = Ee.colors.fill.flags, e.strokeStyle = Ee.colors.stroke.ask, e.beginPath(), A(e, t, r, Ee.SOLID), e.stroke(), W(e, t, r, Y(r)), e.fillStyle = Ee.colors.fill.flags, e.strokeStyle = Ee.colors.stroke.bid, e.beginPath(), A(e, t, n, Ee.SOLID), e.stroke(), W(e, t, n, Y(n))
                            }(e, t);
                            switch (Ee.mode.display) {
                                case Ee.CANDLE:
                                case Ee.OHLC:
                                case Ee.HLC:
                                    ! function(e, t, n, r) {
                                        var i, o, a, s, l = ie(),
                                            c = null,
                                            u = [],
                                            f = [];
                                        i = n.length - 1 > l[1] ? n[l[1] + 1] : n[l[1]];
                                        switch (r) {
                                            case Ee.CANDLE:
                                                c = function(e, t, n, r, i) {
                                                    var o = Z(r[1], t),
                                                        a = Z(r[2], t),
                                                        s = Z(r[3], t),
                                                        l = Z(r[4], t),
                                                        c = Math.min(o, l),
                                                        u = ee(n);
                                                    i ? 1 == mobile && Q(e, u - Ee.px.bar.dx + 1, c, Ee.px.bar.width - 2, Math.abs(l - o)) : Ee.colors.stroke.fillUp && Q(e, u - Ee.px.bar.dx + 1, Math.min(o, l), Ee.px.bar.width - 2, Math.abs(o - l));
                                                    J(e, u - Ee.px.bar.dx, Math.min(o, l), Ee.px.bar.width - 1, Math.abs(o - l)), a < Math.min(o, l) && (X(e, u, a), K(e, u, Math.min(o, l) - 1));
                                                    s > Math.max(o, l) && (X(e, u, s), K(e, u, Math.max(o, l)));
                                                    i && Q(e, u - Ee.px.bar.dx, c, Ee.px.bar.width - 1, Math.abs(l - o))
                                                };
                                                break;
                                            case Ee.OHLC:
                                                c = function(e, t, n, r) {
                                                    var i = Z(r[1], t),
                                                        o = Z(r[2], t),
                                                        a = Z(r[3], t),
                                                        s = Z(r[4], t),
                                                        l = ee(n);
                                                    X(e, l - Ee.px.bar.dx, i), K(e, l, i), X(e, l, s), e.lineTo(.6 + (l + Ee.px.bar.dx | 0), .5 + (0 | s)), X(e, l, o), K(e, l, a)
                                                };
                                                break;
                                            case Ee.HLC:
                                                c = function(e, t, n, r) {
                                                    var i = Z(r[2], t),
                                                        o = Z(r[3], t),
                                                        a = Z(r[4], t),
                                                        s = ee(n);
                                                    X(e, s, a), e.lineTo(.6 + (s + Ee.px.bar.dx | 0), .5 + (0 | a)), X(e, s, i), K(e, s, o)
                                                };
                                                break;
                                            default:
                                                return
                                        }
                                        var d, p, h = 0,
                                            g = 1e5;
                                        for (o = l[1]; o >= l[0]; o--) n[o][4] >= n[o][1] ? n[o][1] == n[o][4] && n[o + 1] && n[o + 1][4] > n[o][1] ? f.push([o, ae(o)]) : u.push([o, ae(o)]) : f.push([o, ae(o)]), i = n[o], n[o][2] >= h && (h = n[o][2], d = o), n[o][3] <= g && (g = n[o][3], p = o);
                                        for (e.strokeStyle = Ee.colors.stroke.down, e.fillStyle = Ee.colors.fill.down, e.beginPath(), o = 0; o < f.length; o++)(a = n[f[o][0]].slice())[5] /= BTC_INT, c(e, t, f[o][1], a, !0);
                                        for (e.stroke(), e.strokeStyle = Ee.colors.stroke.up, e.fillStyle = Ee.colors.fill.up, e.beginPath(), o = 0; o < u.length; o++)(a = deepCopy(n[u[o][0]]))[5] /= BTC_INT, c(e, t, u[o][1], a, !1);
                                        e.stroke(), s = i[4], n.length >= 2 && n[1][4] > n[0][4] && (e.strokeStyle = Ee.colors.stroke.down);
                                        if (e.fillStyle = Ee.colors.fill.flags, e.textBaseline = "middle", e.font = Ee.font.labels, W(e, t, s, Y(s)), r == Ee.CANDLE) {
                                            e.textBaseline = "middle", e.fillStyle = Ee.colors.stroke.arrow;
                                            var m = Z(h, t),
                                                v = ee(ae(d)),
                                                b = Z(g, t),
                                                y = ee(ae(p)),
                                                x = e.measureText(Y(h)).width + 19,
                                                w = e.measureText(Y(g)).width + 21;
                                            v - x > 0 ? (ue(e, 0, 0, v - 15, m, v - 2, m), e.fillText(Y(h), v - x, m)) : (ue(e, 0, 0, v + 15, m, v + 2, m), e.fillText(Y(h), v + 19, m)), y - w > 0 ? (ue(e, 0, 0, y - 15, b, y - 2, b), e.fillText(Y(g), y - x, b)) : (ue(e, 0, 0, y + 15, b, y + 2, b), e.fillText(Y(g), y + 19, b))
                                        }
                                    }(e, t, Ee.bars.data, Ee.mode.display);
                                    break;
                                case Ee.LINE:
                                case Ee.MOUNTAIN:
                                    k(e, t, Ee.bars.data, Ee.mode.display == Ee.MOUNTAIN, !0, !0)
                            }
                        }(r, o), Ee.flags.redraw.main = !1), Ee.flags.redraw.underlay) {
                        for (g(n, o), a = 0; a < Ee.slots[o].u.length; a++) y(n, o, Ee.slots[o].u[a].i);
                        Ee.flags.redraw.underlay = !1
                    }
                    if (Ee.flags.redraw.overlay) {
                        for (g(i, o), a = 0; a < Ee.slots[o].o.length; a++) y(i, o, Ee.slots[o].o[a].i);
                        Ee.flags.redraw.overlay = !1
                    }
                } else(Ee.flags.redraw.inds || "vol" == Ee.slots[o].t) && (g(i, o), y(i, o, Ee.slots[o].i));
            Ee.flags.redraw.inds = !1, Ee.notClicked || 1 == mobile || (i.strokeStyle = "#f9ee30", i.strokeRect(0, 0, Ee.w, Ee.h))
        }

        function h() {
            var e = $e(),
                t = 0;
            if (Ee.bars.data = [], Data.data.bars[e])
                if (1 == Ee.bars.fixTime)
                    for (t = 0; t < Data.data.bars[e].length; t++) Ee.bars.data.push(Data.data.bars[e][t]);
                else Ee.bars.data = Data.data.bars[e];
            void 0 === Ee.bars.data && (DEBUG && Ae("No data for " + e), Ee.bars.data = []), Ee.flags.recompute = !0, p()
        }

        function g(e, t) {
            e.clearRect(0, Ee.slots[t].px - Ee.px.pad, Ee.w, Ee.slots[t].h + 2 * Ee.px.pad)
        }

        function m(e) {
            void 0 === e && (e = Ee.canvas.orders[0].getContext("2d"));
            for (var t = -1, n = 0; n < Ee.slots.length; n++)
                if (Ee.slots[n].hasOwnProperty("main")) {
                    t = n;
                    break
                }
            if (-1 != t) {
                try {
                    e.clearRect(0, 0, Ee.w, Ee.h)
                } catch (e) {
                    return
                }
                if (Ee.settings.userorders) {
                    var r = UserAccount.orders(),
                        i = "",
                        o = "",
                        a = {},
                        s = [],
                        l = [],
                        c = [],
                        u = [],
                        n = 0,
                        f = 0;
                    for (i in r)
                        if (r.hasOwnProperty(i) && i == RTBTC.exchange())
                            for (o in r[i]) r[i].hasOwnProperty(o) && ((a = r[i][o]).exch = i, a.hasOwnProperty("base") && a.base == RTBTC.base() && a.hasOwnProperty("quote") && a.quote == RTBTC.quote() && ((f = Z(a.price, t)) < Ee.slots[t].px || f > Ee.slots[t].px + Ee.slots[t].h || ("buy" == a.action ? (s.push(a), c.push(v(a))) : "sell" == a.action && (l.push(a), u.push(v(a))))));
                    if (s.length + l.length > 0 && (e.textAlign = "left", e.font = Ee.font.indicators), s.length > 0) {
                        for (e.strokeStyle = Ee.colors.stroke.bid, e.fillStyle = Ee.colors.stroke.bid, e.textBaseline = "top", e.beginPath(), n = 0; n < s.length; n++) A(e, t, s[n].price, Ee.DASHDOT), (f = Z(s[n].price, t) + 1) > Ee.slots[t].px + Ee.slots[t].h - 10 || e.fillText(c[n], 2, f);
                        for (e.stroke(), e.font = Ee.font.labels, e.textBaseline = "middle", n = 0; n < s.length; n++) e.fillStyle = Ee.colors.fill.flags, W(e, t, s[n].price, Y(s[n].price))
                    }
                    if (l.length > 0) {
                        for (e.strokeStyle = Ee.colors.stroke.ask, e.fillStyle = Ee.colors.stroke.ask, e.textBaseline = "top", e.font = Ee.font.indicators, e.beginPath(), n = 0; n < l.length; n++) A(e, t, l[n].price, Ee.DASHDOT), f = Z(l[n].price, t) + 1, e.fillText(u[n], 2, f);
                        for (e.stroke(), e.font = Ee.font.labels, e.textBaseline = "middle", n = 0; n < l.length; n++) e.fillStyle = Ee.colors.fill.flags, W(e, t, l[n].price, Y(l[n].price))
                    }
                }
            }
        }

        function v(e) {
            var t = "";
            return "buy" == e.action ? t += _("BUY") : "sell" == e.action ? t += _("SELL") : t += "UNKNOWN ACTION", t += " ", t += parseFloat(e.amount).toFixed(Exchanges.cur_prec(e.exch, e.base))
        }

        function b(e, t, n) {
            var r = null,
                i = Ee.colors.stroke.i,
                o = null;
            return Ee.slots[e].hasOwnProperty("main") && void 0 !== n && (o = Ee.slots[e][n][t].i), null != o && (r = o.color()), null === r && (void 0 !== t ? r = i[t % i.length] : (r = i[Ee.lastColorIndex % i.length], Ee.lastColorIndex++)), r
        }

        function y(e, t, n, r) {
            if (void 0 !== n) {
                var i, o = n.draw(),
                    a = null,
                    s = Ee.slots[t].hasOwnProperty("main");
                for (i = 0; i < o.length; i++) switch (a = null, o[i].type) {
                    case Ee.CANDLE:
                    case Ee.OHLC:
                    case Ee.HLC:
                        break;
                    case Ee.LINE:
                        s && (a = n.color()), null == a && (a = b(t, i)), e.strokeStyle = a, e.beginPath(), k(e, t, o[i].data, !1, !1), e.stroke();
                        break;
                    case Ee.MOUNTAIN:
                        k(e, t, o[i].data, !0, !1);
                        break;
                    case Ee.BANDS:
                        break;
                    case Ee.PSAR:
                        s && (a = n.color()), null == a && (a = b(t, i)), e.strokeStyle = a, e.beginPath(),
                            function(e, t, n) {
                                if (!(n.hasOwnProperty("length") && n.length > 0)) return;
                                var r, i, o, a, s = ie(),
                                    l = Ee.slots[t].px + 3,
                                    c = l + Ee.slots[t].h - 3;
                                for (r = 0; r <= s[1] - s[0]; r++) i = ae(r + s[0]), o = ee(i), (a = Z(n[r], t)) < l || a > c || J(e, o - 1, a - 1, 2, 2)
                            }(e, t, o[i].data), e.stroke();
                        break;
                    case Ee.HIST:
                        T(e, t, o[i].data, !0);
                        break;
                    case Ee.LBLHIST:
                        T(e, t, o[i].data, !1)
                }
            }
        }

        function x(e, t) {
            var n, r, i, o, a, s, l, c, u, f, d, p, h, g, m = [],
                v = 0,
                b = 0,
                y = [5, 2.5, 2];
            if (Ee.slots[t].hasOwnProperty("main")) r = Ee.price.high, i = Ee.price.low;
            else {
                var x = Ee.slots[t].i.bounds();
                i = x[0], r = x[1]
            }
            if (!((n = r - i) < 0 || (o = ~~(Ee.slots[t].h / (4 * Ee.px.lbl.font)), (a = n / o) < 0))) {
                for (c = Math.log(a) / Math.LN10, s = Math.pow(10, c > 0 ? ~~c : Math.floor(c)), .5, v = 0; v < y.length; v++)(h = Math.log(a / s / (y[v] / 10)) / Math.LN10) > 1 && m.push([s * y[v], Math.abs(.5 - h), h]);
                for (0 == m.length && m.push([s, 0, 0]), l = 1e8, v = 0; v < m.length; v++) m[v][1] < l && (l = m[v][1], a = m[v][0]);
                if (u = ~~(r / a) * a, f = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w, d = Z(u, t), p = Z(i, t) - Ee.px.lbl.font / 2 | 0, 1 != t) {
                    if (Ee.slots[t].hasOwnProperty("main") && 0 != Ee.offset) {
                        e.textAlign = "right";
                        for (v = 0; v <= 6; v++) {
                            var w = Ee.price.low + v * (Ee.price.high - Ee.price.low) / 6,
                                $ = Z(w, t);
                            e.textBaseline = 6 == v ? "top" : 0 == v ? "bottom" : "middle", e.fillText((100 * (Ee.preClose ? w / Ee.preClose - 1 : 0)).toFixed(2) + "%", Ee.offset - 3, $, Ee.offset - 3)
                        }
                        e.textAlign = "start"
                    }
                    for (v = 0, 2; u >= i && d < p && v < 100;) {
                        for (d >= Ee.slots[t].px + Ee.px.lbl.font / 2 && (z(e, f, d, Y(u)), Ee.settings.grid && N(e, d, Ee.DASHED), b++), g = 0; g < 2; g++) ! function(e, t, n) {
                            var r = Z(n, t),
                                i = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w;
                            ! function(e, t, n) {
                                X(e, t, n), K(e, t + Ee.px.lbl.halftick, n)
                            }(e, i, r)
                        }(e, t, u - (g + 1) * a / 3);
                        d = Z(u -= a, t), v++
                    }
                    0 == b && z(e, f, d = Z(u = i + n / 2, t), Y(u))
                } else {
                    z(e, f, $ = Z(r, t), r.toFixed(2))
                }
            }
        }

        function k(e, t, n, r, i, o) {
            if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
                var a, s, l, c, u, f = ie();
                if (!r) {
                    if (l = ee(ae(f[1])), c = i ? Z(n[f[1]][4], t) : Z(n[f[1] - f[0]], t), i) {
                        var d, p = [],
                            h = {};
                        for ((d = []).push(f[1]), l = ee(ae(f[1])), c = Z(n[f[1]][4], t), h[f[1]] = [+l, +c], a = f[1] - 1; a >= f[0]; a--) l = ee(ae(a)), c = Z(n[a][4], t), n[a + 1][4] <= n[a][4] ? d.push(a) : p.push(a), h[a] = [+l, +c];
                        for (u = n.length + 2, e.lineWidth = 1, e.strokeStyle = Ee.colors.stroke.fenshi || Ee.colors.stroke.down, e.beginPath(), s = 0; s < p.length; s++)(a = p[s]) < u - 1 && h.hasOwnProperty(a + 1) && X(e, h[a + 1][0], h[a + 1][1]), K(e, h[a][0], h[a][1]), u = a;
                        for (e.stroke(), e.strokeStyle = Ee.colors.stroke.fenshi || Ee.colors.stroke.up, e.beginPath(), u = n.length + 2, a = 0; a < d.length; a++) d[a] < u - 1 && h.hasOwnProperty(d[a] + 1) && X(e, h[d[a] + 1][0], h[d[a] + 1][1]), K(e, h[d[a]][0], h[d[a]][1]), u = d[a];
                        e.stroke(), n.length > 1 ? e.strokeStyle = n[1][4] <= n[0][4] ? Ee.colors.stroke.up : Ee.colors.stroke.down : e.strokeStyle = d, u = n[0][4]
                    } else {
                        var g = !1;
                        for (X(e, l, c), a = f[1] - f[0]; a >= 0; a--) l = ee(ae(a + f[0])), (c = Z(n[a], t)) >= Ee.slots[t].px && c <= Ee.slots[t].px + Ee.slots[t].h ? g ? (g = !1, e.beginPath(), X(e, l, c)) : K(e, l, c) : g || (e.stroke(), g = !0);
                        u = n[0], e.stroke()
                    }
                    e.lineWidth = 1, e.fillStyle = Ee.colors.fill.flags, e.textBaseline = "middle", e.font = Ee.font.labels, o && W(e, t, u, Y(u))
                }
            }
        }

        function T(e, t, n, r) {
            if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
                var i, o, a = ie(),
                    s = [],
                    l = [];
                if (r)
                    for (i = 0; i <= a[1] - a[0]; i++) n[i] > 0 ? s.push([i, ae(i + a[0])]) : l.push([i, ae(i + a[0])]);
                else
                    for (i = 0; i <= a[1] - a[0]; i++) n && void 0 !== n[i] && (n[i][1] ? s.push([i, ae(i + a[0])]) : l.push([i, ae(i + a[0])]));
                for (e.strokeStyle = Ee.colors.stroke.down, e.fillStyle = Ee.colors.fill.down, e.beginPath(), i = 0; i < l.length; i++) S(e, t, l[i][1], r ? n[l[i][0]] : n[l[i][0]][0], !1);
                for (e.stroke(), e.strokeStyle = Ee.colors.stroke.up, e.fillStyle = Ee.colors.fill.up, e.beginPath(), i = 0; i < s.length; i++) S(e, t, s[i][1], r ? n[s[i][0]] : n[s[i][0]][0]);
                e.stroke(), r ? (o = n[0]) < 0 && (e.strokeStyle = Ee.colors.stroke.down) : (o = n[0][0], n[0][1] || (e.strokeStyle = Ee.colors.stroke.down)), e.lineWidth = 1, e.fillStyle = Ee.colors.fill.flags, e.textBaseline = "middle", e.font = Ee.font.labels, W(e, t, o, Y(o)), e.stroke()
            }
        }

        function S(e, t, n, r, i) {
            var o = Z(r, t),
                a = ee(n),
                s = Z(0, t),
                l = Math.abs(s - o),
                c = Math.min(o, s);
            o < Ee.slots[t].px ? o = Ee.slots[t].px : o > Ee.slots[t].px + Ee.slots[t].h && (o = Ee.slots[t].px + Ee.slots[t].h), J(e, a - Ee.px.bar.dx, c, Ee.px.bar.width - 1 <= 0 ? 0 : Ee.px.bar.width - 1, l), !1 === i ? Q(e, a - Ee.px.bar.dx + 1, c + 1, Ee.px.bar.width - 2 <= 0 ? 0 : Ee.px.bar.width - 2, l) : Ee.colors.stroke.fillUp && Q(e, a - Ee.px.bar.dx + 1, c + 1, Ee.px.bar.width - 2 <= 0 ? 0 : Ee.px.bar.width - 2, l)
        }

        function C(e, t, n, r) {
            E(e, t, ee(n), r)
        }

        function E(e, t, n, r) {
            var i, o = Ee.slots[t].px - 1,
                a = Ee.slots[t].px + Ee.slots[t].h;
            if (DEBUG && assert(a > o, "Invalid bounds on vertical line drawing. y0:" + o + ", y1:" + a), a > o && !(a < 0 || n < 0 || n > Ee.w || n > 25e3)) switch (X(e, n, o), i = o, r) {
                case Ee.DOTTED:
                    for (; i < a;) K(e, n, ++i), X(e, n, ++i);
                    break;
                case Ee.DASHED:
                    for (; i < a;) K(e, n, i = (i += 6) > a ? a : i), X(e, n, i += 2);
                    break;
                case Ee.DASHDOT:
                    for (; i < a && (i += 7, i = i > a ? a : i, K(e, n, i), !((i += 4) >= a));) X(e, n, i), K(e, n, i = (i += 2) > a ? a : i), X(e, n, i += 4);
                    break;
                case Ee.SOLID:
                default:
                    K(e, n, a)
            }
        }

        function A(e, t, n, r) {
            var i = Z(n, t);
            i < Ee.slots[t].px || i > Ee.slots[t].px + Ee.slots[t].h || N(e, i, r)
        }

        function N(e, t, n) {
            var r, i = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w - 1,
                o = Ee.offset;
            if (DEBUG && assert(i > o, "Invalid bounds on line drawing. x0: " + i + ", x1: " + o), i > o) switch (X(e, i, t), r = i, n) {
                case Ee.DOTTED:
                    for (; r > o + 1;) K(e, --r, t), X(e, --r, t);
                    break;
                case Ee.DASHED:
                    for (; r > o;) K(e, r = (r -= 6) < o ? o : r, t), X(e, r -= 2, t);
                    break;
                case Ee.DASHDOT:
                    for (; r > o && (r -= 7, r = r < o ? o : r, K(e, r, t), !((r -= 4) <= o));) X(e, r, t), K(e, r = (r -= 2) < o ? o : r, t), X(e, r -= 4, t);
                    break;
                case Ee.SOLID:
                default:
                    K(e, o, t)
            }
        }

        function P(e, t, n) {
            if (Ee.settings.crosshairs && !(e < Ee.offset)) {
                var r = Ee.canvas.i[0].getContext("2d"),
                    i = ne(e),
                    o = se(e, t);
                if (!(null == o || o < 0)) {
                    var a, s = re(o, t),
                        l = oe(i),
                        c = ee(i);
                    if (O(r), r.textBaseline = "middle", r.textAlign = "left", r.font = Ee.font.labels, r.lineWidth = 1, r.fillStyle = Ee.colors.fill.crosshair, r.strokeStyle = Ee.colors.stroke.crosshair, r.beginPath(), Ee.showMainCrosshairs)
                        for (Ee.crossHairH && N(r, t, Ee.SOLID), a = 0; a < Ee.slots.length; a++) E(r, a, c, Ee.SOLID);
                    if (r.stroke(), r.fillStyle = Ee.colors.fill.crosshair, Ee.crossHairH && (n && (s = Ee.bars.data[l] && Ee.bars.data[l][4] || 0), function(e, t, n, r) {
                            var i, o = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w - 3;
                            i = Ee.slots[t].px + 1 + Math.ceil(Ee.px.lbl.font / 2), n < i ? n = i : (i = Ee.slots[t].px + Ee.slots[t].h - Math.ceil(Ee.px.lbl.font / 2), n > i && (n = i));
                            G(e, o, n, r)
                        }(r, o, t, Y(s))), mobile && Ee.updateXFK && Ee.updateXFK(!0), l >= 0 && l < Ee.bars.data.length) {
                        q(r, !0);
                        var u = D(Ee.bars.data[l][0], !1, Settings.localTime),
                            f = r.measureText(u).width,
                            d = r.fillStyle,
                            p = r.strokeStyle;
                        r.fillStyle = Ee.colors.fill.crosshair, r.strokeStyle = Ee.colors.stroke.crosshair,
                            function(e, t, n) {
                                var r = ee(t),
                                    i = 0 | H(r, n + 10),
                                    o = n / 2 + 5 | 0,
                                    a = H(r, 7);
                                e.beginPath(), X(e, i - o, Ee.h - 1), K(e, i + o, Ee.h - 1), K(e, i + o, Ee.h - Ee.px.lbl.h), K(e, a + 3.5, Ee.h - Ee.px.lbl.h), K(e, a, Ee.h - Ee.px.lbl.h - 4), K(e, a - 3.5, Ee.h - Ee.px.lbl.h), K(e, i - o, Ee.h - Ee.px.lbl.h), K(e, i - o, Ee.h - 1), e.fill(), e.stroke()
                            }(r, i, 0 | f), r.fillStyle = d, r.strokeStyle = p,
                            function(e, t, n) {
                                var r = Ee.h - (Ee.px.lbl.h - Ee.px.lbl.font) / 2;
                                e.fillText(t, n, r)
                            }(r, u, H(ee(i), f + 10)),
                            function(e) {
                                var t, n, r, i, o, a = Ee.canvas.lbl[0].getContext("2d"),
                                    s = ~~(1.25 * Ee.px.lbl.font),
                                    l = ie(),
                                    c = oe(0),
                                    u = oe(e),
                                    f = (Ee.colors.stroke.i, Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w - 2);
                                l[0], l[1], c < 0 && (e += c), e < 0 && (e = -1), a.strokeStyle = Ee.colors.fill.blankBG, a.lineWidth = 1.5, a.fillStyle = Ee.colors.fill.slottext, a.textBaseline = "top", a.font = Ee.font.indicators;
                                var d = 3 + Ee.offset,
                                    p = 3 + Ee.offset;
                                for (a.clearRect(0, 0, Ee.w, Ee.h), t = 0; t < Ee.slots.length; t++)
                                    if (Ee.slots[t].hasOwnProperty("main")) {
                                        if (i = function(e) {
                                                if (Ee.curIndex = e, function(e) {
                                                        if (Ee.mode.display != Ee.CANDLE) {
                                                            var t;
                                                            (t = e < 0 || e > Ee.bars.data.length ? [(new Date).getTime(), 0, 0, 0, 0, 0] : Ee.bars.data[e]) && ($("#time").text(new Date(t[0]).Format("hh:mm")), $("#price").text(t[4].toFixed(6)), $("#volume").text(t[5].toFixed(0)), $("#updown").text((0 == t[4] ? 0 : t[4] - Ee.preClose).toFixed(6)), $("#price").css("color", t[4] >= Ee.preClose ? "red" : "green"), $("#updown").css("color", t[4] >= Ee.preClose ? "red" : "green"))
                                                        }
                                                    }(e), e < 0 || e >= Ee.bars.data.length) return "";
                                                if (0 != se(Ee.mouse.x, Ee.mouse.y) && 1 != se(Ee.mouse.x, Ee.mouse.y) && 2 != se(Ee.mouse.x, Ee.mouse.y) && 3 != se(Ee.mouse.x, Ee.mouse.y) || (Ee.curIndex = e, mobile && Ee.updateXFK && Ee.updateXFK(!1)), void 0 === Ee.bars.data[e]) return "";
                                                var t = Ee.bars.data[e][0],
                                                    n = Ee.bars.data[e][1],
                                                    r = Ee.bars.data[e][2],
                                                    i = Ee.bars.data[e][3],
                                                    o = Ee.bars.data[e][4],
                                                    a = (Ee.bars.data[e][5], []),
                                                    s = Ee.bars.data[e + 1];
                                                return a = [D(t, !1, Settings.localTime), "  ", " O:", Y(n), " H:", Y(r), " L:", Y(i), " C:", Y(o), " CHANGE:", (s ? 100 * (o - s[4]) / s[4] : 0).toFixed(2) + "%", " AMPLITUDE:", (s ? 100 * (r - i) / s[4] : 0).toFixed(2) + "%"], "cn" == localStorage.lang && (a = [D(t, !1, Settings.localTime), "  ", " 开:", Y(n), " 高:", Y(r), " 低:", Y(i), " 收:", Y(o), " 涨幅:", (s ? 100 * (o - s[4]) / s[4] : 0).toFixed(2) + "%", " 振幅:", (s ? 100 * (r - i) / s[4] : 0).toFixed(2) + "%"]), mobile ? "" : a.join("")
                                            }(u), r = Ee.slots[t].px + 1, a.strokeText(i, p, r, f), a.fillText(i, p, r, f), p = 6 + Ee.offset + a.measureText(i).width, 1 == Ee.colors.stroke.priceShow) {
                                            var h = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w,
                                                g = Ee.canvas.base[0].getContext("2d"),
                                                m = h - g.measureText(Y(Ee.price.high)).width - 3,
                                                p = h - g.measureText(Y(Ee.price.low)).width - 3;
                                            a.clearRect(m, r, f, 13), a.strokeText(Y(Ee.price.high), m, r, f), a.fillText(Y(Ee.price.high), m, r, f);
                                            var v = Ee.slots[t].h - 14;
                                            a.strokeText(Y(Ee.price.low), p, v, f), a.fillText(Y(Ee.price.low), p, v, f)
                                        }
                                        for (n = 0; n < Ee.slots[t].u.length; n++)
                                            if ((o = Ee.slots[t].u[n].i).hasOwnProperty("label")) {
                                                if (r + s > Ee.slots[t].px + Ee.slots[t].h) break;
                                                1 != mobile ? (i = o.label(e), a.fillStyle = b(t, n, "u"), p + a.measureText(i).width + 2 > f && (r += s, p = 2), a.fillText(i, p, r, f), p += a.measureText(i).width + 2) : (i = o.label(e), a.fillStyle = b(t, n, "u"), a.fillText(i, d, r, f), r += s)
                                            }
                                        for (n = 0; n < Ee.slots[t].o.length; n++)
                                            if ((o = Ee.slots[t].o[n].i).hasOwnProperty("label")) {
                                                if ((r += s) + s > Ee.slots[t].px + Ee.slots[t].h) break;
                                                1 != mobile ? (i = o.label(e), a.fillStyle = b(t, n, "o"), p + a.measureText(i).width + 2 > f && (r += s, p = 2), a.fillText(i, p, 0, f), p += a.measureText(i).width + 2) : (i = o.label(e), a.fillStyle = b(t, n, "o"), a.fillText(i, d, r, f))
                                            }
                                        a.fillStyle = Ee.colors.fill.flagtext
                                    } else {
                                        if (!(o = Ee.slots[t].i).hasOwnProperty("label")) continue;
                                        i = o.label(e), r = Ee.slots[t].px + 1, a.fillText(i, d, r, f)
                                    }
                            }(i)
                    }
                    Ee.px.crosshairs.x = c, Ee.px.crosshairs.y = t, Ee.mouse.bar = i
                }
            }
        }

        function O(e) {
            if (Ee.settings.crosshairs) {
                var t = e || Ee.canvas.i[0].getContext("2d");
                t.clearRect(0, Ee.px.crosshairs.y - 30, Ee.w, 60), t.clearRect(Ee.px.crosshairs.x - 30, 0, 60, Ee.h), t.clearRect(0, Ee.h - Ee.px.lbl.h - 4, Ee.w, Ee.px.lbl.h + 4), Ee.mouse.bar = null;
                Ee.canvas.lbl[0].getContext("2d").clearRect(0, 0, Ee.w, Ee.h)
            }
        }

        function D(e, t, n) {
            var r = new Date(e),
                i = "";
            return !0 === n ? (i = r.getFullYear() + "-", i += r.getMonth() + 1 < 10 ? "0" : "", i += r.getMonth() + 1 + "-", i += r.getDate() < 10 ? "0" : "", i += r.getDate() + " ", i += r.getHours() < 10 ? "0" : "", i += r.getHours() + ":", i += r.getMinutes() < 10 ? "0" : "", i += r.getMinutes(), t && (i += (r.getSeconds(), "0"), i += r.getSeconds())) : (i = r.getUTCFullYear() + "-", i += r.getUTCMonth() + 1 < 10 ? "0" : "", i += r.getUTCMonth() + 1 + "-", i += r.getUTCDate() < 10 ? "0" : "", i += r.getUTCDate() + " ", i += r.getUTCHours() < 10 ? "0" : "", i += r.getUTCHours() + ":", i += r.getUTCMinutes() < 10 ? "0" : "", i += r.getUTCMinutes(), t && (i += (r.getUTCSeconds(), "0"), i += r.getUTCSeconds())), i
        }

        function I(e, t) {
            var n = new Date(e);
            return !0 === t ? n.getFullYear() : n.getUTCFullYear()
        }

        function M(e, t) {
            var n = new Date(e);
            return !0 === t ? n.getMonth() + 1 : n.getUTCMonth() + 1
        }

        function L(e, t) {
            var n = new Date(e);
            return !0 === t ? De[n.getMonth()] : De[n.getUTCMonth()]
        }

        function F(e, t, n) {
            var r = new Date(e),
                i = "";
            return !0 === n ? (t && (i = r.getFullYear() + "/"), i += r.getMonth() + 1 + "/", i += r.getDate()) : (t && (i = r.getUTCFullYear() + "/"), i += r.getUTCMonth() + 1 + "/", i += r.getUTCDate()), i
        }

        function B(e, t) {
            var n = new Date(e),
                r = "";
            return r += !0 === t ? n.getDate() : n.getUTCDate()
        }

        function R(e, t, n) {
            var r = new Date(e),
                i = "";
            return !0 === n ? (i = r.getHours() + ":", i += r.getMinutes() < 10 ? "0" : "", i += r.getMinutes(), t && (i += ":" + (r.getSeconds() < 10 ? "0" : ""), i += r.getSeconds())) : (i = r.getUTCHours() + ":", i += r.getUTCMinutes() < 10 ? "0" : "", i += r.getUTCMinutes(), t && (i += ":" + (r.getUTCSeconds() < 10 ? "0" : ""), i += r.getUTCSeconds())), i
        }

        function j(e, t) {
            if (!0 === t) {
                var n = new Date(e);
                return 0 == n.getHours() && 0 == n.getMinutes() && 0 == n.getSeconds()
            }
            return e % 86400 == 0
        }

        function q(e, t) {
            e.textBaseline = "bottom", e.textAlign = "center";
            var n = Ee.font.size + "px/" + Ee.font.lineHeight + "em " + Ee.font.face;
            t ? (n += " bold", e.fillStyle = Ee.colors.stroke.crosshair) : e.fillStyle = Ee.colors.fill.label, e.font = n
        }

        function U(e, t, n) {
            var r = Ee.h - (Ee.px.lbl.h - Ee.px.lbl.font) / 2,
                i = ee(n);
            e.fillText(t, i, r)
        }

        function H(e, t) {
            return e > Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick - 1 - t / 2 ? Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick - 1 - t / 2 : e < t / 2 ? t / 2 : e
        }

        function V(e, t, n, r) {
            var i = Z(n, t);
            z(e, Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w, i, r)
        }

        function z(e, t, n, r) {
            X(e, t, n), K(e, t + Ee.px.lbl.tick, n), e.fillText(r, t + Ee.px.lbl.tick + 2, n, Ee.px.lbl.w)
        }

        function W(e, t, n, r) {
            if (1 != Ee.colors.stroke.opacity) {
                var i, o = Z(n, t),
                    a = Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w - 3;
                o < (i = Ee.slots[t].px + 1 + Math.ceil(Ee.px.lbl.font / 2)) ? o = i : o > (i = Ee.slots[t].px + Ee.slots[t].h - Math.ceil(Ee.px.lbl.font / 2)) && (o = i), G(e, a, o, r)
            }
        }

        function G(e, t, n, r) {
            var i, o, a = Ee.px.lbl.font / 2;
            e.beginPath(), X(e, t, n), K(e, i = t + ~~a, o = ~~(n - 1 - a)), i = t + Ee.px.lbl.w + Ee.px.lbl.tick + 1, e.lineTo(.6 + (0 | i), .5 + (0 | o)), X(e, i, o), K(e, i, o = Math.ceil(n + 1 + a)), K(e, i = t + ~~a, o), K(e, t, n), e.fill(), e.stroke(), e.fillStyle = Ee.colors.fill.flagtext, e.fillText(r, t + Ee.px.lbl.tick + 5, n + 1)
        }

        function Y(e) {
            return e.toFixed(Data.qouteFixed || 8)
        }

        function X(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function K(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function Q(e, t, n, r, i) {
            e.fillRect(0 | t, 0 | n, 0 | r, 0 | i)
        }

        function J(e, t, n, r, i) {
            e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | i)
        }

        function Z(e, t) {
            var n, r = null;
            if (Ee.slots[t].hasOwnProperty("main")) {
                if (r = [Ee.price.low, Ee.price.high], Ee.settings.logscale) return Ee.log.m * log10(e) + Ee.log.b;
                n = Ee.price.range
            } else r = Ee.slots[t].i.bounds(), n = Math.max(r[1] - r[0], 1e-8);
            var i = (r[1] - e) / n;
            return Ee.slots[t].px + Math.ceil(Ee.slots[t].h * i)
        }

        function ee(e) {
            var t = ie();
            return Ee.bars.visible > Ee.bars.data.length ? te(e) - te(t[1]) + (Ee.px.bar.width + 1) / 2 : te(e)
        }

        function te(e) {
            return Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick - 1 - (e + 1) * (Ee.px.bar.spacing + Ee.px.bar.width) + (Ee.px.bar.width + 1) / 2 | 0
        }

        function ne(e) {
            var t = ie();
            return Ee.bars.visible > Ee.bars.data.length ? t[1] - (e - (Ee.px.bar.spacing + Ee.px.bar.width) / 2) / (Ee.px.bar.spacing + Ee.px.bar.width) | 0 : function(e) {
                return (Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick - 1 - Ee.px.bar.spacing / 2 - e) / (Ee.px.bar.spacing + Ee.px.bar.width) | 0
            }(e)
        }

        function re(e, t) {
            var n = null;
            if (Ee.slots[e].hasOwnProperty("main")) {
                if (Ee.settings.logscale) return Math.pow(10, (t - Ee.log.b) / Ee.log.m);
                n = [Ee.price.low, Ee.price.high]
            } else n = Ee.slots[e].i.bounds();
            var r = Math.max(n[1] - n[0], 1e-8),
                i = (t - Ee.slots[e].px) / Ee.slots[e].h;
            return n[1] - i * r
        }

        function ie() {
            return void 0 === Ee.bars.data || 0 == Ee.bars.data.length ? [0, -1] : [Math.max(0, oe(0)), Math.min(Ee.bars.data.length - 1, oe(Ee.bars.visible))]
        }

        function oe(e) {
            return e + Ee.bars.offset - Ee.bars.blank
        }

        function ae(e) {
            return e - Ee.bars.offset + Ee.bars.blank
        }

        function se(e, t) {
            if (e >= Ee.w - Ee.px.lbl.w - Ee.px.lbl.tick - 1) return null;
            if (e < Ee.offset) return null;
            if (t >= Ee.h - Ee.px.lbl.h - 1) return null;
            if (t <= Ee.slots[0].px + Ee.slots[0].h) return 0;
            for (var n = 1; n < Ee.slots.length; n++) {
                if (t < Ee.slots[n].px) return -n;
                if (t <= Ee.slots[n].px + Ee.slots[n].h) return n
            }
        }

        function le(e, t) {
            return !(t < Ee.h - Ee.px.lbl.h) && (!(e > Ee.w - Ee.px.lbl.w) && !(e < Ee.offset))
        }

        function ce() {
            Ee.settings.crosshairs && window.reqAnimFrame(function() {
                O()
            })
        }

        function ue(e, t, n, r, i, o, a) {
            var s = new Array(r, i),
                l = new Array(o, a);
            e.fillStyle = Ee.colors.stroke.arrow, e.strokeStyle = Ee.colors.stroke.arrow, e.beginPath(), e.translate(t, n, 0), e.moveTo(s[0], s[1]), e.lineTo(l[0], l[1]), e.fill(), e.stroke(), e.save(), e.translate(l[0], l[1]);
            var c = (l[0] - s[0]) / (l[1] - s[1]);
            c = Math.atan(c), l[1] - s[1] >= 0 ? e.rotate(-c) : e.rotate(Math.PI - c), e.lineTo(-5, -10), e.lineTo(0, -5), e.lineTo(5, -10), e.lineTo(0, 0), e.fill(), e.restore(), e.closePath()
        }

        function fe() {
            Ee.canvas.i.on({
                mousedown: function(e) {
                    if (!Ee.stopEvent && !mobile) {
                        Ee.mouse.origOffset = Ee.bars.offset, Ee.mouse.origOffsetBlank = Ee.bars.blank, Ee.mouse.origSpacing = Ee.px.bar.spacing, pe(e), Ee.mouse.sx = Ee.mouse.x, Ee.mouse.sy = Ee.mouse.y, Pe = e.offsetX, Oe = e.offsetY;
                        var t = se(Ee.mouse.x, Ee.mouse.y);
                        if (null == t ? (le(Ee.mouse.x, Ee.mouse.y) ? (Ee.canvas.i.css("cursor", "e-resize"), Ee.mouse.zoom = !0, Ee.mouse.w0 = +Ee.px.bar.width) : Ee.canvas.i.css("cursor", "default"), ce()) : t < 0 ? (Ee.canvas.i.css("cursor", "n-resize"), Ee.mouse.resize = !0, Ee.mouse.re_slot = -t, Ee.mouse.re_slots.px0 = Ee.slots[Ee.mouse.re_slot - 1].px, Ee.mouse.re_slots.h0 = Ee.slots[Ee.mouse.re_slot - 1].h, Ee.mouse.re_slots.px1 = Ee.slots[Ee.mouse.re_slot].px, Ee.mouse.re_slots.h1 = Ee.slots[Ee.mouse.re_slot].h, ce()) : (Ee.mouse.down = !0, ce(), Ee.settings.crosshairs ? (Ee.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                                P(Ee.mouse.x, Ee.mouse.y)
                            })) : Ee.canvas.i.css("cursor", "crosshair")), Ee.settings.icontrols && t != Ee.mouse.slot) {
                            null != t && t >= 0 && $(".control-" + t, Ee.element).show();
                            var n, r;
                            for (n = 0; n < Ee.slots.length; n++) n != t && ((r = $(".control-" + n, Ee.element)).data("popped") || r.hide())
                        }
                        Ee.mouse.slot = t, me(e), e.preventDefault(), e.stopPropagation()
                    }
                },
                mouseup: function(e) {
                    if (!Ee.stopEvent && !mobile && (Ee.mouse.down = !1, Ee.mouse.resize = !1, Ee.mouse.zoom = !1, Math.abs(Pe - e.offsetX) < 1 && Math.abs(Oe - e.offsetY) < 1 && (Ee.notClicked = !Ee.notClicked, $(Ee.element).focus(), h()), me(e), le(Ee.mouse.x, Ee.mouse.y) ? Ee.canvas.i.css("cursor", "e-resize") : Ee.canvas.i.css("cursor", "none"), e.ctrlKey && e.shiftKey)) {
                        se(Ee.mouse.x, Ee.mouse.y) >= 0 && Ee.settings.crosshairs && (Ee.canvas.i.css("cursor", "none"), P(Ee.mouse.x, Ee.mouse.y)), Ce()
                    }
                },
                contextmenu: function(e) {
                    pe(e);
                    return se(Ee.mouse.x, Ee.mouse.y) >= 0 && Ee.settings.crosshairs && (Ee.canvas.i.css("cursor", "none"), P(Ee.mouse.x, Ee.mouse.y)), Ce(), e.stopPropagation(), e.preventDefault(), !1
                },
                mouseout: function(e) {
                    Ee.mouse.down = !1, Ee.mouse.resize = !1, Ee.mouse.zoom = !1, Ee.canvas.i.css("cursor", "none"), ce(), Ee.mouse.slot = -1
                },
                mousemove: function(e) {
                    if (!mobile && ((Ee.mouse.down || Ee.mouse.resize || Ee.mouse.zoom) && (Ee.flags.recompute = !0, me(e)), e.offsetY != Ie || e.offsetX != Me)) {
                        Ie = e.offsetY, Me = e.offsetX, pe(e);
                        var t = se(Ee.mouse.x, Ee.mouse.y);
                        Ee.canvas.i[0].getContext("2d");
                        if (null == t ? (le(Ee.mouse.x, Ee.mouse.y) ? Ee.canvas.i.css("cursor", "e-resize") : Ee.canvas.i.css("cursor", "default"), ce()) : t < 0 ? (Ee.canvas.i.css("cursor", "n-resize"), ce()) : Ee.settings.crosshairs ? (Ee.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                                P(Ee.mouse.x, Ee.mouse.y)
                            })) : Ee.canvas.i.css("cursor", "crosshair"), Ee.settings.icontrols && t != Ee.mouse.slot) {
                            null != t && t >= 0 && $(".control-" + t, Ee.element).show();
                            var n, r;
                            for (n = 0; n < Ee.slots.length; n++) n != t && ((r = $(".control-" + n, Ee.element)).data("popped") || r.hide())
                        }
                        Ee.mouse.slot = t, (Ee.mouse.down || Ee.mouse.resize || Ee.mouse.zoom) && (Ee.mouse.down || Ee.mouse.zoom ? $(Ee.canvas.i).css("cursor", "e-resize") : Ee.canvas.i.css("cursor", "n-resize"))
                    }
                },
                dblclick: function(e) {
                    Ee.stopEvent || (Ee.mode.display, Ee.CANDLE, Ee.mouse.down = !1)
                },
                touchstart: function(e) {
                    if (1 == e.originalEvent.touches.length && (timeOutEvent = setTimeout(function() {
                            Ne = !0, he(e), $(".chartDetail").show(), $("html,body", parent.document).addClass("hidden")
                        }, 300)), Ee.mouse.origOffset = Ee.bars.offset, Ee.mouse.origSpacing = Ee.px.bar.spacing, e.originalEvent.touches[0].clientX) Ee.mouse.sx = e.originalEvent.touches[0].clientX, Ee.mouse.sy = e.originalEvent.touches[0].clientY;
                    else if (e.originalEvent.touches[0].pageX) {
                        var t = Ee.canvas.i.offset();
                        Ee.mouse.sx = e.originalEvent.touches[0].pageX - t.left, Ee.mouse.sy = e.originalEvent.touches[0].pageY - t.top
                    }
                    Ee.startTouchCoords = [];
                    for (var n = 0; n < e.originalEvent.touches.length; ++n) Ee.startTouchCoords.push([e.originalEvent.touches[n].clientX, e.originalEvent.touches[n].clientY])
                },
                touchmove: function(e) {
                    var t, n;
                    if (e.originalEvent.touches[0].clientX) t = e.originalEvent.touches[0].clientX, n = e.originalEvent.touches[0].clientY;
                    else if (e.originalEvent.touches[0].pageX) {
                        var r = Ee.canvas.i.offset();
                        t = e.originalEvent.touches[0].pageX - r.left, n = e.originalEvent.touches[0].pageY - r.top
                    }(Math.abs(Ee.mouse.sx - t) > 6 || Math.abs(Ee.mouse.sy - n) > 6) && clearTimeout(timeOutEvent), 0 != Ne ? he(e) : function(e) {
                        if (Ee.bars.allowScale = !0, (new Date).getTime() - Ee.lastPinchTime < 1e3) return;
                        if (2 == e.originalEvent.touches.length && 2 == Ee.startTouchCoords.length) {
                            var t = Math.sqrt(Math.pow(Ee.startTouchCoords[0][0] - Ee.startTouchCoords[1][0], 2) + Math.pow(Ee.startTouchCoords[0][1] - Ee.startTouchCoords[1][1], 2)),
                                n = Math.sqrt(Math.pow(e.originalEvent.touches[0].clientX - e.originalEvent.touches[1].clientX, 2) + Math.pow(e.originalEvent.touches[0].clientY - e.originalEvent.touches[1].clientY, 2)) / t;
                            if (n > 1 && (n *= 1.3), n < 1 && (n *= .7), null != n) {
                                w = Ee.px.bar.width;
                                var r = Math.round(Ee.px.bar.width * n);
                                Ee.px.bar.width = r + (r + 1) % 2, Ee.px.bar.width < 2 && (Ee.px.bar.width = 2), Ee.px.bar.width > 51 && (Ee.px.bar.width = 51), Ee.px.bar.width != w && (ve(), h(), ge()), Ee.lastZoomTime = (new Date).getTime()
                            }
                            return
                        }
                        if (e.originalEvent.touches.length > 1) return;
                        if ((new Date).getTime() - Ee.lastZoomTime < 1e3) return;
                        Ee.flags.recompute = !0, Ee.bars.offset = Ee.mouse.origOffset + Math.round((e.originalEvent.touches[0].clientX - Ee.mouse.sx) / (Ee.px.bar.width + Ee.px.bar.spacing)), ve(), Ee.bars.offset != Ee.mouse.origOffset && (h(), ge());
                        Ee.canvas.i.css("cursor", "e-resize")
                    }(e)
                },
                touchend: function(e) {
                    clearTimeout(timeOutEvent), Ne = !1, $(".chartDetail").hide(), $("html,body", parent.document).removeClass("hidden"),
                        function(e) {
                            if (Ee.bars.allowScale = !0, 1 == e.originalEvent.changedTouches.length && 1 == Ee.startTouchCoords.length && Ee.startTouchCoords[0][1] != e.originalEvent.changedTouches[0].clientY && Math.abs((Ee.startTouchCoords[0][0] - e.originalEvent.changedTouches[0].clientX) / (Ee.startTouchCoords[0][1] - e.originalEvent.changedTouches[0].clientY)) < .15) {
                                var t = se(Ee.mouse.sx, Ee.mouse.sy),
                                    n = 0;
                                n = e.originalEvent.changedTouches[0].clientY > Ee.startTouchCoords[0][1] ? 1 : -1, 0 == t ? (Ee.currentOverlay = (Ee.currentOverlay + Ee.mobileOverlays.length + n) % Ee.mobileOverlays.length, function(e) {
                                    if (Ee.overlays.hasOwnProperty(e)) {
                                        for (; Ee.slots[0].u.length > 0;) f(Ee.slots[0].u.length - 1, "u", 0);
                                        c(e)
                                    }
                                }(Ee.mobileOverlays[Ee.currentOverlay])) : t > 0 && (Ee.currentIndicator = (Ee.currentIndicator + Ee.mobileIndicators.length + n) % Ee.mobileIndicators.length, function(e) {
                                    if (Ee.indicators.hasOwnProperty(e)) {
                                        for (; Ee.slots.length > 2;) d(Ee.slots.length - 1);
                                        u(e)
                                    }
                                }(Ee.mobileIndicators[Ee.currentIndicator]))
                            }
                        }(e), ce()
                }
            }), Ee.canvas.i.bind("mousewheel", de), Ee.canvas.i.bind("pinch", function(e, t) {
                if (null != t.scale) {
                    w = Ee.px.bar.width;
                    var n = Math.round(Ee.px.bar.width * t.scale);
                    Ee.px.bar.width = n + (n + 1) % 2, Ee.px.bar.width < 2 && (Ee.px.bar.width = 2), Ee.px.bar.width > 51 && (Ee.px.bar.width = 51), Ee.px.bar.width != w && (ve(), h(), ge()), Ee.lastPinchTime = (new Date).getTime()
                }
                t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
            }), RTBTC.handler("barclose", Ee.element, Se)
        }

        function de(e, t, n, r) {
            if (!(Ee.stopEvent || Ee.notClicked || (stopEvent(e), isNaN(n) || isNaN(r)))) {
                if (0 != n && (Ee.mouse.origOffset = Ee.bars.offset, Ee.bars.offset -= n, ve(), Ee.bars.offset != Ee.mouse.origOffset && (h(), ge())), 0 != r) {
                    var i = Ee.px.bar.width;
                    Ee.px.bar.width += r, be(), Ee.px.bar.width < 2 && (Ee.px.bar.width = 2), Ee.px.bar.width > 51 && (Ee.px.bar.width = 51), Ee.px.bar.width != i && (ve(), h(), ge())
                }
                localStorage.barWidth = Ee.px.bar.width
            }
        }

        function pe(e) {
            if (e.offsetX) Ee.mouse.x = e.offsetX, Ee.mouse.y = e.offsetY;
            else if (e.pageX) {
                var t = Ee.canvas.i.offset();
                Ee.mouse.x = e.pageX - t.left, Ee.mouse.y = e.pageY - t.top
            }
        }

        function he(e) {
            e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY, pe(e);
            var t = se(Ee.mouse.x, Ee.mouse.y);
            Ee.canvas.i[0].getContext("2d");
            null == t ? ce() : t < 0 ? (Ee.canvas.i.css("cursor", "n-resize"), ce()) : Ee.settings.crosshairs ? (Ee.canvas.i.css("cursor", "none"), window.reqAnimFrame(function() {
                P(Ee.mouse.x, Ee.mouse.y)
            })) : Ee.canvas.i.css("cursor", "crosshair"), Ee.mouse.slot = t, e.originalEvent.preventDefault(), e.originalEvent.stopPropagation()
        }

        function ge() {
            ie()[1] > -1 && Ee.bars.offset >= Ee.bars.data.length - Ee.bars.visible + Ee.bars.blank + Ee.bars.endpad - 3 && Data.loadPrev($e())
        }

        function me(e) {
            if (pe(e), Ee.mouse.down)
                if (e.ctrlKey) {
                    var t = Ee.px.bar.spacing;
                    Ee.px.bar.spacing = Ee.mouse.origSpacing + Math.round((Ee.mouse.sx - Ee.mouse.x) / 10), Ee.px.bar.spacing < 0 && (Ee.px.bar.spacing = 0), Ee.px.bar.spacing > 51 && (Ee.px.bar.spacing = 51), Ee.px.bar.spacing != t && (h(), ge())
                } else 0 == Ee.mouse.origOffsetBlank && (Ee.bars.offset = Ee.mouse.origOffset + Math.round((Ee.mouse.x - Ee.mouse.sx) / (Ee.px.bar.width + Ee.px.bar.spacing))), 0 == Ee.mouse.origOffset && (Ee.bars.blank = Ee.mouse.origOffsetBlank + Math.round((Ee.mouse.sx - Ee.mouse.x) / (Ee.px.bar.width + Ee.px.bar.spacing)), be()), ve(), Ee.bars.offset == Ee.mouse.origOffset && 0 != Ee.bars.offset || (h(), ge());
            else if (Ee.mouse.zoom) {
                var n = Ee.mouse.x - Ee.mouse.sx,
                    r = +Ee.px.bar.width;
                Ee.px.bar.width = Ee.mouse.w0 - 2 * (n / 10 | 0), Ee.px.bar.width < 3 && (Ee.px.bar.width = 3), Ee.px.bar.width > 51 && (Ee.px.bar.width = 51), Ee.px.bar.width != r && (ve(), h(), ge())
            } else if (Ee.mouse.resize) {
                var i = Ee.mouse.y - Ee.mouse.sy;
                if (Ee.slots[Ee.mouse.re_slot - 1].h = Ee.mouse.re_slots.h0 + i, Ee.slots[Ee.mouse.re_slot - 1].h < Ee.px.slotmin && (i = Ee.px.slotmin - Ee.mouse.re_slots.h0, Ee.slots[Ee.mouse.re_slot - 1].h = Ee.px.slotmin), Ee.slots[Ee.mouse.re_slot].h = Ee.mouse.re_slots.h1 - i, Ee.slots[Ee.mouse.re_slot].px = Ee.mouse.re_slots.px1 + i, Ee.slots[Ee.mouse.re_slot].h < Ee.px.slotmin && (i = Ee.mouse.re_slots.h1 - Ee.px.slotmin, Ee.slots[Ee.mouse.re_slot].h = Ee.px.slotmin, Ee.slots[Ee.mouse.re_slot].px = Ee.mouse.re_slots.px1 + i), Ee.slots[Ee.mouse.re_slot - 1].h = Ee.mouse.re_slots.h0 + i, Ee.slots[Ee.mouse.re_slot - 1].h < Ee.px.slotmin) {
                    var o = (Ee.slots[Ee.mouse.re_slot - 1].h + Ee.slots[Ee.mouse.re_slot].h) / 2;
                    Ee.slots[Ee.mouse.re_slot].h = o, Ee.slots[Ee.mouse.re_slot - 1].h = o, Ee.slots[Ee.mouse.re_slot].px = Ee.slots[Ee.mouse.re_slot - 1].px + Ee.slots[Ee.mouse.re_slot - 1].h + Ee.px.pad + 3
                }
                for (var a = 0; a < Ee.slots.length; a++) $(".control-" + a, Ee.element).css("top", Ee.slots[a].px + 3 + "px");
                h()
            }
        }

        function ve() {
            Ee.bars.offset > Ee.bars.data.length - Ee.bars.visible + Ee.bars.blank + Ee.bars.endpad && (Ee.bars.offset = Ee.bars.data.length - Ee.bars.visible + Ee.bars.blank + Ee.bars.endpad), Ee.bars.offset < 0 && (Ee.bars.offset = 0)
        }

        function be() {
            var e = Ee.bars.visible,
                t = 0;
            t = Ee.bars.data.length > e ? e / 2 : Ee.bars.data.length > e / 2 ? (Ee.bars.data.length - e / 2) / 2 : 0, t = parseInt(t), Ee.bars.blank > t && (Ee.bars.blank = t), Ee.bars.blank < 0 && (Ee.bars.blank = 0)
        }

        function ye() {
            Ee.resize.avail = Ee.h - (Ee.slots.length * (2 + Ee.px.pad) - Ee.px.pad - 1 + Ee.px.lbl.h), Ee.resize.slots = [], Ee.resize.pct = [];
            for (var e = 0; e < Ee.slots.length; e++) Ee.resize.slots.push(Ee.slots[e].h), Ee.resize.pct.push(Ee.slots[e].h / Ee.resize.avail);
            s()
        }

        function xe() {
            var e, t, n = (Ee.slots.length - 1) * (2 + Ee.px.pad) + 1 + Ee.px.lbl.h,
                r = Ee.h - n,
                i = -1,
                o = 0;
            for (e = 0; e < Ee.slots.length; e++) Ee.slots[e].h = Ee.resize.pct[e] * r | 0, Ee.slots[e].px = i, i += Ee.slots[e].h + 2 + Ee.px.pad, o += Ee.slots[e].h;
            for (e = 0; o < r;) {
                for (Ee.slots[e % Ee.slots.length].h += 1, o += 1, t = 1 + e % Ee.slots.length; t < Ee.slots.length; t++) Ee.slots[t].px += 1;
                e++
            }
            for (e = 0; o > r;) {
                for (Ee.slots[e % Ee.slots.length].h -= 1, o -= 1, t = 1 + e % Ee.slots.length; t < Ee.slots.length; t++) Ee.slots[t].px -= 1;
                e++
            }
            for (e = 0; e < Ee.slots.length; e++) $(".control-" + e, Ee.element).css("top", Ee.slots[e].px + 3 + "px")
        }

        function we() {
            xe(), h()
        }

        function $e() {
            return Ee.period.avail[Ee.period.current]
        }

        function ke(e) {
            var t = void 0 === e ? Ee.period.avail[Ee.period.current] : e;
            return 0 == t ? "Ticks" : t < 60 ? "S" + t : t < 3600 ? "M" + (t / 60 | 0) : t < 86400 ? "H" + (t / 3600 | 0) : t < 604800 ? "D" + (t / 86400 | 0) : t < 2592e3 ? "W" + (t / 604800 | 0) : (t / 2592e3 | 0) + "M"
        }

        function Te() {
            var e = RTBTC.exchangeName() + " " + RTBTC.base() + "/" + RTBTC.quote() + ", " + function() {
                switch (Ee.mode.current) {
                    case Ee.TIME_BAR:
                        return ke();
                    case Ee.VOL_BAR:
                        return function(e) {
                            var t = void 0 === e ? Ee.volume.avail[Ee.volume.current] : e;
                            return (t |= 0) < 1e3 ? "V" + t : t < 1e6 ? "V" + ~~(t / 1e3) + "K" : t < 1e9 ? "V" + ~~(t / 1e6) + "M" : "V" + ~~(t / 1e9) + "B"
                        }();
                    default:
                        return ""
                }
            }();
            Ee.module.setTitle(e)
        }

        function Se(e) {
            void 0 === e && (e = $e());
            var t = +e;
            isNaN(t) || Ee.mode.current == Ee.TIME_BAR && e == Ee.period.avail[Ee.period.current] && (DEBUG && Ae("handling bar close for period: " + e), Ee.bars.data = Data.data.bars[e], h())
        }

        function Ce() {
            if (!mobile) {
                var e, t, n, r, i = Ee.font.headingSize,
                    o = 1.25 * i,
                    a = 2.75 * o | 0,
                    s = $("<canvas/>").attr("width", Ee.w).attr("height", Ee.h + a),
                    l = s[0].getContext("2d"),
                    c = RTBTC.base() + "/" + RTBTC.quote(),
                    u = ", " + function(e) {
                        var t = void 0 === e ? Ee.period.avail[Ee.period.current] : e;
                        return 0 == t ? _("Ticks") : t < 60 ? t + " NaN" : t < 3600 ? (t / 60 | 0) + " " + _("minute") : t < 86400 ? (t / 3600 | 0) + " " + _("hour") : t < 604800 ? (t / 86400 | 0) + " " + _("day") : t < 2592e3 ? (t / 604800 | 0) + " " + _("week") : (t / 2592e3 | 0) + " " + _("month")
                    }() + " " + _("bars"),
                    f = ie(),
                    d = Settings.localTime;
                if (l.fillStyle = Ee.colors.fill.blankBG, l.fillRect(0, a, Ee.w, Ee.h), l.fillStyle = Ee.colors.fill.bg, l.fillRect(0, 0, Ee.w, a), l.fillStyle = Ee.colors.stroke.crosshair, l.font = Ee.font.headingBold, l.textBaseline = "middle", n = l.measureText(c).width, e = l.measureText(Ee.watermark).width, t = Ee.w - e - i, f[1] >= f[0]) {
                    for (l.fillText(c, i / 2, o), l.font = Ee.font.heading, l.fillStyle = Ee.colors.fill.slottext, l.fillText(u, i / 2 + n, o, t - n), r = f[1]; r > f[0]; r--)
                        if (r < Ee.bars.data.length) {
                            u = F(Ee.bars.data[r][0], !0, d) + " " + R(Ee.bars.data[r][0], d);
                            break
                        }
                    for (u += " - ", r = f[0]; r < f[1]; r++)
                        if (r >= 0) {
                            u += F(Ee.bars.data[r][0], !0, d) + " " + R(Ee.bars.data[r][0], d);
                            break
                        }
                    l.fillText(u, i / 2, 2 * o, t - Ee.px.lbl.tick - Ee.px.lbl.w)
                } else l.fillText(c, i / 2, 2 * o), l.font = Ee.font.heading, l.fillStyle = Ee.colors.fill.slottext, l.fillText(u, i / 2 + n, 2 * o, t - n);
                l.fillText(Ee.watermark, Ee.w - e - i / 2 - Ee.px.lbl.tick - Ee.px.lbl.w, 2 * o), l.drawImage(Ee.canvas.base[0], 0, a), l.drawImage(Ee.canvas.bg[0], 0, a), l.drawImage(Ee.canvas.main[0], 0, a), l.drawImage(Ee.canvas.fg[0], 0, a), l.drawImage(Ee.canvas.orders[0], 0, a), l.drawImage(Ee.canvas.lbl[0], 0, a), l.drawImage(Ee.canvas.line[0], 0, a), l.drawImage(Ee.canvas.i[0], 0, a), l.strokeStyle = Ee.colors.stroke.border, l.lineWidth = 1, l.beginPath(), X(l, 0, a), K(l, Ee.w - Ee.px.lbl.tick - Ee.px.lbl.w, a), l.stroke();
                var p = s[0].toDataURL("image/png");
                if (has_dataURI()) window.open(p, "_blank");
                else {
                    var h = window.open(BASE_URL + "blank.html");
                    h.data = '<img src="' + p + '"/>', h.document.write(h.data), h.focus()
                }
            }
        }
        var Ee = {
                element: "",
                parent: null,
                module: null,
                self: null,
                canvas: {
                    base: null,
                    bg: null,
                    main: null,
                    fg: null,
                    orders: null,
                    lbl: null,
                    i: null,
                    line: null
                },
                w: 0,
                h: 0,
                mode: {
                    current: 0,
                    avail: ["Time Bars"],
                    display: 0,
                    avail_display: ["Candle", "OHLC", "HLC", "Line"]
                },
                TIME_BAR: 0,
                CANDLE: 0,
                OHLC: 1,
                HLC: 2,
                LINE: 3,
                MOUNTAIN: 4,
                BANDS: 5,
                PSAR: 6,
                HIST: 7,
                LBLHIST: 8,
                period: {
                    current: 13,
                    string: "M15",
                    avail: [2592e3, 604800, 259200, 86400, 43200, 28800, 21600, 14400, 7200, 3600, 2700, 1800, 900, 300, 180, 60, 0]
                },
                bars: {
                    visible: -1,
                    offset: 0,
                    blank: 0,
                    endpad: 0,
                    data: [],
                    noload: {},
                    startTime1: "9:30:00",
                    endTime1: "11:30:00",
                    startTime2: "13:00:00",
                    endTime2: "15:00:00",
                    ticks: [],
                    fixTime: !1
                },
                slots: [{
                    main: !0,
                    px: 0,
                    h: 50,
                    u: [{
                        t: "ema",
                        i: null,
                        s: [5]
                    }],
                    o: []
                }, {
                    t: "vol",
                    i: null,
                    px: 5,
                    h: 10,
                    s: []
                }],
                resize: {
                    avail: 0,
                    slots: [],
                    pct: []
                },
                price: {
                    high: 100,
                    low: 50,
                    range: 50,
                    bid: NaN,
                    ask: NaN
                },
                log: {
                    m: 0,
                    b: 0,
                    b10: 0
                },
                px: {
                    pad: 5,
                    lbl: {
                        w: 65,
                        h: 14,
                        tick: 5,
                        halftick: 2,
                        font: 11
                    },
                    bar: {
                        width: 7,
                        dx: 4,
                        spacing: 1
                    },
                    price: 1,
                    crosshairs: {
                        x: 0,
                        y: 0
                    },
                    slotmin: 50
                },
                flags: {
                    redraw: {
                        base: !0,
                        main: !0,
                        underlay: !0,
                        overlay: !0,
                        inds: !0
                    },
                    recompute: !0,
                    widget: !1
                },
                mouse: {
                    down: !1,
                    zoom: !1,
                    w0: null,
                    x: 0,
                    y: 0,
                    bar: null,
                    sx: 0,
                    sy: 0,
                    origOffset: 0,
                    origSpacing: 1,
                    resize: !1,
                    re_slot: 0,
                    re_slots: {
                        px0: 0,
                        h0: 0,
                        px1: 0,
                        h1: 0
                    },
                    slot: -1
                },
                colors: Colors.c,
                lastColorIndex: 0,
                defaultColors: null,
                SOLID: 0,
                DOTTED: 1,
                DASHED: 2,
                DASHDOT: 3,
                font: {
                    precision: 2,
                    labels: mobile ? '10px/1.0em  "Microsoft YaHei", Arial, sans-serif' : '11px/1.0em  Consolas, "Courier New", monospace',
                    size: 11,
                    lineHeight: 1,
                    face: ' "Microsoft YaHei", Consolas, "Courier New", monospace',
                    indicators: '10px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    heading: '12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    headingBold: 'bold 12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
                    headingSize: 12
                },
                watermark: "bijietech.com",
                settings: {
                    repaint: !0,
                    grid: !0,
                    crosshairs: !0,
                    icontrols: !0,
                    bidask: !0,
                    logscale: !1,
                    userorders: !1
                },
                indicators: {
                    macd: "MACD",
                    kdj: "KDJ",
                    cci: "Commodity Channel Index",
                    dmi: "Directional Movement Index",
                    obv: "On-Balance Volume",
                    rsi: "Relative Strength Index",
                    sto: "Stochastic Oscillator",
                    storsi: "Stochastic RSI",
                    vol: "Volume",
                    wpr: "Williams %R",
                    emv: "Ease of movement value",
                    mtm: "Momentum"
                },
                mobileIndicators: ["macd", "kdj", "cci", "dmi", "obv", "rsi", "sto", "storsi", "wpr", "emv", "mtm", "avl"],
                currentIndicator: 0,
                overlays: {
                    ema: "Exponential Moving Average",
                    bnd: "Bollinger Bands &reg;",
                    psar: "Parabolic SAR",
                    dcn: "Price Channels",
                    sma: "Simple Moving Average",
                    vwap: "Volume Weighted Average Price",
                    trix: "Triple Exponentially Smoothed Average",
                    avl: "avl",
                    ma: "ma"
                },
                mobileOverlays: ["ema", "bnd", "psar", "dcn", "sma", "vwap", "trix", "avl", "ma"],
                currentOverlay: 0,
                lastPinchTime: -1,
                lastZoomTime: -1,
                startTouchCoords: [],
                crossHairH: !0,
                setShowRateOnLeft: !1,
                data: {},
                curIndex: 1,
                offset: 0,
                preClose: 0,
                showMainCrosshairs: !0,
                stopEvent: !1,
                preTradingDay: 0,
                notClicked: !0,
                debug: RTBTC.isDebug()
            },
            Ae = RTBTC.debug;
        Date.prototype.Format = function(e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        };
        var Ne, Pe, Oe, De = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")],
            Ie = 0,
            Me = 0;
        return {
            build: function(e, n, r) {
                return Ee.element = e, Ee.parent = n, $(Ee.element).empty(), Ee.w = $(Ee.element).width(), Ee.h = $(Ee.element).height(), DEBUG && Ae("#######################_P.w, h: " + Ee.w + ", " + Ee.h), Ee.canvas.base = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 100), Ee.canvas.bg = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 101), Ee.canvas.main = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 102), Ee.canvas.fg = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 103), Ee.canvas.orders = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 104), Ee.canvas.lbl = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 105), Ee.canvas.line = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 106).attr("id", "line"), Ee.canvas.i = $("<canvas/>").attr("width", Ee.w + "px").attr("height", Ee.h + "px").attr("z-index", 107), $(Ee.element).append(Ee.canvas.base).append(Ee.canvas.bg).append(Ee.canvas.main).append(Ee.canvas.fg).append(Ee.canvas.orders).append(Ee.canvas.lbl).append(Ee.canvas.line).append(Ee.canvas.i), Ee.canvas.line[0].getContext("2d"), fe(), t(r),
                    function() {
                        var e, t, n;
                        for (e = 0; e < Ee.slots.length; e++) {
                            if (Ee.slots[e].hasOwnProperty("main")) {
                                for (t = 0; t < Ee.slots[e].u.length; t++) n = void 0 !== Ee.slots[e].u[t].c && null != Ee.slots[e].u[t].c ? Ee.slots[e].u[t].c : b(e), Ee.slots[e].u[t].i = (new Indicator).build(Ee.slots[e].u[t].t, Ee.slots[e].u[t].s).color(n);
                                for (t = 0; t < Ee.slots[e].o.length; t++) n = void 0 !== Ee.slots[e].o[t].c && null != Ee.slots[e].o[t].c ? Ee.slots[e].o[t].c : b(e), Ee.slots[e].o[t].i = (new Indicator).build(Ee.slots[e].o[t].t, Ee.slots[e].o[t].s).color(n)
                            } else Ee.slots[e].i = (new Indicator).build(Ee.slots[e].t, Ee.slots[e].s);
                            Ee.slots[e].control = o(e), $(Ee.element).append(Ee.slots[e].control)
                        }
                    }(), $(Ee.element).attr("tabindex", 0).keydown(function(e) {
                        if (37 == e.keyCode || 39 == e.keyCode) {
                            if (Ee.mouse.x < 0 && (Ee.mouse.x = 0), Ee.mouse.x > ee(0) && (Ee.mouse.x = ee(0)), 37 == e.keyCode) {
                                Ee.mode.display, Ee.CANDLE;
                                var t = Ee.mouse.x - Ee.px.bar.width - Ee.px.bar.spacing;
                                (n = ne(t < 0 ? 0 : t)) > Ee.bars.visible - 4 ? oe(n) < Ee.bars.data.length && (Ee.bars.offset++, h()) : (Ee.mouse.x -= Ee.px.bar.width + Ee.px.bar.spacing, Ee.mouse.x < 0 && (Ee.mouse.x = 0))
                            } else if (39 == e.keyCode) {
                                var n = ne(Ee.mouse.x + Ee.px.bar.width + Ee.px.bar.spacing);
                                0 == n && Ee.bars.offset > 0 ? (Ee.bars.offset--, h()) : Ee.mouse.x += Ee.px.bar.width + Ee.px.bar.spacing
                            }
                            Ee.bars.data[oe(ne(Ee.mouse.x))] && (Ee.mouse.y = Z(Ee.bars.data[oe(ne(Ee.mouse.x))][4], 0)), window.reqAnimFrame(function() {
                                P(Ee.mouse.x, Ee.mouse.y, !0)
                            })
                        }
                    }), i(), window.setTimeout(function() {
                        RTBTC.trigger("what-theme", null)
                    }, 100), $(Ee.element).on("mouseleave", function() {
                        ! function() {
                            var e, t;
                            for (e = 0; e < Ee.slots.length; e++)(t = $(".control-" + e, Ee.element)).data("popped") || t.hide()
                        }()
                    }), $(Ee.element).on("keydown", function(e) {
                        38 == e.keyCode && de(Ee.element, 0, 0, 1), 40 == e.keyCode && de(Ee.element, 0, 0, -1)
                    }), this
            },
            lblWidth: function() {
                return Ee.px.lbl.w
            },
            module: function(e) {
                return Ee.module = e, Te(), RTBTC.handler("barclose", Ee.module.id(), Ee.self.onBarClose), RTBTC.handler("theme", Ee.module.id(), Ee.self.onTheme), RTBTC.handler("trade", Ee.module.id(), Ee.self.onTrade), RTBTC.handler("bidask", Ee.module.id(), Ee.self.bidask), RTBTC.handler("orders", Ee.module.id(), m), RTBTC.handler("order-canceled", Ee.module.id(), function() {
                    var e = Ee.canvas.orders[0].getContext("2d");
                    DEBUG && Ae("Chart refreshing user orders.");
                    try {
                        m(e)
                    } catch (e) {
                        DEBUG && Ae("Could not clear user orders"), DEBUG && console.error(e)
                    }
                }), this
            },
            self: function(e) {
                return Ee.self = e, this
            },
            settings: function() {
                return function() {
                    var e, t = [],
                        n = [],
                        r = [{
                            val: 0,
                            text: _("Indicator…")
                        }],
                        i = [{
                            val: 0,
                            text: _("Overlay…")
                        }];
                    for (e = 0; e < Ee.period.avail.length; e++) t.push({
                        val: Ee.period.avail[e],
                        text: ke(Ee.period.avail[e])
                    });
                    for (e = 0; e < Ee.mode.avail_display.length; e++) n.push({
                        val: e,
                        text: Ee.mode.avail_display[e]
                    });
                    for (e in Ee.indicators) Ee.indicators.hasOwnProperty(e) && r.push({
                        val: e,
                        text: Ee.indicators[e]
                    });
                    for (e in Ee.overlays) Ee.overlays.hasOwnProperty(e) && i.push({
                        val: e,
                        text: Ee.overlays[e]
                    });
                    return [$("<p/>").append(RTBTC.select(Ee.period.avail[Ee.period.current], t, function(e) {
                        Ee.period.current = Ee.period.avail.indexOf(+e), Te(), h()
                    })).append($("<span/>").addClass("control-label").html(_("Time Period"))), $("<p/>").append(RTBTC.select(Ee.mode.display, n, function(e) {
                        Ee.mode.display = +e, h()
                    })).append($("<span/>").addClass("control-label").html(_("Draw Style"))), $("<p/>").append(RTBTC.toggle(Ee.settings.bidask, function() {
                        Ee.settings.bidask = !0
                    }, function() {
                        Ee.settings.bidask = !1
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Show Bid / Ask"))), $("<p/>").append(RTBTC.toggle(Ee.settings.crosshairs, function() {
                        Ee.settings.crosshairs = !0
                    }, function() {
                        Ee.settings.crosshairs = !1
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Show Crosshair"))), $("<p/>").append(RTBTC.toggle(Ee.settings.grid, function() {
                        Ee.settings.grid = !0
                    }, function() {
                        Ee.settings.grid = !1
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Show Grid"))), $("<p/>").append(RTBTC.toggle(Ee.settings.icontrols, function() {
                        Ee.settings.icontrols = !0
                    }, function() {
                        Ee.settings.icontrols = !1;
                        for (var e = 0; e < Ee.slots.length; e++) $(".control-" + e, Ee.element).hide().data("popped", !1)
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Show Indicator Controls"))), $("<p/>").append(RTBTC.toggle(Ee.settings.logscale, function() {
                        Ee.settings.logscale = !0
                    }, function() {
                        Ee.settings.logscale = !1
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Logarithmic Scale"))), $("<p/>").append(RTBTC.select(0, i, function(e) {
                        0 != +e && c(e)
                    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Overlay"))), $("<p/>").append(RTBTC.select(0, r, function(e) {
                        0 != +e && u(e)
                    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Indicator"))), $("<p/>").append(RTBTC.toggle(Ee.settings.userorders, function() {
                        Ee.settings.userorders = !0
                    }, function() {
                        Ee.settings.userorders = !1
                    }, function() {
                        h()
                    })).append($("<span/>").addClass("control-label").html(_("Show User Orders")))]
                }()
            },
            save: function() {
                return function() {
                    var e, t, n = {};
                    for (n.r = Ee.settings.repaint, n.g = Ee.settings.grid, n.c = Ee.settings.crosshairs, n.k = Ee.settings.icontrols, n.b = Ee.settings.bidask, n.l = Ee.settings.logscale, n.o = Ee.settings.userorders, n.m = +~~Ee.mode.current, n.d = +~~Ee.mode.display, n.t = +~~Ee.period.avail[Ee.period.current], n.w = +~~Ee.px.bar.width, n.s = +~~Ee.px.bar.spacing, n.i = [], e = 0; e < Ee.slots.length; e++)
                        if (Ee.slots[e].hasOwnProperty("main")) {
                            var r, i = [],
                                o = [];
                            for (t = 0; t < Ee.slots[e].o.length; t++) r = b(e, t, "o"), i.push({
                                t: Ee.slots[e].o[t].t,
                                s: Ee.slots[e].o[t].i.settings(),
                                c: r
                            });
                            for (t = 0; t < Ee.slots[e].u.length; t++) r = b(e, t, "u"), o.push({
                                t: Ee.slots[e].u[t].t,
                                s: Ee.slots[e].u[t].i.settings(),
                                c: r
                            });
                            n.i.push({
                                m: !0,
                                p: +~~Ee.slots[e].px,
                                h: +~~Ee.slots[e].h,
                                o: i,
                                u: o
                            })
                        } else n.i.push({
                            m: !1,
                            t: Ee.slots[e].t,
                            p: +~~Ee.slots[e].px,
                            h: +~~Ee.slots[e].h,
                            r: Ee.slots[e].i.settings()
                        });
                    return n
                }()
            },
            load: function(e) {
                t(e), h()
            },
            unload: function() {
                RTBTC.unregisterAll(Ee.module.id())
            },
            onBarClose: function(e) {
                Se(e)
            },
            onTheme: function(e) {
                ! function(e) {
                    Colors.hasOwnProperty(e) && (Ee.colors = Colors[e]), h()
                }(e)
            },
            setPreClose: function(e) {
                Ee.preClose = Number(e)
            },
            showDetail: function() {
                i()
            },
            onTrade: function(e) {
                h()
            },
            wheel: function(e) {
                de(Ee.element, 0, 0, -e)
            },
            loadTicks: function(e) {
                var t = Ee.bars.ticks;
                Ee.bars.ticks = [];
                for (var i = 0; i < e.length; i++) r(e[i]) && Ee.bars.ticks.push(e[i]);
                return 0 == Ee.bars.ticks.length ? (Ee.bars.ticks = t, Ae("Failed to load any new ticks!")) : (! function() {
                    var e;
                    if (Ee.bars.data = [], 0 != Ee.period.avail[Ee.period.current])
                        for (Ee.bars.data.push([Ee.bars.ticks[0][0], Ee.bars.ticks[0][1], Ee.bars.ticks[0][1], Ee.bars.ticks[0][1], Ee.bars.ticks[0][1], Ee.bars.ticks[0][2]]), e = 1; e < Ee.bars.ticks.length; e++) n(Ee.bars.ticks[e]);
                    else
                        for (e = 0; e < Ee.bars.ticks.length; e++) Ee.bars.splice(0, 0, [Ee.bars.ticks[e][0], Ee.bars.ticks[e][1], Ee.bars.ticks[e][1], Ee.bars.ticks[e][1], Ee.bars.ticks[e][1], Ee.bars.ticks[e][2]])
                }(), p()), this
            },
            loadBars: function(e) {
                var t, n, i = Ee.bars.ticks,
                    o = Ee.bars.data;
                if (e.length > 0) {
                    for (Ee.bars.ticks = [], t = e.length - 1; t >= 0; t--) r(n = [e[t][0], e[t][1], e[t][5] / 4]) && Ee.bars.ticks.push(n), r(n = [e[t][0], e[t][2], e[t][5] / 4]) && Ee.bars.ticks.push(n), r(n = [e[t][0], e[t][3], e[t][5] / 4]) && Ee.bars.ticks.push(n), r(n = [e[t][0], e[t][4], e[t][5] / 4]) && Ee.bars.ticks.push(n);
                    Ee.bars.ticks.length > 0 ? (Ee.bars.data = e, Ee.flags.redrawBG = !0, Ee.flags.recompute = !0, p()) : (Ee.bars.ticks = i, Ee.bars.data = o)
                }
                return this
            },
            tick: function(e) {
                var t = Ee.bars.data.length;
                r(e) && (Ee.bars.ticks.push([e[0], e[1], e[2]]), n(e), Ee.bars.data.length > t && (Ee.flags.redrawFG = !0), p())
            },
            bar: function(e) {
                Ee.bars.data.length;
                if (Ee.bars.data.length > 0) {
                    if (e[0] < Ee.bars.data[0][0]) return;
                    if (e[0] == Ee.bars.data[0][0] && e[5] <= Ee.bars.data[0][5]) return;
                    e[0] == Ee.bars.data[0][0] ? Ee.bars.data[0] = e : (Ee.bars.data.splice(0, 0, e), Ee.flags.redrawFG = !0)
                } else Ee.bars.data.splice(0, 0, e), Ee.flags.redrawFG = !0;
                Ee.flags.recompute = !0, p()
            },
            bidask: function(e) {
                var t = !1;
                return e.hasOwnProperty("bid") && Ee.price.bid != e.bid && (Ee.price.bid = e.bid, t = !0), e.hasOwnProperty("ask") && Ee.price.ask != e.ask && (Ee.price.ask = e.ask, t = !0), t && (Ee.flags.redraw.main = !0, p()), this
            },
            resize: function() {
                e(), ye(), window.reqAnimFrame(function() {
                    var e = $(Ee.element).width(),
                        t = $(Ee.element).height();
                    Ee.w == e && Ee.h == t || (Ee.w = e, Ee.h = t, DEBUG && Ae("@@@@@@@_P.w, h: " + Ee.w + ", " + Ee.h), $("canvas", Ee.element).each(function(e, t) {
                        $(t).attr("width", Ee.w + "px").attr("height", Ee.h + "px")
                    }), $("canvas", Ee.element).attr("val", !1), xe(), Ee.canvas.i[0].getContext("2d"), Ee.canvas.line[0].getContext("2d"), h())
                }), we()
            },
            drag: function(e) {
                switch (e) {
                    case "start":
                        s()
                }
            },
            widget: function(e) {
                return null == e || void 0 === e ? Ee.flags.widget : (Ee.flags.widget = e, this)
            },
            addIndicator: function(e) {
                return u(e), this
            },
            addOrUpdateIndicator: function(e, t) {
                return Ee.indicators.hasOwnProperty(e) ? u(e) : Ee.overlays.hasOwnProperty(e) && c(e, t), this
            },
            removeIndicator: function() {
                for (; Ee.slots.length > 2;) d(Ee.slots.length - 1);
                for (; Ee.slots[0].u.length > 1;) f(Ee.slots[0].u.length - 1, "u", 0);
                return this
            },
            addOverlay: function(e, t) {
                c(e, t)
            },
            removeIndicatorByname: function(e) {
                return e instanceof Array && e.forEach(function(e) {
                    for (var t = Ee.slots[0].u, n = t.length, r = 0; r < n; r++) t[r] && t[r].t == e && f(r, "u", 0);
                    for (var i = Ee.slots, o = 0; o < i.length; o++) i[o].t == e && d(o)
                }), this
            },
            setResolution: function(e) {
                return Ee.period.avail.indexOf(e) >= 0 && Ee.period.current != Ee.period.avail.indexOf(e) && (Ee.period.current = Ee.period.avail.indexOf(e), Ee.bars.offset = 0, Ee.bars.blank = 0), Data.setup(e), this
            },
            crossHairH: function(e) {
                Ee.crossHairH = e
            },
            fixTime: function(e) {
                Ee.bars.fixTime = e, Ee.offset = e ? 40 : 0, Ee.bars.offset = 0, Ee.settings.grid = !0
            },
            setBarwidth: function(e) {
                Ee.px.bar.width = e
            },
            setData: function(e) {
                Ee.data = e
            },
            clearData: function() {
                Data.data.bars[$e()] = [], h()
            },
            setOffset: function(e) {
                Ee.offset = e
            },
            setShowRateOnLeft: function(e) {
                Ee.setShowRateOnLeft = e
            },
            setLastColorIndex: function(e) {
                Ee.lastColorIndex = e
            },
            setMode: function(e) {
                return Ee.mode.avail_display.indexOf(e) >= 0 && Ee.mode.display != Ee.mode.avail_display.indexOf(e) && (Ee.mode.display = Ee.mode.avail_display.indexOf(e)), $(".icontrol", Ee.element).css("left", Ee.offset + 2 + "px"), this
            },
            setCrossHair: function(e) {
                Ee.showMainCrosshairs = e, Ee.stopEvent = !e, e ? (Ee.canvas.i.removeClass("showHand"), 0 == $("#chartCtrlFixed").length && i()) : (Ee.canvas.i.addClass("showHand"), $("#chartCtrlFixed").remove())
            },
            getMode: function() {
                return Ee.mode.display
            },
            getInernal: function() {
                return Ee.yToVal = re, Ee.xToBar = ne, Ee.toPxX = ee, Ee.barToIndex = oe, Ee.toPxY = Z, Ee
            },
            getCurDay: function() {
                if (Ee.bars.data[Ee.curIndex]) return $("#chartCtrlFixed").hide(), Ee.bars.data[Ee.curIndex][0]
            },
            getPerClose: function() {
                if (Ee.bars.data[Ee.curIndex + 1]) return Ee.bars.data[Ee.curIndex + 1][4]
            },
            LblWidthChangeEvent: function(e) {
                Ee.LblWidthChange = e
            },
            showHighlowPriceAtAngles: function() {
                Ee.colors.stroke.priceShow = !0
            },
            setMainSlotHeightPercent: function(e) {
                Ee.mainSlotHeightPercent = e
            },
            redraw: function() {
                h()
            },
            isIndicator: function(e) {
                return !!Ee.indicators[e]
            },
            internals: (Ee.debug, function() {
                return Ee
            })
        }
    };
Date.prototype.get8Date = function() {
    var e = 6e4 * this.getTimezoneOffset(),
        t = this.getTime() + e;
    return new Date(t + 288e5)
};
var Currency = function() {
        var e = [],
            t = {
                AUD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Australian dollar")
                },
                BTC: {
                    symbol: "BTC",
                    before: !1,
                    digits: 8,
                    name: _("Bitcoin")
                },
                USDT: {
                    symbol: "USDT",
                    before: !1,
                    digits: 2,
                    name: _("USDT")
                },
                ANS: {
                    symbol: "ANS",
                    before: !1,
                    digits: 8,
                    name: _("Antshares")
                },
                BNB: {
                    symbol: "BNB",
                    before: !1,
                    digits: 8,
                    name: _("Binance")
                },
                ETH: {
                    symbol: "ETH",
                    before: !1,
                    digits: 8,
                    name: _("Ethereum")
                },
                123: {
                    symbol: "123",
                    before: !1,
                    digits: 8,
                    name: _("123")
                },
                456: {
                    symbol: "456",
                    before: !1,
                    digits: 8,
                    name: _("456")
                },
                CAD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Canadian dollar")
                },
                CHF: {
                    symbol: "S₣",
                    before: !1,
                    digits: 2,
                    name: _("Swiss franc")
                },
                CLP: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("Chilean peso")
                },
                CNY: {
                    symbol: "CNY",
                    before: !1,
                    digits: 2,
                    name: _("Chinese yuan")
                },
                DKK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Danish krone")
                },
                EUR: {
                    symbol: "€",
                    before: !0,
                    digits: 2,
                    name: _("Euro")
                },
                GBP: {
                    symbol: "£",
                    before: !0,
                    digits: 2,
                    name: _("Pound sterling")
                },
                HKD: {
                    symbol: "圓",
                    before: !0,
                    digits: 2,
                    name: _("Hong Kong dollar")
                },
                JPY: {
                    symbol: "¥",
                    before: !0,
                    digits: 2,
                    name: _("Japanese yen")
                },
                FTC: {
                    symbol: "FTC",
                    before: !1,
                    digits: 8,
                    name: _("Feathercoin")
                },
                LTC: {
                    symbol: "Ł",
                    before: !0,
                    digits: 6,
                    name: _("Litecoin")
                },
                NMC: {
                    symbol: "ℕ",
                    before: !0,
                    digits: 8,
                    name: _("Namecoin")
                },
                NVC: {
                    symbol: "NVC",
                    before: !1,
                    digits: 8,
                    name: _("Novacoin")
                },
                NOK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Norwegian krone")
                },
                NZD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("New Zealand dollar")
                },
                PLN: {
                    symbol: "zł",
                    before: !1,
                    digits: 2,
                    name: _("Polish złoty")
                },
                PPC: {
                    symbol: "PPC",
                    before: !1,
                    digits: 8,
                    name: _("Peercoin")
                },
                RUB: {
                    symbol: "руб",
                    before: !1,
                    digits: 2,
                    name: _("Russian ruble")
                },
                SEK: {
                    symbol: "kr",
                    before: !1,
                    digits: 2,
                    name: _("Swedish krona")
                },
                SGD: {
                    symbol: "S",
                    before: !0,
                    digits: 2,
                    name: _("Singapore dollar")
                },
                THB: {
                    symbol: "฿",
                    before: !0,
                    digits: 2,
                    name: _("Thai baht")
                },
                TRC: {
                    symbol: "TRC",
                    before: !1,
                    digits: 8,
                    name: _("Terracoin")
                },
                USD: {
                    symbol: "$",
                    before: !0,
                    digits: 2,
                    name: _("United States dollar")
                },
                XPM: {
                    symbol: "Ψ",
                    before: !0,
                    digits: 8,
                    name: _("Primecoin")
                }
            };
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e.sort(), {
            list: function() {
                return e
            },
            before: function(e) {
                try {
                    return t[e].before
                } catch (e) {
                    return !0
                }
            },
            fullname: function(e) {
                try {
                    return t[e].name
                } catch (e) {
                    return _("Currency")
                }
            },
            format: function(e, n, r) {
                try {
                    null == r && (r = t[e].digits);
                    var i = numberWithCommas((n = parseFloat(n)).toFixed(r));
                    return t[e].before ? t[e].symbol + i : i + " " + t[e].symbol
                } catch (e) {
                    return "¤0.00"
                }
            },
            symbol: function(e) {
                try {
                    return t[e].symbol
                } catch (e) {
                    return "¤"
                }
            },
            valid: function(e) {
                return t.hasOwnProperty(e)
            }
        }
    }(),
    OrderBookDaemon = function() {
        var e = null;
        return new function() {
            this.Build = function() {
                return null == e && ((e = new function() {
                    var e = {
                        book: {
                            bid: {
                                price: [],
                                amount: []
                            },
                            ask: {
                                price: [],
                                amount: []
                            }
                        }
                    };
                    return {
                        book: e.book,
                        sumToPrice: function(t, n) {
                            return function(t, n) {
                                var r = 0,
                                    i = 0,
                                    o = RTBTC.baseInt();
                                if (t *= RTBTC.quoteInt(), "bid" == n)
                                    for (i = 0; i < e.book.bid.price.length && !(e.book.bid.price[i] < t); i++) r += e.book.bid.amount[i] / o;
                                else if ("ask" == n)
                                    for (i = 0; i < e.book.ask.price.length && !(e.book.ask.price[i] > t); i++) r += e.book.ask.amount[i] / o;
                                return r
                            }(t, n)
                        },
                        loadBook: function(t, n, r) {
                            e.book.bid.price = [], e.book.bid.amount = [], e.book.ask.price = [], e.book.ask.amount = [];
                            var i = Object.keys(n).sort(function(e, t) {
                                    return e - t
                                }).reverse(),
                                o = Object.keys(t).sort(function(e, t) {
                                    return e - t
                                });
                            i.slice(0, r || 20).forEach(function(t) {
                                e.book.bid.price.push(parseFloat(t)), e.book.bid.amount.push(n[t])
                            }), o.slice(0, r || 20).forEach(function(n) {
                                e.book.ask.price.push(parseFloat(n)), e.book.ask.amount.push(t[n])
                            }), RTBTC.trigger("newbook", null)
                        }
                    }
                }).constructor = null), e
            }
        }
    }(),
    OBD = null,
    TWOPI = 2 * Math.PI,
    OBD = OrderBookDaemon.Build(),
    VisualDepth = function() {
        function e(e) {
            if (void 0 !== e) {
                var t = new Validator,
                    n = (new Validator).create(t.FLOAT),
                    r = (new Validator).create(t.BOOL);
                N.settings.grid = r.set(N.settings.grid).set(e.g).get(), N.settings.fill = r.set(N.settings.fill).set(e.f).get(), N.price.scale = n.set(N.price.scale).set(e.s).get()
            }
        }

        function t() {
            var e = N.canvas.bg[0].getContext("2d"),
                t = N.canvas.bidFill[0].getContext("2d"),
                n = N.canvas.askFill[0].getContext("2d"),
                s = N.canvas.bid[0].getContext("2d"),
                u = N.canvas.ask[0].getContext("2d"),
                f = N.canvas.axes[0].getContext("2d"),
                h = N.canvas.lbl[0].getContext("2d");
            if (N.flags.recompute && function(e) {
                    N.price.low, N.price.high;
                    var t = RTBTC.quoteInt(),
                        n = !1,
                        r = (O = OBD.book).bid.price,
                        i = O.ask.price;
                    if (0 == r.length && i.length > 0) O.bid.price = [i[0]], O.bid.amount = [O.ask.amount[0]];
                    else if (r.length > 0 && 0 == i.length) O.ask.price = [r[0]], O.ask.amount = [O.bid.amount[0]];
                    else if (0 == r.length && 0 == i.length) return;
                    if (O.bid.price.length > 0 && O.ask.price.length > 0) {
                        N.price.low < O.bid.price[O.bid.price.length - 1] / t && (n = !0, DEBUG && P("New low price: " + N.price.low)), N.price.high > O.ask.price[O.ask.price.length - 1] / t && (n = !0, DEBUG && P("New high price: " + N.price.high)), N.price.low > O.bid.price[O.bid.price.length - 1] / t && DEBUG && P("New low price: " + N.price.low), N.price.high < O.ask.price[O.ask.price.length - 1] / t && DEBUG && P("New high price: " + N.price.high);
                        var o = (O.ask.price[0] + O.bid.price[0]) / 2;
                        o * (1 - N.price.scale) > 0 && (N.price.high = o * (1 + N.price.scale), N.price.low = o * (1 - N.price.scale)), (0 == r.length || 1 == r.length && r[0] == i[0]) && i.length > 0 ? N.price.low < 0 && (N.price.low = 0) : r.length > 0 && (0 == i.length || 1 == i.length && (i[0], r[0])), N.allowScale ? N.allowScale = !1 : N.price.range = N.price.high - N.price.low, N.price.range = N.price.high - N.price.low, n && (DEBUG && P(N.price), N.price.range = N.price.high - N.price.low, N.price.range <= 0 && (N.price.range = 1), N.price.high < N.price.low && (N.price.high = N.price.low + 1 / RTBTC.quoteInt()), N.price.scale < N.price.minScale ? N.price.scale = N.price.minScale : N.price.scale > N.price.maxScale && (N.price.scale = N.price.maxScale), DEBUG && P("Scale: " + N.price.scale + ", range: " + N.price.range))
                    }
                    var a, s = 0;
                    for (N.sums.bid = [], a = 0; a < O.bid.amount.length && (s += O.bid.amount[a] / RTBTC.baseInt(), N.sums.bid[a] = s, !(O.bid.price[a] / t < N.price.low)); a++);
                    for (s = 0, N.sums.ask = [], a = 0; a < O.ask.amount.length && (s += O.ask.amount[a] / RTBTC.baseInt(), N.sums.ask[a] = s, !(O.ask.price[a] / t > N.price.high)); a++);
                    var l = 0,
                        c = 0;
                    l = O.ask.price[N.sums.ask.length - 1] > N.price.high ? N.sums.ask[N.sums.ask.length - 2] : N.sums.ask[N.sums.ask.length - 1];
                    c = O.bid.price[N.sums.bid.length - 1] < N.price.low ? N.sums.bid[N.sums.bid.length - 2] : N.sums.bid[N.sums.bid.length - 1];
                    N.volume = Math.max(l, c), N.volume *= 1.15, N.flags.recompute = !1, N.flags.redraw.base = !0, N.flags.redraw.bid = !0, N.flags.redraw.ask = !0, void 0 === N.asdf && (P(N), N.asdf = !0)
                }(), N.flags.redraw.base) {
                e.clearRect(0, 0, N.w, N.h),
                    function(e, t) {
                        void 0 === t && (t = !1);
                        var n = N.px.lbl.h + N.px.lbl.tick + 1,
                            r = N.h - n;
                        e.fillStyle = N.colors.fill.bg,
                            function(e, t, n, r, i) {
                                e.fillRect(0 | t, 0 | n, 0 | r, 0 | i)
                            }(e, 0, r, N.w, n), e.strokeStyle = N.colors.stroke.border, e.beginPath(), v(e, 0, r), b(e, N.w, r), e.stroke()
                    }(e), f.clearRect(0, N.h - N.px.lbl.h - 2 * N.px.lbl.tick - 2, N.w, N.px.lbl.h + 2 * N.px.lbl.tick + 2), f.font = N.font.labels;
                var g = f.measureText(N.volume).width;
                f.clearRect(0, 0, N.px.lbl.tick + g + 5, N.h - N.px.lbl.h - N.px.lbl.tick - 1),
                    function(e, t) {
                        (function(e, t) {
                            e.font = N.font.labels, e.fillStyle = N.colors.fill.label, e.strokeStyle = N.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "center";
                            var n, r, i = 1 / RTBTC.quoteInt(),
                                a = 7,
                                s = 1.5 * N.font.size,
                                l = 0,
                                c = [1e-6, 2e-5, 1e-4, 2e-4, 5e-4, .001, .01, .5, 1, 2, 2.5, 5],
                                u = 1e-8,
                                f = !1;
                            for (i = 1e-8, n = 0; n < 15; n++) {
                                for (a = Math.max(Math.abs(Math.log(i) / Math.LN10) + 1, 2), r = 0; r < c.length; r++)
                                    if (u = i * c[r], l = e.measureText(N.price.high.toFixed(a)).width, x(2 * u) - x(u) >= l + s) {
                                        f = !0;
                                        break
                                    }
                                if (f) break;
                                i *= 10
                            }
                            N.price.decimals = a;
                            var d = Math.ceil(N.price.high / u) * u,
                                p = x(d),
                                h = "";
                            N.settings.grid && (t.strokeStyle = N.colors.stroke.grid, t.beginPath());
                            e.beginPath();
                            for (; d >= N.price.low && !(p < 0);) h = d.toFixed(a),
                                function(e, t, n) {
                                    var r = N.h - (N.px.lbl.h - N.px.lbl.tick) / 2 - 2,
                                        i = x(n);
                                    v(e, i, N.h - N.px.lbl.h - 2 * N.px.lbl.tick - 1), b(e, i, N.h - N.px.lbl.h - .5 * N.px.lbl.tick), e.fillText(t, i, r)
                                }(e, h, d), N.settings.grid && o(t, p, N.DOTTED), p = x(d -= u);
                            e.stroke(), N.settings.grid && t.stroke()
                        })(e, t),
                        function(e, t) {
                            e.font = N.font.labels, e.fillStyle = N.colors.fill.label, e.strokeStyle = N.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "left";
                            var n, r, i = 1e-8,
                                o = 8,
                                s = .625 * N.font.size,
                                l = N.px.lbl.font,
                                c = [1, 2, 2.5, 5],
                                u = 1e-8,
                                f = !1;
                            for (n = 0; n < 20; n++) {
                                for (o = Math.max(Math.abs(Math.log(i) / Math.LN10) + 1, 2), r = 0; r < c.length; r++)
                                    if (u = i * c[r], y(u) - y(2 * u) >= l + s) {
                                        f = !0;
                                        break
                                    }
                                if (f) break;
                                i *= 10
                            }
                            i >= 1 && (o = 0);
                            var d = u,
                                h = y(d),
                                g = "";
                            N.settings.grid && (t.strokeStyle = N.colors.stroke.grid, t.beginPath());
                            e.beginPath();
                            for (; d < N.volume;) g = numberWithCommas(d.toFixed(o)),
                                function(e, t, n, r) {
                                    var i = y(n);
                                    p(e, t, i, r)
                                }(e, g, d), N.settings.grid && a(t, h, N.DOTTED), h = y(d += u);
                            e.stroke(), N.settings.grid && t.stroke()
                        }(e, t)
                    }(f, e), N.flags.redraw.base = !1
            }
            var w = N.flags.redraw.bid || N.flags.redraw.ask;
            N.flags.redraw.bid && (! function(e, t) {
                e.clearRect(0, 0, N.w, N.h), e.strokeStyle = N.colors.stroke.bid, N.settings.fill && (t.clearRect(0, 0, N.w, N.h), t.fillStyle = N.colors.fill.down, i(t, N.sums.bid, O.bid.price, !0));
                var n = !1;
                if (N.interacted && O.bid.price.length > 0) {
                    var o = O.bid.price[0] / RTBTC.quoteInt();
                    N.px.crosshairs.x <= x(o) && (c(), n = !0)
                }
                r(e, N.sums.bid, O.bid.price, !0), n && l(N.mouse.x, N.mouse.y)
            }(s, t), N.flags.redraw.bid = !1), N.flags.redraw.ask && (! function(e, t) {
                e.clearRect(0, 0, N.w, N.h), e.strokeStyle = N.colors.stroke.ask, N.settings.fill && (t.clearRect(0, 0, N.w, N.h), t.fillStyle = N.colors.fill.up, i(t, N.sums.ask, O.ask.price, !1));
                var n = !1;
                if (N.interacted && O.ask.price.length > 0) {
                    var o = O.ask.price[0] / RTBTC.quoteInt();
                    N.px.crosshairs.x >= x(o) && (c(), n = !0)
                }
                r(e, N.sums.ask, O.ask.price, !1), n && l(N.mouse.x, N.mouse.y)
            }(u, n), N.flags.redraw.ask = !1), w && function(e) {
                e.clearRect(0, N.h - N.px.lbl.h - N.px.lbl.tick - 1, N.w, N.px.lbl.h + N.px.lbl.tick + 1), e.clearRect(0, 0, N.w, N.font.overlaySize + N.px.lbl.tick + 5);
                var t = 0,
                    n = 0;
                try {
                    t = O.bid.price.length, n = O.ask.price.length
                } catch (e) {
                    return
                }
                if (0 == t && 0 == n) return;
                var r = O.bid.price[0] / RTBTC.quoteInt(),
                    i = O.ask.price[0] / RTBTC.quoteInt(),
                    o = "",
                    a = 0,
                    s = 0,
                    l = i > 0 ? 100 * (i - r) / i : NaN;
                e.font = N.font.labels, e.lineWidth = 1, e.fillStyle = N.colors.fill.crosshair, e.textAlign = "center", e.textBaseline = "middle", i > N.price.low && i < N.price.high && (o = Currency.format(RTBTC.quote(), i), a = x(i), e.strokeStyle = N.colors.stroke.ask, m(e, a, e.measureText(o).width), e.fillStyle = N.colors.fill.flagtext, d(e, o, a));
                r > N.price.low && r < N.price.high && (e.fillStyle = N.colors.fill.crosshair, o = Currency.format(RTBTC.quote(), r), s = x(r), e.strokeStyle = N.colors.stroke.bid, m(e, s, e.measureText(o).width), e.fillStyle = N.colors.fill.flagtext, d(e, o, s));
                i > N.price.low && i < N.price.high && r > N.price.low && r < N.price.high && !isNaN(l) && (o = l.toFixed(2) + "%", e.fillStyle = N.colors.fill.ordertext, e.strokeStyle = N.colors.stroke.order, e.textAlign = "center", e.textBaseline = "top", e.font = N.font.overlays, e.fillText(o, (a + s) / 2, 1), e.beginPath(), v(e, s, N.font.overlaySize + N.px.lbl.tick + 3), b(e, s, N.font.overlaySize + 3), b(e, a, N.font.overlaySize + 3), b(e, a, N.font.overlaySize + N.px.lbl.tick + 3), e.stroke())
            }(h), A()
        }

        function n(e) {
            N.flags.recompute = !0, e ? t() : window.reqAnimFrame(t)
        }

        function r(e, t, n, r, i) {
            if (0 != n.length) {
                var o, a, s, l = t.length,
                    c = RTBTC.quoteInt(),
                    u = x(n[l - 1] / c),
                    f = u,
                    d = y(t[l - 1]),
                    p = u,
                    h = void 0 !== i,
                    g = h ? x(i) : r ? N.w + 1 : -1;
                if (e.beginPath(), h)
                    for (p = u = g, o = l - 1; o >= 0; o--)
                        if (r && n[o] / c > i || !r && n[o] / c < i) {
                            l = o + 1;
                            break
                        }
                for (v(e, u, s = y(t[l - 1])), !h && u > 0 && (N.yVals[u] = s), o = l - 1; o >= 0; o--) {
                    if (u = x(n[o] / c), r && u > p || !r && u < p) {
                        if (s = y(t[o]), r && u > p + 1 && b(e, p + 1, s), !r && u < p - 1 && b(e, p - 1, s), b(e, u, s), !h && u > 0 && (N.yVals[u] = s), !h) {
                            if (r && u > p + 1)
                                for (a = p + 1; a < u; a++) N.yVals[a] = void 0;
                            if (!r && u < p - 1)
                                for (a = p - 1; a > u; a--) N.yVals[a] = void 0
                        }
                        p = u
                    }
                    if (u < -100 * N.w || u > 100 * N.w) {
                        DEBUG && P(O), DEBUG && P("n: " + l + ", curInt: " + c + ", prices[n-1]: " + n[l - 1] + ", x: " + u + ", xf: " + f + ", sums[n-1]: " + t[l - 1] + ", yf: " + d + ", ");
                        break
                    }
                }
                e.stroke()
            }
        }

        function i(e, t, n, r, i) {
            if (0 != n.length) {
                var o, a = t.length,
                    s = RTBTC.quoteInt(),
                    l = x(n[a - 1] / s),
                    c = l,
                    u = l,
                    f = 0,
                    d = y(0),
                    p = e.createLinearGradient(0, 0, 0, d),
                    h = void 0 !== i,
                    g = h ? x(i) : r ? N.w + 1 : -1;
                if (e.beginPath(), h)
                    for (l = g, u = g, c = g, o = a - 1; o >= 0; o--)
                        if (r && n[o] / s > i || !r && n[o] / s < i) {
                            a = o + 1;
                            break
                        }
                for (v(e, l, f = y(t[a - 1])), o = a - 1; o >= 0; o--) l = x(n[o] / s), (r && l > u || !r && l < u) && (f = y(t[o]), r && l > u + 1 && b(e, u + 1, f), !r && l < u - 1 && b(e, u - 1, f), b(e, l, f), u = l);
                b(e, u, d), b(e, c, d), e.closePath(), p.addColorStop(0, e.fillStyle), p.addColorStop(1, N.colors.fill.blankBG), e.fillStyle = p, e.fill()
            }
        }

        function o(e, t, n) {
            var r, i = N.h - N.px.lbl.h - N.px.lbl.tick - 2;
            switch (v(e, t, 0), r = 0, n) {
                case N.DOTTED:
                    for (; r < i;) b(e, t, ++r), v(e, t, ++r);
                    break;
                case N.DASHED:
                    for (; r < i;) b(e, t, r = (r += 6) > i ? i : r), v(e, t, r += 2);
                    break;
                case N.DASHDOT:
                    for (; r < i && (r += 7, r = r > i ? i : r, b(e, t, r), !((r += 4) >= i));) v(e, t, r), b(e, t, r = (r += 2) > i ? i : r), v(e, t, r += 4);
                    break;
                case N.SOLID:
                default:
                    b(e, t, i)
            }
        }

        function a(e, t, n) {
            var r, i = N.w;
            switch (v(e, i, t), r = i, n) {
                case N.DOTTED:
                    for (; r > 1;) b(e, --r, t), v(e, --r, t);
                    break;
                case N.DASHED:
                    for (; r > 0;) b(e, r = (r -= 6) < 0 ? 0 : r, t), v(e, r -= 2, t);
                    break;
                case N.DASHDOT:
                    for (; r > 0 && (r -= 7, r = r < 0 ? 0 : r, b(e, r, t), !((r -= 4) <= 0));) v(e, r, t), b(e, r = (r -= 2) < 0 ? 0 : r, t), v(e, r -= 4, t);
                    break;
                case N.SOLID:
                default:
                    b(e, 0, t)
            }
        }

        function s(e) {
            var t = N.h - N.px.lbl.h - N.px.lbl.tick - 2;
            if (O.bid.price.length > 0 && O.ask.price.length > 0) {
                var n = O.bid.price[0] / RTBTC.quoteInt(),
                    r = O.ask.price[0] / RTBTC.quoteInt(),
                    i = x(n),
                    o = x(r);
                if (e > i && e < o) return t;
                if (void 0 !== N.yVals[e]) return N.yVals[e];
                N.price.high, N.price.low;
                var a = e;
                if (k(e) >= r)
                    for (; Math.ceil(1e6 * k(--a)) / 1e6 >= r;) {
                        if (void 0 !== N.yVals[a]) return N.yVals[a];
                        if (a <= 0) break
                    } else if (k(e) <= n)
                        for (; Math.floor(1e6 * k(++a)) / 1e6 <= n;) {
                            if (void 0 !== N.yVals[a]) return N.yVals[a];
                            if (a >= N.w) break
                        }
            }
            return t
        }

        function l(e, t) {
            N.mouse.shift && (f(), function(e, t) {
                var n = N.canvas.sweep[0].getContext("2d"),
                    o = N.canvas.sweepFill[0].getContext("2d"),
                    a = k(e),
                    s = O.bid.price[0] / RTBTC.quoteInt(),
                    l = O.ask.price[0] / RTBTC.quoteInt();
                n.clearRect(0, 0, N.w, N.h), n.strokeStyle = N.colors.stroke.order, o.clearRect(0, 0, N.w, N.h), o.fillStyle = N.colors.fill.ordertext, a >= l ? (i(o, N.sums.ask, O.ask.price, !1, a), r(n, N.sums.ask, O.ask.price, !1, a)) : a <= s && (i(o, N.sums.bid, O.bid.price, !0, a), r(n, N.sums.bid, O.bid.price, !0, a))
            }(e));
            var n = N.canvas.i[0].getContext("2d");
            if (!T(e, t)) {
                var o = k(e),
                    a = s(e),
                    l = function(e) {
                        return (1 - e / (N.h - N.px.lbl.h - N.px.lbl.tick - 2)) * N.volume
                    }(a);
                c(n), n.font = N.font.labels, n.lineWidth = 1, n.fillStyle = N.colors.fill.crosshair, n.strokeStyle = N.colors.stroke.crosshair, n.beginPath(), n.arc(e + .5, a + .5, 2, 0, TWOPI, !1), n.stroke();
                var u = Currency.format(RTBTC.quote(), o),
                    h = l.toFixed(N.volDecimals);
                m(n, e, n.measureText(u).width),
                    function(e, t, n) {
                        var r = N.px.lbl.tick + 2 + n + 3,
                            i = N.px.lbl.font / 2;
                        t = g(t, N.px.lbl.font + 2), e.beginPath(), v(e, 0, t), b(e, i, t - 1 - i), e.lineTo(.6 + (0 | r), .5 + (t - 1 - i | 0)), v(e, r, t - 1 - i), b(e, r, t + 1 + i), b(e, i, t + 1 + i), b(e, 0, t), e.fill(), e.stroke()
                    }(n, a, n.measureText(h).width), n.fillStyle = N.colors.fill.flagtext, n.textAlign = "left", n.textBaseline = "middle", p(n, h, a, !0), n.textAlign = "center", d(n, u, e), N.px.crosshairs.x = e, N.px.crosshairs.y = t, N.interacted = !0
            }
        }

        function c(e, t) {
            N.interacted = !1;
            var n = e || N.canvas.i[0].getContext("2d");
            if (!0 !== t) {
                n.font = N.font.labels;
                var r = s(N.px.crosshairs.x),
                    i = n.measureText(Currency.format("CNY", N.volume, N.volDecimals)).width + N.px.lbl.tick + 6;
                n.clearRect(N.px.crosshairs.x - 4, r - 4, 8, 8), n.clearRect(0, N.h - N.px.lbl.h - N.px.lbl.tick - 1, N.w, N.px.lbl.h + N.px.lbl.tick + 1), n.clearRect(0, r - N.px.lbl.font - 3, i, 2 * N.px.lbl.font + 6)
            } else n.clearRect(0, 0, N.w, N.h)
        }

        function u() {
            window.reqAnimFrame(function() {
                c()
            })
        }

        function f() {
            var e = N.canvas.sweep[0].getContext("2d"),
                t = N.canvas.sweepFill[0].getContext("2d");
            e.clearRect(0, 0, N.w, N.h), t.clearRect(0, 0, N.w, N.h)
        }

        function d(e, t, n) {
            var r = N.h - (N.px.lbl.h - N.px.lbl.tick) / 2 - 2;
            e.fillText(t, h(n, 10 + e.measureText(t).width), r)
        }

        function p(e, t, n, r) {
            !0 !== r && (v(e, 0, n), b(e, N.px.lbl.tick, n)), n = g(n, N.px.lbl.font + 2), e.save(), e.strokeStyle = N.colors.fill.blankBG, e.strokeText(t, N.px.lbl.tick + 2, n), e.restore(), e.fillText(t, N.px.lbl.tick + 2, n)
        }

        function h(e, t) {
            return e > N.w - t / 2 ? N.w - t / 2 : e < t / 2 ? t / 2 : e
        }

        function g(e, t) {
            var n = N.h - N.px.lbl.h - N.px.lbl.tick - 1 - t / 2;
            return e > n ? n : e < t / 2 ? t / 2 : e
        }

        function m(e, t, n) {
            var r = 0 | h(t, n + 10),
                i = n / 2 + 5 | 0,
                o = h(t, 7);
            e.beginPath(), v(e, r - i, N.h - 1), b(e, r + i, N.h - 1), b(e, r + i, N.h - N.px.lbl.h), b(e, o + 3.5, N.h - N.px.lbl.h), b(e, o, N.h - N.px.lbl.h - 4), b(e, o - 3.5, N.h - N.px.lbl.h), b(e, r - i, N.h - N.px.lbl.h), b(e, r - i, N.h - 1), e.fill(), e.stroke()
        }

        function v(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function b(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function y(e) {
            var t = 1 - e / N.volume;
            return (N.h - N.px.lbl.h - N.px.lbl.tick - 2) * t | 0
        }

        function x(e) {
            return N.w * (e - N.price.low) / N.price.range | 0
        }

        function k(e) {
            return N.price.low + e / N.w * N.price.range
        }

        function T(e, t) {
            return !(t < N.h - N.px.lbl.h - N.px.lbl.tick - 1)
        }

        function S(e) {
            if (e.offsetX) N.mouse.x = e.offsetX, N.mouse.y = e.offsetY;
            else if (e.pageX) {
                var t = N.canvas.i.offset();
                N.mouse.x = e.pageX - t.left, N.mouse.y = e.pageY - t.top
            }
            N.mouse.shift = e.shiftKey
        }

        function C() {
            if (!isNaN(parseInt(N.w)) && (N.w = 0 | N.w, N.w >= 0)) {
                try {
                    N.orders = new Array(N.w + 1), N.yVals = new Array(N.w + 1)
                } catch (e) {
                    DEBUG && P("Exception on Array size");
                    try {
                        "console" in window && console.log("Warning: " + N.w)
                    } catch (e) {}
                }
                n()
            }
        }

        function E() {
            N.flags.recompute = !0, N.flags.redraw.base = !0, N.flags.redraw.bid = !0, N.flags.redraw.ask = !0, c(null, !0), n(!0)
        }

        function A() {
            var e, t, n = UserAccount.orders(),
                r = null,
                i = 0;
            if (n.hasOwnProperty("BIJIE")) {
                n = n.BIJIE;
                for (e in n) n.hasOwnProperty(e) && (i++, null == r && ((r = N.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, N.w, N.h), r.text = N.font.overlays, r.textBaseline = "bottom", r.strokeStyle = N.colors.stroke.order, r.fillStyle = N.colors.fill.ordertext, r.beginPath()), (t = n[e]).quote == RTBTC.quote() && function(e, t) {
                    var n = x(t.price),
                        r = 0,
                        i = "",
                        o = "",
                        a = t.quote;
                    if (n < 0 || n > N.w) return;
                    r = s(n), v(e, n, r), b(e, n - N.px.lbl.tick / 2, r - N.px.lbl.tick),
                        function(e, t, n) {
                            e.lineTo(.6 + (0 | t), .5 + (0 | n))
                        }(e, n + N.px.lbl.tick / 2, r - N.px.lbl.tick), b(e, n, r), "buy" == t.action ? (i = _("BUY"), e.textAlign = "left", n -= N.px.lbl.tick / 2) : "sell" == t.action && (i = _("SELL"), e.textAlign = "right", n += N.px.lbl.tick / 2);
                    o = Currency.format(a, t.price), i += " " + RTBTC.numFormatShort(t.amount, 8) + " @ " + o, e.fillText(i, n, r - 1.5 * N.px.lbl.tick)
                }(r, t));
                null != r && (r.fill(), r.stroke()), 0 == i && N.userOrders > 0 && (r = N.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, N.w, N.h), N.userOrders = i
            }
        }
        var N = {
                element: "",
                parent: null,
                module: null,
                self: null,
                canvas: {
                    bg: null,
                    bidFill: null,
                    askFill: null,
                    bid: null,
                    ask: null,
                    sweepFill: null,
                    sweep: null,
                    orders: null,
                    userOrders: null,
                    axes: null,
                    lbl: null,
                    i: null
                },
                w: 0,
                h: 0,
                price: {
                    low: 50,
                    high: 100,
                    range: 50,
                    scale: .1,
                    defaultScale: .1,
                    minScale: 1e-5,
                    maxScale: 1e5,
                    decimals: 4
                },
                volume: 100,
                volDecimals: 2,
                orders: [],
                orderDelay: 1250,
                userOrders: 0,
                yVals: [],
                allowScale: !1,
                sums: {
                    bid: [],
                    ask: []
                },
                log: {
                    m: 0,
                    b: 0,
                    b10: 0
                },
                px: {
                    pad: 5,
                    lbl: {
                        w: 65,
                        h: 16,
                        tick: 4,
                        halftick: 2,
                        font: 11
                    },
                    crosshairs: {
                        x: 0,
                        y: 0
                    }
                },
                flags: {
                    redraw: {
                        base: !0,
                        bid: !0,
                        ask: !0
                    },
                    recompute: !0,
                    widget: !1
                },
                interacted: !1,
                mouse: {
                    down: !1,
                    zoom: !1,
                    x: 0,
                    y: 0,
                    sx: 0,
                    sy: 0,
                    s0: null,
                    shift: !1
                },
                colors: Colors.c1,
                SOLID: 0,
                DOTTED: 1,
                DASHED: 2,
                DASHDOT: 3,
                font: {
                    precision: 6,
                    labels: '11px/1.0em Consolas, "Courier New", monospace',
                    size: 11,
                    lineHeight: 1,
                    face: 'Consolas, "Courier New", monospace',
                    overlays: "10px/1.0em Arial, sans-serif",
                    overlaySize: 10,
                    heading: "12px/1.0em Arial, sans-serif",
                    headingBold: "bold 12px/1.0em Arial, sans-serif",
                    headingSize: 12
                },
                watermark: "© RTBTC",
                settings: {
                    grid: !0,
                    fill: !0,
                    orders: !0
                },
                debug: RTBTC.isDebug()
            },
            P = RTBTC.debug,
            O = OBD.book;
        return {
            build: function(t, r, i) {
                return N.element = t, N.parent = r,
                    function() {
                        N.parent.addClass("visualdepth"), N.element = $(".box-inner", N.parent), N.element.empty(), N.w = N.element.width(), N.h = N.element.height(), N.canvas.bg = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 100), N.canvas.bidFill = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 101), N.canvas.askFill = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 102), N.canvas.bid = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 103), N.canvas.sweepFill = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 104), N.canvas.sweep = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 105), N.canvas.ask = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 106), N.canvas.orders = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 107), N.canvas.userOrders = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 108), N.canvas.axes = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 109), N.canvas.lbl = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 110), N.canvas.i = $("<canvas/>").attr("width", N.w + "px").attr("height", N.h + "px").attr("z-index", 111), N.element.append(N.canvas.bg).append(N.canvas.bidFill).append(N.canvas.askFill).append(N.canvas.bid).append(N.canvas.ask).append(N.canvas.sweepFill).append(N.canvas.sweep).append(N.canvas.orders).append(N.canvas.userOrders).append(N.canvas.axes).append(N.canvas.lbl).append(N.canvas.i), N.defaultColors = deepCopy(N.colors);
                        var e = N.canvas.bg[0].getContext("2d");
                        e.font = N.font.labels, N.px.lbl.w = e.measureText("100.00").width + N.px.pad + 2
                    }(), N.canvas.i.on({
                        mousedown: function(e) {
                            S(e), N.mouse.sx = N.mouse.x, N.mouse.sy = N.mouse.y, N.mouse.s0 = N.price.scale, N.mouse.down = !0, T(N.mouse.x, N.mouse.y) && (N.mouse.zoom = !0), stopEvent(e)
                        },
                        click: function(e) {
                            S(e), N.mouse.sx = N.mouse.x, N.mouse.sy = N.mouse.y, N.mouse.s0 = N.price.scale, l(N.mouse.x, N.mouse.y)
                        },
                        mouseup: function(e) {
                            N.mouse.down = !1, N.mouse.zoom = !1, e.ctrlKey && e.shiftKey || function(e) {
                                if (S(e), !T(N.mouse.x, N.mouse.y)) {
                                    var t = +k(N.mouse.x).toFixed(N.price.decimals),
                                        n = "",
                                        r = 0,
                                        i = {
                                            side: "",
                                            price: t
                                        };
                                    O.bid.price.length > 0 && t <= O.bid.price[0] / RTBTC.quoteInt() ? N.mouse.shift ? (n = "sell", r = OBD.sumToPrice(t, "bid"), i.amount = r) : n = "buy" : O.ask.price.length > 0 && t >= O.ask.price[0] / RTBTC.quoteInt() && (N.mouse.shift ? (n = "buy", r = OBD.sumToPrice(t, "ask"), i.amount = r) : n = "sell"), i.side = n, RTBTC.trigger("set-order-entry-" + n, i), N.mouse.shift && f()
                                }
                            }(e)
                        },
                        mouseout: function(e) {
                            N.mouse.down = !1, N.mouse.zoom = !1, u(), f()
                        },
                        mousemove: function(e) {
                            N.mouse.down ? (function(e) {
                                if (S(e), N.mouse.zoom) {
                                    var t = N.mouse.x - N.mouse.sx,
                                        r = N.price.scale;
                                    e.shiftKey ? N.price.scale = N.mouse.s0 * (1 - t / 1e3) : N.price.scale = N.mouse.s0 * (1 - t / 100), N.price.scale > N.price.maxScale && (N.price.scale = N.price.maxScale), N.price.scale < N.price.minScale && (N.price.scale = N.price.minScale), N.price.scale != r && n()
                                }
                            }(e), N.mouse.zoom && N.canvas.i.css("cursor", "e-resize")) : (N.mouse.shift && !e.shiftKey && f(), S(e), T(N.mouse.x, N.mouse.y) ? (u(), N.canvas.i.css("cursor", "e-resize")) : (l(N.mouse.x, N.mouse.y), N.canvas.i.css("cursor", "pointer")))
                        },
                        dblclick: function(e) {
                            N.mouse.down = !1, N.mouse.zoom = !1, N.price.scale != N.price.defaultScale && (N.price.scale = N.price.defaultScale, N.flags.recompute = !0, n(), stopEvent(e))
                        }
                    }), N.canvas.i.bind("pinch", function(e, t) {
                        if (null != t.scale) {
                            w = N.px.bar.width;
                            var r = N.price.scale;
                            N.price.scale *= t.scale, N.price.scale > N.price.maxScale && (N.price.scale = N.price.maxScale), N.price.scale < N.price.minScale && (N.price.scale = N.price.minScale), N.price.scale != r && n()
                        }
                        t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
                    }), N.canvas.i.bind("mousewheel", function(e, t, r, i) {
                        N.allowScale = !0, stopEvent(e);
                        var o = 1;
                        if (void 0 !== r || void 0 !== i) {
                            0 != r ? o = 1 - .01 * r : 0 != i && (o = 1 - .1 * i);
                            var a = N.price.scale;
                            N.price.scale *= o, N.price.scale > N.price.maxScale && (N.price.scale = N.price.maxScale), N.price.scale < N.price.minScale && (N.price.scale = N.price.minScale), N.price.scale != a && n()
                        }
                    }), RTBTC.handler("newbook", N.element, E), RTBTC.handler("orders", N.element, A), e(i), window.setTimeout(function() {
                        RTBTC.trigger("what-theme", null)
                    }, 100), this
            },
            module: function(e) {
                return N.module = e, N.module.setTitle(_("Visual Depth")), RTBTC.handler("newbook", N.module.id(), N.self.onBook), RTBTC.handler("depth", N.module.id(), N.self.onDepth), RTBTC.handler("theme", N.module.id(), N.self.onTheme), RTBTC.handler("orders", N.module.id(), A), RTBTC.handler("order-canceled", N.module.id(), A), this
            },
            self: function(e) {
                N.self = e
            },
            settings: function() {
                return [$("<p/>").append(RTBTC.toggle(N.settings.fill, function() {
                    N.settings.fill = !0
                }, function() {
                    N.settings.fill = !1,
                        function() {
                            var e = N.canvas.bidFill[0].getContext("2d");
                            e.clearRect(0, 0, N.w, N.h), (e = N.canvas.askFill[0].getContext("2d")).clearRect(0, 0, N.w, N.h)
                        }()
                }, function() {
                    n()
                })).append($("<span/>").addClass("control-label").html(_("Fill the Chart"))), $("<p/>").append(RTBTC.toggle(N.settings.grid, function() {
                    N.settings.grid = !0
                }, function() {
                    N.settings.grid = !1
                }, function() {
                    n()
                })).append($("<span/>").addClass("control-label").html(_("Show Grid")))]
            },
            save: function() {
                return function() {
                    var e = {};
                    return e.g = N.settings.grid, e.f = N.settings.fill, e.s = N.price.scale, e
                }()
            },
            load: function(t) {
                e(t), n()
            },
            unload: function() {
                RTBTC.unregisterAll(N.module.id())
            },
            onDepth: function(e) {
                ! function(e) {
                    var n = e.price / RTBTC.quoteInt();
                    ! function() {
                        var e = O.bid.amount.length,
                            t = O.ask.amount.length,
                            n = RTBTC.quoteInt();
                        O.bid.price[e - 1] / n < N.price.low && N.sums.bid.length > 0 && O.bid.price[N.sums.bid.length - 1] > N.price.low ? N.flags.recompute = !0 : O.ask.price[t - 1] / n > N.price.high && N.sums.ask.length > 0 && O.ask.price[N.sums.ask.length - 1] < N.price.high && (N.flags.recompute = !0)
                    }(), "bid" == e.location ? n >= N.price.low && (N.flags.redraw.bid = !0, t()) : "ask" == e.location && n <= N.price.high && (N.flags.redraw.ask = !0, t()), N.settings.orders && function(e) {
                        var t = N.canvas.orders[0].getContext("2d"),
                            n = x(e.price / RTBTC.quoteInt());
                        if (!(n < 0 || n > N.w)) {
                            if (e.amount > 0) t.strokeStyle = N.colors.stroke.up;
                            else {
                                if (!(e.amount < 0)) return;
                                t.strokeStyle = N.colors.stroke.down
                            }
                            N.orders.length > n && n >= 0 && (t.beginPath(), v(t, n, N.h), b(t, n, N.h - N.px.lbl.h - N.px.lbl.tick), t.stroke(), void 0 === N.orders[n] ? N.orders[n] = 1 : N.orders[n]++), window.setTimeout(function(e) {
                                return function() {
                                    ! function(e) {
                                        if (N.orders.length > e && e >= 0) {
                                            if (void 0 === N.orders[e]) return;
                                            if (--N.orders[e] > 0) return;
                                            N.canvas.orders[0].getContext("2d").clearRect(e, N.h - N.px.lbl.h - N.px.lbl.tick, 1, N.px.lbl.h + N.px.lbl.tick)
                                        }
                                    }(e)
                                }
                            }(n), N.orderDelay)
                        }
                    }(e)
                }(e)
            },
            onTheme: function(e) {
                ! function(e) {
                    Colors.hasOwnProperty(e) && (N.colors = Colors[e], n())
                }(e)
            },
            onBook: function(e) {
                E()
            },
            resize: function(e) {
                window.reqAnimFrame(function() {
                    var e = $(N.element).width(),
                        t = $(N.element).height();
                    N.w == e && N.h == t || (N.w = e, N.h = t, $("canvas", N.element).each(function(e, t) {
                        $(t).attr("width", N.w + "px").attr("height", N.h + "px")
                    }), n(!0))
                }), C()
            },
            resizeStop: function() {
                C()
            },
            drag: function(e) {
                e
            },
            widget: function(e) {
                return null == e || void 0 === e ? N.flags.widget : (N.flags.widget = e, this)
            },
            internals: N.debug ? function() {
                return N
            } : function() {
                return {}
            }
        }
    },
    custLine = function() {
        function e() {
            window.reqAnimFrame(function() {
                ! function() {
                    d.canvas[0].getContext("2d").clearRect(0, 0, d.chart.w, d.chart.h);
                    for (var e = 0; e < d.objLines.length; e++) d.objLines[e].draw();
                    t()
                }()
            })
        }

        function t() {
            var e = f();
            p.globalCompositeOperation = "destination-out", p.fillStyle = "rgba(250,250,250,1)", p.beginPath(), p.rect(0, 0, d.chart.w, d.chart.h), n(p, e.x, e.y), r(p, e.x, e.y + e.h), r(p, e.x + e.w, e.y + e.h), r(p, e.x + e.w, e.y), r(p, e.x, e.y), p.closePath(), p.fill(), p.globalCompositeOperation = "source-over"
        }

        function n(e, t, n) {
            e.moveTo(.5 + (0 | t), .5 + (0 | n))
        }

        function r(e, t, n) {
            e.lineTo(.5 + (0 | t), .5 + (0 | n))
        }

        function i(e) {
            p.strokeStyle = C.line, p.lineWidth = 1, p.beginPath();
            for (i = 0; i < e.points.length; i++) {
                o = e.points[i];
                n(p, o[0], o[1]), r(p, o[2], o[3])
            }
            p.stroke(), p.fillStyle = C.text, p.textBaseline = "bottom", p.textAlign = "left", p.font = "12px Arial";
            var t = 0;
            if ("periodicLine" != e.name && "fibonacciSequence" != e.name || (t = 40), e.text.length > 0) {
                for (var i = 0; i < e.points.length; i++) {
                    var o = e.points[i];
                    p.fillText(e.text[i], o[0], o[1] + t)
                }
                p.stroke()
            }
            d.selectDrawObj && e.id == d.selectDrawObj.id && a(e)
        }

        function o(e) {
            p.fillStyle = p.strokeStyle = e.up ? C.upArrow : C.downArrow, p.lineWidth = 1, p.beginPath();
            var t = e.points[0];
            n(p, t[0], t[1]);
            for (var i = 0; i < e.points.length; i++) t = e.points[i], r(p, t[0], t[1]);
            p.stroke(), p.fill()
        }

        function a(e) {
            p.strokeStyle = C.pot, p.fillStyle = "black", p.lineWidth = 1;
            var t = 3;
            1 == e.large && (t = 5), e.pots.forEach(function(e) {
                p.beginPath(), p.arc(e[0] + .5, e[1] + .5, t, 0, 2 * Math.PI, !0), p.stroke(), p.beginPath(), p.arc(e[0] + .5, e[1] + .5, t - 1, 0, 2 * Math.PI, !0), p.fill()
            })
        }

        function s() {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return e() + e() + "-" + e() + "-" + e()
        }

        function l(e) {
            var t = !1;
            return e.forEach(function(e) {
                var n = d.mouse.x,
                    r = d.mouse.y,
                    i = e[0],
                    o = e[1],
                    a = e[2],
                    s = e[3],
                    l = s - o,
                    c = i - a,
                    u = a * o - i * s,
                    f = l,
                    p = c,
                    h = u + 5 * Math.sqrt(l * l + c * c),
                    g = l,
                    m = c,
                    v = u - 5 * Math.sqrt(l * l + c * c);
                f * n + p * r + h > 0 && g * n + m * r + v < 0 && -c * n + l * r + (c * i - l * o) > 0 && -c * n + l * r + (c * a - l * s) < 0 && (t = !0)
            }), t
        }

        function c(e) {
            var t = !1;
            return e.pots.forEach(function(n, r) {
                var i = d.mouse.x,
                    o = d.mouse.y;
                Math.sqrt((i - n[0]) * (i - n[0]) + (o - n[1]) * (o - n[1])) <= 5 && (e.selectPotIndex = r, t = !0)
            }), t
        }

        function u(e) {
            if (e.offsetX) d.mouse.x = e.offsetX, d.mouse.y = e.offsetY;
            else if (e.pageX) {
                var t = d.canvas.offset();
                d.mouse.x = e.pageX - t.left, d.mouse.y = e.pageY - t.top
            }
        }

        function f() {
            return {
                x: d.chart.offset,
                y: 0,
                w: d.chart.w - d.chart.offset - d.chart.px.lbl.w - d.chart.px.lbl.tick - 1,
                h: d.chart.slots[0].px + d.chart.slots[0].h
            }
        }
        var d = {
                canvas: $("#line"),
                chart: null,
                w: 0,
                h: 0,
                objLines: [],
                curLine: null,
                points: [],
                selectDrawObj: null,
                LINES: 0,
                CIRCLE: 1,
                RECT: 2,
                ARROW: 3,
                mouse: {},
                mouseOri: {}
            },
            p = d.canvas[0].getContext("2d");
        return {
            build: function() {
                return d.w = d.canvas.width(), d.h = d.canvas.height(), this
            },
            add: function(e, t) {
                switch (e) {
                    case "percentLine":
                        d.curLine = new function() {
                            this.name = "percentLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var e = [0, 1 / 8, .25, 1 / 3, 3 / 8, .5, 5 / 8, 2 / 3, .75, 7 / 8, 1];
                            this.init = function() {
                                var t = f();
                                this.points = [];
                                for (var n = d.chart.yToVal(0, d.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, d.mouse.y, t.w + t.x, d.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
                                return this.pots = [], this.pots.push([d.w / 2, d.mouse.y, 0]), this.pots.push([d.w / 2, d.mouse.y, 10]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.y - d.mouseOri.y;
                                    null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * e[r]
                                    }), this.pots.forEach(function(n, r, i) {
                                        n[1] += t * e[n[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * (1 - e[r])
                                    }), this.pots.forEach(function(n, r, i) {
                                        n[1] += t * (1 - e[n[2]])
                                    })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function(e, n, r) {
                                        e[1] = e[3] += t
                                    }), this.pots.forEach(function(e, n, r) {
                                        e[1] += t
                                    })), this.text = [];
                                    var n = this;
                                    this.points.forEach(function(t, r) {
                                        var i = d.chart.yToVal(0, t[1]);
                                        n.text.push((100 * e[r]).toFixed(2) + "% " + i.toFixed(2))
                                    }), d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "godPercentLine":
                        d.curLine = new function() {
                            this.name = "godPercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var e = [0, .191, .382, .5, .618, 1, 1.191, 1.382, 1.5, 1.618, 2];
                            this.init = function() {
                                var t = f();
                                this.points = [];
                                for (var n = d.chart.yToVal(0, d.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, d.mouse.y, t.w + t.x, d.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
                                return this.pots = [], this.pots.push([d.w / 2, d.mouse.y, 0]), this.pots.push([d.w / 2, d.mouse.y, 5]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.y - d.mouseOri.y;
                                    null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * e[r]
                                    }), this.pots.forEach(function(n, r, i) {
                                        n[1] += t * e[n[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * (1 - e[r])
                                    }), this.pots.forEach(function(n, r, i) {
                                        n[1] += t * (1 - e[n[2]])
                                    })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function(e, n, r) {
                                        e[1] = e[3] += t
                                    }), this.pots.forEach(function(e, n, r) {
                                        e[1] += t
                                    })), this.text = [];
                                    var n = this;
                                    this.points.forEach(function(t, r) {
                                        var i = d.chart.yToVal(0, t[1]);
                                        n.text.push((100 * e[r]).toFixed(2) + "% " + i.toFixed(2))
                                    }), d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "wavePercentLines":
                        d.curLine = new function() {
                            this.name = "wavePercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var e = [0, .25, .333, .5, 1];
                            this.init = function() {
                                var t = f();
                                this.points = [];
                                for (var n = d.chart.yToVal(0, d.mouse.y), r = 0; r < 5; r++) this.points.push([t.x, d.mouse.y, t.w + t.x, d.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
                                return this.pots = [], this.pots.push([d.w / 2, d.mouse.y, 0]), this.pots.push([d.w / 2, d.mouse.y, 4]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.y - d.mouseOri.y;
                                    null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * e[r]
                                    }), this.pots.forEach(function(n, r) {
                                        n[1] += t * e[n[2]]
                                    })) : 0 == this.selectPotIndex && (this.points.forEach(function(n, r, i) {
                                        n[1] = n[3] += t * (1 - e[r])
                                    }), this.pots.forEach(function(n, r, i) {
                                        n[1] += t * (1 - e[n[2]])
                                    })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function(e, n, r) {
                                        e[1] = e[3] += t
                                    }), this.pots.forEach(function(e, n, r) {
                                        e[1] += t
                                    })), this.text = [];
                                    var n = this;
                                    this.points.forEach(function(t, r) {
                                        var i = d.chart.yToVal(0, t[1]);
                                        n.text.push((100 * e[r]).toFixed(2) + "% " + i.toFixed(2))
                                    }), d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "fibonacciSequence":
                        d.curLine = new function() {
                            this.name = "fibonacciSequence", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var e = [];
                            this.id = s(), this.init = function() {
                                var t = f();
                                this.points = [], d.chart.yToVal(0, d.mouse.y);
                                for (var n = 0; n < 100; n++) 0 == n ? e.push(0) : e.push(n + e[n - 1]);
                                for (var r = d.chart.xToBar(d.mouse.x), i = 0; i < e.length; i++) {
                                    var o = d.chart.toPxX(r - e[i]);
                                    if (o > t.x + t.w) break;
                                    this.points.push([o, 0, o, t.h]), this.text.push(i)
                                }
                                return this.pots = [], this.pots.push([d.chart.toPxX(r), t.h / 2, 0]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = f();
                                    this.points = [], this.text = [];
                                    for (var n = d.chart.xToBar(d.mouse.x), r = 0; r < e.length; r++) {
                                        var i = d.chart.toPxX(n - e[r]);
                                        if (i > t.x + t.w) break;
                                        this.points.push([i, 0, i, t.h]), this.text.push(r)
                                    }
                                    this.pots.forEach(function(e, t, r) {
                                        e[0] = d.chart.toPxX(n)
                                    })
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "periodicLine":
                        d.curLine = new function() {
                            this.name = "periodicLine", this.points = [], this.pots = [], this.text = [], this.id = s(), this.selectPotIndex = 1;
                            var e = 0;
                            this.init = function() {
                                var e = f();
                                this.points = [], d.chart.yToVal(0, d.mouse.y);
                                for (var t = d.chart.xToBar(d.mouse.x), n = 0; n < 300; n++) {
                                    var r = d.chart.toPxX(t - n);
                                    this.points.push([r, 0, r, e.h]), this.text.push(n)
                                }
                                return this.pots = [], this.pots.push([d.chart.toPxX(t), e.h / 2, 0]), this.pots.push([d.chart.toPxX(t - 1), e.h / 2, 0]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    f();
                                    var t = d.mouse.x - d.mouseOri.x;
                                    if (null != this.selectPotIndex && 0 != t)
                                        if (0 == this.selectPotIndex) {
                                            e += t;
                                            for (var n = parseInt(e / (d.chart.px.bar.spacing + d.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += n * (d.chart.px.bar.spacing + d.chart.px.bar.width);
                                            this.pots[1][0] += n * (d.chart.px.bar.spacing + d.chart.px.bar.width), this.pots[0][0] += n * (d.chart.px.bar.spacing + d.chart.px.bar.width), e %= d.chart.px.bar.spacing + d.chart.px.bar.width
                                        } else {
                                            e += t;
                                            for (var n = parseInt(e / (d.chart.px.bar.spacing + d.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += r * n * (d.chart.px.bar.spacing + d.chart.px.bar.width), this.text[r] += n * r;
                                            this.pots[1][0] += n * (d.chart.px.bar.spacing + d.chart.px.bar.width), e %= d.chart.px.bar.spacing + d.chart.px.bar.width
                                        }
                                    d.mouseOri.x = d.mouse.x
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "lineSegment":
                        d.curLine = new function() {
                            this.name = "lineSegment", this.points = [], this.pots = [], this.text = [], this.id = s(), this.selectPotIndex = 1;
                            var e = 0;
                            this.init = function() {
                                f(), this.points = [];
                                for (var e = d.chart.yToVal(0, d.mouse.y), t = d.chart.xToBar(d.mouse.x), n = d.chart.barToIndex(t), r = new Date(d.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), i = d.chart.toPxX(t), o = d.chart.toPxY(e, 0), a = 0; a < 1; a++) this.points.push([i, o, i, o]), this.text.push(r);
                                return this.pots = [], this.pots.push([i, o]), this.pots.push([i, o]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.y - d.mouseOri.y,
                                        n = d.mouse.x - d.mouseOri.x;
                                    e += n;
                                    var r = parseInt(e / (d.chart.px.bar.spacing + d.chart.px.bar.width)) * (d.chart.px.bar.spacing + d.chart.px.bar.width);
                                    null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function(e, n, i) {
                                        e[0] += r, e[1] += t, e[2] += r, e[3] += t
                                    }), this.pots.forEach(function(e, n, i) {
                                        e[1] += t, e[0] += r
                                    })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
                                    var i = this.points[0],
                                        o = d.chart.yToVal(0, i[1]),
                                        a = d.chart.xToBar(i[0]),
                                        s = d.chart.barToIndex(a),
                                        l = d.chart.bars.data[s] ? new Date(d.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "";
                                    this.text.push(l + " " + o.toFixed(2)), o = d.chart.yToVal(0, i[3]), a = d.chart.xToBar(i[2]), s = d.chart.barToIndex(a), l = d.chart.bars.data[s] ? new Date(d.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + o.toFixed(2)), e %= d.chart.px.bar.spacing + d.chart.px.bar.width, d.mouseOri.y = d.mouse.y, d.mouseOri.x = d.mouse.x
                                }
                            }, this.draw = function() {
                                ! function(e) {
                                    p.strokeStyle = C.line, p.lineWidth = 1, p.beginPath();
                                    for (var t = 0; t < e.points.length; t++) i = e.points[t], n(p, i[0], i[1]), r(p, i[2], i[3]);
                                    p.stroke(), p.fillStyle = C.text, p.textBaseline = "bottom", p.textAlign = "left", p.font = "12px Arial";
                                    var i = e.points[0];
                                    p.fillText(e.text[0], i[0], i[1]), p.fillText(e.text[1], i[2], i[3]), p.stroke(), d.selectDrawObj && e.id == d.selectDrawObj.id && a(e)
                                }(this)
                            }
                        };
                        break;
                    case "regressionLine":
                        d.curLine = new function() {
                            function e(e, t) {
                                var n = d.chart.bars.data.slice(e, t + 1),
                                    r = n.length,
                                    i = (1 + r) / 2,
                                    o = 0,
                                    a = 0,
                                    s = 0;
                                n.forEach(function(e, t) {
                                    o += e[4], a += e[4] * (t + 1), s += (t + 1) * (t + 1)
                                });
                                var l, c, u = o / r,
                                    f = (a - r * i * u) / (s - r * i * i),
                                    p = u - f * i,
                                    h = p + 1 * f,
                                    g = p + f * r,
                                    m = 0,
                                    v = 0;
                                n.forEach(function(e, t) {
                                    (n = (e[2] - (t + 1) * f - p) / Math.sqrt(p * p + f * f)) > m && (m = n, l = t);
                                    var n;
                                    (n = (e[3] - (t + 1) * f - p) / Math.sqrt(p * p + f * f)) < v && (v = n, c = t)
                                });
                                var b = n[l || 0][2] - ((l || 0) + 1) * f,
                                    y = f,
                                    x = b + 1 * y,
                                    w = b + y * r,
                                    $ = n[c || 0][3] - ((c || 0) + 1) * f,
                                    k = f;
                                return [
                                    [h, g],
                                    [x, w],
                                    [$ + 1 * k, $ + k * r]
                                ]
                            }
                            this.name = "regressionLine", this.points = [], this.pots = [], this.text = [], this.id = s(), this.selectPotIndex = 1;
                            var t = 0;
                            this.init = function() {
                                var e = f();
                                this.points = [];
                                for (var t = d.chart.yToVal(0, d.mouse.y), n = d.chart.xToBar(d.mouse.x), r = (d.chart.barToIndex(n), d.chart.toPxX(n)), i = (d.chart.toPxY(t, 0), 0); i < 2; i++) this.points.push([r, 0, r, e.h]);
                                for (var o = 0; o < 3; o++) this.points.push([r, 0, r, 0]);
                                return this.pots = [], this.pots.push([r, e.h / 2]), this.pots.push([r, e.h / 2]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var n = d.mouse.y - d.mouseOri.y,
                                        r = d.mouse.x - d.mouseOri.x;
                                    t += r;
                                    var i = parseInt(t / (d.chart.px.bar.spacing + d.chart.px.bar.width)) * (d.chart.px.bar.spacing + d.chart.px.bar.width);
                                    null == this.selectPotIndex || 0 == n && 0 == i ? null != this.selectPotIndex || 0 == n && 0 == i || (this.points.forEach(function(e, t, n) {
                                        e[0] += i, e[2] += i
                                    }), this.pots.forEach(function(e, t, n) {
                                        e[0] += i
                                    })) : 1 == this.selectPotIndex ? (this.points[1][0] = this.points[1][2] += i, this.points[2][2] += i, this.points[3][2] += i, this.points[4][2] += i, this.pots[1][0] += i) : 0 == this.selectPotIndex && (this.points[0][0] = this.points[0][2] += i, this.points[2][0] += i, this.points[3][0] += i, this.points[4][0] += i, this.pots[0][0] += i), index1 = d.chart.barToIndex(d.chart.xToBar(this.points[0][0])), index2 = d.chart.barToIndex(d.chart.xToBar(this.points[1][0]));
                                    var o, a = 0,
                                        s = 0;
                                    index1 > index2 ? (o = e(index2, index1), a = d.chart.toPxY(o[0][0], 0), s = d.chart.toPxY(o[0][1], 0), y2 = d.chart.toPxY(o[1][0], 0), y3 = d.chart.toPxY(o[1][1], 0), y4 = d.chart.toPxY(o[2][0], 0), y5 = d.chart.toPxY(o[2][1], 0), this.points[2][3] = a, this.points[2][1] = s, this.points[3][3] = y2, this.points[3][1] = y3, this.points[4][3] = y4, this.points[4][1] = y5) : index1 < index2 ? (o = e(index1, index2), a = d.chart.toPxY(o[0][0], 0), s = d.chart.toPxY(o[0][1], 0), y2 = d.chart.toPxY(o[1][0], 0), y3 = d.chart.toPxY(o[1][1], 0), y4 = d.chart.toPxY(o[2][0], 0), y5 = d.chart.toPxY(o[2][1], 0), this.points[2][3] = s, this.points[2][1] = a, this.points[3][3] = y3, this.points[3][1] = y2, this.points[4][3] = y5, this.points[4][1] = y4) : (this.points[2][3] = 0, this.points[2][1] = 0, this.points[3][3] = 0, this.points[3][1] = 0, this.points[4][3] = 0, this.points[4][1] = 0), t %= d.chart.px.bar.spacing + d.chart.px.bar.width, d.mouseOri.y = d.mouse.y, d.mouseOri.x = d.mouse.x
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "rectLine":
                        d.curLine = new function() {
                            this.name = "rectLine", this.drawType = d.RECT, this.id = s(), this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
                            var e = 0;
                            this.init = function() {
                                f(), this.points = [];
                                for (var e = d.chart.yToVal(0, d.mouse.y), t = d.chart.xToBar(d.mouse.x), n = d.chart.barToIndex(t), r = new Date(d.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), i = d.chart.toPxX(t), o = d.chart.toPxY(e, 0), a = 0; a < 1; a++) this.points.push([i, o, i, o]);
                                return this.text.push(r), this.text.push(r), this.pots = [], this.pots.push([i, o]), this.pots.push([i, o]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.y - d.mouseOri.y,
                                        n = d.mouse.x - d.mouseOri.x;
                                    e += n;
                                    var r = parseInt(e / (d.chart.px.bar.spacing + d.chart.px.bar.width)) * (d.chart.px.bar.spacing + d.chart.px.bar.width);
                                    null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function(e, n, i) {
                                        e[0] += r, e[1] += t, e[2] += r, e[3] += t
                                    }), this.pots.forEach(function(e, n, i) {
                                        e[1] += t, e[0] += r
                                    })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
                                    var i = this.points[0],
                                        o = d.chart.yToVal(0, i[1]),
                                        a = d.chart.xToBar(i[0]),
                                        s = d.chart.barToIndex(a),
                                        l = d.chart.bars.data[s] ? new Date(d.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "";
                                    this.text.push(l + " " + o.toFixed(2)), o = d.chart.yToVal(0, i[3]), a = d.chart.xToBar(i[2]), s = d.chart.barToIndex(a), l = d.chart.bars.data[s] ? new Date(d.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + o.toFixed(2)), e %= d.chart.px.bar.spacing + d.chart.px.bar.width, d.mouseOri.y = d.mouse.y, d.mouseOri.x = d.mouse.x
                                }
                            }, this.draw = function() {
                                ! function(e) {
                                    p.strokeStyle = C.line, p.lineWidth = 1;
                                    for (var t = 0; t < e.points.length; t++) n = e.points[t],
                                        function(e, t, n, r, i) {
                                            e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | i)
                                        }(p, n[0], n[1], n[2] - n[0], n[3] - n[1]);
                                    p.fillStyle = C.text, p.textBaseline = "bottom", p.textAlign = "left", p.font = "12px Arial";
                                    var n;
                                    (n = e.points[0])[0] <= n[2] ? p.textAlign = "left" : p.textAlign = "right", p.fillText(e.text[0], n[0], n[1]), n[0] > n[2] ? p.textAlign = "left" : p.textAlign = "right", p.textBaseline = "top", p.fillText(e.text[1], n[2], n[3]), d.selectDrawObj && e.id == d.selectDrawObj.id && a(e)
                                }(this)
                            }
                        };
                        break;
                    case "singleLine":
                        d.curLine = new function() {
                            this.name = "singleLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null, this.init = function() {
                                var e = f();
                                this.points = [];
                                for (var t = d.chart.yToVal(0, d.mouse.y), n = 0; n < 1; n++) this.points.push([e.x, d.mouse.y, e.w + e.x, d.mouse.y]), this.text.push(t.toFixed(2));
                                return this.pots = [], this.pots.push([d.w / 2, d.mouse.y, 0]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var e = d.mouse.y - d.mouseOri.y;
                                    0 != e && (this.points.forEach(function(t, n, r) {
                                        t[1] = t[3] += e
                                    }), this.pots.forEach(function(t, n, r) {
                                        t[1] += e
                                    })), this.text = [];
                                    var t = this;
                                    this.points.forEach(function(e, n) {
                                        var r = d.chart.yToVal(0, e[1]);
                                        t.text.push(r.toFixed(2))
                                    }), d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                i(this)
                            }
                        };
                        break;
                    case "upArrow":
                        d.curLine = new function() {
                            this.name = "upArrow", this.up = !0, this.id = s(), this.drawType = d.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var e = 0;
                            this.init = function() {
                                f(), this.points = [];
                                var e = d.chart.toPxX(d.chart.xToBar(d.mouse.x)),
                                    t = d.mouse.y;
                                return this.points.push([e, t]), this.points.push([e + 10, t + 10]), this.points.push([e + 10, t + 14]), this.points.push([e + 2, t + 6]), this.points.push([e + 2, t + 20]), this.points.push([e - 2, t + 20]), this.points.push([e - 2, t + 6]), this.points.push([e - 10, t + 14]), this.points.push([e - 10, t + 10]), this.points.push([e, t]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.x - d.mouseOri.x,
                                        n = d.mouse.y - d.mouseOri.y;
                                    e += t, 0 == n && 0 == t || this.points.forEach(function(t, r, i) {
                                        t[0] += e - e % (d.chart.px.bar.spacing + d.chart.px.bar.width), t[1] += n
                                    }), e %= d.chart.px.bar.spacing + d.chart.px.bar.width, d.mouseOri.x = d.mouse.x, d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                o(this)
                            }
                        };
                        break;
                    case "downArrow":
                        d.curLine = new function() {
                            this.name = "downArrow", this.up = !1, this.id = s(), this.drawType = d.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
                            var e = 0;
                            this.init = function() {
                                f(), this.points = [];
                                var e = d.chart.toPxX(d.chart.xToBar(d.mouse.x)),
                                    t = d.mouse.y;
                                return this.points.push([e, t]), this.points.push([e + 10, t - 10]), this.points.push([e + 10, t - 14]), this.points.push([e + 2, t - 6]), this.points.push([e + 2, t - 20]), this.points.push([e - 2, t - 20]), this.points.push([e - 2, t - 6]), this.points.push([e - 10, t - 14]), this.points.push([e - 10, t - 10]), this.points.push([e, t]), this.points
                            }, this.moving = function() {
                                if (d.mouseDown) {
                                    var t = d.mouse.x - d.mouseOri.x,
                                        n = d.mouse.y - d.mouseOri.y;
                                    e += t, 0 == n && 0 == t || this.points.forEach(function(t, r, i) {
                                        t[0] += e - e % (d.chart.px.bar.spacing + d.chart.px.bar.width), t[1] += n
                                    }), e %= d.chart.px.bar.spacing + d.chart.px.bar.width, d.mouseOri.x = d.mouse.x, d.mouseOri.y = d.mouse.y
                                }
                            }, this.draw = function() {
                                o(this)
                            }
                        }
                }
            },
            setType: function(e) {
                d._drawType = e
            },
            resize: function() {
                return d.w = d.canvas.width(), d.h = d.canvas.height(), this
            },
            setChartData: function(t) {
                d.chart = t, d.chart.canvas.i.on({
                    mousedown: function(t) {
                        0 == t.button && (u(t), d.mouseOri.x = d.mouse.x, d.mouseOri.y = d.mouse.y, d.mouseDown = !0, d.curLine ? (d.objLines.push(d.curLine), d.curLine.init(), d.selectDrawObj = d.curLine, d.curLine = null) : function() {
                            d.selectDrawObj = null;
                            for (var t = 0; t < d.objLines.length; t++) switch (drawType = d.objLines[t].drawType || d.LINES, drawType) {
                                case d.LINES:
                                    var n = l(d.objLines[t].points),
                                        r = c(d.objLines[t]);
                                    1 != n && 1 != r || (d.selectDrawObj = d.objLines[t], 0 == r && (d.selectDrawObj.selectPotIndex = null));
                                    break;
                                case d.RECT:
                                    var i = [];
                                    d.objLines[t].points.forEach(function(e) {
                                        i.push([e[0], e[1], e[2], e[1]]), i.push([e[2], e[1], e[2], e[3]]), i.push([e[2], e[3], e[0], e[3]]), i.push([e[0], e[3], e[0], e[1]])
                                    });
                                    var n = l(i),
                                        r = c(d.objLines[t]);
                                    1 != n && 1 != r || (d.selectDrawObj = d.objLines[t], 0 == r && (d.selectDrawObj.selectPotIndex = null));
                                    break;
                                case d.ARROW:
                                    PtInPolygon([d.mouse.x, d.mouse.y], d.objLines[t].points) && (d.selectDrawObj = d.objLines[t])
                            }
                            e()
                        }(), e())
                    },
                    mousemove: function(t) {
                        u(t);
                        var n = !1;
                        if (d.selectDrawObj && 1 == d.mouseDown && (d.selectDrawObj.moving(), n = !0), d.selectDrawObj && 0 == d.mouseDown) {
                            var r = d.selectDrawObj.large,
                                i = c(d.selectDrawObj);
                            d.selectDrawObj.large = 1 == i
                        }
                        d.selectDrawObj && (n || r != d.selectDrawObj.large) && e()
                    }
                }), $(document).on({
                    mouseup: function(e) {
                        1 == d.mouseDown && (d.mouseDown = !1, d.objLines && d.objLines.forEach(function(e) {
                            e.selectPotIndex = null
                        }))
                    },
                    keydown: function(t) {
                        var n = t || window.event;
                        46 == (n.keyCode || n.which || n.charCode) && d.selectDrawObj && (d.objLines.forEach(function(e, t) {
                            e.name == d.selectDrawObj.name && e.id == d.selectDrawObj.id && (d.objLines.splice(t, 1), 0 == d.objLines.length && d.nullDrawObj && d.nullDrawObj())
                        }), e())
                    }
                })
            },
            ifNull: function(e) {
                d.nullDrawObj = e
            },
            clean: function() {
                d.objLines = [], d.curLine = null, d.selectDrawObj = null, p.clearRect(0, 0, d.w, d.h), d.nullDrawObj && d.nullDrawObj()
            },
            deleteLine: function() {
                d.selectDrawObj && (d.objLines.forEach(function(e, t) {
                    e.name == d.selectDrawObj.name && e.id == d.selectDrawObj.id && (d.objLines.splice(t, 1), 0 == d.objLines.length && d.nullDrawObj && d.nullDrawObj())
                }), e())
            }
        }
    },
    C = {
        upArrow: "#ff4056",
        downArrow: "#34ce6b",
        line: "#787878",
        text: "#20acea",
        pot: "#20acea"
    };
Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this))
};
var UserAccount, UserAccount_Class = function() {
        var e = null;
        return new function() {
            this.Build = function() {
                return null == e && ((e = new function() {
                    var e = {
                        orders: {}
                    };
                    return {
                        orders: function() {
                            return e.orders
                        },
                        ordersAdd: function(t) {
                            ! function(t) {
                                if (null != t && void 0 !== t) {
                                    var n = null;
                                    t.hasOwnProperty("exch") ? (n = t.exch, t.hasOwnProperty("orders") && null != t.orders && t.orders.hasOwnProperty("length") && (function(t, n) {
                                        var r = "",
                                            i = 0;
                                        millitime();
                                        for (r in e.orders[n]) e.orders[n].hasOwnProperty(r) && (e.orders[n][r], delete e.orders[n][r]);
                                        for (i = 0; i < t.length; i++) ! function(t, n) {
                                            var r = t.id,
                                                i = millitime();
                                            null != n && void 0 !== n ? (e.orders[n] || (e.orders[n] = {}), e.orders[n].hasOwnProperty(r) ? e.orders[n][r].hasOwnProperty("added") && (e.orders[n][r].added = 0) : (e.orders[n][r] = {}, e.orders[n][r].added = i), e.orders[n][r].action = t.action, e.orders[n][r].amount = parseFloat(t.amount), e.orders[n][r].price = parseFloat(t.price), e.orders[n][r].base = t.base, e.orders[n][r].quote = t.quote, e.orders[n][r].status = t.status, "Unknown" == e.orders[n][r].status && (e.orders[n][r].status = "Open")) : DEBUG && _debug("Order triggered with no exchange!", RTBTC.ERROR)
                                        }(t[i], n)
                                    }(t.orders, n), RTBTC.trigger("orders"))) : DEBUG && _debug("No exchange sent with orders!", RTBTC.ERROR)
                                } else _ordersFail()
                            }(t)
                        }
                    }
                }).constructor = null), e
            }
        }
    }(),
    timesList = [],
    timeLimit = 1e3,
    times = 7,
    app = angular.module("tradeApp", ["pascalprecht.translate", "ngMessages", "ngCookies", "sly"]);
app.config(["$translateProvider", "$httpProvider", function(e, t) {
    t.interceptors.push("myInterceptor"), window.translations = e.translations,
        function(t) {
            e.translations(t, window["mm" + t]), e.preferredLanguage(t), e.useSanitizeValueStrategy("escape")
        }(initLang)
}]).controller("tradeController", ["$scope", "$rootScope", "$http", "$interval", "$cookies", "$timeout", "$document", "$window", "$q", "streamer", "user", "$translate", "userStreamer", "klineStreamer", "tradeStreamer", "pageLoading1", "scroll", "mktdataStreamer", "form", "mobile", "$filter", "urlSearch", "SPA", "divLoading", function(e, t, n, r, i, a, s, l, c, u, f, d, p, h, g, m, v, b, y, x, w, k, T, S) {
    function C(t) {
        e.products = t, BTCConvert.setProducts(t), "y" == i.logined && e.getUserAsset(), E(t), e.getTransToUSDT(e.products);
        for (var n = 0; n < t.length; n++) - 1 == e.Markets.indexOf(t[n].quoteAsset) && e.Markets.push(t[n].quoteAsset), e.lastPrices[t[n].baseAsset] = t[n].close, e.productSplit[t[n].symbol] = {
            base: t[n].baseAsset,
            quote: t[n].quoteAsset
        }, e.assetFixed[t[n].quoteAsset] = t[n].decimalPlaces, e.assetFixed[t[n].baseAsset] = t[n].decimalPlaces, e.fixed[t[n].symbol] = t[n].decimalPlaces, e.minFixed[t[n].symbol] = {
            qtyTick: Math.abs(Math.log10(t[n].minTrade)),
            priceTick: Math.abs(Math.log10(t[n].tickSize))
        }, e.currentProduct, angular.forEach(e.products, function(t, n) {
            var r = Math.abs(Math.log10(t.tickSize)),
                i = Math.abs(Math.log10(t.minTrade));
            e.products[n].priceTick = r, e.products[n].qtyTick = i, e.products[n].close = Number(t.close), null == t.close || 0 == t.close ? e.products[n].changeRate = 0 : e.products[n].changeRate = 100 * Number(t.close - t.open) / t.open
        }), console.log(e.products)
    }

    function E(n) {
        angular.forEach(n, function(r, i) {
            if (r.symbol == e.product.symbol) {
                e.currentProduct = r, Data.baseFixed = e.currentProduct.qtyTick = Math.abs(Math.log10(Number(e.currentProduct.minTrade))), Data.qouteFixed = e.currentProduct.priceTick = Math.abs(Math.log10(Number(e.currentProduct.tickSize))), chart.redraw(), e.currentProduct.amountTick = Math.abs(Math.log10(e.currentProduct.tickSize * e.currentProduct.minTrade)), e.currentProduct.amountTick = Math.min(e.currentProduct.amountTick, 8), 8 == e.depthMergeUnit && (e.depthMergeUnit = e.currentProduct.priceTick), e.priceRegExp = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$"), e.newest = e.currentProduct.close, e.buy_order.price = e.sell_order.sell_price = e.currentProduct.close && Number(e.currentProduct.close).toFixed(e.fixed[e.currentProduct.symbol]), t.pageTitle = e.currentProduct.symbol, e.depthUnits = [];
                for (var o = 3; o >= 0;) e.currentProduct.priceTick - o < 0 ? o-- : (e.depthUnits.push(e.currentProduct.priceTick - o), o--);
                e.depthMergeChange(e.depthUnits[e.depthUnits.length - 1]), e.trade(e.currentProduct.close), Y = n[i - 1 < 0 ? i - 1 + n.length : i - 1].baseAsset + "_" + n[i - 1 < 0 ? i - 1 + n.length : i - 1].quoteAsset, X = n[(i + 1) % n.length].baseAsset + "_" + n[(i + 1) % n.length].quoteAsset, $(window).bind("keyup", A)
            }
        })
    }

    function A(e) {
        if (K) {
            if ((new Date).getTime() - K < 600) return
        } else K = (new Date).getTime();
        K = (new Date).getTime(), 33 == e.keyCode && ($(window).unbind("keyup", A), T.setUrl("?symbol=" + Y)), 34 == e.keyCode && ($(window).unbind("keyup", A), T.setUrl("?symbol=" + X))
    }

    function N(t) {
        angular.forEach(e.products, function(n, r) {
            -1 != jQuery.inArray(n.symbol, t) && (e.products[r].pro = !0)
        }), e.getProNum()
    }

    function P(t) {
        if (t && t instanceof Array) {
            var n = {};
            n.exch = "BIJIE", n.orders = [], t.forEach(function(t) {
                t.symbol == e.product.symbol && n.orders.push({
                    id: t.id || t.orderId,
                    action: t.side.toLowerCase(),
                    amount: t.origQty,
                    price: t.price,
                    base: e.product.baseCurrency,
                    quote: e.product.qouteCurrency,
                    status: "Open"
                })
            }), UserAccount.ordersAdd(n)
        }
    }

    function O(e, t) {
        return Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
    }

    function D(e, t) {
        return Math.ceil(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
    }

    function I(t, n, r, i) {
        angular.forEach(t, function(t) {
            if (8 != e.depthMergeUnit) {
                var o = !1;
                r.forEach(function(r) {
                    r[0] == i(Number(t), e.depthMergeUnit) && (r[1] += Number(n[t]), r[2] += Number(n[t] * t), o = !0)
                }), o || r.push([i(Number(t), e.depthMergeUnit), Number(n[t]), Number(n[t]) * Number(t)])
            } else r.push([Number(t), Number(n[t]), Number(t) * Number(n[t])])
        })
    }

    function M(e, t) {
        e && e.forEach(function(e) {
            var n = Number(e[0]),
                r = Number(e[1]);
            0 != r ? t[n] = r : delete t[n]
        })
    }

    function _(e, t) {
        ce.clean(), chart.setCrossHair(!0), chart.fixTime(!1), chart.setBarwidth(be), chart.clearData(), chart.setMode(t), re = te(ne = e), chart.setResolution(Number(e))
    }

    function L(e) {
        var t;
        return "MACD" == e ? t = "macd" : "TRIX" == e ? t = "trix" : "KDJ" == e ? t = "kdj" : "BRAR" == e || ("StochRSI" == e ? t = "storsi" : "VR" == e || ("RSI" == e ? t = "rsi" : "EMV" == e ? t = "emv" : "DMI" == e ? t = "dmi" : "WR" == e ? t = "wpr" : "OBV" == e ? t = "obv" : "ROC" == e || ("BOLL" == e ? t = "bnd" : "MTM" == e ? t = "mtm" : "SAR" == e ? t = "psar" : "EMA" == e ? t = "ema" : "PSY" == e || ("CCI" == e ? t = "cci" : "VWAP" == e ? t = "vwap" : "MA" == e ? t = "ma" : "AVL" == e && (t = "avl"))))), t
    }

    function F(t, n, r) {
        [t, n].forEach(function(t) {
            t && t.forEach(function(t) {
                "--" != t[0] && (t[4] = !1, r && r.forEach(function(n) {
                    if (n.symbol == e.product.symbol) {
                        var r = n.price;
                        "SELL" == n.side ? r = D(r, e.depthMergeUnit) : "BUY" == n.side && (r = O(r, e.depthMergeUnit)), t[0] == r && (t[4] = !0)
                    }
                }))
            })
        })
    }
    if (console.log = function() {}, T.UrlChange = function() {
            e.product.oriSymbol = k.getUrlParam("symbol") || localStorage.echangeProduct || "BNB_BTC", e.product.symbol = e.product.oriSymbol.replace("_", ""), void 0 !== e.product.symbol && (e.product.baseCurrency = e.product.oriSymbol.split("_")[0], e.product.qouteCurrency = e.product.oriSymbol.split("_")[1]), e.buy_order.quantity = "", e.sell_order.sell_quantity = "", e.market_buy_order.quantity = "", e.market_sell_order.quantity = "", S.loading("#chart"), RTBTC.instrument("BIJIE", e.product.symbol, e.product.qouteCurrency), chart.setResolution(Number(V[e.curIndex])), e.Islogin && (e.getCommission(e.product.symbol), e.getUserAsset()), E(e.products), e.getStreamers(), e.getLocalProStatus()
        }, t.ts = k.getUrlParam("ts"), e.agentId = k.getUrlParam("ref"), t.ts) {
        /^[\w|\d|\.|-]+$/.test(t.ts) && sessionStorage.setItem("ts", t.ts.substr(0, 16))
    }
    e.agentId && sessionStorage.setItem("refId", e.agentId);
    location.host.match("localhost") || location.host.match("192.168.0");
    e.tradeDetail = !0, e.product = {}, e.EXCHANGE = "Binance", e.lang = window.localStorage.lang, e.timeLang = "zh-cn", "cn" != e.lang && (e.timeLang = "en"), e.product.oriSymbol = k.getUrlParam("symbol") || localStorage.echangeProduct || "BNB_BTC", e.curIndex = 1 * localStorage.curIndex || 0, e.product.symbol = e.product.oriSymbol.replace("_", ""), e.buy_order = {}, e.sell_order = {}, e.market_buy_order = {}, e.market_sell_order = {}, e.stopBuy_order = {}, e.stopSell_order = {}, e.userAsset = {}, e.fixed = {}, e.assetFixed = {};
    var B = new Date,
        R = B.getFullYear(),
        j = B.getMonth(),
        q = B.getDate(),
        U = new Date(R, j, q, 0, 0, 0).getTime(),
        H = B.setDate(B.getDate() + 1),
        V = [60, 60, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800];
    window.dateStartSelect = function() {
        WdatePicker({
            dateFmt: "yyyy-MM-dd",
            maxDate: "#F{$dp.$D('lscj_end')||'%y-%M-%d'}",
            readOnly: !0,
            lang: e.timeLang
        })
    }, window.dateEndSelect = function() {
        WdatePicker({
            dateFmt: "yyyy-MM-dd",
            minDate: "#F{$dp.$D('lscj_start')}",
            readOnly: !0,
            lang: e.timeLang
        })
    };
    var z = d.instant;
    d.instant = function(e) {
        return (z(e) == e ? mmen[e] : z(e)) || e
    };
    var W = (new Date).getTime();
    n.get("/exchange/public/serverTime").success(function(t) {
        var n = ((new Date).getTime() - W) / 2,
            r = new Date(Math.round(Number(t) + n)).getTime() - (new Date).getTime();
        e.today = new Date((new Date).getTime() + r);
        var i = "";
        setInterval(function() {
            var e = w("date")(new Date((new Date).getTime() + r), "yyyy-MM-dd HH:mm:ss");
            e != i && (i = e, $("#todaytime").text(i))
        }, 100)
    }), e.logout = f.logout, e.getUserBaseDetail = function() {
        n({
            method: "post",
            url: "/user/basedetail.html"
        }).success(function(t) {
            e.userBaseInfo = t, e.userEmail = t.email.split("@")[0]
        })
    }, $("body").attr("class", localStorage.lang), e.switching = function(t) {
        ! function(t, n) {
            var r = new Date;
            if (r.setFullYear(2999), document.cookie = "lang=" + t.toUpperCase() + ";path=/;expires=" + r.toGMTString(), $("#loaded" + t).length) translations(t, window["mm" + t]), d.use(t);
            else {
                var i = document.createElement("script");
                i.src = n + t + ".js?v=" + r.getTime(), i.type = "text/javascript", i.id = "loaded" + t, i.onload = function() {
                    translations(t, window["mm" + t]), d.use(t);
                    var n = e.$root.$$phase;
                    "$apply" != n && "$digest" != n && e.$apply()
                }, document.getElementsByTagName("head")[0].appendChild(i)
            }
        }(t, "/" + resourcePerfixed + "/js/i18n/"), window.localStorage.lang = t, e.lang = t, $("body").attr("class", t)
    };
    var G;
    e.currentUserAsset = null, e.getUserAsset = function() {
        n.post("/exchange/private/userAsset").success(function(t) {
            t = t || [], e.userAssets = [], t.forEach(function(t) {
                0 == Number(t.free) && 0 == Number(t.freeze) && 0 == Number(t.withdrawing) && 0 == Number(t.locked) || e.userAssets.push(t)
            }), e.userAssetsNum = t.length, e.totalMarketValue = 0, e.totalProfit = 0, e.cost = 0, e.totalAsset = 0, e.freezeAsset = 0, angular.forEach(e.userAssets, function(t) {
                t.asset == e.product.qouteCurrency && (e.currentUserAsset = t.free, e.qouteFree = t.free), t.asset == e.product.baseCurrency && (e.baseFree = t.free)
            }), e.btcWatch = [e.products, e.userAssets], G && G(), G = e.$watch("btcWatch", function() {
                angular.forEach(e.userAssets, function(e) {
                    e.btcValue = BTCConvert.getNewPrice(e.asset, 1 * e.free + 1 * e.freeze + 1 * e.locked + 1 * e.withdrawing)
                })
            }, !0)
        })
    }, e.refresh = function() {
        window.location.href = window.location.href
    }, e.getOrders = function() {
        n({
            method: "post",
            url: "/exchange/private/openOrders"
        }).success(function(t) {
            P(t), e.openOrders = t;
            var n = e.openOrders.length;
            e.IsopenOrdersNull = 0 == n, F(e.asksTwenty, e.bidsTwenty, e.openOrders)
        })
    }, e.allOrders = [], e.getTradeOrders = function(t, r, i, o) {
        e.loading = !0;
        var a = new Date,
            s = (a.getTime(), a.setDate(a.getDate() - 1), $.param({
                page: t,
                rows: r,
                start: i,
                end: o
            }));
        n.post("/exchange/private/tradeOrders", s).success(function(t) {
            e.loading = !1, t.data ? (e.scrollLoading = !1, angular.forEach(t.data, function(t, n) {
                -1 == e.allOrders.indexOf(t) && e.allOrders.push(t), 0 == t.statusCode && (e.allOrders[n].executedPrice = t.price)
            }), e.tradeOrdersCurrentPage = t.page, e.tradeOrdersPages = t.pages, e.isBottom("tradeOrderBox", e.getTradeOrders, e.tradeOrdersCurrentPage, e.tradeOrdersPages, U, H)) : e.allOrders = []
        })
    }, e.cal = function(e, t, n) {
        var r = $(n.target).parent("span"),
            i = Math.pow(.1, e),
            o = r.siblings("input"),
            a = o.val();
        a ? t ? o.val((1 * a + i).toFixed(e)) : a > i && o.val((1 * a - i).toFixed(e)) : (a = i, o.val(a.toFixed(e))), o.trigger("input")
    }, e.orderPercent = function(t, n, r) {
        var i = {};
        if (e.userAssets) {
            for (var o = 0; o < e.userAssets.length; o++) i[e.userAssets[o].asset] = e.userAssets[o].free;
            "limit" == r ? "buy" == n && e.buy_order.price ? e.buy_order.quantity = J(t * i[e.currentProduct.quoteAsset] / e.buy_order.price, e.currentProduct.qtyTick) : e.sell_order.sell_quantity = J(t * i[e.currentProduct.baseAsset], e.currentProduct.qtyTick) : "market" == r ? "buy" == n ? e.market_buy_order.quantity = J(t * i[e.currentProduct.quoteAsset] / e.currentProduct.close, e.currentProduct.qtyTick) : e.market_sell_order.quantity = J(t * i[e.currentProduct.baseAsset], e.currentProduct.qtyTick) : "stopLimit" == r && ("buy" == n ? e.stopBuy_order.price && (e.stopBuy_order.quantity = J(t * i[e.currentProduct.quoteAsset] / e.stopBuy_order.price, e.currentProduct.qtyTick)) : e.stopSell_order.quantity = J(t * i[e.currentProduct.baseAsset], e.currentProduct.qtyTick))
        }
    }, e.setTimequantum = function(t, n) {
        if (e.Islogin) {
            var r = new Date,
                i = r.getFullYear(),
                o = r.getMonth(),
                a = r.getDate(),
                s = new Date(i, o, a, 0, 0, 0),
                l = s.getTime(),
                c = new Date(i, o, a, 0, 0, 0).setDate(new Date(i, o, a, 0, 0, 0).getDate() + 1);
            switch (t) {
                case 0:
                    l = s.getTime();
                    break;
                case 1:
                    l = Math.abs(s.setDate(s.getDate() - 7));
                    break;
                case 2:
                    l = Math.abs(s.setMonth(s.getMonth() - 1));
                    break;
                case 3:
                    l = Math.abs(s.setMonth(s.getMonth() - 3))
            }
            n(1, 30, l, c)
        } else e.showLoginBox()
    }, e.search_submit = function(t, n) {
        if (e.Islogin) {
            var r = new Date($("#" + n + "_start").val()).setHours(0),
                i = new Date($("#" + n + "_end").val()).setHours(0);
            r && i && t(1, 30, r, i)
        } else e.showLoginBox()
    }, e.isBottom = function(t, n, r, i, o, a) {
        (t = document.getElementById(t)).onscroll = function() {
            var s = t.clientHeight;
            if (t.scrollHeight == s + t.scrollTop) {
                var l = r + 1;
                l <= i ? (e.scrollLoading = !0, n(l, 30, o, a)) : e.scrollLoading = !1;
                var c = e.$root.$$phase;
                "$apply" != c && "$digest" != c && e.$apply()
            }
        }
    }, e.dealOrders = [], e.getDealOrders = function(t, r, i, o) {
        e.loading = !0;
        var a = $.param({
            page: t,
            start: i,
            rows: r,
            end: o
        });
        n.post("/exchange/private/userTrades", a).success(function(t) {
            e.loading = !1, t.data ? (e.scrollLoading = !1, angular.forEach(t.data, function(t) {
                -1 == e.dealOrders.indexOf(t) && e.dealOrders.push(t)
            }), e.dealOrdersCurrentPage = t.page, e.dealOrdersPages = t.pages, e.isBottom("userTradeBox", e.getDealOrders, e.dealOrdersCurrentPage, e.dealOrdersPages, i, o)) : e.dealOrders = []
        })
    }, e.isLogin = function() {
        if ("y" == i.logined) {
            e.Islogin = !0;
            i.userId;
            e.getUserBaseDetail(), e.getOrders(), e.getTradeOrders(1, 30, U, H), e.getDealOrders(1, 30, U, H), e.getCommission(e.product.symbol), e.getUserInfo()
        } else e.Islogin = !1
    }, e.hideInfo = function() {
        angular.element(".wrap").removeClass("blur"), angular.element(".overlayer,#aboutus-box").hide()
    }, e.getTransToUSDT = function(t) {
        angular.forEach(t, function(t, n) {
            "USDT" == t.quoteAsset && (e.transToUSDT[t.baseAsset] = t.close)
        }), e.transToUSDT.USDT = 1
    }, e.products = [], e.currentProduct = {}, e.productSplit = {}, e.lastPrices = {}, e.minFixed = {}, e.lastPrices.BTC = 1, e.priceRegExp = new RegExp("^\\d+(\\.\\d{0,8}0*)?$"), e.depthUnits = [], e.transToUSDT = {
        USDT: 1
    }, e.getTradeLists = function() {
        n.get("/exchange/public/product").success(function(t) {
            if (t.data.length) {
                for (var r = t.data, i = !1, o = 0; o < r.length; o++) r[o].symbol == e.product.symbol && (i = !0), r[o].pro = !1;
                e.Islogin ? setTimeout(function() {
                    e.getFavorite(r)
                }, 0) : setTimeout(function() {
                    e.noLoginFavoreteFun(r)
                }, 0), i ? C(r) : n.get("/exchange/public/product?symbol=" + e.product.baseAsset + "_" + e.product.quoteAsset).success(function(e) {
                    e.data[0] && r.push(e.data[0]), C(r)
                })
            } else e.products = []
        })
    }, e.changeMarket = function(t) {
        e.curMarket = t
    }, e.Markets = [];
    var Y, X, K;
    e.getTradeLists(), e.getCnyusd = function() {
        n.get("/exchange/public/cnyusd").success(function(t) {
            e.cnyusdRate = t.rate
        })
    }, e.getCnyusd(), e.orderKey = "tradedMoney", e.isSameKey = "tradedMoney", e.orderDesc = !1, e.sortByKey = function(t, n) {
        e.orderKey = t, e.isSameKey != t ? (e.isSameKey = t, e.orderDesc = !0) : n || (e.orderDesc = !e.orderDesc)
    }, e.sortByKey(e.orderKey);
    location.host.match("localhost") || location.host.match("192.168.0");
    e.delayHide = function(t, n) {
        e[n] = a(function() {
            e[t] = !1
        }, 500)
    }, e.clearTimer = function(t) {
        a.cancel(e[t])
    };
    var Q;
    e.selectProduct = function(t, n, r, i) {
        if (r.stopPropagation(), Q) {
            if ((new Date).getTime() - Q < 300) return
        } else Q = (new Date).getTime();
        Q = (new Date).getTime(), e.isShowProduct = !1, localStorage.ProStatus = t + n, localStorage.setStatus = t + "_" + n, localStorage.quoteAsset = n, localStorage.curMarket = i, localStorage.thisMarket = "" == i ? "Favorete" : n, T.setUrl("?symbol=" + t + "_" + n)
    }, e.getLocalProStatus = function() {
        void 0 !== localStorage.ProStatus && (e.proStatus = localStorage.ProStatus, window.location.search.indexOf("symbol") < 0 && (window.location.href = "/tradeDetail.html?symbol=" + localStorage.setStatus)), void 0 !== localStorage.quoteAsset ? void 0 !== localStorage.thisMarket && "Favorete" == localStorage.thisMarket ? (e.getQuoteAsset = "", e.curMarket = "", e.isPro = !0) : e.getQuoteAsset = localStorage.quoteAsset : e.getQuoteAsset = "BTC"
    }, e.localListData = [], e.favoriteFun = function(t, r, i) {
        if (t.stopPropagation(), i) e.Islogin ? n.post("/exchange/private/deletePortfolio", $.param({
            symbol: r
        })).success(function(t) {
            for (var n = 0; n < e.products.length; n++)
                if (r == e.products[n].symbol) {
                    e.products[n].pro = !1;
                    break
                }
            e.getProNum()
        }) : (console.log("未登录，删除本地"), angular.forEach(e.products, function(e, t) {
            r == e.symbol && (e.pro = !1)
        }), e.getProNum(), e.removeByValue(e.localListData, r), localStorage.sortLists = JSON.stringify(e.localListData), console.log(localStorage.sortLists));
        else if (e.Islogin) n.post("/exchange/private/addPortfolio", $.param({
            symbol: r
        })).success(function(t) {
            for (var n = 0; n < e.products.length; n++) r == e.products[n].symbol && (e.products[n].pro = !0);
            e.getProNum()
        });
        else {
            console.log("未登录，添加到本地");
            for (var o = 0; o < e.products.length; o++) r == e.products[o].symbol && (e.products[o].pro = !0, e.localListData.push(e.products[o].symbol));
            e.getProNum(), localStorage.sortLists = JSON.stringify(e.localListData), console.log(JSON.parse(localStorage.sortLists).length)
        }
    }, e.removeByValue = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n] == t) {
                e.splice(n, 1);
                break
            }
    }, e.noLoginFavoreteFun = function(t) {
        void 0 !== localStorage.sortLists && (e.localListData = JSON.parse(localStorage.sortLists));
        var n = e.localListData;
        angular.forEach(n, function(e) {
            angular.forEach(t, function(t) {
                e == t.symbol && (t.pro = !0)
            })
        }), e.getProNum()
    }, e.getFavorite = function() {
        if (e.Islogin) n.post("/exchange/private/portfolios").success(function(e) {
            N(e.data)
        });
        else if (localStorage.sortLists) {
            N(JSON.parse(localStorage.sortLists))
        }
    }, e.getProNum = function() {
        var t = 0;
        angular.forEach(e.products, function(e, n) {
            e.pro && t++
        }), t ? e.noPro = !1 : (e.noPro = !0, localStorage.thisMarket = "")
    }, e.getLocalProStatus(), e.changeMarket(e.getQuoteAsset), s.bind("keydown", function(t) {
        e.$apply(function() {
            114 == t.keyCode ? (t.preventDefault(), e.sign = "dqwt") : 121 == t.keyCode ? e.tabName = "cpxx" : t.ctrlKey && t.shiftKey && 75 == t.keyCode ? exchangeDate.bool = !0 : t.keyCode
        })
    }), e.sign = localStorage.sign || "zjcc", e.tab = function(t) {
        e.sign = t, localStorage.sign = t
    }, e.trade = function(t) {
        isNaN(Number(t)) || ("limit" == e.orderType.v ? (e.buy_order.price = Number(t).toFixed(e.currentProduct.priceTick), e.sell_order.sell_price = Number(t).toFixed(e.currentProduct.priceTick)) : "stopLimit" == e.orderType.v && (e.stopBuy_order.stopPrice = Number(t).toFixed(e.currentProduct.priceTick), e.stopBuy_order.price = Number(t).toFixed(e.currentProduct.priceTick), e.stopSell_order.stopPrice = Number(t).toFixed(e.currentProduct.priceTick), e.stopSell_order.curPrice = Number(t).toFixed(e.currentProduct.priceTick)))
    }, e.tradeBuyVol = function(t) {
        for (var n = 0, r = 0; r <= t; r++) n += Number(e.bidsTwenty[r][1]);
        n < Number(e.baseFree) ? e.sell_order.sell_quantity = J(n, e.currentProduct.qtyTick) : e.sell_order.sell_quantity = J(e.baseFree, e.currentProduct.qtyTick)
    }, e.tradeSellVol = function(t) {
        for (var n = 0, r = e.asksTwenty.length - 1; r >= t; r--) n += Number(e.asksTwenty[r][1]);
        n < Number(e.qouteFree / e.buy_order.price) ? e.buy_order.quantity = J(n, e.currentProduct.qtyTick) : e.buy_order.quantity = J(e.qouteFree / e.buy_order.price, e.currentProduct.qtyTick)
    };
    var J = function(e, t) {
        return (Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)).toFixed(t)
    };
    e.googleVerify = !1, e.showLoginBox = f.login, e.logout = f.logout;
    var Z, ee = function(t) {
        Z = t, t.onReady(function() {}), t.onSuccess(function() {
            $("#userId").attr("disabled", !1);
            var r = t.getValidate(),
                i = layer.load(1, {
                    shade: [.1, "#fff"]
                }),
                o = $.param({
                    email: e.login.email.trim().toLowerCase(),
                    password: $.md5(e.login.password + e.login.email.trim().toLowerCase()),
                    validateCodeType: "gt",
                    geetest_challenge: r.geetest_challenge,
                    geetest_seccode: r.geetest_seccode,
                    geetest_validate: r.geetest_validate
                });
            n.post("/user/login.html", o).then(function(t) {
                layer.close(i), t.data.success ? (document.cookie = "logined=y;path=/;", document.cookie = "CSRFToken=" + t.data.CSRFToken + ";path=/", document.cookie = "mobile=" + t.data.mobile + ";path=/", document.cookie = "userId=" + t.data.userId + ";path=/", window.location.reload()) : (e.verifyEmail = e.login.email.trim().toLowerCase(), 0 == t.data.emailVerified ? window.location.href = "/resendEmail.html" : t.data.gauth && !t.data.mobileSecurity ? (e.googleVerify = !0, e.verifyType = 1, setTimeout(function() {
                    y.validate("#googleVerify-form", "#googleVerify-btn", e.verifySuccess)
                }, 500)) : t.data.mobileSecurity && !t.data.gauth ? (e.googleVerify = !0, e.verifyType = 2, setTimeout(function() {
                    y.validate("#mobile-form", "#mobile-btn", e.verifySuccess)
                }, 500)) : t.data.gauth && t.data.mobileSecurity ? (e.googleVerify = !0, e.verifyType = 0, setTimeout(function() {
                    y.validate("#googleVerify-form", "#googleVerify-btn", e.verifySuccess), y.validate("#mobile-form", "#mobile-btn", e.verifySuccess)
                }, 500)) : angular.element("#error-info").show().html(t.data.msg)), void 0 != Z && null != Z && Z.reset(), $("#login-btn").attr("disabled", !1)
            }, function(e) {
                return void 0 != Z && null != Z && Z.reset(), $("#login-btn").attr("disabled", !1), layer.msg("登录异常", {
                    icon: 5,
                    shift: 1,
                    time: 1e3
                }), angular.element("#loginValiCode").val("").focus(), angular.element("#imageStream1").click(), !1
            })
        }), t.onClose(function() {
            $("#userId").attr("disabled", !1)
        }), t.onError(function() {
            $("#userId").attr("disabled", !1), layer.msg("geetestError", {
                icon: 2,
                time: 1500
            })
        })
    };
    ! function() {
        var e = localStorage.lang;
        e = "cn" != e ? "en" : "zh-cn", n.get("/security/getGtCode.html?t=" + (new Date).getTime()).success(function(t) {
            initGeetest({
                gt: t.gt,
                challenge: t.challenge,
                new_captcha: t.new_captcha,
                offline: !t.success,
                product: "bind",
                lang: e,
                width: "100%"
            }, ee)
        })
    }(), e.login = function() {
        $("#userId").attr("disabled", !0), Z.verify()
    }, e.send = function() {
        x.sendVerifyCode("/user/sendMobileVerifyCode.html", "verifyCode", "sendBtn")
    }, e.verifySuccess = function(e) {
        e.success ? (layer.msg(e.msg, {
            icon: 1,
            time: 2e3
        }), document.cookie = "logined=y;path=/;", document.cookie = "CSRFToken=" + e.CSRFToken + ";path=/", document.cookie = "email=" + e.email + ";path=/", window.location.reload()) : layer.msg(e.msg, {
            icon: 5,
            time: 2e3
        })
    }, e.checkinput = function(e, t) {
        var n = $(e.target).val();
        if (!new RegExp("^\\d+(\\.\\d{0," + t + "})?$").test(n)) {
            $(e.target).val(n.replace(/[^\d\.]/g, ""));
            var r = n.toString().split(".")[1].length;
            r > t && $(e.target).val(n.slice(0, -(r - t)))
        }
    }, e.buy_submit = function() {
        if (chackRate()) {
            var t = angular.element("#buyPrice").val(),
                r = (e.buy_order.quantity, new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$")),
                i = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            var o = e.qouteFree / e.buy_order.price;
            if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!i.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == e.buy_order.quantity || null == e.buy_order.quantity) return layer.msg(d.instant("inputVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#buy_order").focus(), !1;
            if (r.test(e.buy_order.quantity)) {
                if (Number(e.buy_order.quantity) > o) return angular.element("#buy_order").focus(), !1;
                var s = {
                    method: "post",
                    url: "/exchange/private/order",
                    data: $.param({
                        price: t,
                        quantity: e.buy_order.quantity,
                        symbol: e.currentProduct.symbol,
                        side: "BUY",
                        type: "LIMIT"
                    })
                };
                0 != e.currentProduct.close && (t - e.currentProduct.close) / e.currentProduct.close > .05 ? layer.confirm(d.instant("buyorderConfirmTip"), {
                    title: "",
                    area: "320px",
                    closeBtn: !1,
                    skin: "confirm-class",
                    btn: [d.instant("Yes"), d.instant("No")]
                }, function() {
                    n(s).then(function(t) {
                        layer.msg(d.instant("orderSucceed"), {
                            icon: 1,
                            shift: 1,
                            time: 500
                        }), a(function() {
                            e.buy_order.quantity = "", e.openOrderType.v = "limitOrder"
                        }, 500)
                    }, function(e) {
                        e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                            icon: 5,
                            shift: 1,
                            time: 1e3
                        }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                            icon: 5,
                            shift: 1,
                            time: 1e3
                        })
                    })
                }, function() {
                    layer.closeAll()
                }) : n(s).then(function(t) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), a(function() {
                        e.buy_order.quantity = "", e.openOrderType.v = "limitOrder"
                    }, 500)
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    })
                })
            } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#buy_order").val("").focus()
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.limitBuyOrder = function() {
        exchangeDate.isClose(e.today, e.buy_submit)
    }, e.getCommission = function(t, r) {
        n.get("/exchange/public/userTradeFee?symbol=" + t).success(function(t) {
            e.buyFee = t.buyMakerCommission, e.sellFee = t.sellMakerCommission
        })
    }, e.sell_submit = function() {
        if (chackRate()) {
            var t = angular.element("#sellPrice").val(),
                r = Number(e.sell_order.sell_quantity),
                i = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
                o = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!o.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == e.sell_order.sell_quantity || null == e.sell_order.sell_quantity) return layer.msg(d.instant("inputSellVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#sell_order").focus(), !1;
            if (!i.test(e.sell_order.sell_quantity)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#sell_order").val("").focus(), !1;
            if (r > Number(e.baseFree)) return angular.element("#sell_order").focus(), !1;
            var s = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: t,
                    quantity: e.sell_order.sell_quantity,
                    symbol: e.currentProduct.symbol,
                    side: "SELL",
                    type: "LIMIT"
                })
            };
            0 != e.currentProduct.close && (e.currentProduct.close - t) / e.currentProduct.close > .05 ? layer.confirm(d.instant("sellorderConfirmTip"), {
                title: "",
                area: "320px",
                closeBtn: !1,
                skin: "confirm-class",
                btn: [d.instant("Yes"), d.instant("No")]
            }, function() {
                n(s).then(function(t) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), a(function() {
                        e.sell_order.sell_quantity = "", e.openOrderType.v = "limitOrder"
                    }, 500)
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 500
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 500
                    })
                })
            }, function() {
                layer.closeAll()
            }) : n(s).then(function(t) {
                layer.msg(d.instant("orderSucceed"), {
                    icon: 1,
                    shift: 1,
                    time: 500
                }), a(function() {
                    e.sell_order.sell_quantity = "", e.openOrderType.v = "limitOrder"
                }, 500)
            }, function(e) {
                e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                    icon: 5,
                    shift: 1,
                    time: 500
                }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                    icon: 5,
                    shift: 1,
                    time: 500
                })
            })
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.limitSellOrder = function() {
        exchangeDate.isClose(e.today, e.sell_submit)
    }, e.market_buy_submit = function() {
        if (chackRate()) {
            var t = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            if ("" == e.market_buy_order.quantity || null == e.market_buy_order.quantity) return layer.msg(d.instant("inputVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#market_buy_order").focus(), !1;
            if (t.test(e.market_buy_order.quantity)) {
                var r = {
                    method: "post",
                    url: "/exchange/private/order",
                    data: $.param({
                        quantity: e.market_buy_order.quantity,
                        symbol: e.currentProduct.symbol,
                        side: "BUY",
                        type: "MARKET"
                    })
                };
                e.market_buy_order.quantity = "", n(r).then(function(e) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    })
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    })
                })
            } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#market_buy_order").val("").focus()
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.market_sell_submit = function() {
        if (chackRate()) {
            var t = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            if ("" == e.market_sell_order.quantity || null == e.market_sell_order.quantity) return layer.msg(d.instant("inputVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#market_sell_order").focus(), !1;
            if (t.test(e.market_sell_order.quantity)) {
                var r = {
                    method: "post",
                    url: "/exchange/private/order",
                    data: $.param({
                        quantity: e.market_sell_order.quantity,
                        symbol: e.currentProduct.symbol,
                        side: "SELL",
                        type: "MARKET"
                    })
                };
                e.market_sell_order.quantity = "", n(r).then(function(e) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    })
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    })
                })
            } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#market_sell_order").val("").focus()
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.stopLimit_buy_submit = function() {
        if (chackRate()) {
            var t = angular.element("#buy_stopPrice").val(),
                r = angular.element("#stop_curPrice").val(),
                i = angular.element("#stop_buyQuanity").val(),
                o = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
                s = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            var l = e.qouteFree / r;
            if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!s.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == r || null == r) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!s.test(r)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == i || null == i) return layer.msg(d.instant("inputVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#stop_buyQuanity").focus(), !1;
            if (!o.test(i)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#stop_buyQuanity").focus(), !1;
            if (Number(i) > l) return angular.element("#stop_buyQuanity").focus(), !1;
            var c, u;
            Number(t) >= Number(e.currentProduct.close) ? (c = "STOP_LOSS_LIMIT", u = "cn" != e.lang ? "If the last price rises to or above " + t + " " + e.currentProduct.quoteAsset + " ,an order to buy " + i + " " + e.currentProduct.baseAsset + " at a price of " + r + " " + e.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格买入" + i + " " + e.currentProduct.baseAsset + "的订单") : Number(t) < Number(e.currentProduct.close) && (c = "TAKE_PROFIT_LIMIT", u = "cn" != e.lang ? "If the last price drops to or below " + t + " " + e.currentProduct.quoteAsset + ", an order to buy" + i + " " + e.currentProduct.baseAsset + "at a price of" + r + " " + e.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格买入" + i + " " + e.currentProduct.baseAsset + "的订单");
            var f = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: r,
                    quantity: i,
                    symbol: e.product.symbol,
                    side: "BUY",
                    stopPrice: t,
                    type: c
                })
            };
            layer.confirm(u, {
                title: "",
                area: "320px",
                closeBtn: !1,
                skin: "confirm-class",
                btn: [d.instant("Yes"), d.instant("No")]
            }, function() {
                n(f).then(function(t) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), a(function() {
                        e.stopBuy_order.quantity = "", e.openOrderType.v = "stopLimitOrder"
                    }, 500)
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 1e3
                    })
                })
            }, function() {
                layer.closeAll()
            })
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.stopLimit_sell_submit = function() {
        if (chackRate()) {
            var t = angular.element("#stopSell_StopPrice").val(),
                r = angular.element("#stopSell_curPrice").val(),
                i = angular.element("#stopSell_Quanity").val(),
                o = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
                s = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
            if (!e.Islogin) return e.showLoginBox(), !1;
            if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!s.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == r || null == r) return layer.msg(d.instant("inputprice"), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if (!s.test(r)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), !1;
            if ("" == i || null == i) return layer.msg(d.instant("inputSellVolume"), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#stopSell_Quanity").focus(), !1;
            if (!o.test(i)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
                icon: 5,
                shift: 1,
                time: 500
            }), angular.element("#stopSell_Quanity").val("").focus(), !1;
            if (i > Number(e.baseFree)) return angular.element("#stopSell_Quanity").focus(), !1;
            var l, c;
            Number(t) > Number(e.currentProduct.close) ? (l = "TAKE_PROFIT_LIMIT", c = "cn" != e.lang ? "If the last price rises to or above " + t + " " + e.currentProduct.quoteAsset + " ,an order to sell " + i + " " + e.currentProduct.baseAsset + " at a price of " + r + " " + e.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格卖出" + i + " " + e.currentProduct.baseAsset + "的订单") : Number(t) <= Number(e.currentProduct.close) && (l = "STOP_LOSS_LIMIT", c = "cn" != e.lang ? "If the last price drops to or below " + t + " " + e.currentProduct.quoteAsset + ", an order to sell" + i + " " + e.currentProduct.baseAsset + "at a price of" + r + " " + e.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格卖出" + i + " " + e.currentProduct.baseAsset + "的订单");
            var u = {
                method: "post",
                url: "/exchange/private/order",
                data: $.param({
                    price: r,
                    quantity: i,
                    symbol: e.product.symbol,
                    side: "SELL",
                    stopPrice: t,
                    type: l
                })
            };
            layer.confirm(c, {
                title: "",
                area: "320px",
                closeBtn: !1,
                skin: "confirm-class",
                btn: [d.instant("Yes"), d.instant("No")]
            }, function() {
                n(u).then(function(t) {
                    layer.msg(d.instant("orderSucceed"), {
                        icon: 1,
                        shift: 1,
                        time: 500
                    }), a(function() {
                        e.stopSell_order.quantity = "", e.openOrderType.v = "stopLimitOrder"
                    }, 500)
                }, function(e) {
                    e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
                        icon: 5,
                        shift: 1,
                        time: 500
                    }) : layer.msg(d.instant("orderFailed") + e.data.msg, {
                        icon: 5,
                        shift: 1,
                        time: 500
                    })
                })
            }, function() {
                layer.closeAll()
            })
        } else layer.msg(d.instant("tooFast"), {
            icon: 5,
            shift: 1,
            time: 700
        })
    }, e.deleteOrder = function(e, t) {
        var r = {
            method: "post",
            url: "/exchange/private/deleteOrder",
            data: $.param({
                orderId: e,
                symbol: t
            })
        };
        n(r).then(function(e) {
            layer.msg(d.instant("cancelOrderSucceed"), {
                icon: 1,
                shift: 1,
                time: 500
            })
        }, function(e) {
            layer.msg(d.instant("cancelOrderFail") + e.data.msg, {
                icon: 5,
                shift: 1,
                time: 500
            })
        })
    }, e.caculateNum = function(t) {
        var n = 0;
        return "All" == t ? n = e.openOrders.length : "Stop-Limit" == t ? angular.forEach(e.openOrders, function(e, t) {
            e.stopPrice && (n += 1)
        }) : "Limit" == t && angular.forEach(e.openOrders, function(e, t) {
            e.stopPrice || (n += 1)
        }), n
    }, e.deleteAllOrder = function(t) {
        "dqwt" == e.sign && (angular.element(".wrap").removeClass("blur"), angular.forEach(e.openOrders, function(n) {
            "All" == t ? e.deleteOrder(n.orderId, n.symbol) : "Limit" == t ? n.stopPrice || e.deleteOrder(n.orderId, n.symbol) : "Stop-Limit" == t && n.stopPrice && e.deleteOrder(n.orderId, n.symbol)
        }))
    }, e.deleteAllOrderAsk = function(t) {
        var n, r;
        if ("Limit" == t ? (r = e.caculateNum("Limit"), n = "Are you sure to cancel all Limit orders?") : "Stop-Limit" == t ? (r = e.caculateNum("Stop-Limit"), n = "Are you sure to cancel all Stop-Limit orders?") : "All" == t && (r = e.caculateNum("All"), n = "Are you sure you want to cancel all?"), r) {
            angular.element(".wrap").addClass("blur");
            var i = layer.confirm('<p style="font-size:16px;color:#c3c3c3;font-family:NSimSun;text-align: center;margin-top: 18px;height:60px">' + d.instant(n) + "</p>", {
                skin: "confirm-class",
                closeBtn: !1,
                area: ["345px", "170px"],
                title: !1,
                btn: [d.instant("Yes"), d.instant("No")]
            }, function() {
                e.deleteAllOrder(t)
            }, function() {
                angular.element(".wrap").removeClass("blur"), layer.close(i)
            })
        }
    };
    var te = function(e) {
        switch (e) {
            case "0":
            case "60":
                return "1m";
            case "180":
                return "3m";
            case "300":
                return "5m";
            case "900":
                return "15m";
            case "1800":
                return "30m";
            case "3600":
                return "1h";
            case "7200":
                return "2h";
            case "14400":
                return "4h";
            case "21600":
                return "6h";
            case "43200":
                return "12h";
            case "86400":
                return "1d";
            case "259200":
                return "3d";
            case "604800":
                return "1w"
        }
        console.log("Error parsing resolution: " + e)
    };
    void 0 !== e.product.symbol && (e.product.baseCurrency = e.product.oriSymbol.split("_")[0], e.product.qouteCurrency = e.product.oriSymbol.split("_")[1]);
    var ne = "60",
        re = te(ne);
    RTBTC.instrument("Binance", e.product.symbol, e.product.qouteCurrency);
    var ie = JSON.parse(localStorage.chart || "{}"),
        oe = {
            t: Number(ne),
            icontrols: !0,
            i: [{
                m: !0,
                p: 0,
                h: 50,
                u: [],
                g: !0,
                o: []
            }, {
                m: !1,
                t: "vol",
                i: null,
                p: 5,
                h: 10,
                r: []
            }]
        };
    if (localStorage.chart) {
        e.curzb = ie.curzb;
        for (le = 0; le < ie.u.length; le++) {
            ae = ie.u[le];
            oe.i[0].u.push({
                i: null,
                s: ae.s,
                t: ae.t
            }), e.curOver = function(e) {
                var t;
                return "macd" == e ? t = "MACD" : "trix" == e ? t = "TRIX" : "kdj" == e ? t = "KDJ" : "BRAR" == e || ("storsi" == e ? t = "StochRSI" : "VR" == e || ("rsi" == e ? t = "RSI" : "emv" == e ? t = "EMV" : "dmi" == e ? t = "DMI" : "wpr" == e ? t = "WR" : "obv" == e ? t = "OBV" : "ROC" == e || ("bnd" == e ? t = "BOLL" : "mtm" == e ? t = "MTM" : "psar" == e ? t = "SAR" : "ema" == e ? t = "EMA" : "PSY" == e || ("cci" == e ? t = "CCI" : "vwap" == e ? t = "VWAP" : "ma" == e ? t = "MA" : "avl" == e && (t = "AVL"))))), t
            }(ae.t)
        }
        for (le = 0; le < ie.o.length; le++) {
            var ae = ie.o[le];
            oe.i[0].o.push({
                i: null,
                s: o.s,
                t: o.t
            }), e.curOver = ae.t
        }
        for (var se = 0; se < ie.i.length; se++) {
            var le = ie.i[se];
            oe.i.push({
                i: null,
                t: le.t,
                h: le.h,
                r: [],
                p: 5,
                m: !1
            })
        }
    } else e.curzb = "MACD", oe.i.push({
        m: !1,
        t: "macd",
        i: null,
        p: 5,
        h: 10,
        r: []
    }), oe.i[0].u.push({
        t: "avl",
        i: null,
        s: []
    });
    window.chart = (new Chart).build("#chart", null, oe), chart.onTheme("chart-black-" + EXCHANGE);
    var ce = (new custLine).build();
    ce.setChartData(chart.getInernal()), e.setDrawLineType = function(e) {
        ce.add(e), chart.setCrossHair(!1)
    }, ce.ifNull(function() {
        chart.setCrossHair(!0)
    }), e.deleteLine = function() {
        ce.deleteLine(), e.drawLists = !1
    }, e.cleanLines = function() {
        ce.clean(), e.drawLists = !1
    }, window.UserAccount = UserAccount_Class.Build();
    var ue = angular.element(window).height(),
        fe = angular.element(".header").outerHeight(!0),
        de = angular.element(".detail-lb").outerHeight(!0);
    angular.element(".box-inner").css({
        height: ue - fe - de - 39,
        "max-height": ue - fe - 75
    });
    var pe = (new VisualDepth).build("#depth", $("#p"));
    pe.onTheme("depth-black-" + EXCHANGE), e.depthMergeUnit = 8, e.trades = [], e.todayTrades = [], e.streamBids = {}, e.streamBidsKeys = [], e.streamAsks = {}, e.streamAsksKeys = [];
    var he = function(t) {
            if ("depthUpdate" == t.eventType) {
                console.log(t.bids), M(t.bids, e.streamBids), M(t.asks, e.streamAsks);
                OBD.loadBook(e.streamAsks, e.streamBids, 999999999), e.streamBidsKeys = Object.keys(e.streamBids).sort(function(e, t) {
                    return e - t
                }), e.streamAsksKeys = Object.keys(e.streamAsks).sort(function(e, t) {
                    return e - t
                });
                var n = [],
                    r = [];
                I(e.streamBidsKeys, e.streamBids, n, O), I(e.streamAsksKeys, e.streamAsks, r, D), n[n.length - 1] && r[0] && !isNaN(Number(n[n.length - 1][0])) && !isNaN(Number(r[0][0])) && Number(n[n.length - 1][0]) >= Number(r[0][0]) && e.streamerInstance.RePull(), e.bidsTwenty = n.reverse(), e.asksTwenty = r.reverse(), (e.bidsTwenty.length || e.asksTwenty.length) && function(e, t) {
                        var n = [],
                            r = [];
                        angular.forEach(e, function(e) {
                            n.push(e)
                        }), angular.forEach(t, function(e) {
                            r.push(e)
                        });
                        var i = sortDepth.medianUnit(n, r, 48);
                        angular.forEach(e, function(e) {
                            e.push({
                                width: sortDepth.width(e[1], i) * ge / 100
                            })
                        }), angular.forEach(t, function(e) {
                            e.push({
                                width: sortDepth.width(e[1], i) * ge / 100
                            })
                        })
                    }(e.bidsTwenty, e.asksTwenty), F(e.asksTwenty, e.bidsTwenty, e.openOrders),
                    function(e) {
                        for (; e.length < 51;) e.push(["--", "--", "--", {
                            width: 0
                        }])
                    }(e.bidsTwenty),
                    function(e) {
                        for (; e.length < 51;) e.unshift(["--", "--", "--", {
                            width: 0
                        }])
                    }(e.asksTwenty);
                "$apply" != (o = e.$root.$$phase) && "$digest" != o && e.$apply()
            } else if ("trade" == t.eventType) {
                if ((0 == e.trades.length || e.trades[0].aggTradeId < t.aggTradeId) && (e.trades.unshift(t), e.trades.length > 50 && e.trades.pop()), !e.currentProduct.lastAggTradeId || null == e.currentProduct.lastAggTradeId || e.currentProduct.lastAggTradeId >= t.aggTradeId) return;
                e.currentProduct.lastAggTradeId = t.aggTradeId;
                var i = Number(t.price);
                e.currentProduct.close = i;
                var o = e.$root.$$phase;
                "$apply" != o && "$digest" != o && e.$apply()
            } else "kline" == t.eventType ? t.kline.interval == re && Data.onBar([t.kline.time, Number(t.kline.open), Number(t.kline.high), Number(t.kline.low), Number(t.kline.close), Number(t.kline.volume), Number(t.kline.quoteVolume)], Number(ne)) : (console.log("Error! Bad data received:"), console.log(t))
        },
        ge = 280;
    e.depthMergeChange = function(t) {
        e.depthMergeUnit = t, he({
            eventType: "depthUpdate"
        })
    };
    var me = !0,
        ve = function(t, n) {
            ce.clean(), chart.setCrossHair(!0), n ? (me || (chart.fixTime(!1), chart.clearData(), chart.removeIndicatorByname(["avl"]), chart.addOrUpdateIndicator("ma", 7), chart.addOrUpdateIndicator("ma", 25), chart.addOrUpdateIndicator("ma", 99), chart.setMode("Candle"), e.curOver = "MA", xe(), me = !0), re = te(ne = t), chart.setResolution(Number(t))) : (me && (chart.fixTime(!1), chart.clearData(), chart.setLastColorIndex(0), e.removeOver(e.curOver), chart.addOrUpdateIndicator("avl"), chart.setMode("Line"), xe(), e.curOver = "AVL", me = !1), re = te(ne = "60"), chart.setResolution(60))
        },
        be = Number(localStorage.barWidth || 5);
    e.getByInterval = function(t, n) {
        ye != n && (ve(t, !0), e.curIndex = n, ye = n, localStorage.curIndex = n)
    }, e.setTimeLine = function(t) {
        ye != t && (ve("60", !1), e.curIndex = t, localStorage.curIndex = t, ye = t)
    }, parseInt(e.curIndex) ? (me = !0, _(V[parseInt(e.curIndex)] + "", "Candle")) : (me = !1, e.curIndex = 0, _(V[parseInt(e.curIndex)] + "", "Line")), e.chartLoaded = function() {
        e.klineStreamer && e.klineStreamer.stopStream(), e.loaded = !0, n.get("/exchange/public/klineUrl").success(function(t) {
            e.connectToKlineStreamer(t)
        })
    };
    var ye = "-1";
    Data.onLoaded(function() {
        S.close("#chart"), e.chartLoaded()
    }), e.jszbLists = !1, e.setIndicator = function(t) {
        var n = L(t);
        chart.isIndicator(n) ? (e.removeIndicator(e.curzb), chart.addOrUpdateIndicator(n), e.curzb = t) : (e.removeOver(e.curOver), "ema" == n || "ma" == n ? (chart.addOrUpdateIndicator(n, 7), chart.addOrUpdateIndicator(n, 25), chart.addOrUpdateIndicator(n, 99)) : chart.addOrUpdateIndicator(n), e.curOver = t), xe()
    }, e.removeIndicator = function(t) {
        var n = L(t);
        "ema" == n || "ma" == n ? (chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n])) : chart.removeIndicatorByname([n]), e.curzb = "", xe()
    }, e.removeOver = function(t) {
        var n = L(t);
        "ema" == n || "ma" == n ? (chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n])) : chart.removeIndicatorByname([n]), e.curOver = "", xe()
    }, $(".chart").on("blur", ".icontrol input", function() {
        xe()
    });
    var xe = function() {
        var t = {};
        t.u = [], t.o = [];
        for (var n = chart.internals().slots[0].u, r = chart.internals().slots[0].o, i = 0; i < n.length; i++) t.u.push({
            s: n[i].s,
            t: n[i].t
        });
        for (i = 0; i < r.length; i++) t.o.push({
            s: r[i].s,
            t: r[i].t
        });
        t.i = [];
        for (var o = 2; o < chart.internals().slots.length; o++) {
            var a = chart.internals().slots[o];
            t.i.push({
                h: a.h,
                px: a.px,
                s: a.s,
                t: a.t
            })
        }
        t.curzb = e.curzb, localStorage.chart = JSON.stringify(t)
    };
    e.disconnect = function() {
        e.streamerInstance.stopStream(), e.streamerInstance = null
    }, e.connectToSymbol = function(t) {
        null == e.streamerInstance ? e.streamerInstance = new u : e.streamerInstance.stopStream(), e.streamerInstance.startStream(e.product.symbol, t, function(t) {
            t.clean && (e.streamBids = {}, e.streamAsks = {}), he(t)
        }, function(t) {
            e.depthWrong = t;
            var n = e.$root.$$phase;
            "$apply" != n && "$digest" != n && e.$apply()
        })
    }, e.getStreamers = function() {
        e.connectToTradeStream(e.wssUrl), e.connectToSymbol(e.wssUrl)
    }, n.get("/exchange/public/wssUrl").success(function(t) {
        e.wssUrl = t, e.connectToTradeStream(t), e.connectToSymbol(t)
    });
    e.userCallback = function(t) {
        if ("outboundAccountInfo" == t.eventType) {
            t.balances.forEach(function(t) {
                if (t.asset == e.product.qouteCurrency && (e.qouteFree = t.free), t.asset == e.product.baseCurrency && (e.baseFree = t.free), e.userAssets instanceof Array) {
                    var n;
                    e.userAssets.forEach(function(r, i) {
                        r.asset == t.asset && (r.locked = t.locked, r.free = t.free, e.currentUserAsset = r.free, 0 == e.currentUserAsset ? e.takeDelivery = !1 : e.takeDelivery = !0, 0 == parseFloat(r.free).toFixed(2) && 0 == parseFloat(r.locked).toFixed(2) && 0 == parseFloat(r.freeze).toFixed(2) && 0 == parseFloat(r.ipoing).toFixed(2) && 0 == parseFloat(r.ipoable).toFixed(2) && 0 == parseFloat(r.storage).toFixed(2) && (n = i))
                    }), void 0 !== n && e.userAssets.splice(n, 1)
                }
            })
        }
        if ("executionReport" == t.eventType) {
            var n = {};
            switch (n.time = t.time, n.symbol = t.symbol, n.side = t.side, n.type = t.orderType, n.orderType = d.instant(n.type), n.status = t.orderStatus, n.workingIndicator = t.workingIndicator, n.origQty = parseFloat(t.qty), n.price = parseFloat(t.price), n.stopPrice = parseFloat(t.stopPrice), n.executedQty = parseFloat(t.cummulativeQty), n.commissionAsset = t.commissionAsset, n.orderId = t.orderId, "STOP_LOSS_LIMIT" != n.type && "TAKE_PROFIT_LIMIT" != n.type || (n.orderType = d.instant("Stop-Limit")), t.orderStatus) {
                case "NEW":
                    n.executedQty = 0, n.executedPrice = 0, console.log(n.symbol + " 委托" + n.origQty), "LIMIT" == n.type || "MARKET" == n.type ? (e.openOrders.splice(0, 0, n), e.IsopenOrdersNull = !1) : "STOP_LOSS_LIMIT" != n.type && "TAKE_PROFIT_LIMIT" != n.type || (n.workingIndicator ? angular.forEach(e.openOrders, function(t, r) {
                        n.orderId == t.orderId && n.symbol == t.symbol && (e.openOrders[r].workingIndicator = n.workingIndicator)
                    }) : (e.openOrders.splice(0, 0, n), e.IsopenOrdersNull = !1));
                    break;
                case "PARTIALLY_FILLED":
                    var r = parseFloat(t.lastQty),
                        i = parseFloat(t.lastPrice),
                        o = parseFloat(t.cummulativeQty);
                    e.openOrders instanceof Array && e.openOrders.forEach(function(e) {
                        e.symbol == n.symbol && e.orderId == n.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + i * r) / o, e.executedQty = o, e.executedQuoteQty = e.executedPrice * e.executedQty, e.status = d.instant("PARTIALLY_FILLED"))
                    });
                    var a = {};
                    a.symbol = t.symbol, a.time = t.time, a.side = t.side, a.qty = t.lastQty, a.price = t.lastPrice, a.totalQuota = o * i, a.fee = parseFloat(t.commission), a.feeAsset = t.commissionAsset, e.dealOrders.splice(0, 0, a), e.dealOrders && e.dealOrders.length > 30 && e.dealOrders.pop(), e.dealBigTotalItems = e.dealOrders.length, e.updatePosition(n, r, i, parseFloat(a.fee));
                    break;
                case "FILLED":
                    var s = parseFloat(t.lastQty),
                        l = parseFloat(t.lastPrice),
                        c = parseFloat(t.cummulativeQty);
                    console.log(t), e.openOrders instanceof Array && e.openOrders.forEach(function(e) {
                        e.symbol == n.symbol && e.orderId == n.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + l * s) / c, e.executedQty = c, e.status = d.instant("FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty, g = e)
                    });
                    var u = {};
                    u.symbol = n.symbol, u.time = n.time, u.side = n.side, u.qty = s, u.price = l;
                    var f = parseFloat(t.commission);
                    u.fee = f, u.feeAsset = t.commissionAsset, u.totalQuota = c * l, e.dealOrders.splice(0, 0, u), e.dealOrders && e.dealOrders.length > 30 && e.dealOrders.pop(), e.dealBigTotalItems = e.dealOrders.length, e.allOrders.splice(0, 0, g), e.allOrders && e.allOrders.length > 30 && e.allOrders.pop();
                    var p;
                    e.openOrders.forEach(function(e, t) {
                        e.symbol == n.symbol && e.orderId == n.orderId && (p = t)
                    }), e.openOrders.splice(p, 1), 0 == e.openOrders.length ? e.IsopenOrdersNull = !0 : e.IsopenOrdersNull = !1, e.updatePosition(n, s, l, parseFloat(f));
                    break;
                case "CANCELED":
                case "EXPIRED":
                    var h, g, s = parseFloat(t.lastQty),
                        l = parseFloat(t.lastPrice),
                        c = parseFloat(t.cummulativeQty);
                    e.openOrders.forEach(function(e, t) {
                        e.symbol == n.symbol && e.orderId == n.orderId && (h = t, 0 == c ? (e.executedPrice = n.price, e.status = d.instant("CANCELED"), "MARKET" == n.type && (e.status = d.instant("EXPIRED")), e.executedQuoteQty = 0) : (e.executedPrice = (e.executedQty * e.executedPrice + l * s) / c, e.executedQty = c, e.status = d.instant("PARTIALLY_FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty), g = e)
                    }), e.openOrders.splice(h, 1), 0 == e.openOrders.length ? e.IsopenOrdersNull = !0 : e.IsopenOrdersNull = !1, e.allOrders.splice(0, 0, g), e.allOrders && e.allOrders.length > 30 && e.allOrders.pop()
            }
            P(e.openOrders), F(e.asksTwenty, e.bidsTwenty, e.openOrders)
        }
        var m = e.$root.$$phase;
        "$apply" != m && "$digest" != m && e.$apply()
    }, e.updatePosition = function(t, n, r, i) {
        var o, a;
        if (e.userAssets instanceof Array && (e.userAssets.forEach(function(n, r) {
                n.asset == e.productSplit[t.symbol].base && (o = n, a = r)
            }), !o && "BUY" == t.side)) {
            var s = {};
            s.asset = t.symbol.replace(t.commissionAsset, ""), s.productName = t.productName, s.free = n, s.locked = 0, s.freeze = 0, s.withdrawing = 0, s.ipoing = 0, s.ipoable = 0, s.storage = 0, s.quoteAsset = t.commissionAsset, s.price = r, s.marketValue = n * r, s.profitLoss = -i, e.userAssets.splice(0, 0, s)
        }
        0 == e.userAssets.length && (e.totalMarketValue = 0, e.totalProfit = 0)
    }, e.connectToKlineStreamer = function(t) {
        null == e.klineStreamer ? e.klineStreamer = new h : e.klineStreamer.stopStream(), e.klineStreamer.startStream(e.product.symbol, t, te(ne), function(e) {
            he(e)
        })
    }, e.connectToTradeStream = function(t) {
        S.loading("#tradeHistory"), null == e.streamerTrade ? e.streamerTrade = new g : e.streamerTrade.stopStream(), e.streamerTrade.startStream(e.product.symbol, t, function(t) {
            1 == t.clean && (e.trades = []), he(t), S.close("#tradeHistory")
        })
    }, e.connectToMktdata = function(t) {
        null == e.streamerMktdata && (e.streamerMktdata = new b, e.streamerMktdata.startStream(t, function(t) {
            t.forEach(function(t) {
                if ("trade" == t.eventType) {
                    if (e.currentProduct.symbol == t.symbol) {
                        var n = Number(t.price);
                        e.currentProduct.close = n, e.currentProduct.open = t.open, e.currentProduct.high = t.high, e.currentProduct.low = t.low, e.currentProduct.volume = Number(t.volume), e.currentProduct.tradedMoney = Number(t.quoteVolume)
                    }
                    e.productSplit[t.symbol] && (e.lastPrices[e.productSplit[t.symbol].base] = t.price), angular.forEach(e.products, function(e) {
                        e.symbol == t.symbol && (e.close = Number(t.price), e.open = t.open, e.high = t.high, e.low = t.low, e.volume = Number(t.volume), e.tradedMoney = Number(t.quoteVolume), e.changeRate = 100 * Number(1 * t.price - t.open) / t.open)
                    }), e.getTransToUSDT(e.products), e.sortByKey(e.orderKey, 1)
                }
            });
            var n = e.$root.$$phase;
            "$apply" != n && "$digest" != n && e.$apply()
        }))
    }, n.get("/exchange/public/mktdataWssUrl").success(function(t) {
        e.connectToMktdata(t)
    }), e.getUserInfo = function() {
        var t = {};
        t.method = "post", t.url = "/exchange/private/startStream", n(t).success(function(t) {
            n.get("/exchange/public/wssUrl").success(function(i) {
                var o = i + "/" + t.listenKey;
                r(function() {
                    n({
                        url: "/exchange/private/pingStream",
                        method: "post",
                        data: "listenKey=" + t.listenKey
                    }).success(function() {
                        console.log("pingStream success")
                    })
                }, 18e5), null == e.userStreamerInstance && (e.userStreamerInstance = new p, e.userStreamerInstance.startStream(o, e.userCallback))
            })
        })
    }, e.depthSelect = function(e) {}, e.isFull = !1;
    var we = angular.element("#klinecon"),
        $e = angular.element("#chart_container"),
        ue = angular.element(window).height();
    e.setlayout = function() {
        var t = angular.element(window).height(),
            n = angular.element(".header").outerHeight(!0),
            r = angular.element(".detail-lb").outerHeight(!0),
            i = angular.element(".detail-rb").outerHeight(!0),
            o = angular.element(".depthctrl").outerHeight(!0),
            a = angular.element(".orderform").outerHeight(!0);
        angular.element(".detail-lt").css({
            height: t - n - r + 25,
            "max-height": t - n - 12
        }), angular.element(".detail-rt").css("height", t - n - i - 11), angular.element(".newtrade").css("height", 16 * Math.floor((t - n - i - 6 - 20) / 16)), angular.element(".tradefive").css("height", 16 * Math.floor((t - n - i - 6 - 12 - o) / 16) + 12 + o), angular.element(".tradefive-inner").css("height", 16 * Math.floor((t - n - a - (37 + o)) / 2 / 16)), he({
            eventType: "depthUpdate"
        }), "kline" == e.tabName && chart.resize(), "depth" == e.tabName && (angular.element(".box-inner").css({
            height: t - n - r - 47,
            "max-height": t
        }), pe.resize())
    }, e.fullpage = function() {
        e.isFull = !0, we.css({
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            "z-index": 99
        }), $e.css({
            width: "100%",
            "max-height": ue - 33 + "px"
        }), chart.resize()
    }, $(window).keydown(function(t) {
        27 == t.keyCode && e.isFull && e.offFullpage()
    }), e.offFullpage = function() {
        e.isFull = !1, we.css({
            position: "static"
        }), e.setlayout()
    }, m.loading(), $(window).load(function() {
        e.setlayout(), chart.resize(), angular.element("input").attr("autocomplete", "off"), m.close()
    }), window.onresize = function() {
        e.setlayout()
    };
    var ke = !1,
        Te = 0;
    $(".handle").mousedown(function(t) {
        ke = !0, Te = t.clientY;
        var n = $(".detail-lt").height(),
            r = $(".detail-lb").height();
        return $(document).mousemove(function(t) {
            if (ke) {
                var i = t.clientY - Te;
                $(".detail-lt").css("height", n + i + "px"), $(".detail-lb").css("height", r - i + "px"), "kline" == e.tabName && (chart.resize(), ce.resize()), "depth" == e.tabName && ($(".box-inner").css("height", n + i - 34 + "px"), pe.resize())
            }
        }), !1
    }), $(document).mouseup(function() {
        ke = !1
    }), e.isLogin();
    if (v = document.getElementById("askScrollBox")) {
        v.addEventListener(getTransitionEvent().type, function() {
            document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
        });
        document.getElementById("bidScrollBox").addEventListener(getTransitionEvent().type, function() {
            document.getElementById("bidScrollBox").scrollTop = 0
        })
    }
}]);
var sortDepth = new function() {
        this.sort = function(e) {
            return e.sort(function(e, t) {
                return e[1] - t[1]
            }), e
        }, this.median = function(e) {
            var t = Math.floor(e.length / 3 * 2);
            return e[t][1] < 1 ? 1 : e[t][1]
        }, this.medianUnit = function(e, t, n) {
            var r = new Array(e);
            r = r[0];
            var i = new Array(t);
            i = i[0], r = r.concat(i);
            var o = this.median(this.sort(r)) / n;
            return r = null, i = null, o
        }, this.width = function(e, t) {
            if (0 == t) return 1;
            var n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : n > 160 ? 160 : n
        }
    },
    BTCConvert = new function() {
        this.setProducts = function(e) {
            this.products = e, this.g = new Graph(e.length);
            var t = this;
            e.forEach(function(e) {
                t.g.addEdge(e.baseAsset, e.quoteAsset, e.symbol)
            })
        }, this.getNewPrice = function(e, t, n) {
            n && this.setProducts(n), this.g.bfs(e);
            var r = this.g.pathTo("BTC");
            if (r) {
                for (var i = 0; i < r.length; i++) this.products.forEach(function(e) {
                    if (e.baseAsset == r[i][0] && e.quoteAsset == r[i][1]) {
                        n = e.close;
                        t *= n
                    }
                    if (e.quoteAsset == r[i][0] && e.baseAsset == r[i][1]) {
                        var n = e.close;
                        t /= n
                    }
                });
                return t
            }
            return 0
        }
    },
    getTransitionEvent = function() {
        var e, t, n = !1,
            r = document.createElement("fakeelement"),
            i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
        for (e in i)
            if (void 0 !== r.style[e]) {
                t = i[e], n = !0;
                break
            }
        return {
            type: t,
            supported: n
        }
    };
app.factory("streamer", ["$http", "$interval", function(e, t) {
    return function() {
        var t, n = {};
        return n.isRunning = !1, n.restart = !1, n.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", n.startStream = function(e, t, r, i) {
            n.isRunning = !0, n.url = t, n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.restart = !0, n.lastConntectTime, n.callback = r, n.symbol = e, n.lowerCaseSymbol = e.toLowerCase(), n.stateChange = i || function() {}, n.stateChange(!0), n.ws && n.stopStream(), n.ws = n._makeStream()
        }, n.processData = function(e) {
            n._isDuplicate(e) || n.callback(e)
        }, n.stopStream = function() {
            n.restart = !1, n.ws && (n._clear(n.ws), n.ws.handClose = !0, n.ws.close()), n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.isRunning = !1
        }, n._rolloverStream = function() {
            console.log("Rolling over stream!"), n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.stateChange(!0), n.ws = n._makeStream()
        }, n._makeStream = function() {
            var r = new WebSocket(n.url + "/" + n.lowerCaseSymbol + "@depth.b10");
            return n._buildState(), r.onopen = function() {
                console.log("Socket has been opened for: " + n.symbol + "!"), n.lastConntectTime = new Date, n.wsbuildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState)), clearInterval(t)
            }, r.onclose = function(e) {
                console.log("Socket has been CLOSED for: " + n.symbol + "!"), n.wsbuildingState = !0, n.stateChange(!0), r.handClose ? (r.handClose = !1, console.log("Socket done!")) : (new Date).getTime() - n.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), n._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), n._rolloverStream())
            }, r.onmessage = function(e) {
                if (r == n.ws) {
                    var t = JSON.parse(e.data);
                    console.log("WS recv: " + t), t = n.converter(t), n.buildingState ? (n.backedMsg.push(t), console.log("Adding msg to backlog: " + t)) : n._isLoss(t) ? (n.backedMsg = [], n.backedMsg.push(t), n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()) : n.processData(t)
                }
            }, r.onerror = function(r) {
                n.wsbuildingState = !0, n.stateChange(!0), t || (t = setInterval(function() {
                    var t = {};
                    t.method = "get", t.url = n.root_url + "/depth", t.params = {
                        symbol: n.symbol,
                        limit: 100
                    }, e(t).success(function(e) {
                        var t = {};
                        t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, n.processData(t)
                    })
                }, 3e3)), setTimeout(function() {
                    console.log("streamer reconntect now=========="), n.stopStream(), n._rolloverStream()
                }, 6e4)
            }, r
        }, n.RePull = function() {
            n.backedMsg = [], n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()
        }, n._buildState = function() {
            var t = {};
            t.method = "get", t.url = n.root_url + "/depth", t.params = {
                symbol: n.symbol
            };
            var r = function() {
                e(t).success(function(e) {
                    n.lastDepthId = -1;
                    var t = {};
                    t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, t.clean = !0, console.log("GET All Depth Success "), n.processData(t), console.log("Initial state set!"), console.log("Replaying " + n.backedMsg.length + " backed msgs!");
                    var i = !1;
                    if (n.backedMsg && n.backedMsg.length > 0) {
                        var o = n.backedMsg[0];
                        n._isLoss(o) && (i = !0, setTimeout(function() {
                            r()
                        }, 500))
                    }
                    i || n.backedMsg.forEach(function(e, t) {
                        n.processData(e), console.log("Replayed: " + e.eventType)
                    }), n.buildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState))
                })
            };
            r()
        }, n.converter = function(e) {
            var t = {};
            return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "depthUpdate" == t.eventType ? (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.updateId = e.u, t.fupdateId = e.U, t.bids = e.b, t.asks = e.a) : (console.log("Error! Bad data received:"), console.log(t)), t
        }, n._isDuplicate = function(e) {
            if ("depthUpdate" == e.eventType) {
                if (e.updateId > n.lastDepthId) return n.lastDepthId = e.updateId, !1
            } else console.log("Error! Bad data received:"), console.log(e);
            return !0
        }, n._isLoss = function(e) {
            if ("depthUpdate" == e.eventType) {
                if (e.fupdateId <= n.lastDepthId + 1) return !1
            } else console.log("Error! Has Loss data");
            return !0
        }, n._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, n
    }
}]), app.factory("userStreamer", function() {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.lastConntectTime = new Date, e.startStream = function(t, n) {
            e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
        }, e.processData = function(t) {
            e._isDuplicate(t) || e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url);
            return t.onopen = function() {
                console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
            }, t.onclose = function(t) {
                console.log("Socket has been CLOSED for: market data!"), e.restart ? (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()) : (delete e.ws, console.log("Socket done!"))
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("User data WS recv, eventType: " + n.eventType + ", eventTime: " + n.eventTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
            }, t
        }, e._buildState = function() {
            e.buildingState = !1
        }, e.converter = function(e) {
            var t = {};
            return t.eventType = e.e, "outboundAccountInfo" == t.eventType ? (t.eventTime = e.E, t.makerCommission = e.m, t.takerCommission = e.t, t.buyerCommission = e.b, t.sellerCommission = e.s, t.isActive = e.a, t.balances = [], e.B && e.B.forEach(function(e) {
                t.balances.push({
                    asset: e.a,
                    free: e.f,
                    locked: e.l
                })
            }), t.leverage = e.l, t.positions = [], e.p && e.p.forEach(function(e) {
                t.positions.push({
                    symbol: e.s,
                    usedQty: e.u,
                    usedMargin: e.U,
                    avgQuotePrice: e.q,
                    pendingQtyBuy: e.b,
                    pendingMarginBuy: e.B,
                    pendingQtySell: e.a,
                    pendingMarginSell: e.A,
                    lockedProfitLoss: e.l
                })
            })) : "executionReport" == t.eventType && (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.clOrdId = e.c, t.side = e.S, t.orderType = e.o, t.timeInForce = e.f, t.qty = e.q, t.price = e.p, t.stopPrice = e.P, t.maxFloor = e.F, t.originalClOrdId = e.C, t.executionType = e.x, t.orderStatus = e.X, t.orderRejectReason = e.r, t.orderId = e.i, t.lastQty = e.l, t.cummulativeQty = e.z, t.lastPrice = e.L, t.commission = e.n, t.commissionAsset = e.N, t.time = e.T, t.executionId = e.I, t.tradeId = e.t, t.workingIndicator = e.w, t.isMaker = e.m, t.commissionAsset = e.N), t
        }, e._isDuplicate = function(e) {
            return !1
        }, e
    }
}), app.factory("klineStreamer", ["$http", "$interval", "$rootScope", function(e, t, n) {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", e.startStream = function(t, n, r, i) {
            e.isRunning = !0, e.url = n, e.interval = r, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.restart = !0, e.lastConntectTime = new Date, e.symbol = t, e.lowerCaseSymbol = t.toLowerCase(), e.callback = i, e.ws && e.stopStream(), e.ws = e._makeStream()
        }, e.processData = function(t) {
            e._isDuplicate(t) || e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && (e._clear(e.ws), e.ws.HandClose = !0, e.ws.close()), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url + "/" + e.lowerCaseSymbol + "@kline_" + e.interval + ".b10");
            return n.websocketStatus = "connecting", t.onopen = function() {
                n.websocketStatus = "connected", console.log("Socket has been opened for: " + e.symbol + "!"), e.lastConntectTime = new Date
            }, t.onclose = function(r) {
                console.log("Socket has been CLOSED for: " + e.symbol + "!"), t.HandClose ? (t.HandClose = !0, console.log("Socket done!")) : (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()))
            }, t.onerror = function() {
                n.websocketStatus = "error"
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("WS recv: " + n), e.processData(n)
            }, t
        }, e.converter = function(e) {
            var t = {};
            return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = {}, t.kline.time = e.k.t, t.kline.closeTime = e.k.T, t.kline.symbol = e.k.s, t.kline.interval = e.k.i, t.kline.firstId = e.k.f, t.kline.lastId = e.k.L, t.kline.open = e.k.o, t.kline.close = e.k.c, t.kline.high = e.k.h, t.kline.low = e.k.l, t.kline.volume = e.k.v, t.kline.quoteVolume = e.k.q, t.kline.count = e.k.n, t.kline.closed = e.k.x, t
        }, e._isDuplicate = function(e) {
            return "kline" != e.eventType && (console.log("Error! Bad data received:"), console.log(e), !0)
        }, e._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, e
    }
}]);
var tradeSymbol = "";
app.factory("tradeStreamer", ["$http", "$interval", function(e, t) {
    return function() {
        var t = {};
        return t.isRunning = !1, t.restart = !1, t.lastAggTradeId = -2, t.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", t.startStream = function(e, n, r) {
            t.isRunning = !0, t.lastDepthId = -2, t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.restart = !0, t.lastConntectTime, t.symbol = e, tradeSymbol = e, t.lowerCaseSymbol = e.toLowerCase(), t.url = n, t.callback = r, t.ws && t.stopStream(), t.ws = t._makeStream()
        }, t.processData = function(e) {
            t._isDuplicate(e) || t.callback(e)
        }, t.stopStream = function() {
            t.restart = !1, t.ws && (t._clear(t.ws), t.ws.HandClose = !0, t.ws.close()), t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.isRunning = !1
        }, t._rolloverStream = function() {
            console.log("Rolling over stream!"), t.backedMsg = [], t.buildingState = !0, t.ws = t._makeStream()
        }, t._makeStream = function() {
            var n = new WebSocket(t.url + "/" + t.lowerCaseSymbol + "@aggTrade.b10");
            return n.onopen = function() {
                console.log("Socket has been opened for: " + t.symbol + "!"), t.lastConntectTime = new Date, t._buildState(), clearInterval(void 0)
            }, n.onclose = function(e) {
                console.log("Socket has been CLOSED for: " + t.symbol + "!"), n.HandClose ? (n.HandClose = !1, console.log("Socket done!")) : (new Date).getTime() - t.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), t._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), t._rolloverStream())
            }, n.onmessage = function(e) {
                var n = JSON.parse(e.data);
                console.log("WS recv: " + n), n = t.converter(n), t.buildingState ? (t.backedMsg.push(n), console.log("Adding msg to backlog: " + n)) : t.processData(n)
            }, n.onerror = function(n) {
                var r = {};
                r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
                    symbol: t.symbol,
                    limit: 40
                }, e(r).success(function(e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = {};
                        r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.processData(r)
                    }
                }), setTimeout(function() {
                    console.log("streamer reconntect now=========="), t.stopStream(), t._rolloverStream()
                }, 6e4)
            }, n
        }, t._buildState = function() {
            var n = {};
            n.method = "get", n.url = t.root_url + "/aggTrades", n.params = {
                symbol: t.symbol,
                limit: 40
            }, e(n).success(function(e) {
                if (console.log("Successfully Get Trades Second Time"), tradeSymbol == t.symbol) {
                    t.lastAggTradeId = -1;
                    var n = {};
                    n.clean = !0, 0 == e.length && (n.eventType = "trade", n.aggTradeId = 1, t.processData(n));
                    for (var r = 0; r < e.length; r++) n.eventType = "trade", n.aggTradeId = e[r].a, n.firstTradeId = e[r].f, n.lastTradeId = e[r].l, n.price = e[r].p, n.qty = e[r].q, n.symbol = e[r].s, n.time = e[r].T, n.isBuyerMaker = e[r].m, n.buyerOrderId = -1, n.sellerOrderId = -1, t.processData(n), n = {};
                    console.log("Initial state set!"), console.log("Replaying " + t.backedMsg.length + " backed msgs!");
                    for (var i = t.backedMsg.shift(); i;) t.processData(i), console.log("Replayed: " + i.eventType), i = t.backedMsg.shift();
                    if (t.buildingState = !1, console.log("Replaying DONE! " + t.backedMsg.length + " backed msgs remain."), 0 != t.backedMsg.length)
                        for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), i = t.backedMsg.shift(); i;) t.processData(i), i = t.backedMsg.shift()
                }
            })
        }, t._getLastTrade = function(n) {
            var r = {};
            r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
                symbol: t.symbol,
                limit: 40
            }, e(r).success(function(e) {
                n(e)
            })
        }, t.converterGets = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = {};
                r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.push(r)
            }
            return t
        }, t.converter = function(e) {
            var t = {};
            return t.eventType = "aggTrade" == e.e && "trade", t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "trade" == t.eventType ? (t.aggTradeId = e.a, t.event = e.e, t.eventTime = e.E, t.firstTradeId = e.f, t.lastTradeId = e.l, t.price = e.p, t.qty = e.q, t.symbol = e.s, t.time = e.T, t.isBuyerMaker = e.m) : (console.log("Error! Bad data received:"), console.log(t)), t
        }, t._isDuplicate = function(e) {
            if ("trade" == e.eventType) {
                if (e.aggTradeId > t.lastAggTradeId) return t.lastAggTradeId = e.aggTradeId, !1
            } else console.log("Error! Bad data received:"), console.log(e);
            return !0
        }, t._clear = function(e) {
            e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
        }, t
    }
}]), app.factory("mktdataStreamer", ["$http", "$interval", "$rootScope", function(e, t, n) {
    return function() {
        var e = {};
        return e.isRunning = !1, e.restart = !1, e.startStream = function(t, n) {
            e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
        }, e.processData = function(t) {
            e.callback(t)
        }, e.stopStream = function() {
            e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
        }, e._rolloverStream = function() {
            console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
        }, e._makeStream = function() {
            var t = new WebSocket(e.url + "/!miniTicker@arr@3000ms");
            return n.websocketStatus = "connecting", t.onopen = function() {
                n.websocketStatus = "connected", console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
            }, t.onclose = function(t) {
                console.log("Socket has been CLOSED for: market data!"), e.restart ? (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function() {
                    console.log("streamer reconntect delay=========="), e._rolloverStream()
                }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream())) : (delete e.ws, console.log("Socket done!"))
            }, t.onerror = function() {
                n.websocketStatus = "error"
            }, t.onmessage = function(t) {
                var n = JSON.parse(t.data);
                n = e.converter(n), console.log("Market data WS recv, symbol: " + n.symbol + ", lastUpdateTime: " + n.lastUpdateTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
            }, t
        }, e._buildState = function() {
            e.buildingState = !1
        }, e.converter = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = {},
                    i = e[n];
                r.eventType = "trade", r.symbol = i.s, r.price = i.c, r.open = i.o, r.high = i.h, r.low = i.l, r.volume = i.v, r.quoteVolume = i.q, t.push(r)
            }
            return t
        }, e._isDuplicate = function(t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if ("trade" == r.eventType && (void 0 == e.lastTradeIds[r.symbol] || e.lastTradeIds[r.symbol] < r.tradeId)) return e.lastTradeIds[r.symbol] = r.tradeId, !1
            }
            return !0
        }, e
    }
}]), app.factory("myInterceptor", ["$q", "$cookies", function(e, t) {
    return {
        request: function(e) {
            return e.headers = {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                lang: localStorage.lang,
                clientType: "web"
            }, t.CSRFToken && (e.headers.CSRFToken = $.md5(t.CSRFToken)), e
        },
        response: function(e) {
            return e
        },
        requestError: function(t) {
            return e.reject(t)
        },
        responseError: function(t) {
            if (console.log(t), 401 == t.status) {
                var n = new Date;
                n.setTime(n.getTime() - 1e3), t = JSON.stringify(t), localStorage.setItem("temp2", t), localStorage.getItem("temp2"), localStorage.getItem("temp2"), localStorage.a = document.cookie, document.cookie = "logined=;path=/;expires=" + n.toGMTString(), location.href = "/login.html?callback=" + encodeURIComponent(location.pathname) + encodeURIComponent(location.search)
            }
            return e.reject(t)
        }
    }
}]), app.factory("user", ["$http", "$cookies", "$translate", function(e, t, n) {
    var r = {};
    return r.logout = function() {
        e({
            method: "post",
            url: "/user/loginOut.html"
        }).success(function(e) {
            if (e.success) {
                var t = new Date;
                t.setTime(t.getTime() - 1e3), document.cookie = "logined=;path=/;expires=" + t.toGMTString(), window.location.reload()
            }
        })
    }, r.login = function() {
        setTimeout(function() {
            angular.element("#userId").focus()
        }), layer.open({
            type: 1,
            title: null,
            shade: [.85, "#000"],
            shadeClose: !0,
            shift: 1,
            closeBtn: 1,
            area: "auto",
            content: $("#login-box"),
            end: function() {}
        })
    }, r.gauth = function() {
        angular.element(".wrap").addClass("blur"), angular.element("#imageStream1").click(), layer.open({
            type: 1,
            title: n.instant("gauth"),
            shadeClose: !0,
            shift: 1,
            area: ["300px", "200px"],
            content: $("#gauth-box"),
            end: function() {
                angular.element(".wrap").removeClass("blur")
            }
        })
    }, r
}]), app.factory("getRequest", function() {
    var e = location.search,
        t = new Object;
    if (-1 != e.indexOf("?"))
        for (var n = e.substr(1).split("&"), r = 0; r < n.length; r++) t[n[r].split("=")[0]] = unescape(n[r].split("=")[1]);
    return t
}), app.factory("layout", function() {
    var e = {};
    return e.set = function() {
        var e = angular.element(".header").outerHeight(!0),
            t = angular.element(".tradelist-main-bottom").outerHeight(!0),
            n = angular.element(window).height();
        angular.element(".tradelist-main-top").css({
            height: n - e - t,
            "max-height": n - e - t
        }), angular.element(".list-table").css({
            height: n - e - t - 79,
            "max-height": n - e - t - 79
        })
    }, e
}), app.factory("intro", ["$rootScope", function(e) {
    var t = {};
    return t.init = function() {
        e.ShouldAutoStart = !1, e.IntroOptions = {
            steps: [{
                element: "#step1",
                intro: '<img src="/exchange/resources/img/guide/step1.png"/>',
                position: "right"
            }, {
                element: "#step2",
                intro: '<img src="/exchange/resources/img/guide/step2.png"/>',
                position: "bottom"
            }, {
                element: "#step3",
                intro: '<img src="/exchange/resources/img/guide/step3.png"/>',
                position: "bottom"
            }, {
                element: "#step4",
                intro: '<img src="/exchange/resources/img/guide/step4.png"/>',
                position: "right"
            }, {
                element: "#step5",
                intro: '<img src="/exchange/resources/img/guide/step5.png"/>',
                position: "left"
            }, {
                element: "#step6",
                intro: '<img src="/exchange/resources/img/guide/step6.png"/><span class="start-btn" onclick="document.getElementsByClassName(\'introjs-overlay\')[0].click()">开始交易</span>',
                position: "left"
            }],
            showStepNumbers: !1,
            exitOnOverlayClick: !0,
            exitOnEsc: !0,
            keyboardNavigation: !0,
            showBullets: !1,
            overlayOpacity: 1,
            nextLabel: "<strong>下一步</strong>",
            prevLabel: '<span style="color:green">上一步</span>',
            skipLabel: '<i class="font font-close"></i>',
            doneLabel: '<i class="font font-close"></i>'
        }, e.showHelp = function() {
            angular.element("body").append('<div class="overlayer"></div>'), angular.element("#guide-box").show()
        }, e.hideHelp = function() {
            angular.element(".overlayer").remove(), angular.element("#guide-box").hide()
        }, e.startGuide = function() {
            e.hideHelp()
        }
    }, t
}]), app.factory("scroll", function() {
    var e, t = {};
    return t.scrollTop = function(t) {
        var n = $(t),
            r = n.find("li"),
            i = "-" + r.height() + "px";
        r.length > 1 && (e = setInterval(function() {
            n.animate({
                top: i
            }, 500, function() {
                n.find("li:first").appendTo(n), n.css("top", 0)
            })
        }, 5e3))
    }, t.stop = function() {
        clearInterval(e)
    }, t
}), app.factory("pageLoading", function() {
    var e = {};
    return e.loading = function() {
        var t = ['<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>"].join("");
        e.loading = layer.open({
            type: 1,
            title: null,
            closeBtn: !1,
            shade: .9,
            area: ["100%", "100%"],
            content: t
        })
    }, e.close = function() {
        layer.close(e.loading)
    }, e
}), app.factory("pageLoading1", function() {
    var e = {};
    return e.loading = function() {
        if (!$("#pageLoading").html()) {
            var e = ['<div id="pageLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
            $("body").append(e)
        }
    }, e.close = function() {
        $("#pageLoading").hide()
    }, e
}), app.factory("divLoading", function() {
    var e = {},
        t = {};
    return e.loading = function(e) {
        if ($(e + " #divLoading").html()) $(e + " #divLoading").show();
        else {
            var n = ['<div id="divLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
            $(e).append(n)
        }
        t[e] || (t[e] = 0), t[e] += 1
    }, e.close = function(e, n) {
        n ? (t[e] -= 1, t[e] <= 0 && $(e + " #divLoading").hide()) : $(e + " #divLoading").hide()
    }, e
}), app.factory("T", ["$translate", function(e) {
    return {
        T: function(t) {
            return t ? e.instant(t) : t
        }
    }
}]), app.factory("form", function() {
    var e, t = {};
    return t.validate = function(t, n, r, i) {
        return $(t).Validform({
            btnSubmit: n,
            showAllError: !1,
            datatype: {
                amount: /^(([1-9]\d{0,9})|0)(\.\d{1,8})?$/,
                pwd: /^(?=.*\d)(?=.*[A-Z])[\da-zA-Z~!@#$%^&*-_——\\\/]{8,}$/,
                mobile: /^[1]\d{10}$/
            },
            postonce: !1,
            ajaxPost: !0,
            tiptype: function(t, n, r) {
                if (n.obj.is("form")) e = layer.load("正在提交...", 3);
                else {
                    var i = n.obj.siblings(".Validform_checktip");
                    r(i, n.type), i.text(t)
                }
            },
            beforeSubmit: function(e) {
                $(this.btnSubmit).attr("disabled", !0), i && i()
            },
            callback: function(t) {
                layer.close(e), $(this.btnSubmit).attr("disabled", !1), r(t)
            }
        })
    }, t
}), app.factory("mobile", ["$http", "$translate", function(e, t) {
    var n = {},
        r = null;
    return n.flag = !0, n.showError = function(e, t) {
        angular.element("#" + e).focus().siblings(".Validform_checktip").text(t).addClass("Validform_wrong")
    }, n.picVerifyCode = function(e, t) {
        angular.element("#" + e).val("").focus(), angular.element("#" + t).click()
    }, n.clearCountDown = function(e, i) {
        n.flag = !0, angular.element("#" + i).text(t.instant("Regain")).removeClass("btn-disabled"), clearInterval(r)
    }, n.countDown = function(e, i) {
        angular.element("#" + e).val(""), angular.element("#" + i).addClass("btn-disabled");
        var o = 60;
        r = setInterval(function() {
            angular.element("#" + i).text(t.instant("Regain") + "(" + o + ")"), -1 == --o && n.clearCountDown(e, i)
        }, 1e3)
    }, n.sendVerifyCode = function(t, r, i, o) {
        if (n.flag) {
            if (n.flag = !1, n.countDown(r, i), o) a = $.param({
                mobile: o
            });
            else var a;
            e.post(t, a).then(function(e) {
                if (!e.data.success) return layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 1500
                }), n.picVerifyCode("registerValiCode", "imageStream1"), n.flag = !0, n.clearCountDown(r, i), !1
            }, function(e) {
                layer.msg(e.data.msg, {
                    icon: 2,
                    shift: 1,
                    time: 1500
                }), n.clearCountDown(r, i)
            })
        }
    }, n
}]), app.factory("urlSearch", function() {
    var e = {};
    return e.getUrlParam = function(e) {
        for (var t = location.search.substr(1).split("&"), n = 0; n < t.length; n++) {
            var r = t[n].split("=");
            if (e == r[0]) return r[1]
        }
    }, e
}), app.factory("SPA", function() {
    var e = {};
    return e.setUrl = function(t) {
        history.replaceState(null, "", t), e.UrlChange && e.UrlChange()
    }, e
}), app.filter("filterFloor", function() {
    return function(e) {
        return Math.floor(e)
    }
}).filter("marketPrice", function() {
    return function(e) {
        return -1 == e ? "市价" : e
    }
}).filter("filterol", function() {
    return function(e) {
        return null != e ? Number(e).toFixed(8) : "--"
    }
}).filter("filterProfitRatio", function() {
    return function(e) {
        return e > 9999 ? "+9999" : e
    }
}).filter("phone", function() {
    return function(e) {
        var t;
        return e && (t = e.substr(0, 3) + "****" + e.substr(e.length - 4)), t
    }
}).filter("filtermn", function() {
    return function(e) {
        return e >= 0 ? "+" + Number(e).toFixed(2) : Number(e).toFixed(2)
    }
}).filter("filtermnq", function() {
    return function(e) {
        var t;
        return 0 == e ? t = Number(e).toFixed(2) + "%" : e > 0 || e < 0 ? t = Number(e).toFixed(2) + "%" : "--" == e && (t = "--"), t
    }
}).filter("filtermns", function() {
    return function(e) {
        var t;
        return 0 == e ? t = Number(e).toFixed(2) : e > 0 || e < 0 ? t = Number(e).toFixed(2) : "--" == e && (t = "--"), t
    }
}).filter("get8Date", function() {
    return function(e) {
        var t = new Date(e),
            n = 6e4 * t.getTimezoneOffset(),
            r = t.getTime() + n;
        return new Date(r + 288e5)
    }
}).filter("T", ["$translate", function(e) {
    return function(t) {
        if (t) return e.instant(t)
    }
}]).filter("floor", function() {
    return function(e) {
        var t = Array.prototype.slice.call(arguments);
        return (Math.floor(Number(e) * Math.pow(10, Number(t[1]))) / Math.pow(10, Number(t[1]))).toFixed(t[1])
    }
}).filter("ifnull", function() {
    return function(e) {
        return e && 0 != Number(e) ? e : "--"
    }
}).filter("symbol", function() {
    return function(e) {
        return e = e || 0, Number(e) >= 0 ? "+" + e : e
    }
}).filter("sameGray", ["$sce", function(e) {
    return function(t, n, r) {
        var i;
        return t = t && (t + "").replace(",", ""), i = n && t.substring(0, t.length - 2) == Number(n).toFixed(r).substring(0, t.length - 2) ? '<span class="gray">' + t.substring(0, t.length - 2) + "</span>" + t.substr(t.length - 2, 2) : Number(t).toFixed(r), i = "<span>" + i + "</span>", e.trustAsHtml(i)
    }
}]).filter("getDigit", function() {
    return function(e) {
        return (1 / Math.pow(10, e)).toFixed(e)
    }
}), Date.prototype.get8Date = function() {
    var e = 6e4 * this.getTimezoneOffset(),
        t = this.getTime() + e;
    return new Date(t + 288e5)
};