/*
    购物车Reducer
        * 指定修改规则
*/
import {
	CLEAR_CART,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATA_QTY
} from '../actions/cartAction'

// state默认值
const defaultState = {  //尽量使用const
	goodsList: [],  //留意用驼峰式
	step: 0
}

let reducer = function (state = defaultState, action) {
	let { type, payload } = action;
	switch (type) {
		// 删除购物车商品
		case REMOVE_FROM_CART:
			// action{type:'xx',palyload:{id}}
			return { ...state, goodsList: state.goodsList.filter(item => item.id != payload.id) }

		//添加商品到购物车
		case ADD_TO_CART:
			// action{type:'xx',palyload:{id,name,qty,price}}
			return {
				...state,
				goodsList: [...state.goodsList, payload]
			}

		//更新商品数量
		case UPDATA_QTY:
			// action{type:'xxx',payload:{id,qty}}
			return {
				...state,
				goodsList: state.goodsList.map(item => {
					if (item.id == payload.id) {
						item.qty = payload.qty
					}
					return item;
				})
			}
		//清空购物车
		case CLEAR_CART:
			// action{type:'xxx'}
			return {
				...state,
				goodsList: []
			}
		default:
			return state;
	}
}

export default reducer;