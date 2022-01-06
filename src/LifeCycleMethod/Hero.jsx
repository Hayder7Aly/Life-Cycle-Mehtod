import React from 'react'

const Hero = ({heroName}) => {
    if(heroName === "joker"){
        throw new Error('Joker is not a hero it is a lengend')
    }
    return (
        <>
            <h1>{heroName}</h1>
        </>
    )
}

export default Hero
