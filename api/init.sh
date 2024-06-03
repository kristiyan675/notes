#!/bin/bash

# Define the PostgreSQL login credentials
# !! Update with personal credentials !!
PG_USER="postgres"
PG_PASSWORD="root"
PG_HOST="localhost"

# Define the name of the database to create
DATABASE_NAME="notes"
echo 'Executing'
# SQL statements to create the database and table
SQL_CREATE_DATABASE="CREATE DATABASE $DATABASE_NAME;"
SQL_CREATE_NOTES_TABLE="CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"

# dummy data
SQL_INSERT_NOTE1="INSERT INTO notes (title, content) VALUES ('First Note', 'This is the content of the first note.');"
SQL_INSERT_NOTE2="INSERT INTO notes (title, content) VALUES ('Second Note', 'This is the content of the Second note.');"
SQL_INSERT_NOTE3="INSERT INTO notes (title, content) VALUES ('Third Note', 'This is the content of the Third note.');"
SQL_INSERT_NOTE4="INSERT INTO notes (title, content) VALUES ('Fourth Note', 'This is the content of the Fourth note.');"


# Function to execute SQL commands using psql
execute_sql() {
    PGPASSWORD=$PG_PASSWORD psql -U $PG_USER -h $PG_HOST -d $1 -c "$2"
}

# Create the database
# Make sure you do not have alreayd existing database with the same name
echo "Creating database..."
execute_sql "postgres" "$SQL_CREATE_DATABASE"

# Create the table in the new database
echo "Creating table..."
execute_sql "$DATABASE_NAME" "$SQL_CREATE_NOTES_TABLE"

# Tables were created successfully
echo "Database and table created successfully!"

echo "Inserting notes..."
execute_sql "$DATABASE_NAME" "$SQL_INSERT_NOTE1"
execute_sql "$DATABASE_NAME" "$SQL_INSERT_NOTE2"
execute_sql "$DATABASE_NAME" "$SQL_INSERT_NOTE3"
execute_sql "$DATABASE_NAME" "$SQL_INSERT_NOTE4"
echo "Successfully inserted fourth new test notes."

# Start the server
node ./server.js
