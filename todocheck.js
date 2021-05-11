const api_url = "https://jsonplaceholder.typicode.com/todos";

      async function getapi(api_url) {
    
       
        const response = await fetch(api_url);
        
       
        var data = await response.json();
        console.log(data);
        if (response) {
            hideloader();
        }
        show(data);
    }
    
    getapi(api_url);
      
    
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
    }
    
    function show(data) {
        let tab = 
            `<tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
             </tr>`;
        
        
        for (let r of data.list) {
            tab += `<tr> 
        <td>${r.UserId} </td>
        <td>${r.Id}</td>
        <td>${r.Title}</td> 
        <td>${r.Completed}</td>          
    </tr>`;
        }
        document.getElementById("tasks").innerHTML = tab;
    }