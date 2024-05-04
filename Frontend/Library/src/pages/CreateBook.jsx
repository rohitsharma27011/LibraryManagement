import React from 'react'
import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSavebook = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        setLoading(true);
        axios.post(`http://localhost:4000/books/createBook`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console')
                console.log(error)
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4 '>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-96 p-4'>
                <div className='my-4'>
                    <label className='text-xl mr-20 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-80'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-14 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-80'
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-3 text-gray-500'>Publish Year</label>
                    <input
                        type='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-80'
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <button className='p-2 bg-sky-300 w-32 rounded-md' onClick={handleSavebook}>Save</button>
                </div>


            </div>

        </div>
    )
}

export default CreateBook