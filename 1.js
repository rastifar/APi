function getApi(){
    const fetchResult = fetch('https://fakestoreapi.com/products')
    return fetchResult.then(response => response.json())
}

  getApi().then((data) => {
    for (let i of data) {
        console.log(i)
     showData(i)
    }
  });

  function showData(i){
    $(document).ready(function(){
    $("#tbody").append(` <tr>
    <th class="id">${i.id}</th>
    <td class="title">${i.title}</td>   
    <td class="title">${i.price}</td>
    <td class="image " ><img src=${i.image} style="width:25px;height:25px"></td>
  </tr> `)
})
}




