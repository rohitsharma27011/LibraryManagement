import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const ShowBooks = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:4000/books/getBookById/${id}`);
                setBook(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4 ml-0 text-left'>Show Book</h1>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-80 p-4'>
                        <div className='my-4 flex items-center'>
                            <span className='text-xl font-semibold text-gray-500 w-24'>Id:</span>
                            <span>{book._id}</span>
                        </div>
                        <div className='my-4 flex items-center'>
                            <span className='text-xl font-semibold text-gray-500 w-24'>Title:</span>
                            <span>{book.title}</span>
                        </div>
                        <div className='my-4 flex items-center'>
                            <span className='text-xl font-semibold text-gray-500 w-24'>Author:</span>
                            <span>{book.author}</span>
                        </div>
                        <div className='my-4 flex items-center'>
                            <span className='text-xl font-semibold text-gray-500 w-24'>Publish Year:</span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div className='my-4 flex items-center'>
                            <span className='text-xl font-semibold text-gray-500 w-24'>Create Time:</span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default ShowBooks