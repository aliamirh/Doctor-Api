export class DoctorService {
  async getDoctorBy(name){
    try{
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&query=${name}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      alert.error("There was an error handling your request: " + error.message);
    }
  }
}
