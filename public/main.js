console.log("🎈");

var $circusBtn = $('#circus-btn');

var names = ['Mo', 'Tipsy', 'Pinky', 'Sneezy', 'Banksy', 'Bob', 'Grumpy', 'Happy', 'Sleepy', 'Dot'];
var colors = ['red', 'blue', 'yellow', 'purple', 'green'];

$circusBtn.on('click', function(evt) {
  $.get('/circus', function(res) {
    var html = "<ul>";
    console.log(res);
    res.forEach(function(circus) {
      html += "<li id='" + circus.id + "'>Circus #" + circus.id +
      "</li><li>Location: " + circus.location +
      "</li><li>Starts On: " + circus.starts_on +
      "</li><li>Ends On: " + circus.ends_on +
      "</li><li>Tickets Avail: " + circus.num_of_tix +
      "</li><br><li><button id='clown-btn'>Add Clown</button></li><br><br>";
      console.log(circus.id)
      console.log(circus.location)
      // addClown(circus.id);
      $('.circuses').on('click', '#clown-btn', function(evt) {
        // var circus_id = circus.id;
        addClown(circus.id);
      })
    })
    html += "</ul>"
    $('.circuses').append(html);
  })
})

function randomName() {
  var name = names[Math.floor( Math.random() * names.length)];
  return name;
}

function randomColor() {
  var color = colors[Math.floor( Math.random() * colors.length)];
  return color;
}

function randomCar() {
  var carNum = Math.ceil( Math.random() * 2);
  return carNum;
}

function addClown(id) {
  var clown = {
    name: randomName(),
    nose_color: randomColor(),
    car_id: randomCar(),
    circus_id: id
  }
  console.log(clown);
  $.post('/clowns', clown, function(res) {
    console.log(res);
  })
}
  // $('.circuses').on('click', '#clown-btn', function(evt) {
  //   console.log('clown clicked');
  //   // let circus =
  //   let circus_id = parseInt(circus.id);
  //   var data = {
  //     name: randomName(),
  //     nose_color: randomColor(),
  //     car_id: randomCar(),
  //     circus_id: circus_id
  //   }
  //   console.log(data);
  //   $.post('/clowns', {clown: data}, function(res) {
  //     console.log(res);
  //   })
  // })






