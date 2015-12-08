
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
                    i = "fasta_short",
                    a = function(n) {
                        return 0 == n.status ? alert("Error in internet connection") : n.responseJSON && n.responseJSON.message && alert(n.responseJSON.message), n
                    },
                    t = function(n) {
                        var e = $("[data-init]");
                        $("#shortened", e).removeClass("hide"), $("#fastaLink", e).html(n), $("#fastaLink", e).attr("href", n)
                    },
                    r = function() {
                        var n = e.getFastaLink();
                        t(n)
                    },
                    s = function() {
                        var n = $("[data-init]");
                        $("#shortenButton", n).attr("disabled", "disabled"), $(".errorMessage", n).html("Please verify your inputs").show()
                    },
                    o = function(n) {
                        var e = $(n).val(),
                            i = $("[data-init]");
                        if (e = e.toLowerCase(), e && 0 != e.length) {
                            var a = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?",
                                t = new RegExp(a);
                            t.test(e) ? ($("#shortenButton", i).removeAttr("disabled"), $(".errorMessage", i).html("")) : s()
                        } else s()
                    },
                    u = function(n) {
                        var t = $("[data-init]"),
                            s = e.getOthers().customShareURL,
                            u = $("#shareLink", t);
                        if (s && u.val(s), $("#shareLink", t).on("input", function(n) {
                                o(this)
                            }), $("#shortenLink", t).keypress(function(n) {
                                var e = new RegExp("^[a-zA-Z0-9]+$"),
                                    i = String.fromCharCode(n.charCode ? n.charCode : n.which);
                                return e.test(i) ? !0 : (n.preventDefault(), !1)
                            }), $("#shortenButton", t).on("click", function() {
                                var n = {};
                                n.linkPurpose = i;
                                var s = $("#shareLink", t).val(),
                                    o = s.toLocaleLowerCase();
                                0 == o.indexOf("www.") && (s = "http://" + s), e.setURL(s), e.setCustomLink($("#shortenLink", t).val()), e.createLink(n, r, a)
                            }), n && n.successCB) {
                            var l = n.successCB;
                            l()
                        }
                    },
                    l = function(n) {
                        var i = {};
                        i.name = "shortenLink", i.callBack = u, n && n.successCB && (i.successCB = n.successCB), n && n.url && e.setURL(n.url), e.loadTemplate(i)
                    },
                    c = function() {
                        var n = e.getOthers(),
                            i = n.shareCallBack,
                            a = e.getFastaLink();
                        i(a)
                    },
                    p = function(n, a, t) {
                        if (!n || !n.url) return void alert("Url not provided");
                        if (e.setURL(n.url), !n || !n.custom_url) return void alert("Shorten Url not provided");
                        e.setCustomLink(n.custom_url);
                        var n = {};
                        n.linkPurpose = i;
                        var r = e.getOthers();
                        r.shareCallBack = a, e.createLink(n, c, t)
                    },
                    g = function(n, i) {
                        n || (n = {}), n.successCB = i, e.initWithConfig(n, l)
                    };
                return {
                    shortenLink: p,
                    initWithConfig: g,
                    getFastaLink: e.getFastaLink,
                    loadTemplate: l
                }
            }();
            e.fastacut = i
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
                k = function(n) {
                    e.updateSocialApp(n)
                },
                d = function(n) {
                    e.loadTemplate(n)
                },
                h = function() {
                    return e.getFastaLink()
                },
                v = function() {
                    return e.getURL()
                },
                b = function(n) {
                    e.setURL(n)
                },
                y = function(n) {
                    e.setCustomLink(n)
                },
                w = function() {
                    return e.getCustomLink()
                },
                P = function() {
                    return e.getClickCount()
                },
                x = function(n) {
                    e.setClickCount(n)
                },
                L = function(n) {
                    e.setLinkExpiry(n)
                },
                C = function() {
                    return e.getLinkExpiry()
                },
                V = function() {
                    return e.getPin()
                },
                N = function(n) {
                    e.setPin(n)
                },
                M = function() {
                    return e.getCustomLinkExpiryMessage()
                },
                j = function(n) {
                    e.setCustomLinkExpiryMessage(n)
                },
                B = function(n) {
                    e.addSocialApp(n)
                },
                E = function() {
                    return e.getLinkExpireDateTime()
                },
                T = function() {
                    return e.getLinkExpireTimeZone()
                },
                S = function(n) {
                    e.setLinkExpireDateTime(n)
                },
                U = function() {
                    return e.getSocialChannel()
                },
                R = function(n) {
                    e.setSocialChannel(n)
                },
                D = function(n) {
                    e.setLinkExpireTimeZone(n)
                },
                _ = function() {
                    return e.getVersion()
                },
                O = function(n) {
                    e.setVersion(n)
                };
            return {
                init: i,
                config: a,
                initWithConfig: t,
                getURL: v,
                setURL: b,
                setCustomLink: y,
                getCustomLink: w,
                getClickCount: P,
                setClickCount: x,
                getLinkExpiry: C,
                setLinkExpiry: L,
                getLinkExpireDateTime: E,
                setLinkExpireDateTime: S,
                getLinkExpireTimeZone: T,
                setLinkExpireTimeZone: D,
                getCustomLinkExpiryMessage: M,
                setCustomLinkExpiryMessage: j,
                getPin: V,
                setPin: N,
                createLink: o,
                updateLink: u,
                getMessage: l,
                setMessage: c,
                setSubject: g,
                getSubject: p,
                getOthers: r,
                setOthers: s,
                loadTemplate: d,
                getPlugin: m,
                registerPlugin: f,
                updateSocialApp: k,
                addSocialApp: B,
                getSocialChannel: U,
                setSocialChannel: R,
                getVersion: _,
                setVersion: O,
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
                    url: "template/shortenLinkPage.hbs",
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
                    url: "libs/fastaguard/template/secureShortenLinkPage.hbs",
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
                k = function() {
                    return r.pin
                },
                d = function(n) {
                    r.pin = n
                },
                h = function() {
                    return r.linkCode
                },
                v = function() {
                    return r.customLinkExpireMessage
                },
                b = function(n) {
                    r.customLinkExpireMessage = n
                },
                y = function(n, i, a) {
                    n = x(n), e.createLink(n, i, a)
                },
                w = function(n, e, i) {
                    n.link && (r.linkCode = n.link.code, n.link.expire.expire_date_time && (r.others.expireDateTimeResponse = n.link.expire.expire_date_time)), e()
                },
                P = function() {
                    return r.custom
                },
                x = function(n) {
                    var e = {};
                    return e.userKey = M(), e.linkPurpose = n.linkPurpose, e.url = o(), e.socialChannel = I(), e.desiredUrl = c(), e.pin = k(), e.maxClicks = p(), e.expireInDays = m(), e.errorMsg = v(), e.setResponse = w, e.custom = P(), e.linkCode = h(), e.expiryTimeZone = G(), e.expireDateTime = F(), e
                },
                L = function(n, i, a) {
                    n = x(n), n.linkCode = h(), e.updateLink(n, i, a)
                },
                C = function(n, i, a) {
                    n = x(n), n.linkCode = h(), e.getLink(n, i, a)
                },
                V = function(n) {
                    a.callService(n)
                },
                N = function(n) {
                    return t.getPlugin(n)
                },
                M = function() {
                    return r.userKey
                },
                j = function(n) {
                    t.registerPlugin(n)
                },
                B = function(n) {
                    var e = r.social,
                        a = Object.keys(n);
                    for (i = 0; i < a.length; i++) e[a[i]] ? e[a[i]] = n[a[i]] : e.push(n[a[i]]);
                    r.social = e
                },
                E = function() {
                    return r.message
                },
                T = function(n) {
                    r.message = n
                },
                S = function() {
                    var n = [];
                    n.push(r.fastaLinkURL), c() && n.push(c()), n.push(h());
                    var e = n.join("/");
                    return e
                },
                U = function() {
                    return r.subject
                },
                R = function(n) {
                    r.subject = n
                },
                D = function(n) {
                    var e = Object.keys(n),
                        a = [];
                    for (i = 0; i < e.length; i++) a.push(n[e[i]]);
                    r.social = a
                },
                _ = function(n, e) {
                    n && n.buttonElement && (r.buttonElement = n.buttonElement), e && e()
                },
                O = function(n) {
                    if (n && n.others && (r.others = n.others), n && n.pin && (1 == n.pin || 1 == n.pin ? r.pin = !0 : r.pin = !1), n && n.click && (1 == n.click || 1 == n.click) && (r.click = !0), n && n.clickCount && (r.others.customClickCount = n.clickCount), n && n.expireDate && (1 == n.expireDate || 1 == n.expireDate) && (r.expires = !0), n && n.expireDays && (r.others.customExpireDays = n.expireDays), n && n.share && (1 == n.share || 1 == n.share) && (r.share = !0), n && n.linkPurpose && (r.linkPurpose = n.linkPurpose), n && n.social) {
                        var e = n.social;
                        D(e)
                    }
                    n && n.message && (r.message = n.message), n && n.subject && (r.subject = n.subject), n && n.shareURL && (r.others.customShareURL = n.shareURL), n && n.customLinkExpiryMessage && b(n.customLinkExpiryMessage), n && n.version && Q(option.version)
                },
                $ = function(n, e) {
                    _(n), O(n), e && e(n)
                },
                q = function() {
                    return r.others
                },
                K = function(n) {
                    for (var e in n) r.others[e] = n[e]
                },
                A = function() {
                    return r.social
                },
                Z = function(n) {
                    n.container = r.initElement, n.buttonElement = r.buttonElement, n && "fasta_share" == n.name && (n.data || (n.data = {}), n.data.social = A()), s.loadTemplate(n)
                },
                I = function() {
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
                G = function() {
                    return r.linkExpieTimeZone
                },
                H = function(n) {
                    r.linkExpieTimeZone = n
                },
                J = function() {
                    return r.version
                },
                Q = function(n) {
                    r.version = n
                };
            return {
                init: _,
                setConfig: O,
                initWithConfig: $,
                callService: V,
                loadTemplate: Z,
                getFastaLink: S,
                getURL: o,
                setURL: u,
                getLinkExpireDateTime: F,
                setLinkExpireDateTime: W,
                getLinkExpireTimeZone: G,
                setLinkExpireTimeZone: H,
                setCustomLink: l,
                getCustomLink: c,
                getClickCount: p,
                setClickCount: g,
                getLinkExpiry: m,
                setLinkExpiry: f,
                getCustomLinkExpiryMessage: v,
                setCustomLinkExpiryMessage: b,
                getSocialChannel: I,
                setSocialChannel: z,
                getPin: k,
                setPin: d,
                createLink: y,
                updateLink: L,
                getLink: C,
                getPlugin: N,
                registerPlugin: j,
                getUserKey: M,
                getMessage: E,
                setMessage: T,
                getSubject: U,
                setSubject: R,
                getOthers: q,
                setOthers: K,
                updateSocialApp: B,
                addSocialApp: D,
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