-- Migration: Remove images column from projects table
-- Run this SQL script in your Supabase SQL Editor

ALTER TABLE projects 
DROP COLUMN IF EXISTS images;

