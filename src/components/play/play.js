import React, {
	Component
} from 'react';
import axios from 'axios';
import classNames from 'classnames';
import request from '../../utils/http'
import API from '../../utils/api'
// 引入返回头部
import Head from '../../common/return-header/return-head'
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
		this.camplay = this.camplay.bind(this);
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
		if (myAudio.ended) {
			myAudio.pause();
			this.setState({
				lyricPlay: true
			})
		}
		this.setState({
			lyricTime: curTime,
			width: width,
		})
	}
	camplay() {
		let myAudio = document.getElementById('audio');
		let duration = myAudio.duration;
		console.log(myAudio.ended)

		this.setState({
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
		let id = this.props.match.params.id;

		request.asyncGet(`http://localhost:3001${API.url}?id=${id}`).then(res => res.json()).then(resData => {
			console.log(resData)
			this.setState({
				audioSrc: resData.data[0].url
			})
		}).catch(err => {
			console.log('Error:' + err);
		})
		request.asyncGet(`http://localhost:3001${API.detail}?ids=${id}`).then(res => res.json()).then(resData => {
			console.log(resData)
			this.setState({
				lyricTitle: resData.songs[0].name,
				lyricSrc: resData.songs[0].al.picUrl,
			})
		}).catch(err => {
			console.log('Error:' + err);
		})



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
	render() {
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
					<audio id='audio' onCanPlay={ this.camplay } onTimeUpdate={ this.ontimeupdate.bind(this) }
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
}

export default Play;