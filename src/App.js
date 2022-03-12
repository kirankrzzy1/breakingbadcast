import React,{useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios'
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] =useState('');
  useEffect(()=>{
  //   fetch('https://www.breakingbadapi.com/api/characters')
  // .then(res => res.json())
  // .then((dat)=>console.log(dat))

  const fetchItems = async()=>{
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(result.data)
    setIsLoading(false)
  }
  fetchItems();

  },[query])

  const getQuery = (value)=>{
    setQuery(value)
  }

  return (

    <div className='container'>
        <Header />
        <Search getQuery={getQuery} />
        <CharacterGrid isLoading={isLoading} items={items}  />
    </div>
  )
}

export default App