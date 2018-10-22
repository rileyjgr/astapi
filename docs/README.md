## Asteriod Data Api, and middleware 
To use our middle ware for creating blastradius, fireball, or richterscale.
```
const api = require('../algorithm/algorithm'); // blast radius
const fireballAlgorithm = require('../algorithm/fireballAlgorithm');
const richterAlgorithm = require('../algorithm/richterAlgorithm');
```
Please note. This might change when this becomes an nmp package. 

```
// inside async function
        const blastRadius = await api(mass, diameter, v_imp);
        const fireball = await fireballAlgorithm(energy);
        const richterScale = await richterAlgorithm(energy);
```

Where `mass`= Your objects mass,
      `diameter`= ,
      `v_imp` = velocity at impact,
      `energy = Megatons of TNT.

## Backend Overview: 

Currently: MongoDb, Express

## Future Plans.

- Format data into VR simulation in user browers. 
- Allow the user to change the planet the asteriod hits.
- 3D asteriods defense game, using Jpl NEO data.
- Show effects on planet earth over the course of many asteriod collisions. 
