
! function n(e, i, a) {
    function t(r, o) {
        if (!i[r]) {
            if (!e[r]) {
                var u = "function" == typeof require && require;
                if (!o && u) return u(r, !0);
                if (s) return s(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[r] = {
                exports: {}
            };
            e[r][0].call(c.exports, function(n) {
                var i = e[r][1][n];
                return t(i ? i : n)
            }, c, c.exports, n, e, i, a)
        }
        return i[r].exports
    }
    for (var s = "function" == typeof require && require, r = 0; r < a.length; r++) t(a[r]);
    return t
}({
    1: [function(n, e, i) {
        (function(e) {
            var i = function() {
                var e = n("./opensdk"),
                    i = "fasta_share",
                    a = function(n) {
                        return 0 == n.status ? alert("Error in internet connection") : n.responseJSON && n.responseJSON.message && alert(n.responseJSON.message), n
                    },
                    t = function() {
                        var n = $("[data-init]"),
                            i = e.getFastaLink(),
                            a = $("[data-fastaLink]", n);
                        a[0] && $([a[0]]).html(i), p()
                    },
                    s = function() {
                        var n = e.getMessage(),
                            i = n.replace("<FASTALINK>", e.getFastaLink());
                        e.setOthers({
                            customMessage: i,
                            fastaLink: e.getFastaLink(),
                            subject: e.getSubject()
                        })
                    },
                    r = function() {
                        var n = $("[data-init]");
                        $("[data-socialIcon]", n).each(function() {
                            $(this).on("click", function() {
                                o(this)
                            })
                        })
                    },
                    o = function(n) {
                        var i = $("[data-init]"),
                            a = $(n).data("appname"),
                            t = e.getPlugin(a).copyenabled;
                        $(n).data("displayname");
                        if (e.setSocialChannel(a), 0 == t) $("#copyIcon", i).hide(), $("#shareNow", i).hide(), u(), l();
                        else {
                            $("#copyIcon", i).show(), $("#shareNow", i).hide();
                            var s = navigator.userAgent.toLowerCase(); - 1 == s.indexOf("chrome") && -1 == s.indexOf("safari") && ($("#shareNowApp", i).html("Share using " + e.getSocialChannel()), $("#shareNow", i).show())
                        }
                    },
                    u = function() {
                        var n = {};
                        n.linkPurpose = i, e.updateLink(n)
                    },
                    l = function() {
                        var n = e.getSocialChannel(),
                            i = e.getPlugin(n);
                        s();
                        var a = e.getOthers();
                        i.share(a)
                    },
                    c = function(n) {
                        var s = $("[data-init]");
                        if (r(), $("#link_shareButton", s).on("click", function() {
                                var n = {};
                                n.linkPurpose = i, e.setURL(e.getOthers().customShareURL), e.createLink(n, t, a)
                            }), $("[data-close]", s).on("click", function() {
                                f()
                            }), $(".fasta-share.holder, .fasta-share.overlay", s).click(function() {
                                $(".fasta-share.holder", s).addClass("hide"), $(".fasta-share.overlay", s).addClass("hide"), $(".byfastacash", s).addClass("hide"), $("body").removeClass("overflow-hidden"), $("#copyIcon", s).hide(), $("#shareNow", s).hide()
                            }), $(".fasta-share.holder [data-fastaLink],.fasta-share.holder a", s).click(function(n) {
                                n.stopPropagation()
                            }), $("[data-shareNowApp]", s).on("click", function() {
                                e.setSocialChannel(e.getSocialChannel()), u(), l()
                            }), $("[data-fastaLink]", s).on("copy", function() {
                                $("#copyIcon", s).hide(), $("#shareNowApp", s).html("Share using " + e.getSocialChannel()), $("#shareNow", s).show()
                            }), n && n.successCB) {
                            var o = n.successCB;
                            o()
                        }
                    },
                    p = function() {
                        var n = $("[data-init]");
                        $(".fasta-share.holder", n).removeClass("hide"), $(".fasta-share.overlay", n).removeClass("hide"), $(".byfastacash", n).removeClass("hide"), $("body").addClass("overflow-hidden")
                    },
                    g = function(n) {
                        var a = {};
                        a.name = i, a.callBack = c, n && n.successCB && (a.successCB = n.successCB), e.loadTemplate(a)
                    },
                    f = function() {
                        "closeSocialOverlay" in window && window.closeSocialOverlay.call(), $(".box").hide(), $(".overlay").hide()
                    },
                    m = function() {
                        var n = e.getOthers(),
                            i = n.shareCallBack,
                            a = e.getFastaLink();
                        i(a)
                    },
                    d = function(n, a, t) {
                        if (!n || !n.url) return void alert("Url not provided");
                        e.setURL(n.url);
                        var n = {};
                        n.linkPurpose = i;
                        var s = e.getOthers();
                        s.shareCallBack = a, e.createLink(n, m, t)
                    },
                    k = function(n, i) {
                        n || (n = {}), n.successCB = i, e.initWithConfig(n, g)
                    };
                return {
                    initWithConfig: k,
                    updateSocialApp: e.updateSocialApp,
                    addSocialApp: e.addSocialApp,
                    setMessage: e.setMessage,
                    getMessage: e.getMessage,
                    setSubject: e.setSubject,
                    getSubject: e.getSubject,
                    share: d,
                    setSocialChannel: e.setSocialChannel,
                    getSocialChannel: e.getSocialChannel,
                    getCustomLink: e.getCustomLink,
                    openSocialChannel: l,
                    getFastaLink: e.getFastaLink
                }
            }();
            e.fastashare = i
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
                s = function() {
                    return e.getOthers()
                },
                r = function(n) {
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
                b = function(n) {
                    e.setURL(n)
                },
                y = function(n) {
                    e.setCustomLink(n)
                },
                P = function() {
                    return e.getCustomLink()
                },
                w = function() {
                    return e.getClickCount()
                },
                C = function(n) {
                    e.setClickCount(n)
                },
                x = function(n) {
                    e.setLinkExpiry(n)
                },
                L = function() {
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
                S = function(n) {
                    e.addSocialApp(n)
                },
                B = function() {
                    return e.getLinkExpireDateTime()
                },
                E = function() {
                    return e.getLinkExpireTimeZone()
                },
                T = function(n) {
                    e.setLinkExpireDateTime(n)
                },
                $ = function() {
                    return e.getSocialChannel()
                },
                U = function(n) {
                    e.setSocialChannel(n)
                },
                O = function(n) {
                    e.setLinkExpireTimeZone(n)
                },
                D = function() {
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
                setURL: b,
                setCustomLink: y,
                getCustomLink: P,
                getClickCount: w,
                setClickCount: C,
                getLinkExpiry: L,
                setLinkExpiry: x,
                getLinkExpireDateTime: B,
                setLinkExpireDateTime: T,
                getLinkExpireTimeZone: E,
                setLinkExpireTimeZone: O,
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
                getOthers: s,
                setOthers: r,
                loadTemplate: k,
                getPlugin: m,
                registerPlugin: f,
                updateSocialApp: d,
                addSocialApp: S,
                getSocialChannel: $,
                setSocialChannel: U,
                getVersion: D,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0] + n.subject + a[1] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    var n = s();
                    console.log(n)
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.open(a[0] + n.fastaLink)
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.open(a[0])
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    e ? window.location.href = a[0] : window.location.href = a[1]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "1.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.open(a[0] + n.fastaLink)
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    var e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    e ? window.location.href = a[0] + n.customMessage : window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[1] + n.customMessage
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
                    copyenabled: !1
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            return i.registerPlugin(l), {
                share: r
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
                s = function() {
                    return e({
                        pluginVerison: "2.0"
                    })
                },
                r = function(n) {
                    window.location.href = a[0]
                },
                o = function() {
                    s()
                },
                u = {
                    configure: e,
                    share: r,
                    copyenabled: !0
                },
                l = {
                    pluginName: t.appName,
                    callBack: o,
                    plugin: u
                };
            return i.registerPlugin(l), {
                share: r
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
                    s(n, t)
                },
                a = function(n, e, i) {
                    var a = n.linkCode ? n.linkCode : "",
                        t = n && n.userKey ? n.userKey : "",
                        r = {
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
                    s(n, r)
                },
                t = function(n, e, i) {
                    var a = n.linkCode ? n.linkCode : "",
                        t = n && n.userKey ? n.userKey : "",
                        r = {
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
                    s(n, r)
                },
                s = function(n, i) {
                    var a = n && n.linkPurpose ? n.linkPurpose : "",
                        t = n && n.url ? n.url : "",
                        s = n && n.socialChannel ? n.socialChannel : "",
                        r = n && n.desiredUrl ? n.desiredUrl : "",
                        o = n && n.pin ? n.pin : "",
                        u = n && n.maxClicks ? n.maxClicks : "",
                        l = n && n.expireInDays ? n.expireInDays : "",
                        c = n && n.expiryTimeZone ? n.expiryTimeZone : "",
                        p = n && n.expireDateTime ? n.expireDateTime : "",
                        g = n && n.errorMsg ? n.errorMsg : "";
                    i.setResponse = n.setResponse, a && (i.data.link_purpose = a), t && (i.data.url = encodeURI(t)), s && (i.data.social_channel = s), r && (i.data.desired_url = r.trim().replace(" ", "")), o && (i.data.pin = o), u && "Unlimited" != u && (i.data.max_clicks = u), c && p && (i.data.expiry_timezone = c, i.data.expire_date_time = p), l && (i.data.expire_in_days = l), g && (i.data.error_msg = g), e.callService(i)
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
                    var s = e.apiURL,
                        r = (e.version, a(n, i, t)),
                        o = [s, n, r].join("/");
                    return o
                },
                a = function(n, i, a) {
                    var t = e.uri[n][i],
                        s = t.path;
                    for (var r in a) {
                        var o = s.indexOf(r); - 1 != o ? s[o] = a[r] : s[o] = ""
                    }
                    return s.join("/")
                },
                t = function(n) {
                    var e = n && n.userKey ? n.userKey : null,
                        a = n && n.data ? n.data : null,
                        t = n && n.contentType ? n.contentType : "application/x-www-form-urlencoded",
                        s = n && n.mimeType ? n.mimeType : "",
                        r = n && n.method ? n.method : "GET",
                        o = n && n.pathParams ? n.pathParams : {},
                        u = n.serviceCategory,
                        l = n.serviceName,
                        c = n && n.successCB ? n.successCB : function() {},
                        p = n && n.errorCB ? n.errorCB : function() {},
                        g = n && n.setResponse ? n.setResponse : function() {},
                        f = n && n.processData && "" != n.processData ? n.processData : !0,
                        m = n && n.url ? n.url : i(u, l, o);
                    $.ajax({
                        type: r,
                        dataType: "json",
                        headers: {
                            user_key: e
                        },
                        data: a,
                        crossDomain: !0,
                        mimeType: s,
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
                    url: "template/shareLinkPage.hbs",
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
                        var s = $("[" + i.buttonElement + "]", t)[0];
                        s && $(s).html("<div class='fasta-share button' id='link_shareButton'><div>" + n.data.shareButton + "</div></div>"), t.append(a(n))
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
                            for (var s in n.data) t.data[s] = n.data[s];
                        return t
                    }
                    console.log("template not found")
                },
                s = function(n) {
                    var e = t(n);
                    r(e, n)
                },
                r = function(n, e) {
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
                loadTemplate: s
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
                s = n("./config"),
                r = n("./templateManager"),
                o = function() {
                    return s.URL
                },
                u = function(n) {
                    s.URL = n
                },
                l = function(n) {
                    s.customLink = n
                },
                c = function() {
                    return s.customLink
                },
                p = function() {
                    return s.clickCount
                },
                g = function(n) {
                    s.clickCount = n
                },
                f = function(n) {
                    s.linkExpiry = n
                },
                m = function() {
                    return s.linkExpiry
                },
                d = function() {
                    return s.pin
                },
                k = function(n) {
                    s.pin = n
                },
                h = function() {
                    return s.linkCode
                },
                v = function() {
                    return s.customLinkExpireMessage
                },
                b = function(n) {
                    s.customLinkExpireMessage = n
                },
                y = function(n, i, a) {
                    n = C(n), e.createLink(n, i, a)
                },
                P = function(n, e, i) {
                    n.link && (s.linkCode = n.link.code, n.link.expire.expire_date_time && (s.others.expireDateTimeResponse = n.link.expire.expire_date_time)), e()
                },
                w = function() {
                    return s.custom
                },
                C = function(n) {
                    var e = {};
                    return e.userKey = M(), e.linkPurpose = n.linkPurpose, e.url = o(), e.socialChannel = F(), e.desiredUrl = c(), e.pin = d(), e.maxClicks = p(), e.expireInDays = m(), e.errorMsg = v(), e.setResponse = P, e.custom = w(), e.linkCode = h(), e.expiryTimeZone = G(), e.expireDateTime = W(), e
                },
                x = function(n, i, a) {
                    n = C(n), n.linkCode = h(), e.updateLink(n, i, a)
                },
                L = function(n, i, a) {
                    n = C(n), n.linkCode = h(), e.getLink(n, i, a)
                },
                V = function(n) {
                    a.callService(n)
                },
                N = function(n) {
                    return t.getPlugin(n)
                },
                M = function() {
                    return s.userKey
                },
                j = function(n) {
                    t.registerPlugin(n)
                },
                S = function(n) {
                    var e = s.social,
                        a = Object.keys(n);
                    for (i = 0; i < a.length; i++) e[a[i]] ? e[a[i]] = n[a[i]] : e.push(n[a[i]]);
                    s.social = e
                },
                B = function() {
                    return s.message
                },
                E = function(n) {
                    s.message = n
                },
                T = function() {
                    var n = [];
                    n.push(s.fastaLinkURL), c() && n.push(c()), n.push(h());
                    var e = n.join("/");
                    return e
                },
                $ = function() {
                    return s.subject
                },
                U = function(n) {
                    s.subject = n
                },
                O = function(n) {
                    var e = Object.keys(n),
                        a = [];
                    for (i = 0; i < e.length; i++) a.push(n[e[i]]);
                    s.social = a
                },
                D = function(n, e) {
                    n && n.buttonElement && (s.buttonElement = n.buttonElement), e && e()
                },
                R = function(n) {
                    if (n && n.others && (s.others = n.others), n && n.pin && (1 == n.pin || 1 == n.pin ? s.pin = !0 : s.pin = !1), n && n.click && (1 == n.click || 1 == n.click) && (s.click = !0), n && n.clickCount && (s.others.customClickCount = n.clickCount), n && n.expireDate && (1 == n.expireDate || 1 == n.expireDate) && (s.expires = !0), n && n.expireDays && (s.others.customExpireDays = n.expireDays), n && n.share && (1 == n.share || 1 == n.share) && (s.share = !0), n && n.linkPurpose && (s.linkPurpose = n.linkPurpose), n && n.social) {
                        var e = n.social;
                        O(e)
                    }
                    n && n.message && (s.message = n.message), n && n.subject && (s.subject = n.subject), n && n.shareURL && (s.others.customShareURL = n.shareURL), n && n.customLinkExpiryMessage && b(n.customLinkExpiryMessage), n && n.version && Q(option.version)
                },
                _ = function(n, e) {
                    D(n), R(n), e && e(n)
                },
                A = function() {
                    return s.others
                },
                q = function(n) {
                    for (var e in n) s.others[e] = n[e]
                },
                I = function() {
                    return s.social
                },
                K = function(n) {
                    n.container = s.initElement, n.buttonElement = s.buttonElement, n && "fasta_share" == n.name && (n.data || (n.data = {}), n.data.social = I()), r.loadTemplate(n)
                },
                F = function() {
                    return s.channel
                },
                Z = function(n) {
                    s.channel = n
                },
                W = function() {
                    return s.linkExpireDateTime
                },
                z = function(n) {
                    s.linkExpireDateTime = n
                },
                G = function() {
                    return s.linkExpieTimeZone
                },
                H = function(n) {
                    s.linkExpieTimeZone = n
                },
                J = function() {
                    return s.version
                },
                Q = function(n) {
                    s.version = n
                };
            return {
                init: D,
                setConfig: R,
                initWithConfig: _,
                callService: V,
                loadTemplate: K,
                getFastaLink: T,
                getURL: o,
                setURL: u,
                getLinkExpireDateTime: W,
                setLinkExpireDateTime: z,
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
                getSocialChannel: F,
                setSocialChannel: Z,
                getPin: d,
                setPin: k,
                createLink: y,
                updateLink: x,
                getLink: L,
                getPlugin: N,
                registerPlugin: j,
                getUserKey: M,
                getMessage: B,
                setMessage: E,
                getSubject: $,
                setSubject: U,
                getOthers: A,
                setOthers: q,
                updateSocialApp: S,
                addSocialApp: O,
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