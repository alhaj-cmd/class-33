const loadCountry =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then (data => displayCountry(data))
}

const displayCountry =(countries) =>{
    const countryCount = document.getElementById('country')
    countries.forEach(country =>{
        // console.log(country)
       const countryDiv = document.createElement('div');
       countryDiv.classList.add('country');
       countryDiv.innerHTML=`
       <div>
       <h3>${country.name.common}</h3>
       <p><small>${country.capital ? country.capital[0] :'No capital'}</small></p>
       <img src="${country.flags.png}"/>
       <button onclick="loadCountryDetails('${country.cca2}')">Details</butto>
       </div>
       `;
       countryCount.appendChild(countryDiv);
      
    })
   
}

const loadCountryDetails = code =>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]));
    // console.log(url)
}

loadCountry();