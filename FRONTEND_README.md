# Pet Adoption System - React Frontend

## Install Dependencies
```bash
npm install
```

## Start Development Server
```bash
npm start
```

The app will open at http://localhost:3000

## Build for Production
```bash
npm run build
```

## Build Docker Image
```bash
docker build -t pet-adoption-frontend:latest -f Dockerfile .
docker run -p 3000:3000 pet-adoption-frontend:latest
```

## Features

- **Add Pet**: Form to add new pets to the adoption center
- **View Pets**: Browse all available and adopted pets
- **Adopt Pet**: Mark pets as adopted with one click
- **Edit Pet**: Update pet information
- **Delete Pet**: Remove pet listings
- **Filter**: View all pets, available pets, or adopted pets
- **Professional UI**: Modern responsive design with Bootstrap

## API Integration

The frontend communicates with the Spring Boot backend at `http://localhost:8080/api/pets`

## Technologies Used

- React 19
- Bootstrap 5
- Axios for API calls
- CSS3 with gradients and animations


Minor update for pull request

