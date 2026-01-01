-- Migration: Add gallery column to projects table
-- Run this SQL script in your Supabase SQL Editor

ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS gallery TEXT[] DEFAULT '{}';

