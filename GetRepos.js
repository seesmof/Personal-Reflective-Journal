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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var what = [
    "age-calculator-app",
    "ber-ai-generative-art-platform",
    "chuck-norris-quotes-generator",
    "codewell-solutions",
    "free-code-camp-course",
    "frontend-mentor-solutions",
    "javascript-algorithms-data-structures_free-code-camp",
    "klopotenko-clone",
    "leetcode-solutions",
    "portfolio",
    "robo-social-media-feed",
    "seesmof",
    "ss-group-project",
    "standardista-machine-learning-workshop",
    "the-daily-chronice-news",
    "training-program-guide",
    "twitch-ai-chatbot",
];
var repos = [
    "age-calculator-app",
    "ai-greeting-generator",
    "ber-ai-generative-art-platform",
    "browser-games",
    "chuck-norris-quotes-generator",
    "cities-skylines-mods",
    "codewell-solutions",
    "free-code-camp-course",
    "freshcode-course",
    "frontend-mentor-solutions",
    "gcalendar-automation",
    "habitica-task-helper",
    "internet-is-hard-web-course",
    "javascript-algorithms-data-structures_free-code-camp",
    "klopotenko-clone",
    "leetcode-solutions",
    "my-hobby-site",
    "newsletter-sign-up-with-success-message-component",
    "nextjs-learning",
    "personal-reflective-journal",
    "portfolio",
    "productivity-flomodoro-app",
    "python-twitchio-chat-bot",
    "react-memory-cards-game",
    "react-todo-app",
    "regex-golf",
    "robo-social-media-feed",
    "seesmof",
    "shopping-cart-with-useReducer",
    "specter-ross-legal-company-landing",
];
function fetchRepositories() {
    return __awaiter(this, void 0, void 0, function () {
        var token, perPage, page, repositories, baseurl, response, pageRepositories, names;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = "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";
                    perPage = 100;
                    page = 1;
                    repositories = [];
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    baseurl = "https://api.github.com/user/repos?page=".concat(page, "&per_page=").concat(perPage);
                    return [4 /*yield*/, fetch(baseurl, {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                            },
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch repositories");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    pageRepositories = _a.sent();
                    repositories = repositories.concat(pageRepositories);
                    // Break the loop if the current page fetched less than the maximum per page
                    if (pageRepositories.length < perPage) {
                        return [3 /*break*/, 4];
                    }
                    page++;
                    return [3 /*break*/, 1];
                case 4:
                    names = repositories.map(function (repo) { return repo.name; });
                    return [2 /*return*/, names];
            }
        });
    });
}
fetchRepositories()
    .then(function (names) {
    console.log(names);
})
    .catch(function (error) {
    console.error(error);
});
