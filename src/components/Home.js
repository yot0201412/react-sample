
import React, {useState} from 'react';

// function renderChange(){
//     // viewFlgの状態を切替(0 <-> 1)
//     let newFlg = this.state.viewFlg === 1 ? 0 : 1;
//     setState({viewFlg : newFlg });
// }

const Home = () => {
    const [text, setCount] = useState(0)
    return (
        <div>
            <h1>Hello! World.</h1>
            <p>このページは{text}です。</p>
            <button onClick={() => setCount(
                text => text + 1
                // console.log(text)
            )}
            >切替</button>
        </div>   
    )
}


export default Home;
