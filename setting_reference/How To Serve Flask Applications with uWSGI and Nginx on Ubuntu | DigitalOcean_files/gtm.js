
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"529",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",108,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",106,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",105,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",107,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",104,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",109,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",27],"\u0026var=",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":189
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/d.adroll.com\/ipixel\/S4BPDI4QWNB57PEKEZSLIP\/4IDGVTPEAFC4TM2QKYNQ53?name=be9695fc",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":207
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00576104",
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":239
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/insight.adsrvr.org\/track\/conv\/?adv=4net0uk\u0026ct=0:ff77f96\u0026fmt=3",
      "tag_id":240
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"gYlbCMmhwKkBEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":241
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Lead\u0026noscript=1",
      "tag_id":242
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "tag_id":249
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"GenerateLead",
      "tag_id":250
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1068602\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":251
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"9BqyCNmR1aIBEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":253
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"qasFCOWR1aIBEID91o4D",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-68219300-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":256
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=InitiateCheckout\u0026noscript=1",
      "tag_id":259
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"OQmmCM-Ki60BEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":261
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1417234\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":262
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"Generic",
      "tag_id":263
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"ApqPCM2Bg60BEID91o4D",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":264
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=AddToCart",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":270
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddToCart\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":266
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"K45VCPma7q4BEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":268
    },{
      "function":"__cl",
      "tag_id":271
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":272
    },{
      "function":"__cl",
      "tag_id":273
    },{
      "function":"__cl",
      "tag_id":274
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",32],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $50, 30-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $50, 30-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"http:\/\/blog.digitalocean.com\/new-on-digitalocean-kubernetes\" data-pill\\x3d\"new\" title\\x3d\"Fresh features and 1-Click Apps for DigitalOcean Kubernetes\" target\\x3d\"_blank\" rel\\x3d\"noopener\"\\x3eFresh features and 1-Click Apps for DigitalOcean Kubernetes \\u276f\\x3c\/a\\x3e';\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"SignUp\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,session_id:\"[SessionID]\",send_to:\"DC-9515217\/conv\/digit0+per_session\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-9515217\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-9515217\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=landi0;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(d){d+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var c=0;c\u003Cb.length;c++){for(var a=b[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(d))return a.substring(d.length,a.length)}return\"\"}function setCookie(d,b,c){var a=new Date;a.setTime(a.getTime()+6E4*c);document.cookie=d+\"\\x3d\"+escape(b)+(null==c?\"\":\";expires\\x3d\"+a.toGMTString())}\nif(\"\"==getCookie(\"sessionID\")){var randomNumberString=Math.floor(1E7*Math.random()+1).toString();setCookie(\"sessionID\",randomNumberString,30)}else{var sessionID=getCookie(\"sessionID\");setCookie(\"sessionID\",sessionID,30)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2d65\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":243
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026amp;conversionId=1288866\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Sep 2019 Test\",pct:.75,audience:function(){return-1===document.cookie.indexOf(\"last_logged_in_at\")\u0026\u0026-1===document.cookie.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"refcode\")},variants:[{name:\"Control\",func:function(){}},{name:\"Received Promo\",func:function(){fetch(\"https:\/\/cloud.digitalocean.com\/referrals\/74a1c5d63dac\/register\",{method:\"GET\",mode:\"cors\",credentials:\"include\"});dataLayer.push({event:\"showReferralBanner\"})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cnoscript\u003E\n \u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"751f0436\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":248
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_segments=\"33ac2574\";adroll_adv_id=\"S4BPDI4QWNB57PEKEZSLIP\";adroll_pix_id=\"4IDGVTPEAFC4TM2QKYNQ53\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o20hg\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Tutorial Right Rail Hacktoberfest\",audience:function(){return 1350\u003C$(window).width()},variants:[{name:\"Show\",func:function(){$(\".featured-items-right-bar\").append('\\x3ca href\\x3d\"https:\/\/hacktoberfest.digitalocean.com\/?utm_source\\x3dcommunity\"\\x3e\\x3cimg style\\x3d\"margin-top:30px;\" src\\x3d\"https:\/\/assets.digitalocean.com\/labs\/btp\/hf19.png\" alt\\x3d\"hacktoberfest\"\\x3e\\x3c\/a\\x3e')}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nuyk8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2k38\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":267
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026amp;conversionId=1477010\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"hacktoberfest.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"cloud."
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"hacktoberfest."
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",18],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/community"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"developers"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"hacktoberfest"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"K8S"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/welcome"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"registered"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"SPP Application Complete"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/sammydigitalocean.typeform.com\/to\/tcFM4F"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"TypeformSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"Hatch Application Complete"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"confirmed"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"showReferralBanner"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/pricing\/"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,4,6],["unless",5],["add",1]],
    [["if",7],["add",2,3,4,16,24,26,27,28,36,42,45,46,87,88]],
    [["if",8],["add",2,3,4,16,24,26,27,28,36,42,45,46,87,88]],
    [["if",0,1,9,10],["add",4,24,26,27,28,36,42,45,46,87,88]],
    [["if",13],["unless",11,12],["add",5,6,23,25,35,40,43,44,80,86,89]],
    [["if",6,14,15,16],["add",7,8,14,17]],
    [["if",1,6,17],["unless",5],["add",9,10]],
    [["if",1,6,18],["unless",5,19],["add",11,19]],
    [["if",1,6,20],["unless",5,19],["add",12,13,18]],
    [["if",21,22],["add",15]],
    [["if",6,15,16,23],["add",20,21]],
    [["if",1,24],["unless",25],["add",22,82,90]],
    [["if",13],["unless",26,27],["add",22]],
    [["if",1,2],["add",29],["block",0]],
    [["if",13,28],["add",30,31]],
    [["if",13,24,29],["add",32,33,37]],
    [["if",13,30,31],["add",34]],
    [["if",32,33,34],["add",38]],
    [["if",33,34,35],["add",38]],
    [["if",34,36,37],["add",38]],
    [["if",1,38,39,40],["add",38]],
    [["if",1,31],["unless",41,42,43,44],["add",38]],
    [["if",1,45],["unless",46],["add",39]],
    [["if",47,48],["add",41,48,49,51,100]],
    [["if",1,6,49,50],["add",47,63,64,65,66,67,101]],
    [["if",16],["add",50]],
    [["if",1,51],["add",52]],
    [["if",52],["add",53,54,55,56,92,93,94,96,97],["block",97]],
    [["if",53,54],["add",53,54,55,56,92,93,94,96]],
    [["if",55],["add",57,58,59,60,61,98,99]],
    [["if",1,3],["add",62],["block",0]],
    [["if",1,6,9,56],["add",68,69,70,102,103]],
    [["if",34],["add",71,73,74,91]],
    [["if",34,37],["add",72]],
    [["if",1,6],["unless",5],["add",75]],
    [["if",13,57],["add",75]],
    [["if",24,29,48],["unless",58],["add",76]],
    [["if",1,61,62],["add",77]],
    [["if",48,63],["add",78]],
    [["if",34,64],["add",79]],
    [["if",1,65],["add",81]],
    [["if",24,48],["unless",66,67],["add",83]],
    [["if",24,48,68],["unless",67],["add",83]],
    [["if",69],["add",83]],
    [["if",1],["unless",72],["add",84]],
    [["if",1,73],["add",85]],
    [["if",24,29,34],["add",95]],
    [["if",24,48,74],["add",95]],
    [["if",1,24,59],["block",76]],
    [["if",0,1],["unless",60],["block",76]],
    [["if",0,48],["unless",60,70],["block",83]],
    [["if",0,48],["unless",71],["block",83]]]
},
"runtime":[
[],[50,"__qpx",[46,"a"],[52,"b",["require","sendPixel"]],[52,"c",["require","setInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","getUrl"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["f",[17,[15,"a"],"pixel_id"]]],[52,"h",[17,[15,"a"],"pixel_event"]],[52,"i",["d","qp"]],[52,"j",["e",[45]]],[52,"k",["f",[15,"j"]]],[22,[29,[15,"h"],"ViewContent"],[46,["b",[0,[0,[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003d"],[15,"h"]],"\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],[22,[28,[15,"i"]],[46,["b",[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003dViewContent\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],["c","qp","1",true],[2,[15,"a"],"gtmOnSuccess",[7]]],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null,ea=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var fa=function(a,b){this.N=a;this.Ng=b};fa.prototype.dh=function(){return this.N};fa.prototype.getData=function(){return this.Ng};fa.prototype.getData=fa.prototype.getData;fa.prototype.getType=fa.prototype.dh;var ha=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ia=function(){this.Ya={};this.Ab=!1;this.kd={}};ia.prototype.get=function(a){return this.Ya["dust."+a]};ia.prototype.set=function(a,b){this.Ab||(a="dust."+a,this.kd.hasOwnProperty(a)||(this.Ya[a]=b))};ia.prototype.has=function(a){return this.Ya.hasOwnProperty("dust."+a)};var ja=function(a){var b=[],c;for(c in a.Ya)a.Ya.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ia.prototype.remove=function(a){a="dust."+a;this.Ab||this.kd.hasOwnProperty(a)||delete this.Ya[a]};ia.prototype.S=function(){this.Ab=!0};var g=function(a){this.ab=new ia;this.m=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ha(b)?this.m[Number(b)]=a[Number(b)]:this.ab.set(b,a[b]))};aa=g.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.m.length;c++){var d=this.m[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ha(b))throw Error("RangeError: Length property must be a valid integer.");this.m.length=Number(b)}else ha(a)?this.m[Number(a)]=b:this.ab.set(a,b)};aa.get=function(a){return"length"==a?this.length():ha(a)?this.m[Number(a)]:this.ab.get(a)};aa.length=function(){return this.m.length};aa.Ba=function(){for(var a=ja(this.ab),b=0;b<this.m.length;b++)a.push(b+"");return new g(a)};aa.remove=function(a){ha(a)?delete this.m[Number(a)]:this.ab.remove(a)};aa.pop=function(){return this.m.pop()};
aa.push=function(a){return this.m.push.apply(this.m,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.m.shift()};aa.splice=function(a,b,c){return new g(this.m.splice.apply(this.m,arguments))};aa.unshift=function(a){return this.m.unshift.apply(this.m,Array.prototype.slice.call(arguments))};aa.has=function(a){return ha(a)&&this.m.hasOwnProperty(a)||this.ab.has(a)};g.prototype.unshift=g.prototype.unshift;g.prototype.splice=g.prototype.splice;g.prototype.shift=g.prototype.shift;
g.prototype.push=g.prototype.push;g.prototype.pop=g.prototype.pop;g.prototype.remove=g.prototype.remove;g.prototype.getKeys=g.prototype.Ba;g.prototype.get=g.prototype.get;g.prototype.set=g.prototype.set;var ka=function(){function a(f,h){if(b[f]){if(b[f].gc+h>b[f].max)throw Error("Quota exceeded");b[f].gc+=h}}var b={},c=void 0,d=void 0,e={Dh:function(f){c=f},Be:function(){c&&a(c,1)},Fh:function(f){d=f},Aa:function(f){d&&a(d,f)},ei:function(f,h){b[f]=b[f]||{gc:0};b[f].max=h},$g:function(f){return b[f]&&b[f].gc||0},reset:function(){b={}},Fg:a};e.onFnConsume=e.Dh;e.consumeFn=e.Be;e.onStorageConsume=e.Fh;e.consumeStorage=e.Aa;e.setMax=e.ei;e.getConsumed=e.$g;e.reset=e.reset;e.consume=e.Fg;return e};var na=function(a,b){this.fa=a;this.vc=function(c,d,e){return c.apply(d,e)};this.Ea=b;this.m=new ia;this.F=this.oc=void 0};na.prototype.add=function(a,b){oa(this,a,b,!1)};na.prototype.Yc=function(a,b){oa(this,a,b,!0)};var oa=function(a,b,c,d){if(!a.m.Ab)if(a.fa.Aa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.m;e.set(b,c);e.kd["dust."+b]=!0}else a.m.set(b,c)};
na.prototype.set=function(a,b){this.m.Ab||(!this.m.has(a)&&this.Ea&&this.Ea.has(a)?this.Ea.set(a,b):(this.fa.Aa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b)))};na.prototype.get=function(a){return this.m.has(a)?this.m.get(a):this.Ea?this.Ea.get(a):void 0};na.prototype.has=function(a){return!!this.m.has(a)||!(!this.Ea||!this.Ea.has(a))};var pa=function(a){var b=new na(a.fa,a);a.oc&&b.Ha(a.oc);b.sa(a.vc);b.F=a.F;return b};na.prototype.R=function(){return this.fa};
na.prototype.Ha=function(a){this.oc=a};na.prototype.sa=function(a){this.vc=a};na.prototype.S=function(){this.m.S()};na.prototype.has=na.prototype.has;na.prototype.get=na.prototype.get;na.prototype.set=na.prototype.set;na.prototype.addImmutable=na.prototype.Yc;na.prototype.add=na.prototype.add;var qa=function(){},ra=function(a){return"function"==typeof a},sa=function(a){return"string"==typeof a},ta=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},va=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},xa=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ya=function(a,b){if(!ta(a)||
!ta(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a,b){for(var c=new za,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ba=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ca=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ga=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ha=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values={}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ma=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Na=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Oa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Pa=function(a){for(var b=v,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Qa=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Ra=function(a,b){ia.call(this);this.Ue=a;this.Wg=b};ea(Ra,ia);var Ta=function(a,b){for(var c,d=0;d<b.length&&!(c=Sa(a,b[d]),c instanceof fa);d++);return c},Sa=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ra))throw Error("Attempting to execute non-function "+b[0]+".");return c.w.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.oc;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ra.prototype.toString=function(){return this.Ue};Ra.prototype.getName=function(){return this.Ue};
Ra.prototype.getName=Ra.prototype.getName;Ra.prototype.Ba=function(){return new g(ja(this))};Ra.prototype.getKeys=Ra.prototype.Ba;Ra.prototype.w=function(a,b){var c=this;a.R().Be();return this.Wg.apply({evaluate:function(d){var e=a;return ua(d)?Sa(e,d):d},dd:function(d){return Ta(a,d)},getName:function(){return c.getName()},R:function(){return a.R()},h:function(){return a}},Array.prototype.slice.call(arguments,1))};Ra.prototype.invoke=Ra.prototype.w;
Ra.prototype.ra=function(a,b){try{return this.w.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ra.prototype.safeInvoke=Ra.prototype.ra;var Ua=function(){ia.call(this)};ea(Ua,ia);Ua.prototype.Ba=function(){return new g(ja(this))};Ua.prototype.getKeys=Ua.prototype.Ba;var Va=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Wa={Fn:"function",Map:"Object",List:"Array"},Xa=function(a,b,c){for(var d=0;d<b.length;d++){var e=Va.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof Ra?n="Fn":l instanceof g?n="List":l instanceof Ua&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(Wa[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Za=function(a){if(null==a)return String(a);var b=Ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},$a=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ab=function(a){if(!a||"object"!=Za(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!$a(a,"constructor")&&!$a(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||$a(a,b)},C=function(a,b){var c=b||("array"==Za(a)?[]:{}),d;for(d in a)if($a(a,d)){var e=a[d];"array"==Za(e)?("array"!=Za(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):ab(e)?(ab(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};var cb=function(a,b){var c=[],d=[],e=function(h,k){for(var l=ja(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=va(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Ba(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof Ua){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof Ra){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),r=0;r<q.length;r++)q[r]=bb(q[r],b);var u=b?b.R():ka(),w=new na(u);
b&&(w.F=b.F);return f(h.w.apply(h,[w].concat(q)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},bb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=va(c,h);if(-1<k)return d[k];if(ua(h)||Ca(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(ab(h)){var n=
new Ua;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new Ra("",function(q){for(var r=Array.prototype.slice.call(arguments,0),u=0;u<r.length;u++)r[u]=cb(this.evaluate(r[u]),b);return f((0,this.h().vc)(h,h,r))});c.push(h);d.push(p);e(h,p);return p}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var db={control:function(a,b){return new fa(a,this.evaluate(b))},fn:function(a,b,c){var d=this.h(),e=this.evaluate(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.R().Aa(a.length+f.length);return new Ra(a,function(){return function(h){var k=pa(d);void 0===k.F&&(k.F=this.h().F);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.evaluate(l[m]),l[m]instanceof fa)return l[m];for(var n=
e.get("length"),p=0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var t=Ta(k,f);if(t instanceof fa)return"return"===t.N?t.getData():t}}())},list:function(a){var b=this.R();b.Aa(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.Aa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.R(),c=new Ua,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof f?f.length:1;b.Aa(h);c.set(e,f)}return c},undefined:function(){}};function eb(a,b){var c=Sa(a,b);if(c instanceof fa||c instanceof Ra||c instanceof g||c instanceof Ua||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var fb=function(){this.fa=ka();this.Ca=new na(this.fa)};aa=fb.prototype;aa.ya=function(a,b){var c=new Ra(a,b);c.S();this.Ca.set(a,c)};aa.xe=function(a,b){db.hasOwnProperty(a)&&this.ya(b||a,db[a])};aa.R=function(){return this.fa};aa.zc=function(){this.fa=ka();this.Ca.fa=this.fa};aa.Ha=function(a){this.Ca.Ha(a)};
aa.sa=function(a){this.Ca.sa(a)};aa.Wa=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.Ed(c)};aa.Ed=function(a){for(var b,c=0;c<arguments.length;c++)b=eb(this.Ca,arguments[c]);return b};aa.Ac=function(a,b){var c=pa(this.Ca);c.F=a;for(var d,e=1;e<arguments.length;e++)d=eb(c,arguments[e]);return d};aa.S=function(){this.Ca.S()};fb.prototype.makeImmutable=fb.prototype.S;fb.prototype.run=fb.prototype.Ed;fb.prototype.execute=fb.prototype.Wa;fb.prototype.setJavaScriptProxy=fb.prototype.sa;
fb.prototype.resetQuota=fb.prototype.zc;fb.prototype.getQuota=fb.prototype.R;fb.prototype.addNativeInstruction=fb.prototype.xe;fb.prototype.addInstruction=fb.prototype.ya;var gb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var hb={ii:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.w(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.w(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.w(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.w(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.w(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.w(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=gb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.w(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=gb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.w(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ib={ADD:0,AND:1,APPLY:2,ASSIGN:3,BITWISE_AND:56,BITWISE_LEFT_SHIFT:57,BITWISE_NOT:58,BITWISE_OR:59,BITWISE_RIGHT_SHIFT:60,BITWISE_UNSIGNED_RIGHT_SHIFT:61,BITWISE_XOR:62,BLOCK:53,BREAK:4,CASE:5,CONST:52,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,FOR_IN_CONST:54,FOR_IN_LET:55,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,
IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42},jb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),nb=new fa("break"),ob=new fa("continue"),
pb=function(a,b){return this.evaluate(a)+this.evaluate(b)},qb=function(a,b){return this.evaluate(a)&&this.evaluate(b)},rb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");
}if("string"==typeof a){if(0<=va(jb,b))return bb(a[b].apply(a,gb(c)),this.h());throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof Ra){var e=gb(c);e.unshift(this.h());return d.w.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=va(hb.ii,b)){var f=gb(c);f.unshift(this.h());return hb[b].apply(a,f)}}if(a instanceof Ra||a instanceof Ua){if(a.has(b)){var h=a.get(b);if(h instanceof Ra){var k=gb(c);k.unshift(this.h());return h.w.apply(h,
k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof Ra?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,gb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},sb=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.h();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d},tb=function(a){var b=pa(this.h()),
c=Ta(b,Array.prototype.slice.apply(arguments));if(c instanceof fa)return c},ub=function(){return nb},vb=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof fa)return d}},wb=function(a){for(var b=this.h(),c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.evaluate(arguments[c+1]);b.Yc(d,e)}}},yb=function(){return ob},zb=function(a,b,c){var d=new g;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[ib.FN,
a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h().set(a,this.evaluate(f))},Ab=function(a,b){return this.evaluate(a)/this.evaluate(b)},Bb=function(a,b){return this.evaluate(a)==this.evaluate(b)},Cb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
function Eb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=Ta(e,c);if(f instanceof fa){if("break"==f.N)break;if("return"==f.N)return f}}else if(b instanceof Ua||b instanceof g||b instanceof Ra)for(var h=b.Ba(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=Ta(m,c);if(n instanceof fa){if("break"==n.N)break;if("return"==n.N)return n}}}
var Fb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){d.set(a,e);return d},b,c)},Gb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){var f=pa(d);f.Yc(a,e);return f},b,c)},Hb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){var f=pa(d);f.add(a,e);return f},b,c)},Ib=function(a){return this.h().get(this.evaluate(a))},
Jb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Ua||a instanceof g||a instanceof Ra?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ha(b)&&(c=a[b]));return c},Kb=function(a,b){return this.evaluate(a)>this.evaluate(b)},Lb=function(a,b){return this.evaluate(a)>=this.evaluate(b)},Mb=function(a,b){return this.evaluate(a)===this.evaluate(b)},Nb=function(a,b){return this.evaluate(a)!==this.evaluate(b)},
Ob=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.dd(d);if(e instanceof fa)return e},Pb=function(a,b){return this.evaluate(a)<this.evaluate(b)},Qb=function(a,b){return this.evaluate(a)<=this.evaluate(b)},Rb=function(a,b){return this.evaluate(a)%this.evaluate(b)},Sb=function(a,b){return this.evaluate(a)*this.evaluate(b)},Tb=function(a){return-this.evaluate(a)},Ub=function(a){return!this.evaluate(a)},Vb=function(a,b){return this.evaluate(a)!=this.evaluate(b)},
Wb=function(){return null},Xb=function(a,b){return this.evaluate(a)||this.evaluate(b)},Yb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c},Zb=function(a){return this.evaluate(a)},$b=function(a){return Array.prototype.slice.apply(arguments)},ac=function(a){return new fa("return",this.evaluate(a))},bc=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof Ra||a instanceof
g||a instanceof Ua)&&a.set(b,c);return c},cc=function(a,b){return this.evaluate(a)-this.evaluate(b)},dc=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ua(b)||!ua(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof fa){var h=d.N;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof
fa&&("return"==d.N||"continue"==d.N)))return d},ec=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)},fc=function(a){a=this.evaluate(a);return a instanceof Ra?"function":typeof a},gc=function(a){for(var b=this.h(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},hc=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.dd(f),e instanceof fa)){if("break"==e.N)return;if("return"==e.N)return e}for(;this.evaluate(a);){e=this.dd(f);
if(e instanceof fa){if("break"==e.N)break;if("return"==e.N)return e}this.evaluate(b)}},ic=function(a){return~Number(this.evaluate(a))},jc=function(a,b){return Number(this.evaluate(a))<<Number(this.evaluate(b))},kc=function(a,b){return Number(this.evaluate(a))>>Number(this.evaluate(b))},lc=function(a,b){return Number(this.evaluate(a))>>>Number(this.evaluate(b))},mc=function(a,b){return Number(this.evaluate(a))&Number(this.evaluate(b))},nc=function(a,b){return Number(this.evaluate(a))^Number(this.evaluate(b))},
oc=function(a,b){return Number(this.evaluate(a))|Number(this.evaluate(b))};var qc=function(){this.Oe=!1;this.ca=new fb;pc(this);this.Oe=!0};qc.prototype.vh=function(){return this.Oe};qc.prototype.isInitialized=qc.prototype.vh;qc.prototype.Wa=function(a){return this.ca.Ed(a)};qc.prototype.execute=qc.prototype.Wa;qc.prototype.Ac=function(a,b){return this.ca.Ac(a,b)};qc.prototype.runProgram=qc.prototype.Ac;qc.prototype.S=function(){this.ca.S()};qc.prototype.makeImmutable=qc.prototype.S;
var pc=function(a){function b(f,h){e.ca.xe(f,String(h))}function c(f,h){e.ca.ya(String(d[f]),h)}var d=ib,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",pb);c("AND",qb);c("APPLY",rb);c("ASSIGN",sb);c("BLOCK",tb);c("BREAK",ub);c("CASE",vb);c("CONST",wb);c("CONTINUE",yb);c("DEFAULT",vb);c("DEFN",zb);c("DIVIDE",Ab);c("EQUALS",Bb);c("EXPRESSION_LIST",Cb);c("FOR_IN",Fb);c("FOR_IN_CONST",Gb);c("FOR_IN_LET",Hb);c("GET",Ib);c("GET_INDEX",
Jb);c("GET_PROPERTY",Jb);c("GREATER_THAN",Kb);c("GREATER_THAN_EQUALS",Lb);c("IDENTITY_EQUALS",Mb);c("IDENTITY_NOT_EQUALS",Nb);c("IF",Ob);c("LESS_THAN",Pb);c("LESS_THAN_EQUALS",Qb);c("MODULUS",Rb);c("MULTIPLY",Sb);c("NEGATE",Tb);c("NOT",Ub);c("NOT_EQUALS",Vb);c("NULL",Wb);c("OR",Xb);c("POST_DECREMENT",Yb);c("POST_INCREMENT",Yb);c("PRE_DECREMENT",Zb);c("PRE_INCREMENT",Zb);c("QUOTE",$b);c("RETURN",ac);c("SET_PROPERTY",bc);c("SUBTRACT",cc);c("SWITCH",dc);c("TERNARY",ec);c("TYPEOF",fc);c("VAR",gc);c("WHILE",
hc);c("BITWISE_NOT",ic);c("BITWISE_LEFT_SHIFT",jc);c("BITWISE_RIGHT_SHIFT",kc);c("BITWISE_UNSIGNED_RIGHT_SHIFT",lc);c("BITWISE_AND",mc);c("BITWISE_XOR",nc);c("BITWISE_OR",oc)};qc.prototype.ya=function(a,b){this.ca.ya(a,b)};qc.prototype.addInstruction=qc.prototype.ya;qc.prototype.R=function(){return this.ca.R()};qc.prototype.getQuota=qc.prototype.R;qc.prototype.zc=function(){this.ca.zc()};qc.prototype.resetQuota=qc.prototype.zc;qc.prototype.Ha=function(a){this.ca.Ha(a)};qc.prototype.sa=function(a){this.ca.sa(a)};
qc.prototype.setJavaScriptProxy=qc.prototype.sa;
var rc=[],sc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},tc=function(a){return sc[a]},uc=/[\x00\x22\x26\x27\x3c\x3e]/g;var zc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ac={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Bc=function(a){return Ac[a]};rc[7]=function(a){return String(a).replace(zc,Bc)};
rc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(zc,Bc)+"'"}};var Jc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Kc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Lc=function(a){return Kc[a]};rc[16]=function(a){return a};var Nc;
var Oc=[],Pc=[],Qc=[],Rc=[],Sc=[],Tc={},Uc,Vc,Wc,Xc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Yc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Tc[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Nc(c,e,b)},$c=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Zc(a[e],b,c));
return d},ad=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Tc[b];return c?c.priorityOverride||0:0},Zc=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Zc(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Oc[f];if(!h||b.md(h))return;c[f]=!0;try{var k=$c(h,b,c);k.vtp_gtmEventId=b.id;d=Yc(k,b);Wc&&(d=Wc.Hg(d,k))}catch(w){b.Se&&b.Se(w,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Zc(a[l],b,c)]=Zc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Zc(a[n],b,c);Vc&&(m=m||p===Vc.Vb);d.push(p)}return Vc&&m?Vc.Kg(d):d.join("");case "escape":d=Zc(a[1],b,c);if(Vc&&ua(a[1])&&"macro"===a[1][0]&&Vc.wh(a))return Vc.Mh(d);d=String(d);for(var t=2;t<a.length;t++)rc[a[t]]&&(d=rc[a[t]](d));return d;case "tag":var q=a[1];if(!Rc[q])throw Error("Unable to resolve tag reference "+q+".");return d={He:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var u=bd(r,b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},bd=function(a,b,c){try{return Uc($c(a,b,c))}catch(d){JSON.stringify(a)}return null};var cd=function(){var a=function(b){return{toString:function(){return b}}};return{Rd:a("convert_case_to"),Sd:a("convert_false_to"),Td:a("convert_null_to"),Ud:a("convert_true_to"),Vd:a("convert_undefined_to"),zi:a("debug_mode_metadata"),xa:a("function"),Uf:a("instance_name"),Vf:a("live_only"),Wf:a("malware_disabled"),Xf:a("metadata"),Bi:a("original_vendor_template_id"),Yf:a("once_per_event"),pe:a("once_per_load"),qe:a("setup_tags"),se:a("tag_id"),te:a("teardown_tags")}}();var dd=function(a,b,c){this.Kh=a;this.Hh=b;this.Bh=c};ea(dd,Error);dd.prototype.getParameters=function(){return this.Hh};var ed=function(a,b){if(ua(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ed(a[c],b[c])}};var fd=function(a,b){this.Xe=a;this.Te=b;this.Ee=[]};ea(fd,Error);var gd=function(a){var b=a.Ee.slice();a.Te&&(b=a.Te(b));return b};var jd=function(){return function(a,b){a instanceof fd||(a=new fd(a,hd));b&&a.Ee.push(b);throw a;}};function hd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)ta(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var kd=null,nd=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];kd=ld(a);for(var e=0;e<Pc.length;e++){var f=Pc[e],h=md(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<Rc.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},md=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=kd(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],f=0;f<e.length;f++){var h=kd(e[f]);if(null===h)return null;
if(h)return!1}return!0},ld=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=bd(Qc[c],a));return b[c]}};var od=function(){this.Eb={}};function pd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new dd(c,d,h);}}var qd=function(a,b,c){return function(){var d=arguments[0];if(d){var e=a.Eb[d],f=a.Eb.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));pd(e,b,d,h);pd(f,b,d,h)}}}};var td=function(a){var b=rd.s,c=this;this.af=new od;this.ze={};var d={},e=qd(this.af,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ba(a,function(f,h){var k={};Ba(h,function(l,m){var n,p=Xc(l,m);p.vtp_permissionName=l;p.vtp_createPermissionError=sd;n=Yc(p);k[l]=n.assert;d[l]||(d[l]=n.I)});c.ze[f]=function(l,m){var n=k[l];if(!n)throw sd(l,{},"The requested permission "+l+" is not configured.");var p=Array.prototype.slice.call(arguments,
0);n.apply(void 0,p);e.apply(void 0,p)}})},vd=function(a){return ud.ze[a]||function(){}};function sd(a,b,c){return new dd(a,b,c)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yd=function(a,b){var c=new Ra(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.S();return c},zd=function(a,b){var c=new Ua,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];ra(e)?c.set(d,yd(a+"_"+d,e)):(ta(e)||sa(e)||"boolean"==typeof e)&&c.set(d,e)}c.S();return c};var Ad=function(a,b){Xa(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=void 0;return d=zd("AssertApiSubject",c)};var Dd=function(a,b){Xa(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=void 0;return d=zd("AssertThatSubject",c)};var Ed=function(a){Xa(this.getName(),["uri:!string"],arguments);try{return decodeURI(a)}catch(b){}};var Fd=function(a){Xa(this.getName(),["uri:!string"],arguments);try{return decodeURIComponent(a)}catch(b){}};var Gd=function(a){Xa(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var Hd=function(a){Xa(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var Id=function(a){Xa(this.getName(),["message:?string"],arguments);};var Jd=function(a,b){Xa(this.getName(),["min:!number","max:!number"],arguments);return ya(a,b)};var Kd=function(){return(new Date).getTime()};var Ld=function(a,b,c){var d=a.h().F;if(!d)throw Error("Missing program state.");d.pg.apply(null,Array.prototype.slice.call(arguments,1))};var Md=!1;var Nd={ri:'',Sg:''},Od=function(){Ld(this,"read_container_data");var a=new Ua;a.set("containerId",'GTM-KHWBBT');a.set("version",'529');a.set("environmentName",'');a.set("debugMode",Md);a.set("previewMode",Ea(Nd.ri));a.set("environmentMode",Ea(Nd.Sg));a.S();return a};var Pd=function(a){return null===a?"null":a instanceof g?"array":a instanceof Ra?"function":typeof a};var Qd=function(a){return Da(cb(a,this.h()))};var Rd=function(a){return Number(cb(a,this.h()))};var Sd=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Td=function(a,b,c){Xa(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Ua,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Ua&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};function Ud(){var a=Math[Vd].bind(Math);return function(){for(var b=[],c=this.h(),d=0;d<arguments.length;++d)b.push(cb(arguments[d],c));return a.apply(null,b)}}for(var Wd="floor ceil round max min abs pow sqrt".split(" "),Xd={},Yd=0;Yd<Wd.length;Yd++){var Vd=Wd[Yd];Math.hasOwnProperty(Vd)&&(Xd[Vd]=Ud())};var Zd=function(){var a={};return{ah:function(b){return a.hasOwnProperty(b)?a[b]:void 0},fi:function(b,c){a[b]=c},reset:function(){a={}}}},$d=function(a,b){Xa(this.getName(),["apiName:!string","mock:?*"],arguments);};var ae=function(){this.Hb={}};ae.prototype.get=function(a,b){var c=this.Hb.hasOwnProperty(a)?this.Hb[a]:void 0;return c};ae.prototype.add=function(a,b,c){if(this.Hb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.Hb[a]=c?void 0:ra(b)?yd(a,b):zd(a,b)};var be=function(){var a={};return a}();var v=window,D=document,ce=navigator,de=D.currentScript&&D.currentScript.src,ee=function(a,b){var c=v[a];v[a]=void 0===c?b:c;return v[a]},fe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ge=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;fe(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var f=ba.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},he=function(){if(de){var a=de.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ie=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);fe(c,b);void 0!==a&&(c.src=a);return c},je=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},ke=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},le=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){v.setTimeout(a,0)},me=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ne=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},oe=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},pe=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},qe=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={rb:"_ee",Kc:"event_callback",ib:"event_timeout",M:"gtag.config",Z:"allow_ad_personalization_signals",ba:"cookie_expires",gb:"cookie_update",Pa:"session_duration"};var Ee=/[A-Z]+/,Fe=/\s/,Ge=function(a){if(sa(a)&&(a=Ga(a),!Fe.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ee.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],i:d}}}}},Ie=function(a){for(var b={},c=0;c<a.length;++c){var d=Ge(a[c]);d&&(b[d.id]=d)}He(b);var e=[];Ba(b,function(f,h){e.push(h)});return e};
function He(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.i[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var rd={},Je=null,Ke=Math.random();rd.s="GTM-KHWBBT";rd.Zb="aa0";var Le={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Me="www.googletagmanager.com/gtm.js";var Ne=Me,Oe=null,Pe=null,Qe=null,Re="//www.googletagmanager.com/a?id="+rd.s+"&cv=529",Se={},Te={},Ue=function(){var a=Je.sequence||0;Je.sequence=a+1;return a};var Ve={},We=function(a,b){Ve[a]=Ve[a]||[];Ve[a][b]=!0},Xe=function(a){for(var b=[],c=Ve[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ye=function(){return"&tc="+Rc.filter(function(a){return a}).length},hf=function(){Ze&&(v.clearTimeout(Ze),Ze=void 0);void 0===$e||af[$e]&&!bf||(cf[$e]||df.yh()||0>=ef--?(We("GTM",1),cf[$e]=!0):(df.Xh(),je(ff()),af[$e]=!0,gf=bf=""))},ff=function(){var a=$e;if(void 0===a)return"";var b=Xe("GTM"),c=Xe("TAGGING");return[jf,af[a]?"":"&es=1",kf[a],b?"&u="+b:"",c?"&ut="+c:"",Ye(),bf,gf,"&z=0"].join("")},lf=function(){return[Re,"&v=3&t=t","&pid="+ya(),"&rv="+rd.Zb].join("")},mf="0.005000">
Math.random(),jf=lf(),nf=function(){jf=lf()},af={},bf="",gf="",$e=void 0,kf={},cf={},Ze=void 0,df=function(a,b){var c=0,d=0;return{yh:function(){if(c<a)return!1;Ha()-d>=b&&(c=0);return c>=a},Xh:function(){Ha()-d>=b&&(c=0);c++;d=Ha()}}}(2,1E3),ef=1E3,of=function(a,b){if(mf&&!cf[a]&&$e!==a){hf();$e=a;bf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";kf[a]="&e="+c+"&eid="+a;Ze||(Ze=v.setTimeout(hf,500))}},pf=function(a,b,c){if(mf&&!cf[a]&&b){a!==$e&&(hf(),$e=a);var d=String(b[cd.xa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;bf=bf?bf+"."+e:"&tr="+e;Ze||(Ze=v.setTimeout(hf,500));2022<=ff().length&&hf()}};var qf={},rf=new za,sf={},tf={},wf={name:"dataLayer",set:function(a,b){C(Qa(a,b),sf);uf()},get:function(a){return vf(a,2)},reset:function(){rf=new za;sf={};uf()}},vf=function(a,b){if(2!=b){var c=rf.get(a);if(mf){var d=xf(a);c!==d&&We("GTM",5)}return c}return xf(a)},xf=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:zf(d)},zf=function(a){for(var b=sf,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Cf=function(a,b){tf.hasOwnProperty(a)||(rf.set(a,b),C(Qa(a,b),sf),uf())},uf=function(a){Ba(tf,function(b,c){rf.set(b,c);C(Qa(b,void 0),sf);C(Qa(b,c),sf);a&&delete tf[b]})},Df=function(a,b,c){qf[a]=qf[a]||{};var d=1!==c?xf(b):rf.get(b);"array"===Za(d)||"object"===Za(d)?qf[a][b]=C(d):qf[a][b]=d},Ef=function(a,b){if(qf[a])return qf[a][b]};var Ff=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===Gf()||d||"http:"!=v.location.protocol?a:b)+c},Gf=function(){var a=he(),b;if(1===a)a:{var c=Ne;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Vf=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Wf={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Xf={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Yf="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ag=function(a){var b=vf("gtm.whitelist");b&&We("GTM",9);var c=b&&Oa(Fa(b),Wf),d=vf("gtm.blacklist");d||(d=vf("tagTypeBlacklist"))&&We("GTM",3);
d?We("GTM",8):d=[];$f()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=va(Fa(d),"google")&&We("GTM",2);var e=d&&Oa(Fa(d),Xf),f={};return function(h){var k=h&&h[cd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Te[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>va(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
va(c,l[p])){We("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=va(e,k);if(q)t=q;else{var r=Aa(e,l||[]);r&&We("GTM",10);t=r}}var u=!m||t;u||!(0<=va(l,"sandboxedScripts"))||c&&-1!==va(c,"sandboxedScripts")||(u=Aa(e,Yf));return f[k]=u}},$f=function(){return Vf.test(v.location&&v.location.hostname)};var bg={Hg:function(a,b){b[cd.Rd]&&"string"===typeof a&&(a=1==b[cd.Rd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(cd.Td)&&null===a&&(a=b[cd.Td]);b.hasOwnProperty(cd.Vd)&&void 0===a&&(a=b[cd.Vd]);b.hasOwnProperty(cd.Ud)&&!0===a&&(a=b[cd.Ud]);b.hasOwnProperty(cd.Sd)&&!1===a&&(a=b[cd.Sd]);return a}};var cg={active:!0,isWhitelisted:function(){return!0}},dg=function(a){var b=Je.zones;!b&&a&&(b=Je.zones=a());return b};var eg=!1,fg=0,gg=[];function hg(a){if(!eg){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){eg=!0;for(var e=0;e<gg.length;e++)F(gg[e])}gg.push=function(){for(var f=0;f<arguments.length;f++)F(arguments[f]);return 0}}}function ig(){if(!eg&&140>fg){fg++;try{D.documentElement.doScroll("left"),hg()}catch(a){v.setTimeout(ig,50)}}}var jg=function(a){eg?a():gg.push(a)};var kg={},lg={},mg=function(a,b,c,d){if(!lg[a]||Le[b]||"__zone"===b)return-1;var e={};ab(d)&&(e=C(d,e));e.id=c;e.status="timeout";return lg[a].tags.push(e)-1},ng=function(a,b,c,d){if(lg[a]){var e=lg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function og(a){for(var b=kg[a]||[],c=0;c<b.length;c++)b[c]();kg[a]={push:function(d){d(rd.s,lg[a])}}}
var rg=function(a,b,c){lg[a]={tags:[]};ra(b)&&pg(a,b);c&&v.setTimeout(function(){return og(a)},Number(c));return qg(a)},pg=function(a,b){kg[a]=kg[a]||[];kg[a].push(Ja(function(){return F(function(){b(rd.s,lg[a])})}))};function qg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&og(a)})},ng:function(){d=!0;b>=c&&og(a)}}};var sg=function(){function a(d){return!ta(d)||0>d?0:d}if(!Je._li&&v.performance&&v.performance.timing){var b=v.performance.timing.navigationStart,c=ta(wf.get("gtm.start"))?wf.get("gtm.start"):0;Je._li={cst:a(c-b),cbt:a(Pe-b)}}};var wg=!1,xg=function(){return v.GoogleAnalyticsObject&&v[v.GoogleAnalyticsObject]},yg=!1;
var zg=function(a){v.GoogleAnalyticsObject||(v.GoogleAnalyticsObject=a||"ga");var b=v.GoogleAnalyticsObject;if(v[b])v.hasOwnProperty(b)||We("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);v[b]=c}sg();return v[b]},Ag=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=xg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Cg=function(){},Bg=function(){return v.GoogleAnalyticsObject||"ga"};var Eg=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Fg=/:[0-9]+$/,Gg=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Jg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Hg(a.protocol)||Hg(v.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
v.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||v.location.hostname).replace(Fg,"").toLowerCase());return Ig(a,b,c,d,e)},Ig=function(a,b,c,d,e){var f,h=Hg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Kg(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Fg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||We("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=va(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Gg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Hg=function(a){return a?a.replace(":",
"").toLowerCase():""},Kg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Lg=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||We("TAGGING",1),c="/"+c);var d=b.hostname.replace(Fg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Qg=function(){return!1},Sg=function(a){},Tg=function(){var a={};return function(b,c,d){}};function Rg(a,b,c){b.containerId=rd.s;var d={type:a,value:b};c.length&&(d.trace=c);return d};function Ug(a,b,c,d){var e=Rc[a],f=Vg(a,b,c,d);if(!f)return null;var h=Zc(e[cd.qe],c,[]);if(h&&h.length){var k=h[0];f=Ug(k.index,{T:f,da:1===k.He?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Vg(a,b,c,d){function e(){if(f[cd.Wf])k();else{var w=$c(f,c,[]),y=mg(c.id,String(f[cd.xa]),Number(f[cd.se]),w[cd.Xf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ha()-A;pf(c.id,Rc[a],"5");ng(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ha()-A;pf(c.id,Rc[a],"6");ng(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;pf(c.id,f,"1");var z=function(B){var E=Ha()-A;Sg(B);pf(c.id,f,"7");ng(c.id,y,"exception",E);x||(x=!0,k())};var A=Ha();try{Yc(w,c)}catch(B){z(B)}}}var f=Rc[a],h=b.T,k=b.da,l=b.terminate;if(c.md(f))return null;var m=Zc(f[cd.te],c,[]);if(m&&m.length){var n=m[0],p=Ug(n.index,{T:h,da:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.He?l:p}if(f[cd.pe]||f[cd.Yf]){var t=f[cd.pe]?Sc:c.ji,q=h,r=k;if(!t[a]){e=Ja(e);var u=Wg(a,t,e);h=u.T;k=u.da}return function(){t[a](q,r)}}return e}
function Wg(a,b,c){var d=[],e=[];b[a]=Xg(d,e,c);return{T:function(){b[a]=Yg;for(var f=0;f<d.length;f++)d[f]()},da:function(){b[a]=Zg;for(var f=0;f<e.length;f++)e[f]()}}}function Xg(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yg(a){a()}function Zg(a,b){b()};var bh=function(a,b){for(var c=[],d=0;d<Rc.length;d++)if(a.Cb[d]){var e=Rc[d];var f=b.add();try{var h=Ug(d,{T:f,da:f,terminate:f},a,d);h?c.push({pf:d,bf:ad(e),Wa:h}):($g(d,a),f())}catch(l){f()}}b.ng();c.sort(ah);for(var k=0;k<c.length;k++)c[k].Wa();return 0<c.length};function ah(a,b){var c,d=b.bf,e=a.bf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.pf,k=b.pf;f=h>k?1:h<k?-1:0}return f}
function $g(a,b){if(!mf)return;var c=function(d){var e=b.md(Rc[d])?"3":"4",f=Zc(Rc[d][cd.qe],b,[]);f&&f.length&&c(f[0].index);pf(b.id,Rc[d],e);var h=Zc(Rc[d][cd.te],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ch=!1,dh=function(a,b,c,d,e){if("gtm.js"==b){if(ch)return!1;ch=!0}of(a,b);var f=rg(a,d,e);Df(a,"event",1);Df(a,"ecommerce",1);Df(a,"gtm");var h={id:a,name:b,md:ag(c),Cb:[],ji:[],Se:function(n){We("GTM",6);Sg(n)}};h.Cb=nd(h);var k=bh(h,f);
if(!k)return k;for(var l=0;l<h.Cb.length;l++)if(h.Cb[l]){var m=Rc[l];if(m&&!Le[String(m[cd.xa])])return!0}return!1};var fh=function(a,b,c,d,e){var f=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.Fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==f.eventModel[h])return f.eventModel[h];if(void 0!==f.targetConfig[h])return f.targetConfig[h];if(void 0!==f.containerConfig[h])return f.containerConfig[h];if(void 0!==f.Fb[h])return f.Fb[h];if(void 0!==f.globalConfig[h])return f.globalConfig[h]}};var gh={},hh=["G"];gh.rf="";var ih=gh.rf.split(",");function jh(){var a=Je;return a.gcq=a.gcq||new kh}
var lh=function(a,b,c){jh().register(a,b,c)},mh=function(a,b,c,d){jh().push("event",[b,a],c,d)},nh=function(a,b){jh().push("config",[a],b)},oh={},ph=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Fb={};this.cf=null;this.Ne=!1},qh=function(a,b,c,d,e){this.type=a;this.qf=b;this.V=c||"";this.cc=d;this.defer=e},kh=function(){this.Ce={};this.Me={};this.wb=[]},rh=function(a,b){var c=Ge(b);return a.Ce[c.containerId]=a.Ce[c.containerId]||new ph},sh=function(a,b,c,d){if(d.V){var e=
rh(a,d.V),f=e.cf;if(f){var h=C(c),k=C(e.targetConfig[d.V]),l=C(e.containerConfig),m=C(e.Fb),n=C(a.Me),p=new fh(h,k,l,m,n);try{3===f.length?f(b,d.qf,p):4===f.length&&f(d.V,b,d.qf,p)}catch(t){}}}};
kh.prototype.register=function(a,b,c){if(3!==rh(this,a).status){rh(this,a).cf=b;rh(this,a).status=3;c&&(rh(this,a).Fb=c);var d=Ge(a),e=oh[d.containerId];if(void 0!==e){var f=Je[d.containerId].bootstrap,h=vf("gtm.uniqueEventId"),k=d.prefix,l=Ha()-f;if(mf&&!cf[h]){h!==$e&&(hf(),$e=h);var m=k+"."+Math.floor(f-e)+"."+Math.floor(l);gf=gf?gf+","+m:"&cl="+m}delete oh[d.containerId]}this.flush()}};
kh.prototype.push=function(a,b,c,d){var e=Math.floor(Ha()/1E3);if(c){var f=Ge(c),h;if(h=f){var k;if(k=1===rh(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(rh(this,c).status=2,this.push("require",[],f.containerId),oh[f.containerId]=Ha(),!Ff())){var m=encodeURIComponent(f.containerId);ge(("http:"!=v.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.wb.push(new qh(a,e,c,b,d));d||this.flush()};
kh.prototype.flush=function(a){for(var b=this;this.wb.length;){var c=this.wb[0];if(c.defer)c.defer=!1,this.wb.push(c);else switch(c.type){case "require":if(3!==rh(this,c.V).status&&!a)return;break;case "set":Ba(c.cc[0],function(l,m){C(Qa(l,m),b.Me)});break;case "config":var d=c.cc[0],e=!!d[H.Tb];delete d[H.Tb];var f=rh(this,c.V),h=Ge(c.V),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.V]={});f.Ne&&e||sh(this,H.M,d,c);f.Ne=!0;k?C(d,f.containerConfig):C(d,f.targetConfig[c.V]);break;
case "event":sh(this,c.cc[1],c.cc[0],c)}this.wb.shift()}};var th=function(a,b){Xa(this.getName(),["toPath:!string","fromPath:!string"],arguments);Ld(this,"access_globals","write",a);Ld(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=Pa(c),f=Pa(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};var uh=function(a,b){Xa(this.getName(),["path:!string"],[a]);Ld(this,"access_globals","execute",a);for(var c=a.split("."),d=v,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"===Za(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(cb(arguments[k],this.h()));return bb((0,this.h().vc)(e,d,h),this.h())}};var vh=function(a){Xa(this.getName(),["fn:!Fn"],arguments);var b=this.h();F(function(){a instanceof Ra&&a.ra(b)})};var wh=function(a){Xa(this.getName(),["path:!string"],arguments);Ld(this,"access_globals","read",a);var b=a.split("."),c=v,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],null==c)return;return bb(c[b[d]],this.h())};var xh=function(a,b){Xa(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ld(this,"access_globals","readwrite",a);Ld(this,"access_globals","readwrite",b);var c=a.split("."),d=Pa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];if(f&&!ra(f))return null;if(f)return bb(f,this.h());var h;f=function(){if(!ra(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};d[e]=f;var k=b.split("."),l=Pa(k),m=k[k.length-
1];if(void 0===l)throw Error("Path "+k+" does not exist.");h=l[m];void 0===h&&(h=[],l[m]=h);return bb(function(){f.apply(f,Array.prototype.slice.call(arguments,0))},this.h())};var yh=function(a){Xa(this.getName(),["path:!string"],arguments);Ld(this,"access_globals","readwrite",a);var b=a.split("."),c=Pa(b),d=b[b.length-1];if(void 0===c)throw Error("Path "+a+" does not exist.");var e=c[d];void 0===e&&(e=[],c[d]=e);return bb(function(){if(!ra(e.push))throw Error("Object at "+a+" in window is not an array.");e.push.apply(e,Array.prototype.slice.call(arguments,0))},this.h())};var zh=function(a){Xa(this.getName(),["base64input:!string"],arguments);try{return v.decodeURIComponent(v.escape(v.atob(a)))}catch(b){}};var Ah=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Dh=function(a,b,c,d){var e=Bh(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ch(e,function(f){return f.kc},b);if(1===e.length)return e[0].id;e=Ch(e,function(f){return f.Db},c);return e[0]?e[0].id:void 0}};
function Eh(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Ah(b,e).indexOf(c)}
var Hh=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var p=Fh(),t=void 0,q=0,r=0;r<p.length;++r){var u=
"none"!=p[r]?p[r]:void 0;if(e){c.domain=u;try{e(a,c)}catch(w){t=w;continue}}q+=1;if(!Gh(u,l)&&Eh(f+(u?"; domain="+u:""),a,b))return!0}if(t&&!q)throw t;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!Gh(k,l)&&Eh(f,a,b)},Ih=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return Hh(a,b,h,f)};
function Ch(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Bh(a,b){for(var c=[],d=Ah(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),kc:1*k[0]||1,Db:1*k[1]||1}))}}return c}
var Jh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Kh=/(^|\.)doubleclick\.net$/i,Gh=function(a,b){return Kh.test(document.location.hostname)||"/"===b&&Jh.test(a)},Fh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Kh.test(e)||Jh.test(e)||a.push("none");return a};var Lh=function(a,b){b=void 0===b?!0:b;Xa(this.getName(),["name:!string","decode:?boolean"],arguments);Ld(this,"get_cookies",a);return bb(Ah(a,void 0,!!b),this.h())};var Mh=function(a,b){Xa(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);Ld(this,"get_url","query",a);var c=Jg(Lg(v.location.href),"query"),d=Gg(c,a,b);return bb(d,this.h())};var Nh=function(a,b){Xa(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);Ld(this,"get_referrer","query",a);var c=Jg(Lg(v.document.referrer),"query"),d=Gg(c,a,b);return bb(d,this.h())};var Oh=function(a){Xa(this.getName(),["component:?string"],arguments);Ld(this,"get_referrer",a);return Ig(Lg(v.document.referrer),a)};var Ph=function(a){Xa(this.getName(),["component:?string"],arguments);Ld(this,"get_url",a);return Jg(Lg(v.location.href),a)};var Qh=function(a,b){Xa(this.getName(),["url:!string","onSuccess:?Fn"],arguments);Ld(this,"inject_hidden_iframe",a);var c=this.h();ie(a,function(){b instanceof Ra&&b.ra(c)})};var Rh={},Sh=function(a,b,c,d){Xa(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ld(this,"inject_script",a);var e=this.h(),f=function(){b instanceof Ra&&b.ra(e)},h=function(){c instanceof Ra&&c.ra(e)};if(d){var k=d;Rh[k]?(Rh[k].onSuccess.push(f),Rh[k].onFailure.push(h)):(Rh[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Rh[k].onSuccess,m=0;m<l.length;m++)F(l[m]);l.push=function(n){F(n);return 0}},h=function(){for(var l=Rh[k].onFailure,m=0;m<
l.length;m++)F(l[m]);Rh[k]=null},ge(a,f,h))}else ge(a,f,h)};var Th=function(){try{var a=v.localStorage;a.setItem("localstorage.test","localstorage.test");a.removeItem("localstorage.test");return!0}catch(b){return!1}},Uh={getItem:function(a){a=String(a);Ld(this,"access_local_storage","read",a);return v.localStorage.getItem(a)},setItem:function(a,b){a=String(a);Ld(this,"access_local_storage","write",a);try{return v.localStorage.setItem(a,String(b)),!0}catch(c){return!1}},removeItem:function(a){a=String(a);Ld(this,"access_local_storage","write",a);v.localStorage.removeItem(a)}};var Vh=function(){};var Wh=function(a,b){Xa(this.getName(),["permission:!string"],[a]);for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;++d)c[d]=cb(c[d],this.h());c.unshift(this);try{return Ld.apply(null,c),!0}catch(e){return!1}};var Xh=function(a,b,c){Xa(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);Ld(this,"send_pixel",a);var d=this.h();je(a,function(){b instanceof Ra&&b.ra(d)},function(){c instanceof Ra&&c.ra(d)})};var Yh=function(a,b,c,d){var e=this;d=void 0===d?!0:d;Xa(this.getName(),["name:!string","value:?string","options:?Map","encode:?boolean"],arguments);var f=c?cb(c,this.h()):void 0;return Hh(a,b,f,!!d,function(h,k){return Ld(e,"set_cookies",h,k)})};var Zh=function(a,b,c){Xa(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ld(this,"access_globals","readwrite",a);var d=a.split("."),e=v,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=cb(b,this.h()),!0):!1};var ci=function(a,b,c){var d=this;Xa(this.getName(),["input:!string","onSuccess:!Fn","onFailure:?Fn"],arguments);c=c||new Ra("emptyFn",function(){});var e=v.msCrypto,f=v.crypto,h=$h(a);if(f&&f.subtle)f.subtle.digest("SHA-256",h).then(function(l){return void b.w(d.h(),ai(l))},function(l){return void c.w(d.h(),bi(l.name,l.message))});else if(e&&e.subtle){var k=e.subtle.digest("SHA-256",h);k.oncomplete=function(l){return void b.w(d.h(),ai(l.target.result))};k.onerror=function(l){return void c.w(d.h(),
bi(l.target.result.name,l.target.result.message))}}else c.w(this.h(),bi("BrowserNotSupported","This method is not supported in this browser."))};function ai(a){for(var b=new Uint8Array(a),c=Array(b.length),d=0;d<b.length;d++)c[d]=b[d];var e=c.map(function(f){return String.fromCharCode(f)}).join("");return v.btoa(e)}function bi(a,b){var c=new Ua;c.set("name",a);c.set("message",b);return c}
function $h(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}for(var f=new Uint8Array(b.length),h=0;h<b.length;h++)f[h]=b[h];return f};var di=function(a){Xa(this.getName(),["input:!string"],arguments);try{return v.btoa(v.unescape(v.encodeURIComponent(a)))}catch(b){}};function ei(a){Xa(this.getName(),["callback:!Fn"],arguments);Ld(this,"read_event_metadata");var b=this.h().F;if(!b)throw Error("invalid program state");var c=b.eventId;ta(c)&&pg(c,cb(a))}function fi(a,b){Xa(this.getName(),["key:!string","dataLayerVersion:?number"],arguments);Ld(this,"read_data_layer",a);return bb(vf(a,b||2),this.h())}function gi(){Ld(this,"read_character_set");return D.characterSet||""}function hi(){Ld(this,"read_title");return D.title||""}
var ii=function(){var a=new ae;Ff()?(a.add("injectHiddenIframe",qa),a.add("injectScript",qa)):(a.add("injectHiddenIframe",Qh),a.add("injectScript",Sh));var b=Xh;a.add("aliasInWindow",th);a.add("addEventCallback",ei);a.add("callInWindow",uh);a.add("callLater",vh);a.add("copyFromDataLayer",fi);a.add("copyFromWindow",
wh);a.add("createQueue",yh);a.add("createArgumentsQueue",xh);a.add("encodeUri",Gd);a.add("encodeUriComponent",Hd);a.add("generateRandom",Jd);a.add("getCookieValues",Lh);a.add("getQueryParameters",Mh);a.add("getReferrerQueryParameters",Nh);a.add("getReferrerUrl",Oh);a.add("getTimestamp",Kd);a.add("getUrl",Ph);a.add("logToConsole",Vh);a.add("makeInteger",Qd);a.add("makeString",Sd);a.add("makeTableMap",Td);a.add("queryPermission",Wh);a.add("readCharacterSet",gi);a.add("readTitle",hi);a.add("sendPixel",
b);a.add("setCookie",Yh);a.add("setInWindow",Zh);a.add("Math",Xd);a.add("decodeUri",Ed),a.add("decodeUriComponent",Fd);a.add("sha256",ci);
a.add("makeNumber",Rd);a.add("getType",Pd);return function(c){var d;if(a.Hb.hasOwnProperty(c))d=a.get(c,
this);else throw Error(c+" is not a valid API name.");return d}};var ji,ud;
function ki(){var a=data.runtime||[],b=data.runtime_lines;ji=new qc;li();Nc=function(e,f,h){mi(f);var k=new Ua;Ba(f,function(n,p){k.set(n,bb(p))});ji.Ha(jd());var l={pg:vd(e),eventId:void 0!==h?h.id:void 0};Qg()&&(l.K={td:Zd(),vb:{},hd:Tg()});var m=ji.Ac(l,[e,k]);ji.Ha(void 0);m instanceof fa&&"return"===m.N&&(m=m.getData());return cb(m)};ji.ya("require",ii());for(var c=0;c<a.length;c++){var d=a[c];if(!ua(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ed(d,b[c]);ji.Wa(d)}}
function mi(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;ra(b)&&(a.gtmOnSuccess=function(){F(b)});ra(c)&&(a.gtmOnFailure=function(){F(c)})}function li(){var a=ji;Je.SANDBOXED_JS_SEMAPHORE=Je.SANDBOXED_JS_SEMAPHORE||0;a.sa(function(b,c,d){Je.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Je.SANDBOXED_JS_SEMAPHORE--}})};var ni="".split(/,/),oi=null,pi={},qi={},ri,si=function(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.Kc]&&(c.eventCallback=b[H.Kc]),b[H.ib]&&(c.eventTimeout=b[H.ib]));return c};
var yi={config:function(a){},
event:function(a){var b=a[1];if(sa(b)&&!(3<a.length)){var c;if(2<a.length){if(!ab(a[2])&&void 0!=a[2])return;c=a[2]}var d=si(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=ud.af;d.Eb[b]?d.Eb[b].push(c):d.Eb[b]=[c]}},set:function(a){var b;2==a.length&&ab(a[1])?b=C(a[1]):3==a.length&&sa(a[1])&&(b={},ab(a[2])||ua(a[2])?b[a[1]]=
C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},zi={policy:!0};var Bi=function(a){return Ai?D.querySelectorAll(a):null},Ci=function(a,b){if(!Ai)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Di=!1;if(D.querySelectorAll)try{var Ei=D.querySelectorAll(":root");Ei&&1==Ei.length&&Ei[0]==D.documentElement&&(Di=!0)}catch(a){}var Ai=Di;var Li=function(a){if(Ki(a))return a;this.ui=a};Li.prototype.eh=function(){return this.ui};var Ki=function(a){return!a||"object"!==Za(a)||ab(a)?!1:"getUntrustedUpdateValue"in a};Li.prototype.getUntrustedUpdateValue=Li.prototype.eh;var Mi=!1,Ni=[];function Oi(){if(!Mi){Mi=!0;for(var a=0;a<Ni.length;a++)F(Ni[a])}}var Pi=function(a){Mi?F(a):Ni.push(a)};var Qi=[],Ri=!1,Si=function(a){return v["dataLayer"].push(a)},Ti=function(a){var b=Je["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Wi=function(a){var b=a._clear;Ba(a,function(f,h){"_clear"!==f&&(b&&Cf(f,void 0),Cf(f,h))});Oe||(Oe=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ue(),a["gtm.uniqueEventId"]=d,Cf("gtm.uniqueEventId",d));Qe=c;var e=Vi(a);
Qe=null;switch(c){case "gtm.init":We("GTM",19),e&&We("GTM",20)}return e};function Vi(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Je.zones;d=e?e.checkState(rd.s,c):cg;return d.active?dh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Xi=function(){for(var a=!1;!Ri&&0<Qi.length;){Ri=!0;delete sf.eventModel;uf();var b=Qi.shift();if(null!=b){var c=Ki(b);if(c){var d=b;b=Ki(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=vf(h,1);if(ua(k)||ab(k))k=C(k);tf[h]=k}}try{if(ra(b))try{b.call(wf)}catch(r){}else if(ua(b)){var l=b;if(sa(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=vf(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(r){}}}else{if(Ca(b)){a:{if(b.length&&sa(b[0])){var q=yi[b[0]];if(q&&(!c||!zi[b[0]])){b=q(b);break a}}b=void 0}if(!b){Ri=!1;continue}}a=Wi(b)||a}}finally{c&&uf(!0)}}Ri=!1}return!a},Yi=function(){var a=Xi();try{var b=rd.s,c=v["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=
!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(f){}return a},Zi=function(){var a=ee("dataLayer",[]),b=ee("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};jg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pi(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Je.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=
new Li(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Qi.push.apply(Qi,d);if(300<this.length)for(We("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Xi()&&h};Qi.push.apply(Qi,a.slice(0));F(Yi)};var $i;var vj={};vj.Vb=new String("undefined");
var wj=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===vj.Vb?b:a[d]);return c.join("")}};wj.prototype.toString=function(){return this.resolve("undefined")};wj.prototype.valueOf=wj.prototype.toString;vj.ag=wj;vj.Vc={};vj.Kg=function(a){return new wj(a)};var xj={};vj.Yh=function(a,b){var c=Ue();xj[c]=[a,b];return c};vj.De=function(a){var b=a?0:1;return function(c){var d=xj[c];if(d&&"function"===typeof d[b])d[b]();xj[c]=void 0}};vj.wh=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};vj.Mh=function(a){if(a===vj.Vb)return a;var b=Ue();vj.Vc[b]=a;return'google_tag_manager["'+rd.s+'"].macro('+b+")"};vj.Ah=function(a,b,c){a instanceof vj.ag&&(a=a.resolve(vj.Yh(b,c)),b=qa);return{jd:a,T:b}};var yj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||me(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},zj=function(a){Je.hasOwnProperty("autoEventsSettings")||(Je.autoEventsSettings={});var b=Je.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Aj=function(a,b,c){zj(a)[b]=c},Bj=function(a,b,c,d){var e=zj(a),f=Ia(e,b,d);e[b]=c(f)},Cj=function(a,b,c){var d=zj(a);return Ia(d,b,c)};var Dj=function(){for(var a=ce.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=v.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ha()/1E3)].join(".")},Gj=function(a,b,c,d){var e=Ej(b);return Dh(a,e,Fj(c),d)},Hj=function(a,b,c,d){var e=""+Ej(c),f=Fj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ej=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Fj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Ij=["1"],Jj={},Nj=function(a,b,c,d){var e=Kj(a);Jj[e]||Lj(e,b,c)||(Mj(e,Dj(),b,c,d),Lj(e,b,c))};function Mj(a,b,c,d,e){var f=Hj(b,"1",d,c);Ih(a,f,c,d,0==e?void 0:new Date(Ha()+1E3*(void 0==e?7776E3:e)))}function Lj(a,b,c){var d=Gj(a,b,c,Ij);d&&(Jj[a]=d);return d}function Kj(a){return(a||"_gcl")+"_au"};var Oj=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Jd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].Jd]||(f[a[h].Jd]=[]),f[a[h].Jd].push({timestamp:k[1],Yg:k[2]}))}return f};function Pj(){for(var a=Qj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Rj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Qj,Sj,Tj=function(a){Qj=Qj||Rj();Sj=Sj||Pj();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Qj[l],Qj[m],Qj[n],Qj[p])}return b.join("")},Uj=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Sj[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Qj=Qj||Rj();Sj=Sj||
Pj();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Vj;function Wj(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ak=function(){var a=Xj,b=Yj,c=Zj(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){ke(D,"mousedown",d);ke(D,"keyup",d);ke(D,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Zj=function(){var a=ee("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bk=/(.*?)\*(.*?)\*(.*)/,ck=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,dk=/^(?:www\.|m\.|amp\.)+/,ek=/([^?#]+)(\?[^#]*)?(#.*)?/,fk=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,hk=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Tj(String(d))))}var e=b.join("*");return["1",gk(e),e].join("*")},gk=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Vj)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Vj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Vj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},jk=function(){return function(a){var b=Lg(v.location.href),c=b.search.replace("?",""),d=Gg(c,"_gl",!1,!0)||"";a.query=ik(d)||{};var e=Jg(b,"fragment").match(fk);a.fragment=ik(e&&
e[3]||"")||{}}},kk=function(){var a=jk(),b=Zj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ma(c,d.query),Ma(c,d.fragment));return c},ik=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=bk.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===gk(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Uj(t[q+1]);return p}}}}catch(r){}};
function lk(a,b,c){function d(m){var n=m,p=fk.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var u=m.charAt(m.length-1);m&&"&"!==u&&(m+="&");return m+l}c=void 0===c?!1:c;var e=ek.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function mk(a,b,c){for(var d={},e={},f=Zj().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Wj(k.domains,b)&&(k.fragment?Ma(e,k.callback()):Ma(d,k.callback()))}if(Na(d)){var l=hk(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var u=lk(l,a.action);Eg.test(u)&&(a.action=u)}}}else nk(l,a,!1)}if(!c&&Na(e)){var w=hk(e);nk(w,a,!0)}}function nk(a,b,c){if(b.href){var d=lk(a,b.href,void 0===c?!1:c);Eg.test(d)&&(b.href=d)}}
var Xj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||mk(e,e.hostname,!1)}}catch(h){}},Yj=function(a){try{if(a.action){var b=Jg(Lg(a.action),"host");mk(a,b,!0)}}catch(c){}},ok=function(a,b,c,d){ak();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Zj().decorators.push(e)},pk=function(){var a=D.location.hostname,b=ck.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(dk,""),l=e.replace(dk,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},qk=function(a,b){return!1===a?!1:a||b||pk()};var rk={};var sk=/^\w+$/,tk=/^[\w-]+$/,uk=/^~?[\w-]+$/,vk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function wk(a){return a&&"string"==typeof a&&a.match(sk)?a:"_gcl"}var yk=function(){var a=Lg(v.location.href),b=Jg(a,"query",!1,void 0,"gclid"),c=Jg(a,"query",!1,void 0,"gclsrc"),d=Jg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Gg(e,"gclid",!1,void 0);c=c||Gg(e,"gclsrc",!1,void 0)}return xk(b,c,d)};
function xk(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(tk))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==rk.gtm_3pds?0:rk.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var Ak=function(a){var b=yk();zk(b,a)};
function zk(a,b,c){function d(p,t){var q=Bk(p,e);q&&Ih(q,t,h,f,l,!0)}b=b||{};var e=wk(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.wc?7776E3:b.wc;c=c||Ha();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.$i?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Dk=function(a,b,c,d,e){for(var f=kk(),h=wk(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==vk[l]){var m=Bk(l,h),n=f[m];if(n){var p=Math.min(Ck(n),Ha()),t;b:{for(var q=p,r=Ah(m,D.cookie),u=0;u<r.length;++u)if(Ck(r[u])>q){t=!0;break b}t=!1}t||Ih(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};zk(xk(f.gclid,f.gclsrc),w)},Bk=function(a,b){var c=vk[a];if(void 0!==c)return b+c},Ck=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ek(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fk=function(a,b,c,d,e){if(ua(b)){var f=wk(e);ok(function(){for(var h={},k=0;k<a.length;++k){var l=Bk(a[k],f);if(l){var m=Ah(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Gk=function(a){return a.filter(function(b){return uk.test(b)})},Hk=function(a){for(var b=["aw","dc"],c=wk(a&&a.prefix),d={},e=0;e<b.length;e++)vk[b[e]]&&(d[b[e]]=vk[b[e]]);Ba(d,function(f,h){var k=Ah(c+h,D.cookie);if(k.length){var l=k[0],m=Ck(l),n={};n[f]=[Ek(l)];zk(n,a,m)}})};var Ik=/^\d+\.fls\.doubleclick\.net$/;function Jk(a){var b=Lg(v.location.href),c=Jg(b,"host",!1);if(c&&c.match(Ik)){var d=Jg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kk(a,b){if("aw"==a||"dc"==a){var c=Jk("gcl"+a);if(c)return c.split(".")}var d=wk(b);if("_gcl"==d){var e;e=yk()[a]||[];if(0<e.length)return e}var f=Bk(a,d),h;if(f){var k=[];if(D.cookie){var l=Ah(f,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ek(l[m]);n&&-1===va(k,n)&&k.push(n)}h=Gk(k)}else h=k}else h=k}else h=[];return h}
var Lk=function(){var a=Jk("gac");if(a)return decodeURIComponent(a);var b=Oj(),c=[];Ba(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].Yg);f=Gk(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Mk=function(a,b,c,d,e){Nj(b,c,d,e);var f=Jj[Kj(b)],h=yk().dc||[],k=!1;if(f&&0<h.length){var l=Je.joined_au=Je.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="http://ad.doubleclick.net/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+f;ce.sendBeacon&&ce.sendBeacon(t)||je(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var q=Kj(b),r=Jj[q];r&&Mj(q,r,c,d,e)}};var Nk;if(3===rd.Zb.length)Nk="g";else{var Ok="G";Nk=Ok}
var Pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nk,OPT:"o"},Qk=function(a){var b=rd.s.split("-"),c=b[0].toUpperCase(),d=Pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===rd.Zb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+rd.Zb+e};
var Rk=function(a){return!(void 0===a||null===a||0===(a+"").length)},Sk=function(a,b){var c;if(2===b.Y)return a("ord",ya(1E11,1E13)),!0;if(3===b.Y)return a("ord","1"),a("num",ya(1E11,1E13)),!0;if(4===b.Y)return Rk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.Y)c="1";else if(6===b.Y)c=b.Cd;else return!1;Rk(c)&&a("qty",c);Rk(b.hc)&&a("cost",b.hc);Rk(b.transactionId)&&a("ord",b.transactionId);return!0},Tk=encodeURIComponent,Uk=function(a,b){function c(n,p,t){f.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Tk(p)))}var d=a.ed,e=a.protocol;e+=a.Bc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Tk(d)+(";type="+Tk(a.gd))+(";cat="+Tk(a.ub));var f=a.Mg||{};Ba(f,function(n,p){e+=";"+Tk(n)+"="+Tk(p+"")});if(Sk(c,a)){Rk(a.Hc)&&c("u",a.Hc);Rk(a.Gc)&&c("tran",a.Gc);c("gtm",Qk());!1===a.jg&&c("npa","1");if(a.bd){var h=Kk("dc",a.Sa);h&&h.length&&c("gcldc",h.join("."));var k=Kk("aw",a.Sa);k&&k.length&&c("gclaw",k.join("."));var l=Lk();l&&c("gac",l);Nj(a.Sa,void 0,a.Ig,a.Jg);
var m=Jj[Kj(a.Sa)];m&&c("auiddc",m)}Rk(a.yd)&&c("prd",a.yd,!0);Ba(a.Ld,function(n,p){c(n,p)});e+=b||"";Rk(a.xc)&&c("~oref",a.xc);a.Bc?ie(e+"?",a.T):je(e+"?",a.T,a.da)}else F(a.da)};var Vk=["input","select","textarea"],Wk=["button","hidden","image","reset","submit"],Xk=function(a){var b=a.tagName.toLowerCase();return!xa(Vk,function(c){return c===b})||"input"===b&&xa(Wk,function(c){return c===a.type.toLowerCase()})?!1:!0},Yk=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):pe(a,["form"],100)},Zk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Xk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var bl=!!v.MutationObserver,cl=void 0,dl=function(a){if(!cl){var b=function(){var c=D.body;if(c)if(bl)(new MutationObserver(function(){for(var e=0;e<cl.length;e++)F(cl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;ke(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<cl.length;e++)F(cl[e])}))})}};cl=[];D.body?b():F(b)}cl.push(a)};
var gl=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},hl=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;gl(b,"/*")&&(b=b.slice(0,-2));gl(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},il=/^[a-z0-9-]+$/i,jl=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
kl=function(a,b){for(var c=0;c<b.length;c++){var d;var e=a,f=b[c];if(!jl.exec(f))throw Error("Invalid Wildcard");var h=Lg(e),k;if(!(k="https:"!=h.protocol||h.port&&"443"!=h.port)){var l;b:{var m=h.hostname.split(".");if(2>m.length)l=!1;else{for(var n=0;n<m.length;n++)if(!il.exec(m[n])){l=!1;break b}l=!0}}k=!l}if(k)d=!1;else{var p=f.slice(8),t=p.slice(0,p.indexOf("/")),q;var r=h.hostname,u=t;if(0!==u.indexOf("*."))q=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var w=r.toLowerCase().indexOf(u.toLowerCase());
q=-1===w?!1:r.length===u.length?!0:r.length!==u.length+w?!1:"."===r[w-1]}if(q){var y=p.slice(p.indexOf("/"));d=hl(h.pathname+h.search,y)?!0:!1}else d=!1}if(d)return!0}return!1};var Fl=v.clearTimeout,Gl=v.setTimeout,M=function(a,b,c){if(Ff()){b&&F(b)}else return ge(a,b,c)},Hl=function(){return v.location.href},Il=function(a){return Jg(Lg(a),"fragment")},Jl=function(a){return Kg(Lg(a))},Kl=null;
var Ll=function(a,b){return vf(a,b||2)},Ml=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Si(a)},Nl=function(a,b){v[a]=b},W=function(a,b,c){b&&(void 0===v[a]||c&&!v[a])&&(v[a]=b);return v[a]},Ol=function(a,b,c){return Ah(a,b,void 0===c?!0:!!c)},Pl=function(a,b,c,d){var e={prefix:a,path:b,domain:c,wc:d};Ak(e);Hk(e)},Ql=function(a,b,c,d,e){Fk(a,b,c,d,e);},Rl=function(a,b){if(Ff()){b&&F(b)}else ie(a,b)},Sl=function(a){return!!Cj(a,"init",!1)},Tl=function(a){Aj(a,"init",!0)},Ul=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Ne;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&Ba(b,function(e,f){f&&(d+="&"+e+"="+encodeURIComponent(f))});M(L("https://","http://",d))},Vl=function(a,b){var c=a[b];
return c};var Xl=vj.Ah;
var Yl=new za,Zl=function(a,b){function c(h){var k=Lg(h),l=Jg(k,"protocol"),m=Jg(k,"host",!0),n=Jg(k,"port"),p=Jg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0},$l=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if($l({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=va(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Yl.get(q);r||(r=new RegExp(c,t),Yl.set(q,r));p=r.test(b)}catch(u){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Zl(b,c)}return!1};var bm={},cm=function(){if(v._gtmexpgrp&&v._gtmexpgrp.hasOwnProperty(1))return v._gtmexpgrp[1];void 0===bm[1]&&(bm[1]=Math.floor(2*Math.random()));return bm[1]};var dm=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var em={},fm=encodeURI,X=encodeURIComponent,gm=je;var hm=function(a,b){if(!a)return!1;var c=Jg(Lg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var im=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};em.xh=function(){var a=!1;return a};var Sm=function(){var a=v.gaGlobal=v.gaGlobal||{};a.hid=a.hid||ya();return a.hid};var Bn=window,Cn=document,Dn=function(a){var b=Bn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Bn["ga-disable-"+a])return!0;try{var c=Bn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Ah("AMP_TOKEN",Cn.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Cn.getElementById("__gaOptOutExtension")?!0:!1};var Gn=function(a){return"_"===a.charAt(0)},Hn=function(a){Ba(a,function(c){Gn(c)&&delete a[c]});var b=a[H.Ub]||{};Ba(b,function(c){Gn(c)&&delete b[c]})};var Kn=function(a,b,c){mh(b,c,a)},Ln=function(a,b,c){mh(b,c,a,!0)},Nn=function(a,b){},Mn=function(a,b){};
var Y={a:{}};

Y.a.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__send_pixel=b;Y.__send_pixel.b="send_pixel";Y.__send_pixel.g=!0;Y.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!sa(f))throw d(e,{},"URL must be a string.");try{if(kl(f,c))return}catch(h){throw d(e,{},"Invalid URL filter.");}throw d(e,{},"Prohibited URL: "+f+".");},I:a}})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Uk(b,c)}(function(b){Y.__flc=b;Y.__flc.b="flc";Y.__flc.g=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=im(b.vtp_customVariable||[],"key","value")||{},e={ub:b.vtp_activityTag,bd:c,Sa:b.vtp_conversionCookiePrefix||void 0,hc:void 0,Y:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,ed:b.vtp_advertiserId,gd:b.vtp_groupTag,da:b.vtp_gtmOnFailure,T:b.vtp_gtmOnSuccess,
xc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Cd:void 0,Bc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Gc:b.vtp_transactionVariable,transactionId:void 0,Hc:b.vtp_userVariable,Ld:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){M("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([im(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(Ef(a.vtp_gtmEventId,"event"))})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=yj(c,"gtm.click");Ml(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Sl("cl")){var c=W("document");ke(c,"click",a,!0);Tl("cl")}F(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return Ol(a.vtp_name,Ll("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.b="access_globals";Y.__access_globals.g=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,t){if(!sa(t))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<va(e,t))return}else if("write"===p){if(-1<va(f,t))return}else if("readwrite"===p){if(-1<va(f,t)&&-1<va(e,t))return}else if("execute"===p){if(-1<va(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
t+".");},I:a}})}();Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return ya(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Ll("gtm.url",1))||Hl();var d=b[a("vtp_component")];if(!d||"URL"==d)return Jl(String(c));var e=Lg(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ua(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=Jg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=Jg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Ll(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.rd&&b.ud>=b.rd)b.ld&&W("self").clearInterval(b.ld);else{b.ud++;var c=(new Date).getTime();Ml({event:b.la,"gtm.timerId":b.ld,"gtm.timerEventNumber":b.ud,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.rd,"gtm.timerStartTime":b.nf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.nf,"gtm.triggers":b.oi})}}}(function(b){Y.__tl=b;Y.__tl.b="tl";Y.__tl.g=!0;Y.__tl.priorityOverride=0})(function(b){F(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{la:b.vtp_eventName,ud:0,interval:Number(b.vtp_interval),rd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),oi:String(b.vtp_uniqueTriggerId||"0"),nf:(new Date).getTime()};c.ld=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.asp=["nonGoogleScripts"],function(){(function(a){Y.__asp=a;Y.__asp.b="asp";Y.__asp.g=!0;Y.__asp.priorityOverride=0})(function(a){v.adroll_adv_id=a.vtp_customerId;v.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(v.adroll_conversion_value=a.vtp_conversionValueInDollars,v.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=im(a.vtp_customData,"key","value");v.adroll_custom_data=b}a.vtp_segmentName&&(v.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(v.adroll_email=a.vtp_visitorEmail);v.__adroll_loaded=!0;var c=L("https://s","http://a",".adroll.com/j/roundtrip.js");M(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(im(n.vtp_fieldsToSet,"fieldName","value"),f);C(im(n.vtp_contentGroup,"index","group"),h);C(im(n.vtp_dimension,"index","dimension"),k);C(im(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=C(n);d=C(d,p)}C(im(d.vtp_fieldsToSet,"fieldName","value"),f);C(im(d.vtp_contentGroup,
"index","group"),h);C(im(d.vtp_dimension,"index","dimension"),k);C(im(d.vtp_metric,"index","metric"),l);var t=zg(d.vtp_functionName);if(ra(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ue(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(T,P){return void 0===P?P:T(P)},z=function(T,P){if(P)for(var wa in P)P.hasOwnProperty(wa)&&y("set",T+wa,P[wa])},A=function(){},B=function(T,P,wa){var kb=0;if(T)for(var Ka in T)if(T.hasOwnProperty(Ka)&&(wa&&u[Ka]||!wa&&void 0===u[Ka])){var lb=w[Ka]?Ea(T[Ka]):T[Ka];"anonymizeIp"!=Ka||lb||(lb=void 0);P[Ka]=lb;kb++}return kb},E={name:r};B(f,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Qk(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,P){void 0!==d[P]&&y("set",T,d[P])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var G={};B(f,G,!1)&&y("set",G);var J;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=f&&f.hitCallback;ra(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Da,d.vtp_eventValue||
e.value)};B(J,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Z=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Z})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var la="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:la})}J?y("send","pageview",J):y("send","pageview");}if(!a){var ma=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ma="internal/"+ma);a=!0;var La=L("https:","http:","//www.google-analytics.com/"+ma,f&&f.forceSSL);M(La,function(){var T=xg();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else F(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();
Y.a.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Y.__get_url=b;Y.__get_url.b="get_url";Y.__get_url.g=!0;Y.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,h,k){if(h){if(!sa(h))throw e(f,{},"URL component must be a string.");if(c&&0>va(c,h))throw e(f,{},"Prohibited URL component: "+h);if("query"===h&&d){if(!k)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!sa(k))throw e(f,{},"Query key must be a string.");if(0>va(d,k))throw e(f,{},"Prohibited query key: "+k);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},I:a}})}();





Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){F(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
pk())){Dk(a,h,k,l,void 0);}Pl(e,c,d);Mk(f,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ql(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Y.a.aev=["google"],function(){function a(q,r){var u=Ef(q,"gtm");if(u)return u[r]}function b(q,r,u,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=u(z),n[y]=x,p.push(y),35<p.length)){var A=p.shift();delete n[A]}}return x}function c(q,r,u){var w=a(q,t[r]);return void 0!==w?w:u}function d(q,r){if(!q)return!1;var u=e(Hl());ua(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!hm(q,w)}function e(q){m.test(q)||(q="http://"+q);return Jg(Lg(q),"HOST",!0)}function f(q,r,u){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||u;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?u:w;case "INTERACTED_FIELD_ID":return l(r,"id",u);case "INTERACTED_FIELD_NAME":return l(r,"name",u);case "INTERACTED_FIELD_TYPE":return l(r,"type",u);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?u:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?u:x;default:return u}}function h(q){switch(q.tagName.toLowerCase()){case "input":return me(q,"value");case "button":return ne(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,u=0;u<q.elements.length;u++)Xk(q.elements[u])&&r++;return r}}function l(q,r,u){var w=a(q,"interactedFormField");return w&&me(w,r)||u}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,u=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
u;case "TEXT":return b(r,w,ne)||u;case "URL":var x;a:{var z=String(a(r,"elementUrl")||u||""),A=Lg(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=Jg(A,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,u);else{var G=q.vtp_attribute,J=a(r,"element");E=J&&me(J,G)||u||""}return E;case "MD":var N=q.vtp_mdValue,V=b(r,"MD",rl);return N&&V?ul(V,N)||
u:V||u;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),r,u);default:return c(r,w,u)}})}();

Y.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Y.__cegg=b;Y.__cegg.b="cegg";Y.__cegg.g=!0;Y.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(v.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");M("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else F(b.vtp_gtmOnFailure)}catch(f){F(b.vtp_gtmOnFailure)}})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){sg();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Qk()},m=function(u){return function(w,y,x){var z="DATA_LAYER"==u?Ll(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(u){return{value:u.price,quantity:u.quantity,item_id:u.id}}));var p=function(u,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[u]=w},t=function(u){return function(w,y,x,z){var A="DATA_LAYER"==
u?Ll(x):k[y];z(A)&&p(w,A)}},q="//www.googleadservices.com/pagead/conversion_async.js";-1!=navigator.userAgent.toLowerCase().indexOf("firefox")&&(0==cm()?(p("cjs","0"),q="https://www.googleadservices.com/pagead/conversion_async.js?cjs=0"):(p("cjs","1"),q="https://www.google.com/pagead/conversion_async.js?cjs=1"));k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),
n("vdnc","vtp_awNewCustomer","new_customer",function(u){return void 0!=u&&""!==u}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(u){return void 0!=u&&""!==u}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,M(q,f(),e(q)))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=im(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){F(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,fe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){F(h)}}}var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,f=Xl(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.jd,k=f.T;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,oe(h),k,e)()}else Gl(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();





Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.b="img";Y.__img.g=!0;Y.__img.priorityOverride=0})(function(a){var b=oe('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}gm(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var $n={};$n.macro=function(a){if(vj.Vc.hasOwnProperty(a))return vj.Vc[a]},$n.onHtmlSuccess=vj.De(!0),$n.onHtmlFailure=vj.De(!1);$n.dataLayer=wf;$n.callback=function(a){Se.hasOwnProperty(a)&&ra(Se[a])&&Se[a]();delete Se[a]};$n.ug=function(){Je[rd.s]=$n;Ma(Te,Y.a);Vc=Vc||vj;Wc=bg};
$n.rh=function(){rk.gtm_3pds=!0;Je=v.google_tag_manager=v.google_tag_manager||{};if(Je[rd.s]){var a=Je.zones;a&&a.unregisterChild(rd.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Oc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Rc.push(e[f]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Qc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Pc.push(p)}Tc=Y;Uc=$l;var q=data.permissions||{},r=data.sandboxed_scripts;ki();ud=new td(q);if(void 0!==r)for(var u=["sandboxedScripts"],w=0;w<r.length;w++){var y=r[w].replace(/^_*/,"");Te[y]=u}$n.ug();Zi();eg=!1;fg=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)hg();else{ke(D,"DOMContentLoaded",hg);ke(D,"readystatechange",
hg);if(D.createEventObject&&D.documentElement.doScroll){var x=!0;try{x=!v.frameElement}catch(E){}x&&ig()}ke(v,"load",hg)}Mi=!1;"complete"===D.readyState?Oi():ke(v,"load",Oi);a:{if(!mf)break a;v.setInterval(nf,864E5);}
Pe=(new Date).getTime();}};(0,$n.rh)();

})()
