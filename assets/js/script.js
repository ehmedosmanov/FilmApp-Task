const cardContainer = document.getElementById('cards-container')
const searchInput = document.getElementById('search')

//Fetch
// async function getFilmData() {
//   try {
//     const response = await fetch('https://api.tvmaze.com/shows')
//     const data = await response.json()
//     let temp = ''
//     data.forEach(element => {
//       temp += `
//       <div class="col-lg-3 col-sm-6 col-12 pb-4">
//       <div class="film-card">
//         <div class="card-img">
//           <img
//             src="${element.image.medium}"
//             alt="${element.name}" />
//         </div>
//         <div class="card-content">
//           <div class="card-content_heading">
//             <h4>${element.name}</h4>
//             <p class="rating">
//               ${element.rating.average}/
//               <span>10</span>
//             </p>
//           </div>
//           <div class="card-info">
//             <p>
//               Language :
//               <span>${element.language}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//       `
//     })
//     cardContainer.innerHTML = temp
//   } catch (error) {
//     console.log(error)
//   }
// }

//Axios
async function getFilmData() {
  try {
    const response = await axios('https://api.tvmaze.com/shows')
    const data = response.data
    let temp = ''
    data.forEach(element => {
      temp += `
      <div class="col-lg-3 col-sm-6 col-12 pb-4">
      <div class="film-card">
        <div class="card-img">
          <img
            src="${element.image.medium}"
            alt="${element.name}" />
        </div>
        <div class="card-content">
          <div class="card-content_heading">
            <h4>${element.name}</h4>
            <p class="rating">
              ${element.rating.average === null ? 0 : element.rating.average}/
              <span>10</span>
            </p>
          </div>
          <div class="card-info">
            <p>
              Language :
              <span>${element.language}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
      `
    })

    cardContainer.innerHTML = temp
  } catch (error) {
    console.log('error', error)
  }
}

//Search
searchInput.addEventListener('input', e => {
  let value = e.target.value.toLowerCase()
  for (let i = 0; i < cardContainer.children.length; i++) {
    let filmTitle = cardContainer.children[i]
      .querySelector('.card-content_heading h4')
      .textContent.toLowerCase()
    if (filmTitle.includes(value)) {
      cardContainer.children[i].style.display = 'block'
    } else {
      cardContainer.children[i].style.display = 'none'
    }
  }
})

getFilmData()
