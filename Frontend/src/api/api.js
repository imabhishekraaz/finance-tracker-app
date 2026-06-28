export const handleLogin = async (email, password) => {

  try {
    const response = await fetch('http://localhost:4000/api/user/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      return { success: true }

    } else {
      return { success: false, message: data.message || "Invalid email or password" }

    }
  } catch (error) {
    return error.message
  }
};

export const getUserDetails = async () => {

  try {
    // Get the Token
    const token = localStorage.getItem('token');
    const response = await fetch('http:localhost/api/user/me', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      'Authorization': `Bearer ${token}`

    });

    const data = await response.json();
    console.log(data);
    return { success: response.ok, data }

  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
};
export const getUserTransection = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:4000/api/dashboard', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    // Check if the server responded with a 200-299 status code
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to fetch dashboard data"
      };
    }
    const data = await response.json();
    // Return this structure so your useEffect's "if (result.success)" logic works
    return {
      data
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  };
};

export const getIncome = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:4000/api/income/get', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: error.message
      }
    };
    const data = await response.json();
    return {
      data
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
};

export const getExpense = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:4000/api/expense/get', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: error.message
      }
    }
    const data = await response.json();
    return {
      data
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  };
};

