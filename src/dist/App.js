"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var TodoTask_1 = require("./Components/TodoTask");
var App = function () {
    var _a = react_1.useState(""), task = _a[0], setTask = _a[1];
    var _b = react_1.useState(0), deadline = _b[0], setDeadline = _b[1];
    var _c = react_1.useState([]), todoList = _c[0], setTodoList = _c[1];
    var handleChange = function (event) {
        if (event.target.name === 'task') {
            setTask(event.target.value);
        }
        else {
            setDeadline(Number(event.target.value));
        }
    };
    var addTask = function () {
        var newTask = {
            taskName: task, deadline: deadline
        };
        setTodoList(__spreadArrays(todoList, [newTask]));
        console.log(todoList);
        setTask("");
        setDeadline(0);
    };
    var completeTask = function (taskNameToDelete) {
        setTodoList(todoList.filter(function (task) {
            return task.taskName !== taskNameToDelete;
        }));
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: 'header' },
            react_1["default"].createElement("div", { className: 'inputContainer' },
                react_1["default"].createElement("input", { type: 'text', placeholder: 'Task..', value: task, name: 'task', onChange: handleChange }),
                react_1["default"].createElement("input", { type: 'number', placeholder: 'Deadline', value: deadline, name: 'deadline', onChange: handleChange })),
            react_1["default"].createElement("button", { onClick: addTask }, "Add task")),
        react_1["default"].createElement("div", { className: 'todoList' }, todoList.map(function (task, key) {
            return react_1["default"].createElement(TodoTask_1["default"], { key: key, task: task, completeTask: completeTask });
        }))));
};
exports["default"] = App;
