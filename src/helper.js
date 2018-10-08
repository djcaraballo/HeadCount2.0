class DistrictRepository {
  constructor(data) {
    const filteredDist = data.reduce((filteredDistricts, stat) => {
      if (!filteredDistricts.includes(stat.Location.toUpperCase())) {
        filteredDistricts.push(stat.Location.toUpperCase());
      }

      return filteredDistricts;
    }, []);

    this.stats = filteredDist.map((districtName) => {
      const cardData = {};
      cardData.district = districtName;
      cardData.stats = {};
      data.forEach((stat) => {
        if (typeof stat.Data !== 'number') {
          stat.Data = 0;
        }

        if (stat.Location.toUpperCase() === districtName) {
          cardData.stats[stat.TimeFrame] = Math.round(stat.Data * 1000) / 1000;
        }
      });

      return cardData;
    });
  }

  findByName(districtName) {
    if (!districtName) {
      return undefined;
    }
    const found = this.stats.find((stat) => {
      return stat.district.toUpperCase() === districtName.toUpperCase();
    });

    return found;
  }

  findAllMatches(districtName) {
    if (!districtName) {
      return this.stats;
    }

    const foundMatches = this.stats.filter((stat) => {
      return stat.district.includes(districtName.toUpperCase());
    });

    return { stats: foundMatches };
  }

  findAverage(districtName, dataArray) {
    const districtSum = Object.values(this.findByName(districtName).stats).reduce((distSum, value) => {
      distSum += Math.round(value * 1000) / 1000;

      return distSum
    }, 0)
    const districtAvg = districtSum/Object.values(this.findByName(districtName).stats).length

    return Math.round(districtAvg * 1000) / 1000;
  }
}

export default DistrictRepository;
