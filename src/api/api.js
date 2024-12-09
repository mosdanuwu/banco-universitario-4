const API_URL = 'http://localhost:3000';


export const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al realizar la solicitud');
    }
    return response.json();
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error; 
  }
};

export const getUsers = async () => {
  return fetchWithErrorHandling(`${API_URL}/users`);
};

export const loginUser = async (credentials) => { 
    const myHeaders = new Headers(); 
    myHeaders.append("Accept-Language", "es"); 
    const requestOptions = { 
        method: "POST", 
        headers: myHeaders, 
        body: JSON.stringify(credentials), 
        redirect: "follow" 
    }; 
        return fetchWithErrorHandling(`${API_URL}/v1/public/client/user/login`, requestOptions); 
}

export const registerUser = async (userData) => { 
  const myHeaders = new Headers(); 
  myHeaders.append("Accept-Language", "es"); 
  const requestOptions = { 
    method: "POST", 
    headers: myHeaders, 
    body: JSON.stringify(userData), 
    redirect: "follow" 
  };
return fetchWithErrorHandling(`${API_URL}/v1/public/client/user/register`, requestOptions); 
};

export const getBalance = async (token) => { 
  const myHeaders = new Headers(); 
  myHeaders.append("Accept-Language", "es"); 
  myHeaders.append("Authorization", `Bearer ${token}`); 
  const requestOptions = { method: "GET", headers: myHeaders, redirect: "follow" }; 
  return fetchWithErrorHandling(`${API_URL}/v1/client/user/balance`, requestOptions); 
}; 

export const getWhoAmI = async (token) =>{

  const myHeaders = new Headers();
  myHeaders.append("Accept-Language", "es");
  myHeaders.append("Authorization", `Bearer ${token}`); 
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  return fetchWithErrorHandling(`${API_URL}/v1/client/user/whoami`, requestOptions); 
};

export const getMovements = async (token, currentPage, itemsPerPage, multiplier) =>{

  const myHeaders = new Headers();
  myHeaders.append("Accept-Language", "es");
  myHeaders.append("Authorization", `Bearer ${token}`); 
  const params = new URLSearchParams();
  params.append("page", currentPage);
  params.append("page_size", itemsPerPage);

  // Solo agregar el parámetro multiplier si su valor es distinto a 0
  if (multiplier !== 0) {
    params.append("multiplier", multiplier);
  }
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const url = `${API_URL}/v1/client/movement?${params.toString()}`;
  return fetchWithErrorHandling(url, requestOptions); 

 
};

