import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import openai from "openai";

const app = express();