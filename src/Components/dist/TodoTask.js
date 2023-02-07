"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoTask = function (_a) {
    var task = _a.task, completeTask = _a.completeTask;
    return react_1["default"].createElement("div", { className: 'task' },
        react_1["default"].createElement("div", { className: 'content' },
            react_1["default"].createElement("span", null, task.taskName),
            react_1["default"].createElement("span", null, task.deadline)),
        react_1["default"].createElement("button", { onClick: function () { completeTask(task.taskName); } }, "x"));
};
exports["default"] = TodoTask;
