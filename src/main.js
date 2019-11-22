import { DoctorService } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready (function(){
  $("#formGroup").submit(function(event){
    event.preventDefault()
    const issue = $("#medIssue").val();
    console.log(issue)
    const userPreferredDoctor = $("#doctorName").val();
    console.log(userPreferredDoctor)

    (async () =>{
      let newDoctor = new DoctorService();
      const response = await newDoctor.getDoctorBy(name, condition);
      getElements(response);
    })();

    function getElements(response) {
      $(".print").text (`The doctor ${userPreferredDoctor} is avaliable to look at ${issue}. `)
    }
  });
});
