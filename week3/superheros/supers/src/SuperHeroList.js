import React from 'react'
import { default as data } from './data.json'
import SuperHero from './SuperHero.js'

function SuperHeroList() {
    const heroComponents = data.map(data => <SuperHero
        name={data.name}
        catchPhrase={data.catchPhrase}
        imageName={data.imageName}
        bgcolor={data.bgcolor}
        color={data.color}
        />)
        return (
            <div>
                {heroComponents}
            </div>
        )
}

export default SuperHeroList