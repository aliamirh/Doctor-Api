import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready (function(){
  $("#formGroup").click(function(){
    const issue = $("#medIssue").val();
    const userDoctor = $("#doctorName").val();

    function getElements() {
      $(".print").text (`The doctor ${userDoctor} is avaliable to look at ${issue}. `)
    }

    (async () =>{
      let newDoctor = new DoctorService();
      let response = await newDoctor.getDoctorBy(userDoctor);
      getElements(response);
    })();
  });
});
