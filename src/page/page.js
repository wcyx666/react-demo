import React, {
	Component
} from 'react';
import axios from 'axios';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			audioSrc: "",
			results: ''
		};
	}
	render() {
		return (
			<div className="page">
				<div>
					<h2>{ this.state.results }</h2>
					<audio id='audio'
					    src={ this.state.audioSrc } 
					    autoplay controls>
					</audio>
				</div>
      		</div>
		);
	}

	getLrc(lrc) {
		var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g; //匹配时间的正则表达式
		var result = [];
		for (var i = 0; i < lrc.length; i++) {
			var time = lrc[i].match(timeReg); //获取歌词里的时间
			var value = lrc[i].replace(timeReg, ""); //获取纯歌词文本
			for (var j = 0; j < time.length; j++) {
				var t = time[j].slice(1, -1).split(":"); //t[0]分钟，t[1]秒
				var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
				result.push([timeArr, value]); //以[时间(秒)，歌词]的形式存进result

			}
		}
		setInterval(function() {
			var myAudio = document.getElementById('audio');
			var curTime = myAudio.currentTime; //获取当前的播放时间
			console.log(curTime)
		}, 1000);
	}
	/*	showLrc() {
			var myAudio = document.getElementById('audio');
			var curTime = 9.7; //获取当前的播放时间
			console.log(this.state.result.length)
			for (var i = 0; i <
				this.state.result.length; i++) {
				if ((curTime > this.state.result[i][0]) && (curTime < this.state.result[i + 1][0])) {
					//播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
					console.log(this.state.result[i][1]);
					break; //找到对应歌词就停，不停的话，呵呵。。。
				}
			}
		}*/
	componentDidMount() {
		let id = this.props.match.params.id;
		let that = this;
		/*setInterval(function() {
			var myAudio = document.getElementById('audio');
			var curTime = myAudio.currentTime; //获取当前的播放时间
			console.log(curTime)
		}, 1000);*/
		// 获取播放url
		axios.get('http://localhost:3001/music/url', {
				params: {
					id: id,
				}
			})
			.then(function(res) {
				console.log(res.data.data[0].url)
				that.setState({
					audioSrc: res.data.data[0].url
				})

			})
			.catch(function(error) {
				console.log(error)
			});
		// 获取歌词
		axios.get('http://localhost:3001/lyric', {
				params: {
					id: id,
				}
			})
			.then(function(res) {
				that.getLrc(res.data.lrc.lyric.split('\n'))
				that.setState({
					results: res.data.lrc.lyric
				})

			})
			.catch(function(error) {
				console.log(error)
			});

	}
}

export default Page;