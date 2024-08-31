"use client"

import React, { useState } from 'react';

export default function NewItem() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = () => {

        alert(`Add Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`)

        setName('');
        setQuantity(1);
        setCategory('');
    }

    const increment = () => quantity < 20 && setQuantity(quantity + 1)
    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (

        <form onSubmit={handleSubmit}  >
            <div className="p-8 mx-auto w-1/2 text-black">

                <div className='bg-white p-10 flex flex-col gap-4' >
                    <div>
                        <label className='font-bold   pb-2  '>
                            Name:
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="w-full border bg-gray-800 text-white p-2 rounded-md"
                        />
                    </div>

                    <div>

                        <label className='font-bold pb-2'>
                            Quantity: {quantity}
                        </label>

                        <div>
                            <input
                                type="button"
                                value="-"
                                onClick={decrement}
                                className="border bg-gray-800 text-white p-2 rounded-md w-1/2" />
                            <input
                                type="button"
                                value="+"
                                onClick={increment}
                                className="border bg-gray-800 text-white p-2 rounded-md w-1/2" />
                        </div>
                    </div>
                    <div className='w-1/2 '>
                        <label className=' text-gray-600 font-bold  '>
                            Category:
                            <select
                                className="border bg-gray-800 text-white p-2 rounded-md"
                                value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Household">Household</option>

                            </select>
                        </label>
                    </div>
                </div>


                <button type="submit" className="bg-blue-700 p-2 rounded-md text-white font-bold cursor-pointer w-full mt-5">Add Item</button>

            </div>
        </form>

    )
}