export async function getCategories() {
  const response = await fetch("http://localhost:9000/categories");
  const resp = await response.json();

  return resp;
}


export async function getDishes() {
  const response = await fetch("http://localhost:9000/dishes");
  const resp = await response.json();

  return resp;
}


export async function getDishesByCategory() {
 return await getDishes()
}

export async function editDish(dish,callBack){
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dish)
};
const response = await fetch('http://localhost:9000/dishes', requestOptions);
const resp = await response.json();
return resp;
}

