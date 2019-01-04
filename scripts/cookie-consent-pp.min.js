"use strict";

function getRelativePath(source, target) {
	var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
		targetArr = target.split(sep),
		sourceArr = source.split(sep),
		filename = targetArr.pop(),
		targetPath = targetArr.join(sep),
		relativePath = "";
	
	while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
		sourceArr.pop();
		relativePath += ".." + sep;
	}
	
	var relPathArr = targetArr.slice(sourceArr.length);
	relPathArr.length && (relativePath += relPathArr.join(sep) + sep);
	
	return relativePath + filename;
}

var _typeof3 =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  _typeof2 =
    "function" == typeof Symbol && "symbol" === _typeof3(Symbol.iterator)
      ? function(e) {
          return "undefined" == typeof e ? "undefined" : _typeof3(e);
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : "undefined" == typeof e
              ? "undefined"
              : _typeof3(e);
        },
  _typeof =
    "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator)
      ? function(e) {
          return "undefined" == typeof e ? "undefined" : _typeof2(e);
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : "undefined" == typeof e
              ? "undefined"
              : _typeof2(e);
        },
  d_utils = {
    sel: function(e) {
      return document.querySelector(e);
    },
    element_conversion: function(e) {
      var t;
      if ("string" == typeof e)
        try {
          t = document.querySelector(e);
        } catch (e) {
          return console.error("Couldn't find the parent"), !1;
        }
      else {
        if ("object" !== ("undefined" == typeof e ? "undefined" : _typeof(e)))
          return !1;
        t = e;
      }
      return t;
    },
    show: function(e) {
      (e = this.element_conversion(e)), (e.style.display = "");
    },
    hide: function(e) {
      (e = this.element_conversion(e)), (e.style.display = "none");
    },
    prepend: function(e, t) {
      if ("undefined" == typeof t)
        return console.error("No children specified"), !1;
      if (
        "object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) &&
        "string" != typeof t
      )
        return console.error("Children must be an object or a string"), !1;
      var n = this.element_conversion(e);
      null !== n &&
        ("string" != typeof t
          ? n.insertAdjacentElement("afterbegin", t)
          : n.insertAdjacentHTML("afterbegin", t));
    },
    append: function(e, t) {
      if ("undefined" == typeof t)
        return console.error("No children specified"), !1;
      if (
        "object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) &&
        "string" != typeof t
      )
        return console.error("Children must be an object or a string"), !1;
      var n = this.element_conversion(e);
      null !== n &&
        ("string" != typeof t
          ? n.insertAdjacentElement("beforeend", t)
          : n.insertAdjacentHTML("beforeend", t));
    },
    make_button: function(e, t) {
      var n = document.createElement("button");
      return (
        n.classList.add("cc-button"),
        "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) &&
        t.length > 0
          ? t.forEach(function() {
              n.classList.add(t);
            })
          : "string" == typeof t && n.classList.add(t),
        (n.innerHTML = e),
        n
      );
    },
    is_valid_url: function(e) {
      var t = new RegExp(
        "^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return t.test(e);
    }
  },
  cookieconsent = (function(e) {
    function t(e) {
      w.debug === !0 && console.log(e);
    }
    function n() {
      void 0 !== w.theme_css &&
        d_utils.append(
          "head",
          '<link id="cookieconsent-css" rel="stylesheet" href="' +
            w.theme_css +
            '" type="text/css" />'
        );
    }
    function i() {
      (w.cookie_notice = cc_i18n.translate("dialog", "text")),
        (w.accept_button_text = cc_i18n.translate("dialog", "i_agree_text")),
        (A = [
        //   {
        //     id: "strictly-necessary",
        //     title: cc_i18n.translate("level_strictly_necessary", "title"),
        //     content: cc_i18n.translate("level_strictly_necessary", "content")
        //   },
          {
            id: "functionality",
            title: cc_i18n.translate("level_functionality", "title"),
            content: cc_i18n.translate("level_functionality", "content")
          },
          {
            id: "tracking",
            title: cc_i18n.translate("level_tracking", "title"),
            content: cc_i18n.translate("level_tracking", "content")
          }
        //   {
        //     id: "targeting",
        //     title: cc_i18n.translate("level_targeting", "title"),
        //     content: cc_i18n.translate("level_targeting", "content")
        //   }
        ]),
        (A.get = function(e) {
          return c.call(this, e);
        }),
        (A.select = function(e) {
          switch ("undefined" == typeof e ? "undefined" : _typeof(e)) {
            case "string":
              e = c.call(A, e);
              break;
            case "object":
              e = c.call(A, e.id);
              break;
            default:
              return void error(
                "select_level() requires a level id or an actual level object"
              );
          }
          if (!e) {
            if (((e = A.get(w.default_level_id)), !e)) {
              if (!(A.length > 0))
                return void t(
                  "cookieconsent level supplied to select_level does not exist, and could not default"
                );
              e = A[0];
            }
            return A.select(e);
          }
          x = e;
          var n = A.saved();
          n[x.id] = !0;
          var i = JSON.stringify(n);
          return C.set(w.levels_cookie_name, i), e;
        }),
        (A.unselect = function(e) {
          switch ("undefined" == typeof e ? "undefined" : _typeof(e)) {
            case "string":
              e = c.call(A, e);
              break;
            case "object":
              e = c.call(A, e.id);
              break;
            default:
              return void error(
                "select_level() requires a level id or an actual level object"
              );
          }
          if (e) {
            x = e;
            var t = A.saved();
            delete t[x.id];
            var n = JSON.stringify(t);
            return C.set(w.levels_cookie_name, n), e;
          }
        }),
        (A.saved = function() {
          var e = C.get(w.levels_cookie_name),
            t = void 0;
          try {
            t = JSON.parse(e);
          } catch (e) {
            t = {};
          }
          return t;
        }),
        (A.enable_all = function() {
          A.forEach(function(e) {
            A.select(e);
          });
        }),
        (T = [
          {
            title: cc_i18n.translate(
              "preference_center_menu_and_content",
              "your_privacy_title"
            ),
            content_container: "content_your_privacy",
            content: cc_i18n.translate(
              "preference_center_menu_and_content",
              "your_privacy_content"
            )
          }
        ]),
        A.forEach(function(e) {
          T.push({
            id: e.id,
            title: e.title,
            content_container: "content_" + e.id,
            content: "\n<h1>" + e.title + "</h1>\n<p>" + e.content + "</p>\n"
          });
        }),
        T.push({
          title: cc_i18n.translate(
            "preference_center_menu_and_content",
            "more_information_title"
          ),
          content_container: "content_more_information",
          content: cc_i18n.translate(
            "preference_center_menu_and_content",
            "more_information_content"
          )
        }),
        null !== w.cookies_policy_url &&
          d_utils.is_valid_url(w.cookies_policy_url) &&
          ((w.cookie_notice =
            w.cookie_notice +
            cc_i18n.translate("dialog", "find_out_more", w.cookies_policy_url)),
          (T[T.length - 1].content =
            T[T.length - 1].content +
            cc_i18n.translate(
              "dialog",
              "find_out_more",
              w.cookies_policy_url
            )));
    }
    function c(e) {
      for (var t, n = 0; (t = this[n]); n++) if (t.id === e) return t;
      return null;
    }
    function o(e) {
      var t = document.createElement("div");
      if ("strictly-necessary" !== e.id) {
        var n = A.saved(),
          i = document.createElement("input");
        i.setAttribute("cookie_consent_toggler", "true"),
          i.setAttribute("type", "checkbox"),
          i.setAttribute("class", "checkbox_cookie_consent"),
          i.setAttribute("id", e.id),
          i.setAttribute("name", e.id);
        var c = document.createElement("label");
        c.setAttribute("for", e.id),
          n[e.id]
            ? (i.setAttribute("checked", !0),
              c.setAttribute("class", "is-active"),
              (c.innerHTML = cc_i18n.translate("dialog", "active")))
            : (c.setAttribute("class", "is-inactive"),
              (c.innerHTML = cc_i18n.translate("dialog", "inactive"))),
          d_utils.append(t, i),
          d_utils.append(t, c);
      } else {
        var o = document.createElement("p");
        o.classList.add("always-active"),
          (o.innerHTML = cc_i18n.translate("dialog", "always_active")),
          d_utils.append(t, o);
      }
      return t;
    }
    function a() {
      var e = document.createElement("div");
      e.classList.add("cc_cs_m_content");
      var t = 0;
      return (
        T.forEach(function(n) {
          var i = document.createElement("div");
          if (
            (i.classList.add("cc_cs_m_content_entry"),
            i.setAttribute("content_layout", n.content_container),
            i.setAttribute("active", "false"),
            (i.innerHTML = n.content),
            0 === t && i.setAttribute("active", !0),
            t++,
            n.id)
          ) {
            var c = o(n);
            d_utils.append(i, c);
          }
          d_utils.append(e, i);
        }),
        e
      );
    }
    function r() {
      var e = document.createElement("ul");
      e.classList.add("cc_cs_m_menu");
      var t = 0;
      return (
        T.forEach(function(n) {
          var i = document.createElement("li"),
            c = document.createElement("a");
          c.setAttribute("href", "#"),
            c.setAttribute("t", n.content_container),
            (c.innerHTML = n.title),
            0 === t && i.setAttribute("active", !0),
            t++,
            d_utils.append(i, c),
            d_utils.append(e, i);
        }),
        e
      );
    }
    function s() {
      var e = document.createElement("div");
      e.classList.add("cc_cs_content");
      var t = document.createElement("div");
      t.classList.add("cc_cs_head");
      var n = document.createElement("div");
      if ((n.classList.add("cc_cs_h_text"), null !== w.website_name)) {
        var i = document.createElement("h5");
        (i.innerHTML = w.website_name), d_utils.append(n, i);
      }
      var c = document.createElement("h2");
      (c.innerHTML = cc_i18n.translate("preference_center", "title")),
        d_utils.append(n, c);
      var o = document.createElement("div");
      o.classList.add("cc_cs_h_chlang");
      var s = document.createElement("select");
      s.setAttribute("id", "cs_chlang"),
        [].forEach.call(available_languages, function(e) {
          var t = document.createElement("option");
          (t.text = e.title),
            (t.value = e.value),
            cc_user_language === t.value &&
              t.setAttribute("selected", "selected"),
            s.add(t);
        }),
        s.addEventListener("change", function() {
          alert("aha");
        }),
        d_utils.append(o, s),
        d_utils.append(t, n),
        d_utils.append(t, o);
      var l = document.createElement("div");
      l.classList.add("cc_cs_main");
      var d = r(),
        u = a();
      d_utils.append(l, d), d_utils.append(l, u);
      var _ = document.createElement("div");
      _.classList.add("cc_cs_footer");
      var p = document.createElement("div");
      var f = document.createElement("div");
      f.classList.add("cc_cs_f_save");
      var v = d_utils.make_button(
        cc_i18n.translate("preference_center", "save"),
        ["btn-save"]
      );
      return (
        d_utils.append(f, v),
        d_utils.append(_, p),
        d_utils.append(_, f),
        d_utils.append(e, t),
        d_utils.append(e, l),
        d_utils.append(e, _),
        e.outerHTML
      );
    }
    function l(e) {
      var t = document.querySelector(".cc_cs_f_save button");
      t.addEventListener("click", function() {
        t.setAttribute("disabled", "true"),
          (t.innerHTML = "Saving"),
          setTimeout(function() {
            d_utils.hide(e),
              void 0 !== j && d_utils.hide(j),
              g(),
              C.set(w.consent_accepted_cookie_name, "true"),
              t.removeAttribute("disabled"),
              (t.innerHTML = "Save");
          }, 200);
      });
    }
    function d() {
      var e = document.querySelectorAll("input[cookie_consent_toggler]");
      [].forEach.call(e, function(e) {
        e.addEventListener("change", function() {
          var t = document.querySelector("label[for='" + e.id + "']");
          e.checked
            ? (t.setAttribute("class", "is-active"),
              (t.innerHTML = "Active"),
              A.select(e.id))
            : (t.setAttribute("class", "is-inactive"),
              (t.innerHTML = "Inactive"),
              A.unselect(e.id));
        });
      });
    }
    function u() {
      var e = document.querySelectorAll("a[t]");
      [].forEach.call(e, function(e) {
        e.addEventListener("click", function(t) {
          t.preventDefault();
          var n = e.getAttribute("t"),
            i = e.parentNode.parentNode.querySelectorAll('li[active="true"]');
          [].forEach.call(i, function(e) {
            e.setAttribute("active", "false");
          }),
            e.parentNode.setAttribute("active", "true");
          try {
            var c = document.querySelectorAll("div[content_layout]");
            [].forEach.call(c, function(e) {
              e.setAttribute("active", "false");
            });
            var o = document.querySelector('div[content_layout="' + n + '"]');
            o.setAttribute("active", "true");
          } catch (e) {}
        });
      });
    }
    function _() {
      var e = document.querySelector("#cs_chlang");
      e.addEventListener("change", function() {
        (cc_user_language = e.value), i(), v();
      });
    }
    function p() {
      (q = document.createElement("div")),
        q.classList.add("cookieconsent-overlay");
      var e = document.createElement("div");
      e.classList.add("cookieconsent-change-settings"),
        "dark" === w.palette && e.classList.add("dark"),
        (e.innerHTML = s()),
        e.addEventListener("mouseover", function() {
          e.setAttribute("mouseover", !0);
        }),
        e.addEventListener("mouseleave", function() {
          e.setAttribute("mouseover", !1);
        }),
        e.addEventListener("click", function(e) {
          e.stopPropagation();
        }),
        d_utils.append(q, e),
        d_utils.append("body", q),
        u(),
        d(),
        _(),
        l(q);
    }
    function f() {
      void 0 !== q ? d_utils.show(q) : p();
    }
    function v() {
      if (void 0 !== q) return q.parentNode.removeChild(q), (q = void 0), f();
    }
    function m(e) {
      A.enable_all();
      var t = document.createElement("div");
      t.classList.add("cookieconsent-simple"),
        t.addEventListener("mouseover", function() {
          t.setAttribute("mouseover", !0);
        }),
        t.addEventListener("mouseleave", function() {
          t.setAttribute("mouseover", !1);
        }),
        "dark" === w.palette && t.classList.add("dark"),
        void 0 !== e && "headline" === e && t.classList.add("headline");
      var n = document.createElement("h1");
      n.innerHTML = cc_i18n.translate("dialog", "title");
      var i = document.createElement("div");
      i.classList.add("ccp-text"), (i.innerHTML = w.cookie_notice);
      var c = d_utils.make_button(
        cc_i18n.translate("dialog", "change_settings"),
        ["btn-change-settings"]
      );
      c.addEventListener("click", function() {
        f();
      });
      var o = d_utils.make_button(w.accept_button_text, ["btn-got-it"]);
      o.addEventListener("click", function() {
        o.setAttribute("disabled", "true"),
          (o.innerHTML = "Saving"),
          setTimeout(function() {
            d_utils.hide(t),
              g(),
              C.set(w.consent_accepted_cookie_name, "true"),
              o.removeAttribute("disabled"),
              (o.innerHTML = w.accept_button_text);
          }, 600);
      }),
        d_utils.append(t, n),
        d_utils.append(t, i),
        d_utils.append(t, o),
        d_utils.append(t, c),
        void 0 !== e && "headline" === e
          ? (d_utils.prepend(w.popup_container, t),
            document.addEventListener("scroll", function() {
              var e = window.pageYOffset || document.documentElement.scrollTop;
              e > 1
                ? t.classList.contains("scrolled") ||
                  t.classList.add("scrolled")
                : t.classList.remove("scrolled");
            }))
          : d_utils.append(w.popup_container, t),
        (j = t),
        w.cookie_notice_autohide_timeout > 0 &&
          (M = setTimeout(function() {
            t.hasAttribute("mouseover") || d_utils.hide(t);
          }, 1e3 * w.cookie_notice_autohide_timeout));
    }
    function y(e) {
      A.enable_all();
      var t = document.createElement("div");
      t.classList.add("cookieconsent-overlay");
      var n = document.createElement("div");
      n.classList.add("cookieconsent-interstitial"),
        n.addEventListener("mouseover", function() {
          n.setAttribute("mouseover", !0);
        }),
        n.addEventListener("mouseleave", function() {
          n.setAttribute("mouseover", !1);
        }),
        "dark" === w.palette && n.classList.add("dark"),
        void 0 !== e && "standalone" === e && n.classList.add("standalone");
      var i = document.createElement("h1");
      i.innerHTML = cc_i18n.translate("dialog", "title");
      var c = document.createElement("div");
      c.classList.add("ccp-text"), (c.innerHTML = w.cookie_notice);
      var o = d_utils.make_button(
        cc_i18n.translate("dialog", "change_settings"),
        ["btn-change-settings"]
      );
      o.addEventListener("click", function() {
        f();
      });
      var a = d_utils.make_button(w.accept_button_text, ["btn-got-it"]);
      a.addEventListener("click", function() {
        a.setAttribute("disabled", "true"),
          (a.innerHTML = "Saving"),
          setTimeout(function() {
            d_utils.hide(t),
              g(),
              C.set(w.consent_accepted_cookie_name, "true"),
              a.removeAttribute("disabled"),
              (a.innerHTML = w.accept_button_text);
          }, 600);
      }),
        d_utils.append(n, i),
        d_utils.append(n, c),
        d_utils.append(n, a),
        d_utils.append(n, o),
        d_utils.append(t, n),
        d_utils.append(w.popup_container, t),
        (j = t),
        w.cookie_notice_autohide_timeout > 0 &&
          (M = setTimeout(function() {
            n.hasAttribute("mouseover") || d_utils.hide(t);
          }, 1e3 * w.cookie_notice_autohide_timeout));
    }
    function b() {
      A.enable_all(), g();
    }
    function h() {
      for (
        var e = document.querySelectorAll(
            '[cookie-consent="strictly-necessary"]'
          ),
          n = 0;
        n < e.length;
        n++
      ) {
        var i = e[n],
          c = document.createElement("script");
        c.setAttribute("type", "text/javascript"),
          c.setAttribute(
            "initial-cookie-consent",
            i.getAttribute("cookie-consent")
          ),
          null !== i.getAttribute("src") &&
            c.setAttribute("src", i.getAttribute("src")),
          (c.text = i.innerHTML),
          d_utils.append("head", c),
          i.parentNode.removeChild(i),
          t("[Consaint: strictly-necessary] Loaded script: " + i.outerHTML);
      }
    }
    function g() {
      var e = A.saved();
      A.forEach(function(n) {
        if (e[n.id] && "strictly-necessary" !== n.id)
          try {
            for (
              var i = document.querySelectorAll(
                  '[cookie-consent="' + n.id + '"]'
                ),
                c = 0;
              c < i.length;
              c++
            ) {
              var o = i[c],
                a = document.createElement("script");
              a.setAttribute("type", "text/javascript"),
                a.setAttribute(
                  "initial-cookie-consent",
                  o.getAttribute("cookie-consent")
                ),
                null !== o.getAttribute("src") &&
                  a.setAttribute("src", o.getAttribute("src")),
                (a.text = o.innerHTML),
                d_utils.append("head", a),
                o.parentNode.removeChild(o),
                t("[Consaint: " + n.id + "] Loaded script: " + o.outerHTML);
            }
          } catch (e) {}
      });
    }
    function k() {
      return (N = !0), L(S);
    }
    function L(e) {
      if (N === !0) {
        var t = [w, e];
        if (
          ((w = t.reduce(function(e, t) {
            return (
              Object.keys(t).forEach(function(n) {
                e[n] = t[n];
              }),
              e
            );
          }, {})),
          i(),
          n(),
          h(),
          "true" === C.get(w.consent_accepted_cookie_name) && g(),
          ("true" === C.get(w.consent_accepted_cookie_name) &&
            "true" !== w.demo) ||
            ("implied" === w.consent_type &&
              (b(),
              (w.accept_button_text = cc_i18n.translate("dialog", "ok_text"))),
            "simple" === w.notice_banner_type
              ? m()
              : "headline" === w.notice_banner_type
                ? m("headline")
                : "interstitial" === w.notice_banner_type
                  ? y()
                  : "standalone" === w.notice_banner_type && y("standalone")),
          null !== w.change_settings_element)
        ) {
          var c = d_utils.element_conversion(w.change_settings_element);
          c.addEventListener("click", function(e) {
            e.preventDefault(), f();
          });
        }
      } else console.error("Could not load the i18n");
    }
    function E(e) {
      S = e;
      var t = document.createElement("script");
      t.setAttribute("type", "text/javascript"),
        t.setAttribute("src", H + "cookie-consent-i18n.js"),
        d_utils.append("head", t);
    }
    "undefined" == typeof e && (e = {});
    var A,
      T,
      S,
      x = null,
      M = null,
      H = "/scripts/",
      j = void 0,
      w = {
        levels_cookie_name: "cookie_consent_level",
        consent_accepted_cookie_name: "cookie_consent_user_accepted",
        cookie_expires: new Date(new Date().getTime() + 31536e6),
        debug: !1,
        demo: !1,
        website_name: null,
        theme_css: H + "cookie-consent.css",
        palette: "light",
        notice_banner_type: "simple",
        consent_type: "implied",
        default_level_id: "tracking",
        popup_container: "body",
        cookie_notice: "",
        accept_button_text: "",
        cookie_notice_autohide_timeout: 0,
        change_settings_element: null,
        cookies_policy_url: null,
        privacy_policy_url: null
      },
      C = {
          
        set: function(e, t) {
            //console.log('set cookie: ' + e + ' (' + t + ')');
          document.cookie =
            e +
            "=" +
            encodeURIComponent(t) +
            "; expires=" +
            w.cookie_expires.toGMTString() +
            "; path=/;";
            //console.log(document.cookie.toString);
        },
        get: function(e) {

          var t = document.cookie,
            n = e + "=",
            i = t.indexOf("; " + n);
          if (i === -1) {
            if (((i = t.indexOf(n)), 0 !== i)) return "";
          } else i += 2;
          var c = document.cookie.indexOf(";", i);
          return (
            c === -1 && (c = t.length),
            decodeURIComponent(t.substring(i + n.length, c))
          );
        }
      },
      q = void 0,
      N = !1;
    return { run: E, i18n_enable: k };
  })();
