function calculateTip() {
    let total_amount = document.getElementById('total_amount').value;
    let percentage = document.getElementById('total_tip_percent').value;
    let total_persons = document.getElementById('total_person').value;
    if (total_amount.length == 0 || percentage.length == 0 || total_persons.length == 0) {
        alert('Enter the required field.');
    } else {
        if (total_amount < 0) {
            alert('Totoal amount is in NEGETIVE.');
        }
        if (percentage < 0) {
            alert('Percantage is in NEGETIVE.');
        }
        if (total_persons < 0) {
            alert('Persons is in NEGETIVE.');
        } else {
            let total_tip = (percentage / 100) * total_amount;
            console.log('total tip ' + total_tip);
            document.getElementById('result_tip').innerHTML = '$' + total_tip;

            let tip_per_persons = total_tip / total_persons;
            console.log('per pers $' + tip_per_persons);
            document.getElementById('result_tip_person').innerHTML = '$' + tip_per_persons;

            let bill_per_person = total_amount / total_persons;

            let total_per_persons = tip_per_persons + bill_per_person;
            console.log(bill_per_person);
            console.log('Total per persons $' + total_per_persons);
            document.getElementById('result_total').innerHTML = '$' + total_per_persons;
        }
    }
}