const richterAlgorithm = (energy)=>{

    const megatonsToJoules = (megatons) => {
        const joules = megatons*(4.184*10**15)
        return joules
      }
    const richter = (megatons) => {
        const joules = megatonsToJoules(megatons)
        const M = 0.67*Math.log10(joules)-5.87
        return M
    }
    return richter(energy)
}

module.exports = richterAlgorithm;
