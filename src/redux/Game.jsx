import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Game = () => {
    const { game, player } = useSelector(store => store.gameStore)
    const dispatch = useDispatch()

    // let [gamename, setGame] = useState('')
    let game_ref = useRef()
    let player_ref = useRef()

    return (
        <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>

            <h1>Game: {game}</h1>
            <div className='d-flex w-50'>
                <input type="text" placeholder='game' className='form-control w-75'
                onChange={(e)=>{return game_ref.current = e.target.value}} />
                <button className='btn btn-warning w-25'
onClick={()=>{
    return dispatch({type: "UPDATE_GAME", payload: game_ref.current})
}}
                >Update Game</button>
            </div>

            <h1>Player: {player}</h1>
            <div className='d-flex w-50'>
                <input type="text" placeholder='player' className='form-control w-75' onChange={e=> player_ref.current = e.target.value} />
                <button className='btn btn-warning w-25'
                onClick={()=>dispatch({type:"UPDATE_PLAYER", player: player_ref.current})}>Update Player</button>
            </div>
        </div>
    )
}

export default Game