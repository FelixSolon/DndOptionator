import React from 'react';

const Spell = (props) => {
    return (
        <div>
            <h2>{props.spell.name}</h2>
            <h3>{props.spell.castingTime.duration} {props.spell.castingTime.type}</h3>
            {props.spell.description}
        </div>
    );
};

export default Spell;