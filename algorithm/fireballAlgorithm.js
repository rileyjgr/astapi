const fireballAlgorithm = (megatons)=>{
     const megatonsToJoules = (megatons) => {
                const joules = megatons*(4.184*10**15)
                return joules
              }
              
              const fireball = (megatons) => {
                const joules = megatonsToJoules(megatons)
                const fireballRadius = .002*(joules**(1/3))
                return fireballRadius
              }

              const fireballRadius = fireball(res.energy)
              return fireballRadius
            }
            
module.exports = fireballAlgorithm;