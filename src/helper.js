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

  findAverage(districtName) {
    const districtSum = Object.values(this.findByName(districtName).stats).reduce((distSum, value) => {
      distSum += Math.round(value * 1000) / 1000;

      return distSum
    }, 0)
    const districtAvg = districtSum/Object.values(this.findByName(districtName).stats).length

    return Math.round(districtAvg * 1000) / 1000;
  }

  compareDistrictAverages(district1, district2) {
    const dist1Name = district1.toUpperCase()
    const dist2Name = district2.toUpperCase()
    const dist1Avg = this.findAverage(district1)
    const dist2Avg = this.findAverage(district2)
    const comparisonValue = Math.round((dist1Avg/dist2Avg)*1000) / 1000

    const comparison = {}
    comparison[dist1Name] = dist1Avg
    comparison[dist2Name] = dist2Avg
    comparison.compared = comparisonValue

    return comparison
  }
}

export default DistrictRepository;
