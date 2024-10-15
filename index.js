const loadAllPost = async (query) =>{
    const url = ` https://openapi.programming-hero.com/api/retro-forum/posts${query}`
    const res = await fetch(url);
    const data =await res.json(); 
    const cards =data.posts;
    // console.log(cards)
    loadAllCard(cards)
    toggleLoadingSpinner(true);
}




const loadAllCard = cards =>{
    const section2Container =document.getElementById('section2-card-container')
     cards.forEach(card =>{
        // console.log(card)
       const cardSlot = document.createElement('div');
       cardSlot.classList=`bg-slate-200 shadow-xl p-10 rounded-2xl mt-10 ml-10 flex gap-5 w-10/12 `;
       cardSlot.innerHTML =`   <figure class="h-16 w-16   rounded-xl">
                            <img class="rounded-xl" src="${card.image}" alt="">
                        </figure>
                      
  
                  <div>
                        <div class="flex gap-5">
                           <p># ${card.category
                           }</p>
                           <p>Author : ${card.author.name}</p>
                        </div>
                        <div>
                           <h3 class="text-black text-xl font-bold mt-1">${card.
                            title}</h3>
                           <p class="mt-3 text-slate-500">${card.description}</p>
                        </div>
                        <div class="bg-slate-300 h-0.5 mt-3">
                         
                        </div>
                        <div class="flex justify-between mt-4">
                            <ul class="list-none flex gap-10  ">
                              <li class="flex gap-3">
                              <div><i class="fa-regular fa-message"></i></div>
                              <div>${card.comment_count
                              }</div>
                           </li>
                            <li class="flex gap-3">
                              <div><i class="fa-regular fa-eye"></i></div>
                              <div>${card.view_count
                              }</div>
                           </li>
                            <li class="flex gap-3">
                              <div><i class="fa-regular fa-clock"></i></div>
                              <div>${card.posted_time}</div>
                           </li>
                            </ul>
                            <button onclick="handleCardButton('${card.title}','${card.view_count}')" class="bg-green-700 p-2 rounded-full"><i class="fa-regular fa-envelope-open text-white"></i></button>
                        </div>
                  </div> `
       
       section2Container.appendChild(cardSlot)
       
     })
     
}

const handleSearchClick = () =>{
    const inputValue =document.getElementById('input-field');
    const searchText =inputValue.value;
    console.log(searchText)

    loadAllPost(`/category/=${searchText}`)
    
   
    
}



const handleCardButton = (name,views) =>{
    
    const showDetailsCart =document.getElementById("showCartDetails");
   console.log(name,views)
    const cartInfo =document.createElement('div')
    cartInfo.classList=``
    cartInfo.innerHTML=`
       <div class="flex justify-around gap-4 mt-5 bg-slate-100  shadow-lg p-3 rounded-lg">
                    <div><h2 class="text-slate-600 font-medium">${name}</h2></div>
                    <div class="flex gap-2">
                    <div><i class="fa-regular fa-eye"></i></div>
                    <div><h3>${views}</h3></div>
                    
                    </div>
                   </div>
    `
    
    showDetailsCart.appendChild(cartInfo)
    
}


const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById("loading-spiner");
    if(isLoading){
      loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}



// section4  function


const secondCardLoad = async () =>{
    const url2 =` https://openapi.programming-hero.com/api/retro-forum/latest-posts`
    const res =await fetch(url2)
    const data =await res.json();
    const cord2 = data;
    console.log(cord2)

    
    secondCardData(cord2)
}

const secondCardData = (cord2) =>{
    const sectionFourContent =document.getElementById('section-four-card')
    cord2.forEach(cords2=> {
             console.log(cords2)
        const cardSlot2 =document.createElement('div')
        cardSlot2.classList=`mx-8 mt-20 border w-80 p-4 shadow-lg rounded-xl  `
        cardSlot2.innerHTML=`
                 <div class="bg-slate-300  rounded-2xl">
                    <img class="" src="${cords2.cover_image}" alt="">
                </div>
                <div class="flex mt-4 mb-3 gap-3">
                    <div><i class="fa-regular fa-calendar"></i></div>
                    <div>${cords2.author.posted_date}</div>
                </div>
                <div>
                    <h3 class="text-black font-bold text-1xl">What will a mars habitat force that impact in our daily life!!!</h3>
                    <p class="text-slate-400 mt-3">Yes, you can run unit tests and view the results directly within the app. </p>
                    <div class="flex gap-4 mt-4">
                        <div class="h-16 w-16 "><img class ="rounded-full" src="${cords2.profile_image}" alt=""></div>
                        <div>
                            <div class="text-black font-bold">${cords2.author.name}</div>
                            <div class="text-slate-500">${cords2.author.designation}</div>
                        </div>
                    </div>
                </div>
        `
        sectionFourContent.appendChild(cardSlot2)
    })


}

secondCardLoad()













loadAllPost("")
