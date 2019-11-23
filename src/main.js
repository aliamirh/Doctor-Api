import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready (function() {

  $("#formGroup").submit(function(event) {
    event.preventDefault();
    let name = $("#doctorName").val();
    $("#doctorName").val("");


    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBy(name);
      getElements(response);

    })();

    function getElements(response) {
      let doctorInfo = [];
      if (response.data.length === 0){
        alert("Can't find anyone");
      }else {
        for (let i = 0; i < response.data.length; i++){
          let doctorFirstName = response.data[i].profile.first_name;
          let doctorLastName = response.data[i].profile.last_name;
          let doctorTitle = response.data[i].profile.title;
          let doctorStreet = response.data[i].practices[0].visit_address.street;
          let doctorCity = response.data[i].practices[0].visit_address.city;
          let doctorPhone = response.data[i].practices[0].phones[0].number;
          let doctorNewPatient = response.data[i].practices[0].accepts_new_patients;
          console.log(doctorFirstName, doctorLastName, doctorTitle, doctorStreet, doctorCity, doctorPhone, doctorNewPatient)
        }
        

      }
    //   $(".info").append(`Doctor ${response.data[0].profile.first_name} `);
    }
  });
});
