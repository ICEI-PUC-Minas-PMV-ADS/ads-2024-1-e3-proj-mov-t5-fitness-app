export interface IAuthRefreshReqDto {
    jwtRefresh: string;
}

export interface IAuthRefreshResErrorDto {
    type: 'internal-server-error';
    isValid: false;
}

export type IAuthRefreshResDto = string;

export type IAuthRefreshResServiceDto = {
    accessToken: string;
    refreshToken: string;
    JWT: string;
};
