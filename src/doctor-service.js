export class DoctorService {
  async getDoctorBy(name, condition){
    try{
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${conditions}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      alert.error("There was an error handling your request: " + error.message);
    }
  }
}
