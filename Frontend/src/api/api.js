var url = 'https://backend-u7i7.onrender.com';

export const handleLogin = async (email, password) => {

  try {
    const response = await fetch(`${url}}/api/user/login`, {
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
    const response = await fetch(`${url}}/api/user/me`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    return {
      success: true,
      data
    }

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

    const response = await fetch(`${url}}/api/dashboard`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    // If the Token is expire or Invalid
    if (response.status === 401) {
      localStorage.removeItem('token');

      window.location.replace('/login');
      return null;
    }

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
    const response = await fetch(`${url}}/api/income/get`, {
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
    const response = await fetch(`${url}}/api/expense/get`, {
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



/**
 * * Add expense
 * * Method: "POST",
 *- Request at - /api/income/add
 */

export const addIncome = async (amount, date, description, category) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${url}}/api/income/add`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, date, description, category })
    });
    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        error
      }
    }
    const data = await response.json();
    return {
      success: true,
      data
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  };
};

/**
 * add income
 * - METHOD - "POST"
 * - URL - /api/expense/add
 */

export const addExpense = async (amount, description, date, category) => {

  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${url}}/api/expense/add`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, description, date, category })
    })
    if (!response.ok) {
      const errorDate = await response.json();
      return {
        success: false,
        errorDate
      }
    };
    // if data come with any error the received the data
    const ExpenseData = await response.json();
    return {
      success: true,
      ExpenseData
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

/**
 * - POST
 * - URL - /api/user/register
 */
// Register a New User 
export const userRegister = async (name, email, password, phoneNumber) => {
  try {
    const response = await fetch(`${url}}/api/user/register`, {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber
      })
    })

    // if response if not valid
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        errorData
      }
    };
    
    
    // if response is valid then store it in the variable
    const data = await response.json();
    // save the token 
    const token = data.token;
    localStorage.setItem('token', token);

    return {
      success: true,
      data
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
};