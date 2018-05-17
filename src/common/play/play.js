import React, {
	Component
} from 'react';
import axios from 'axios';

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
			lyricTime: "",
			lyricTitle: '',
			lyricSrc: '',
		};
	}
	render() {
		const lyricList = this.state.lyric.map((value, index) => {
			return <li key={index} className={ this.state.lyricTime > value[0] ? "lyricActive" : 'null' }>{value[1]}</li>
		})
		return (
			<div className="Play">
				<Head title={ this.state.lyricTitle }></Head>
				<div className="Play_info">
					<div className="Play_info_content">
						<div className="Play_info_img">
							<div className='Play_info_img_bg'></div>
							<div className="Play_info_img_logo">
								<img src={ this.state.lyricSrc } alt="" />
							</div>
						</div>
					</div>
					<div className="play_lyric">
						<h2 className="play_lyric_title">111</h2>
						<ul className="play_lyric_content">
							{ lyricList }
						</ul>
					</div>
					<audio id='audio' onTimeUpdate={ this.ontimeupdate.bind(this) }
					    src={ this.state.audioSrc } 
					    controls>
					</audio>
				</div>
      		</div>
		);
	}
	parseLyric(text) {
		let lines = text.split('\n'),
			pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
			//保存最终结果的数组   
			result = [];
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
	ontimeupdate() {
		let myAudio = document.getElementById('audio');
		let curTime = myAudio.currentTime; //获取当前的播放时间
		this.setState({
			lyricTime: curTime
		})
	}
	componentDidMount() {
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
}

export default Play;