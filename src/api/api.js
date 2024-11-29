const API_URL = '/api'


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
    throw error; // Vuelve a lanzar el error para manejarlo en el componente
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