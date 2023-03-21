export interface apiCallProps {
  url: string;
  body?: any;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';
  isFile?: boolean;
  fileName?: string;
  options?: any; 
}

export type apiResult = {
  success: boolean;
  data?: any; // to be overwritten in each 
  error?: string;
}
