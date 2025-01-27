(() => {
var exports = {};
exports.id = 658;
exports.ids = [658];
exports.modules = {

/***/ 8278:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "_meetupDetails__detail__ZcATl"
};


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MeetUpDetails),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var _meetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_meetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




function MeetUpDetails(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Review the content of this event"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_meetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().detail),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: props.meetupData.image,
                        alt: props.meetupData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("address", {
                        children: props.meetupData.address
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: props.meetupData.description
                    })
                ]
            })
        ]
    });
}
async function getStaticPaths() {
    const client = mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect("mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const db = (await client).db("DB1");
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    (await client).close();
    return {
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupDetails: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupDetails;
    const client = mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect("mongodb+srv://pedro:pedromendoza@cluster0.d1bpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const db = (await client).db("DB1");
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId.createFromHexString(meetupId)
    });
    console.log(selectedMeetup);
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image
            }
        }
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6893));
module.exports = __webpack_exports__;

})();