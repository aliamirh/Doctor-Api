export class DoctorService {
  async getDoctorBy(name){
    try{
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?${process.env.API_KEY}&name=${name}&location=45.5051,-122.675,20`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
