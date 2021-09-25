import nock from "nock";

nock("https://api.nestjsx-crud.refine.dev:443", { encodedQueryParams: true })
    .get("/users")
    .query({})
    .reply(
        200,
        [
            {
                id: "35a97005-ffe9-4867-9108-58c00d8ebfa8",
                firstName: "Nolan",
                lastName: "Gottlieb",
                email: "nolan85@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.033Z",
                updatedAt: "2021-06-21T12:16:36.033Z",
            },
            {
                id: "fbb0df89-4474-46f4-97ae-ba97b1ac549a",
                firstName: "Bart",
                lastName: "Roberts",
                email: "bart_Roberts58@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.098Z",
                updatedAt: "2021-06-21T12:16:36.098Z",
            },
            {
                id: "5d12e4fc-2fc9-4323-ac93-f93b3f308b9a",
                firstName: "Bobbie",
                lastName: "Crooks",
                email: "bobbie.Crooks32@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.205Z",
                updatedAt: "2021-06-21T12:16:36.205Z",
            },
            {
                id: "0cad0ad8-e0d0-4bb0-b94c-3179e0ea7a4e",
                firstName: "Aaron",
                lastName: "Koss",
                email: "aaron64@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.329Z",
                updatedAt: "2021-06-21T12:16:36.329Z",
            },
            {
                id: "af414ac3-51d9-42b6-8ee7-040df85aba41",
                firstName: "Hardy",
                lastName: "Wolf",
                email: "hardy.Wolf23@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.495Z",
                updatedAt: "2021-06-21T12:16:36.495Z",
            },
            {
                id: "98677991-daba-40ee-91c8-2369942e415f",
                firstName: "Katlynn",
                lastName: "Casper",
                email: "katlynn_Casper5@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.723Z",
                updatedAt: "2021-06-21T12:16:36.723Z",
            },
            {
                id: "20068b8c-4227-41d1-a8bf-d53e2d7010b4",
                firstName: "Paula",
                lastName: "Barton",
                email: "paula_Barton@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.982Z",
                updatedAt: "2021-06-21T12:16:36.982Z",
            },
            {
                id: "17cd0be0-84ce-467f-8cb4-5fcd51b34f93",
                firstName: "Bertram",
                lastName: "Littel",
                email: "bertram.Littel12@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:37.327Z",
                updatedAt: "2021-06-21T12:16:37.327Z",
            },
            {
                id: "bb731ec1-18bd-49e4-9193-57717fb3f102",
                firstName: "Austyn",
                lastName: "Lynch",
                email: "austyn.Lynch96@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:37.840Z",
                updatedAt: "2021-06-21T12:16:37.840Z",
            },
            {
                id: "8864302b-172b-4d49-8dab-b04b3cba119d",
                firstName: "Fern",
                lastName: "Farrell",
                email: "fern_Farrell@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:38.312Z",
                updatedAt: "2021-06-21T12:16:38.312Z",
            },
            {
                id: "0396774e-c41f-41a7-98db-39e0a709ef72",
                firstName: "Margot",
                lastName: "Ritchie",
                email: "margot.Ritchie@yahoo.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.974Z",
                updatedAt: "2021-06-21T12:16:38.974Z",
            },
            {
                id: "420c5ea4-e493-4c1c-b0e3-ed4c8880bb7c",
                firstName: "Makenna",
                lastName: "Gislason",
                email: "makenna41@gmail.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.979Z",
                updatedAt: "2021-06-21T12:16:38.979Z",
            },
            {
                id: "b83f5d5a-a0ac-4178-943c-35e654841ffb",
                firstName: "Christopher",
                lastName: "Schoen",
                email: "christopher.Schoen56@hotmail.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.990Z",
                updatedAt: "2021-06-21T12:16:38.990Z",
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Mon, 21 Jun 2021 12:17:11 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "2781",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Access-Control-Allow-Origin",
            "*",
            "ETag",
            'W/"add-DvD0TqRb+HHPTGvK1zGsceqqHJw"',
        ],
    );

nock("https://api.nestjsx-crud.refine.dev:443", { encodedQueryParams: true })
    .get("/users")
    .query({ "filter%5B0%5D": "email%7C%7C%24eq%7C%7Cnolan85%40hotmail.com" })
    .reply(
        200,
        [
            {
                id: "35a97005-ffe9-4867-9108-58c00d8ebfa8",
                firstName: "Nolan",
                lastName: "Gottlieb",
                email: "nolan85@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.033Z",
                updatedAt: "2021-06-21T12:16:36.033Z",
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Mon, 21 Jun 2021 12:18:12 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "211",
            "Connection",
            "close",
            "X-Powered-By",
            "Express",
            "Access-Control-Allow-Origin",
            "*",
            "ETag",
            'W/"d3-/cn/pgneUnCIQNP0lCSdBnxNS7c"',
        ],
    );

nock("https://api.nestjsx-crud.refine.dev:443", { encodedQueryParams: true })
    .get("/users")
    .query({ "sort%5B0%5D": "id%2CASC" })
    .reply(
        200,
        [
            {
                id: "0396774e-c41f-41a7-98db-39e0a709ef72",
                firstName: "Margot",
                lastName: "Ritchie",
                email: "margot.Ritchie@yahoo.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.974Z",
                updatedAt: "2021-06-21T12:16:38.974Z",
            },
            {
                id: "0cad0ad8-e0d0-4bb0-b94c-3179e0ea7a4e",
                firstName: "Aaron",
                lastName: "Koss",
                email: "aaron64@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.329Z",
                updatedAt: "2021-06-21T12:16:36.329Z",
            },
            {
                id: "17cd0be0-84ce-467f-8cb4-5fcd51b34f93",
                firstName: "Bertram",
                lastName: "Littel",
                email: "bertram.Littel12@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:37.327Z",
                updatedAt: "2021-06-21T12:16:37.327Z",
            },
            {
                id: "20068b8c-4227-41d1-a8bf-d53e2d7010b4",
                firstName: "Paula",
                lastName: "Barton",
                email: "paula_Barton@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.982Z",
                updatedAt: "2021-06-21T12:16:36.982Z",
            },
            {
                id: "35a97005-ffe9-4867-9108-58c00d8ebfa8",
                firstName: "Nolan",
                lastName: "Gottlieb",
                email: "nolan85@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.033Z",
                updatedAt: "2021-06-21T12:16:36.033Z",
            },
            {
                id: "420c5ea4-e493-4c1c-b0e3-ed4c8880bb7c",
                firstName: "Makenna",
                lastName: "Gislason",
                email: "makenna41@gmail.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.979Z",
                updatedAt: "2021-06-21T12:16:38.979Z",
            },
            {
                id: "5d12e4fc-2fc9-4323-ac93-f93b3f308b9a",
                firstName: "Bobbie",
                lastName: "Crooks",
                email: "bobbie.Crooks32@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.205Z",
                updatedAt: "2021-06-21T12:16:36.205Z",
            },
            {
                id: "8864302b-172b-4d49-8dab-b04b3cba119d",
                firstName: "Fern",
                lastName: "Farrell",
                email: "fern_Farrell@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:38.312Z",
                updatedAt: "2021-06-21T12:16:38.312Z",
            },
            {
                id: "98677991-daba-40ee-91c8-2369942e415f",
                firstName: "Katlynn",
                lastName: "Casper",
                email: "katlynn_Casper5@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.723Z",
                updatedAt: "2021-06-21T12:16:36.723Z",
            },
            {
                id: "af414ac3-51d9-42b6-8ee7-040df85aba41",
                firstName: "Hardy",
                lastName: "Wolf",
                email: "hardy.Wolf23@yahoo.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.495Z",
                updatedAt: "2021-06-21T12:16:36.495Z",
            },
            {
                id: "b83f5d5a-a0ac-4178-943c-35e654841ffb",
                firstName: "Christopher",
                lastName: "Schoen",
                email: "christopher.Schoen56@hotmail.com",
                status: false,
                createdAt: "2021-06-21T12:16:38.990Z",
                updatedAt: "2021-06-21T12:16:38.990Z",
            },
            {
                id: "bb731ec1-18bd-49e4-9193-57717fb3f102",
                firstName: "Austyn",
                lastName: "Lynch",
                email: "austyn.Lynch96@gmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:37.840Z",
                updatedAt: "2021-06-21T12:16:37.840Z",
            },
            {
                id: "fbb0df89-4474-46f4-97ae-ba97b1ac549a",
                firstName: "Bart",
                lastName: "Roberts",
                email: "bart_Roberts58@hotmail.com",
                status: true,
                createdAt: "2021-06-21T12:16:36.098Z",
                updatedAt: "2021-06-21T12:16:36.098Z",
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Mon, 21 Jun 2021 12:19:07 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "2781",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Access-Control-Allow-Origin",
            "*",
            "ETag",
            'W/"add-KYjyf3xNiYvtZqYvamM9UkdSUtA"',
        ],
    );

nock("https://api.nestjsx-crud.refine.dev:443", { encodedQueryParams: true })
    .post("/users", {
        firstName: "test",
        lastName: "test",
        email: "test@mail.com",
        status: true,
    })
    .reply(
        201,
        {
            id: "44e3c8e9-d95a-4423-bf9a-c40407e059af",
            firstName: "test",
            lastName: "test",
            email: "test@mail.com",
            status: true,
            createdAt: "2021-06-21T12:20:05.530Z",
            updatedAt: "2021-06-21T12:20:05.530Z",
        },
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Mon, 21 Jun 2021 12:20:05 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "198",
            "Connection",
            "close",
            "X-Powered-By",
            "Express",
            "Access-Control-Allow-Origin",
            "*",
            "ETag",
            'W/"c6-4unCtz5BG8f5pEq8IfSwJznEo+w"',
        ],
    );
