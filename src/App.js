
import './App.css';
import IncrementDecrement from "./components/incrementDecrement/incrementDecrement";
import Comments from "./components/comments/comments";
import FullComment from "./components/fullComment/fullComment";
import {useState} from "react";

function App() {
    let [chosenComment, setChosenComment] = useState({});
    const lift = (obj)=>{
        setChosenComment({...obj})
    }

  return (
    <div className={'container'}>
{/*<IncrementDecrement/>*/}
        <div className={'leftSide'}>
      <Comments lift={lift}/>

        </div>

        {
            chosenComment &&
           ( <div className={'rightSide'}>
                <FullComment value={chosenComment}/>
            </div>)
        }
    </div>
  );
}

export default App;
