fetch('https://randomuser.me/api/?results=1')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
        response.json().then(function(data) {
        console.log(data.results[0].login.username);
            
        let markup = `
            <p class = "top">${data.results[0].name.first} ${data.results[0].name.last}</p>
           <div class="container">
            <div class="first">
             
             <ul><h1>The Basics</h1>
                <li>Name:${data.results[0].login.username}</li>
                <li>Github URL:${data.results[0].characters}</li>
                <li>Email:${data.results[0].email}</li>
                <li>DOB:${data.results[0].dob}</li>
                <li>Address:${data.results[0].location.street}</li>
            </ul>
            </div>
        <hr>
            <div class="second">
            <ul><h1>The Story</h1></ul>
 <img src =${data.results[0].picture.large}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris vulputate, molestie lectus ut, faucibus ante. Aliquam scelerisque convallis justo eget varius. Donec lobortis placerat massa quis accumsan. Nam ac tellus velit. Nulla iaculis sodales ligula, vehicula sagittis arcu mattis ac. In finibus interdum elit laoreet vehicula. Donec posuere laoreet molestie. Donec laoreet elementum dictum. Integer vitae diam interdum, commodo risus vitae, eleifend augue.</p>
            
           
           
            </div>
           </div>
         `

         document.body.innerHTML = markup;
    });
    }
)
        
        
        
    