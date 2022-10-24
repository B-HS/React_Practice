import "./App.sass";
import { Headers } from "./Components/Header/Header";
import { Tehai } from "./Components/Tehai/Tehai";
import { Machiai } from "./Components/Machiaisitsu/Machiai";
import { useEffect, useState } from "react";
function App() {
    const [roomSelect, setRoomSelect] = useState(true);
    const [yama, setYama] = useState([]);
    const [players, setPlayers] = useState([""], [""], [""], [""]);
    const [ownHandOff, setOwnHandOff] = useState([]);

    /// 서버에서 배열 첫값을 받아와서 각 배열에 넣음, 자기 기준으로 동, 북, 서, 그리고 버림패를 채우는 로직을 만듬
    const [enemyHandOff, setEnemyHandOff] = useState([], [], [])

    const roomSelected = (stat) => {
        setRoomSelect(stat);
        InitYama();
    };


    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 나중에 백엔드로 옮겨야할 로직들/////////////////////////////////////↓↓↓↓↓↓↓↓↓
    // 플레이어 다 차면 들어온 순서대로 손패배열 만든거 보내고
    // 패산은 fetch한번마다 바로 긁기
    // 

    const setPai = (which, boo, pai)=>{
        let tmpAry = [...players[0]]
        if(boo){
            console.log("츠모기리신호 + which");
        } else{
            // let result = tmpAry.filter((ele)=>{return ele!=which})
            let result = tmpAry.splice(players[0].indexOf(which), 1)
            // result = tmpAry.filter((ele)=>{return ele!==""})
            tmpAry.push(pai)
            console.log(pai);
            setPlayers([tmpAry, players[1], players[2], players[3]])
            
        }

        
        //내 패는0번
        //적은 시계 반대방향으로 북동서(1, 2, 3)
    }

    const getOnePai = ()=>{
        let tmp = [...yama]
        let pai = tmp.pop()
        setYama(tmp)
        console.log(pai);
        //서버에서 패하나받아오기 async, (지금은 일단 배열복사해서 하나뽑고 다시 setYama)
        //통신해서 받아오려면 로직 다시짜야함 일단 임시로 놔둠
        return pai
    }
    const outFromHand = async (which, tsumogiri, added)=>{
        
        
        setPai(which)


        setOwnHandOff([...ownHandOff, which])
        //패가떠날때, async걸어서 버린결과 보내고 통신결과 (퐁, 치, 깡, none) 

        

        //버린 후 유저 상태 세팅 (후리텐, 리치)
        //나중에 서버랑 통신할떄 구현

    }
    
    //Fisher-Yates Shuffle
    const shuffle = (array) => {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const InitYama = () => {
        let tmpAry = [];
        for (let i = 1; i <= 4; i++) {
            for (let i = 1; i <= 9; i++) {
                tmpAry.push(i + "s");
                tmpAry.push(i + "m");
                tmpAry.push(i + "p");
            }
        }
        for (let i = 1; i <= 4; i++) {
            tmpAry.push("haku");
            tmpAry.push("chu");
            tmpAry.push("hatsu");
            tmpAry.push("to");
            tmpAry.push("za");
            tmpAry.push("na");
            tmpAry.push("bo");
        }
        shuffle(tmpAry)
        tmpAry = InitPlayers(tmpAry)
        setYama(tmpAry)
        
    };

    const InitPlayers = (tmpAry) => {
        let tmpyama = tmpAry
        let tmpPlayers = []
        let player = []
        for (let i = 1; i <= 52; i++) {
            player.push(tmpyama.pop())
            if(i%13===0){
                tmpPlayers.push(player)
                player=[]
                console.log(tmpPlayers);
            }
        }
        
        setPlayers(tmpPlayers)
        return tmpyama
    }

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑나중에 백엔드로 옮겨야할 로직들/////////////////////////////////////↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <div className="App">
            <Headers></Headers>
            {yama}<br/>{players[0]}<br/>{ownHandOff}
            {/* 0부분은 나중에 서버에서 받아옴 */}
            <Tehai roomSelect={roomSelect} onep={players[0]} outFromHand={outFromHand} getOnePai={getOnePai} setPai={()=>setPai}></Tehai>
            <Machiai init={roomSelected} yama={yama} players={players} roomSelect={roomSelect}></Machiai>
        </div>
    );
}

export default App;
