
// Step 1 || Search Field || Search button
const clickToSearch = (showAllPhones) => {
      const inputField = document.getElementById('input-field');
      const inputFieldValue = inputField.value;
      phoneCards(inputFieldValue, showAllPhones);

      // Step 7 || Set Loading bar to true
      loadingSpinner(true);
};

// Step 2 || Collecting Data
const phoneCards = async (phones, showAllPhones) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phones}`);
      const data = await res.json();
      const phoneData = data.data;
      showPhoneCards(phoneData, showAllPhones);
};

// Step 3 || Showing Phones
const showPhoneCards = (phoneData, showAllPhones) => {

      // Remove First Searching Data
      const removePhoneContainer = document.getElementById('phone-container');
      removePhoneContainer.innerHTML = '';

      // Step 10 || Show All Button
      const showAll = document.getElementById('show-all');
      if (phoneData.length > 12 && !showAllPhones) {
            showAll.classList.remove('hidden');
      }
      else {
            showAll.classList.add('hidden');
      }

      // Step 9 || Apply Slice method
      if (!showAllPhones) {
            phoneData = phoneData.slice(0, 12);
      };

      // Step 4
      const phoneContainer = document.getElementById('phone-container');
      phoneData.forEach(phone => {

            // Step 5
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('shadow-xl');
            cardContainer.innerHTML = `
            <figure class="flex justify-center pt-6"><img src="${phone.image}" alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                  <h2 class="card-title font-bold">${phone.phone_name}</h2>
                  <p>There are many variations of passages of available, but the majority have suffered</p>
                  <p class="text-3xl font-bold">$999</p>
                  <div class="card-actions justify-center mt-3">
                        <button onclick="phoneDetails('${phone.slug}')" class="btn btn-neutral">Show Details</button>
                  </div>
            </div>
            `;
            phoneContainer.appendChild(cardContainer);
      });

      // Step 8 || Set Loading bar to False
      loadingSpinner(false);
};

// Step 6 || Loading before showing phones
const loadingSpinner = (isLoading) => {
      const toggleLoadingSpinner = document.getElementById('loading-spinner');
      if (isLoading) {
            toggleLoadingSpinner.classList.remove('hidden');
      }
      else {
            toggleLoadingSpinner.classList.add('hidden');
      }
};

// Step 11 || Show All phone Items
const showAllPhones = () => {
      clickToSearch(true);
};


// Step 12 || Collecting Phone Details from fetch
const phoneDetails = async (id) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
      const data = await res.json();
      const phoneData = data.data;
      showPhoneDetails(phoneData);
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
      <p class="font-bold">GPS: <span class="font-normal">${phone?.others?.GPS || 'Not found' }</span> </p>
      `;
      phoneFeaturedContainer.appendChild(featuredContainer);

      my_modal_5.showModal();
};


// phoneCards();
