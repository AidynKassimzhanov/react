import React, { useEffect, useState } from 'react'
import { Title } from '../components/Title';
import { Button, ListGroup, Row, Table } from 'react-bootstrap';
import axios from 'axios';

const DiscoverGames = () => {
const title = "Главная страница";

const [games, setGames] = useState([])


const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})    

const fetchGames = async () => {
    const {data} = await $host.get('api/v1/games')
    return data
}

useEffect(() => {
    fetchGames().then(data => setGames(data.content))
})

const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

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
                            <Button> Удалить </Button>
                        </tr>
                    )}
            </tbody>
            </Table>
     
    </div>
    
    
  )
}

export default DiscoverGames