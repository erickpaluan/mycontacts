# my-contacts-api

## 📌 Overview
Simple contact management application that allows users to create, edit, list and delete contacts.

## 🎯 Purpose
Practice fullstack fundamentals with CRUD operations, application structure and basic backend integration.

## 🛠️ Tech Stack
- JavaScript
- HTML
- CSS
- PostgreSQL
- Docker

## 📚 What this project demonstrates
- CRUD concepts
- Frontend data manipulation
- Basic backend and database integration
- Local development environment setup with Docker

## 🐳 Docker Setup

### 1️⃣ Create the PostgreSQL container
Run the command below to create and start the database container:

```bash
docker run --name pg \
  -e POSTGRES_USER=root \
  -e POSTGRES_PASSWORD=root \
  -p 5432:5432 \
  -d postgres
