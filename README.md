# Calendar Backend API

Backend API para una aplicación de calendario construida con Node.js, Express y MongoDB. Este proyecto implementa un sistema robusto de autenticación y está preparado para manejar eventos de calendario.

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator
- dotenv
- cors

## 🚀 Características Técnicas

### Arquitectura y Patrones de Diseño

- **Arquitectura MVC (Model-View-Controller)**

  - Separación clara de responsabilidades
  - Código modular y mantenible
  - Facilita la escalabilidad y el testing

- **Patrón Repository**

  - Abstracción de la capa de datos
  - Facilita el cambio de base de datos
  - Mejora la testabilidad

- **Middleware Pattern**
  - Validación de datos
  - Autenticación y autorización
  - Manejo de errores centralizado

### Tecnologías Principales

- **Node.js & Express**

  - Framework web rápido y minimalista
  - Manejo eficiente de rutas y middleware
  - Soporte para async/await

- **MongoDB & Mongoose**

  - Base de datos NoSQL para flexibilidad
  - ODM para modelado de datos
  - Validación a nivel de esquema

- **JWT (JSON Web Tokens)**
  - Autenticación stateless
  - Tokens seguros y renovables
  - Manejo de sesiones sin estado

### Seguridad

- **Encriptación de Contraseñas**

  - Uso de bcryptjs para hashing seguro
  - Salt automático para mayor seguridad
  - Protección contra ataques de fuerza bruta

- **Validación de Datos**

  - Express-validator para validación robusta
  - Sanitización de inputs
  - Prevención de inyección de datos

- **CORS**
  - Configuración segura de CORS
  - Control de acceso a recursos
  - Protección contra ataques cross-origin

### Buenas Prácticas Implementadas

1. **Clean Code**

   - Nombres descriptivos y significativos
   - Funciones pequeñas y con propósito único
   - Código autoexplicativo

2. **Error Handling**

   - Manejo centralizado de errores
   - Respuestas de error consistentes
   - Logging apropiado

3. **Environment Variables**

   - Configuración mediante variables de entorno
   - Separación de configuración y código
   - Seguridad mejorada

4. **Modularización**
   - Estructura de carpetas organizada
   - Módulos independientes y reutilizables
   - Fácil mantenimiento y escalabilidad

## 📁 Estructura del Proyecto

```
calendar-backend/
├── controllers/     # Lógica de negocio
├── models/         # Esquemas de MongoDB
├── routes/         # Definición de rutas
├── middlewares/    # Middlewares personalizados
├── helpers/        # Funciones auxiliares
├── database/       # Configuración de DB
└── public/         # Archivos estáticos
```

## 🔧 Instalación

1. Clonar el repositorio

```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias

```bash
npm install
```

3. Configurar variables de entorno

```bash
cp .env.example .env
```

4. Iniciar el servidor

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 📝 API Endpoints

### Autenticación

- `POST /api/auth/new` - Registro de usuario
- `POST /api/auth` - Login
- `GET /api/auth/renew` - Renovar token

## 🔐 Variables de Entorno

```
PORT=3000
DB_CNN=mongodb://localhost:27017/calendar
JWT_SECRET=your_jwt_secret
```

## 🚀 Próximas Características

- CRUD completo de eventos
- Validación de fechas y horarios
- Notificaciones
- Compartir eventos
- Integración con calendarios externos

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

Jorge Arias Argüelles

---

⭐️ Si te gustó el proyecto, no olvides darle una estrella
