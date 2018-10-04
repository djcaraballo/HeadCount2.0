class DistrictRepository {
  constructor(data) {
    const filteredDist = data.reduce((filteredDistricts, stat) => {
      if (!filteredDistricts.includes(stat.Location.toUpperCase())) {
        filteredDistricts.push(stat.Location.toUpperCase());
      }

      return filteredDistricts;
    }, []);

    this.stats = filteredDist.map(districtName => {
      const cardData = {};
      cardData.district = districtName;
      cardData.stats = {};
      data.forEach(stat => {
        if(typeof stat.Data !== 'number') {
          stat.Data = 0
        }

        if (stat.Location.toUpperCase() === districtName) {
          cardData.stats[stat.TimeFrame] = Math.round(stat.Data*1000)/1000;
        }

      });

      return cardData;
    });
  }

  findByName(districtName) {
    if(!districtName) {
      return undefined
    }
    const found = this.stats.find(stat => {  
      return stat.district.toUpperCase() === districtName.toUpperCase()
    })

    return found
  }

  findAllMatches(districtName) {
    if(!districtName) {
      return this.stats
    }

    districtName = districtName.toUpperCase()
    const foundMatch = this.stats.filter((stat) => {
      return stat.district.includes(districtName.toUpperCase())
    })
    return foundMatch
  }
}


export default DistrictRepository;