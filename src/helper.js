class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((filteredStats, statistic) => {
      if(!filteredStats.includes(statistic.Location)) {
        filteredStats.push(statistic.Location)
      }

        return filteredStats
      }, []);
  }  
}


export default DistrictRepository;