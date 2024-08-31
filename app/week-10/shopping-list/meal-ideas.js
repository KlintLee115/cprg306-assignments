import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {

    const result = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
    const data = await response.json()
    return data.meals || []
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        setMeals(await fetchMealIdeas(ingredient))
    }

    useEffect(() => {
        ingredient && ingredient.length > 0 && loadMealIdeas()
    }, [ingredient])

    const NoMeal = () => ingredient === "" ? <p>Please pick an ingredient to see the meal ideas</p> : <p>No meal ideas found for {ingredient}</p>

    return meals.length > 0 ? (
        <div>
            <header><h2 className='font-bold text-2xl'>Here are some ideas using {ingredient}</h2></header>
            <ul className='mt-5'>
                {meals.map(meal => (
                    <li key={meal.strMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    ) : <NoMeal />
}