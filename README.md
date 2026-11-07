# EstateX

EstateX is an earlier real-estate application prototype in this account. The repository currently contains a React/Vite frontend and a Python dependency list, but the backend source is **not available in this checkout**.

> **Status: incomplete prototype.** For the more complete real-estate project in this portfolio, see [EstateX Light](https://github.com/Asjadpathan31/EstateX-light).

## Current repository contents

- `frontend/` — React 19 application built with Vite.
- `requirements.txt` — Python/Flask-related dependencies from the earlier backend setup.
- `run.py` — expected Flask entry point; it imports `app` and `db` from an `app` package that is not present in the current checkout.
- `backend` — currently represented as a Git submodule entry without a usable submodule URL/source in this repository.

## Run the frontend

```bash
git clone https://github.com/Asjadpathan31/EstateX.git
cd EstateX/frontend
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Backend status

The backend cannot currently be started from this repository as checked in: the required `app` package is missing, and the `backend` Git submodule does not provide a resolvable source URL. The root `run.py` therefore should not be treated as a working server entry point.

This README intentionally does not claim that authentication, property CRUD, or a production-ready full-stack flow is currently operational. Those claims need to be revalidated after the backend source is restored and the application is run end to end.

## Tech visible in the repository

- React
- Vite
- JavaScript
- Tailwind CSS
- Python / Flask dependency setup (backend source unavailable)

## Author

Asjad Pathan · [GitHub](https://github.com/Asjadpathan31) · [Portfolio](https://asjadpathan31.github.io/portfolio/)
