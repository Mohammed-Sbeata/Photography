const getDAta = ()=>{
    const name = document.getElementById('name-id');
    const email = document.getElementById('email-id');
    const phone = document.getElementById('phone-id');
    const country = document.getElementById('country-id');
    const city = document.getElementById('City-id');
    const purpose = document.getElementById('purpose-id');
    const booking_date = document.getElementById('booking_id-id');
    fetch('/photographer')
    .then((data) => data.json())
    .then(data => data)
    .then((data) => {
        const table = document.getElementById('customers-table');
        console.log(data);
        data.forEach((user) => {
        
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.textContent = user.name;
        row.appendChild(name);

        const email = document.createElement("td");
        email.textContent= user.email;
        row.appendChild(email);

        const phone = document.createElement("td");
        phone.textContent= user.phone;
        row.appendChild(phone);

        const city = document.createElement("td");
        city.textContent= user.city;
        row.appendChild(city);

        const purpose = document.createElement("td");
        purpose.textContent= user.purpose;
        row.appendChild(purpose);

        const booking_date = document.createElement("td");
        booking_date.textContent= user.booking_date;
        row.appendChild(booking_date);

        table.appendChild(row);
    });
});}
getDAta();