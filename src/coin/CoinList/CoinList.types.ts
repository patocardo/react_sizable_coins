import type { apiResult } from "../../shared/helpers/api.types";

export type coinListElementType = {
  id: string;
  symbol: string;
  name: string;
}

export type coinListApiResult = apiResult & {
  data: coinListElementType[];
}
