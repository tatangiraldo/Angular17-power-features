export interface IUsersResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        SingleUser[];
    support:     Support;
}

export interface IUserResponse{
    data: SingleUser,
    support: Support
}

export interface SingleUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}