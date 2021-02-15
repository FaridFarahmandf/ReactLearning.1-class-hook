import React , {useState , useEffect} from 'react'


export default function Todos() {
    const [firstName , setFirstName] = useState('Farid')
    const [lastName , setLastName] = useState('Farahmand')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => console.log(json))
        console.log('useEffect occured once')

        return () => {
           console.log('unmount once')
        }

    }, [])

    useEffect(() => {
        console.log('useEffect occured every time')
        return () => {
        console.log('unmount every time')
        }
    })
    useEffect(() => {
        console.log('useEffect occured when change the first name')
        return () => {
            console.log('unmount firstName')
        }
    },[firstName])
    useEffect(() => {
        console.log('useEffect occured when change the last name')
        return () => {
            console.log('unmount last name')
        }
    },[lastName])
    const firstNameHandler = () => {
        setFirstName('Rouzbeh')
    }
    const lastNameHandler = () => {
        setLastName('Latifi')
    }
    return (
        <div>
            <h3>Todos comes here</h3>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <button id='btn-fn' onClick= {firstNameHandler}>change  firstname</button>
            <button id='btn-fn' onClick= {lastNameHandler}>change  lastname</button>
        </div>
    )
}
