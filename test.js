function loadProductsFetch(){
  fetch('https://supersimplebackend.dev/products').then((response)=>{
    return response.json();
  }).then((productData)=>{
    console.log(productData);
  })
}
loadProductsFetch();