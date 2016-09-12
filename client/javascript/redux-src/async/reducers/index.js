import { combineReducers } from 'redux';
import counter from './counter';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter
});

export default rootReducer;



//通过为传入对象的 reducer 命名不同来控制 state key 的命名。
//例如，你可以调用 combineReducers({ todos: myTodosReducer, counter: myCounterReducer })
//将 state 结构变为 { todos, counter }

//通常的做法是命名 reducer，
//然后 state 再去分割那些信息，
//因此你可以使用 ES6 的简写方法：combineReducers({ counter, todos })。
//这与 combineReducers({ counter: counter, todos: todos }) 一样。


//本函数可以帮助你组织多个 reducer，
//使它们分别管理自身相关联的 state。
//类似于 Flux 中的多个 store 分别管理不同的 state。
//在 Redux 中，只有一个 store，但是 combineReducers 让你拥有多个 reducer，
//同时保持各自负责逻辑块的独立性。

/*

本函数设计的时候有点偏主观，就是为了避免新手犯一些常见错误。也因些我们故意设定一些规则，但如果你自己手动编写根 redcuer 时并不需要遵守这些规则。

每个传入 combineReducers 的 reducer 都需满足以下规则：

所有未匹配到的 action，必须把它接收到的第一个参数也就是那个 state 原封不动返回。

永远不能返回 undefined。当过早 return 时非常容易犯这个错误，为了避免错误扩散，遇到这种情况时 combineReducers 会抛异常。

如果传入的 state 就是 undefined，一定要返回对应 reducer 的初始 state。根据上一条规则，初始 state 禁止使用 undefined。使用 ES6 的默认参数值语法来设置初始 state 很容易，但你也可以手动检查第一个参数是否为 undefined。

虽然 combineReducers 自动帮你检查 reducer 是否符合以上规则，但你也应该牢记，并尽量遵守。

*/