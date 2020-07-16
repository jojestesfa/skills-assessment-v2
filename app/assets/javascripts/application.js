/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $(".govuk-button").click(function () {
    if ($('#SelectedOption-1').is(':checked')) {

      window.location.href = 'skills-assessment/DYSAC/dysac';
	  return false;

    } else if ($('#SelectedOption-2').is(':checked')) {

      window.location.href = 'skills-assessment/skills-health-check/homepage-completed#personal-skills';
      return false;
    }
	  else if ($('#SelectedOption-3').is(':checked')) {

      window.location.href = 'skills-assessment/skills-health-check/homepage-completed#activity-skills';
      return false;
    }
	  
	  else if ($('#SelectedOption-4').is(':checked')) {

      window.location.href = '#';
      return false;
    }

  });
$("#downloadReport").click(function () {
	
    if ($('#DownloadType-pdf').is(':checked')) { 

		window.open('/public/images/Skills-Health Check-UR-Example-As-Is-2assessments-completed-PDF-Report.pdf', '_blank');
	  return false;

    } else if ($('#DownloadType-doc').is(':checked')) {

      window.location.href = '/public/images/Skills-Health Check-UR-Example-As-Is-2assessments-completed-PDF-Report.docx';
													   
      return false;
    }
	  

  });

})

// import 'bootstrap';
