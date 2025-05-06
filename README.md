# SLE Church

## Description

**Project Name:** Events Display Application for SLE Church (Frontend)

**Objective:** To efficiently fetch events from MySQL server to format and siaply them neatly on the frontend, for all responsive screens.

**Problem Solved:** Currently, church events being displayed are outdated and not responsive on mobile.

## Tech Stack

- **Frontend**: [Nextjs](https://nextjs.org/docs)
- **Backend**: [API](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- **Database**: [MySQL](https://dev.mysql.com/doc/)
- **Deployment**: [Vercel](https://vercel.com/docs)

## Installation & Setup

### Prerequisites

Before starting, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-started/get-docker/)
- **Node.js**: [Install Node.js](https://nodejs.org/)

## Getting Started

### Step 1: Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/DanielvTran/sle-church.git
cd sle-church
```

### Step 2: Build Docker Containers

Run the following command to build and start the services defined in docker-compose.yml:

```bash
docker-compose up --build
```

This will:

- Build the Docker images.
- Start the application services (Nextjs, Prisma).
- Expose ports as defined in docker-compose.yml (localhost:3000).

### Step 3: Access the Application

Once the containers are up and running, you can access the application via:

```bash
http://localhost:3000
```

### Step 4: Configure Environment Variables

Put .env file at root of project folder `sle-church`.

Contact `danieltran.softwaredev@gmail.com` for the .env content
