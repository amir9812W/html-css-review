const PeopleContainer = document.querySelector('.people');


let people = [];
let comments = [];


//finished i guess

const fetchData = async() => {  
  for(let i = 0 ; i < 10; i++){
    try{
      const res = await fetch('https://randomuser.me/api');
      res.ok? console.log('CONNECTED SUCCESFULLY') : console.log('CHECK YOUR INTERNET CONNECTION');
      const data = await res.json();
      people.push(data.results[0]);
    } catch (error){
      console.log('SOMETHING WENT WRONG')
    }
  };
};


const RenderThePeople = () => {
    console.log(people)
    people.map((data) => {
    PeopleContainer.innerHTML += `
    <div class="nigga">
    <div class="user-left-section">
    <img src=${data.picture.medium} alt="user" width="50px" style="border-radius: 10px;">
    <div class="user-info">
    <p style="font-weight: 700;">${data.name.first, data.name.last}</p>
    <p>Needs Follow-Up</p>
    </div>
    </div>
    <button class="user-button">${data.nat}</button>
    </div>
    `
  })
}



const initiate = async() => {
  await fetchData();
  document.querySelector('.loader').classList.add('disappear')
  RenderThePeople();
}

initiate();

const comment = document.querySelector('.comments')

const fetchComments = async() => {
  try{
    const res = await fetch('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId');
    res.ok?console.log('CONNECTED TO API') : console.log('FUCK IT SEEMS IT DIDNT WORK ')
    const data = await res.json();
    comments.push(data);
    console.log(comments[0])
  }catch(error){
    console.log('Something went wrong')
  }
}

const RenderComments = async() => {
  comments[0].comments.map((data) => {
    comment.innerHTML +=
    `
     <div class="comment-container">
      <div class="com-header">
        <p style="font-family: Roboto; font-size: 20px;">${data.likes}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>
        <p style="font-family: Roboto; font-size: 16px;">${data.user.username}</p>
      </div>
      <div class="com-bottom">
        <div class="num" style="font-size: 14px; font-family: Roboto;">
          ${data.postId}
        </div>
        <p style="font-family: Roboto; font-size: 16px;">
          ${data.body}
        </p>
      </div>
    </div>
    `
  })
};

const initiateComment =async () => {
  await fetchComments();
  document.querySelector('.loader-2').classList.add('disappear');
  RenderComments();
}

initiateComment();


const naniButton = document.querySelector('.comments');


const toLeft = () => {
  naniButton.scrollBy(-350, 0);
}

const toRight = () => {
  naniButton.scrollBy(350, 0)
}





let modalShow = false;

const showModal = () => {
  if(!modalShow)  {
    document.querySelector('.pop-none').classList.add('pop-up');
    modalShow = true;
  }else {
    document.querySelector('.pop-none').classList.remove('pop-up');
    modalShow = false;
  }

};



const container = document.querySelector('.section-zwei');



const categoryGenrator = () => {
  let valueCat = document.querySelector('.input-cat').value
  const num = Math.random() * 100
  if(valueCat.length < 30){
    document.querySelector('.section-zwei, .section-zwei-closed').innerHTML += `
    <div class="children" id=some-${num}>
      <p>${valueCat}</p>
      <button class="dropdown-2" onclick = del(${num})>-</button>
    </div>
  `;
  document.querySelector('.input-cat').value = ''
  valueCat = '';
  
  }else {
    console.log('Enter something with less charectors ')
  }
  
};


document.querySelector('body').addEventListener('keydown', (val) => {
  if(val.key === "Enter"){
    valueCat.length > 3 ? categoryGenrator() : '';
  }
});

// Makeine: Too Many Losing Heroines

const del = (id) => {
  const element = document.getElementById(`some-${id}`);

  if(element){
    element.remove();
  }else {
    console.log('element not found nigga')
  }
}



//this section is all about the sidebar 

const sidebarContainer = document.querySelector('.container-sidebar-closed');
const sidebarClosed = document.querySelector('.sidebar-closed');
const sidebarHeader = document.querySelector('.header-closed');
const dashSidebar = document.querySelectorAll('.dash-closed');
const userClosed = document.querySelector('.user-closed');
const naniSure = document.querySelector('.nanisure-closed');
const sectionZweiClosed = document.querySelector('.section-zwei-closed');
const buttonToggle = document.querySelector('.toggle-button');
const leftSectionUser = document.querySelector('.left-sec-closed');

const pointerData = ['Dashboard','interviews','Calendar','Candiates', 'Setting']

const renderPointers = () => {
  dashSidebar.forEach((element, index) => {
    element.innerHTML += `
        <div class="pointer">
          <span>${pointerData[index]}</span>
        </div>
    `
  });
};

renderPointers();

let toggle = false;

const Toggler = () => {
  if (!toggle) {
    buttonToggle.classList.add('toggled-button');
    sidebarContainer.classList.remove('container-sidebar-closed');
    sidebarContainer.classList.add('container');
    //sidebar width
    sidebarClosed.classList.remove('sidebar-closed');
    sidebarClosed.classList.add('sidebar')
  
    //dashboards
    dashSidebar.forEach((element) => {
      element.classList.remove('dash-closed');
      element.classList.add('dash')
    })
    //header
    sidebarHeader.classList.remove('header-closed');
    sidebarHeader.classList.add('header');

    //nanisure 
    naniSure.classList.remove('nanisure-closed');
    naniSure.classList.add('nanisure');

    //section-zwei

    sectionZweiClosed.classList.remove('section-zwei-closed');
    sectionZweiClosed.classList.add('section-zwei');

    //user
    userClosed.classList.remove('user-closed');
    userClosed.classList.add('user');

    //left-section-user
    leftSectionUser.classList.remove('left-sec-closed');
    leftSectionUser.classList.add('left-sec')

    toggle = true;
  } else {
    buttonToggle.classList.remove('toggled-button');
    sidebarContainer.classList.remove('container');
    sidebarContainer.classList.add('container-sidebar-closed');
    //sidebarwidth
    sidebarClosed.classList.remove('sidebar');
    sidebarClosed.classList.add('sidebar-closed')

    //dashboards
    dashSidebar.forEach((element) => {
      element.classList.remove('dash');
      element.classList.add('dash-closed');
    })

    //header
    sidebarHeader.classList.remove('header');
    sidebarHeader.classList.add('header-closed');

    //nanisure
    naniSure.classList.remove('nanisure');
    naniSure.classList.add('nanisure-closed');

    //sectionzwei 
    sectionZweiClosed.classList.remove('section-zwei');
    sectionZweiClosed.classList.add('section-zwei-closed');

    //user
    userClosed.classList.remove('user');
    userClosed.classList.add('user-closed');

    //left-section-user
    leftSectionUser.classList.remove('left-sec');
    leftSectionUser.classList.add('left-sec-closed')
    
    toggle = false;
  }
};


const sub = document.querySelector('.active');
const butt = document.querySelector('.toggle-handler-nigga');

let subToggle = false;

const subMenuShower = () => {

  if(!subToggle){
    sub.classList.remove('dash');
    sub.classList.add('dash-closed-1');
    butt.classList.remove('toggle-handler-nigga');
    butt.classList.add('rotated')
    subToggle = true;
  }else {
    sub.classList.remove('dash-closed-1');
    sub.classList.add('dash');
    butt.classList.remove('rotated');
    butt.classList.add('toggle-handler-nigga')
    subToggle = false;
  }

};