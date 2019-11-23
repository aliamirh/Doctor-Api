import { DoctorService } from './../src/doctor-service.js';
import { UserSymptom } from './../src/doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready (function() {

  $("#formIssue").submit(function(event){
    event.preventDefault();
    let symptom = $("#medIssue").val();
    $("#medIssue").val("");
    $("#issuesPrint").empty();
    $(".hideIssues").show();

    (async () => {
      let symptomCheck = new UserSymptom();
      const response2 = await symptomCheck.getUserSymptomBy(symptom)
      getElements2(response2);
    })();

    function getElements2(response2){
      if (response2.data.length === 0){
        alert("Sorry, no doctors meet the criteria");
      }else{
        for(let j = 0; j < response2.data.length; j++){
          let numberOfDoctors = response2.data.length;
          let doctorFirst = response2.data[j].profile.first_name;
          let doctorLast = response2.data[j].profile.last_name;
          let docTitle = response2.data[j].profile.title;
          let doctorWebSite;
            if (response2.data[j].practices[0].website === undefined){
              doctorWebSite = " "
            }else{
              doctorWebSite = response2.data[j].practices[0].website;
            }
          let doctorSpecialties = response2.data[j].specialties[0].name;
          $(".hideIssues").text(`There is ${numberOfDoctors} doctor(s) that can help.`)
          $("#issuesPrint").append(`<li> <strong>${doctorFirst} ${doctorLast}</strong> ${docTitle} <strong>Specialtiy:</strong> ${doctorSpecialties}</li><li class=nested><a id="link" href=>${doctorWebSite}</a></li>`).show();
        }
      }
    }
  });
/////////////
  $("#formDocName").submit(function(event) {
    event.preventDefault();
    let name = $("#doctorName").val();
    $("#doctorName").val("");
    $("#doctorPrint").empty();
    $(".hideDocsSearch").show();

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBy(name);
      getElements(response);
    })();

    function getElements(response) {
      if (response.data.length === 0){
        alert("Sorry, no doctors meet the criteria");
      }else {
        for (let i = 0; i < response.data.length; i++){
          let numberOfProviders = response.data.length;
          let doctorFirstName = response.data[i].profile.first_name;
          let doctorLastName = response.data[i].profile.last_name;
          let doctorTitle = response.data[i].profile.title;
          let doctorStreet = response.data[i].practices[0].visit_address.street;
          let doctorCity = response.data[i].practices[0].visit_address.city;
          let doctorPhone = response.data[i].practices[0].phones[0].number;
          let doctorSite;
          if (response.data[i].practices[0].website === undefined){
            doctorSite = " "
          }else{
            doctorSite = response.data[i].practices[0].website;
          }
          let doctorNewPatient;
            if (response.data[i].practices[0].accepts_new_patients === true){
              doctorNewPatient = "Accepting New Patients"
            }else{
              doctorNewPatient = "Not Accepting New Patients"
            }
          $(".hideDocsSearch").text(`There is ${numberOfProviders} result(s).`)
          $("#doctorPrint").append(`<li> <strong>${doctorFirstName} ${doctorLastName}</strong> ${doctorTitle} is currently ${doctorNewPatient}</li><li class=nested> Office location: ${doctorStreet}, ${doctorCity}. <br> Phone number: ${doctorPhone} <br> <a href=>${doctorSite}</a> </li>`).show();
        }
      }
    }
  });


});
