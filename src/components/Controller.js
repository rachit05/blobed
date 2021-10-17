import React, { Component } from 'react';

export default class Controller extends Component {
    constructor(props) {
        super(props);
        let [a,b,c,d,e,f,g,h] = props.data;
        this.state = {a,b,c,d,e,f,g,h};
    }

    handleChange({target}){
        let {id,value} = target;
        if(id === "xTop"){
            this.setState({
                a: value,
                b: 100-value,
            })
        }else if(id === "xBottom"){
            this.setState({
                c: value,
                d: 100-value,
            })
        }else if(id === "yLeft"){
            this.setState({
                e: value,
                h: 100-value,
            })
        }else{
            this.setState({
                f: value,
                g: 100-value,
            })
        }
        
        let {a,b,c,d,e,f,g,h} = this.state;
        this.props.callback([a,b,c,d,e,f,g,h]);
    }

    render() {
        let {a,c,e,f} = this.state;
        return (
            <>
                <footer>
                    <div className="controllerWrapper">
                        <input id="xTop" type="range" onChange={(e) => this.handleChange(e)} value={a} />
                        <label style={{justifySelf:"center"}} htmlFor="xTop">x-top</label>
                    </div>
                    <div className="controllerWrapper">
                        <input id="xBottom" type="range" onChange={(e) => this.handleChange(e)} value={c} />
                        <label style={{justifySelf:"center"}} htmlFor="xBottom">x-bottom</label>
                    </div>
                    <div className="controllerWrapper">
                        <input id="yLeft" type="range" onChange={(e) => this.handleChange(e)} value={e}/>
                        <label style={{justifySelf:"center"}} htmlFor="yLeft">y-left</label>
                    </div>
                    <div className="controllerWrapper">
                        <input id="yRight" type="range" onChange={(e) => this.handleChange(e)} value={f}/>
                        <label style={{justifySelf:"center"}} htmlFor="yRight">y-right</label>
                    </div>

                </footer>
                
            </>
        )
    }
}
