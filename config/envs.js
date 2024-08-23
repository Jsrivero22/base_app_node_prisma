import dotenv from 'dotenv';

import env from 'env-var';

dotenv.config();

export const envs = {

    PORT        : env.get('PORT').required().asPortNumber(),

    DB_TYPE     : env.get('DB_TYPE').required().asString(),

    POSTGRESQL_HOST     : env.get('POSTGRESQL_HOST').required().asUrlString(),
    POSTGRESQL_USER     : env.get('POSTGRESQL_USER').required().asString(),
    POSTGRESQL_PASSWORD : env.get('POSTGRESQL_PASSWORD').required().asString(),
    POSTGRESQL_DB       : env.get('POSTGRESQL_DB').required().asString(),
    POSTGRESQL_PORT     : env.get('POSTGRESQL_PORT').required().asPortNumber(),
}