import ArraySort from "./lib/arraySort";
import * as Components from "@edwardxyt/gws-components";
import rules from "./data/regular";
import Cache from "./lib/cache.js";
import DOMReadyMethodFactory from "./lib/dom-ready-factory.js";
import NativeBridgeFactory from "./lib/native-bridge-factory.js";

let version = require("../package.json").version;
let DOMReady = DOMReadyMethodFactory(window, document);

export {
    version as default,
    Components,
    ArraySort,
    rules,
    Cache,
    DOMReady,
    NativeBridgeFactory
};
