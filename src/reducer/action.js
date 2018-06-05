export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//导出加一的方法
export function increment() {
	return {
		type: INCREMENT_COUNTER
	}
}