

export function checkLoggedIn() {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null; 
  }
