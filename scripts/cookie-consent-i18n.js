"use strict";
var cc_user_language = "en",
  cc_i18n = {
    translate: function(e, i, n) {
      return void 0 === cc_translations[cc_user_language]
        ? ((cc_user_language = "en"), cc_i18n.translate(e, i, n))
        : void 0 !== _typeof(cc_translations[cc_user_language][e][i](n))
          ? cc_translations[cc_user_language][e][i](n)
          : "";
    }
  },
  available_languages = [
    { value: "en", title: "English" }
  ],
  cc_translations = {
    en: {
      dialog: {
        title: function() {
          return "Cookie Consent";
        },
        text: function() {
          return "We use cookies and other tracking technologies to analyse our website traffic and understand where our visitors are coming from. You can choose not to allow this anonymous information to be collected by changing your preferences.<br/>";
        },
        find_out_more: function(e) {
          return (
            "<p>To find out more, please visit our <a href='" +
            e +
            "' target='_blank'>Privacy Policy</a>.</p>"
          );
        },
        i_agree_text: function() {
          return "I agree";
        },
        ok_text: function() {
          return "OK";
        },
        change_settings: function() {
          return "Change my preferences";
        },
        active: function() {
          return "Active";
        },
        inactive: function() {
          return "Inactive";
        },
        always_active: function() {
          return "Always active";
        }
      },
      preference_center: {
        title: function() {
          return "Cookie Preferences";
        },
        save: function() {
          return "Save my preferences";
        }
      },
      preference_center_menu_and_content: {
        your_privacy_title: function() {
          return "Your privacy";
        },
        your_privacy_content: function() {
          return "<h1>Your privacy is important to us</h1>\n<p>Cookies are very small text files that are stored on your computer when you visit a website. We use cookies to help us improve the website by analysing its performance and to understand where our customers are visting from.</p>\n<p>You can change these preferences at any time by reopening this settings window</p>";
        },
        more_information_title: function() {
          return "More information";
        },
        more_information_content: function() {
          return "<h1>More information</h1>\n<p>For any queries in relation to our policy on cookies and your choices, please contact us.</p>";
        }
      },
      level_strictly_necessary: {
        title: function() {
          return "Strictly necessary cookies";
        },
        content: function() {
          return "<p>These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.</p><p>Without these cookies, we cannot provide you certain services on our website.</p>";
        }
      },
      level_functionality: {
        title: function() {
          return "Functionality cookies";
        },
        content: function() {
          return "<p>These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.</p>";
        }
      },
      level_tracking: {
        title: function() {
          return "Tracking and performance cookies";
        },
        content: function() {
          return "<p>These cookies allow us to analyse how our customers use the website, how well the website is performing and where we are receiving visits from.</p><p>For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.</p><p> The information collected through these tracking and performance cookies is anonymous and does not identify any individual visitor.</p>";
        }
      },
      level_targeting: {
        title: function() {
          return "Targeting and advertising cookies";
        },
        content: function() {
          return "<p>These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.</p><p>These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser's activities across their network of websites.</p><p>If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p>";
        }
      }
    }
  };
function detect_user_language() {
  var e;
  (e =
    void 0 !== navigator.languages
      ? navigator.languages[0]
      : navigator.language).indexOf("-") > 0 && (e = e.split("-")[0]);
  (e = e.toLowerCase()),
    void 0 !== cc_translations[e] && (cc_user_language = e);
}
detect_user_language(), cookieconsent.i18n_enable();
