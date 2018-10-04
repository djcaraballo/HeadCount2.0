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
      cardData.dataPerYear = {};
      data.forEach(stat => {
        if (stat.Location.toUpperCase() === districtName) {
          cardData.dataPerYear[stat.TimeFrame] = stat.Data;
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
}


export default DistrictRepository;
