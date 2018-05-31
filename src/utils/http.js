// 针对axios二次封装

import axios from 'axios'
import qs from 'qs'


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	return response;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

function checkStatus(response) {
	// loading
	// 如果http状态码正常，则直接返回数据
	if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
		return response
		// 如果不需要除了data之外的数据，可以直接 return response.data
	}
	// 异常状态下，把错误信息返回去
	return {
		status: -404,
		msg: '网络异常'
	}
}

function checkCode(res) {
	// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
	if (res.status === -404) {
		alert(res.msg)
	}
	if (res.data && (!res.data.success)) {
		alert(res.data.error_msg)
	}
	return res
}

export default {
	post(url, data) {
		return axios({
			method: 'post',
			baseURL: 'http://localhost:3001',
			url,
			data: qs.stringify(data),
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(
			(response) => {
				return checkStatus(response)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	},
	get(url, params) {
		return axios({
			method: 'get',
			baseURL: 'http://localhost:3001',
			url,
			params, // get 请求时带的参数
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}).then(
			(response) => {
				return checkStatus(response)
			}
		).then(
			(res) => {
				return checkCode(res)
			}
		)
	}
}