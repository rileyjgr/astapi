const api = (mass, diameter, v_imp)=>{
    const densityCalculator = (mass, diameter) => {
        const meterDiameter = diameter * 1000
        const volume = 4 * 3.14 * ((meterDiameter / 2) ** 3) / 3
        return mass / volume
    }

    const angleVariable = (2 ** (1 / 2) / 2) ** (1 / 3)
    const earthDensity = 2500
    const gravity = 9.8

    const transientCraterFunction = (meteorDensity, meteorDiameter, impactVelocity) => {
        const densityCalculation = (meteorDensity / earthDensity) ** (1 / 3)
        const diameterCalculation = (meteorDiameter * 1000) ** (.78)
        const velocityCalculation = (impactVelocity * 1000) ** (.44)
        const gravityCalculation = gravity ** (-.22)
        const crater = 1.161 * densityCalculation * diameterCalculation * velocityCalculation * gravityCalculation * angleVariable
        // crater is diameter in meters
        // We return the radius
        return .5 * crater
    }

    const finalCrater = (crater) => {
        return 1.25 * crater
    }
    const meteorDensity = densityCalculator(mass, diameter)
    const transientCrater = transientCraterFunction(meteorDensity, diameter, v_imp)
    return finalCrater(transientCrater);
}

module.exports = api;
