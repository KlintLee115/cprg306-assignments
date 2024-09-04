"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

    const [items, setItems] = useState(itemsData)
    const [selectedItemName, setSelectedItemName] = useState('')
    const { user } = useUserAuth()

    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }

    const handleItemSelect = itemName => {
        setSelectedItemName(itemName)
    }

    return (
        <main className='p-5'>
            {
                user === null ? <p>You need to sign in to view this page</p> : (
                    <>
                        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <NewItem onAddItem={handleAddItem} />
                                <ItemList items={items} onItemSelect={handleItemSelect} />
                            </div>
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </>
                )
            }

        </main>
    )
}