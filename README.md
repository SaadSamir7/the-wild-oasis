# 🏨 The Wild Oasis - Hotel Management System

A modern, full-featured hotel management application built with React and Supabase. The Wild Oasis provides hotel staff with comprehensive tools to manage cabins, bookings, guests, and daily operations.

## 🚀 Live Demo

**[View Live Application](https://the-wild-oasis-chi-three.vercel.app/)**

![The Wild Oasis Dashboard](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)

## 🌟 Features

### 🏠 **Dashboard & Analytics**

- Real-time statistics and KPIs
- Sales charts and occupancy rates
- Recent bookings and stays overview
- Today's activity monitoring

### 🏡 **Cabin Management**

- Add, edit, and delete cabins
- Upload cabin images
- Set pricing and capacity
- Apply discounts and special offers
- Filter and sort cabin listings

### 📅 **Booking System**

- Comprehensive booking management
- Guest check-in and check-out
- Booking status tracking (unconfirmed, checked-in, checked-out)
- Payment status monitoring
- Special requests and observations
- Breakfast add-on management

### 👥 **Guest Management**

- Guest profiles and contact information
- Booking history tracking
- Special dietary requirements
- Guest preferences and notes

### ⚙️ **Settings & Configuration**

- Hotel-wide settings management
- Booking length constraints
- Breakfast pricing
- Maximum guests per booking
- Customizable business rules

### 👤 **User Authentication & Management**

- Secure user authentication with Supabase Auth
- User profile management
- Password updates
- Role-based access control
- Account settings

### 🌙 **User Experience**

- Dark/Light mode toggle
- Responsive design for all devices
- Intuitive navigation
- Real-time notifications
- Error handling and validation

## 🛠️ Tech Stack

- **Frontend**: React 19+ with Vite
- **Backend**: Supabase (PostgreSQL database + Auth)
- **Styling**: Styled Components
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Icons**: React Icons (Heroicons)
- **Date Handling**: date-fns
- **Notifications**: React Hot Toast

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- A Supabase account and project

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Supabase**

   - Create a new project at [supabase.com](https://supabase.com)
   - Update the Supabase URL and anon key in `src/services/supabase.js`
   - Set up the database schema (see [Database Setup](#database-setup))

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🗄️ Database Setup

The application requires the following Supabase tables:

### Core Tables

- **cabins**: Cabin information (name, capacity, price, images)
- **guests**: Guest profiles and contact information
- **bookings**: Booking records and status
- **settings**: Application-wide configuration

### Required Columns

**cabins**

```sql
- id (int, primary key)
- name (text)
- maxCapacity (int)
- regularPrice (real)
- discount (real)
- description (text)
- image (text)
```

**bookings**

```sql
- id (int, primary key)
- created_at (timestamp)
- startDate (date)
- endDate (date)
- numNights (int)
- numGuests (int)
- cabinPrice (real)
- extrasPrice (real)
- totalPrice (real)
- status (text)
- hasBreakfast (boolean)
- isPaid (boolean)
- observations (text)
- cabinId (int, foreign key)
- guestId (int, foreign key)
```

**guests**

```sql
- id (int, primary key)
- fullName (text)
- email (text)
- nationalID (text)
- nationality (text)
- countryFlag (text)
```

**settings**

```sql
- id (int, primary key)
- minBookingLength (int)
- maxBookingLength (int)
- maxGuestsPerBooking (int)
- breakfastPrice (real)
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── contexts/            # React contexts (Dark Mode)
├── features/            # Feature-based modules
│   ├── authentication/ # Login, signup, user management
│   ├── bookings/       # Booking management
│   ├── cabins/         # Cabin management
│   ├── check-in-out/   # Check-in/out processes
│   ├── dashboard/      # Dashboard and analytics
│   └── settings/       # Application settings
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── services/           # API services and Supabase config
├── styles/             # Global styles
├── ui/                 # UI components and layout
└── utils/              # Utility functions and constants
```

## 🔐 Authentication

The app uses Supabase Authentication with the following features:

- **Email/Password Authentication**: Secure login system
- **Protected Routes**: Authenticated access to main application
- **User Management**: Profile updates and password changes
- **Session Management**: Automatic session handling

### Default Access

- Create user accounts through the signup form
- All authenticated users have full access to hotel management features

## 📊 Key Features Explained

### Dashboard Analytics

The dashboard provides real-time insights including:

- Total bookings and revenue
- Check-in statistics
- Occupancy rates
- Sales trends over time
- Duration of stays analysis

### Booking Workflow

1. **Create Booking**: Add new reservations with guest and cabin details
2. **Manage Status**: Track booking through unconfirmed → checked-in → checked-out
3. **Payment Tracking**: Monitor payment status and handle on-arrival payments
4. **Add Services**: Include breakfast and other extras
5. **Special Requests**: Handle guest observations and special needs

### Cabin Operations

- **Visual Management**: Upload and manage cabin photos
- **Dynamic Pricing**: Set base prices and seasonal discounts
- **Capacity Planning**: Define maximum occupancy per cabin
- **Availability**: Real-time cabin availability tracking

## 🚀 Deployment

The project is configured for easy deployment on Netlify:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**

   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - The `netlify.toml` file handles SPA routing

3. **Environment Variables**
   Set your Supabase credentials in Netlify's environment settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Backend powered by [Supabase](https://supabase.com/)
- UI components styled with [Styled Components](https://styled-components.com/)
- Icons by [Heroicons](https://heroicons.com/)

---

**The Wild Oasis** - Simplifying hotel management, one booking at a time. 🏨✨+ Vite
