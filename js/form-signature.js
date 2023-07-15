$(document).ready(function () {
  const fname = localStorage.getItem("fname");

  $(".fname_pull").text(fname !== null ? fname : "");

  ////////////////////////////
  //////// Signature /////////
  ////////////////////////////
  var signature_image = $('input[name="signature_image"]');
  $("#step_signature_form .submit").click(function (event) {
    event.preventDefault();
    validating_state(this);
    var required_fields_valid = true;
    setTimeout(function () {
      // Signature image
      if ($(signature_image).val() !== "") {
        $("#step_signature_form").on("submit", function (e) {
          e.preventDefault();
          window.location.href = "/energy-claim/thank-you.html";
        });

        $("#step_signature_form").submit();
      } else {
        required_fields_valid = false;
        show_error_primary(signature_image);
        scroll_to_first_error(signature_image);
      }
    }, 500);
  });

  // Show primary error
  function show_error_primary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.primary").show();
  }

  // Hide all errors
  function hide_all_errors(element) {
    $(element)
      .closest(".field")
      .removeClass("field-error")
      .addClass("field-valid");
    $(element).closest(".field").find(".error").hide();
  }

  // Show validating state
  function validating_state(element) {
    $(element).closest(".step").find(".loading-step").show();
    $(element).closest(".step").find(".field").removeClass("field-error");
    $(element).closest(".step").find(".field").find(".error").hide();
  }

  // Scroll to first error
  function scroll_to_first_error(element) {
    $(element).closest(".step").find(".loading-step").hide();
    $("html, body").animate(
      {
        scrollTop: $(".field-error").first().offset().top - 150
      },
      0
    );
  }

  // Scroll to top of the page
  function scroll_to_top_of_page() {
    $("html, body").animate(
      {
        scrollTop: $("#reset").offset().top - 0
      },
      400
    );
  }
});
