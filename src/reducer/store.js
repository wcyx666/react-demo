import {
	combineReducers
} from 'redux'
import reducer from './reducers'

//import myRedux from '../my/myRedux'


//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
	reducer,
	//myRedux
})
export default rootReducer