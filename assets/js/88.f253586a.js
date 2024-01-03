(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{268:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var a=this,t=a._self._c;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("ol",[t("li",[a._v("You can install the package using composer:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require santigarcor/laratrust\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Publish the configuration file:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan vendor:publish "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"laratrust"')]),a._v("\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("If this command did not publish any files, chances are, the Laratrust service provider hasn't been registered. Try clearing your configuration cache")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan config:clear\n")])])])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Run the setup command:")])]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("IMPORTANT")]),a._v(" "),t("p",[t("em",[t("em",[a._v("Before running the command go to your")]),a._v(" "),t("code",[a._v("config/laratrust.php")]),a._v(" "),t("em",[a._v("file and change the values according to your needs.")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan laratrust:setup\n")])])]),t("p",[a._v("This command will generate the migrations, create the "),t("code",[a._v("Role")]),a._v(" and "),t("code",[a._v("Permission")]),a._v(" models (if you are using the teams feature it will also create a "),t("code",[a._v("Team")]),a._v(" model) and will add the trait to the configured user models.")]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("Dump the autoloader:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" dump-autoload\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("Run the migrations:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan migrate\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("IMPORTANT")]),a._v(" "),t("p",[t("strong",[a._v("If you did the steps above you are done with the configuration, if not, please read and follow the whole configuration process")])])])])}],!1,null,null,null);t.default=r.exports}}]);