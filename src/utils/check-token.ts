import { getCookie, setCookie, deleteBearer } from "./cookies";
import { getRefreshTokenRequest } from "./burger-api";

export const checkToken = async (): Promise<string | undefined> => {
  let accessToken: string | undefined;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
      .then((res: any) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie("accessToken");
  }

  return accessToken;
};
