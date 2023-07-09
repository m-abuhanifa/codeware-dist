"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const folderController_1 = require("../controllers/folderController");
const router = express_1.default.Router();
router.route("/folders").post(folderController_1.createFolder).get(folderController_1.getFolders);
router.route("/child").patch(folderController_1.createChild);
router.route("/grand").patch(folderController_1.createGrand);
exports.default = router;
//# sourceMappingURL=folderRoute.js.map