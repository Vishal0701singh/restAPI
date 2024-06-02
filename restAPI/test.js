const btn = document.getElementById('btn');
let data;
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const cards = document.getElementById('cards');
    let url = "https://jsonplaceholder.typicode.com/users"
    let response = fetch(url);


    cards.innerHTML = `<div class="loaderbody"><div class="loader"></div></div>`
    let myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
        cards.innerHTML = " "
    }


    let mTimeout = setTimeout(mGreeting, 2000);

    function mGreeting() {
        response.then((v) => {
            return v.json()
        }).then((v) => {
            console.log(v);
            data = v;
            console.log(v[0].id);
            console.log(v.length);
            // console.log(v.data);
            for (let post = 0; post <= v.length; post++) {
                // console.log(v[post].id);

                cards.innerHTML += `  <div  id="cd" class="card">
                
                <div class="discription">
                    <p><B>Name: </B>${v[post].name}</p>
                   
                    <p><B>Email: </B> ${v[post].email}</p>
                </div>
            </div>`





            }


        })






    }
    const btn1 = document.getElementById('cards');
    const cd = document.getElementById('cd');
    btn1.addEventListener("click", (e) => {
        e.preventDefault();
        console.log()
        console.log(data);
        cards.classList.add("invisible");
        cards.classList.add("visible");
        nv.classList.add("invisible");
        bd.classList.add("display");
        const childDiv1 = document.createElement("div");
        childDiv1.classList.add("childMain1");
        bd.appendChild(childDiv1)
        childDiv1.innerHTML += `  
        
        <div class="card">
           
            <div class="discription">
                <p><B>Name: </B>${data[2].name}</p>
                <p><B>Id: </B>${data[2].id}</p>
                <p><B>Email: </B> ${data[2].email}</p>
                <p><B>username: </B> ${data[2].username}</p>
                <p><B>address: </B> 
                <p>street:  ${data[2].address.street}</p>
                <p>suite:  ${data[2].address.suite}</p>
                <p>city:  ${data[2].address.city}</p>
                <p>zipcode:  ${data[2].address.zipcode}</p>
                <p>geo:  
                <p>lat:  ${data[2].address.geo.lat}</p>
                <p>lng:  ${data[2].address.geo.lng}</p>
                </p>
                
                </p>
                <p><B>phone: </B> ${data[2].phone}</p>
                <p><B>website: </B> ${data[2].website}</p>
                <p><B>company: </B> 
                <p>name: ${data[2].company.name}</p>
                <p>catchPhrase: ${data[2].company.catchPhrase}</p>
                <p>bs: ${data[2].company.bs}</p>
                </p>

                <button id="btn3">close</button>
               
            </div>
        </div>
        
        
        
        `



    })

})
