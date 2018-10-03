class DistrictRepository {
  constructor(data) {

    const filteredDistricts = data.reduce((filteredDistricts, stat) => {
      if(!filteredDistricts.includes(stat.Location)) {
        filteredDistricts.push(stat.Location)
      }

      return filteredDistricts
    }, [])

    const cardData = filteredDistricts.map((districtName) => {
      let cardData = {};
      cardData[districtName] = {}
      data.forEach((stat) => {
        if(stat.Location === districtName) {
          cardData[districtName][stat.TimeFrame] = stat.Data
        }
      })

      return cardData
    })

    this.stats = cardData;
  }  
}


export default DistrictRepository;