
    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface Support {
        url: string;
        text: string;
    }

    export interface UserResponseModel {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
        support: Support;
    }

    export interface CreateUserModel {
      name: string;
      job: string;
    }