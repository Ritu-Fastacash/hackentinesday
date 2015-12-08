! function n(e, i, a) {
    function t(s, o) {
        if (!i[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!o && u) return u(s, !0);
                if (r) return r(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(n) {
                var i = e[s][1][n];
                return t(i ? i : n)
            }, c, c.exports, n, e, i, a)
        }
        return i[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < a.length; s++) t(a[s]);
    return t
}({
    1: [function(n, e, i) {
        (function(e) {
            var i = function() {
                var e = n("./opensdk"),
                    i = "fasta_sshort",
                    a = "MMM dd, yyyy, hh.mmtt",
                    t = function(n) {
                        return 0 == n.status ? alert("Error in internet connection") : n.responseJSON && n.responseJSON.message && alert(n.responseJSON.message), n
                    },
                    r = function() {
                        var n = $("[data-init]"),
                            i = e.getFastaLink(),
                            t = {},
                            r = e.getOthers();
                        if (t.pin = e.getPin(), t.url = e.getURL(), t.fastaLink = i, t.clickCount = e.getClickCount(), t.linkExpiry = e.getLinkExpiry(), t.linkExpiryDisplay = "", r.expiresInDataTime && r.expiresInDataTime.displayName) t.linkExpiryDisplay = r.expiresInDataTime.displayName;
                        else {
                            var s = r.expireDateTimeResponse;
                            s = s.replace("T", " "), s = s.substring(0, s.indexOf("."));
                            var o = Date.parse(s, "yyyy-MM-dd HH:mm:ss");
                            t.linkExpiryDisplay = o.toString(a)
                        }
                        $("#shortened", n).removeClass("hide"), $("#fastaLink", n).html(i), $("#fastaLink", n).attr("href", i), $("#linkClickCount").html(t.clickCount), $("#linkExpireDate").html(t.linkExpiryDisplay)
                    },
                    s = function() {
                        var n = $("[data-init]");
                        $("#secureShortenUrlBtn", n).attr("disabled", "disabled"), $("#errorMessage", n).html("Please verify your inputs").show()
                    },
                    o = function(n) {
                        var e = $("[data-init]"),
                            i = $(n).val();
                        if (i = i.toLocaleLowerCase(), i && 0 != i.length) {
                            var a = !0,
                                t = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?",
                                r = new RegExp(t);
                            r.test(i) ? ($(n).attr("data-url", "true"), $("#errorMessage", e).html(""), a && $("#secureShortenUrlBtn", e).removeAttr("disabled")) : ($(n).attr("data-url", "false"), s())
                        } else s(), $(n).attr("data-url", "false")
                    },
                    u = function() {
                        r()
                    },
                    l = function(n) {
                        var a = $("[data-init]"),
                            r = {};
                        r.linkPurpose = i;
                        var o = $("#shareLink", a).val(),
                            l = o.toLocaleLowerCase(),
                            c = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?",
                            p = new RegExp(c);
                        if (!p.test(o)) return void s();
                        $("#errorMessage", a).html(""), 0 == l.indexOf("www.") && (o = "http://" + o);
                        var g = e.getOthers(),
                            f = $("#pinfield", a).attr("data-value");
                        f && (e.setPin(f), $("#errorMessage", a).html("")), e.setURL(o), e.setCustomLink($("#shortenLink", a).val());
                        var m = $("#clickfield", a).val();
                        m && 0 != m.length ? (e.setClickCount(m), $("#errorMessage", a).html("")) : e.setClickCount("Unlimited");
                        var d = $("#datefield", a).attr("data-value");
                        if (d) {
                            $("#errorMessage", a).html("");
                            var k = g.expiresInDataTime;
                            console.log("expiresInDataTime :" + k);
                            var h = k.dateObj,
                                v = h.toString("yyyyMMddHHmm");
                            e.setLinkExpireDateTime(v), e.setLinkExpireTimeZone(k.timeZone)
                        } else e.setLinkExpireDateTime(d), e.setLinkExpireTimeZone(d), g.expiresInDataTime = {};
                        e.createLink(r, u, t)
                    },
                    c = function() {
                        var n = $("[data-init]");
                        $("#pinfield", n).focus(function(e) {
                            $("#pinfield", n).blur(), $("#pin", n).removeClass("hide"), $("#pin #password1", n).focus()
                        }), $("#pin_done", n).click(function(e) {
                            p(this) && ($("#pin", n).addClass("hide"), $("#pin #password4", n).blur())
                        });
                        var e = 1;
                        $(".pin-input", n).keydown(function(n) {
                            var i = [8, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
                            if (8 == n.which && 0 == this.value.length) $(this).prev(".pin-input").focus();
                            else {
                                if ($.inArray(n.which, i) >= 0) return !0;
                                if (this.value.length >= e) {
                                    var a = $(this).next(".pin-input");
                                    return 0 == a.length && 9 == n.which || a.focus(), !1
                                }
                                if (n.shiftKey || n.which <= 47 || n.which >= 58) return !1
                            }
                        }).keyup(function(n) {
                            if (this.value.length >= e) {
                                var i = $(this).next(".pin-input");
                                return 0 == i.length && 9 == n.which || i.focus(), !1
                            }
                        })
                    },
                    p = function(n) {
                        var i = $("[data-init]"),
                            a = $("#pin", i),
                            t = $("form", a),
                            r = "";
                        r += $("#password1", t).val(), r += $("#password2", t).val(), r += $("#password3", t).val(), r += $("#password4", t).val();
                        var o = e.getOthers();
                        if (4 == r.length) {
                            o.pin = r, e.setOthers(o), $("#pinfield", i).val("secure pin"), $("#pinfield", i).attr("data-value", r);
                            var u = $("#shareLink", i).attr("data-url");
                            return t.attr("data-pin", "true"), u && ($("#errorMessage", i).html(""), $("#pinErrorMessage", i).html(""), $("#secureShortenUrlBtn", i).removeAttr("disabled")), !0
                        }
                        return $("#pinfield", i).val(""), $("#pinfield", i).removeAttr("data-value", r), t.attr("data-pin", "false"), s(), $("#pinErrorMessage", i).html("Please verify your inputs"), !1
                    },
                    g = function() {
                        var n = $("[data-init]");
                        $("#clickfield", n).focus(function(e) {
                            $("#clickfield", n).blur(), $("#click", n).removeClass("hide"), $("#click input[0]", n).focus()
                        }), $("#clickCountValue", n).keypress(function(n) {
                            var e = new RegExp("^[0-9]{1,8}$"),
                                i = String.fromCharCode(n.charCode ? n.charCode : n.which),
                                a = $(this).val();
                            return a && (i += a), i = parseInt(i) + 1, e.test(i) ? !0 : (n.preventDefault(), !1)
                        }), $("#unlimitedClicks", n).on("click", function() {
                            $("#clickErrorMessage", n).html(""), $("#clickfield", n).blur(), $("#click", n).addClass("hide"), $("#clickfield", n).val("Unlimited")
                        }), $("#limitedClicks", n).on("click", function() {
                            var e = $("#clickCountValue").val(),
                                i = $("#clickErrorMessage", n);
                            e && 0 != e.length && 0 != e ? (i.html(""), $("#clickfield", n).blur(), $("#click", n).addClass("hide"), $("#clickfield", n).val(e)) : i.html("Please verify your inputs")
                        })
                    },
                    f = function() {
                        var n = $("[data-init]");
                        $("#datefield", n).focus(function(e) {
                            $("#datefield", n).blur(), $("#date", n).removeClass("hide"), $("#date .timezone select", n).delay(1e4).focus()
                        }), $("#date_done", n).click(function(i) {
                            if (m(this)) {
                                $("#date", n).addClass("hide"), $("#date input", n).blur();
                                var a = e.getOthers();
                                $("#datefield", n).val(a.expiresInDataTime.displayName), $("#datefield", n).attr("data-value", a.expiresInDataTime.displayName)
                            }
                        }), $("#secureExpireDate", n).keypress(function(n) {
                            var e = String.fromCharCode(n.charCode ? n.charCode : n.which),
                                i = $(this).val();
                            return i && (e = i + e), parseInt(e, 10) >= 1 && parseInt(e, 10) <= 365 ? !0 : (n.preventDefault(), !1)
                        })
                    },
                    m = function(n) {
                        var i = $("[data-init]"),
                            t = $("#timeZone option:selected", i),
                            r = $("#timeErrorMessage", i),
                            s = $("#dateOnExpire", i).val(),
                            u = $("#timeOnExpire", i).val(),
                            l = t.val(),
                            c = t.html();
                        if (0 != l.length && 0 != s.length && 0 != u.length) {
                            r.html("");
                            var p = $("#shareLink", i);
                            o(p);
                            var g = e.getOthers(),
                                f = {};
                            f.timeZone = l;
                            var m = Date.parseExact(s + " " + u, "yyyy-MM-dd HH:mm"),
                                d = new Date;
                            return d = d.addDays("-1"), d.compareTo(m) > 0 ? (r.html("Please verify your inputs"), !1) : (f.date = s, f.time = u, f.dateObj = m, f.displayName = m.toString(a) + ", " + c, g || (g = {}), g.expiresInDataTime = f, e.setOthers(g), !0)
                        }
                        return r.html("Please verify your inputs"), !1
                    },
                    d = function(n) {
                        var i = $("[data-init]");
                        c(), g(), f();
                        var a = e.getOthers().customShareURL,
                            t = $("#shareLink", i);
                        if (a && t.val(a), $("#shareLink", i).on("input", function(n) {
                                o(t)
                            }), $("#shortenLink", i).keypress(function(n) {
                                var e = new RegExp("^[a-zA-Z0-9]+$"),
                                    i = String.fromCharCode(n.charCode ? n.charCode : n.which);
                                return e.test(i) ? !0 : (n.preventDefault(), !1)
                            }), $("#secureShortenUrlBtn", i).on("click", function() {
                                l(this)
                            }), n && n.successCB) {
                            var r = n.successCB;
                            r()
                        }
                    },
                    k = function(n) {
                        var i = {};
                        i.name = "secureShortenLink", i.callBack = d, n && n.successCB && (i.successCB = n.successCB);
                        var a = {};
                        a.curDate = Date.parse("yesterday").toString("yyyy-MM-dd"), i.data = a, e.loadTemplate(i)
                    },
                    h = function() {
                        var n = e.getOthers(),
                            i = n.shareCallBack,
                            a = e.getFastaLink();
                        i(a)
                    },
                    v = function(n, a, t) {
                        if (!n || !n.url) return void alert("Url not provided");
                        if (e.setURL(n.url), n && n.custom_url && e.setCustomLink(n.custom_url), !n || !n.pin || 4 != n.pin.length) return void alert("Pin not provided");
                        e.setPin(n.pin), n && n.clickCount && e.setClickCount(n.clickCount), n && n.linkExpiry && e.setLinkExpiry(n.linkExpiry);
                        var n = {};
                        n.linkPurpose = i;
                        var r = e.getOthers();
                        r.shareCallBack = a, e.createLink(n, h, t)
                    },
                    y = function(n, i) {
                        n || (n = {}), n.successCB = i, e.initWithConfig(n, k)
                    };
                return {
                    initWithConfig: y,
                    shortenLink: v,
                    getFastaLink: e.getFastaLink,
                    loadTemplate: k
                }
            }();
            e.fastaguard = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./opensdk": 2
    }],
    2: [function(n, e, i) {
        var a = function() {
            var e = n("./sdk/util"),
                i = (n("./plugin/plugin"), function(n, i) {
                    e.init(n, i)
                }),
                a = function(n) {
                    e.setConfig(n)
                },
                t = function(n, i) {
                    e.initWithConfig(n, i)
                },
                r = function() {
                    return e.getOthers()
                },
                s = function(n) {
                    e.setOthers(n)
                },
                o = function(n, i, a) {
                    e.createLink(n, i, a)
                },
                u = function(n, i, a) {
                    e.updateLink(n, i, a)
                },
                l = function() {
                    return e.getMessage()
                },
                c = function(n) {
                    e.setMessage(n)
                },
                p = function() {
                    return e.getSubject()
                },
                g = function(n) {
                    e.setSubject(n)
                },
                f = function(n) {
                    e.registerPlugin(n)
                },
                m = function(n) {
                    return e.getPlugin(n)
                },
                d = function(n) {
                    e.updateSocialApp(n)
                },
                k = function(n) {
                    e.loadTemplate(n)
                },
                h = function() {
                    return e.getFastaLink()
                },
                v = function() {
                    return e.getURL()
                },
                y = function(n) {
                    e.setURL(n)
                },
                b = function(n) {
                    e.setCustomLink(n)
                },
                w = function() {
                    return e.getCustomLink()
                },
                x = function() {
                    return e.getClickCount()
                },
                C = function(n) {
                    e.setClickCount(n)
                },
                P = function(n) {
                    e.setLinkExpiry(n)
                },
                L = function() {
                    return e.getLinkExpiry()
                },
                $ = function() {
                    return e.getPin()
                },
                M = function(n) {
                    e.setPin(n)
                },
                V = function() {
                    return e.getCustomLinkExpiryMessage()
                },
                N = function(n) {
                    e.setCustomLinkExpiryMessage(n)
                },
                E = function(n) {
                    e.addSocialApp(n)
                },
                j = function() {
                    return e.getLinkExpireDateTime()
                },
                B = function() {
                    return e.getLinkExpireTimeZone()
                },
                T = function(n) {
                    e.setLinkExpireDateTime(n)
                },
                D = function() {
                    return e.getSocialChannel()
                },
                S = function(n) {
                    e.setSocialChannel(n)
                },
                U = function(n) {
                    e.setLinkExpireTimeZone(n)
                },
                O = function() {
                    return e.getVersion()
                },
                R = function(n) {
                    e.setVersion(n)
                };
            return {
                init: i,
                config: a,
                initWithConfig: t,
                getURL: v,
                setURL: y,
                setCustomLink: b,
                getCustomLink: w,
                getClickCount: x,
                setClickCount: C,
                getLinkExpiry: L,
                setLinkExpiry: P,
                getLinkExpireDateTime: j,
                setLinkExpireDateTime: T,
                getLinkExpireTimeZone: B,
                setLinkExpireTimeZone: U,
                getCustomLinkExpiryMessage: V,
                setCustomLinkExpiryMessage: N,
                getPin: $,
                setPin: M,
                createLink: o,
                updateLink: u,
                getMessage: l,
                setMessage: c,
                setSubject: g,
                getSubject: p,
                getOthers: r,
                setOthers: s,
                loadTemplate: k,
                getPlugin: m,
                registerPlugin: f,
                updateSocialApp: d,
                addSocialApp: E,
                getSocialChannel: D,
                setSocialChannel: S,
                getVersion: O,
                setVersion: R,
                getFastaLink: h
            }
        }();
        e.exports = a
    }, {
        "./plugin/plugin": 3,
        "./sdk/util": 33
    }],
    3: [function(n, e, i) {
        ({
            bbm: n("./socialPlugin/bbm.js"),
            email: n("./socialPlugin/email.js"),
            fbmsg: fbmsg = n("./socialPlugin/fbmsg.js"),
            fbweb: n("./socialPlugin/fbweb.js"),
            googlePlus: n("./socialPlugin/googlePlus.js"),
            hangout: n("./socialPlugin/hangout.js"),
            kakaotalk: n("./socialPlugin/kakaotalk.js"),
            kik: n("./socialPlugin/kik.js"),
            line: n("./socialPlugin/line.js"),
            linkedIn: n("./socialPlugin/linkedIn.js"),
            linkedInWeb: n("./socialPlugin/linkedInWeb.js"),
            mqq: n("./socialPlugin/mqq.js"),
            pinterest: n("./socialPlugin/pinterest.js"),
            skype: n("./socialPlugin/skype.js"),
            sms: n("./socialPlugin/sms.js"),
            snapchat: n("./socialPlugin/snapchat.js"),
            twitter: n("./socialPlugin/twitter.js"),
            viber: n("./socialPlugin/viber.js"),
            vkontakte: n("./socialPlugin/vkontakte.js"),
            wechat: n("./socialPlugin/wechat.js"),
            whatsapp: n("./socialPlugin/whatsapp.js"),
            zalo: n("./socialPlugin/zalo.js")
        })
    }, {
        "./socialPlugin/bbm.js": 4,
        "./socialPlugin/email.js": 5,
        "./socialPlugin/fbmsg.js": 6,
        "./socialPlugin/fbweb.js": 7,
        "./socialPlugin/googlePlus.js": 8,
        "./socialPlugin/hangout.js": 9,
        "./socialPlugin/kakaotalk.js": 10,
        "./socialPlugin/kik.js": 11,
        "./socialPlugin/line.js": 12,
        "./socialPlugin/linkedIn.js": 13,
        "./socialPlugin/linkedInWeb.js": 14,
        "./socialPlugin/mqq.js": 15,
        "./socialPlugin/pinterest.js": 16,
        "./socialPlugin/skype.js": 17,
        "./socialPlugin/sms.js": 18,
        "./socialPlugin/snapchat.js": 19,
        "./socialPlugin/twitter.js": 20,
        "./socialPlugin/viber.js": 21,
        "./socialPlugin/vkontakte.js": 22,
        "./socialPlugin/wechat.js": 23,
        "./socialPlugin/whatsapp.js": 24,
        "./socialPlugin/zalo.js": 25
    }],
    4: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["PIN://"],
                t = {
                    appName: "bbm",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    5: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["mailto:?subject=", "&body="],
                t = {
                    appName: "email",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0] + n.subject + a[1] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    6: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["fb-messenger://compose"],
                t = {
                    appName: "fbmsg",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    var n = r();
                    console.log(n)
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    7: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["http://www.facebook.com/share.php?m2w&u="],
                t = {
                    appName: "fbweb",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.open(a[0] + n.fastaLink)
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    8: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["https://plus.google.com"],
                t = {
                    appName: "googleplus",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.open(a[0])
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    9: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["com.google.hangouts://chat?", "sms:"],
                t = {
                    appName: "hangout",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    e ? window.location.href = a[0] : window.location.href = a[1]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    10: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["kakaolink://"],
                t = {
                    appName: "kakaotalk",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    11: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["kik://"],
                t = {
                    appName: "kik",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    12: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["line://", "line://msg/text/"],
                t = {
                    appName: "line",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "1.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    13: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["linkedin://you"],
                t = {
                    appName: "linkedin",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    14: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["http://www.linkedin.com/shareArticle?mini=true&url="],
                t = {
                    appName: "linkedinweb",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.open(a[0] + n.fastaLink)
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    15: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["mqq://"],
                t = {
                    appName: "mqq",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    16: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["pinterest://pin/"],
                t = {
                    appName: "pinterest",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    17: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["skype://?chat"],
                t = {
                    appName: "skype",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    18: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["sms:&body=", "sms:?body="],
                t = {
                    appName: "sms",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    e ? window.location.href = a[0] + n.customMessage : window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    19: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["snapchat://"],
                t = {
                    appName: "snapchat",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    20: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["twitter://post?message="],
                t = {
                    appName: "twitter",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    21: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["viber://forward?text="],
                t = {
                    appName: "viber",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    22: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["vk://"],
                t = {
                    appName: "vkontakte",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    23: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["weixin://"],
                t = {
                    appName: "wechat",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            i.registerPlugin(l)
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    24: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["whatsapp://", "whatsapp://send?text="],
                t = {
                    appName: "whatsapp",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            return i.registerPlugin(l), {
                share: s
            }
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    25: [function(n, e, i) {
        var a = function() {
            function e(n) {
                return n && (t.pluginVerison = n.pluginVerison), t
            }
            var i = n("../../sdk/pluginManager"),
                a = ["zalo://"],
                t = {
                    appName: "zalo",
                    appVersion: "1.0"
                },
                r = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                s = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    r()
                },
                u = {
                    configure: e,
                    share: s,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            return i.registerPlugin(l), {
                share: s
            }
        }();
        e.exports = a
    }, {
        "../../sdk/pluginManager": 28
    }],
    26: [function(n, e, i) {
        var a = function() {
            var e = n("./socialApp");
            return {
                apiURL: "https://api.fastacash.com/2.0",
                version: "2.0",
                userKey: "ad99043ed6e3c347f44c2e0d934b9fb0",
                appName: "fastalink",
                fastaLinkURL: "https://fasta.link",
                initElement: "data-init",
                buttonElement: "share-button",
                others: {},
                pin: !1,
                click: !1,
                expires: !1,
                share: !1,
                uri: {
                    links: {
                        create: {
                            path: [""]
                        },
                        update: {
                            path: ["linkCode"]
                        },
                        get: {
                            path: ["linkCode", "fetch"]
                        }
                    }
                },
                social: e,
                message: "",
                subject: ""
            }
        }();
        e.exports = a
    }, {
        "./socialApp": 30
    }],
    27: [function(n, e, i) {
        var a = function() {
            var e = n("./services"),
                i = function(n, e, i) {
                    var a = n && n.userKey ? n.userKey : "",
                        t = {
                            serviceCategory: "links",
                            serviceName: "create",
                            pathParams: {},
                            data: {},
                            method: "POST",
                            successCB: e || function() {},
                            errorCB: i || function() {},
                            userKey: a
                        };
                    r(n, t)
                },
                a = function(n, e, i) {
                    var a = n.linkCode ? n.linkCode : "",
                        t = n && n.userKey ? n.userKey : "",
                        s = {
                            serviceCategory: "links",
                            serviceName: "update",
                            pathParams: {
                                linkCode: a
                            },
                            method: "PUT",
                            data: {},
                            successCB: e || function() {},
                            errorCB: i || function() {},
                            userKey: t
                        };
                    r(n, s)
                },
                t = function(n, e, i) {
                    var a = n.linkCode ? n.linkCode : "",
                        t = n && n.userKey ? n.userKey : "",
                        s = {
                            serviceCategory: "links",
                            serviceName: "get",
                            pathParams: {
                                linkCode: a
                            },
                            method: "POST",
                            data: {},
                            successCB: e || function() {},
                            errorCB: i || function() {},
                            userKey: t
                        };
                    r(n, s)
                },
                r = function(n, i) {
                    var a = n && n.linkPurpose ? n.linkPurpose : "",
                        t = n && n.url ? n.url : "",
                        r = n && n.socialChannel ? n.socialChannel : "",
                        s = n && n.desiredUrl ? n.desiredUrl : "",
                        o = n && n.pin ? n.pin : "",
                        u = n && n.maxClicks ? n.maxClicks : "",
                        l = n && n.expireInDays ? n.expireInDays : "",
                        c = n && n.expiryTimeZone ? n.expiryTimeZone : "",
                        p = n && n.expireDateTime ? n.expireDateTime : "",
                        g = n && n.errorMsg ? n.errorMsg : "";
                    i.setResponse = n.setResponse, a && (i.data.link_purpose = a), t && (i.data.url = encodeURI(t)), r && (i.data.social_channel = r), s && (i.data.desired_url = s.trim().replace(" ", "")), o && (i.data.pin = o), u && "Unlimited" != u && (i.data.max_clicks = u), c && p && (i.data.expiry_timezone = c, i.data.expire_date_time = p), l && (i.data.expire_in_days = l), g && (i.data.error_msg = g), e.callService(i)
                };
            return {
                createLink: i,
                updateLink: a,
                getLink: t
            }
        }();
        e.exports = a
    }, {
        "./services": 29
    }],
    28: [function(n, e, i) {
        var a = function() {
            var n = [],
                e = function(e) {
                    e && -1 == n.indexOf(e.pluginName) ? (n[e.pluginName] = e.plugin, e.callBack(), console.log(e.pluginName + " plugin registered successfully")) : console.log("cannot register the plugin named " + e.pluginName)
                },
                i = function(e) {
                    return n[e]
                };
            return {
                registerPlugin: e,
                getPlugin: i
            }
        }();
        e.exports = a
    }, {}],
    29: [function(n, e, i) {
        var a = function() {
            var e = n("./config"),
                i = function(n, i, t) {
                    var r = e.apiURL,
                        s = (e.version, a(n, i, t)),
                        o = [r, n, s].join("/");
                    return o
                },
                a = function(n, i, a) {
                    var t = e.uri[n][i],
                        r = t.path;
                    for (var s in a) {
                        var o = r.indexOf(s); - 1 != o ? r[o] = a[s] : r[o] = ""
                    }
                    return r.join("/")
                },
                t = function(n) {
                    var e = n && n.userKey ? n.userKey : null,
                        a = n && n.data ? n.data : null,
                        t = n && n.contentType ? n.contentType : "application/x-www-form-urlencoded",
                        r = n && n.mimeType ? n.mimeType : "",
                        s = n && n.method ? n.method : "GET",
                        o = n && n.pathParams ? n.pathParams : {},
                        u = n.serviceCategory,
                        l = n.serviceName,
                        c = n && n.successCB ? n.successCB : function() {},
                        p = n && n.errorCB ? n.errorCB : function() {},
                        g = n && n.setResponse ? n.setResponse : function() {},
                        f = n && n.processData && "" != n.processData ? n.processData : !0,
                        m = n && n.url ? n.url : i(u, l, o);
                    $.ajax({
                        type: s,
                        dataType: "json",
                        headers: {
                            user_key: e
                        },
                        data: a,
                        crossDomain: !0,
                        mimeType: r,
                        contentType: t,
                        cache: !1,
                        processData: f,
                        url: m,
                        success: function(n) {
                            g(n, c, p)
                        },
                        error: function(n, e, i) {
                            p(n, e, i)
                        }
                    })
                };
            return {
                callService: t
            }
        }();
        e.exports = a
    }, {
        "./config": 26
    }],
    30: [function(n, e, i) {
        var a = function() {
            return [{
                name: "WhatsApp",
                display: !0,
                img: "libs/fastashare/img/whatsapp.svg",
                appname: "whatsapp"
            }, {
                name: "Viber",
                display: !0,
                img: "libs/fastashare/img/viber.svg",
                appname: "viber"
            }, {
                name: "Facebook",
                display: !0,
                img: "libs/fastashare/img/fb.svg",
                appname: "fbweb"
            }, {
                name: "WeChat",
                display: !0,
                img: "libs/fastashare/img/wechat.svg",
                appname: "wechat"
            }, {
                name: "Twitter",
                display: !0,
                img: "libs/fastashare/img/twitter.svg",
                appname: "twitter"
            }, {
                name: "Hangout",
                display: !0,
                img: "libs/fastashare/img/hangout.svg",
                appname: "hangout"
            }, {
                name: "Snapchat",
                display: !0,
                img: "libs/fastashare/img/snapchat.svg",
                appname: "snapchat"
            }, {
                name: "Google+",
                display: !0,
                img: "libs/fastashare/img/gplus.svg",
                appname: "googleplus"
            }, {
                name: "Pinterest",
                display: !0,
                img: "libs/fastashare/img/pinterest.svg",
                appname: "pinterest"
            }, {
                name: "Email",
                display: !0,
                img: "libs/fastashare/img/mail.svg",
                appname: "email"
            }, {
                name: "SMS",
                display: !0,
                img: "libs/fastashare/img/sms.svg",
                appname: "sms"
            }, {
                name: "LinkedIn",
                display: !0,
                img: "libs/fastashare/img/linkedin.svg",
                appname: "linkedin"
            }, {
                name: "Line",
                display: !0,
                img: "libs/fastashare/img/line.svg",
                appname: "line"
            }, {
                name: "bbm",
                display: !0,
                img: "libs/fastashare/img/bbm.png",
                appname: "bbm"
            }, {
                name: "kakaotalk",
                display: !0,
                img: "libs/fastashare/img/kakaotalk.png",
                appname: "kakaotalk"
            }, {
                name: "kik",
                display: !0,
                img: "libs/fastashare/img/kik.png",
                appname: "kik"
            }, {
                name: "mqq",
                display: !0,
                img: "libs/fastashare/img/mqq.png",
                appname: "mqq"
            }, {
                name: "skype",
                display: !0,
                img: "libs/fastashare/img/skype.png",
                appname: "skype"
            }, {
                name: "vKontakte",
                display: !0,
                img: "libs/fastashare/img/vkontakte.png",
                appname: "vkontakte"
            }, {
                name: "Facebook Messenger",
                display: !0,
                img: "libs/fastashare/img/fbmessanger.png",
                appname: "fbmsg"
            }, {
                name: "Zalo",
                display: !0,
                img: "libs/fastashare/img/zalo.png",
                appname: "zalo"
            }]
        }();
        e.exports = a
    }, {}],
    31: [function(n, e, i) {
        var a = function() {
            return {
                fasta_share: {
                    url: "libs/fastashare/template/shareLinkPage.hbs",
                    data: {
                        shareButton: "Share URL"
                    },
                    css: {
                        shareButton: "share-btnfit"
                    },
                    partial: []
                },
                shortenLink: {
                    url: "libs/fastacut/template/shortenLinkPage.hbs",
                    data: {
                        shortenButton: "OK",
                        shareButton: "Share Link"
                    },
                    css: {
                        shareButton: "share-btnfit",
                        shortenButton: ""
                    }
                },
                secureShortenLink: {
                    url: "template/secureShortenLinkPage.hbs",
                    data: {
                        shortenButton: "SHORTEN URL",
                        shareButton: "Share Link"
                    },
                    css: {
                        shareButton: "share-btnfit",
                        shortenButton: "share-btnfit"
                    },
                    partial: []
                }
            }
        }();
        e.exports = a
    }, {}],
    32: [function(n, e, i) {
        var a = function() {
            var e = n("./templateConfig"),
                i = function(n, e, i) {
                    var a = Handlebars.compile(e),
                        t = $("[" + i.container + "]");
                    if ("fasta_share" != i.name) t.html(a(n));
                    else {
                        var r = $("[" + i.buttonElement + "]", t)[0];
                        r && $(r).html("<div class='fasta-share button' id='link_shareButton'><div>" + n.data.shareButton + "</div></div>"), t.append(a(n))
                    }
                    n.callBack(i)
                },
                a = function(n) {
                    console.log(n)
                },
                t = function(n) {
                    var t = e[n.name];
                    if (t) {
                        if (t.name = n.name, t.successCB = i, t.errorCB = a, t.merchantName = n.merchantName, t.callBack = n.callBack, n.data)
                            for (var r in n.data) t.data[r] = n.data[r];
                        return t
                    }
                    console.log("template not found")
                },
                r = function(n) {
                    var e = t(n);
                    s(e, n)
                },
                s = function(n, e) {
                    var i = n && n.successCB ? n.successCB : function() {},
                        a = n && n.errorCB ? n.errorCB : function() {},
                        t = n.url;
                    $.ajax({
                        cache: !0,
                        type: "GET",
                        url: t,
                        success: function(a) {
                            i(n, a, e)
                        },
                        error: function(n, e, i) {
                            a(n, e, i)
                        }
                    })
                };
            return {
                loadTemplate: r
            }
        }();
        e.exports = a
    }, {
        "./templateConfig": 31
    }],
    33: [function(n, e, a) {
        var t = function() {
            var e = n("./links"),
                a = n("./services"),
                t = n("./pluginManager"),
                r = n("./config"),
                s = n("./templateManager"),
                o = function() {
                    return r.URL
                },
                u = function(n) {
                    r.URL = n
                },
                l = function(n) {
                    r.customLink = n
                },
                c = function() {
                    return r.customLink
                },
                p = function() {
                    return r.clickCount
                },
                g = function(n) {
                    r.clickCount = n
                },
                f = function(n) {
                    r.linkExpiry = n
                },
                m = function() {
                    return r.linkExpiry
                },
                d = function() {
                    return r.pin
                },
                k = function(n) {
                    r.pin = n
                },
                h = function() {
                    return r.linkCode
                },
                v = function() {
                    return r.customLinkExpireMessage
                },
                y = function(n) {
                    r.customLinkExpireMessage = n
                },
                b = function(n, i, a) {
                    n = C(n), e.createLink(n, i, a)
                },
                w = function(n, e, i) {
                    n.link && (r.linkCode = n.link.code, n.link.expire.expire_date_time && (r.others.expireDateTimeResponse = n.link.expire.expire_date_time)), e()
                },
                x = function() {
                    return r.custom
                },
                C = function(n) {
                    var e = {};
                    return e.userKey = V(), e.linkPurpose = n.linkPurpose, e.url = o(), e.socialChannel = K(), e.desiredUrl = c(), e.pin = d(), e.maxClicks = p(), e.expireInDays = m(), e.errorMsg = v(), e.setResponse = w, e.custom = x(), e.linkCode = h(), e.expiryTimeZone = H(), e.expireDateTime = F(), e
                },
                P = function(n, i, a) {
                    n = C(n), n.linkCode = h(), e.updateLink(n, i, a)
                },
                L = function(n, i, a) {
                    n = C(n), n.linkCode = h(), e.getLink(n, i, a)
                },
                $ = function(n) {
                    a.callService(n)
                },
                M = function(n) {
                    return t.getPlugin(n)
                },
                V = function() {
                    return r.userKey
                },
                N = function(n) {
                    t.registerPlugin(n)
                },
                E = function(n) {
                    var e = r.social,
                        a = Object.keys(n);
                    for (i = 0; i < a.length; i++) e[a[i]] ? e[a[i]] = n[a[i]] : e.push(n[a[i]]);
                    r.social = e
                },
                j = function() {
                    return r.message
                },
                B = function(n) {
                    r.message = n
                },
                T = function() {
                    var n = [];
                    n.push(r.fastaLinkURL), c() && n.push(c()), n.push(h());
                    var e = n.join("/");
                    return e
                },
                D = function() {
                    return r.subject
                },
                S = function(n) {
                    r.subject = n
                },
                U = function(n) {
                    var e = Object.keys(n),
                        a = [];
                    for (i = 0; i < e.length; i++) a.push(n[e[i]]);
                    r.social = a
                },
                O = function(n, e) {
                    n && n.buttonElement && (r.buttonElement = n.buttonElement), e && e()
                },
                R = function(n) {
                    if (n && n.others && (r.others = n.others), n && n.pin && (1 == n.pin || 1 == n.pin ? r.pin = !0 : r.pin = !1), n && n.click && (1 == n.click || 1 == n.click) && (r.click = !0), n && n.clickCount && (r.others.customClickCount = n.clickCount), n && n.expireDate && (1 == n.expireDate || 1 == n.expireDate) && (r.expires = !0), n && n.expireDays && (r.others.customExpireDays = n.expireDays), n && n.share && (1 == n.share || 1 == n.share) && (r.share = !0), n && n.linkPurpose && (r.linkPurpose = n.linkPurpose), n && n.social) {
                        var e = n.social;
                        U(e)
                    }
                    n && n.message && (r.message = n.message), n && n.subject && (r.subject = n.subject), n && n.shareURL && (r.others.customShareURL = n.shareURL), n && n.customLinkExpiryMessage && y(n.customLinkExpiryMessage), n && n.version && Q(option.version)
                },
                _ = function(n, e) {
                    O(n), R(n), e && e(n)
                },
                I = function() {
                    return r.others
                },
                Z = function(n) {
                    for (var e in n) r.others[e] = n[e]
                },
                A = function() {
                    return r.social
                },
                q = function(n) {
                    n.container = r.initElement, n.buttonElement = r.buttonElement, n && "fasta_share" == n.name && (n.data || (n.data = {}), n.data.social = A()), s.loadTemplate(n)
                },
                K = function() {
                    return r.channel
                },
                z = function(n) {
                    r.channel = n
                },
                F = function() {
                    return r.linkExpireDateTime
                },
                W = function(n) {
                    r.linkExpireDateTime = n
                },
                H = function() {
                    return r.linkExpieTimeZone
                },
                G = function(n) {
                    r.linkExpieTimeZone = n
                },
                J = function() {
                    return r.version
                },
                Q = function(n) {
                    r.version = n
                };
            return {
                init: O,
                setConfig: R,
                initWithConfig: _,
                callService: $,
                loadTemplate: q,
                getFastaLink: T,
                getURL: o,
                setURL: u,
                getLinkExpireDateTime: F,
                setLinkExpireDateTime: W,
                getLinkExpireTimeZone: H,
                setLinkExpireTimeZone: G,
                setCustomLink: l,
                getCustomLink: c,
                getClickCount: p,
                setClickCount: g,
                getLinkExpiry: m,
                setLinkExpiry: f,
                getCustomLinkExpiryMessage: v,
                setCustomLinkExpiryMessage: y,
                getSocialChannel: K,
                setSocialChannel: z,
                getPin: d,
                setPin: k,
                createLink: b,
                updateLink: P,
                getLink: L,
                getPlugin: M,
                registerPlugin: N,
                getUserKey: V,
                getMessage: j,
                setMessage: B,
                getSubject: D,
                setSubject: S,
                getOthers: I,
                setOthers: Z,
                updateSocialApp: E,
                addSocialApp: U,
                getVersion: J,
                setVersion: Q
            }
        }();
        e.exports = t
    }, {
        "./config": 26,
        "./links": 27,
        "./pluginManager": 28,
        "./services": 29,
        "./templateManager": 32
    }]
}, {}, [1]);