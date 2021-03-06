const spells = [
    {
        name: "Searing Smite",
        castingTime: {
            duration: 1,
            type: "bonus action"
        },
        damage: {
            number: 1,
            size: "d6",
        },
        components: "V",
        duration: {
            concentration: true,
            time: 60,
        },
        description: "The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.\n\nAt the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends."
    }
]

export default spells;