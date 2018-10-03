class DistrictRepository {
  constructor(data) {
    const filteredDist = data.reduce((filteredDistricts, stat) => {
      if (!filteredDistricts.includes(stat.Location)) {
        filteredDistricts.push(stat.Location);
      }

      return filteredDistricts;
    }, []);

    const cardStats = filteredDist.map((districtName) => {
      const cardData = {};
      cardData[districtName] = {};
      data.forEach((stat) => {
        if (stat.Location === districtName) {
          cardData[districtName][stat.TimeFrame] = stat.Data;
        }
      });

      return cardData;
    });

    this.stats = cardStats;
  }
}


export default DistrictRepository;
