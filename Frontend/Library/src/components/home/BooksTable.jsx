import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({books}) => {
  return (
    <table className='w-full border-collapse border border-gray-300'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2'>No</th>
                            <th className='border border-gray-300 px-4 py-2'>Title</th>
                            <th className='border border-gray-300 px-4 py-2 hidden md:table-cell'>Author</th>
                            <th className='border border-gray-300 px-4 py-2 hidden md:table-cell'>Publish Year</th>
                            <th className='border border-gray-300 px-4 py-2'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className='border border-gray-300 px-4 py-2 text-center'>{index + 1}</td>
                                <td className='border border-gray-300 px-4 py-2'>{book.title}</td>
                                <td className='border border-gray-300 px-4 py-2 hidden md:table-cell'>{book.author}</td>
                                <td className='border border-gray-300 px-4 py-2 hidden md:table-cell'>{book.publishYear}</td>
                                <td className='border border-gray-300 px-4 py-2 flex justify-center gap-x-4'>
                                    <Link to={`/books/details/${book._id}`} className='text-green-800'>
                                        <BsInfoCircle className='text-2xl' />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} className='text-green-800'>
                                        <AiOutlineEdit className='text-2xl' />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} className='text-red-600'>
                                        <MdOutlineDelete className='text-2xl' />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
  )
}

export default BooksTable