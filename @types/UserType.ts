import express from 'express';

namespace Users{
    export interface User {
        id: string;
        username : string;
        password : string;
    }

    export interface Request extends express.Request{
        body: {
        username : string;
        password : string;
        }
    }
}

export default Users;