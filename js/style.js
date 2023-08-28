// function loadPhone() {
//       fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//             .then(res => res.json())
//             .then(data => console.log(data.data))
// };

// loadPhone();


const loadPhone = async (inputValue, showAllPhone) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`);
      const data = await res.json();
      const phones = data.data;
      mobilePhones(phones, showAllPhone);
}

function mobilePhones(phones, showAllPhone) {
      // console.log(phones);
      const phoneContainer = document.getElementById('phone-container');
      // phoneContainer.innerHTML = '';
      phoneContainer.textContent = '';

      const showAll = document.getElementById('show-all');
      if (phones.length > 12 && !showAllPhone) {
            showAll.classList.remove('hidden');
      }
      else {
            showAll.classList.add('hidden')
      }

      if (!showAllPhone) {
            phones = phones.slice(0, 12);
      }

      phones.forEach(phone => {
            // console.log(phone);
            const phoneCard = document.createElement('div');
            phoneCard.classList = 'card bg-base-100 shadow-xl';
            phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" />
            </figure>
            <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-center mt-3">
                        <button onclick="showMore('${phone.slug}')" class="btn btn-neutral">More Details</button>
                  </div>
            </div>
            `;
            phoneContainer.appendChild(phoneCard);
      });

      toggleLoadingSpinner(false);
};


const searchInput = showAllPhone => {
      toggleLoadingSpinner(true);
      const inputField = document.getElementById('search-input');
      const inputValue = inputField.value;
      // console.log(inputValue);
      loadPhone(inputValue, showAllPhone);
};

const toggleLoadingSpinner = (isLoading) => {
      const loadingSnipper = document.getElementById('loading-spinner');
      if (isLoading) {
            loadingSnipper.classList.remove('hidden');
      } else {
            loadingSnipper.classList.add('hidden');
      }
};


const showAllPhone = () => {
      searchInput(true);
};

const showMore = async (id) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
      const data = await res.json();
      const getData = data.data;
      // console.log(getData);
      showPhoneDetails(getData);
};

const showPhoneDetails = (phone) => {

      const phoneFeaturedContainer = document.getElementById('phone-feature-container');
      const featuredContainer = document.createElement('div');
      featuredContainer.classList.add('space-y-4');
      featuredContainer.innerHTML = `
      <div class="flex justify-center my-6"><img src="${phone.image}" alt=""></div>
      <h3 class="text-[#403F3F] font-bold text-3xl">${phone.name}</h3>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <p class="font-bold">Storage: <span class="font-normal">${phone.mainFeatures.storage}</span> </p>
      <p class="font-bold">Display-Size: <span class="font-normal">${phone.mainFeatures.storage}</span> </p>
      <p class="font-bold">ChipSet: <span class="font-normal">${phone.mainFeatures.chipSet}</span> </p>
      <p class="font-bold">Memory: <span class="font-normal">${phone.mainFeatures.memory}</span> </p>
      <p class="font-bold">Slug: <span class="font-normal">${phone.slug}</span> </p>
      <p class="font-bold">Release-Data: <span class="font-normal">24 September,2012</span> </p>
      <p class="font-bold">Brand: <span class="font-normal">${phone.brand}</span> </p>
      <p class="font-bold">GPS: <span class="font-normal">${phone.others.GPS}</span> </p>

      `;
      phoneFeaturedContainer.appendChild(featuredContainer);
      console.log(phone);

      my_modal_5.showModal();
};








