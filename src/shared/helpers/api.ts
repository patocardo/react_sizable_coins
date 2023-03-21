import { apiCallProps } from './api.types'

/**
 * Makes an API call with the provided options
 * @async
 * @function
 * @param {Object} props - The options for the API call
 * @param {string} props.url - The URL to make the API call to
 * @param {string} [props.method='GET'] - The HTTP method to use for the API call
 * @param {any} [props.body=null] - The request body for the API call. Must be a value that can be passed to JSON.stringify or a File.
 * @param {string|null} [props.fileName=null] - The name of the file, if props.body is a File.
 * @param {boolean} [props.isFile=false] - Indicates whether props.body is a File or not.
 * @param {Object} [props.options={}] - Additional options to be passed to the fetch function
 * @returns {Promise<{ success: boolean, data?: Object, error?: string }>} 
 * A Promise that resolves with an object containing success status, data if successful or error if unsuccessful
 */
const apiCall = async (props: apiCallProps) => {
  try {
    const { 
      url,
      method = 'GET',
      body = null,
      fileName = null,
      isFile = false,
      options = {}
    } = props;

    const headers = {
      ...( options.headers || {} ),
      'accept': 'application/json',
      'Content-type': isFile ? 'multipart/form-data' : 'application/json',
    };
    const data = (() => {
      if (!body || method === 'GET') return null;
      if (!isFile) return JSON.stringify(body);
      if (!(body instanceof File)) return null;

      // prepare file
      const formData = new FormData();
      formData.append('file', body);
      formData.append('name', fileName || body.name);
      return formData;
    })();

    const response = await fetch(url, {
      ...options,
      headers,
      mode: 'cors',
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    return { success: true, data: responseData };
  } catch(err) {
    return {
      success: false,
      error: (err instanceof Error) ? err.message : String(err),
    };
  }
}

export { apiCall };
