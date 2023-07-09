"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrand = exports.createChild = exports.getFolders = exports.createFolder = void 0;
const Child_1 = __importDefault(require("../models/Child"));
const Folder_1 = __importDefault(require("../models/Folder"));
const Grand_1 = __importDefault(require("../models/Grand"));
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, parent } = req.body;
        const data = yield Child_1.default.create({ name, parent });
        res.json({ message: "Folder created", data: data });
    }
    catch (error) {
        res.json({ status: "error", message: error });
    }
});
exports.createFolder = createFolder;
const getFolders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Folder_1.default.find().populate("children").populate("children");
        const d = yield Child_1.default.find().populate("children").populate("children");
        const t = yield Grand_1.default.find().populate("children").populate("children");
        res.json({ message: "Folder created", data: data });
    }
    catch (error) {
        res.json({ status: "error", message: error });
    }
});
exports.getFolders = getFolders;
const createChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, parent } = req.body;
        const data = yield Child_1.default.create({ name, parent });
        const id = data._id;
        console.log(id);
        const folder = yield Folder_1.default.findById(parent);
        yield (folder === null || folder === void 0 ? void 0 : folder.updateOne({ $push: { children: id } }));
        res.json({ message: "Child Folder created", data: data });
    }
    catch (error) {
        res.json({ status: "error", message: error });
    }
});
exports.createChild = createChild;
const createGrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, parent } = req.body;
        const data = yield Grand_1.default.create({ name, parent });
        const id = data._id;
        console.log(id);
        const child = yield Child_1.default.findById(parent);
        yield (child === null || child === void 0 ? void 0 : child.updateOne({ $push: { children: id } }));
        res.json({ message: "Grand Folder created", data: data });
    }
    catch (error) {
        res.json({ status: "error", message: error });
    }
});
exports.createGrand = createGrand;
//# sourceMappingURL=folderController.js.map