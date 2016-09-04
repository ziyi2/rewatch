webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(20);

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _AddList = __webpack_require__(21);

	var _AddList2 = _interopRequireDefault(_AddList);

	var _ShowDelList = __webpack_require__(22);

	var _ShowDelList2 = _interopRequireDefault(_ShowDelList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TodoList = function (_React$Component) {
	    _inherits(TodoList, _React$Component);

	    function TodoList() {
	        _classCallCheck(this, TodoList);

	        //ES6
	        //this.state = {
	        //    lists : ['1','2']      //需要显示的所有列表,每次变动需要重新渲染
	        //}
	        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this));

	        _this.state = {
	            lists: [], //需要显示的所有列表,每次变动需要重新渲染
	            list: '' //表单数据,可控表单,每次input输入变化时重新渲染
	        };
	        return _this;
	    }

	    //ES7


	    _createClass(TodoList, [{
	        key: 'setInputValue',
	        //这里需要加分号

	        value: function setInputValue(list) {
	            this.setState({
	                list: list
	            });
	        }
	    }, {
	        key: 'setLists',
	        value: function setLists(lists) {
	            this.setState({
	                lists: lists
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var addListProps = {
	                list: this.state.list,
	                lists: this.state.lists,
	                setInputValue: this.setInputValue.bind(this),
	                addList: this.setLists.bind(this)
	            };

	            var showDelListProps = {
	                lists: this.state.lists,
	                delList: this.setLists.bind(this)
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'TodoList'
	                ),
	                _react2.default.createElement(_AddList2.default, addListProps),
	                _react2.default.createElement(_ShowDelList2.default, showDelListProps)
	            );
	        }
	    }]);

	    return TodoList;
	}(_react2.default.Component);

	var to_do_list = document.getElementById('list-to-do');
	_reactDom2.default.render(_react2.default.createElement(TodoList, null), to_do_list);

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddList = function (_React$Component) {
	    _inherits(AddList, _React$Component);

	    function AddList() {
	        _classCallCheck(this, AddList);

	        return _possibleConstructorReturn(this, (AddList.__proto__ || Object.getPrototypeOf(AddList)).call(this));
	    }

	    _createClass(AddList, [{
	        key: "inputChange",
	        value: function inputChange(event) {
	            var list = event.target.value.trim().substr(0, 10); //input的value去掉空格,限制大小在10
	            this.props.setInputValue(list);
	        }
	    }, {
	        key: "addList",
	        value: function addList(event) {
	            var list = this.refs.addInput.value;
	            if (list) {
	                this.props.lists.push(list);
	                this.props.addList(this.props.lists);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "row" },
	                _react2.default.createElement(
	                    "h4",
	                    null,
	                    "Compont - AddList"
	                ),
	                _react2.default.createElement(
	                    "form",
	                    { action: "", className: "form-inline" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "form-group" },
	                        _react2.default.createElement("input", { type: "text", className: "form-control", ref: "addInput", placeholder: "请添加项", value: this.props.list, onChange: this.inputChange.bind(this), autoComplete: "off" }),
	                        _react2.default.createElement(
	                            "button",
	                            { type: "button", className: "btn btn-default", key: "button", onClick: this.addList.bind(this) },
	                            "添加"
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return AddList;
	}(_react2.default.Component);

	exports.default = AddList;

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShowDelList = function (_React$Component) {
	    _inherits(ShowDelList, _React$Component);

	    function ShowDelList() {
	        _classCallCheck(this, ShowDelList);

	        return _possibleConstructorReturn(this, (ShowDelList.__proto__ || Object.getPrototypeOf(ShowDelList)).call(this));
	    }

	    _createClass(ShowDelList, [{
	        key: 'delList',
	        value: function delList(event) {
	            var index = event.target.getAttribute('data-index');
	            this.props.lists.splice(index, 1);{/*splice方法改变原数组*/}
	            this.props.delList(this.props.lists);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var _this = this; //打包时时刻要注意this的指向问题

	            return _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                    'h4',
	                    null,
	                    'Compont - ShowDelList'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'list-group' },
	                    _this.props.lists.map(function (list, index, lists) {
	                        return _react2.default.createElement(
	                            'li',
	                            { className: 'list-group-item', key: index },
	                            list,
	                            _react2.default.createElement(
	                                'button',
	                                { className: 'btn btn-default', 'data-index': index, key: 'button' + index, onClick: _this.delList.bind(_this) },
	                                '删除'
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return ShowDelList;
	}(_react2.default.Component);

	exports.default = ShowDelList;

/***/ }

});