import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象 这样就可以执行异步了
//
//
//
//
//中间件似乎可以帮助我们处理异步 action
//
//
//// 通常来说中间件是在某个应用中 A 和 B 部分中间的那一块，
// 中间件可以把 A 发送数据到 B 的形式从
// A -----> B
// 变成:
// A ---> middleware 1 ---> middleware 2 ---> middleware 3 --> ... ---> B
// 
// 
// 
// // 那么中间件在 Redux 中是如何工作的？
// 看上去 Redux 并不能自动处理 action creator 中返回的异步函数。
// 但如果在 action creator 和 reducer 之间增加一个中间件，就可以把这个函数转成
// 适合 Redux 处理的内容：

// action ---> dispatcher ---> middleware 1 ---> middleware 2 ---> reducers
//
/// 每当一个 action（或者其他诸如异步 action creator 中的某个函数）被分发时，
// 我们的中间件就会被调用
// 并且在需要的时候协助 action creator 分发真正的 action（或者什么都不做，
// 有时我们需要这么做）

// 在 Redux 中，中间件是纯粹的函数，
// 有明确的使用方法并且严格的遵循以下格式：
/*
    var anyMiddleware = function ({ dispatch, getState }) {
        return function(next) {
            return function (action) {
                // 你的中间件业务相关代码
            }
        }
    }
*/

// 如上所述，中间件由三个嵌套的函数构成（会依次调用）：
// 1) 第一层向其余两层提供分发函数和 getState 函数
//    （因为你的中间件或 action creator 可能需要从 state 中读取数据）
// 2) 第二层提供 next 函数，它允许你显式的将处理过的输入传递给下一个中间件或 Redux
//    （这样 Redux 才能调用所有 reducer)。
// 3) 第三层提供从上一个中间件或从 dispatch 传递来的 action，
//     这个 action 可以调用下一个中间件（让 action 继续流动) 或者
//     以想要的方式处理 action。

// 学习过函数式编程的人可能会意识到给上述代码提供了一个机会来使用
// 柯里化（如果你不理解也没关系，跳过接下去的 10 行，不会影响你对 redux 的理解）。
// 使用柯里化，你可以简化上述函数：
/*
    // "curry" may come any functional programming library (lodash, ramda, etc.)
    var thunkMiddleware = curry(
        ({dispatch, getState}, next, action) => (
            // 你的中间件业务相关代码
        )
    );
*/

// 我们为异步 action creator 提供的中间件叫 thunk middleware
// 它的代码在：https://github.com/gaearon/redux-thunk.
// 它看上去是这样 (为了可读性使用 ES5 语法书写该函数）:

// var thunkMiddleware = function ({ dispatch, getState }) {
//     // console.log('Enter thunkMiddleware');
//     return function(next) {
//         // console.log('Function "next" provided:', next);
//         return function (action) {
//             // console.log('Handling action:', action);
//             return typeof action === 'function' ?
//                 action(dispatch, getState) :
//                 next(action)
//         }
//     }
// }

// 为了让 Redux 知道我们有一个或多个中间件，我们使用 Redux 的
// 辅助函数：applyMiddleware.
// 
// 
// 

// applyMiddleware 接收所有中间件作为参数，返回一个供 Redux createStore 调用的函数。
// 当最后这个函数被调用时，它会产生一个 Store 增强器，用来将所有中间件应用到 Store 的 dispatch 上。
// (来自 https://github.com/rackt/redux/blob/v1.0.0-rc/src/utils/applyMiddleware.js)

// 下面就是如何将一个中间件应用到 Redux store：

// import { createStore, combineReducers, applyMiddleware } from 'redux'

// const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)
// 针对多个中间件， 使用：applyMiddleware(middleware1, middleware2, ...)(createStore)

// const store_0 = finalCreateStore(reducer)
//applyMiddleware来自redux可以包装 store 的 dispatch()

//thunk作用使action创建函数可以返回一个function代替一个action对象



/**
 * 让你可以发起一个函数来替代 action。
 * 这个函数接收 `dispatch` 和 `getState` 作为参数。
 *
 * 对于（根据 `getState()` 的情况）提前退出，或者异步控制流（ `dispatch()` 一些其他东西）来说，这非常有用。
 *
 * `dispatch` 会返回被发起函数的返回值。
 */



//compose
//从右到左来组合多个函数。

//这是函数式编程中的方法，为了方便，被放到了 Redux 里。
//当需要把多个 store 增强器 依次执行的时候，需要用到它。

//参数(arguments): 需要合成的多个函数。每个函数都接收一个函数作为参数，然后返回一个函数。
//返回值
//(Function): 从右到左把接收到的函数合成后的最终函数。

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,
        loggerMiddleware
    )
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}




//使用 createStore 创建的 “纯正” store 只支持普通对象类型的 action，
// 而且会立即传到 reducer 来执行。

//但是，如果你用 applyMiddleware 来套住 createStore 时，
// middleware 可以修改 action 的执行，并支持执行 dispatch intent（意图）。
// Intent 一般是异步操作如 Promise、Observable 或者 Thunk。

//Middleware 是由社区创建，
// 并不会同 Redux 一起发行。
// 你需要手动安装 redux-thunk 或者 redux-promise 库。
// 你也可以创建自己的 middleware。



//...middlewares (arguments): 遵循 Redux middleware API 的函数。
// 每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数，并返回一个函数。
// 该函数会被传入 被称为 next 的下一个 middleware 的 dispatch 方法，并返回一个接收 action 的新函数，这个函数可以直接调用 next(action)，或者在其他需要的时刻调用，甚至根本不去调用它。
// 调用链中最后一个 middleware 会接受真实的 store 的 dispatch 方法作为 next 参数，并借此结束调用链。所以，middleware 的函数签名是 ({ getState, dispatch }) => next => action。
