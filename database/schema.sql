-- ========================================================
-- AEGIS OVERSEAS EDUCATION PLATFORM DATABASE SCHEMA
-- PostgreSQL & SQLite Compatible Dialect
-- ========================================================

-- Destinations Table
CREATE TABLE IF NOT EXISTS destinations (
    id VARCHAR(50) PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    hero_title VARCHAR(255) NOT NULL,
    tagline TEXT,
    emotional_phrase VARCHAR(255),
    short_description TEXT,
    full_description TEXT,
    flag_emoji VARCHAR(10),
    image_url TEXT,
    popular_universities_count INT DEFAULT 0,
    average_tuition VARCHAR(100),
    post_study_work_visa VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Universities Table
CREATE TABLE IF NOT EXISTS universities (
    id VARCHAR(50) PRIMARY KEY,
    destination_id VARCHAR(50) REFERENCES destinations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country_name VARCHAR(100) NOT NULL,
    ranking VARCHAR(50),
    image_url TEXT,
    logo_url TEXT,
    tuition_fee_range VARCHAR(100),
    ielts_requirement VARCHAR(50),
    scholarships_available BOOLEAN DEFAULT TRUE,
    featured BOOLEAN DEFAULT FALSE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(50) PRIMARY KEY,
    university_id VARCHAR(50) REFERENCES universities(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    level VARCHAR(50) NOT NULL, -- Undergraduate, Postgraduate, Doctorate
    discipline VARCHAR(100) NOT NULL,
    duration VARCHAR(50),
    annual_fee VARCHAR(100),
    intake VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consultations / Leads Table
CREATE TABLE IF NOT EXISTS consultations (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    destination_slug VARCHAR(50),
    study_level VARCHAR(50),
    field_of_study VARCHAR(100),
    academic_score VARCHAR(50),
    english_test VARCHAR(50),
    budget_range VARCHAR(50),
    preferred_intake VARCHAR(50),
    preferred_office VARCHAR(50) DEFAULT 'Nellore',
    message TEXT,
    status VARCHAR(50) DEFAULT 'New', -- New, Contacted, In Progress, Converted, Closed
    assigned_counselor VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student Reviews Table
CREATE TABLE IF NOT EXISTS student_reviews (
    id VARCHAR(50) PRIMARY KEY,
    student_name VARCHAR(150) NOT NULL,
    student_location VARCHAR(150),
    destination_country VARCHAR(100),
    university_name VARCHAR(255),
    course_name VARCHAR(255),
    rating INT DEFAULT 5,
    quote TEXT NOT NULL,
    avatar_url TEXT,
    counselor_mentioned VARCHAR(150),
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Coaching Inquiries Table
CREATE TABLE IF NOT EXISTS coaching_inquiries (
    id VARCHAR(50) PRIMARY KEY,
    student_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    test_type VARCHAR(50) NOT NULL, -- IELTS, PTE, TOEFL, GRE, GMAT, etc.
    preferred_mode VARCHAR(50) DEFAULT 'Classroom', -- Classroom, Online Live
    target_score VARCHAR(50),
    status VARCHAR(50) DEFAULT 'New',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'counselor', -- admin, senior_counselor, counselor
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for fast search
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at);
CREATE INDEX IF NOT EXISTS idx_universities_destination ON universities(destination_id);
