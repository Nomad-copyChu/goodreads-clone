"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../../generated/prisma-client");
exports.default = {
    Mutation: {
        addBook: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            var user, bookInfos, authors, existBook, createAuthors, connectAuthors, createGernes, connectGernes, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        user = context.user;
                        if (!user) {
                            throw Error("로그인 한 유저만 책을 추가할 수 있습니다.");
                        }
                        bookInfos = args.bookInfos, authors = args.authors;
                        if (!bookInfos.title) {
                            throw Error("제목은 필수 입니다.");
                        }
                        if (!bookInfos.thumbnail) {
                            throw Error("책의 사진은 필수 입니다.");
                        }
                        if (!bookInfos.contents) {
                            throw Error("책 소개는 필수 입니다.");
                        }
                        if (!bookInfos.isbn) {
                            throw Error("isbn은 필수 입니다.");
                        }
                        return [4 /*yield*/, prisma_client_1.prisma.$exists.book({ isbn: bookInfos.isbn })];
                    case 1:
                        existBook = _d.sent();
                        if (existBook) {
                            throw Error("이미 등록된 책입니다.");
                        }
                        createAuthors = [];
                        connectAuthors = [];
                        createGernes = [];
                        connectGernes = [];
                        if (!bookInfos.gernes) return [3 /*break*/, 5];
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, Promise.all(bookInfos.gernes.map(function (gerne) { return __awaiter(void 0, void 0, void 0, function () {
                                var existGerne;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, prisma_client_1.prisma.$exists.gerne({ term: gerne })];
                                        case 1:
                                            existGerne = _a.sent();
                                            if (existGerne) {
                                                connectGernes.push(gerne);
                                            }
                                            else {
                                                createGernes.push(gerne);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _c = [
                            _d.sent()
                        ];
                        return [4 /*yield*/, Promise.all(authors.map(function (author) { return __awaiter(void 0, void 0, void 0, function () {
                                var existAuthor;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, prisma_client_1.prisma.$exists.author({
                                                name: author.name
                                            })];
                                        case 1:
                                            existAuthor = _a.sent();
                                            if (existAuthor) {
                                                connectAuthors.push(author);
                                            }
                                            else {
                                                createAuthors.push(author);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3: return [4 /*yield*/, _b.apply(_a, [_c.concat([
                                _d.sent()
                            ])])];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, Promise.all(authors.map(function (author) { return __awaiter(void 0, void 0, void 0, function () {
                            var existAuthor;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, prisma_client_1.prisma.$exists.author({
                                            name: author.name
                                        })];
                                    case 1:
                                        existAuthor = _a.sent();
                                        if (existAuthor) {
                                            connectAuthors.push(author);
                                        }
                                        else {
                                            createAuthors.push(author);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7: return [4 /*yield*/, prisma_client_1.prisma.createBook(__assign(__assign({}, bookInfos), { authors: {
                                create: createAuthors.map(function (author) { return (__assign({}, author)); }),
                                connect: connectAuthors.map(function (author) { return ({
                                    name: author.name
                                }); })
                            }, gernes: {
                                create: createGernes.map(function (gerne) { return ({
                                    term: gerne
                                }); }),
                                connect: connectGernes.map(function (gerne) { return ({
                                    term: gerne
                                }); })
                            }, addUser: { connect: { id: user.id } }, wantCount: 0, readCount: 0, readingCount: 0, totalRating: 0, ratedUserNum: 0 }))];
                    case 8: return [2 /*return*/, _d.sent()];
                }
            });
        }); }
    }
};