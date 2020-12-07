let place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu", "Pokhara", "Palpa"];

function onDisplayPlace(Array_place, removeitem) {
    let htm = `<li id="place_list">${removeitem} is removed and it's length is  ${removeitem.length}. </li>`;
    Array_place.forEach(function(val) {
        htm += `<li id="place_list">${val}</li>`;
    });
    document.getElementById('list_of_place').innerHTML = htm;
}

function onAddPlaceAndRemovePlace() {
    let place_one = document.getElementById('placeone').value;
    let place_two = document.getElementById('placetwo').value;
    if (place_one.length == 0 || place_two.length == 0) {
        alert('Enter Place.');
    } else {
        if (place_one.length < 3 || place_two.length < 3) {
            alert('Place name shiuld be atleast 4 letters.');
        } else {
            let removeitem = place.splice(3, 1, place_one, place_two);
            console.log(removeitem.length);
            onDisplayPlace(place, removeitem);
        }
    }
}