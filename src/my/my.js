import React, {
    Component
} from 'react';

//=====组件=====

class My extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>新闻页面</h3>
                <ul>
                    {
                        this.props.list.map(function(item,i){
                            return <li key={item.id}>
                                <a>{item.title}</a>
                                <span>{item.con}</span>
                            </li>
                        })  
                    }
                </ul>
                <button onClick={this.SORTREVERSE.bind(this)}>倒叙显示</button>
            </div>
        );
    }

    SORTREVERSE() {
        this.props.SORTREVERSE();
    }

    componentDidMount() {
        console.log("My")
    }

}


export default My