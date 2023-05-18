import React, { useEffect, useState } from 'react'
import { Title } from '../components/Title';
import { Button, ListGroup, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addManyGamesAction, removeGameAction } from '../store/gameReducer';

const DiscoverGames = () => {
const title = "Главная страница";

const dispatch = useDispatch();
const games = useSelector(state => state.games.games);

//Функция загрузки данных с сервера
const fetchGames = async () => {
    const $host = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })   
    const {data} = await $host.get('api/v1/games')
    console.log(data.content)
    dispatch(addManyGamesAction(data.content))
}

//удаление игры с состояния
const removeGame = (slug) => {
    dispatch(removeGameAction(slug))
}

//загрузка данных с сервера
useEffect(() => {
    fetchGames()
}, [])

  return (
    <div>
        <Title title={title}/>
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Game</th>
                <th>Author</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                    {games.map((game, index) =>
                        <tr key={game.slug}>
                            <td>{index + 1}</td>
                            <td>{game.title}</td>
                            <td>{game.author}</td>
                            <td>{game.description}</td>
                            <Button onClick={() => removeGame(game.slug)}> Удалить </Button>
                        </tr>
                    )}
            </tbody>
            </Table>
     
    </div>
    
    
  )
}

export default DiscoverGames