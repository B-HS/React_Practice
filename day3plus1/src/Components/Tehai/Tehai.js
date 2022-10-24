import { useState } from "react"
import "./Tehai.sass"

export const Tehai = (props)=>{
    const [gotPai, setGotPai] = useState("")

    const handoff = (ele, tsumogiri, pai)=>{
        console.log(pai);
        props.outFromHand(ele)
        //버리고 통신대기, 0>> 낼수있는상태 1, 2>>낼수없는상태(1 ==  상대턴, 2, 리치) 나중에 만들면 로직 다시짜기, 
        //!=0 에서 ==0으로 들어오면 패 받는 로직 만들어줌 1초마다 상태를 긁어도되나 웹소켓 생각하기
        
        
        //ツモ切りの場合は何もせずターンオーバー
        //逆の場合はSETPAIでPlayers[0]に新たな牌をセットしてターン終了
        if(!tsumogiri){
            setGotPai(props.getOnePai())
            props.setPai(ele, gotPai, pai)
        }else{
            setGotPai(props.getOnePai())
        }

    }
    
    return(
        <div className="Tehai">
            {/* 나중에 패를 자르기위해서 아래 반복문도 컴포넌트로 분리 필요 */}
            {props.onep&&props.onep.map((ele, i)=>{return (<div key={i} onClick={()=>handoff(ele, false, gotPai)} className="Tehai-pai"><span >{ele}</span></div>)})}
            <div className="Tehai-pai" onClick={()=>handoff(gotPai, true)}><span >{gotPai}</span></div>
        </div>
    )
}