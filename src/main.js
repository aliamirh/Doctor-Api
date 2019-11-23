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
    console.log(name);

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBy(name);
      getElements(response);

    })();

    function getElements(response) {
      // let doctors = [];

      if (response.data.length === 0){
        alert("Can't find anyone");
      }else {
        for (let i = 0; i < response.data.length; i++){
          let firstName = response.data[i].profile.first_name;
        }
      }
    //   $(".info").append(`Doctor ${response.data[0].profile.first_name} `);
    }

  });
});
