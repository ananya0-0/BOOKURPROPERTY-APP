export const parseApiError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    const message = data?.message || 'Something went wrong';
    const errors = data?.errors || [];

    if (status === 401) return { message: 'Session expired. Please login again.', status };
    if (status === 400) return { message, errors, status };
    if (status === 429) return { message: 'Too many requests. Please wait.', status };

    return { message, errors, status };
  }

  if (error.request) return { message: 'Network error. Check your connection.' };
  return { message: error.message || 'Unexpected error occurred.' };
};