export default function Blob(props){
    let {width,height,fbg,tbg,bti} = props;
    let [a,b,c,d,e,f,g,h] = bti;
    let style = {
        "width" : width + 'px',
        "height" : height + 'px',
        "background" : `linear-gradient(-45deg, ${fbg},${tbg})`,
        "borderRadius":`${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${h}%`,
    }

    return(
        <div id="blob" style={style}></div>
    )
}
