class DistrictRepository {
  constructor(data) {
    const filteredDist = data.reduce((filteredDistricts, stat) => {
      if (!filteredDistricts.includes(stat.Location)) {
        filteredDistricts.push(stat.Location);
      }

      return filteredDistricts;
    }, []);

    this.stats = filteredDist.map(districtName => {
      const cardData = {};
      cardData.district = districtName;
      cardData.dataPerYear = {};
      data.forEach(stat => {
        if (stat.Location === districtName) {
          cardData.dataPerYear[stat.TimeFrame] = stat.Data;
        }
      });

      return cardData;
    });
  }

  findByName(districtName) {
    this.stats.find((stat) => {
      return stat.district == 'Colorado'; 
    })
  }
}


export default DistrictRepository;
