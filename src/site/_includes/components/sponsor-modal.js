const form = $("[data-sponsor-form]");
const submitBtn = $("[data-sponsor-submit]");
const successText = $("[data-sponsor-success]");
const failText = $("[data-sponsor-fail]");

submitBtn.click(function (event) {
  event.preventDefault();

  successText.hide();
  failText.hide();

  $.ajax({
    type: form.attr("method"),
    url: form.attr("action"),
    data: form.serialize(),
    cache: false,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    error: function (err) {
      console.log(err);
      failText.show();
    },
    success: function (data) {
      if (data.result != "success") {
        console.log(data);
        failText.show();
      } else {
        successText.show();
      }
    },
  });

  // console.log(form.attr("action"));

  // fetch(form.attr("action"), {
  //   method: form.attr("method"),
  //   headers: {
  //     contentType: "application/json; charset=utf-8",
  //   },
  // }).then(
  //   function (data) {
  //     if (data.result != "success") {
  //       console.log(data);
  //       failText.show();
  //     } else {
  //       successText.show();
  //     }
  //   },
  //   function (err) {
  //     console.log(err);
  //     failText.show();
  //   }
  // );
});
