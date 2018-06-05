var newsinit = {
	list: [{
		id: 1,
		title: "a",
		con: "caaaaaaaaaaaaaaaa"
	}, {
		id: 2,
		title: "b",
		con: "cbbbbbbbbbbb"
	}, {
		id: 3,
		title: "c",
		con: "cccccccccccccc"
	}, {
		id: 4,
		title: "d",
		con: "cddddddddddddd"
	}, {
		id: 5,
		title: "e",
		con: "ceeeeeeeeeeee"
	}]
};

function myRedux(state = newsinit, action) {
	switch (action.type) {
		case "SORT_REVERSE":
			//倒叙显示
			var arr = state.list;
			var arr2 = [];
			for (var i = arr.length - 1; i >= 0; i--) {
				arr2.push(arr[i])
			}
			return Object.assign({}, state, {
				list: arr2
			})
		default:
			return state
	}
}


export default myRedux