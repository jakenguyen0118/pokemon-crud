$(document).ready(() => {
  console.log('script loaded');

  // listener for submitting the new pokemon form
  $('.new-pokemon-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const name = $('.poke-name-input').val(),
          description = $('.poke-description-input').val(),
          image = $('.poke-image-input').val(),
          type = $('.poke-type-input').val();

    // create new object to send form data in
    const newPokeData = {name: name, description: description, image: image, type: type};

    // console.log(newPokeData);
    // send ajax request to make new pokemon
    $.ajax({
      method: 'POST',
      url: '/pokemon',
      data: newPokeData,
      success: response => {
        console.log(response);
        window.location.replace('/pokemon/' + response.id);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for new pokemon form


}); // ends document.ready
