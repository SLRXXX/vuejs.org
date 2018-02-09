/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","b72e1bfbc64be428e813e4e42bbd7537"],["/2014/07/29/vue-next/index.html","8f2e469761ae08352459deac21c4ba5a"],["/2014/11/09/vue-011-release/index.html","8b9eaef0f37182c928b4c09eaed8b1be"],["/2014/12/08/011-component/index.html","eb9f03c4b0abe81da0f178a6349cd2d9"],["/2015/06/11/012-release/index.html","6c1478ad53e4aa50ef8366c5b0a903f9"],["/2015/10/26/1.0.0-release/index.html","a9cec2d802d812d77760dab664fbf413"],["/2015/10/28/why-no-template-url/index.html","5c19030cba51f466d6d0345786096a7f"],["/2015/12/28/vue-cli/index.html","c522a810317143d17fe91adcc99a1be4"],["/2016/02/06/common-gotchas/index.html","82673139cd92aa4416e58f1766bc80a6"],["/2016/03/14/march-update/index.html","9572940361820564f6095cf4810fbba6"],["/2016/04/27/announcing-2.0/index.html","49ee98e23c51b9cddf1bf9fa3e1329e1"],["/about/index.html","dc983c1a19ba559006d7e771230517e7"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","6b3b6105a154ba92ef5c75fc6689ede4"],["/archives/2014/07/index.html","190ff8b62365b90dc5121ff837cd95a5"],["/archives/2014/11/index.html","bd2f9b866712ca4f1f8c11180367c8a7"],["/archives/2014/12/index.html","beb22da177d32cfabadde234a569d68f"],["/archives/2014/index.html","8eaa173e477e626181f744cd76b2c1aa"],["/archives/2015/06/index.html","0831ea9c171efee91da1672fcc53341f"],["/archives/2015/10/index.html","f6d850e61a4a3e40fd155487bf35bd39"],["/archives/2015/12/index.html","4df2e02148701587933cc6359240edb7"],["/archives/2015/index.html","d5a423ff0e020751068873558d8ce55f"],["/archives/2016/02/index.html","f4e13d712425592f8d9a3b5a4c8bf96c"],["/archives/2016/03/index.html","0a7890646b356036a1b4fecb5cf25bde"],["/archives/2016/04/index.html","949ad5dc6d0b08632d60432914eda408"],["/archives/2016/index.html","ca18c98532e2847586b0e57b4756a816"],["/archives/index.html","525b757ebaeb04fa233d2a04fe72975f"],["/archives/page/2/index.html","3f5226c621abed0d616ea2992ce79cab"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","9ea41cb28b42c3b9743dd479841a0b64"],["/css/page.css","acd61972aa5edf0c222dde267f54a567"],["/css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/100offer.png","5fc04cb5266c2171ce5cc68ca6be8ea4"],["/images/2mhost.png","4b8d618675f5ae2e25873930e0f1a33b"],["/images/actualize.png","caed3eca0208a349140a95b354d07382"],["/images/anymod.png","f85debec44ea29dd53d2e4f19eb889b4"],["/images/chaitin.png","2e90c7e1644d533624b59194544aab8b"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/coin-bch.png","e9634e36f11c3f176b39b58e0820d049"],["/images/coin-btc.png","8047fc21916eb3615d0a4efe57f1c432"],["/images/coin-eth.png","cd0db0d4bc0a7bdd0663f4d01bdf1afd"],["/images/coin-ltc.png","933d3713c8ac395d46df6cc4557a63e6"],["/images/components.png","7769fd61a903797e4273c74888ed8b9b"],["/images/conf.png","122b20796747d08484fc2cdfefcba97a"],["/images/data.png","2fdee1ad51c9b990ca186769cbc92dc4"],["/images/datacamp.png","e8cd9907a77af393f0029a681707d831"],["/images/dom-tree.png","7ed63c53d0fe7e8e1c0a74332f6eb775"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/famebroker.png","50c05f70a13a6ccf44ebc50d6b97263c"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/frontend-love.png","13f1e90195ff2a1fa94aee3f84b79121"],["/images/frontend-meetups.png","4d67ea5944cde49c38173b904fff492b"],["/images/hn-architecture.png","2414356400811f80a25178bad519927e"],["/images/hn.png","907b2c671bfe609f3bbf7b4e51480c0b"],["/images/htmlburger.png","3c838f6dbddb1361e6019f521578171f"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/icons/android-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/android-icon-192x192.png","ad7d1af025254f7fb6c45917d26c0486"],["/images/icons/android-icon-36x36.png","005fffcd0a3cce3dacf8856645501213"],["/images/icons/android-icon-48x48.png","e898ac737b264364a216e2007b1fd7da"],["/images/icons/android-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/android-icon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/apple-icon-114x114.png","69c4653429d7ac74ef8b968ad0676a19"],["/images/icons/apple-icon-120x120.png","3bb7b09526b130a7713f247e7db6b835"],["/images/icons/apple-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/apple-icon-152x152.png","6f0e515bd57131a7e9c584c0a99492c6"],["/images/icons/apple-icon-180x180.png","91bc1dd313b750413e8e54349d2d7feb"],["/images/icons/apple-icon-57x57.png","d322b29db86a269ca682d6d54450a6d1"],["/images/icons/apple-icon-60x60.png","99b633995d668a30d869843d322cb2d5"],["/images/icons/apple-icon-72x72.png","ad659ec7e8eae4a50b73145c69772d42"],["/images/icons/apple-icon-76x76.png","293bd080883b88e811ec54fd1d17f04c"],["/images/icons/apple-icon-precomposed.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/apple-icon.png","8366f4f77f84f5945d37c8b6b5e85466"],["/images/icons/favicon-16x16.png","b0fb918340bdb38c3f82934c3b83da28"],["/images/icons/favicon-32x32.png","495a42102231b5a1e1999b969fe59ca9"],["/images/icons/favicon-96x96.png","90c13bf806fb3b3749ef1f60cc5dc34c"],["/images/icons/ms-icon-144x144.png","42d2c151cc101a4c42ac51bd96c8b24d"],["/images/icons/ms-icon-150x150.png","81b31836aa22a0861e979c3f798c2257"],["/images/icons/ms-icon-310x310.png","dc00a74758f465cf5545d759a7fc26fc"],["/images/icons/ms-icon-70x70.png","e20d096831d0fe142137fb69fd7c5915"],["/images/infinitynewtab.png","1137f7c599e5f5ff6a4bc393a7bb3b3a"],["/images/itunescn.png","ca4a777f3e67fda2fc0c703e5a0f3845"],["/images/jsfiddle.png","cdaaf61398b8ccde5fbfb28daab02dc2"],["/images/juejin.png","f8a801162a92753a9f69ee528ea72d81"],["/images/laravel.png","854ba2a1472cff4b73bbb98cc2bf6e74"],["/images/lifecycle.png","1d3dae65499d59846dfbfaaa7daae963"],["/images/logged-proxied-data.png","72b84d29d68b46cb4772b225aaf581e9"],["/images/logo.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/monterail.png","a1b2c43f5834a30140acf56a56ee3d7e"],["/images/mvvm.png","9ef4a737380c1e72d3c1a5fae8480533"],["/images/neds.png","26976f4858a5bb554d3db85c64188e6e"],["/images/onsen-ui.png","c9c5c8fc38c7121ca4d5b83438d1ce9e"],["/images/patreon.png","c55a20c3dface37cde7d1534e243c9fe"],["/images/paypal.png","70c8748866c09556ef5abb1a32496f25"],["/images/props-events.png","a18498cd0176946ccee943d2fec4f420"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/images/someline.png","2e05b0cfb1eaa734666dab9e5f92cea1"],["/images/state.png","ca9bd676c6d66f5f0797ec6ad35eb2b4"],["/images/stdlib.png","0c3292d4d501cfb819cf38e8324d9220"],["/images/strikingly.png","c220cba956cba87d47c972340ef872d1"],["/images/tde.png","dfd1f4c2d07907d379fc26e890827f14"],["/images/tmvuejs2.png","260af8aecb932915b0aff029550a80a4"],["/images/tooltwist.png","2ac56564865b514da3fd3c3532113c14"],["/images/transition.png","ca34aef3910abf105dc112aa23026d54"],["/images/typescript-type-error.png","ac1a1aa8c51a40565dc603917925a14e"],["/images/umoon.png","844f09da5ca82b56a1824b68591cff16"],["/images/upyun-large.png","cd66170a5022b5c9444119e3fa5cb83a"],["/images/upyun-main-2.jpg","f388a2ba0e0b004e15a7684485fff486"],["/images/upyun-main-3.jpg","e618981c7f191cd1fd84905e03538f47"],["/images/upyun-main.jpg","1c36d062540e5d97a2ca993776fb7016"],["/images/upyun-small.png","7a42625327e1495cec13cbe25c7a200d"],["/images/vue-component-with-preprocessors.png","f1bdf44c793758fc8576724406014986"],["/images/vue-component.png","91752852891f91a4afd27d95bb00b22d"],["/images/vuejobs.png","c623aef2e3089ed2849adc9ae6349627"],["/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/images/vuejsadmin.png","dd05607d35642239837fff531f3c4a09"],["/images/vueschool.png","76826a1bd7948d115b1a8d774cf2eb25"],["/images/vuetify.png","40e87e078618e137638baebe188029ad"],["/images/xfive.png","016402e334a83e4af9ff0958d39a7b0e"],["/index.html","bec183302cc57315d8cd1202638d6357"],["/js/common.js","fe69414d78d8fc19aadb938152b9a3e4"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","440e570c372631aa20b9c778ad9e7273"],["/js/vue.min.js","9cfa1585246355bf21ba3980f5843cdb"],["/js/vuefe-min.fe7c4b3c46a9ec32c769.js","679ef4b54f690beffb8558fa255a3602"],["/js/vuefe.js","22207a432bbe9b1fbf998e24191cc27b"],["/menu/index.html","6cd0ff9b5c461de029e9f5d6ef051328"],["/page/2/index.html","c12b4c8f38f9a13f3431afb26dce86bb"],["/support-vuejs/index.html","2d9896801046b3b4d580fa8c127d0bec"],["/v2/api/index.html","f014f34c018c49182f40cb8fab6e6392"],["/v2/cookbook/adding-instance-properties.html","0c58a7ac50fa03858914f86758ff6773"],["/v2/cookbook/cookbook-contributions.html","f0928e85d089940f4b788ae50531d0f1"],["/v2/cookbook/form-validation.html","7c9654766ee2cc103a645260305edca3"],["/v2/cookbook/index.html","5ae2db4704cc2b9d5e474bf864f24372"],["/v2/examples/commits.html","b548c6deb8b8c53dcba400db23f85712"],["/v2/examples/deepstream.html","60cf91c5171f5a69d62fb557a4fdffd0"],["/v2/examples/elastic-header.html","a55b9e1e21ef4099b30a233b488fa7e5"],["/v2/examples/firebase.html","48bddce504e64925941df9774655d720"],["/v2/examples/grid-component.html","9634d9301552ae94b2d2babb24ead95a"],["/v2/examples/hackernews.html","7dfcd573455d619b5534585d9873df65"],["/v2/examples/index.html","a94b6a916fe1c4814228196c47936f0c"],["/v2/examples/modal.html","cb057c10d442575d6e655156c70ddab5"],["/v2/examples/select2.html","7757a31de5dd5841eeefc24d11829fb1"],["/v2/examples/svg.html","9f3f9c5097f9c185ed6e633c371682b4"],["/v2/examples/todomvc.html","aadf4d1c90d0be17f591d39265eabe6c"],["/v2/examples/tree-view.html","3cbf348b05b1185d7644c30e6175ebc1"],["/v2/guide/class-and-style.html","c19685c17ddcc4764547f2dc00283d7f"],["/v2/guide/comparison.html","37eded384e00e1effc39c36aafeb50fb"],["/v2/guide/components.html","32618922ea120a7c181c66b6c92fba47"],["/v2/guide/computed.html","ba36efe08b9b157dddd573e8b6fe58cf"],["/v2/guide/conditional.html","73e77134bde21bb6fd7056ae1960a1fc"],["/v2/guide/custom-directive.html","6940e4301329e8cabdcaa05ca202b7fa"],["/v2/guide/deployment.html","fb2ac7e02e24b28b57468b41a44728cf"],["/v2/guide/events.html","06b95ab60d8243116355bb7eaca0008f"],["/v2/guide/filters.html","013420cba0fcf43b0de33376f4fdc80e"],["/v2/guide/forms.html","80300b385845fb6db78bc2076b9467ef"],["/v2/guide/index.html","60277a6c21426b551c113703c8d9bca3"],["/v2/guide/installation.html","075610bd27ceea64ccbd3ccc8d24f371"],["/v2/guide/instance.html","8284471444e40963c8ae34630bbeb47d"],["/v2/guide/join.html","7e2297e8c7911651dab8a4dcba2d73cd"],["/v2/guide/list.html","0d95809fdd8dfe6c4fe6f583dbd6c909"],["/v2/guide/migration-vue-router.html","2aa8cfcdfa6cfb1d845aab1cc220eed9"],["/v2/guide/migration-vuex.html","ad9098a69f80066487d2b1b849dd430c"],["/v2/guide/migration.html","bfcc285f09f6c83e9dfa65b5dd07eb80"],["/v2/guide/mixins.html","38d1a5ca3717b22a81372c690e7aed30"],["/v2/guide/plugins.html","30129ab5770b160005e5a862fafb5283"],["/v2/guide/reactivity.html","e6259710b0a711407a4be0b8a60d942f"],["/v2/guide/render-function.html","17c9a50d1ea4a8ee691b1e940e2d0007"],["/v2/guide/routing.html","2e15e97cf628c6ad177801b04dc86c73"],["/v2/guide/single-file-components.html","4da52b9e7623c9a31166e316dfd23b83"],["/v2/guide/ssr.html","4a1821d3771b9190ad6f19cb816e41a6"],["/v2/guide/state-management.html","34d3c5ddf605221d2db6d76d64dfa2ca"],["/v2/guide/syntax.html","2a225f5298d8b01d12296b1137b36c06"],["/v2/guide/team.html","acb70aace7f733c2a6a3a1d36bd80101"],["/v2/guide/transitioning-state.html","dbda430d3d0a901c3613fd31809bd168"],["/v2/guide/transitions.html","3fe845fb276ff9baa42c675953422667"],["/v2/guide/typescript.html","90c1eaff6b11967422c0ce1a52e2c372"],["/v2/guide/unit-testing.html","6f5085464e9c955e9792786f3f7a29dc"],["/v2/style-guide/index.html","764198a048ad17c4d8c368f9ddb688b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







