// 定义函数的调用签名
// interface IFnCall {
//   (name: string, age: number): string
// }

// interface IFnCall {
//   (fn: () => string, age: number): string
// }

// 泛型
interface IFnCall {
  <THF>(fn: () => THF, age: number): THF
}

// 定义函数对象
const foo: IFnCall = function (fn, age) {
  return fn()
}

// // 调用函数
// foo('why', 18)
// foo(() => {
//   return 'aaa'
// }, 18)
// foo<number>(() => {
//   return 123
// }, 18)

// 不传入明确的调用时的泛型, 类型推断
const res = foo(() => {
  return 'aaa'
}, 18)
