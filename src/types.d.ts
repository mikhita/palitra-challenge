export type Post = {
    body: string;
    id: number;
    title: string;
    userId: number;
};

export type Comment = {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
};

export type User = {
    address: {
        city: string;
        geo: {
            lat: number;
            lng: number;
        };
        street: string;
        suite: string;
        zipcode: number;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    id: number;
    name: string;
    phone: number;
    username: string;
    website: string;
}