"use client"

import React, { useState } from 'react'

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)

    const increment = () => quantity < 20 && setQuantity(quantity + 1)
    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (

        <form className='bg-white p-10 mt-10 mx-auto w-1/2 text-black' >
            <label className='font-bold'>
                Quantity: {quantity}
            </label>

            <div className='mt-5'>
                <input
                    type="button"
                    value="-"
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="border bg-gray-800 text-white p-2 rounded-md w-1/2 disabled:bg-gray-500" />
                <input
                    type="button"
                    value="+"
                    onClick={increment}
                    disabled={quantity === 20}
                    className="border bg-gray-800 text-white p-2 rounded-md w-1/2 disabled:bg-gray-500" />
            </div>
        </form>
    )
}