import React, {
	Component
} from 'react';
import axios from 'axios';
import classNames from 'classnames';

// 引入返回头部
import Head from '../return-header/return-head'
// 引入CSS
import './play.css'


class Play extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			audioSrc: "",
			lyric: [],
			lyricTime: "", // 音乐播放进度时间
			duration: "", // 音乐播放时间
			lyricTitle: '',
			lyricSrc: '',
			lyricPlay: true,
			width: '', // 进度条进度变量
		};
	}
	render() {
		const lyricList = this.state.lyric.map((value, index) => {
			return <li key={index} className={ this.state.lyricTime > value[0] ? "lyricActive" : 'null' }>{value[1]}</li>
		});
		const classes = classNames({
			"Play_info_img_play": true,
			"Play_info_img_pause": this.state.lyricPlay,
		});
		return (
			<div className="Play">
				<Head title={ this.state.lyricTitle }></Head>
				<div className="Play_bg"></div>
				<div className="Play_info">
					<div className="Play_info_content">
						<div className={ classes }>
							<div className='Play_info_img_bg'></div>
							<div className="Play_info_img_logo">
								<img src={ this.state.lyricSrc } alt="" />
							</div>
						</div>
					</div>
					<div className="play_lyric">
						<h2 className="play_lyric_title">{ this.state.lyricTitle }</h2>
						<ul className="play_lyric_content">
							{ lyricList }
						</ul>
					</div>
					<audio id='audio' onTimeUpdate={ this.ontimeupdate.bind(this) }
					    src={ this.state.audioSrc }>
					</audio>
					<div className="progress">
						<span className='start'>{ this.matchTime(this.state.lyricTime) }</span>
						<div className="progress-bar" id="progress-bar">
							<div className="now" style={{width:this.state.width+'px'}}></div>
						</div>
						<span className="end">{ this.matchTime(this.state.duration) }</span>
					</div>
					<div className="music_info">
						<ul>
							<li className="music_left"></li>
							<li className={ this.state.lyricPlay == true ? 'music_end' : 'music_play'} onClick={ this.onplay.bind(this) }></li>
							<li className="music_right"></li>
						</ul>

					</div>
				</div>
      		</div>
		);
	}
	parseLyric(text) {
		let lines = text.split('\n'),
			pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
			//保存最终结果的数组   
			result = [];

		while (!pattern.test(lines[0])) {
			lines = lines.slice(1);
		};
		//上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉   
		lines[lines.length - 1].length === 0 && lines.pop();

		lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
			if (v.match(pattern)) {
				let time = v.match(pattern);
				let value = v.replace(pattern, '');
				time.forEach(function(v1, i1, a1) {
					//去掉时间里的中括号得到xx:xx.xx   
					var t = v1.slice(1, -1).split(':');
					//将结果压入最终数组   
					result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
				});
			}
		});
		//最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词   
		result.sort(function(a, b) {
			return a[0] - b[0];
		});
		console.log(result)
		this.setState({
			lyric: result
		})

		//let that = this;
		/*setInterval(function() {
			var myAudio = document.getElementById('audio');
			var curTime = myAudio.currentTime; //获取当前的播放时间
			console.log(curTime)
			for (var i = 0; i < result.length; i++) {
				if ((curTime > result[i][0]) && (curTime < result[i + 1][0])) {
					//播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
					that.setState({
						text: result[i][1]
					})
					break; //找到对应歌词就停，不停的话，呵呵。。。
				}
			}
		}, 1000);*/
	}
	onplay() {
		let myAudio = document.getElementById('audio');
		let progressFlag;
		if (this.state.lyricPlay) {
			myAudio.play();
			this.setState({
				lyricPlay: false
			})
		} else {
			myAudio.pause();
			this.setState({
				lyricPlay: true
			})
		}

	}
	ontimeupdate() {
		let myAudio = document.getElementById('audio');
		let progress = document.getElementById('progress-bar');
		let curTime = myAudio.currentTime; //获取当前的播放时间
		let duration = myAudio.duration;
		let percent = curTime / duration;
		let width = percent * (progress.offsetWidth) - 2;
		this.setState({
			lyricTime: curTime,
			width: width,
			duration: duration
		})
	}
	getDuration() {
		let that = this;
		setInterval(function() {
			let myaudio = document.getElementById("audio");
			let lenth = myaudio.duration;
			console.log(parseFloat(that.state.lyricTime / lenth) * 300);
		}, 1000);
	}
	componentDidMount() {
		``
		let id = this.props.match.params.id;
		let that = this;
		// 获取播放url
		axios.get('http://localhost:3001/music/url', {
				params: {
					id: id,
				}
			})
			.then(function(res) {
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
				that.parseLyric(res.data.lrc.lyric);
			})
			.catch(function(error) {
				console.log(error)
			});

		// 获取歌曲详情
		axios.get('http://localhost:3001/song/detail', {
				params: {
					ids: id,
				}
			})
			.then(function(res) {
				console.log(res.data.songs);
				that.setState({
					lyricTitle: res.data.songs[0].name,
					lyricSrc: res.data.songs[0].al.picUrl,
				})
			})
			.catch(function(error) {
				console.log(error)
			});

	}
	// 秒数转换为12:00格式
	matchTime(s) {
		//计算分钟
		//算法：将秒数除以60，然后下舍入，既得到分钟数
		var h;
		h = Math.floor(s / 60);
		//计算秒
		//算法：取得秒%60的余数，既得到秒数
		s = Math.floor(s % 60);
		//将变量转换为字符串
		h += '';
		s += '';
		//如果只有一位数，前面增加一个0
		h = (h.length == 1) ? '0' + h : h;
		s = (s.length == 1) ? '0' + s : s;
		return h + ':' + s;
	}
}

export default Play;